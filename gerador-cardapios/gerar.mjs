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

function pagina({ title, description, url, foto, schemas, main }) {
  const t = esc(title), d = esc(description);
  return molde('inicio-head.html') +
    '<link rel="preload" as="image" href="/__l5e/assets-v1/b202527e-f737-41f0-87e3-8eaae4e6c2db/logo-dfaria.webp"/>' +
    `<link rel="preload" as="image" href="${esc(foto)}"/>` +
    molde('estilos.html') +
    `<title>${t}</title><meta name="description" content="${d}"/>` +
    `<meta property="og:title" content="${t}"/><meta property="og:description" content="${d}"/><meta property="og:type" content="website"/><meta property="og:url" content="${esc(url)}"/>` +
    `<meta property="og:site_name" content="D&#x27;Faria Gastronomia e Eventos"/><meta property="og:locale" content="pt_BR"/><meta property="og:image" content="${SITE}/og-dfaria.jpg"/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/>` +
    `<meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${t}"/><meta name="twitter:description" content="${d}"/><meta name="twitter:image" content="${SITE}/og-dfaria.jpg"/>` +
    `<link rel="icon" href="/favicon.ico" type="image/x-icon"/><link rel="canonical" href="${esc(url)}"/>` +
    schemas.map(ld).join('') +
    '</head>' + molde('topo.html') + main + '</main>' + molde('rodape.html') +
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
  const main =
    `<main id="conteudo" class="df-editorial-layout df-menu-layout"><section class="bg-sand text-graphite df-unified-opening df-page-opening">${fotoTopo(c.imagem)}` +
    '<div class="mx-auto max-w-6xl px-6 pb-12 pt-8 lg:px-10 lg:pb-16 lg:pt-12"><nav aria-label="Trilha de navegação" class="text-xs text-stone"><ol class="flex flex-wrap items-center gap-2">' +
    `<li><a class="transition-colors hover:text-graphite"${TSD} href="/">Início</a></li>` +
    `<li class="flex items-center gap-2"><span aria-hidden="true">/</span><a aria-current="page" class="transition-colors hover:text-graphite active active" data-status="active"${TSD} href="/cardapios">Cardápios</a></li>` +
    `<li class="flex items-center gap-2"><span aria-hidden="true">/</span><span aria-current="page" class="text-graphite">${esc(c.nome)}</span></li></ol></nav>` +
    '<div class="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14 df-unified-copy"><div class="lg:col-span-7 df-unified-text">' +
    `<p class="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-green">${esc(c.sobretitulo)}</p>` +
    `<h1 class="mt-4 max-w-[22ch] font-display text-3xl font-medium leading-tight text-balance lg:text-5xl df-page-title" data-tsd-source="/src/components/original-page.tsx:152:16">${h1(c.nome)}</h1>` +
    `<p class="mt-6 max-w-[52ch] text-base text-stone text-pretty lg:text-lg">${esc(c.resumo)}</p></div></div></div></section>` +
    `<section class="bg-ivory"><div class="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24"><div class="grid gap-8 md:grid-cols-2 lg:gap-10">${secoes}</div>` +
    '<div class="mt-16 rounded-3xl green-texture px-8 py-12 text-ivory lg:mt-24 lg:px-14 lg:py-16"><h2 class="font-display text-2xl font-medium text-balance lg:text-3xl">Gostou desta proposta gastronômica?</h2>' +
    `<p class="mt-4 max-w-[46ch] text-base text-ivory/75 text-pretty">Solicite uma proposta personalizada para o seu evento.</p><div class="mt-8">${BOTAO}</div></div>` +
    `${outros}</div></section>`;
  return pagina({
    title: c.title, description: c.description, url, foto: c.imagem.src, main,
    schemas: [dados.site.negocio, migalhas([['Cardápios', `${SITE}/cardapios`], [c.nome, url]])],
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
