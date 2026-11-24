// Aplica o tema (cores e fontes) do Painel do Chef no site.
//   node gerador-painel/aplicar-tema.mjs <pasta-do-site>                 -> lê o tema publicado no Supabase
//   node gerador-painel/aplicar-tema.mjs <pasta-do-site> tema.json       -> usa um arquivo (testes)
// Faz: assets/tema.css + bloco <!--tema-->…<!--/tema--> em todas as páginas e no molde dos cardápios.
// Não cria, apaga nem renomeia página nenhuma (a trava confere).
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const raiz = path.resolve(process.argv[2] || '.');
const arquivoTema = process.argv[3] || null;
const require = createRequire(import.meta.url);
const DfTema = require(path.join(raiz, 'assets', 'tema-gerador.js'));

const SUPABASE_URL = 'https://gcwxhawqvtqhpoohihjo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_yeda5BcY2QZyBoVMi4r_0Q_Hbxc5Ex2'; // chave pública (só leitura)

async function lerTema() {
  if (arquivoTema) return JSON.parse(fs.readFileSync(arquivoTema, 'utf8'));
  const r = await fetch(`${SUPABASE_URL}/rest/v1/site_catalog_config?id=eq.tema&select=negocio`, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
  });
  if (!r.ok) throw new Error(`Supabase respondeu ${r.status} ao ler o tema`);
  const linhas = await r.json();
  return (linhas[0] && linhas[0].negocio) || {};
}

const ANCORA = /(<link rel="stylesheet" href="\/assets\/styles-[\w-]+\.css"[^>]*>)/;
const BLOCO = /<!--tema-->[\s\S]*?<!--\/tema-->/;

function bloco(tema, css) {
  const fontes = DfTema.linkFontes(tema);
  return '<!--tema-->' +
    (fontes ? `<link rel="stylesheet" href="${fontes}"/>` : '') +
    `<link rel="stylesheet" href="/assets/tema.css?v=${DfTema.carimbo(css)}"/>` +
    '<!--/tema-->';
}

function aplicarEm(arq, novoBloco) {
  const s = fs.readFileSync(arq, 'utf8');
  let t;
  if (BLOCO.test(s)) t = s.replace(BLOCO, () => novoBloco);
  else if (ANCORA.test(s)) t = s.replace(ANCORA, (m) => m + novoBloco);
  else return 'sem-ancora';
  if (t === s) return 'igual';
  fs.writeFileSync(arq, t, 'utf8');
  return 'alterado';
}

const tema = await lerTema();
const css = DfTema.gerarCss(tema);
fs.writeFileSync(path.join(raiz, 'assets', 'tema.css'), css, 'utf8');
const novo = bloco(tema, css);

const lista = JSON.parse(fs.readFileSync(path.join(raiz, '.github/travas/urls-travadas.json'), 'utf8')).paginas
  .filter((p) => p !== 'painel.html');
const alvos = [...lista, 'gerador-cardapios/molde/estilos.html'];
const conta = { alterado: 0, igual: 0, 'sem-ancora': 0 };
const semAncora = [];
for (const p of alvos) {
  const r = aplicarEm(path.join(raiz, p), novo);
  conta[r]++;
  if (r === 'sem-ancora') semAncora.push(p);
}
console.log(`tema.css: ${css.split('\n').length - 1} linhas | páginas: ${conta.alterado} alteradas, ${conta.igual} iguais`);
if (semAncora.length) {
  console.error(`ERRO: sem o link de estilos para ancorar o tema em: ${semAncora.join(', ')}`);
  process.exit(1);
}
