// Coloca na página /galeria as fotos enviadas pelo Painel do Chef.
//   node gerador-painel/aplicar-galeria.mjs <pasta-do-site>              -> lê do Supabase
//   node gerador-painel/aplicar-galeria.mjs <pasta-do-site> galeria.json -> usa um arquivo (testes)
// Cada foto é baixada para assets/galeria/ (o site não depende do Supabase para mostrar)
// e entra no topo da grade da galeria, no mesmo formato das fotos atuais
// (o filtro por categoria e o "ampliar foto" funcionam sozinhos).
import fs from 'node:fs';
import path from 'node:path';

const raiz = path.resolve(process.argv[2] || '.');
const arquivo = process.argv[3] || null;
const SUPABASE_URL = 'https://gcwxhawqvtqhpoohihjo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_yeda5BcY2QZyBoVMi4r_0Q_Hbxc5Ex2'; // chave pública (só leitura)
const CATEGORIAS = ['Ilhas de Frios e Finger Foods', 'Churrasco', 'Montagem', 'Finger Foods', 'Corporativo', 'Equipe', 'Celebrações'];

async function lerGaleria() {
  if (arquivo) return JSON.parse(fs.readFileSync(arquivo, 'utf8').replace(/^﻿/, ''));
  const r = await fetch(`${SUPABASE_URL}/rest/v1/site_catalog_config?id=eq.galeria&select=negocio`, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
  });
  if (!r.ok) throw new Error(`Supabase respondeu ${r.status} ao ler a galeria`);
  const l = await r.json();
  return (l[0] && l[0].negocio) || {};
}

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const nomeSeguro = (s) => /^[a-z0-9][a-z0-9._-]{2,120}\.(webp|jpg|jpeg|png)$/i.test(s);

const BTN = 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 group relative overflow-hidden rounded-xl';

function botao(f, i) {
  const alt = esc(f.legenda || 'Evento D’Faria Gastronomia e Eventos');
  const cat = CATEGORIAS.includes(f.categoria) ? f.categoria : 'Celebrações';
  return `<button class="${BTN}" aria-label="Ampliar foto: ${alt}" data-categoria="${esc(cat)}" data-painel="1">` +
    `<img alt="${alt}" title="${alt}" class="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] aspect-[4/3]" height="${+f.altura || 1080}" width="${+f.largura || 1440}" loading="${i < 3 ? 'eager' : 'lazy'}" decoding="async" src="/assets/galeria/${esc(f.arquivo)}">` +
    `<span class="absolute bottom-0 left-0 right-0 bg-graphite/70 px-4 py-2 text-left text-xs text-graphite opacity-100 transition-colors">${alt}</span></button>`;
}

const galeria = await lerGaleria();
const fotos = (galeria.fotos || []).filter((f) => f && nomeSeguro(f.arquivo || ''));
const pasta = path.join(raiz, 'assets', 'galeria');
fs.mkdirSync(pasta, { recursive: true });

let baixadas = 0;
for (const f of fotos) {
  const destino = path.join(pasta, f.arquivo);
  if (fs.existsSync(destino)) continue;
  const url = `${SUPABASE_URL}/storage/v1/object/public/dfaria-midia/galeria/${encodeURIComponent(f.arquivo)}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Não consegui baixar ${f.arquivo} (${r.status})`);
  fs.writeFileSync(destino, Buffer.from(await r.arrayBuffer()));
  baixadas++;
}

const arqPagina = path.join(raiz, 'galeria.html');
let html = fs.readFileSync(arqPagina, 'utf8');
const bloco = '<!--galeria-painel-->' + fotos.map(botao).join('') + '<!--/galeria-painel-->';
if (/<!--galeria-painel-->[\s\S]*?<!--\/galeria-painel-->/.test(html)) {
  html = html.replace(/<!--galeria-painel-->[\s\S]*?<!--\/galeria-painel-->/, () => bloco);
} else {
  const ancora = /(<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"[^>]*>)/;
  if (!ancora.test(html)) { console.error('ERRO: não achei a grade da galeria em galeria.html'); process.exit(1); }
  html = html.replace(ancora, (m) => m + bloco);
}
fs.writeFileSync(arqPagina, html, 'utf8');
console.log(`galeria: ${fotos.length} foto(s) do painel no topo, ${baixadas} baixada(s) agora`);
