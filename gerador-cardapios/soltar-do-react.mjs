// Fase 0 (uso único): solta as páginas de cardápio do React.
//  1. esvazia, dentro do assets/index-DfSeoNN.js, o HTML guardado das 18 páginas de cardápio
//     (agora elas são HTML puro, geradas por gerar.mjs);
//  2. links para /cardapios... (no conteúdo e no menu) viram links normais: o navegador
//     carrega a página estática em vez de o React montar a versão antiga;
//  3. se mesmo assim o React tentar abrir uma rota de cardápio, ele recarrega a página.
// Depois rodar: node .ferramentas/nova-versao-js.mjs . NN NN+1  (arquivo que muda muda de nome)
//   node gerador-cardapios/soltar-do-react.mjs . 28
import fs from 'node:fs';
import path from 'node:path';

const [root = '.', v = '28'] = process.argv.slice(2);
const assets = path.join(root, 'assets');
const arqIndex = path.join(assets, `index-DfSeo${v}.js`);
let t = fs.readFileSync(arqIndex, 'utf8');
const troca = (de, para, vezes) => {
  const n = t.split(de).length - 1;
  if (n !== vezes) throw new Error(`esperava ${vezes}x, achei ${n}x: ${de.slice(0, 80)}`);
  t = t.split(de).join(para);
};

// 1. HTML guardado dos cardápios -> vazio
const mapa = [...t.matchAll(/"\.\.\/content\/(cardapios(?:__[a-z0-9-]+)?)\.html":([A-Za-z_$][\w$]*)/g)];
if (mapa.length !== 18) throw new Error(`esperava 18 cardápios no mapa, achei ${mapa.length}`);
for (const [, nome, v2] of mapa) {
  const ini = t.indexOf(`,${v2}=\``);
  if (ini < 0 || t.indexOf(`,${v2}=\``, ini + 1) >= 0) throw new Error(`definição de ${v2} (${nome}) não é única`);
  let i = ini + v2.length + 3; // depois da crase de abertura
  for (; i < t.length; i++) { if (t[i] === '\\') { i++; continue; } if (t[i] === '$' && t[i + 1] === '{') throw new Error(`${nome} tem \${}`); if (t[i] === '`') break; }
  t = t.slice(0, ini) + `,${v2}=\`\`` + t.slice(i + 1);
}

// 2a. links do conteúdo
troca(
  'if(t.name===`a`&&s.href?.startsWith(`/`)&&!s.href.startsWith(`/__l5e/`)){let{href:e,...n}=(0,my.attributesToProps)(s);return(0,j.jsx)(pl,{...n,to:String(e),children:(0,my.domToReact)(t.children,g)})}',
  'if(t.name===`a`&&s.href?.startsWith(`/`)&&!s.href.startsWith(`/__l5e/`)){let{href:e,...n}=(0,my.attributesToProps)(s);return/^\\/cardapios(?:[\\/?#]|$)/.test(String(e))?(0,j.jsx)(`a`,{...n,href:String(e),children:(0,my.domToReact)(t.children,g)}):(0,j.jsx)(pl,{...n,to:String(e),children:(0,my.domToReact)(t.children,g)})}',
  1);
// 2b. menu (computador e celular)
troca(
  'WD.map(([e,t])=>(0,j.jsx)(pl,{to:t,children:e},t))',
  'WD.map(([e,t])=>t===`/cardapios`?(0,j.jsx)(`a`,{href:t,children:e},t):(0,j.jsx)(pl,{to:t,children:e},t))',
  2);
fs.writeFileSync(arqIndex, t);

// 3. rotas de cardápio no React: recarregar a página (abre o HTML estático)
let rotas = 0;
for (const f of fs.readdirSync(assets).filter((f) => /^cardapios(_\.[a-z0-9-]+)?-[\w-]+-s\d+\.js$/.test(f))) {
  const p = path.join(assets, f), c = fs.readFileSync(p, 'utf8');
  const m = c.match(/^import\{n as e,t\}from"\.\/index-DfSeo\d+\.js";var n=e\(\);function r\(\)\{return\(0,n\.jsx\)\(t,\{path:`(\/cardapios[a-z0-9\/-]*)`\}\)\}export\{r as component\};\s*$/);
  if (!m) throw new Error(`formato inesperado: ${f}`);
  fs.writeFileSync(p, `function r(){return typeof window<\`u\`&&window.location.assign(\`${m[1]}\`),null}export{r as component};\n`);
  rotas++;
}
if (rotas !== 18) throw new Error(`esperava 18 rotas de cardápio, achei ${rotas}`);
console.log(`ok: 18 HTML esvaziados, links trocados, ${rotas} rotas recarregam a página`);
