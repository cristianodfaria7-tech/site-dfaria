# Gerador dos cardápios (Fase 0 do Painel do Chef)

As 18 páginas de cardápio (`/cardapios` e `/cardapios/<slug>`) não dependem mais do React.
Elas são HTML pronto, gerado a partir de `cardapios.json`. Esta pasta **não vai para o servidor**.

## Arquivos
- `cardapios.json` — os dados: lista (`lista`), cada cardápio (`cardapios`) e o schema do negócio (`site`).
- `gerar.mjs` — gera `cardapios.html` e `cardapios/*.html`:
  `node gerador-cardapios/gerar.mjs .`
- `molde/` — pedaços iguais em todas as páginas (início do `<head>`, CSS, cabeçalho, rodapé, botão de orçamento).
- `../assets/paginas-estaticas-sNN.js` — faz nas páginas geradas o que o React faz nas outras:
  Google Analytics (`page_view`, `clique_whatsapp`, `clique_telefone`), menu do celular e a janela de orçamento.
- `extrair.mjs` e `soltar-do-react.mjs` — usados uma vez só, na Fase 0 (ficam como registro).

## Regras
- A URL de um cardápio é `/cardapios/<slug>`. **Depois de publicado, o slug nunca muda.**
- Mudou só texto/dados de cardápio? Rode `gerar.mjs` — não precisa mexer em JS.
- Mudou o `paginas-estaticas-sNN.js` (ou qualquer JS)? O arquivo muda de nome
  (`nova-versao-js.mjs`) e depois rode `gerar.mjs` de novo.
- Cabeçalho/rodapé do site mudaram nas outras páginas? Atualize também `molde/topo.html` e `molde/rodape.html`.
