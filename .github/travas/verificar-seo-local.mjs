// Trava de SEO nos ARQUIVOS, antes do FTP: se falhar, nada é publicado.
//   node .github/travas/verificar-seo-local.mjs
// Complementa verificar-site.mjs (URLs/canonical) e verificar-seo-no-ar.mjs (depois do FTP).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const BASE = 'https://dfariagastronomia.com.br';
const ler = (rel) => fs.readFileSync(path.join(raiz, rel), 'utf8');
const erros = [];
const metaNoindex = (html) => /<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html);

// robots.txt
const robots = ler('robots.txt');
const disallow = robots.split(/\r?\n/).filter((l) => /^\s*disallow\s*:/i.test(l)).map((l) => l.split(':').slice(1).join(':').trim()).filter(Boolean);
if (disallow.includes('/')) erros.push('robots.txt bloqueia o site inteiro (Disallow: /)');
if (disallow.some((d) => '/painel'.startsWith(d))) erros.push('robots.txt bloqueia /painel (o Google não leria o noindex)');
if (!robots.includes(`Sitemap: ${BASE}/sitemap.xml`)) erros.push('robots.txt sem a linha Sitemap');

// sitemap.xml
const sm = ler('sitemap.xml');
const blocos = [...sm.matchAll(/<url>\s*<loc>([^<]+)<\/loc>(?:\s*<lastmod>([^<]*)<\/lastmod>)?\s*<\/url>/g)];
const locs = blocos.map((m) => m[1].trim());
const hoje = new Date().toISOString().slice(0, 10);
if (!locs.length) erros.push('sitemap sem URLs');
if (new Set(locs).size !== locs.length) erros.push('sitemap com URL duplicada');
for (const [, loc, lm] of blocos) {
  const u = loc.trim();
  const p = decodeURI(u.replace(BASE, ''));
  if (!u.startsWith(BASE + '/')) erros.push(`sitemap fora do host oficial: ${u}`);
  if (/\$|\{slug\}|:slug|undefined|null/i.test(p)) erros.push(`sitemap com placeholder: ${u}`);
  if (p !== '/' && p.endsWith('/')) erros.push(`sitemap com barra final: ${u}`);
  if (disallow.some((d) => p.startsWith(d))) erros.push(`sitemap com URL bloqueada no robots: ${u}`);
  if (!lm || !/^\d{4}-\d{2}-\d{2}$/.test(lm) || lm > hoje) erros.push(`lastmod ausente/inválido em ${u}: ${lm || '(sem)'}`);
  const arq = p === '/' ? 'index.html' : p.replace(/^\//, '') + '.html';
  if (fs.existsSync(path.join(raiz, arq)) && metaNoindex(ler(arq))) erros.push(`página do sitemap com noindex: ${arq}`);
}

// páginas que NUNCA podem ser indexadas
for (const f of ['404.html', 'painel.html']) if (!metaNoindex(ler(f))) erros.push(`${f} sem meta noindex`);

// .htaccess: regras do incidente de 26/11 não podem sumir
const ht = ler('.htaccess');
const obrigatorias = [
  'DirectorySlash Off',
  'RewriteRule ^regioes-atendidas(/|/index\\.html)?$ /regioes [R=301,L]',
  'RewriteRule ^regioes-atendidas/tatui(/|/index\\.html)?$',
  'RewriteRule ^regioes-atendidas/cesario-lange(/|/index\\.html)?$',
  'RewriteRule ^regioes-atendidas/tiete(/|/index\\.html)?$',
  'RewriteRule ^regioes-atendidas/condominio-jatoba-cesario-lange(/|/index\\.html)?$',
  'RewriteRule ^regioes-atendidas/village-manaca-cesario-lange(/|/index\\.html)?$',
  'RewriteRule ^regioes-atendidas/(sorocaba|itapetininga|boituva|laranjal-paulista)(/|/index\\.html)?$',
  'RewriteRule \\$slug - [G,L]',
  'RewriteRule ^(.+)/index\\.html$ /$1 [R=301,L]',
  'RewriteRule ^nossos-momentos$ /galeria [R=301,L]',
  '<FilesMatch "^painel\\.html$">',
  'Header set X-Robots-Tag "noindex, nofollow"',
];
for (const r of obrigatorias) if (!ht.includes(r)) erros.push(`.htaccess perdeu a regra: ${r}`);
// a regra do painel não pode valer para outras páginas
const bloco = ht.match(/<FilesMatch "\^painel\\\.html\$">[\s\S]*?<\/FilesMatch>/);
if (/X-Robots-Tag/.test(ht.replace(bloco ? bloco[0] : '', ''))) erros.push('.htaccess tem X-Robots-Tag fora do bloco do painel');

if (erros.length) {
  console.log(`\n❌ SEO (arquivos): PUBLICAÇÃO BLOQUEADA — ${erros.length} problema(s):`);
  for (const e of erros) console.log(' - ' + e);
  if (process.env.GITHUB_ACTIONS) for (const e of erros.slice(0, 30)) console.log(`::error::${e}`);
  process.exit(1);
}
console.log(`✅ SEO (arquivos) OK: robots, ${locs.length} URLs do sitemap com lastmod, noindex certo, regras do .htaccess presentes.`);
