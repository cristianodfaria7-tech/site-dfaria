# MEMÓRIA PERSISTENTE DO PROJETO — D'FARIA GASTRONOMIA E EVENTOS

## 🏛️ REGRA PÉTREA DE CONHECIMENTO & CONSULTA
Toda e qualquer informação técnica, arquitetural, de rotas, de telefonia, de catálogo ou de regras de negócio sobre este projeto DEVE ser consultada diretamente no **DOCUMENTO MESTRE**:
👉 `d:\site dfariagastronomia\PROJETO_DFARIA_SITE_MESTRE.md`

**É PROIBIDO ler recursivamente todos os arquivos e pastas do projeto toda vez.** Todas as respostas, análises e decisões devem partir do Documento Mestre.

---

## ⚡ RESUMO RÁPIDO PARA O AGENTE (DECISÕES & CONVENÇÕES CRÍTICAS)

1. **Identidade do Projeto:**
   - D'Faria Gastronomia e Eventos (Desde 2016).
   - Chef Executivo: Cristiano De Faria (38+ anos de experiência culinária).
   - Endereço Físico: R. Quinze de Novembro, 910 – Centro, Cesário Lange – SP, CEP 18285-049.
   - Domínio Oficial: `https://dfariagastronomia.com.br`

2. **Telefonia & Canais de WhatsApp (DIVISÃO CIRÚRGICA):**
   - **Buffet, Gastronomia & Geral:** `(15) 99683-4734` (`https://wa.me/5515996834734`)
   - **Locação de Materiais ("Faça a Festa" / D'Faria Locações):** `(15) 99769-7332` (`https://wa.me/5515997697332`)
   - *Nunca misturar ou inverter esses dois números.*

3. **Arquitetura & Hospedagem:**
   - Site estático pré-renderizado (SSG) gerado via TanStack Router + React + Vite + Tailwind CSS.
   - Hospedagem: HostGator (servidor Apache / cPanel / pasta `public_html`).
   - Servidor configurado via `.htaccess` (Clean URLs sem `.html`, forçamento de HTTPS sem www, redirecionamentos 301, compressão Gzip e cache policies).

4. **Inventário:**
   - 54 páginas HTML (10 Centrais, 1 Locações, 4 Eventos, 6 Gastronomia, 18 Cardápios, 13 Cidades/Condomínios de alto padrão, 1 Página 404).
   - 308 arquivos (~52.5 MB), incluindo mídias WebP em `__l5e/assets-v1/` e avaliações do Google em `reviews/`.

