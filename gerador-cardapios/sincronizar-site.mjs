// Sincronizador de Páginas do Site com o Supabase
// Atualiza os arquivos HTML estáticos do site com as alterações feitas no Painel do Chef.
//
// Uso: node gerador-cardapios/sincronizar-site.mjs [pasta-do-site]

import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] || path.join(aqui, '..'));
const jsonPath = path.join(aqui, 'site_pages.json');

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
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, error: data });
        }
      });
    }).on('error', reject);
  });
}

async function sincronizar() {
  console.log('🔄 Consultando páginas no Supabase...');
  
  let paginasBanco = null;

  // 1. Tentar tabela dedicada `site_pages`
  const resPages = await fetchSupabase('site_pages?select=*');
  if (resPages.status === 200 && Array.isArray(resPages.data) && resPages.data.length > 0) {
    console.log(`✅ ${resPages.data.length} páginas encontradas na tabela 'site_pages'.`);
    paginasBanco = {};
    for (const p of resPages.data) {
      paginasBanco[p.id] = {
        id: p.id,
        nome: p.nome,
        categoria: p.categoria,
        slug: p.slug,
        meta_title: p.meta_title,
        meta_description: p.meta_description,
        hero: p.hero,
        secoes: p.secoes,
        galeria: p.galeria,
        dados_extras: p.dados_extras
      };
    }
  } else {
    // 2. Tentar `site_catalog_config`
    const resConfig = await fetchSupabase('site_catalog_config?select=*');
    if (resConfig.status === 200 && Array.isArray(resConfig.data)) {
      const pageRows = resConfig.data.filter(r => r.id && r.id.startsWith('page_'));
      if (pageRows.length > 0) {
        console.log(`✅ ${pageRows.length} páginas encontradas em 'site_catalog_config'.`);
        paginasBanco = {};
        for (const r of pageRows) {
          const pid = r.id.replace(/^page_/, '');
          paginasBanco[pid] = r.negocio;
        }
      }
    }
  }

  // Se não houver páginas salvas no banco ainda, carrega a base local inicial
  const baseLocal = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const paginasFinais = paginasBanco || baseLocal;

  // Salva no JSON local para manter o espelho sempre atualizado
  fs.writeFileSync(jsonPath, JSON.stringify(paginasFinais, null, 2), 'utf8');

  // Mapear cada página para seu respectivo arquivo HTML
  let atualizados = 0;
  for (const [pid, p] of Object.entries(paginasFinais)) {
    const filePath = p.arquivo || baseLocal[pid]?.arquivo;
    if (!filePath) continue;

    const fullPath = path.join(root, filePath);
    if (!fs.existsSync(fullPath)) continue;

    let html = fs.readFileSync(fullPath, 'utf8');
    let modificado = false;

    // Atualizar <title>
    if (p.meta_title) {
      const novoTitle = `<title>${p.meta_title}</title>`;
      if (!html.includes(novoTitle)) {
        html = html.replace(/<title>[\s\S]*?<\/title>/i, novoTitle);
        modificado = true;
      }
    }

    // Atualizar <meta name="description">
    if (p.meta_description) {
      const novaDesc = `<meta name="description" content="${p.meta_description}"`;
      if (!html.includes(novaDesc)) {
        html = html.replace(/<meta[^>]*name=["']description["'][^>]*content=["'][^"']*["']/i, novaDesc);
        modificado = true;
      }
    }

    if (modificado) {
      fs.writeFileSync(fullPath, html, 'utf8');
      atualizados++;
    }
  }

  console.log(`✅ Sincronização concluída: ${atualizados} arquivos HTML atualizados.`);
}

sincronizar().catch(err => {
  console.error('❌ Erro na sincronização:', err.message);
  process.exit(1);
});
