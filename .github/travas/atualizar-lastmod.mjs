// Preenche o <lastmod> de cada URL do sitemap com a data (AAAA-MM-DD) do último commit
// que mudou a página .html dela. Não acrescenta, não tira e não muda nenhuma URL.
//
//   node .github/travas/atualizar-lastmod.mjs            -> grava o sitemap.xml
//   node .github/travas/atualizar-lastmod.mjs --conferir -> só mostra o que mudaria (exit 1 se mudar)
//
// Roda no GitHub Actions antes do FTP (precisa do histórico: checkout com fetch-depth: 0).
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const BASE = 'https://dfariagastronomia.com.br';
const arqSitemap = path.join(raiz, 'sitemap.xml');
const original = fs.readFileSync(arqSitemap, 'utf8');

function arquivoDaUrl(u) {
  const p = decodeURI(u.replace(BASE, '')).replace(/^\//, '');
  return p === '' ? 'index.html' : p + '.html';
}
function dataDoGit(rel) {
  const d = execFileSync('git', ['log', '-1', '--format=%cs', '--', rel], { cwd: raiz, encoding: 'utf8' }).trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) throw new Error(`Sem data no git para ${rel} (histórico raso? use fetch-depth: 0)`);
  return d;
}

const mudancas = [];
const novo = original.replace(/<url>\s*<loc>([^<]+)<\/loc>(?:\s*<lastmod>([^<]*)<\/lastmod>)?\s*<\/url>/g, (bloco, loc, antigo) => {
  const rel = arquivoDaUrl(loc.trim());
  if (!fs.existsSync(path.join(raiz, rel))) throw new Error(`Página da URL ${loc} não existe (${rel})`);
  const data = dataDoGit(rel);
  if (data !== antigo) mudancas.push(`${decodeURI(loc)}: ${antigo || '(sem)'} -> ${data}`);
  return `<url><loc>${loc}</loc><lastmod>${data}</lastmod></url>`;
});

const locs = (s) => [...s.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).join('\n');
if (locs(novo) !== locs(original)) throw new Error('As URLs do sitemap mudariam: abortado.');

console.log(`${mudancas.length} lastmod atualizado(s)`);
mudancas.forEach((m) => console.log('  ' + m));
if (process.argv.includes('--conferir')) process.exit(mudancas.length ? 1 : 0);
if (mudancas.length) fs.writeFileSync(arqSitemap, novo);
