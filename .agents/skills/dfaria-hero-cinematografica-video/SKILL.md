---
name: dfaria-hero-cinematografica-video
description: >-
  Use esta skill quando o usuário disser "CRIE UMA HERO CINEMATOGRÁFICA EM VÍDEO",
  "Quero uma hero igual a do Fasano", "Coloque vídeo na hero do site", "Otimize o vídeo da hero",
  "Faça engenharia reversa de hero de luxo", "Quero vídeo fluido e leve na hero", "Engenharia de vídeo de luxo"
  ou variantes equivalentes. A skill assume a responsabilidade técnica completa para conceber, otimizar,
  codificar, hospedar e validar heroes cinematográficas em vídeo de altíssimo luxo (padrão Fasano /
  alta gastronomia / hospitalidade), com carregamento instantâneo (FastStart), compressão extrema
  sem perda (3MB a 7MB), poster estático zero-CLS, iluminação cênica sem véu escuro, streaming
  progressivo HTTP 206 e controle total via CMS.
---

# D'FARIA — Engenharia de Hero Cinematográfica em Vídeo de Alto Luxo

## Princípio Fundamental & Visão de Excelência

```
BENCHMARK & ENGENHARIA REVERSA
  ↓
ROTEIRO GASTRONÔMICO (5 CENAS SENSORIAIS)
  ↓
ENCODING & COMPRESSÃO EXTREMA (FASTSTART / DUAL FORMAT)
  ↓
POSTER INSTANTÂNEO & TRANSIÇÃO ZERO-CLS
  ↓
ILUMINAÇÃO CÊNICA PERIFÉRICA (ZERO VÉU ESCURO NO CENTRO)
  ↓
CONFIGURAÇÃO DE SERVIDOR (HTTP 206 STREAMING PROGRESSIVO)
  ↓
CONTROLE DINÂMICO NO CMS / PAINEL DO CHEF
  ↓
AUDITORIA FORENSE MULTI-DEVICE (iOS / ANDROID / DESKTOP)
```

> **REGRA DE OURO:** Uma hero de luxo deve transmitir a sensação de uma superprodução cinematográfica de R$ 500.000 (estilo Fasano, Belmond, Aman Resorts), mas carregar de forma **imediata**, **fluida** e **leve** (3 MB a 7 MB), funcionando perfeitamente em 4G popular, sem travar, sem tela preta e sem véu escuro apagando as cores da gastronomia.

---

## Comandos de Ativação

Reconhecer como acionadores desta skill frases como:
- *"Quero uma hero igual a do Fasano."*
- *"Faça a hero com vídeo do meu buffet."*
- *"Coloque vídeo na hero do site."*
- *"Otimize o vídeo da hero para ficar leve e fluido."*
- *"Engenharia reversa de hero cinematográfica."*
- *"Quero que a entrada do site dê água na boca com vídeo."*

Quando acionada, assumir a liderança técnica completa: arquitetura, código HTML/CSS/JS, pipeline de compressão, streaming no servidor e validação real no navegador.

---

## FASE 1 — A Engenharia Reversa do Padrão Fasano

### 1.1 O Código Real do Fasano (Benchmark Forense)
Ao inspecionar a hero oficial do Fasano (`https://fasano.com.br/`), os atributos essenciais extraídos são:

```html
<video class="object-cover w-screen h-[450px] lg:h-full" 
       muted loop autoplay playsinline fetchpriority="high">
  <source src="https://fasano.com.br/.../fasano-filme.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### 1.2 Por que funciona no Fasano:
1. **`autoplay muted loop playsinline`:**
   - `muted` e `playsinline` são **mandatórios por protocolo**. Sem eles, o WebKit da Apple (iOS Safari) e o Chromium (Android) bloqueiam a reprodução automática, exibindo tela preta ou o ícone cinza de *play* pausado.
2. **`object-fit: cover`:**
   - O vídeo escala matematicamente para preencher 100% da largura e altura da viewport do visitante sem esticar ou criar barras pretas (letterboxing).
3. **`fetchpriority="high"`:**
   - Instrui o escalonador de rede do navegador a priorizar os primeiros chunks do arquivo de vídeo antes de scripts ou imagens secundárias.
4. **Cinematografia em Slow-Motion:**
   - As cenas são filmadas em 60 fps (ou 120 fps) e renderizadas a 24 fps, gerando um movimento suave, desacelerado e sofisticado.

### 1.3 As Falhas do Fasano que o D'Faria NUNCA deve cometer:
1. **O Fasano usa um arquivo de 79 MB!**
   - Em rede móvel 4G ou Wi-Fi instável, 79 MB causam lentidão extrema, estouram a franquia do visitante e destroem a métrica **LCP (Largest Contentful Paint)** do Google.
   - **Padrão D'Faria:** Otimizar o vídeo para pesar entre **3.5 MB e 6.5 MB** (12x mais leve), mantendo nitidez Full HD cristalina.
2. **O Fasano não usa Poster Nativo:**
   - Visitantes em conexões oscilantes veem um clarão preto/cinza de 1 a 2 segundos antes do primeiro frame.
   - **Padrão D'Faria:** Poster instantâneo em WebP de 80 KB com transição de opacidade via JavaScript quando o vídeo dá `playing`.

---

## FASE 2 — Roteiro Cinematográfico Gastronômico (15s em Loop)

Para um buffet e catering de alta gastronomia dar vontade imediata de assistir e contratar, o vídeo não pode ser um conjunto aleatório de fotos. Deve ser um **loop contínuo de 15 segundos**, dividido em 5 atos sensoriais:

| Ato | Tempo | Tema | Elementos Visuais Chave | Enquadramento |
|---|---|---|---|---|
| **Ato 1** | 0s – 3s | **O Fogo & A Brasa** | Fogo vivo da grelha, corte suculento de costela de chão / bife de chorizo, faíscas sutis da lenha | Macro fechado (detalhe) |
| **Ato 2** | 3s – 6s | **A Mesa Posta de Gala** | Toalha verde oliva luxo, taças de cristal lapidado brilhando, arranjo floral nobre de lírios, piscina ao fundo | Panorâmica lenta (deslize) |
| **Ato 3** | 6s – 9s | **Ilha Gourmet & Frios** | Fatiamento de presunto parma, queijos nobres, uvas frescas e esculturas artísticas em frutas | Médio com profundidade de campo |
| **Ato 4** | 9s – 12s | **O Chef & A Precisão** | Chef Cristiano finalizando prato de alta cozinha, fio de azeite trufado, dólmã branca impecável | Plano detalhe / mãos do Chef |
| **Ato 5** | 12s – 15s | **A Celebração & O Brinde**| Brinde com taças de espumante tinindo, luz cênica noturna acolhedora, convidados sorrindo | Médio com bokeh ao fundo |

### Regras de Produção Audiovisual:
- **Taxa de quadros de filmagem:** 60 fps desacelerado para 24 fps (slow-motion suave).
- **Temperatura de cor:** Luz quente e dourada (3200K a 4000K, *golden hour* ou luz de velas).
- **Zero cortes rápidos de videoclipe:** Transições por corte seco em movimento correspondente (*match cut*) ou fusão suave de 0.3s.

---

## FASE 3 — Encoding & Compressão Extrema (Pipeline Técnico)

O segredo de um vídeo rodar leve como uma pluma sem perder qualidade reside na compressão de 2 passos com **H.264 High Profile** e **FastStart**.

### 3.1 O Problema do `moov atom` (FastStart)
Por padrão, programas de edição (Premiere, DaVinci, Final Cut) gravam os metadados do vídeo (`moov atom`) no **final do arquivo**. Isso obriga o navegador a baixar os 100% do vídeo antes de dar play!
Com o parâmetro `-movflags +faststart`, o `moov atom` é movido para o **byte 0**, permitindo que o vídeo comece a rodar após baixar míseros 200 KB!

### 3.2 Comandos Oficiais de Otimização (FFmpeg Playbook)

#### 1. Versão Principal: MP4 Full HD Otimizado (Desktop & Universal)
```bash
ffmpeg -i video-bruto.mp4 \
  -c:v libx264 -profile:v high -level:v 4.1 \
  -preset veryslow -crf 24 \
  -maxrate 3500k -bufsize 7000k \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -r 24 \
  -an \
  -movflags +faststart \
  assets/dfaria-hero-1080p.mp4
```

#### 2. Versão Ultra-Leve: WebM VP9 (Economiza mais 35% de banda)
```bash
ffmpeg -i video-bruto.mp4 \
  -c:v libvpx-vp9 -b:v 2000k -crf 30 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -r 24 \
  -an \
  assets/dfaria-hero-1080p.webm
```

#### 3. Extração do Poster Idêntico (Primeiro Frame em WebP)
```bash
ffmpeg -ss 00:00:00.000 -i video-bruto.mp4 -vframes 1 -q:v 80 assets/hero-video-poster.webp
```

### Tabela de Parâmetros Técnicos Exigidos:
| Parâmetro | Valor Exigido | Motivo Técnico |
|---|---|---|
| **Resolução Desktop** | 1920x1080 | Padrão Full HD nítido para monitores e notebooks |
| **Resolução Mobile** | 1280x720 (ou 1080p bem comprimido) | Economia de GPU e bateria em smartphones |
| **Áudio** | Ausente (`-an`) | Economiza 25-30% do arquivo; vídeo de fundo não usa som |
| **Taxa de Quadros** | 24 fps cravados | Cadência cinematográfica sem desperdício de frames |
| **Tamanho Alvo** | 3.5 MB a 6.5 MB | Baixa em menos de 0.8s em conexões de 50 Mbps |

---

## FASE 4 — Implementação de Código (HTML5, CSS & JS)

### 4.1 Estrutura HTML Semântica
```html
<section class="cinema-hero" id="hero-principal" aria-label="Apresentação D'Faria Gastronomia">
  <!-- Container do Vídeo & Poster -->
  <div class="cinema-media-stage">
    <!-- 1. Poster Instantâneo (Carrega no Byte Zero) -->
    <img
      id="hero-video-poster"
      src="/assets/hero-video-poster.webp"
      alt="Buffet de Alta Gastronomia para Eventos — D’Faria"
      class="cinema-poster"
      fetchpriority="high"
      decoding="async"
    />

    <!-- 2. Vídeo HTML5 com Fallback Multiformato -->
    <video
      id="hero-cinema-video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="/assets/hero-video-poster.webp"
      class="cinema-video"
    >
      <source src="/assets/dfaria-hero-1080p.webm" type="video/webm">
      <source src="/assets/dfaria-hero-1080p.mp4" type="video/mp4">
    </video>

    <!-- 3. Iluminação Cênica Periférica (Zero Véu Escuro Central) -->
    <div class="cinema-ambient-lighting" aria-hidden="true"></div>
  </div>

  <!-- Conteúdo Editorial e Ações (H1, Subtítulo e CTAs) -->
  <div class="container relative z-10">
    <div class="cinema-content max-w-3xl">
      <div class="cinema-badge">D’Faria Gastronomia e Eventos</div>
      <h1 class="cinema-title">
        <span class="cinema-gold">O CHEF CRISTIANO</span><br />
        ASSUME CADA DETALHE.
      </h1>
      <p class="cinema-subtitle">
        Você celebra, confraterniza e aproveita cada momento. Vive o melhor do seu evento.
      </p>
      <div class="cinema-actions">
        <a href="#orcamento" class="btn-gold-luxury">Solicitar Orçamento →</a>
        <a href="/cardapios" class="btn-sand-luxury">Conhecer Cardápios</a>
      </div>
    </div>
  </div>

  <!-- Botão de Acessibilidade: Pausar/Reproduzir -->
  <button id="btn-toggle-video" class="cinema-video-control" aria-label="Pausar vídeo de fundo">
    <svg class="icon-pause w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
    <svg class="icon-play w-4 h-4 hidden" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,3 19,12 5,21"></polygon>
    </svg>
  </button>
</section>
```

### 4.2 CSS da Iluminação Cênica (Zero Véu Escuro)
O erro fatal da maioria dos sites amadores é aplicar uma camada cinza escura opaca (`bg-black/60` ou véu escuro) por cima do vídeo, deixando a comida acinzentada e sem vida.
O método **D'Faria Luxo** usa **vinheta direcional graduada**:

```css
/* Palco da Hero */
.cinema-hero {
  position: relative;
  min-height: 100svh;
  width: 100%;
  overflow: hidden;
  background-color: #0b1a14; /* Tom verde profundo como base sólida */
  display: flex;
  align-items: center;
}

/* Container de Mídia */
.cinema-media-stage {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.cinema-media-stage video,
.cinema-poster {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

/* Transição elegante do poster para o vídeo */
.cinema-poster {
  z-index: 2;
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.cinema-poster.is-hidden {
  opacity: 0;
  pointer-events: none;
}

/* Iluminação Cênica Periférica: Mantém o centro puro e vívido */
.cinema-ambient-lighting {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  background:
    /* Topo: Escurece suavemente para legibilidade da navbar */
    linear-gradient(180deg, rgba(8, 22, 17, 0.78) 0%, rgba(8, 22, 17, 0.25) 18%, transparent 35%),
    /* Esquerda/Base: Contraste para H1 e botões */
    linear-gradient(90deg, rgba(8, 22, 17, 0.92) 0%, rgba(8, 22, 17, 0.65) 45%, transparent 75%),
    /* Base: Transição suave para a próxima seção */
    linear-gradient(0deg, rgba(8, 22, 17, 0.95) 0%, transparent 20%);
}

@media (max-width: 768px) {
  .cinema-ambient-lighting {
    background:
      linear-gradient(180deg, rgba(8, 22, 17, 0.75) 0%, transparent 25%),
      linear-gradient(0deg, rgba(8, 22, 17, 0.95) 0%, rgba(8, 22, 17, 0.7) 50%, transparent 85%);
  }
}

/* Botão discreto de controle do vídeo */
.cinema-video-control {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 20;
  background: rgba(8, 22, 17, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #f7f4ea;
  padding: 0.5rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.cinema-video-control:hover {
  background: rgba(8, 22, 17, 0.9);
  border-color: #d4af37;
  transform: scale(1.05);
}
```

### 4.3 JavaScript de Transição Suave & Economia de Energia
```javascript
(function () {
  const video = document.getElementById('hero-cinema-video');
  const poster = document.getElementById('hero-video-poster');
  const btnToggle = document.getElementById('btn-toggle-video');

  if (!video) return;

  // 1. Respeito ao 'prefers-reduced-motion' (Acessibilidade)
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    video.pause();
    return;
  }

  // 2. Transição suave quando o vídeo realmente começa a rodar (Zero Tela Preta)
  function hidePosterWhenPlaying() {
    if (poster && !poster.classList.contains('is-hidden')) {
      poster.classList.add('is-hidden');
    }
  }

  video.addEventListener('playing', hidePosterWhenPlaying, { once: true });
  video.addEventListener('timeupdate', function () {
    if (video.currentTime > 0.1) hidePosterWhenPlaying();
  });

  // 3. Fallback de Autoplay para navegadores em Modo de Baixo Consumo (iOS)
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(function () {
      // Se o navegador bloqueou o autoplay (ex: bateria fraca do celular),
      // mantém o poster em alta definição perfeitamente visível.
      if (poster) poster.classList.remove('is-hidden');
      if (btnToggle) {
        const iconPlay = btnToggle.querySelector('.icon-play');
        const iconPause = btnToggle.querySelector('.icon-pause');
        if (iconPlay) iconPlay.classList.remove('hidden');
        if (iconPause) iconPause.classList.add('hidden');
      }
    });
  }

  // 4. Pausar vídeo quando fora da tela (Economia extrema de bateria e CPU)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          if (!video.paused) video.pause();
        } else {
          if (video.paused && !video.hasAttribute('data-manual-pause')) {
            video.play().catch(function () {});
          }
        }
      });
    }, { threshold: 0.15 });

    observer.observe(video);
  }

  // 5. Botão de Controle Manual
  if (btnToggle) {
    btnToggle.addEventListener('click', function () {
      const iconPlay = btnToggle.querySelector('.icon-play');
      const iconPause = btnToggle.querySelector('.icon-pause');

      if (video.paused) {
        video.removeAttribute('data-manual-pause');
        video.play();
        if (iconPlay) iconPlay.classList.add('hidden');
        if (iconPause) iconPause.classList.remove('hidden');
      } else {
        video.setAttribute('data-manual-pause', 'true');
        video.pause();
        if (iconPlay) iconPlay.classList.remove('hidden');
        if (iconPause) iconPause.classList.add('hidden');
      }
    });
  }
})();
```

---

## FASE 5 — Configuração de Servidor & Streaming Progressivo (HTTP 206)

Para um vídeo começar a rodar sem esperar o download completo, o servidor web **DEVE suportar Range Requests (HTTP 206 Partial Content)**.

### 5.1 Regras do Apache (`.htaccess` na HostGator)
Garantir a presença das diretivas no arquivo `.htaccess`:

```apache
# Habilita Streaming Progressivo e Cache Imutável para Vídeos da Hero
<IfModule mod_headers.c>
  <FilesMatch "\.(mp4|webm|m4v)$">
    Header set Accept-Ranges bytes
    Header set Cache-Control "public, max-age=31536000, immutable"
    Header set X-Content-Type-Options "nosniff"
  </FilesMatch>
</IfModule>

# MIME Types Corretos
<IfModule mod_mime.c>
  AddType video/mp4 .mp4 .m4v
  AddType video/webm .webm
</IfModule>
```

### 5.2 Desbloqueio no Pipeline de Deploy (GitHub Actions)
No arquivo `.github/workflows/publicar-hostgator.yml`, conferir a cláusula `exclude`.
- **NUNCA** excluir arquivos de vídeo se eles fizerem parte da experiência ativa do site.
- Com o vídeo otimizado para menos de 6 MB, o upload FTP pelo GitHub Actions leva menos de 4 segundos adicionais.

---

## FASE 6 — Integração com o Painel do Chef (CMS Dinâmico)

O Chef Cristiano deve ter autonomia total no [Painel do Chef](/painel) sem mexer em código:

1. **Chave de Alternância (Toggle):**
   - `[x] Exibir Vídeo Cinematográfico de Fundo`
   - `[ ] Exibir Imagem Estática Clássica`
2. **Preset de Vídeos Oficiais:**
   - Botão de seleção rápida com vídeos já otimizados no servidor (`dfaria-hero-1080p.mp4`).
3. **Upload de Novos Vídeos:**
   - Suporte para upload de novos arquivos MP4 direto para o Supabase Storage ou pasta `/assets/midia/`.
4. **Fallback Automático:**
   - Se o campo de vídeo estiver vazio, a página carrega instantaneamente a imagem da capa escolhida sem nenhum erro.

---

## FASE 7 — Checklist Forense de Validação (Antes de Declarar Concluído)

Antes de considerar a hero em vídeo finalizada, executar os 8 testes obrigatórios:

- [ ] **1. Teste de Autoplay em iOS Safari (iPhone):** Confirmar que o vídeo roda automaticamente sem tela preta.
- [ ] **2. Teste de Autoplay em Android Chrome:** Validar que roda sem bloqueio de dados.
- [ ] **3. Teste de Modo Bateria Fraca (Low Power Mode):** Validar que, se o sistema operacional pausar o vídeo para economizar bateria, o poster estático permanece nítido e perfeito.
- [ ] **4. Teste de Streaming HTTP 206:** Testar requisição `curl -I -H "Range: bytes=0-1024" https://dfariagastronomia.com.br/assets/...` e confirmar retorno `206 Partial Content`.
- [ ] **5. Teste de Peso de Arquivo:** Confirmar que o MP4 está abaixo de 7 MB.
- [ ] **6. Teste de Zero Véu Escuro:** Avaliar visualmente se o centro do prato e as cores da gastronomia estão vívidas e apetitosas.
- [ ] **7. Teste de Parada Fora de Tela:** Rolar a página para baixo e verificar no console se o vídeo pausa quando sai da viewport.
- [ ] **8. Sincronização Obrigatória com Lovable e GitHub:** Dar commit e push para `main` e `lovable` e validar o site no ar.

---

## REGRA SUPREMA DA SKILL

> **"Uma hero cinematográfica não é apenas um vídeo passando no fundo. É a declaração de autoridade do Chef Cristiano. O cliente deve abrir o site, sentir o calor do fogo, o frescor das frutas, o brilho dos cristais e tomar a decisão imediata: 'É este buffet que eu quero para o meu evento'."**
