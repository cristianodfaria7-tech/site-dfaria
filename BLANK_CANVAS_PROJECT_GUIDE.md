# GUIA MESTRE CANÔNICO — PROJETO BLANK CANVAS (D'FARIA GESTÃO)
> **DOCUMENTO OFICIAL DE CONSULTA COMPACTA — LEITURA OBRIGATÓRIA ANTES DE QUALQUER EDIÇÃO**
> *Caminho do Projeto Original:* `D:\DFARIA-GESTAO-NOVO`
> *Repositório GitHub:* `https://github.com/Marcelo-DFaria/blank-canvas.git`
> *Objetivo: Fornecer todo o mapa mental, arquitetura, regras de negócio e restrições técnicas em menos de 2.000 tokens, eliminando o desperdício de tokens na leitura de centenas de arquivos do repositório.*

---

## 1. IDENTIDADE E METADADOS DO REPOSITÓRIO
- **Nome no package.json:** `dfaria-gestao` (Versão 1.0.0)
- **Nome Comum / Alias:** Projeto "Blank Canvas" / D'FARIA Gestão ERP
- **Caminho Local do Código-Fonte:** `D:\DFARIA-GESTAO-NOVO`
- **Repositório GitHub:** `https://github.com/Marcelo-DFaria/blank-canvas.git` (Branch principal: `main`)
- **Espelhos Relacionados:** `cristianodfaria7-tech/D-FARIA-GESTAO` e `cristianodfaria7-tech/dfariagestao-3`
- **Editor Lovable Conectado:** `https://lovable.dev/projects/35578a72-3475-4d51-84f8-42018ed07d9c`
- **Supabase Ativo (Produção):** ID `idrfcnsdsbuepcyhvzza` (`https://idrfcnsdsbuepcyhvzza.supabase.co`)
- **Supabase Legado (Preservado):** ID `dibqtlamtnrjlkvxfjzg` (NUNCA sobrescrever ou conectar para gravação)

---

## 2. STACK TECNOLÓGICA & PADRÕES DE ARQUITETURA
- **Linguagem & Runtime:** TypeScript 5.8.3, Node / Bun (`bun.lock`), ESM puro (`"type": "module"`).
- **Core Framework:** React 19.2 + TanStack Start (v1.168) + TanStack Router (v1.170 com File-based routing tipado).
- **Estilização & UI:** Tailwind CSS v4.2, Shadcn UI (Radix Primitives), Lucide React, CVA (`class-variance-authority`).
- **Bundler & SSR:** Vite 8.1 (`@lovable.dev/vite-tanstack-config`), Nitro 3.
- **Banco de Dados & BaaS:** Supabase JS v2.118, PostgreSQL 15+, 47 migrations ativas, 70 tabelas relacionais com RLS total.
- **Testes & Tipagem:** Vitest 5.0 (mais de 890 testes unitários/integração), `@testing-library/jest-dom`, ESLint 9, Prettier 3.
- **PWA & Portaria Offline:** `vite-plugin-pwa` (Service Worker `sw.js` com estratégia NetworkFirst para HTML e CacheFirst para assets com hash). Suporte a check-in de convidados offline.
- **Inteligência Artificial:** Vercel AI SDK (`ai` v7 + `@ai-sdk/openai`), encapsulado exclusivamente na função `runAI` (`src/lib/ai-assistant.functions.ts`). Suporta fallback automático de provedores gratuitos para pagos.

---

## 3. MAPA DA ÁRVORE DE ROTAS (`src/routes/`)
Toda a navegação é tipada e estruturada via TanStack Router:
- `__root.tsx`: Raiz da aplicação, inicialização de QueryClient e Provedores globais.
- `index.tsx`: Entrada principal (redireciona para login ou dashboard).
- `auth.tsx`: Tela de autenticação e criação inicial do primeiro administrador (`first_admin_setup`).
- `_authenticated/`: Rota pai protegida por autenticação, englobando o `AppShell`:
  - `dashboard.tsx`: Visão geral e métricas do buffet.
  - `crm.tsx` / `relacionamento/`: Pipeline de vendas, gestão de leads, histórico de contatos e WhatsApp.
  - `eventos/` (`index.tsx`, `$id.tsx`, `novo.tsx`): Calendário, briefing, cronograma e conflitos de agenda.
  - `cardapios/` (`index.tsx`, `$id.tsx`) & `cardapio-mesa.tsx`: Gerador de cardápios impressos A4 (12 temas).
  - `orcamentos.tsx` / `propostas.tsx`: Unificados sob o motor de orçamentos e propostas comerciais.
  - `contratos.tsx`, `contratos-assinados.tsx`, `contratos-finalizados.tsx`: Ciclo jurídico e financeiro completo.
  - `financeiro/` (`index.tsx`, `$eventId.tsx`) & `rentabilidade/`: Contas a pagar/receber, baixas parciais e DRE.
  - `compras/` & `requisicoes/`: Gestão de compras, ingredientes e requisições de eventos.
  - `estoque.tsx`: Controle de utensílios, louças, reservas, perdas/quebras e saídas operacionais.
  - `operacao/` (`index.tsx`, `meu-dia.tsx`, `resumo.tsx`, `tarefa/$taskId.tsx`): Checklists diários e semáforo operacional.
  - `ordem-servico/` & `producao/`: Fichas de produção de cozinha e ordem de serviço para equipe.
  - `equipe/`: Escala de garçons, cozinheiros e freelancers com confirmação de presença.
  - `convidados/`: Lista de convidados, RSVP, importação XLSX via IA e controle de acesso.
  - `pos-venda.tsx` & `avaliacoes-google.tsx`: Termômetro pós-evento, pesquisa de satisfação e respostas ao Google.
  - `ia.tsx`: Central de IA Sandrinha para diagnósticos, auditorias e sugestões.
  - `configuracoes.tsx` & `integracoes.tsx`: Identidade visual da tela de login, dados da empresa e formulário web.
- **Rotas Públicas (sem login):**
  - `/rsvp/$token.tsx`: Confirmação pública de convidados por link único.
  - `/proposta/$token.tsx`: Apresentação digital de proposta comercial para o cliente aprovar.
  - `/enviar-orcamento/$token.tsx`: Formulário público para clientes enviarem PDFs ou briefings.
  - `/pesquisa.tsx`: Pesquisa de satisfação pública de pós-venda.
  - `/api/public/`: Endpoints de automação (cron de retenção LGPD, intake de leads e covers de WhatsApp).

---

## 4. REGRAS PÉTREAS E CONVENÇÕES TÉCNICAS INVIOLÁVEIS
Ao receber qualquer ordem para editar, você DEVE respeitar estas regras sem exceção:
1. **Regra Zero:** "Simples para quem usa. Extraordinário por dentro." Nunca transfira complexidade contábil, tributária ou técnica para o usuário da tela.
2. **Data "Hoje" sempre no Fuso de São Paulo:** NUNCA use `new Date().toISOString().slice(0, 10)`. No Brasil, após as 21h, isso vira o dia seguinte. Use SEMPRE `getSaoPauloToday()` de `src/lib/sao-paulo-date.ts`.
3. **Controle de Acesso & Roles:**
   - As roles residem na tabela `public.user_roles` (enum `app_role`).
   - NUNCA armazene roles no perfil do usuário (`profiles`).
   - Verificações de permissão sempre usam `has_role()`.
   - Novos cadastros autônomos entram SEM ROLE (ficam aguardando aprovação na tela `AppShell`).
   - O primeiro administrador é criado exclusivamente via código de segurança em `first_admin_setup`.
4. **Numeração Anual Atômica:**
   - Propostas, orçamentos e contratos têm numeração sequencial atômica anual gerada por trigger de banco (ex: NNN/2026).
   - Edições NUNCA avançam nem alteram sequências existentes.
5. **Gravação Atômica Comercial:**
   - O salvamento de propostas e contratos utiliza a função do banco `save_commercial_document` via `saveDocumentAtomically` (`src/lib/documents/`). Nunca execute gravações parciais que deixem itens órfãos.
6. **Preservação de Dados de Eventos:**
   - Eventos concluídos nunca são deletados. São ocultados das telas operacionais através do helper `src/lib/events/event-lifecycle.ts`. Módulos financeiro, contratos e histórico continuam lendo todos.
7. **Motor de IA Centralizado:**
   - Toda e qualquer chamada de LLM deve ser roteada através de `runAI` em `src/lib/ai-assistant.functions.ts`. Provedores e chaves são gerenciados em `src/lib/ai/ai-providers.ts`.
8. **Compatibilidade com SSR & Worker:**
   - Bibliotecas exclusivas de navegador (como `qrcode` ou `html5-qrcode`) devem ser carregadas via `import()` dinâmico dentro de `useEffect` ou event handlers, NUNCA via import estático no topo do arquivo (evita quebra de build no Nitro/Worker).
9. **Sincronização com GitHub / Lovable:**
   - NUNCA reescrever histórico (`git push --force`), NUNCA fazer rebase ou squash em commits já publicados, pois o Lovable perde o rastreio do projeto.

---

## 5. LOCALIZAÇÃO DOS AGENTS.MD DE SUBDOMÍNIOS (`src/lib/`)
Antes de editar qualquer lógica de negócio profunda, consulte o `AGENTS.md` do subdiretório correspondente:
- `src/lib/contracts/AGENTS.md`: Regras de contratos, assinaturas e vínculos com eventos.
- `src/lib/crm/AGENTS.md`: Validação de telefones, deduplicação de leads e intake de site.
- `src/lib/finance/AGENTS.md`: Cálculos de custos, conciliação e despesas.
- `src/lib/guests/AGENTS.md`: RSVP, importação XLSX, portaria offline e retenção de 180 dias.
- `src/lib/inventory/AGENTS.md`: Estoque de utensílios, reservas e quebras.
- `src/lib/material-requests/AGENTS.md`: Requisições de compras e insumos.
- `src/lib/operations/AGENTS.md`: Semáforo de eventos, checklist "Meu Dia" e tarefas.
- `src/lib/pdf-import/AGENTS.md`: Extração de pratos de PDF e idempotência de importação.
- `src/lib/table-menu/AGENTS.md`: Layout e tipografia para impressão duplex de cardápios.
- `src/lib/weather/AGENTS.md`: Previsão climática para eventos ao ar livre.

---

## 6. COMANDOS DE VALIDAÇÃO (SEMPRE EXECUTAR APÓS ALTERAÇÕES)
No diretório `D:\DFARIA-GESTAO-NOVO`:
```powershell
# 1. Executar bateria de testes automatizados (Vitest)
npm.cmd --prefix "D:\DFARIA-GESTAO-NOVO" test -- --run

# 2. Verificação estrita de tipagem TypeScript (sem emitir arquivos)
cmd.exe /c "cd /d D:\DFARIA-GESTAO-NOVO && npx tsc --noEmit"

# 3. Verificação de linting
npm.cmd --prefix "D:\DFARIA-GESTAO-NOVO" run lint

# 4. Build de produção (Vite + Nitro)
npm.cmd --prefix "D:\DFARIA-GESTAO-NOVO" run build
```

---
*Este documento é a única fonte da verdade necessária para planejar e executar alterações no Blank Canvas com consumo mínimo de tokens.*
