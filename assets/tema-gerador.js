/* D'Faria — gerador do tema (cores e fontes por tipo).
   Usado em 2 lugares, com o MESMO código:
   - no Painel do Chef (prévia ao vivo): <script src="/assets/tema-gerador.js"> -> window.DfTema
   - no GitHub Actions (publicar): gerador-painel/aplicar-tema.mjs -> require()
   Regra: tipo sem escolha (null) = visual atual do site, sem nenhuma regra nova. */
(function (raiz) {
  'use strict';

  // Fontes curadas (todas do Google Fonts). "carregada": já vem no site, não precisa de link extra.
  var FONTES = [
    { nome: 'Outfit', estilo: 'Moderna', familia: "'Outfit', sans-serif", pesos: '300;400;500;600;700', carregada: true },
    { nome: 'Manrope', estilo: 'Moderna', familia: "'Manrope', sans-serif", pesos: '400;500;600;700;800' },
    { nome: 'Inter', estilo: 'Moderna', familia: "'Inter', sans-serif", pesos: '400;500;600;700' },
    { nome: 'Montserrat', estilo: 'Moderna', familia: "'Montserrat', sans-serif", pesos: '400;500;600;700' },
    { nome: 'Raleway', estilo: 'Moderna', familia: "'Raleway', sans-serif", pesos: '400;500;600;700' },
    { nome: 'Josefin Sans', estilo: 'Moderna', familia: "'Josefin Sans', sans-serif", pesos: '400;500;600;700' },
    { nome: 'Lato', estilo: 'Moderna', familia: "'Lato', sans-serif", pesos: '400;700' },
    { nome: 'Open Sans', estilo: 'Moderna', familia: "'Open Sans', sans-serif", pesos: '400;500;600;700' },
    { nome: 'Nunito Sans', estilo: 'Moderna', familia: "'Nunito Sans', sans-serif", pesos: '400;600;700' },
    { nome: 'Work Sans', estilo: 'Moderna', familia: "'Work Sans', sans-serif", pesos: '400;500;600;700' },
    { nome: 'Karla', estilo: 'Moderna', familia: "'Karla', sans-serif", pesos: '400;500;600;700' },
    { nome: 'Playfair Display', estilo: 'Elegante (serifa)', familia: "'Playfair Display', serif", pesos: '400;500;600;700' },
    { nome: 'Cormorant Garamond', estilo: 'Elegante (serifa)', familia: "'Cormorant Garamond', serif", pesos: '400;500;600;700' },
    { nome: 'Cinzel', estilo: 'Elegante (serifa)', familia: "'Cinzel', serif", pesos: '400;500;600;700' },
    { nome: 'Bodoni Moda', estilo: 'Elegante (serifa)', familia: "'Bodoni Moda', serif", pesos: '400;500;600;700' },
    { nome: 'Lora', estilo: 'Elegante (serifa)', familia: "'Lora', serif", pesos: '400;500;600;700' },
    { nome: 'Libre Baskerville', estilo: 'Elegante (serifa)', familia: "'Libre Baskerville', serif", pesos: '400;700' },
    { nome: 'Marcellus', estilo: 'Elegante (serifa)', familia: "'Marcellus', serif", pesos: '400' },
    { nome: 'DM Serif Display', estilo: 'Elegante (serifa)', familia: "'DM Serif Display', serif", pesos: '400' },
    { nome: 'Prata', estilo: 'Elegante (serifa)', familia: "'Prata', serif", pesos: '400' }
  ];

  // Paleta sugerida (cores da marca + clássicos de alta gastronomia)
  var PALETA = [
    { nome: 'Branco', cor: '#ffffff' }, { nome: 'Marfim', cor: '#fcfaf5' }, { nome: 'Areia', cor: '#f0e2bd' },
    { nome: 'Champanhe', cor: '#f5df9e' }, { nome: 'Dourado D’Faria', cor: '#cfa853' }, { nome: 'Ouro velho', cor: '#b88e36' },
    { nome: 'Bronze', cor: '#9e7a2b' }, { nome: 'Cobre', cor: '#c07a4a' }, { nome: 'Verde-sálvia', cor: '#a9c4a0' },
    { nome: 'Verde D’Faria', cor: '#1d6b2f' }, { nome: 'Verde-noite', cor: '#061208' }, { nome: 'Grafite', cor: '#161a15' }
  ];

  // Como o site está HOJE (para mostrar no painel e para o "Restaurar padrão")
  var PADRAO = {
    cores: { titulos: '#ffffff', textos: '#fcfaf5', destaques: '#cfa853', botaoFundo: '#cfa853', botaoTexto: '#061208' },
    fontes: { titulos: 'Outfit', textos: 'Outfit', botoes: 'Outfit' }
  };
  var FUNDO_SITE = '#0a1c0d';

  // Seletores por tipo. "body:not(#df-tema-x)" soma peso de ID: vence as regras atuais com !important.
  var B = 'body:not(#df-tema-x) ';
  function lista(sel) { return sel.map(function (s) { return B + s; }).join(',\n'); }
  var SEL = {
    titulos: ['h1', 'h2', 'h4', 'h5', 'h6', '.df-hero-title', '.df-page-title', '#hero h1', '.df-client-heading h2', '.df-editorial-layout h2', '.df-editorial-layout h4', '.df-corporate-layout h2'],
    textos: ['p', 'li', 'dd', 'dt', 'blockquote', 'label', 'td', 'th', '.text-stone', '.text-graphite', '.df-hero-sub', '#hero p', '.site-desktop-nav > a', '.site-mobile-nav > a', 'details summary', 'footer a', 'footer span'],
    destaques: ['h3', '.df-page-title-accent', '.df-page-title .df-page-title-accent', 'main a:not(.df-btn-primary):not(.df-btn-outline)', 'figcaption', '.text-gold', '.text-green', '.text-greendeep', '.df-corporate-layout h3', '.df-editorial-layout h3'],
    botoes: ['.df-btn-primary', '.site-quote-button', '.quote-submit', '.site-mobile-nav > button']
  };

  function fonte(nome) {
    for (var i = 0; i < FONTES.length; i++) if (FONTES[i].nome === nome) return FONTES[i];
    return null;
  }
  function corValida(c) { return typeof c === 'string' && /^#[0-9a-fA-F]{6}$/.test(c); }

  // Junta o tema salvo com o padrão: só vale o que foi escolhido (o resto fica null = sem regra)
  function normalizar(t) {
    t = t || {};
    var c = t.cores || {}, f = t.fontes || {};
    var r = { cores: {}, fontes: {} };
    ['titulos', 'textos', 'destaques', 'botaoFundo', 'botaoTexto'].forEach(function (k) { r.cores[k] = corValida(c[k]) ? c[k].toLowerCase() : null; });
    ['titulos', 'textos', 'botoes'].forEach(function (k) { r.fontes[k] = fonte(f[k]) ? f[k] : null; });
    return r;
  }

  function gerarCss(temaSalvo) {
    var t = normalizar(temaSalvo), c = t.cores, f = t.fontes, out = [];
    out.push('/* D’Faria — tema do site (gerado pelo Painel do Chef). Não editar à mão. */');
    if (c.destaques) {
      out.push(':root{--df-gold:' + c.destaques + '!important;--df-gold-light:' + c.destaques + '!important;--gold:' + c.destaques + '!important;--goldlight:' + c.destaques + '!important;--goldchampagne:' + c.destaques + '!important}');
      out.push(lista(SEL.destaques) + '{color:' + c.destaques + '!important}');
    }
    if (c.titulos) out.push(lista(SEL.titulos) + '{color:' + c.titulos + '!important}');
    if (c.textos) out.push(lista(SEL.textos) + '{color:' + c.textos + '!important}');
    if (c.botaoFundo || c.botaoTexto) {
      out.push(lista(SEL.botoes) + '{' + (c.botaoFundo ? 'background:' + c.botaoFundo + '!important;border-color:' + c.botaoFundo + '!important;' : '') + (c.botaoTexto ? 'color:' + c.botaoTexto + '!important;' : '') + '}');
    }
    if (f.titulos) out.push(lista(SEL.titulos.concat(SEL.destaques.slice(0, 3))) + '{font-family:' + fonte(f.titulos).familia + '!important}');
    if (f.textos) out.push(lista(SEL.textos) + ',' + B + '{font-family:' + fonte(f.textos).familia + '!important}');
    if (f.botoes) out.push(lista(SEL.botoes) + '{font-family:' + fonte(f.botoes).familia + '!important}');
    return out.join('\n') + '\n';
  }

  // Link do Google Fonts só com as fontes escolhidas que o site ainda não carrega
  function linkFontes(temaSalvo) {
    var t = normalizar(temaSalvo), vistos = {}, partes = [];
    ['titulos', 'textos', 'botoes'].forEach(function (k) {
      var x = fonte(t.fontes[k]);
      if (!x || x.carregada || vistos[x.nome]) return;
      vistos[x.nome] = 1;
      partes.push('family=' + x.nome.replace(/ /g, '+') + ':wght@' + x.pesos);
    });
    return partes.length ? 'https://fonts.googleapis.com/css2?' + partes.join('&') + '&display=swap' : '';
  }
  function linkTodasFontes() {
    return 'https://fonts.googleapis.com/css2?' + FONTES.filter(function (x) { return !x.carregada; }).map(function (x) {
      return 'family=' + x.nome.replace(/ /g, '+') + ':wght@' + x.pesos.split(';')[0];
    }).join('&') + '&display=swap';
  }

  // Contraste (WCAG) da cor sobre o fundo escuro do site
  function luz(hex) {
    var n = parseInt(hex.slice(1), 16), rgb = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(function (v) {
      v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  }
  function contraste(a, b) { var x = luz(a), y = luz(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
  function leitura(cor, fundo) {
    if (!corValida(cor)) return null;
    var r = contraste(cor, fundo || FUNDO_SITE);
    return { razao: Math.round(r * 10) / 10, nivel: r >= 7 ? 'Ótima' : r >= 4.5 ? 'Boa' : r >= 3 ? 'Só para títulos grandes' : 'Difícil de ler' };
  }

  // Um "carimbo" curto do tema, para o ?v= do CSS mudar a cada publicação
  function carimbo(css) { var h = 5381; for (var i = 0; i < css.length; i++) h = ((h << 5) + h + css.charCodeAt(i)) >>> 0; return h.toString(36); }

  var api = { FONTES: FONTES, PALETA: PALETA, PADRAO: PADRAO, FUNDO_SITE: FUNDO_SITE, normalizar: normalizar, gerarCss: gerarCss, linkFontes: linkFontes, linkTodasFontes: linkTodasFontes, leitura: leitura, carimbo: carimbo, fonte: fonte };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else raiz.DfTema = api;
})(typeof window !== 'undefined' ? window : this);
