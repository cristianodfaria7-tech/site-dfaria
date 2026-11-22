-- ==============================================================================
-- FASE 1: PAINEL DO CHEF - SCHEMA DO SITE OFICIAL (DFARIAGASTRONOMIA.COM.BR)
-- Tabelas dedicadas com prefixo `site_` para isolamento total e segurança máxima
-- ==============================================================================

-- 1. Categorias dos Cardápios do Site
CREATE TABLE IF NOT EXISTS public.site_categories (
    id TEXT PRIMARY KEY,
    titulo TEXT NOT NULL,
    ordem INTEGER NOT NULL DEFAULT 0,
    ativo BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Cardápios Oficiais do Site
CREATE TABLE IF NOT EXISTS public.site_menus (
    slug TEXT PRIMARY KEY, -- O slug é permanente e imutável após publicado
    nome TEXT NOT NULL,
    categoria_id TEXT NOT NULL REFERENCES public.site_categories(id) ON DELETE RESTRICT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    sobretitulo TEXT,
    resumo TEXT NOT NULL,
    foto_capa JSONB NOT NULL DEFAULT '{}'::jsonb, -- { src, alt, largura, altura }
    cartao JSONB NOT NULL DEFAULT '{}'::jsonb,
    secoes JSONB NOT NULL DEFAULT '[]'::jsonb, -- [ { titulo, itens: [...] } ]
    outros TEXT[] DEFAULT '{}', -- slugs de cardápios relacionados
    status TEXT NOT NULL DEFAULT 'publicado', -- 'rascunho', 'publicado', 'arquivado'
    ordem INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Configurações Globais do Catálogo do Site
CREATE TABLE IF NOT EXISTS public.site_catalog_config (
    id TEXT PRIMARY KEY DEFAULT 'primary',
    negocio JSONB NOT NULL DEFAULT '{}'::jsonb, -- Schema.org FoodEstablishment / CateringBusiness
    lista_cabecalho JSONB NOT NULL DEFAULT '{}'::jsonb, -- title, description, chamada, introducao, imagem
    fechamento JSONB NOT NULL DEFAULT '{}'::jsonb, -- links de rodapé
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Motor de Preços & Dados Confidenciais (Acesso Restrito ao Dono)
CREATE TABLE IF NOT EXISTS public.site_pricing_config (
    id TEXT PRIMARY KEY DEFAULT 'primary',
    fracao_compras NUMERIC(5, 4) NOT NULL DEFAULT 0.3250, -- c = 32.5%
    frete_medio NUMERIC(10, 2) NOT NULL DEFAULT 1200.00,
    piso_margem NUMERIC(5, 4) NOT NULL DEFAULT 0.3000, -- 30%
    inclinacao_volume NUMERIC(8, 6) NOT NULL DEFAULT 0.000774,
    equipe_regras JSONB NOT NULL DEFAULT '{
        "cozinheiro": { "custo": 350.00, "por_convidados": 200 },
        "maitre": { "custo": 350.00, "por_convidados": 100 },
        "garcom": { "custo": 200.00, "por_convidados": 25 },
        "ajudante": { "custo": 200.00, "por_convidados": 50 },
        "churrasqueiro": { "custo": 350.00, "por_convidados": 100 }
    }'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Histórico e Auditoria de Alterações (Audit Log)
CREATE TABLE IF NOT EXISTS public.site_audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    autor TEXT NOT NULL, -- 'Cristiano' ou 'Claude'
    acao TEXT NOT NULL, -- 'criar_cardapio', 'editar_cardapio', 'publicar'
    alvo_slug TEXT,
    dados_anteriores JSONB,
    dados_novos JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- SEGURANÇA & PERMISSÕES (Row Level Security - RLS)
-- ==============================================================================

ALTER TABLE public.site_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_menus ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_catalog_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_pricing_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_audit_logs ENABLE ROW LEVEL SECURITY;

-- Leitura pública para cardápios e categorias publicados e configurações do site
CREATE POLICY "Leitura pública site_categories" ON public.site_categories
    FOR SELECT USING (true);

CREATE POLICY "Leitura pública site_menus" ON public.site_menus
    FOR SELECT USING (status = 'publicado');

CREATE POLICY "Leitura pública site_catalog_config" ON public.site_catalog_config
    FOR SELECT USING (true);

-- Autenticados (Chef Cristiano e Painel do Chef) têm controle total
CREATE POLICY "Controle total autenticado site_categories" ON public.site_categories
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Controle total autenticado site_menus" ON public.site_menus
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Controle total autenticado site_catalog_config" ON public.site_catalog_config
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Controle total autenticado site_pricing_config" ON public.site_pricing_config
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Controle total autenticado site_audit_logs" ON public.site_audit_logs
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Garantir acesso aos schemas
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON public.site_categories, public.site_menus, public.site_catalog_config TO anon;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
