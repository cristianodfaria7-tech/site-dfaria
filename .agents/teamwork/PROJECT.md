# Project: D'Faria Gestão — Correção Forense e End-to-End da Importação de PDF

## Architecture
- **Front-end UI (React/Vite)**: `UniversalPdfImportModal`, páginas `/documentos`, `/documentos/novo`, `/orcamentos`. Gerenciamento de estado de upload, preview e chamada de processamento.
- **Backend / Edge Functions / API**: `parsePdfDocumentFn`, autenticação (`requireSupabaseAuth`, validação de claims/JWT), extração de texto/cardápio do PDF.
- **Supabase Database & Storage**: Banco Supabase `idrfcnsdsbuepcyhvzza`, tabelas `commercial_documents`, orçamentos (`budgets` / `proposals`), itens de cardápio (`menu_items`, `event_menus`), bucket de storage de documentos.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | PDF Upload & Parsing UI | Modal e páginas de upload (/documentos, /documentos/novo, /orcamentos) com feedback visual sem piscar/sumir | M1 | User Request |
| 2 | Auth & Claims Handling | Validação e passagem de credenciais de autenticação sem falha silenciosa em requireSupabaseAuth/getClaims | M1 | User Request |
| 3 | Commercial Document Persistence | Persistência íntegra do documento na galeria commercial_documents e storage | M1 | User Request |
| 4 | Budget & Proposal with Menu Extraction | Geração automática de orçamento e proposta comercial estruturada contendo o cardápio extraído do PDF | M1 | User Request |
| 5 | E2E Automated Verification & Lovable Sync | Testes automatizados reais e sincronização com Lovable e GitHub | M1 | User Request |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | PDF Import & Generation E2E Fix | Diagnosticar causa raiz, corrigir front-end, backend parser/auth, persistência no Supabase, testar com PDF real e subir para Lovable | none | IN_PROGRESS |

## Interface Contracts
### Front-end Modal ↔ Parser Endpoint
- Envio de PDF multipart/form-data ou base64/storage path acompanhado de Bearer token válido
- Resposta com dados extraídos: cliente, data, número de pax, cardápio, itens, valor, status

### Parser Endpoint ↔ Supabase Database
- Inserção em `commercial_documents`
- Criação de registro de orçamento / proposta vinculado ao cardápio e cliente
- Retorno de IDs criados para a UI redirecionar ou exibir sucesso com feedback claro

## Code Layout (Target: D:\DFARIA-GESTAO-NOVO)
- Front-end: `D:\DFARIA-GESTAO-NOVO\src\components\documents\`, `src\pages\`, `src\services\`
- Supabase Functions: `D:\DFARIA-GESTAO-NOVO\supabase\functions\`
- Database / Migrations: `D:\DFARIA-GESTAO-NOVO\supabase\migrations\`
