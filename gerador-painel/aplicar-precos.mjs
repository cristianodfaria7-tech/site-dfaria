// Leva para os cardápios os preços salvos no Painel do Chef (aba Preços) e regenera as páginas.
//   node gerador-painel/aplicar-precos.mjs <pasta-do-site>               -> lê do Supabase
//   node gerador-painel/aplicar-precos.mjs <pasta-do-site> precos.json   -> usa um arquivo (testes)
// Regras:
//  - sem registro no Supabase (painel nunca salvou) = não mexe em nada;
//  - cardápio com valor = usa o valor; cardápio sem valor no registro = fica sem preço;
//  - valor que o motor recusa (abaixo do custo etc.) = PARA a publicação com mensagem clara.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';

const raiz = path.resolve(process.argv[2] || '.');
const arquivo = process.argv[3] || null;
const SUPABASE_URL = 'https://gcwxhawqvtqhpoohihjo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_yeda5BcY2QZyBoVMi4r_0Q_Hbxc5Ex2'; // chave pública (só leitura)
const Precos = createRequire(import.meta.url)(path.join(raiz, 'assets', 'motor-precos.js'));
const jsonPath = path.join(raiz, 'gerador-cardapios', 'cardapios.json');

async function lerPrecos() {
  if (arquivo) return JSON.parse(fs.readFileSync(arquivo, 'utf8').replace(/^﻿/, ''));
  const r = await fetch(`${SUPABASE_URL}/rest/v1/site_catalog_config?id=eq.precos&select=negocio`, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
  });
  if (!r.ok) throw new Error(`Supabase respondeu ${r.status} ao ler os preços`);
  const l = await r.json();
  return l[0] && l[0].negocio;
}

const reg = await lerPrecos();
if (!reg || !reg.cardapios) {
  console.log('Preços: o painel ainda não salvou nenhum preço. Cardápios ficam como estão.');
  process.exit(0);
}

const txt = fs.readFileSync(jsonPath, 'utf8');
const dados = JSON.parse(txt);
const erros = [], mudou = [];
for (const c of dados.cardapios) {
  const p = reg.cardapios[c.slug];
  const antes = JSON.stringify(c.preco || null);
  if (p && p.p100 !== undefined && p.p100 !== null && p.p100 !== '') {
    const t = Precos.calcularTabela(p.p100, { temChurrasco: !!p.churrasco });
    if (!t.ok) { erros.push(`${c.nome}: ${t.erros.join(' ')}`); continue; }
    c.preco = { p100: t.p100, churrasco: !!p.churrasco };
  } else {
    delete c.preco;
  }
  if (JSON.stringify(c.preco || null) !== antes) mudou.push(`${c.slug}: ${antes} -> ${JSON.stringify(c.preco || null)}`);
}
if (erros.length) {
  console.error('PUBLICAÇÃO PARADA: preço inválido.\n - ' + erros.join('\n - '));
  process.exit(1);
}
fs.writeFileSync(jsonPath, JSON.stringify(dados, null, 2) + (txt.endsWith('\n') ? '\n' : ''));
console.log(mudou.length ? 'Preços alterados:\n - ' + mudou.join('\n - ') : 'Preços: nada mudou.');
execFileSync(process.execPath, [path.join(raiz, 'gerador-cardapios', 'gerar.mjs'), raiz], { stdio: 'inherit' });
