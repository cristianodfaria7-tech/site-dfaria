import fs from 'node:fs';
import path from 'node:path';

const heroTemplate = `
<!-- ================================================================
     HERO CINEMATOGRÁFICA EM VÍDEO REAL FULL HD (SEM VÉU · ULTRA NÍTIDO)
     ================================================================ -->
<section class="cinema-hero" id="hero-cinema" aria-label="Apresentação Cinematográfica D'Faria">
  <div class="cinema-video-stage">
    <img
      id="cinema-poster"
      src="/__l5e/assets-v1/36f147ee-564d-410e-9e6f-d1ec26c3f782/mesa-posta-toalha-verde-dfaria.webp"
      alt="Mesa posta e recepção D'Faria"
      class="cinema-video-poster"
      fetchpriority="high"
    />
    <video
      id="cinema-video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="/__l5e/assets-v1/36f147ee-564d-410e-9e6f-d1ec26c3f782/mesa-posta-toalha-verde-dfaria.webp"
    >
      <source src="/assets/dfaria-hero-fullhd.mp4" type="video/mp4" />
    </video>
    <div class="cinema-ambient-lighting" aria-hidden="true"></div>
  </div>
  <div class="container">
    <div class="cinema-hero-content">
      <div class="cinema-eyebrow">
        <span>Desde 2016 · Cesário Lange e Região</span>
      </div>
      <h1 class="cinema-headline">
        Eu assumo cada detalhe.<br />
        <em>Você vive o esplendor</em> do seu evento.
      </h1>
      <p class="cinema-lead">
        Onde a precisão da alta hospitalidade encontra a alma do fogo ancestral, parrilla ao vivo, ilhas autorais e esculturas exclusivas — conduzidos pelos mais de 38 anos de cozinha do Chef Cristiano De Faria.
      </p>
      <div class="cinema-actions">
        <a href="#curadoria" class="btn-primary-concierge">
          <span>Solicitar Proposta Sob Medida</span>
          <span class="btn-arrow" aria-hidden="true">→</span>
        </a>
        <div class="cinema-google-badge" aria-label="Avaliação máxima no Google">
          <span class="star-gold" aria-hidden="true">★★★★★</span>
          <span>Nota 5 com todas as avaliações positivas no Google</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;

function getRegionsSection(cityInfo) {
  const vizinhasHtml = cityInfo.vizinhas.map(v => `<li class="py-1 text-sm text-graphite">Buffet em ${v} e região</li>`).join('');
  return `
<!-- ================================================================
     SEÇÃO ESTRATÉGICA: CIDADES E REGIÕES ATENDIDAS
     ================================================================ -->
<section class="bg-ivory py-16 border-t border-gold/20" id="regioes-atendidas">
  <div class="container mx-auto px-6 max-w-6xl">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
      <div>
        <span class="text-xs font-bold uppercase tracking-[0.24em] text-gold">Cobertura Regional</span>
        <h2 class="font-serif text-3xl font-bold text-primary mt-2">Atendimento em ${cityInfo.nome} e Cidades Vizinhas</h2>
        <p class="text-stone text-sm mt-2 max-w-2xl">Levamos nossa gastronomia de alta classe, parrilla ao vivo, fogo de chão e enxoval próprio para residências, chácaras, fazendas e condomínios de toda a região.</p>
      </div>
      <a href="/regioes" class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors">
        <span>Ver mapa completo de regiões</span>
        <span aria-hidden="true">→</span>
      </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="p-6 bg-white rounded-xl shadow-sm border border-gold/20">
        <h3 class="font-bold text-base text-primary mb-3">Na sua localidade</h3>
        <p class="text-sm text-stone leading-relaxed">Atendimento completo em <strong>${cityInfo.nome}</strong> com equipe uniformizada, logística pontual, montagem de ilhas de frios e serviço volante do início ao fim.</p>
      </div>

      <div class="p-6 bg-white rounded-xl shadow-sm border border-gold/20">
        <h3 class="font-bold text-base text-primary mb-3">Cidades Vizinhas</h3>
        <ul class="divide-y divide-graphite/10">
          ${vizinhasHtml}
        </ul>
      </div>

      <div class="p-6 bg-white rounded-xl shadow-sm border border-gold/20 flex flex-col justify-between">
        <div>
          <h3 class="font-bold text-base text-primary mb-3">Condomínios & Chácaras</h3>
          <p class="text-sm text-stone leading-relaxed">Estrutura móvel adaptável para condomínios fechados (como Ninho Verde I e II, Colina das Estrelas, Jatobá e Haras Vitória) sem gerar fumaça excessiva.</p>
        </div>
        <div class="mt-4 pt-4 border-t border-graphite/10">
          <a href="https://wa.me/5515996834734?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20para%20${encodeURIComponent(cityInfo.nome)}." class="text-xs font-bold uppercase tracking-wider text-gold hover:underline" target="_blank" rel="noopener noreferrer">Consultar data para ${cityInfo.nome} →</a>
        </div>
      </div>
    </div>
  </div>
</section>
`;
}

console.log('Script helper criado com sucesso');
