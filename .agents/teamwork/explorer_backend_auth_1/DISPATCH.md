# DISPATCH — Explorer 2 (Backend, Edge Functions, Auth & Parsing)

## Context
Target project workspace: D:\DFARIA-GESTAO-NOVO
Sample PDF: C:\Users\D´Faria Buffet\Downloads\Tania  itamar  010227 100pax.pdf
Original request: d:\site dfariagastronomia\.agents\teamwork\ORIGINAL_REQUEST.md
Project specification: d:\site dfariagastronomia\.agents\teamwork\PROJECT.md

## Objective
Investigar o backend, endpoints, edge functions, autenticação e parsing de PDF:
1. Localizar `parsePdfDocumentFn`, edge functions no Supabase (`supabase/functions/` ou APIs em backend/express/vite/next se houver) em `D:\DFARIA-GESTAO-NOVO`.
2. Investigar a implementação de autenticação: `requireSupabaseAuth`, `getClaims`, validação de JWT / API key. Existe falha de 401/403 não tratada? As claims estão sendo checadas incorretamente para usuários logados ou anônimos?
3. Inspecionar o parser de PDF: bibliotecas usadas (pdf-parse, pdfjs, pdf2json, etc.), suporte ao formato do PDF de exemplo (ex: `Tania  itamar  010227 100pax.pdf`), extração de seções de cardápio, cliente, data, pax e valores.
4. Identificar exatamente por que a chamada falha ou retorna vazio.
5. Documentar todos os achados em `handoff.md` no seu diretório de estado: `d:\site dfariagastronomia\.agents\teamwork\explorer_backend_auth_1\handoff.md`.
