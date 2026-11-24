// Trava do site D'Faria. Roda no GitHub Actions ANTES de publicar.
// Se qualquer regra falhar, a publicação é bloqueada (nada vai para a HostGator).
//
//   node .github/travas/verificar-site.mjs          -> verifica
//   node .github/travas/verificar-site.mjs --criar  -> grava a lista travada (só com OK do dono)
//
// Regras:
//  1. URLs travadas: o sitemap tem exatamente as URLs da lista, nem uma a mais, nem uma a menos.
//  2. Cada URL travada tem a sua página .html no lugar de sempre.
//  3. Nenhuma página .html publicada foi criada, apagada ou renomeada.
//  4. O canonical de cada página aponta para a própria URL.
//  5. Todas as páginas React chamam o MESMO index-*.js que os pedaços importam
//     (nome diferente = React carregado 2x = página em branco).
//  6. Todo arquivo .js/.css que uma página chama existe.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const arqLista = path.join(raiz, '.github', 'travas', 'urls-travadas.json');
const BASE = 'https://dfariagastronomia.com.br';
// pastas/arquivos que NÃO vão para o servidor (mesma lista do workflow)
const fora = /^(\.git|\.github|\.agents|\.ferramentas|node_modules|gerador-cardapios|api)(\/|$)|^(experiencia-3d|experiencia-luxe|hero-template)\.html$/;

const ler = (rel) => fs.readFileSync(path.join(raiz, rel), 'utf8');
function paginasHtml() {
  const r = [];
  (function w(d) {
    for (const f of fs.readdirSync(path.join(raiz, d), { withFileTypes: true })) {
      const rel = d ? d + '/' + f.name : f.name;
      if (fora.test(rel)) continue;
      if (f.isDirectory()) w(rel); else if (f.name.endsWith('.html')) r.push(rel);
    }
  })('');
  return r.sort();
}
const urlsSitemap = () => [...ler('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()).sort();
function arquivoDaUrl(u) {
  const p = decodeURI(u.replace(BASE, '')).replace(/^\//, '');
  return p === '' ? 'index.html' : p + '.html';
}

if (process.argv.includes('--criar')) {
  const lista = { aviso: 'LISTA TRAVADA. Não editar sem autorização do dono do site (Cristiano).', criada_em: new Date().toISOString().slice(0, 10), urls: urlsSitemap(), paginas: paginasHtml() };
  fs.writeFileSync(arqLista, JSON.stringify(lista, null, 2) + '\n');
  console.log(`Lista travada gravada: ${lista.urls.length} URLs, ${lista.paginas.length} páginas .html`);
  process.exit(0);
}

const erros = [];
const lista = JSON.parse(fs.readFileSync(arqLista, 'utf8'));

// 1. sitemap == lista
const sm = urlsSitemap();
for (const u of lista.urls) if (!sm.includes(u)) erros.push(`URL travada sumiu do sitemap: ${u}`);
for (const u of sm) if (!lista.urls.includes(u)) erros.push(`URL nova no sitemap (não autorizada): ${u}`);

// 2. cada URL tem sua página
for (const u of lista.urls) if (!fs.existsSync(path.join(raiz, arquivoDaUrl(u)))) erros.push(`Página da URL ${u} não existe (${arquivoDaUrl(u)})`);

// 3. nenhuma página criada/apagada/renomeada
const atuais = paginasHtml();
for (const p of lista.paginas) if (!atuais.includes(p)) erros.push(`Página apagada ou renomeada: ${p}`);
for (const p of atuais) if (!lista.paginas.includes(p)) erros.push(`Página nova não autorizada: ${p}`);

// 4. canonical
for (const u of lista.urls) {
  const f = arquivoDaUrl(u);
  if (!fs.existsSync(path.join(raiz, f))) continue;
  const m = ler(f).match(/<link rel="canonical" href="([^"]+)"/);
  if (!m) { erros.push(`Sem canonical: ${f}`); continue; }
  const norm = (x) => decodeURI(x).replace(/\/$/, '');
  if (norm(m[1]) !== norm(u)) erros.push(`Canonical errado em ${f}: ${m[1]} (deveria ser ${u})`);
}

// 5. um único index-*.js e igual ao que os pedaços importam
const importados = new Set();
for (const f of fs.readdirSync(path.join(raiz, 'assets'))) {
  if (!f.endsWith('.js') || f.startsWith('index-')) continue;
  for (const m of fs.readFileSync(path.join(raiz, 'assets', f), 'utf8').matchAll(/from\s*"\.\/(index-[^"]+\.js)"/g)) importados.add(m[1]);
}
const usadosNasPaginas = new Map();
for (const p of atuais) {
  for (const m of ler(p).matchAll(/\/assets\/(index-[^"'\s?]+\.js)(\?[^"'\s]*)?/g)) {
    if (m[2]) erros.push(`${p} chama ${m[1]} com "${m[2]}" (proibido: carrega o React 2x)`);
    if (!usadosNasPaginas.has(m[1])) usadosNasPaginas.set(m[1], []);
    usadosNasPaginas.get(m[1]).push(p);
  }
}
if (importados.size > 1) erros.push(`Pedaços importam index diferentes: ${[...importados].join(', ')}`);
for (const [js, ps] of usadosNasPaginas) {
  if (importados.size && !importados.has(js)) erros.push(`${ps.length} página(s) chamam ${js}, mas os pedaços importam ${[...importados][0]} (ex.: ${ps[0]})`);
}

// 6. todo .js/.css chamado existe
for (const p of atuais) {
  for (const m of ler(p).matchAll(/(?:src|href)="(\/assets\/[^"?#]+\.(?:js|css))/g)) {
    const alvo = path.join(raiz, decodeURI(m[1]).replace(/^\//, ''));
    if (!fs.existsSync(alvo)) erros.push(`${p} chama ${m[1]}, que não existe`);
  }
}

if (erros.length) {
  console.log(`\n❌ PUBLICAÇÃO BLOQUEADA — ${erros.length} problema(s):\n`);
  for (const e of [...new Set(erros)]) console.log(' - ' + e);
  if (process.env.GITHUB_ACTIONS) for (const e of [...new Set(erros)].slice(0, 20)) console.log(`::error::${e}`);
  process.exit(1);
}
console.log(`✅ Trava OK: ${lista.urls.length} URLs intactas, ${atuais.length} páginas, canonical certo, 1 index (${[...importados][0] || '-'}), nenhum arquivo faltando.`);
