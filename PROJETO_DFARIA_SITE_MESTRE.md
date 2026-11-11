# 🏛️ LIVRO MESTRE & AUDITORIA FORENSE DO PROJETO — D'FARIA GASTRONOMIA E EVENTOS
> **DOCUMENTO OFICIAL DEFINITIVO — FONTE ÚNICA DA VERDADE (SINGLE SOURCE OF TRUTH)**  
> **REGRA PÉTREA INEGOCIÁVEL:** Toda e qualquer consulta, análise, manutenção, evolução, criação de tela ou suporte a este projeto DEVE ser informada a partir deste documento. Proibido ler recursivamente todo o diretório toda vez. Este documento contém o inventário forense, a arquitetura técnica, as regras de negócio, a telefonia cirúrgica, os fluxos de conversão, as 54 rotas e os procedimentos de publicação na HostGator.

---

## 📌 SUMÁRIO EXECUTIVO
1. [Identidade Corporativa e Dados Oficiais](#1-identidade-corporativa-e-dados-oficiais)
2. [Regras Críticas de Contato e Telefonia (Divisão Cirúrgica de Canais)](#2-regras-críticas-de-contato-e-telefonia-divisão-cirúrgica-de-canais)
3. [Arquitetura de Software e Pilha Tecnológica](#3-arquitetura-de-software-e-pilha-tecnológica)
4. [Infraestrutura, Hospedagem e Configuração do Servidor (.htaccess)](#4-infraestrutura-hospedagem-e-configuração-do-servidor-htaccess)
5. [Inventário Cirúrgico das 55 Páginas HTML e Rotas](#5-inventário-cirúrgico-das-55-páginas-html-e-rotas)
   - 5.1 [Páginas Centrais e Institucionais (10 páginas)](#51-páginas-centrais-e-institucionais-10-páginas)
   - 5.2 [Página de Locação de Materiais / "Faça a Festa" (1 página)](#52-página-de-locação-de-materiais--faça-a-festa-1-página)
   - 5.3 [Hub e Páginas de Eventos (4 páginas)](#53-hub-e-páginas-de-eventos-4-páginas)
   - 5.4 [Hub e Páginas de Gastronomia Especializada (6 páginas)](#54-hub-e-páginas-de-gastronomia-especializada-6-páginas)
   - 5.5 [Hub e os 17 Cardápios Gastronômicos Oficiais (18 páginas)](#55-hub-e-os-17-cardápios-gastronômicos-oficiais-18-páginas)
   - 5.6 [Hub Regional e Páginas de Cidades & Condomínios de Alto Padrão (14 páginas)](#56-hub-regional-e-páginas-de-cidades--condomínios-de-alto-padrão-14-páginas)
   - 5.7 [Página 404 e Erros de Roteamento (1 página)](#57-página-404-e-erros-de-roteamento-1-página)
6. [Catálogo Completo de Locação — D'Faria Locações](#6-catálogo-completo-de-locação--dfaria-locações)
7. [Diretório de Ativos, Mídias e Armazenamento (__l5e e assets)](#7-diretório-de-ativos-mídias-e-armazenamento-__l5e-e-assets)
8. [Estratégia de SEO, Metadados e Marcação Semântica (Schema.org JSON-LD)](#8-estratégia-de-seo-metadados-e-marcação-semântica-schemaorg-json-ld)
9. [Protocolo Oficial de Deploy na HostGator](#9-protocolo-oficial-de-deploy-na-hostgator)
10. [Manual de Manutenção Cirúrgica e Regras de Modificação](#10-manual-de-manutenção-cirúrgica-e-regras-de-modificação)

---

## 1. IDENTIDADE CORPORATIVA E DADOS OFICIAIS

* **Razão Social / Nome de Marca:** D'Faria Gastronomia e Eventos
* **Nome Fantasia da Divisão de Locações:** D'Faria Locações (incorporando a tradição da antiga *FAÇA A FESTA*)
* **Fundador e Chef Executivo:** Cristiano De Faria (com mais de 38 anos de sólida trajetória culinária)
* **Data de Fundação:** Desde 2016 (operação de buffet consolidada com alto padrão)
* **Sede Física / Endereço:** R. Quinze de Novembro, 910 – Centro, Cesário Lange – SP, CEP 18285-049, Brasil
* **Horário de Atendimento Comercial:** Segunda a Sexta-feira, das 09:00 às 17:00
* **Domínio Oficial e Produção:** `https://dfariagastronomia.com.br`
* **Redes Sociais e Perfis Oficiais:**
  * **Instagram:** [https://www.instagram.com/dfariagastronomia/](https://www.instagram.com/dfariagastronomia/)
  * **Facebook:** [https://www.facebook.com/dfariagastronomia](https://www.facebook.com/dfariagastronomia)
  * **Google Meu Negócio / Maps:** `https://www.google.com/maps/search/?api=1&query=D%27Faria%20Gastronomia%20e%20Eventos%20Ces%C3%A1rio%20Lange%20SP`
* **Raio de Atuação Principal:** Cesário Lange, Tatuí, Boituva, Cerquilho, Tietê, Itapetininga, Conchas, Pereiras, Porangaba e condomínios de chácaras/casas de campo fechados na região.

---

## 2. REGRAS CRÍTICAS DE CONTATO E TELEFONIA (DIVISÃO CIRÚRGICA DE CANAIS)

> ⚠️ **ATENÇÃO MÁXIMA — REGRA PÉTREA DE CANALIDADE:** O projeto opera com **DOIS NÚMEROS DE WHATSAPP DISTINTOS** com finalidades totalmente separadas. NUNCA misture ou troque esses números em nenhuma circunstância!

| Canal | Número | Link wa.me Formatado | Escopo Exclusivo |
| :--- | :--- | :--- | :--- |
| **Buffet, Gastronomia & Geral** | **(15) 99683-4734** | `https://wa.me/5515996834734?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20o%20D'Faria.` | Home, Cardápios, Eventos Corporativos, Casamentos, Formaturas, Aniversários, Gastronomia, Fale Conosco, Orçamento e Rodapés gerais. |
| **Locação de Materiais ("Faça a Festa")** | **(15) 99769-7332** | `https://wa.me/5515997697332?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20materiais%20para%20loca%C3%A7%C3%A3o%20(FA%C3%87A%20A%20FESTA).%20Data%20do%20evento%2C%20quantidade%20e%20materiais%3A%20` | **EXCLUSIVO** da página `/alugue-material-para-festa.html`, catálogo de louças, mesas, cadeiras, toalhas, rechauds e rodapé da respectiva página. |

---

## 3. ARQUITETURA DE SOFTWARE E PILHA TECNOLÓGICA

* **Tipo de Projeto:** Static Site Generation (SSG) de alta performance gerado a partir de um ecossistema React / Vite / Lovable com hidratação client-side via **TanStack Router (TSR)**.
* **Mecanismo de Hidratação:** `hydrateRoot` do React 18+ operando sobre páginas HTML 100% pré-renderizadas no servidor/build.
* **Roteador Client-Side:** `@tanstack/react-router` configurado com `routeTree` aninhado, `scrollRestoration: true` e `defaultPreloadStaleTime: 0`.
* **Gerenciamento de Estado/Cache:** `@tanstack/react-query` (`QueryClient`).
* **Design System e Estilos:**
  * **Tailwind CSS v4** compilado com suporte nativo a OKLCH e mixin color-mix.
  * `assets/styles-Cg8gDgsz.css`: Folha mestra com classes de componentes, botões animados, grids responsivos e layouts.
  * `assets/original-base-DXwrb0vI.css`: Variáveis CSS, resets e estrutura base.
  * `assets/original-premium-z5YsWDlN.css`: Efeitos de textura, gradientes luxuosos e acentos dourados.
* **Tipografia (Google Fonts pré-carregada):**
  * `Outfit` (pesos 300, 400, 500, 600) — Tipografia primária e títulos elegantes.
  * `Inter` (pesos 400, 500, 600) — Corpo de texto, alta legibilidade e microtipografia.
  * `Manrope` (pesos 700, 800) — Destaques numéricos, números de telefone e botões.
* **Paleta de Cores Oficial:**
  * `gold`: `#c5a059` / variantes de dourado acetinado de alta gastronomia.
  * `goldlight`: tom suave de dourado para contraste em fundos escuros.
  * `greendeep` / `green-texture`: tom verde nobre institucional profundo.
  * `graphite`: tom de carvão escuro para tipografia e seções de contraste.
  * `ivory`: tom marfim quente sofisticado para background principal.
  * `sand`: areia sutil para cartões e detalhes.

---

## 4. INFRAESTRUTURA, HOSPEDAGEM E CONFIGURAÇÃO DO SERVIDOR (.HTACCESS)

O site está preparado especificamente para o ambiente de produção **HostGator (servidor Apache / cPanel / pasta `public_html`)**. O arquivo `.htaccess` na raiz do site contém as seguintes regras vitais:

1. **Opções Globais:**
   * `Options -MultiViews -Indexes`: Desativa listagem aberta de diretórios e desativa a resolução ambígua de nomes do Apache.
   * `DirectorySlash Off`: Evita inclusão de barra no final para arquivos.
   * `DirectoryIndex index.html`: Define `index.html` como índice padrão.
   * `AddDefaultCharset UTF-8`: Força codificação UTF-8 em todos os retornos.
   * `ErrorDocument 404 /404.html`: Roteamento amigável para a página de erro personalizada.

2. **Reescrita e Canonicidade (mod_rewrite):**
   * **Forçamento HTTPS e sem www:**
     ```apache
     RewriteCond %{HTTPS} off [OR]
     RewriteCond %{HTTP_HOST} ^www\. [NC]
     RewriteRule ^ https://dfariagastronomia.com.br%{REQUEST_URI} [R=301,L,NE]
     ```
   * **Remoção de Barra no Final (Trailing Slash Removal):**
     ```apache
     RewriteCond %{REQUEST_URI} !^/$
     RewriteRule ^(.+)/$ /$1 [R=301,L]
     ```
   * **Redirecionamentos 301 de URLs Legadas:**
     * `/nossos-momentos` $\rightarrow$ `/galeria`
     * `/frios-finger-food` $\rightarrow$ `/frios-e-finger-food`
     * `/38-anos-de-experiencia` $\rightarrow$ `/o-dfaria`
   * **Clean URLs (URL limpa sem `.html`):**
     ```apache
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME}.html -f
     RewriteRule ^(.+)$ $1.html [L]
     ```

3. **Compressão GZIP / Deflate (mod_deflate):**
   * Ativada para `text/html`, `text/css`, `application/javascript`, `application/json`, `image/svg+xml`, `text/xml`, `text/plain`.

4. **Políticas de Cache (mod_expires):**
   * `text/html`: `"access plus 0 seconds"` (HTML sempre atualizado para o visitante ver novidades imediatamente).
   * Imagens (`webp`, `jpeg`, `png`), vídeos (`mp4`), `text/css`, `application/javascript`: `"access plus 1 year"` (Cache longo com versionamento via hash).

---

## 5. INVENTÁRIO CIRÚRGICO DAS 55 PÁGINAS HTML E ROTAS

O site conta com **55 páginas HTML pré-renderizadas** categorizadas em 7 grupos estratégicos:

### 5.1 Páginas Centrais e Institucionais (10 páginas)
1. `index.html` (`/`): Página inicial com hero banner luxuoso, apresentação do chef Cristiano De Faria, gastronomia, depoimentos, formulário modal de orçamento, FAQ e rodapé.
2. `o-dfaria.html` (`/o-dfaria`): História comemorativa dos mais de 38 anos de experiência do chef, infraestrutura, equipe e rigor.
3. `galeria.html` (`/galeria`): Galeria fotográfica de alta definição de eventos reais (montagens, ilhas, decorações, mesas de convidados).
4. `depoimentos.html` (`/depoimentos`): Avaliações reais de clientes com links diretos e avatares reais sincronizados com o Google Meu Negócio.
5. `orcamento.html` (`/orcamento`): Sistema completo de cotação interativa com seletor de tipo de evento, número de convidados, data, cardápios e disparo para WhatsApp.
6. `contato.html` (`/contato`): Canais diretos de comunicação, mapa de localização em Cesário Lange, horários e endereço físico.
7. `faq.html` (`/faq`): Central de dúvidas frequentes com Accordions acessíveis sobre contratação, degustação, pagamentos e estrutura.
8. `politica-de-privacidade.html` (`/politica-de-privacidade`): Diretrizes de privacidade e conformidade com a LGPD.
9. `cardapios.html` (`/cardapios`): Portal vitrine com catálogo consolidado de todos os 17 cardápios gastronômicos.
10. `gastronomia.html` (`/gastronomia`): Apresentação dos pilares culinários do buffet (carnes nobres, fogo de chão, finger food e arte).

### 5.2 Página de Locação de Materiais / "Faça a Festa" (1 página)
11. `alugue-material-para-festa.html` (`/alugue-material-para-festa`): Hub da divisão **D'Faria Locações**, herdando a tradição da "FAÇA A FESTA". Apresenta catálogo completo de mesas, cadeiras plásticas, mesas dobráveis, toalhas, rechauds, taças, pratos e talheres. **Canal exclusivo: (15) 99769-7332**.

### 5.3 Hub e Páginas de Eventos (4 páginas)
12. `eventos.html` (`/eventos`): Hub central de eventos sociais e corporativos.
13. `eventos/casamentos.html` (`/eventos/casamentos`): Recepções de casamentos em sítios, salões ou residências, mesa posta, ilhas e jantar.
14. `eventos-corporativos.html` (`/eventos-corporativos`): Confraternizações, feiras, congressos, coffee breaks e churrascos para empresas.
15. `churrasco-para-empresas.html` (`/churrasco-para-empresas`): Landing page especializada em churrasco corporativo premium.
16. `eventos/formaturas.html` (`/eventos/formaturas`): Bailes, recepções solenes e coquetéis de formaturas.
17. `eventos/aniversarios-bodas-e-celebracoes.html` (`/eventos/aniversarios-bodas-e-celebracoes`): Aniversários de adultos, 15 anos/debutantes e bodas.

### 5.4 Hub e Páginas de Gastronomia Especializada (6 páginas)
18. `frios-e-finger-food.html` (`/frios-e-finger-food`): Ilhas de frios sofisticadas, queijos selecionados, canapés gourmet e verrines.
19. `gastronomia/churrasco-premium.html` (`/gastronomia/churrasco-premium`): Churrasco com cortes nobres (picanha, ancho, chorizo) e guarnições especiais.
20. `gastronomia/parrilla-argentina.html` (`/gastronomia/parrilla-argentina`): Autêntico churrasco na grelha de brasas vivas sem fumaça excessiva.
21. `gastronomia/costela-de-chao.html` (`/gastronomia/costela-de-chao`): Cocção lenta de 8 a 12 horas ao fogo de chão tradicional.
22. `gastronomia/esculturas-em-frutas.html` (`/gastronomia/esculturas-em-frutas`): Arte culinária autoral esculpida em melancias e abóboras para destaque das ilhas.
23. `gastronomia/estacoes-gastronomicas.html` (`/gastronomia/estacoes-gastronomicas`): Estações ao vivo de massas flambadas, risotos e paellas.

### 5.5 Hub e os 17 Cardápios Gastronômicos Oficiais (18 páginas)
*Pasta `cardapios/`:*
24. `cardapios/almoco-classico-com-mesa-de-frios.html`
25. `cardapios/almoco-com-churrasco-e-mesa-de-frios.html`
26. `cardapios/almoco-com-ilha-gastronomica.html`
27. `cardapios/almoco-completo-com-ilha-de-frios-e-finger-food.html`
28. `cardapios/almoco-especial-de-carnes-e-peixe.html`
29. `cardapios/almoco-franco-americano.html`
30. `cardapios/brunch-com-pizza.html`
31. `cardapios/cafe-colonial.html`
32. `cardapios/cafe-da-manha-com-mini-sanduiches.html`
33. `cardapios/crepes-franceses.html`
34. `cardapios/debutante-ilha-de-frios-e-massa.html`
35. `cardapios/experiencia-de-fogo-de-chao-e-parrilla.html`
36. `cardapios/feijoada-completa.html`
37. `cardapios/festival-de-massas.html`
38. `cardapios/jantar-completo-selecao-de-carnes-e-massas.html`
39. `cardapios/jantar-completo-versao-especial.html`
40. `cardapios/jantar-tradicional-de-frango.html` (Jantar Tradicional com Strogonoff de Frango)

### 5.6 Hub Regional e Páginas de Cidades & Condomínios de Alto Padrão (14 páginas)
41. `regioes.html` (`/regioes`): Hub com visão geográfica do atendimento regional.
*Cidades com SEO Dedicado:*
42. `buffet-em-cesário-lange.html` (`/buffet-em-cesario-lange`): Sede oficial.
43. `buffet-em-tatuí.html` (`/buffet-em-tatui`)
44. `buffet-em-cerquilho.html` (`/buffet-em-cerquilho`)
45. `buffet-em-tiete.html` (`/buffet-em-tiete`)
46. `buffet-em-conchas.html` (`/buffet-em-conchas`)
47. `buffet-em-pereiras.html` (`/buffet-em-pereiras`)
48. `buffet-em-porangaba.html` (`/buffet-em-porangaba`)
*Condomínios de Luxo / Casas de Campo / Chácaras:*
49. `buffet-no-ninho-verde-1.html` (`/buffet-no-ninho-verde-1`): Condomínio Ninho Verde I Eco Residence.
50. `buffet-novillage-manacá.html` (`/buffet-novillage-manaca`): Condomínio Village Manacá.
51. `colina-das-estrelas.html` (`/colina-das-estrelas`): Condomínio Colina das Estrelas (Tatuí).
52. `buffet-condomínio-jatobá.html` (`/buffet-condominio-jatoba`): Condomínio Residencial Jatobá.
53. `condominio-haras-vitória.html` (`/condominio-haras-vitoria`): Condomínio Haras Vitória.
54. `caninho-1.html` (`/caninho-1`): Condomínio Caninho 1.

### 5.7 Página 404 e Erros de Roteamento (1 página)
55. `404.html` (`/404`): Tratamento elegante de links não encontrados, preservando o menu e com botão de retorno à página principal.

---

## 6. CATÁLOGO COMPLETO DE LOCAÇÃO — D'FARIA LOCAÇÕES

Na rota `/alugue-material-para-festa`, a empresa disponibiliza o acervo completo para eventos particulares e empresariais:
1. **Mesas e Cadeiras Plásticas:** Jogos de mesas 70x70 com 4 cadeiras brancas, limpas e empilháveis.
2. **Mesas Redondas e Retangulares Dobráveis:** Mesas redondas para banquetes (1,20m e 1,50m) e mesas retangulares de apoio ou buffet (com tampo preto e estrutura metálica).
3. **Toalhas e Capas de Cadeira:** Toalhas longas em tecido adamascado ou liso, sobretoalhas, trilhos de mesa e capas para cadeiras plásticas (cores: rosa, branca, preta, dourada, etc.).
4. **Louças e Faqueiros:** Pratos rasos para almoço/jantar, pratos fundos, pratos de sobremesa de porcelana branca, talheres completos em aço inoxidável (garfos, facas de mesa, colheres, garfos de sobremesa).
5. **Vidros e Cristais:** Copos de vidro para água, cerveja e refrigerante, taças de vidro para vinho e champanhe.
6. **Rechauds e Utensílios de Cozinha:** Rechauds retangulares e redondos em inox com cuba para água (banho-maria) e queimadores a álcool gel, pegadores em inox, conchas, travessas de servir e bandejas para garçons.
7. **Suqueiras e Térmicas:** Suqueiras de vidro canelado com torneira e suporte, champanheiras e caixas térmicas para bebidas.

---

## 7. DIRETÓRIO DE ATIVOS, MÍDIAS E ARMAZENAMENTO (__l5e E ASSETS)

O pacote de build possui **308 arquivos** totalizando aproximadamente **52.5 MB**:
* **Pasta `assets/`:** Contém os bundles de runtime:
  * `index-CLIPjaNe.js` (2.44 MB): Motor de renderização, router client-side e componentes dinâmicos (formulário de orçamento, modais, menu mobile).
  * `routes-B6RZxlGA.js`: Manifesto de pré-carregamento de rotas.
  * Folhas de estilo: `styles-Cg8gDgsz.css`, `original-base-DXwrb0vI.css`, `original-premium-z5YsWDlN.css`.
* **Pasta `__l5e/assets-v1/`:** Guarda 89 pastas identificadas por UUID que contêm todas as imagens do site em formato moderno **WebP**, **PNG** e **JPG**. Todas otimizadas, com dimensões pré-fixadas para evitar Cumulative Layout Shift (CLS).
* **Pasta `reviews/`:** Armazena as imagens de perfil dos avaliadores reais do Google Maps:
  * `caroline-cancio-de-oliveira.png`
  * `elias-miguel-inacio-silvestre.png`
  * `emilyn-monreal.png`
  * `larissa-ferreira.png`
  * `marili-aparecida.png`
* **Favicon e Imagem OpenGraph:**
  * `favicon.ico`: Ícone da aba do navegador.
  * `og-dfaria.jpg`: Imagem padrão de compartilhamento para redes sociais (1200x630 px).

---

## 8. ESTRATÉGIA DE SEO, METADADOS E MARCAÇÃO SEMÂNTICA (SCHEMA.ORG JSON-LD)

Todas as 55 páginas possuem marcação semântica profunda e padronizada no `<head>`:
* **Canonical URL:** Sempre apontando para o domínio oficial em HTTPS sem www (ex: `https://dfariagastronomia.com.br/`).
* **Open Graph (Facebook / WhatsApp / LinkedIn):** `og:title`, `og:description`, `og:type="website"`, `og:url`, `og:site_name`, `og:image="https://dfariagastronomia.com.br/og-dfaria.jpg"`, `og:image:width="1200"`, `og:image:height="630"`.
* **Twitter Cards:** `twitter:card="summary_large_image"`, `twitter:title`, `twitter:description`, `twitter:image`.
* **Microdados JSON-LD (Schema.org):**
  * `@type: "FoodEstablishment"` e `additionalType: "https://schema.org/CateringBusiness"`: Detalhando razão social, logo, telefone oficial, endereço completo, horário de funcionamento e cidades atendidas (`areaServed`).
  * `@type: "Organization"`: Validando identidade jurídica da marca.
  * `@type: "FAQPage"` (nas páginas relevantes): Estruturando perguntas e respostas para exibição de Rich Snippets nas SERPs do Google.
  * `@type: "BreadcrumbList"`: Trilha de navegação semântica.
  * `@type: "Service"` (na página de locação): Marcando os serviços do *D'Faria Locações*.
* **Sitemap XML:** `sitemap.xml` estruturado com 53 URLs canônicas e tags `<lastmod>`.
* **Robots.txt:** Configurado com `User-agent: *`, `Allow: /` e `Sitemap: https://dfariagastronomia.com.br/sitemap.xml`.

---

## 9. PROTOCOLO OFICIAL DE DEPLOY NA HOSTGATOR

Para efetuar o deploy seguro sem quebra de cache ou rotas, siga este procedimento comprovado:
1. **Backup Preventivo:** Acesse o cPanel da HostGator e faça o download completo (backup em ZIP) da pasta `public_html` atual.
2. **Limpeza da Área Pública:** Apague o conteúdo antigo dentro de `public_html`.
3. **Upload do Pacote:** Envie o arquivo ZIP da versão estável (`dfaria-site-hostgator-v2-corrigido (1).zip` ou novo build consolidado) para a pasta `public_html`.
4. **Extração:** No Gerenciador de Arquivos do cPanel, selecione o arquivo ZIP e clique em "Extrair" (Extract) diretamente na raiz de `public_html`.
5. **Verificação do `.htaccess`:** Confirme que o arquivo oculto `.htaccess` foi extraído para `public_html` (ative a opção "Mostrar arquivos ocultos / Show Hidden Files" no cPanel).
6. **Homologação Online:** Abra o navegador em aba anônima e teste:
   * Acesso à raiz `https://dfariagastronomia.com.br` (verifique se redireciona de HTTP para HTTPS e se remove `www`).
   * Teste de rota limpa: `https://dfariagastronomia.com.br/cardapios` e `https://dfariagastronomia.com.br/alugue-material-para-festa`.
   * Teste do botão de orçamento: confirmar abertura do WhatsApp `(15) 99683-4734`.
   * Teste da página de locação: confirmar abertura do WhatsApp exclusivo `(15) 99769-7332`.

---

## 10. MANUAL DE MANUTENÇÃO CIRÚRGICA E REGRAS DE MODIFICAÇÃO

Sempre que o agente receber um comando de trabalho relativo a este projeto:
1. **Consulte este documento:** Não faça buscas cegas nem re-leia centenas de arquivos. Todas as rotas, números e convenções estão descritos aqui.
2. **Modificações de Texto em Páginas:**
   * Lembre-se que cada rota possui sua versão pré-renderizada em `.html` e sua rota client-side no bundle `assets/index-CLIPjaNe.js`.
   * Ao alterar conteúdo estático (como telefones, textos de introdução ou imagens) nos arquivos `.html`, certifique-se de manter os links relativos e canônicos intactos.
3. **Preservação de Estilos:**
   * Utilize as classes utilitárias já existentes em `styles-Cg8gDgsz.css` e os seletores padronizados (`animated-button`, `js-open-orcamento`, `green-texture`, `font-display`, `text-gold`).
4. **Preservação dos Contatos:**
   * Nunca altere o WhatsApp de buffet para o de locação ou vice-versa.
   * `99683-4734`: Buffet & Eventos.
   * `99769-7332`: Aluguel de Materiais.
5. **Atualizações no Sitemap:**
   * Sempre que uma nova página HTML for adicionada ou renomeada, atualize imediatamente o `sitemap.xml` e a respectiva regra no `.htaccess` se houver necessidade de redirecionamento 301.

---
*Documento gerado e certificado pela auditoria técnica de engenharia e orquestração do D'Faria Gastronomia.*

