// Script de migração dos 17 cardápios do site oficial para o Supabase
// Lê gerador-cardapios/cardapios.json e gera o script SQL completo de inserção (SEED)
// Executável com: node gerador-cardapios/migrar-para-sql.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const jsonPath = path.join(aqui, 'cardapios.json');
const outputPath = path.join(aqui, 'fase1-seed-cardapios.sql');

const dados = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const sqlEscape = (str) => {
  if (str === null || str === undefined) return 'NULL';
  return `'${String(str).replace(/'/g, "''")}'`;
};

const jsonEscape = (obj) => {
  if (obj === null || obj === undefined) return "'{}'::jsonb";
  return `'${JSON.stringify(obj).replace(/'/g, "''")}'::jsonb`;
};

const lines = [];
lines.push('-- ==============================================================================');
lines.push('-- SEED DE DADOS FASE 1: 17 CARDÁPIOS OFICIAIS DO SITE DFARIAGASTRONOMIA.COM.BR');
lines.push('-- ==============================================================================\n');

// 1. Inserir Categorias
lines.push('-- 1. CATEGORIAS');
dados.lista.categorias.forEach((cat, idx) => {
  lines.push(`INSERT INTO public.site_categories (id, titulo, ordem, ativo)
VALUES (${sqlEscape(cat.id)}, ${sqlEscape(cat.titulo)}, ${idx + 1}, true)
ON CONFLICT (id) DO UPDATE SET titulo = EXCLUDED.titulo, ordem = EXCLUDED.ordem;`);
});
lines.push('');

// 2. Inserir Configuração Geral do Catálogo
lines.push('-- 2. CONFIGURAÇÃO GERAL DO CATÁLOGO');
lines.push(`INSERT INTO public.site_catalog_config (id, negocio, lista_cabecalho, fechamento, updated_at)
VALUES (
  'primary',
  ${jsonEscape(dados.site.negocio)},
  ${jsonEscape({
    title: dados.lista.title,
    description: dados.lista.description,
    sobretitulo: dados.lista.sobretitulo,
    titulo: dados.lista.titulo,
    chamada: dados.lista.chamada,
    introducao: dados.lista.introducao,
    imagem: dados.lista.imagem
  })},
  ${jsonEscape(dados.lista.fechamento)},
  now()
)
ON CONFLICT (id) DO UPDATE SET
  negocio = EXCLUDED.negocio,
  lista_cabecalho = EXCLUDED.lista_cabecalho,
  fechamento = EXCLUDED.fechamento,
  updated_at = now();\n`);

// 3. Inserir Configuração Inicial do Motor de Preços
lines.push('-- 3. CONFIGURAÇÃO DO MOTOR DE PREÇOS');
lines.push(`INSERT INTO public.site_pricing_config (id, fracao_compras, frete_medio, piso_margem, inclinacao_volume)
VALUES ('primary', 0.3250, 1200.00, 0.3000, 0.000774)
ON CONFLICT (id) DO NOTHING;\n`);

// 4. Inserir os 17 Cardápios
lines.push('-- 4. OS 17 CARDÁPIOS OFICIAIS');
dados.cardapios.forEach((c, idx) => {
  const outrosArray = c.outros && c.outros.length > 0
    ? `ARRAY[${c.outros.map(o => sqlEscape(o)).join(', ')}]`
    : `'{}'::text[]`;

  lines.push(`INSERT INTO public.site_menus (
  slug, nome, categoria_id, title, description, sobretitulo, resumo, foto_capa, cartao, secoes, outros, status, ordem, updated_at
) VALUES (
  ${sqlEscape(c.slug)},
  ${sqlEscape(c.nome)},
  ${sqlEscape(c.categoria)},
  ${sqlEscape(c.title)},
  ${sqlEscape(c.description)},
  ${sqlEscape(c.sobretitulo)},
  ${sqlEscape(c.resumo)},
  ${jsonEscape(c.imagem)},
  ${jsonEscape(c.cartao)},
  ${jsonEscape(c.secoes)},
  ${outrosArray},
  'publicado',
  ${idx + 1},
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  nome = EXCLUDED.nome,
  categoria_id = EXCLUDED.categoria_id,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  sobretitulo = EXCLUDED.sobretitulo,
  resumo = EXCLUDED.resumo,
  foto_capa = EXCLUDED.foto_capa,
  cartao = EXCLUDED.cartao,
  secoes = EXCLUDED.secoes,
  outros = EXCLUDED.outros,
  status = EXCLUDED.status,
  ordem = EXCLUDED.ordem,
  updated_at = now();\n`);
});

fs.writeFileSync(outputPath, lines.join('\n'), 'utf8');
console.log(`Gerado com sucesso: ${outputPath} (${dados.cardapios.length} cardápios)`);
