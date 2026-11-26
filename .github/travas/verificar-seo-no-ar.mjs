// Conferência de SEO NO AR (roda no GitHub Actions depois do FTP, ou à mão):
//   node .github/travas/verificar-seo-no-ar.mjs [https://dfariagastronomia.com.br]
//
// Criada no incidente de indexação de 26/11/2026. Falha (exit 1) se:
//  - robots.txt: inacessível, bloqueando o site inteiro, bloqueando o /painel (o Google
//    precisa rastreá-lo para ler o noindex) ou bloqueando alguma URL do sitemap;
//  - /painel e /painel.html sem noindex no HTML e no cabeçalho X-Robots-Tag (e esse
//    cabeçalho vazando para páginas comerciais);
//  - sitemap com lastmod ausente, inválido ou no futuro;
//  - sitemap: fora do ar, URL duplicada, fora do host oficial, com $slug, que redireciona,
//    que não dá 200, sem canonical própria, com noindex, sem <title> ou sem <h1>;
//  - endereços antigos (regiões, /index.html, redirects de sempre): mais de 1 salto,
//    destino errado, destino que não dá 200 ou que redireciona;
//  - URL com $slug não responder 404/410; página inexistente não responder 404;
//  - 404.html sem noindex; Googlebot recebendo resposta diferente do navegador;
//  - alguma página do sitemap respondendo 403.
const BASE = (process.argv[2] || 'https://dfariagastronomia.com.br').replace(/\/$/, '');
const UA_CHROME = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36';
const UA_GBOT = 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const erros = [];
const ok = (m) => console.log('  ok  ' + m);
const erro = (m) => { erros.push(m); console.log('  ERRO ' + m); };
const pedir = (url, ua = UA_GBOT) => fetch(url, { redirect: 'manual', headers: { 'user-agent': ua } });
const dec = (u) => { try { return decodeURI(u); } catch { return u; } };

// Endereços antigos -> destino esperado (1 salto, 301)
const ANTIGOS = {
  '/regioes-atendidas': '/regioes',
  '/regioes-atendidas/': '/regioes',
  '/regioes-atendidas/index.html': '/regioes',
  '/regioes-atendidas/cesario-lange/': '/buffet-em-cesário-lange',
  '/regioes-atendidas/tatui': '/buffet-em-tatuí',
  '/regioes-atendidas/tatui/': '/buffet-em-tatuí',
  '/regioes-atendidas/tiete/': '/buffet-em-tiete',
  '/regioes-atendidas/conchas/': '/buffet-em-conchas',
  '/regioes-atendidas/cerquilho/': '/buffet-em-cerquilho',
  '/regioes-atendidas/pereiras/': '/buffet-em-pereiras',
  '/regioes-atendidas/porangaba/': '/buffet-em-porangaba',
  '/regioes-atendidas/colina-das-estrelas/': '/colina-das-estrelas',
  '/regioes-atendidas/condominio-jatoba-cesario-lange/': '/buffet-condomínio-jatobá',
  '/regioes-atendidas/village-manaca-cesario-lange/': '/buffet-novillage-manacá',
  '/regioes-atendidas/sorocaba/': '/regioes',
  '/regioes-atendidas/itapetininga/': '/regioes',
  '/regioes-atendidas/boituva/': '/regioes',
  '/regioes-atendidas/laranjal-paulista/': '/regioes',
  '/regioes-atendidas/tatui/index.html': '/buffet-em-tatuí',
  '/index.html': '/',
  '/cardapios/almoco-classico-com-mesa-de-frios/index.html': '/cardapios/almoco-classico-com-mesa-de-frios',
  '/eventos/casamentos/index.html': '/eventos/casamentos',
  '/gastronomia/parrilla-argentina/index.html': '/gastronomia/parrilla-argentina',
  '/nossos-momentos': '/galeria',
  '/38-anos-de-experiencia': '/o-dfaria',
  '/frios-finger-food': '/frios-e-finger-food',
  '/regioes/': '/regioes',
  '/eventos/': '/eventos',
  '/cardapios/': '/cardapios',
};

console.log(`\n== robots.txt (${BASE})`);
const rRobots = await pedir(BASE + '/robots.txt');
const robots = await rRobots.text();
const disallow = robots.split(/\r?\n/).filter((l) => /^\s*disallow\s*:/i.test(l)).map((l) => l.split(':').slice(1).join(':').trim());
if (rRobots.status !== 200) erro(`robots.txt respondeu ${rRobots.status}`); else ok('robots.txt 200');
if (disallow.includes('/')) erro('robots.txt bloqueia o site inteiro (Disallow: /)'); else ok('não bloqueia o site inteiro');
if (disallow.some((d) => d && '/painel'.startsWith(d))) erro('robots.txt bloqueia /painel: o Google não consegue ler o noindex'); else ok('/painel rastreável (o Google lê o noindex)');
if (!/^sitemap:\s*https:\/\/dfariagastronomia\.com\.br\/sitemap\.xml/im.test(robots)) erro('robots.txt sem a linha Sitemap'); else ok('linha Sitemap presente');

console.log('\n== sitemap.xml');
const rSm = await pedir(BASE + '/sitemap.xml');
const sm = await rSm.text();
if (rSm.status !== 200) erro(`sitemap respondeu ${rSm.status}`);
if (!/xml/.test(rSm.headers.get('content-type') || '')) erro(`sitemap com content-type ${rSm.headers.get('content-type')}`);
if (!/^\s*<\?xml[\s\S]*<urlset[\s\S]*<\/urlset>\s*$/.test(sm)) erro('sitemap não parece XML válido (urlset)');
const locs = [...sm.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => m[1]);
const dups = locs.filter((u, i) => locs.indexOf(u) !== i);
if (dups.length) erro('URLs duplicadas no sitemap: ' + dups.join(', '));
console.log(`  ${locs.length} URLs`);
let okSm = 0;
for (const u of locs) {
  const p = [];
  const caminho = new URL(u).pathname;
  if (!u.startsWith('https://dfariagastronomia.com.br/')) p.push('host/protocolo');
  if (/\$slug|%24slug|\{slug\}|:slug/i.test(u)) p.push('placeholder');
  if (u !== BASE + '/' && u.endsWith('/')) p.push('barra final');
  if (disallow.some((d) => d && dec(caminho).startsWith(d))) p.push('bloqueada no robots');
  const r = await pedir(u);
  const html = r.status === 200 ? await r.text() : '';
  if (r.status !== 200) p.push(`HTTP ${r.status}${r.headers.get('location') ? ' -> ' + r.headers.get('location') : ''}`);
  else {
    const canon = (html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) || [])[1];
    if (!canon) p.push('sem canonical');
    else if (dec(canon) !== dec(u)) p.push('canonical ' + canon);
    if (/<meta[^>]+name=["']robots["'][^>]*noindex/i.test(html) || /noindex/i.test(r.headers.get('x-robots-tag') || '')) p.push('noindex');
    if (!/<title[^>]*>\s*\S/i.test(html)) p.push('sem title');
    if (!/<h1[\s>]/i.test(html)) p.push('sem h1');
    if (html.includes('$slug')) p.push('HTML contém $slug');
  }
  if (p.length) erro(`${dec(u)}: ${p.join('; ')}`); else okSm++;
}
ok(`${okSm}/${locs.length} URLs do sitemap: 200, canonical própria, indexável, title e h1`);

console.log('\n== endereços antigos (1 salto 301 -> destino 200)');
for (const [de, para] of Object.entries(ANTIGOS)) {
  const r = await pedir(BASE + de);
  const loc = r.headers.get('location') || '';
  const destino = loc ? new URL(loc, BASE).href : '';
  const esperado = BASE + para;
  if (r.status !== 301) { erro(`${de}: esperado 301, veio ${r.status}${loc ? ' -> ' + loc : ''}`); continue; }
  if (dec(destino) !== esperado) { erro(`${de}: foi para ${dec(destino)} (esperado ${esperado})`); continue; }
  const r2 = await pedir(destino);
  if (r2.status !== 200) { erro(`${de} -> ${dec(destino)}: destino respondeu ${r2.status} (cadeia ou erro)`); continue; }
  ok(`${de} -> ${para}`);
}

console.log('\n== URLs que não existem');
for (const u of ['/cardapios/$slug', '/eventos/$slug', '/gastronomia/$slug', '/cardapios/%24slug']) {
  const r = await pedir(BASE + u);
  if (r.status === 404 || r.status === 410) ok(`${u} -> ${r.status}`); else erro(`${u}: esperado 404/410, veio ${r.status}`);
}
const r404 = await pedir(BASE + '/pagina-que-nao-existe-' + Date.now());
if (r404.status !== 404) erro(`página inexistente respondeu ${r404.status}`); else ok('página inexistente -> 404');

const p404 = await (await pedir(BASE + '/404.html')).text();
if (!/<meta[^>]+name=["']robots["'][^>]*noindex/i.test(p404)) erro('404.html sem noindex'); else ok('404.html com noindex');
for (const c of ['/painel', '/painel.html']) {
  const painel = await pedir(BASE + c);
  const painelHtml = painel.status === 200 ? await painel.text() : '';
  const xrt = painel.headers.get('x-robots-tag') || '';
  if (painel.status !== 200) erro(`${c} respondeu ${painel.status}`);
  else if (!/<meta[^>]+name=["']robots["'][^>]*noindex/i.test(painelHtml)) erro(`${c} sem meta noindex`);
  else if (!/noindex/i.test(xrt)) erro(`${c} sem cabeçalho X-Robots-Tag noindex`);
  else ok(`${c}: noindex no HTML e no cabeçalho`);
}
// o cabeçalho noindex do painel não pode vazar para páginas comerciais
for (const u of [BASE + '/', locs.find((x) => /cardapios\//.test(x))].filter(Boolean)) {
  const r = await pedir(u);
  if (/noindex/i.test(r.headers.get('x-robots-tag') || '')) erro(`${dec(u)} recebeu X-Robots-Tag noindex`); else ok(`${dec(u)} sem X-Robots-Tag noindex`);
}
// lastmod: formato válido e nunca no futuro
const hoje = new Date().toISOString().slice(0, 10);
const lms = [...sm.matchAll(/<lastmod>([^<]*)<\/lastmod>/g)].map((m) => m[1]);
const lmRuins = lms.filter((d) => !/^\d{4}-\d{2}-\d{2}$/.test(d) || d > hoje);
if (lms.length !== locs.length) erro(`sitemap: ${locs.length - lms.length} URL(s) sem lastmod`);
else if (lmRuins.length) erro('lastmod inválido ou no futuro: ' + lmRuins.join(', '));
else ok(`lastmod presente e válido nas ${lms.length} URLs`);

console.log('\n== Googlebot x navegador (mesma resposta)');
for (const u of [locs[0], locs.find((x) => /buffet-em/.test(x)), locs.find((x) => /cardapios\//.test(x)), BASE + '/regioes-atendidas/tatui/'].filter(Boolean)) {
  const a = await pedir(u, UA_CHROME), b = await pedir(u, UA_GBOT);
  if (a.status !== b.status) erro(`${dec(u)}: navegador ${a.status} x Googlebot ${b.status}`); else ok(`${dec(u)}: ${a.status} para os dois`);
}

if (erros.length) {
  console.log(`\n❌ SEO NO AR: ${erros.length} problema(s)`);
  if (process.env.GITHUB_ACTIONS) for (const e of erros.slice(0, 30)) console.log(`::error::${e}`);
  process.exit(1);
}
console.log('\n✅ SEO no ar OK: robots, sitemap, canonical, redirects antigos e 404/410 conferidos.');
