// Sincroniza os cardápios do Supabase com o arquivo local (gerador-cardapios/cardapios.json)
// e regenera as páginas HTML estáticas do site automaticamente.
//
// Uso: node gerador-cardapios/sincronizar-supabase.mjs [pasta-do-site]

import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] || path.join(aqui, '..'));
const jsonPath = path.join(aqui, 'cardapios.json');

const key = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_yeda5BcY2QZyBoVMi4r_0Q_Hbxc5Ex2';
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://gcwxhawqvtqhpoohihjo.supabase.co';

function fetchSupabase(endpoint) {
  return new Promise((resolve, reject) => {
    https.get(`${supabaseUrl}/rest/v1/${endpoint}`, {
      headers: {
        'apikey': key,
        'Authorization': `Bearer ${key}`
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Falha no parse do Supabase: ${data}`));
        }
      });
    }).on('error', reject);
  });
}

async function sincronizar() {
  console.log('🔄 Baixando dados atualizados do Supabase...');
  
  const [categories, menus, config] = await Promise.all([
    fetchSupabase('site_categories?select=*&order=ordem.asc'),
    fetchSupabase('site_menus?select=*&status=eq.publicado&order=ordem.asc'),
    fetchSupabase('site_catalog_config?id=eq.primary')
  ]);

  if (!Array.isArray(categories) || !Array.isArray(menus)) {
    throw new Error('Retorno inválido do Supabase');
  }

  const baseLocal = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  // Atualizar categorias e os slugs pertencentes a cada uma
  const mapaCategorias = categories.map(cat => ({
    id: cat.id,
    titulo: cat.titulo,
    cardapios: menus.filter(m => m.categoria_id === cat.id).map(m => m.slug)
  }));

  // Mapear os 17 cardápios estruturados
  const cardapiosMapeados = menus.map(m => ({
    slug: m.slug,
    nome: m.nome,
    categoria: m.categoria_id,
    title: m.title,
    description: m.description,
    sobretitulo: m.sobretitulo,
    resumo: m.resumo,
    imagem: m.foto_capa,
    cartao: m.cartao,
    secoes: m.secoes,
    outros: m.outros || []
  }));

  const novoJson = {
    ...baseLocal,
    lista: {
      ...baseLocal.lista,
      categorias: mapaCategorias
    },
    cardapios: cardapiosMapeados
  };

  fs.writeFileSync(jsonPath, JSON.stringify(novoJson, null, 2), 'utf8');
  console.log(`✅ ${cardapiosMapeados.length} cardápios sincronizados em cardapios.json.`);

  // Acionar o gerador HTML existente para atualizar as 17 páginas + lista
  const { execSync } = await import('node:child_process');
  execSync(`node "${path.join(aqui, 'gerar.mjs')}" "${root}"`, { stdio: 'inherit' });
}

sincronizar().catch(err => {
  console.error('❌ Erro na sincronização:', err.message);
  process.exit(1);
});
