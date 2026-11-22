import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const jsonPath = path.join(aqui, 'site_pages.json');
const sqlPath = path.join(aqui, 'fase3-site-pages.sql');

const pages = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

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
lines.push('-- FASE 3: PAINEL DO CHEF - SCHEMA E SEED COMPLETO DAS 19 PÁGINAS DO SITE');
lines.push('-- ==============================================================================\n');

lines.push(`CREATE TABLE IF NOT EXISTS public.site_pages (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    categoria TEXT NOT NULL,
    slug TEXT NOT NULL,
    meta_title TEXT,
    meta_description TEXT,
    hero JSONB NOT NULL DEFAULT '{}'::jsonb,
    secoes JSONB NOT NULL DEFAULT '[]'::jsonb,
    galeria JSONB NOT NULL DEFAULT '[]'::jsonb,
    dados_extras JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);\n`);

lines.push(`ALTER TABLE public.site_pages ENABLE ROW LEVEL SECURITY;\n`);
lines.push(`DROP POLICY IF EXISTS "Leitura pública site_pages" ON public.site_pages;`);
lines.push(`CREATE POLICY "Leitura pública site_pages" ON public.site_pages FOR SELECT USING (true);\n`);
lines.push(`DROP POLICY IF EXISTS "Controle total autenticado site_pages" ON public.site_pages;`);
lines.push(`CREATE POLICY "Controle total autenticado site_pages" ON public.site_pages FOR ALL TO authenticated USING (true) WITH CHECK (true);\n`);

lines.push('-- BUCKET DE MÍDIA');
lines.push(`INSERT INTO storage.buckets (id, name, public) VALUES ('dfaria-midia', 'dfaria-midia', true) ON CONFLICT (id) DO NOTHING;\n`);

lines.push('-- SEED DAS 19 PÁGINAS');
for (const [id, p] of Object.entries(pages)) {
  lines.push(`INSERT INTO public.site_pages (id, nome, categoria, slug, meta_title, meta_description, hero, secoes, galeria, dados_extras, updated_at)
VALUES (
  ${sqlEscape(p.id)},
  ${sqlEscape(p.nome)},
  ${sqlEscape(p.categoria)},
  ${sqlEscape(p.slug)},
  ${sqlEscape(p.meta_title)},
  ${sqlEscape(p.meta_description)},
  ${jsonEscape(p.hero)},
  ${jsonEscape(p.secoes)},
  ${jsonEscape(p.galeria)},
  ${jsonEscape(p.dados_extras)},
  timezone('utc'::text, now())
)
ON CONFLICT (id) DO UPDATE SET
  nome = EXCLUDED.nome,
  categoria = EXCLUDED.categoria,
  slug = EXCLUDED.slug,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  hero = EXCLUDED.hero,
  secoes = EXCLUDED.secoes,
  galeria = EXCLUDED.galeria,
  dados_extras = EXCLUDED.dados_extras,
  updated_at = timezone('utc'::text, now());\n`);
}

fs.writeFileSync(sqlPath, lines.join('\n'), 'utf8');
console.log(`✅ Script SQL gerado com sucesso em ${sqlPath} (${lines.length} linhas)!`);
