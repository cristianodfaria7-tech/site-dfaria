/* D'Faria — tratamento automático de fotos (no navegador, antes de subir).
   Só ajustes GLOBAIS de aparência, como na edição básica de um fotógrafo:
   níveis (preto/branco), balanço de branco, exposição dos tons médios, vivacidade e nitidez leve.
   NÃO usa IA, não muda rostos, pratos nem objetos: a mesma correção vale para a foto inteira.
   Uso: const r = await DfFoto.preparar(file, { tratar: true }) -> { blob, largura, altura, url, tratada }
*/
(function (raiz) {
  'use strict';
  var LADO_MAX = 1920;     // maior lado da foto no site
  var QUALIDADE = 0.85;    // WebP

  function limitar(v, a, b) { return v < a ? a : v > b ? b : v; }

  async function abrir(file) {
    try { return await createImageBitmap(file, { imageOrientation: 'from-image' }); }
    catch (e) {
      // alguns navegadores não abrem direto: usa <img>
      var url = URL.createObjectURL(file);
      try {
        var img = await new Promise(function (ok, erro) { var i = new Image(); i.onload = function () { ok(i); }; i.onerror = erro; i.src = url; });
        return img;
      } finally { setTimeout(function () { URL.revokeObjectURL(url); }, 1000); }
    }
  }

  function desenhar(fonte) {
    var w = fonte.width || fonte.naturalWidth, h = fonte.height || fonte.naturalHeight;
    var esc = Math.min(1, LADO_MAX / Math.max(w, h));
    var c = document.createElement('canvas');
    c.width = Math.round(w * esc); c.height = Math.round(h * esc);
    var g = c.getContext('2d', { willReadFrequently: true });
    g.imageSmoothingQuality = 'high';
    g.drawImage(fonte, 0, 0, c.width, c.height);
    return c;
  }

  // Analisa a foto e monta as correções (moderadas e com limites, para nunca "estragar")
  function analisar(d) {
    var hist = new Uint32Array(256), sr = 0, sg = 0, sb = 0, n = 0, passo = Math.max(1, Math.floor(d.length / 4 / 250000));
    for (var i = 0; i < d.length; i += 4 * passo) {
      var r = d[i], g = d[i + 1], b = d[i + 2];
      var l = (r * 0.2126 + g * 0.7152 + b * 0.0722) | 0;
      hist[l]++;
      if (l > 20 && l < 235) { sr += r; sg += g; sb += b; n++; } // ignora pretos/brancos puros no balanço
    }
    var total = 0; for (var k = 0; k < 256; k++) total += hist[k];
    function pct(p) { var alvo = total * p, s = 0; for (var k = 0; k < 256; k++) { s += hist[k]; if (s >= alvo) return k; } return 255; }
    var preto = pct(0.005), branco = pct(0.995);
    // níveis: estica só até um limite (ganho máx 1,45x; corte máx 28 no preto, 25 no branco)
    preto = Math.min(preto, 28); branco = Math.max(branco, 230);
    if (branco - preto < 120) { preto = 0; branco = 255; }
    // balanço de branco "mundo cinza", aplicado pela metade e limitado (mantém o clima da foto)
    var mr = n ? sr / n : 128, mg = n ? sg / n : 128, mb = n ? sb / n : 128, cinza = (mr + mg + mb) / 3;
    // (suave: tira só o excesso de amarelo/azul da luz do salão, mantém o clima quente das luzes)
    var wb = [mr, mg, mb].map(function (m) { return limitar(1 + ((cinza / Math.max(m, 1)) - 1) * 0.3, 0.95, 1.05); });
    // exposição dos tons médios: aproxima a média de luz de 0,45 (clareia foto escura, segura foto estourada)
    // expoente < 1 clareia, > 1 escurece; foto noturna não vira "dia": no máximo 0,72
    var media = 0; for (var k2 = 0; k2 < 256; k2++) media += k2 * hist[k2]; media = media / total / 255;
    var gama = limitar(Math.log(0.45) / Math.log(limitar(media, 0.05, 0.95)), 0.72, 1.15);
    return { preto: preto, branco: branco, wb: wb, gama: gama };
  }

  function aplicar(c, a) {
    var g = c.getContext('2d', { willReadFrequently: true });
    var img = g.getImageData(0, 0, c.width, c.height);
    tratarPixels(img.data, c.width, c.height, a);
    g.putImageData(img, 0, 0);
  }

  // O tratamento em si, sobre os pixels RGBA (o mesmo código roda no painel e nos testes)
  function tratarPixels(d, w, h, a) {
    a = a || analisar(d);
    // tabela de tons por canal (níveis + balanço + exposição)
    var lut = [new Uint8ClampedArray(256), new Uint8ClampedArray(256), new Uint8ClampedArray(256)];
    for (var ch = 0; ch < 3; ch++) for (var v = 0; v < 256; v++) {
      var x = limitar((v * a.wb[ch] - a.preto) / (a.branco - a.preto), 0, 1);
      lut[ch][v] = Math.round(Math.pow(x, a.gama) * 255);
    }
    for (var i = 0; i < d.length; i += 4) {
      var r = lut[0][d[i]], gg = lut[1][d[i + 1]], b = lut[2][d[i + 2]];
      // vivacidade: realça mais as cores apagadas, quase nada as já fortes (pele não fica laranja)
      var mx = Math.max(r, gg, b), mn = Math.min(r, gg, b), sat = mx ? (mx - mn) / mx : 0;
      var f = 0.14 * (1 - sat), med = (r + gg + b) / 3;
      d[i] = limitar(r + (r - med) * f, 0, 255); d[i + 1] = limitar(gg + (gg - med) * f, 0, 255); d[i + 2] = limitar(b + (b - med) * f, 0, 255);
    }
    nitidez(d, w, h, 0.28);
    return a;
  }

  // nitidez leve (máscara de desfoque), no próprio array
  function nitidez(d, w, h, forca) {
    var s = new Uint8ClampedArray(d), o = d;
    for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) {
      var i = (y * w + x) * 4;
      if (x === 0 || y === 0 || x === w - 1 || y === h - 1) { o[i] = s[i]; o[i + 1] = s[i + 1]; o[i + 2] = s[i + 2]; o[i + 3] = 255; continue; }
      for (var ch = 0; ch < 3; ch++) {
        var k = i + ch;
        var borr = (s[k - 4] + s[k + 4] + s[k - w * 4] + s[k + w * 4] + s[k] * 4) / 8;
        o[k] = limitar(s[k] + (s[k] - borr) * forca * 2, 0, 255);
      }
    }
  }

  function paraBlob(c) {
    return new Promise(function (ok) {
      c.toBlob(function (b) {
        if (b && b.type === 'image/webp') return ok(b);
        c.toBlob(function (j) { ok(j); }, 'image/jpeg', 0.88); // Safari antigo não gera WebP
      }, 'image/webp', QUALIDADE);
    });
  }

  async function preparar(file, opcoes) {
    opcoes = opcoes || {};
    var fonte = await abrir(file);
    var c = desenhar(fonte);
    if (fonte.close) fonte.close();
    var tratada = opcoes.tratar !== false;
    if (tratada) aplicar(c, analisar(c.getContext('2d').getImageData(0, 0, c.width, c.height).data));
    var blob = await paraBlob(c);
    return { blob: blob, largura: c.width, altura: c.height, url: URL.createObjectURL(blob), tratada: tratada, tipo: blob.type };
  }

  var api = { preparar: preparar, tratarPixels: tratarPixels, analisar: analisar };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else raiz.DfFoto = api;
})(typeof window !== 'undefined' ? window : this);
