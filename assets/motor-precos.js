/* D'Faria — motor de preços dos cardápios.
   Usado em 3 lugares, com o MESMO código (os três sempre dão o mesmo número):
   - no Painel do Chef (prévia da tabela):  <script src="/assets/motor-precos.js"> -> window.DfPrecos
   - no GitHub Actions (publicar):          require('assets/motor-precos.js')
   - na página do cardápio (simulador):     window.DfPrecos

   O dono informa SÓ o valor por pessoa para 100 convidados (P100). O resto é automático:

     custo(N)  = (compras% x P100 + estrutura por convidado) x N  +  equipe(N)  +  custos fixos do evento
     fator     = (P100 x 100) / custo(100)          -> a margem do cardápio sai do próprio P100
     total(N)  = custo(N) x fator
     por pessoa(N) = total(N) / N, arredondado

   Travas:
   - por pessoa(100) = P100, exatamente;
   - o preço por pessoa NUNCA sobe quando o número de convidados aumenta;
   - o total do evento nunca fica abaixo do valor mínimo de evento;
   - P100 abaixo do custo = erro (o painel não deixa publicar).

   Estrutura (mesas, cadeiras, toalhas, louça, taças, talheres), equipamento de cozinha e frete
   estão SEMPRE inclusos no preço: o cliente não vê nem paga isso à parte. */
(function (raiz) {
  'use strict';

  var CONFIG_PADRAO = {
    versao: 1,
    // Parte do preço que vira compras (comida e bebida do cardápio). 0,325 = 32,5%.
    percentualCompras: 0.325,
    // Custo da estrutura por convidado (mesas, cadeiras, toalhas, louça, taças, talheres). 0 = já dentro das compras.
    estruturaPorConvidado: 0,
    // Custos fixos por evento: frete + equipamento de cozinha.
    custoFixoEvento: 1200,
    // Equipe: quantidade = arredondar para cima (convidados / aCada).
    equipe: [
      { id: 'cozinheiro', nome: 'Cozinheiro', valor: 350, aCada: 200 },
      { id: 'maitre', nome: 'Maître', valor: 350, aCada: 100 },
      { id: 'garcom', nome: 'Garçom', valor: 200, aCada: 25 },
      { id: 'ajudante', nome: 'Ajudante de cozinha', valor: 200, aCada: 50 },
      { id: 'churrasqueiro', nome: 'Churrasqueiro', valor: 350, aCada: 100, soComChurrasco: true }
    ],
    minimoConvidados: 30,
    maximoNoSite: 100,       // acima disso o site mostra "Consulte-nos"
    passo: 10,               // faixas: 30, 40, 50 ... 100
    arredondarPara: 1,       // preço por pessoa arredondado para R$ 1 (pode ser 5, 10...)
    valorMinimoEvento: 3500, // nenhum evento sai por menos que isso (piso do estrogonofe para 30)
    margemMinimaAviso: 0.30, // abaixo disso o painel avisa (não bloqueia)
    // Acima de 100 (só no painel; o site mostra "Consulte-nos"): a margem cai devagar até o piso.
    // Calibrado: P100 = 130 -> 150 convidados = R$ 115 por pessoa.
    acimaDe100: { quedaMargemPorConvidado: 0.000774, pisoMargem: 0.30, ate: 300 }
  };

  function numero(v) {
    if (typeof v === 'string') v = v.replace(/\s|R\$/g, '').replace(/\.(?=\d{3}(\D|$))/g, '').replace(',', '.');
    var n = Number(v);
    return isFinite(n) ? n : NaN;
  }

  function mesclarConfig(cfg) {
    var c = {}, k;
    for (k in CONFIG_PADRAO) c[k] = CONFIG_PADRAO[k];
    if (cfg) for (k in cfg) if (cfg[k] !== undefined && cfg[k] !== null) c[k] = cfg[k];
    c.acimaDe100 = Object.assign({}, CONFIG_PADRAO.acimaDe100, (cfg && cfg.acimaDe100) || {});
    return c;
  }

  function arredondar(v, passo) {
    passo = passo > 0 ? passo : 1;
    return Math.round(v / passo) * passo;
  }

  function equipeDoEvento(n, cfg, temChurrasco) {
    var linhas = [], total = 0;
    (cfg.equipe || []).forEach(function (f) {
      if (f.soComChurrasco && !temChurrasco) return;
      var qtd = Math.ceil(n / f.aCada);
      var valor = qtd * f.valor;
      total += valor;
      linhas.push({ id: f.id, nome: f.nome, quantidade: qtd, valorUnitario: f.valor, valor: valor });
    });
    return { linhas: linhas, total: total };
  }

  function custoDoEvento(n, p100, cfg, temChurrasco) {
    var compras = cfg.percentualCompras * p100 * n;
    var estrutura = cfg.estruturaPorConvidado * n;
    var equipe = equipeDoEvento(n, cfg, temChurrasco);
    var fixos = cfg.custoFixoEvento;
    return { compras: compras, estrutura: estrutura, equipe: equipe, fixos: fixos,
             total: compras + estrutura + equipe.total + fixos };
  }

  function validarConfig(cfg) {
    var erros = [];
    if (!(cfg.percentualCompras > 0 && cfg.percentualCompras < 1)) erros.push('Percentual de compras deve ficar entre 0% e 100%.');
    if (!(cfg.estruturaPorConvidado >= 0)) erros.push('Custo de estrutura por convidado inválido.');
    if (!(cfg.custoFixoEvento >= 0)) erros.push('Custo fixo do evento inválido.');
    if (!(cfg.minimoConvidados >= 1)) erros.push('Mínimo de convidados inválido.');
    if (!(cfg.maximoNoSite >= cfg.minimoConvidados)) erros.push('Máximo no site menor que o mínimo.');
    if (!(cfg.passo >= 1)) erros.push('Passo das faixas inválido.');
    (cfg.equipe || []).forEach(function (f) {
      if (!(f.valor >= 0) || !(f.aCada >= 1)) erros.push('Equipe "' + f.nome + '": valor ou "a cada" inválido.');
    });
    return erros;
  }

  /* Tabela de preços de um cardápio.
     p100: valor por pessoa para 100 convidados.
     opcoes: { config, temChurrasco }
     Retorna { ok, erros, avisos, p100, margem100, faixas:[{convidados, porPessoa, total, memoria}],
               acimaDe100:[...], aPartirDe } */
  function calcularTabela(p100, opcoes) {
    opcoes = opcoes || {};
    var cfg = mesclarConfig(opcoes.config);
    var temChurrasco = !!opcoes.temChurrasco;
    var erros = validarConfig(cfg), avisos = [];
    p100 = numero(p100);
    if (!(p100 > 0)) erros.push('Informe o valor por pessoa para 100 convidados.');
    if (erros.length) return { ok: false, erros: erros, avisos: avisos, faixas: [], acimaDe100: [] };

    var custo100 = custoDoEvento(100, p100, cfg, temChurrasco);
    var receita100 = p100 * 100;
    var margem100 = 1 - custo100.total / receita100;
    if (margem100 <= 0) {
      erros.push('R$ ' + formatarReal(p100) + ' por pessoa não cobre o custo de um evento de 100 pessoas (R$ ' +
        formatarReal(custo100.total) + '). Aumente o valor.');
      return { ok: false, erros: erros, avisos: avisos, p100: p100, margem100: margem100, faixas: [], acimaDe100: [] };
    }
    if (margem100 < cfg.margemMinimaAviso) {
      avisos.push('Margem de ' + Math.round(margem100 * 100) + '% para 100 pessoas (abaixo de ' +
        Math.round(cfg.margemMinimaAviso * 100) + '%).');
    }
    var fator = receita100 / custo100.total;

    // 1) Preço de CADA número de convidados (mínimo..100), pela mesma fórmula, com as travas.
    var passo = cfg.arredondarPara > 0 ? cfg.arredondarPara : 1;
    var acimaPasso = function (v) { return Math.ceil(v / passo - 1e-9) * passo; };
    var abaixoPasso = function (v) { return Math.floor(v / passo + 1e-9) * passo; };
    var nMin = cfg.minimoConvidados, nMax = cfg.maximoNoSite;
    var mapa = {}, memorias = {}, ant = null, n;
    for (n = nMin; n <= nMax; n++) {
      var c = custoDoEvento(n, p100, cfg, temChurrasco);
      var bruto = c.total * fator / n;
      var pp = n === 100 ? p100 : arredondar(bruto, passo);
      var motivo = 'calculado';
      var piso = cfg.valorMinimoEvento > 0 ? acimaPasso(cfg.valorMinimoEvento / n) : 0;
      if (pp < piso) { pp = piso; motivo = 'valor mínimo de evento (R$ ' + formatarReal(cfg.valorMinimoEvento) + ')'; }
      if (ant !== null) {
        // por pessoa nunca sobe quando entra mais gente (ex.: com 51 entra mais um garçom)
        if (pp > ant) { pp = ant; motivo = 'mantido o preço de ' + (n - 1) + ' convidados (por pessoa não sobe)'; }
        // total nunca cai quando entra mais gente (efeito do arredondamento)
        var pisoTotal = acimaPasso(ant * (n - 1) / n);
        if (pp < pisoTotal) { pp = pisoTotal; motivo = 'ajuste de arredondamento (total não cai)'; }
      }
      mapa[n] = pp;
      memorias[n] = { custo: c, fator: fator, porPessoaCalculado: bruto, motivo: motivo };
      ant = pp;
    }
    // 2) O valor de 100 é sempre o informado. Se o arredondamento empurrou, desce os anteriores o mínimo necessário.
    if (nMax >= 100 && mapa[100] !== p100) {
      mapa[100] = p100;
      memorias[100].motivo = 'valor informado';
      for (n = 99; n >= nMin; n--) {
        var teto = abaixoPasso(mapa[n + 1] * (n + 1) / n);
        if (mapa[n] <= teto) break;
        mapa[n] = teto;
        memorias[n].motivo = 'ajuste de arredondamento (total não passa o de ' + (n + 1) + ')';
      }
    }

    // 3) Faixas do site: mínimo, +10 ... até 100 (o 100 sempre entra).
    var ns = [];
    for (n = nMin; n < nMax; n += cfg.passo) ns.push(n);
    ns.push(nMax);
    var faixas = ns.map(function (k) {
      var mem = memorias[k];
      mem.margem = 1 - mem.custo.total / (mapa[k] * k);
      return { convidados: k, porPessoa: mapa[k], total: mapa[k] * k, memoria: mem };
    });
    for (n = nMin; n <= nMax; n++) {
      if (1 - memorias[n].custo.total / (mapa[n] * n) < 0) { erros.push('Com ' + n + ' convidados o preço fica abaixo do custo.'); break; }
    }

    // Acima de 100 (referência interna do painel).
    var acima = [], anterior = p100, a = cfg.acimaDe100;
    for (var m = 100 + cfg.passo; m <= a.ate; m += cfg.passo) {
      var cm = custoDoEvento(m, p100, cfg, temChurrasco);
      var margem = Math.max(a.pisoMargem, margem100 - a.quedaMargemPorConvidado * (m - 100));
      if (margem100 < a.pisoMargem) margem = margem100; // margem já baixa: não cai mais
      var ppm = arredondar(cm.total / (1 - margem) / m, cfg.arredondarPara);
      if (ppm > anterior) ppm = anterior;
      anterior = ppm;
      acima.push({ convidados: m, porPessoa: ppm, total: ppm * m, memoria: { custo: cm, margem: 1 - cm.total / (ppm * m) } });
    }

    return { ok: erros.length === 0, erros: erros, avisos: avisos, p100: p100, margem100: margem100,
             faixas: faixas, porConvidado: mapa, acimaDe100: acima, aPartirDe: p100, config: cfg };
  }

  // Preço para um número qualquer de convidados no site (ex.: 45) — o mesmo mapa da tabela.
  function precoPara(convidados, tabela) {
    var n = Math.floor(numero(convidados));
    if (!tabela || !tabela.ok || !(n > 0)) return null;
    var cfg = tabela.config;
    if (n < cfg.minimoConvidados) return { consulte: false, abaixoDoMinimo: true, minimo: cfg.minimoConvidados };
    if (n > cfg.maximoNoSite) return { consulte: true };
    var pp = tabela.porConvidado[n];
    return { consulte: false, convidados: n, porPessoa: pp, total: pp * n };
  }

  function formatarReal(v) {
    var n = Math.round(Number(v) * 100) / 100;
    var inteiro = Math.floor(Math.abs(n)), cent = Math.round((Math.abs(n) - inteiro) * 100);
    var s = String(inteiro).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return (n < 0 ? '-' : '') + s + (cent ? ',' + (cent < 10 ? '0' : '') + cent : '');
  }

  var api = {
    CONFIG_PADRAO: CONFIG_PADRAO,
    mesclarConfig: mesclarConfig,
    validarConfig: validarConfig,
    equipeDoEvento: equipeDoEvento,
    custoDoEvento: custoDoEvento,
    calcularTabela: calcularTabela,
    precoPara: precoPara,
    formatarReal: formatarReal,
    numero: numero
  };

  if (typeof module === 'object' && module.exports) module.exports = api;
  else raiz.DfPrecos = api;
})(typeof self !== 'undefined' ? self : this);
