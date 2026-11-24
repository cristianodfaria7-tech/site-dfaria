// Gera as páginas de cardápio a partir dos dados (gerador-cardapios/cardapios.json):
//   cardapios.html            (lista de todos os cardápios)
//   cardapios/<slug>.html     (uma página por cardápio)
// São páginas HTML prontas, sem React. Menu do celular, janela de orçamento, WhatsApp e
// Google Analytics ficam no script assets/paginas-estaticas-sNN.js.
//
//   node gerador-cardapios/gerar.mjs <pasta-do-site> [pasta-de-saida]
//
// Regras: a URL de cada cardápio é /cardapios/<slug> e NUNCA muda depois de publicada.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = path.resolve(process.argv[2] || '.');
const saida = path.resolve(process.argv[3] || root);
const aqui = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://dfariagastronomia.com.br';
const molde = (n) => fs.readFileSync(path.join(aqui, 'molde', n), 'utf8');
const dados = JSON.parse(fs.readFileSync(path.join(aqui, 'cardapios.json'), 'utf8'));

// o script das páginas muda de nome a cada versão (cache de 1 ano): pegar o atual
const js = fs.readdirSync(path.join(root, 'assets')).filter((f) => /^paginas-estaticas-s\d+\.js$/.test(f));
if (js.length !== 1) throw new Error(`esperava 1 assets/paginas-estaticas-sNN.js, achei ${js.length}`);

// mesmo escape que o React usa (o site atual foi gerado assim)
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
const TSD = ' data-tsd-source="/src/components/original-page.tsx:189:16"';
const BOTAO = molde('botao-orcamento.html');

// Motor de preços: o MESMO arquivo que o painel usa (assets/motor-precos.js).
const Precos = createRequire(import.meta.url)(path.join(root, 'assets', 'motor-precos.js'));
const ZAP = '5515996834734';
const INCLUSO = (dados.site && dados.site.incluso) || [
  'Mesas, cadeiras e toalhas', 'Pratos, copos, taças e talheres', 'Equipamento de cozinha',
  'Cozinheiro e ajudantes de cozinha', 'Garçons e maître', 'Deslocamento da equipe',
];
const R = (v) => 'R$ ' + Precos.formatarReal(v);

// Tabela de preços de um cardápio (ou null se ainda não tem valor). Valor inválido PARA a geração.
function tabelaDe(c) {
  if (!c.preco || c.preco.p100 === undefined || c.preco.p100 === null || c.preco.p100 === '') return null;
  const t = Precos.calcularTabela(c.preco.p100, { temChurrasco: !!c.preco.churrasco, config: dados.site && dados.site.precos });
  if (!t.ok) throw new Error(`preço de ${c.slug}: ${t.erros.join(' | ')}`);
  return t;
}

// Bloco "Monte o orçamento do seu evento" (substitui a caixa "Gostou desta proposta?").
// Os valores vão escritos no HTML (o Google lê) e o simulador usa os MESMOS números.
function blocoOrcamento(c, t) {
  const cfg = t.config, inicial = 50;
  const r0 = Precos.precoPara(inicial, t);
  const dadosJs = { nome: c.nome, min: cfg.minimoConvidados, max: cfg.maximoNoSite, pp: t.porConvidado, zap: ZAP };
  const linhas = t.faixas.map((f) => `<tr><td>${f.convidados}</td><td>${R(f.porPessoa)}</td><td>${R(f.total)}</td></tr>`).join('');
  const msg = (n, r) => `Olá! Vi no site o cardápio *${c.nome}* e gostaria de um orçamento para ${n} convidados. A simulação deu ${R(r.porPessoa)} por pessoa (total ${R(r.total)}).`;
  return '<div class="mt-16 rounded-3xl green-texture px-8 py-12 text-ivory lg:mt-24 lg:px-14 lg:py-16 df-sim" id="orcamento-do-evento">' +
    '<h2 class="font-display text-2xl font-medium text-balance lg:text-3xl">Monte o orçamento do seu evento</h2>' +
    '<p class="mt-4 max-w-[52ch] text-base text-ivory/75 text-pretty">Escolha o número de convidados e veja na hora o valor do evento completo, com estrutura e equipe.</p>' +
    `<div class="df-sim-contador"><button type="button" class="df-sim-btn" data-df-passo="-1" aria-label="Menos convidados">−</button>` +
    `<label class="df-sim-n"><input type="number" inputmode="numeric" min="${cfg.minimoConvidados}" step="1" value="${inicial}" aria-label="Número de convidados"><span>convidados</span></label>` +
    `<button type="button" class="df-sim-btn" data-df-passo="1" aria-label="Mais convidados">+</button></div>` +
    `<div class="df-sim-resultado" aria-live="polite"><div><small>Por pessoa</small><strong data-df="pp">${R(r0.porPessoa)}</strong></div>` +
    `<div><small>Total do evento</small><strong data-df="total">${R(r0.total)}</strong></div><p class="df-sim-aviso" data-df="aviso" hidden></p></div>` +
    `<a class="df-sim-zap" data-df="zap" target="_blank" rel="noopener" href="https://wa.me/${ZAP}?text=${encodeURIComponent(msg(inicial, r0))}">Quero este orçamento pelo WhatsApp</a>` +
    `<div class="df-sim-incluso"><h3>Evento completo, tudo incluso</h3><ul>${INCLUSO.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>` +
    `<details class="df-sim-tabela"><summary>Ver valores por número de convidados</summary><table><thead><tr><th>Convidados</th><th>Por pessoa</th><th>Total</th></tr></thead><tbody>${linhas}` +
    `<tr><td>Mais de ${cfg.maximoNoSite}</td><td colspan="2">Consulte-nos: o valor por pessoa fica ainda menor</td></tr></tbody></table></details>` +
    `<script type="application/json" class="df-sim-dados">${JSON.stringify(dadosJs).replace(/</g, '\\u003c')}</script>` +
    '</div>';
}
const porSlug = Object.fromEntries(dados.cardapios.map((c) => [c.slug, c]));
const categoria = Object.fromEntries(dados.lista.categorias.map((c) => [c.id, c]));

// título grande: o último terço das palavras vai em destaque (mesma regra do site)
function h1(texto) {
  const p = texto.trim().split(/\s+/);
  const n = Math.max(1, p.length - Math.ceil(p.length / 3));
  const a = esc(p.slice(0, n).join(' ')), b = esc(p.slice(n).join(' '));
  return `${a}${p.length > 1 ? '<!-- --> ' : ''}<span class="df-page-title-accent" data-tsd-source="/src/components/original-page.tsx:154:11">${b}</span>`;
}

function fotoTopo(i) {
  return i.largura
    ? `<img alt="${esc(i.alt)}" class="df-unified-backdrop" decoding="async" height="${i.altura}" loading="eager" src="${esc(i.src)}" width="${i.largura}" fetchpriority="high"/>`
    : `<img alt="${esc(i.alt)}" src="${esc(i.src)}" class="df-unified-backdrop" loading="eager" fetchpriority="high" decoding="async"/>`;
}

const ld = (o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`;
const migalhas = (itens) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: itens.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })) });

// Visual e funcionamento do simulador (só nas páginas com preço). Fica dentro da página:
// não depende do cache de 1 ano dos arquivos .js.
const SIM_CSS = '<style id="df-sim-css">' +
  '.df-preco-apartir{margin-top:1.25rem;font-size:1rem;color:rgba(255,255,255,.92);text-shadow:0 1px 8px rgba(0,0,0,.55)}.df-preco-apartir strong{font-size:1.45rem;color:#E2C58F}' +
  '.df-sim-contador{display:flex;align-items:center;gap:.9rem;margin-top:2rem;flex-wrap:wrap}' +
  '.df-sim-btn{width:3rem;height:3rem;border-radius:9999px;border:1px solid #C5A880;color:#C5A880;font-size:1.6rem;line-height:1;background:transparent;cursor:pointer}' +
  '.df-sim-btn:hover{background:rgba(197,168,128,.15)}' +
  '.df-sim-n{display:flex;align-items:baseline;gap:.6rem}.df-sim-n input{width:5.5rem;font-size:2rem;text-align:center;background:transparent;color:#fff;border:0;border-bottom:2px solid #C5A880;-moz-appearance:textfield}' +
  '.df-sim-n input::-webkit-inner-spin-button,.df-sim-n input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.df-sim-n span{color:rgba(255,255,240,.75)}' +
  '.df-sim-resultado{display:flex;flex-wrap:wrap;gap:1rem 3rem;margin-top:1.75rem}.df-sim-resultado small{display:block;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,240,.65)}' +
  '.df-sim-resultado strong{font-size:2.2rem;font-weight:600;color:#fff}.df-sim-aviso{flex-basis:100%;color:#C5A880;font-size:1.05rem;margin:0}' +
  '.df-sim-zap{display:inline-block;margin-top:1.75rem;background:#25D366;color:#fff;font-weight:700;padding:.85rem 1.6rem;border-radius:9999px;text-decoration:none}.df-sim-zap:hover{background:#1ebe5a}' +
  '.df-sim-incluso{margin-top:2.25rem;padding-top:1.5rem;border-top:1px solid rgba(197,168,128,.35)}.df-sim-incluso h3{font-size:1rem;color:#C5A880;font-weight:600}' +
  '.df-sim-incluso ul{display:grid;grid-template-columns:repeat(auto-fill,minmax(15rem,1fr));gap:.4rem 1.5rem;margin-top:.8rem;font-size:.95rem;color:rgba(255,255,240,.85)}.df-sim-incluso li:before{content:"✓ ";color:#C5A880}' +
  '.df-sim-tabela{margin-top:1.5rem;font-size:.9rem;color:rgba(255,255,240,.85)}.df-sim-tabela summary{cursor:pointer;color:#C5A880}' +
  '.df-sim-tabela table{margin-top:.8rem;border-collapse:collapse;min-width:min(100%,26rem)}.df-sim-tabela td,.df-sim-tabela th{padding:.35rem .9rem .35rem 0;text-align:left;border-bottom:1px solid rgba(255,255,255,.08)}' +
  '</style>';
const SIM_JS = `<script>(function(){
var f=function(v){return 'R$ '+String(Math.round(v)).replace(/\\B(?=(\\d{3})+(?!\\d))/g,'.');};
var ga=function(){window.dataLayer=window.dataLayer||[];window.dataLayer.push(arguments);};
document.querySelectorAll('.df-sim').forEach(function(box){
  var d=JSON.parse(box.querySelector('.df-sim-dados').textContent);
  var inp=box.querySelector('input'),q=function(k){return box.querySelector('[data-df="'+k+'"]');};
  var tm=null;
  function atualizar(){
    var n=parseInt(inp.value,10),pp=q('pp'),tot=q('total'),av=q('aviso'),zap=q('zap'),txt;
    av.hidden=true;pp.parentNode.hidden=false;tot.parentNode.hidden=false;
    if(!(n>0)){n=0;}
    if(n<d.min){av.hidden=false;av.textContent='Este cardápio é para no mínimo '+d.min+' convidados.';pp.parentNode.hidden=true;tot.parentNode.hidden=true;
      txt='Olá! Vi no site o cardápio *'+d.nome+'* e gostaria de um orçamento.';}
    else if(n>d.max){av.hidden=false;av.textContent='Para mais de '+d.max+' convidados, consulte-nos: o valor por pessoa fica ainda menor.';pp.parentNode.hidden=true;tot.parentNode.hidden=true;
      txt='Olá! Vi no site o cardápio *'+d.nome+'* e gostaria de um orçamento para '+n+' convidados.';}
    else{var v=d.pp[n];pp.textContent=f(v);tot.textContent=f(v*n);
      txt='Olá! Vi no site o cardápio *'+d.nome+'* e gostaria de um orçamento para '+n+' convidados. A simulação deu '+f(v)+' por pessoa (total '+f(v*n)+').';}
    zap.href='https://wa.me/'+d.zap+'?text='+encodeURIComponent(txt);
    clearTimeout(tm);tm=setTimeout(function(){ga('event','simular_orcamento',{cardapio:d.nome,convidados:n});},1500);
  }
  box.querySelectorAll('[data-df-passo]').forEach(function(b){b.addEventListener('click',function(){
    var n=parseInt(inp.value,10)||d.min;n+=parseInt(b.getAttribute('data-df-passo'),10);if(n<1)n=1;inp.value=n;atualizar();});});
  inp.addEventListener('input',atualizar);
});
})();</script>`;

function pagina({ title, description, url, foto, schemas, main, simulador }) {
  const t = esc(title), d = esc(description);
  return molde('inicio-head.html') +
    '<link rel="preload" as="image" href="/__l5e/assets-v1/b202527e-f737-41f0-87e3-8eaae4e6c2db/logo-dfaria.webp"/>' +
    `<link rel="preload" as="image" href="${esc(foto)}"/>` +
    molde('estilos.html') +
    `<title>${t}</title><meta name="description" content="${d}"/>` +
    `<meta property="og:title" content="${t}"/><meta property="og:description" content="${d}"/><meta property="og:type" content="website"/><meta property="og:url" content="${esc(url)}"/>` +
    `<meta property="og:site_name" content="D&#x27;Faria Gastronomia e Eventos"/><meta property="og:locale" content="pt_BR"/><meta property="og:image" content="${SITE}/og-dfaria.jpg"/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/>` +
    `<meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${t}"/><meta name="twitter:description" content="${d}"/><meta name="twitter:image" content="${SITE}/og-dfaria.jpg"/>` +
    `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2"/><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2"/><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2"/><link rel="icon" href="/favicon.ico?v=2" type="image/x-icon"/><link rel="canonical" href="${esc(url)}"/>` +
    schemas.map(ld).join('') +
    '</head>' + molde('topo.html') + main + '</main>' + molde('rodape.html') +
    (simulador ? SIM_CSS + SIM_JS : '') +
    `<!--/$--><script src="/assets/${js[0]}" defer></script></body></html>`;
}

function paginaCardapio(c) {
  const url = `${SITE}/cardapios/${c.slug}`;
  const cat = categoria[c.categoria];
  const secoes = c.secoes.map((s, i) =>
    `<div class="transition-all duration-700 ease-out motion-reduce:transition-none translate-y-0 opacity-100"${i % 2 ? ' style="transition-delay:80ms"' : ''}><div class="h-full rounded-3xl bg-sand/60 p-7 ring-1 ring-graphite/5 lg:p-8">` +
    `<h2 class="font-display text-lg font-medium tracking-tight text-graphite">${esc(s.titulo)}</h2><span aria-hidden="true" class="mt-3 block h-px w-12 bg-gold/70"></span><ul class="mt-5 space-y-3">` +
    s.itens.map((it) => `<li class="flex gap-3 text-[0.95rem] leading-relaxed text-stone text-pretty"><span aria-hidden="true" class="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold"></span>${esc(it)}</li>`).join('') +
    '</ul></div></div>').join('');
  const outros = c.outros.length === 0 ? '' :
    `<div class="mt-16 lg:mt-24"><h2 class="font-display text-xl font-medium text-graphite">Outros cardápios de <!-- -->${esc(cat.titulo.toLowerCase())}</h2><ul class="mt-6 grid gap-4 sm:grid-cols-3">` +
    c.outros.map((s) => `<li><a class="block h-full rounded-2xl bg-sand/60 p-5 text-sm text-graphite ring-1 ring-graphite/5 transition-colors hover:ring-gold/50"${TSD} href="/cardapios/${s}">${esc(porSlug[s].nome)}</a></li>`).join('') +
    `</ul><p class="mt-8 text-sm text-stone">Veja também<!-- --> <a aria-current="page" class="text-green hover:underline active active" data-status="active"${TSD} href="/cardapios">todos os cardápios</a>,<!-- --> <a class="text-green hover:underline"${TSD} href="/gastronomia">a gastronomia do D’Faria</a> <!-- -->ou<!-- --> <a class="text-green hover:underline"${TSD} href="/orcamento">solicite um orçamento</a>.</p></div>`;
  const tab = tabelaDe(c);
  const apartir = tab ? `<p class="df-preco-apartir">A partir de <strong>${R(tab.aPartirDe)}</strong> por pessoa · evento completo com estrutura e equipe</p>` : '';
  const caixa = tab ? blocoOrcamento(c, tab) :
    '<div class="mt-16 rounded-3xl green-texture px-8 py-12 text-ivory lg:mt-24 lg:px-14 lg:py-16"><h2 class="font-display text-2xl font-medium text-balance lg:text-3xl">Gostou desta proposta gastronômica?</h2>' +
    `<p class="mt-4 max-w-[46ch] text-base text-ivory/75 text-pretty">Solicite uma proposta personalizada para o seu evento.</p><div class="mt-8">${BOTAO}</div></div>`;
  const main =
    `<main id="conteudo" class="df-editorial-layout df-menu-layout"><section class="bg-sand text-graphite df-unified-opening df-page-opening">${fotoTopo(c.imagem)}` +
    '<div class="mx-auto max-w-6xl px-6 pb-12 pt-8 lg:px-10 lg:pb-16 lg:pt-12"><nav aria-label="Trilha de navegação" class="text-xs text-stone"><ol class="flex flex-wrap items-center gap-2">' +
    `<li><a class="transition-colors hover:text-graphite"${TSD} href="/">Início</a></li>` +
    `<li class="flex items-center gap-2"><span aria-hidden="true">/</span><a aria-current="page" class="transition-colors hover:text-graphite active active" data-status="active"${TSD} href="/cardapios">Cardápios</a></li>` +
    `<li class="flex items-center gap-2"><span aria-hidden="true">/</span><span aria-current="page" class="text-graphite">${esc(c.nome)}</span></li></ol></nav>` +
    '<div class="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14 df-unified-copy"><div class="lg:col-span-7 df-unified-text">' +
    `<p class="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-green">${esc(c.sobretitulo)}</p>` +
    `<h1 class="mt-4 max-w-[22ch] font-display text-3xl font-medium leading-tight text-balance lg:text-5xl df-page-title" data-tsd-source="/src/components/original-page.tsx:152:16">${h1(c.nome)}</h1>` +
    `<p class="mt-6 max-w-[52ch] text-base text-stone text-pretty lg:text-lg">${esc(c.resumo)}</p>${apartir}</div></div></div></section>` +
    `<section class="bg-ivory"><div class="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24"><div class="grid gap-8 md:grid-cols-2 lg:gap-10">${secoes}</div>` +
    caixa +
    `${outros}</div></section>`;
  return pagina({
    title: c.title, description: c.description, url, foto: c.imagem.src, main,
    schemas: [dados.site.negocio, migalhas([['Cardápios', `${SITE}/cardapios`], [c.nome, url]])],
    simulador: !!tab,
  });
}

function paginaLista(L) {
  let primeira = true;
  const cats = L.categorias.map((cat, i) =>
    `<div class="${i ? 'mt-20 scroll-mt-28 lg:mt-28' : 'scroll-mt-28'}" id="${esc(cat.id)}"><div class="flex items-baseline gap-5"><h2 class="font-display text-2xl font-medium text-graphite lg:text-3xl">${esc(cat.titulo)}</h2><span aria-hidden="true" class="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent"></span></div><div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">` +
    cat.cardapios.map((slug, j) => {
      const k = porSlug[slug].cartao, im = k.imagem;
      const alta = primeira ? ' fetchpriority="high"' : ''; primeira = false;
      return `<div class="transition-all duration-700 ease-out motion-reduce:transition-none translate-y-0 opacity-100"${j % 3 ? ` style="transition-delay:${(j % 3) * 90}ms"` : ''}>` +
        `<a class="group flex h-full flex-col overflow-hidden rounded-3xl bg-ivory ring-1 ring-graphite/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_-40px_rgba(22,26,21,0.55)] hover:ring-gold/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0"${TSD} href="/cardapios/${slug}">` +
        `<div class="relative aspect-[4/3] overflow-hidden bg-shell"><img alt="${esc(im.alt)}" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none" decoding="async" height="${im.altura}" loading="lazy" src="${esc(im.src)}" width="${im.largura}"${alta}/></div>` +
        `<div class="flex flex-1 flex-col p-6"><h3 class="font-display text-lg font-medium leading-snug text-graphite text-balance">${esc(k.titulo)}</h3><p class="mt-3 text-sm leading-relaxed text-stone text-pretty">${esc(k.resumo)}</p>` +
        '<span class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green transition-colors group-hover:text-greendeep">Ver cardápio<span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">→</span></span></div></a></div>';
    }).join('') + '</div></div>').join('');
  const F = L.fechamento;
  const main =
    `<main id="conteudo" class="df-editorial-layout"><section class="bg-sand text-graphite df-unified-opening df-page-opening">${fotoTopo(L.imagem)}` +
    '<div class="mx-auto max-w-6xl px-6 pb-14 pt-8 lg:px-10 lg:pb-20 lg:pt-12"><nav aria-label="Trilha de navegação" class="text-xs text-stone"><ol class="flex flex-wrap items-center gap-2">' +
    `<li><a class="transition-colors hover:text-graphite"${TSD} href="/">Início</a></li><li class="flex items-center gap-2"><span aria-hidden="true">/</span><span aria-current="page" class="text-graphite">Cardápios</span></li></ol></nav>` +
    `<p class="mt-10 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-green">${esc(L.sobretitulo)}</p>` +
    `<h1 class="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-balance lg:text-6xl df-page-title" data-tsd-source="/src/components/original-page.tsx:152:16">${h1(L.titulo)}</h1>` +
    `<p class="mt-6 max-w-[46ch] font-brand text-xl text-stone text-pretty lg:text-2xl">${esc(L.chamada)}</p><p class="mt-6 max-w-[58ch] text-base text-stone text-pretty">${esc(L.introducao)}</p>` +
    '<div class="mt-8 flex flex-wrap items-center gap-3">' +
    L.categorias.map((c) => `<a class="rounded-full px-4 py-2 text-sm text-graphite ring-1 ring-graphite/15 transition-colors hover:bg-ivory hover:ring-graphite/30" href="#${esc(c.id)}">${esc(c.titulo)}</a>`).join('') +
    `<a class="rounded-full px-4 py-2 text-sm font-bold bg-[#173023] text-[#C5A880] ring-1 ring-[#C5A880]/40 transition-colors hover:bg-[#0F2118]" href="/painel">👨‍🍳 Painel do Chef</a>` +
    `</div></div></section><section class="bg-ivory"><div class="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">${cats}` +
    `<div class="mt-20 rounded-3xl bg-sand p-8 lg:mt-28 lg:p-12"><h2 class="font-display text-2xl font-medium text-graphite">${esc(F.titulo)}</h2><p class="mt-4 max-w-[58ch] text-base text-stone text-pretty">${esc(F.texto)}</p><ul class="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">` +
    F.links.map((l) => `<li><a class="text-green underline-offset-4 transition-colors hover:text-greendeep hover:underline"${TSD} href="${esc(l.href)}">${esc(l.texto)}</a></li>`).join('') +
    `</ul><div class="mt-8">${BOTAO}</div></div></div></section>`;
  return pagina({
    title: L.title, description: L.description, url: `${SITE}/cardapios`, foto: L.imagem.src, main,
    schemas: [dados.site.negocio, migalhas([['Cardápios', `${SITE}/cardapios`]])],
  });
}

// conferências antes de gravar
for (const c of dados.cardapios) {
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(c.slug)) throw new Error(`slug inválido: ${c.slug}`);
  if (!categoria[c.categoria]) throw new Error(`categoria inexistente em ${c.slug}: ${c.categoria}`);
  for (const o of c.outros) if (!porSlug[o]) throw new Error(`${c.slug} aponta para cardápio inexistente: ${o}`);
}
for (const cat of dados.lista.categorias) for (const s of cat.cardapios) if (!porSlug[s]) throw new Error(`lista aponta para cardápio inexistente: ${s}`);

fs.mkdirSync(path.join(saida, 'cardapios'), { recursive: true });
fs.writeFileSync(path.join(saida, 'cardapios.html'), paginaLista(dados.lista));
for (const c of dados.cardapios) fs.writeFileSync(path.join(saida, 'cardapios', `${c.slug}.html`), paginaCardapio(c));
console.log(`geradas: cardapios.html + ${dados.cardapios.length} páginas em cardapios/ (script ${js[0]})`);
