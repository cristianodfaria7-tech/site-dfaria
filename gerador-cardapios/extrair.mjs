// Uso único (Fase 0): lê as 18 páginas de cardápio que estão no ar (cardapios.html e
// cardapios/*.html) e grava os dados em gerador-cardapios/cardapios.json, mais o
// cabeçalho e o rodapé comuns em gerador-cardapios/molde/.
// Depois disso, quem manda é o JSON: as páginas são geradas por gerar.mjs.
//   node gerador-cardapios/extrair.mjs .
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = process.argv[2] || '.';
const aqui = path.dirname(fileURLToPath(import.meta.url));
const ler = (f) => fs.readFileSync(path.join(root, f), 'utf8');
const des = (s) => s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const texto = (s) => des(s.replace(/<!-- -->/g, '').replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
const um = (h, re, nome) => { const m = h.match(re); if (!m) throw new Error(`não achei ${nome}`); return m; };

// ---- molde comum (igual nas 18 páginas) ----
const lista = ler('cardapios.html');
if (!lista.includes('<script>(function(a,f)')) { console.log('As páginas já são geradas por gerar.mjs; este extrator era de uso único (Fase 0). Edite cardapios.json.'); process.exit(1); }
const topo = lista.slice(lista.indexOf('</head>') + '</head>'.length, lista.indexOf('<main'));
const rodape = lista.slice(lista.indexOf('</main>') + '</main>'.length, lista.indexOf('<script>(function(a,f)'));
const headIni = lista.slice(0, lista.indexOf('<link rel="preload"'));
const estilos = lista.slice(lista.indexOf('<link rel="stylesheet"'), lista.indexOf('<title>'));
const negocio = JSON.parse(um(lista, /<script type="application\/ld\+json">(\{"@context":"https:\/\/schema.org","@type":"FoodEstablishment"[\s\S]*?)<\/script>/, 'schema')[1]);
fs.mkdirSync(path.join(aqui, 'molde'), { recursive: true });
fs.writeFileSync(path.join(aqui, 'molde', 'inicio-head.html'), headIni);
fs.writeFileSync(path.join(aqui, 'molde', 'estilos.html'), estilos);
fs.writeFileSync(path.join(aqui, 'molde', 'topo.html'), topo);
fs.writeFileSync(path.join(aqui, 'molde', 'rodape.html'), rodape);
fs.writeFileSync(path.join(aqui, 'molde', 'botao-orcamento.html'), um(lista, /<button class="[^"]*js-open-orcamento"[\s\S]*?<\/button>/, 'botão')[0]);

const seo = (h) => ({
  title: des(um(h, /<title>([\s\S]*?)<\/title>/, 'title')[1]),
  description: des(um(h, /<meta name="description" content="([^"]*)"/, 'description')[1]),
});

// ---- página de lista ----
const L = lista.slice(lista.indexOf('<main'), lista.indexOf('</main>'));
const heroL = um(L, /<img alt="([^"]*)" src="([^"]*)" class="df-unified-backdrop"/, 'hero lista');
const categorias = [];
const cartoes = {};
for (const m of L.matchAll(/<div class="(?:mt-20 )?scroll-mt-28(?: lg:mt-28)?" id="([^"]+)">([\s\S]*?)(?=<div class="(?:mt-20 )?scroll-mt-28|<div class="mt-20 rounded-3xl bg-sand)/g)) {
  const titulo = texto(um(m[2], /<h2[^>]*>([\s\S]*?)<\/h2>/, 'h2 categoria')[1]);
  const slugs = [];
  for (const c of m[2].matchAll(/href="\/cardapios\/([^"]+)">[\s\S]*?<img alt="([^"]*)" class="[^"]*" decoding="async" height="(\d+)" loading="lazy" src="([^"]*)" width="(\d+)"(?: fetchpriority="high")?\/>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3><p[^>]*>([\s\S]*?)<\/p>/g)) {
    slugs.push(c[1]);
    cartoes[c[1]] = { titulo: texto(c[6]), resumo: texto(c[7]), imagem: { src: c[4], alt: des(c[2]), largura: Number(c[5]), altura: Number(c[3]) } };
  }
  categorias.push({ id: m[1], titulo, cardapios: slugs });
}
const pagLista = {
  ...seo(lista),
  sobretitulo: texto(um(L, /<p class="mt-10 text-\[0\.68rem\][^"]*">([\s\S]*?)<\/p>/, 'sobretitulo')[1]),
  titulo: texto(um(L, /<h1[^>]*>([\s\S]*?)<\/h1>/, 'h1 lista')[1]),
  chamada: texto(um(L, /<p class="mt-6 max-w-\[46ch\][^"]*">([\s\S]*?)<\/p>/, 'chamada')[1]),
  introducao: texto(um(L, /<p class="mt-6 max-w-\[58ch\] text-base text-stone text-pretty">([\s\S]*?)<\/p>/, 'intro')[1]),
  imagem: { src: heroL[2], alt: des(heroL[1]) },
  fechamento: {
    titulo: texto(um(L, /<div class="mt-20 rounded-3xl bg-sand[^"]*"><h2[^>]*>([\s\S]*?)<\/h2>/, 'fechamento h2')[1]),
    texto: texto(um(L, /<div class="mt-20 rounded-3xl bg-sand[^"]*"><h2[^>]*>[\s\S]*?<\/h2><p[^>]*>([\s\S]*?)<\/p>/, 'fechamento p')[1]),
    links: [...um(L, /<ul class="mt-6 flex flex-wrap gap-x-6[^"]*">([\s\S]*?)<\/ul>/, 'links')[1].matchAll(/href="([^"]+)">([\s\S]*?)<\/a>/g)].map((x) => ({ href: x[1], texto: texto(x[2]) })),
  },
  categorias,
};

// ---- páginas de cada cardápio ----
const cardapios = [];
for (const cat of categorias) for (const slug of cat.cardapios) {
  const h = ler(`cardapios/${slug}.html`);
  const M = h.slice(h.indexOf('<main'), h.indexOf('</main>'));
  // a foto do topo tem 2 formatos no site atual: com largura/altura (foto do próprio cardápio)
  // ou sem (foto de fundo padrão). O gerador repete o mesmo formato.
  let img = M.match(/<img alt="([^"]*)" class="df-unified-backdrop" decoding="async" height="(\d+)" loading="eager" src="([^"]*)" width="(\d+)" fetchpriority="high"\/>/);
  if (!img) { const b = um(M, /<img alt="([^"]*)" src="([^"]*)" class="df-unified-backdrop" loading="eager" fetchpriority="high" decoding="async"\/>/, 'hero ' + slug); img = [b[0], b[1], null, b[2], null]; }
  const secoes = [];
  for (const s of M.matchAll(/<h2 class="font-display text-lg font-medium tracking-tight text-graphite">([\s\S]*?)<\/h2><span[^>]*><\/span><ul class="mt-5 space-y-3">([\s\S]*?)<\/ul>/g)) {
    secoes.push({ titulo: texto(s[1]), itens: [...s[2].matchAll(/<li[^>]*><span[^>]*><\/span>([\s\S]*?)<\/li>/g)].map((i) => texto(i[1])) });
  }
  const ul = M.match(/<ul class="mt-6 grid gap-4 sm:grid-cols-3">([\s\S]*?)<\/ul>/); // quem é único na categoria não tem
  const outros = ul ? [...ul[1].matchAll(/href="\/cardapios\/([^"]+)"/g)].map((x) => x[1]) : [];
  cardapios.push({
    slug,
    nome: texto(um(M, /<span aria-current="page" class="text-graphite">([\s\S]*?)<\/span>/, 'nome ' + slug)[1]),
    categoria: cat.id,
    ...seo(h),
    sobretitulo: texto(um(M, /<p class="text-\[0\.68rem\][^"]*">([\s\S]*?)<\/p>/, 'sobretitulo ' + slug)[1]),
    resumo: texto(um(M, /<p class="mt-6 max-w-\[52ch\][^"]*">([\s\S]*?)<\/p>/, 'resumo ' + slug)[1]),
    imagem: img[2] ? { src: img[3], alt: des(img[1]), largura: Number(img[4]), altura: Number(img[2]) } : { src: img[3], alt: des(img[1]) },
    cartao: cartoes[slug],
    secoes,
    outros,

  });
}

const dados = { versao: 1, site: { negocio }, lista: pagLista, cardapios };
fs.writeFileSync(path.join(aqui, 'cardapios.json'), JSON.stringify(dados, null, 2) + '\n');
console.log(`ok: ${cardapios.length} cardápios + lista, ${categorias.length} categorias`);
