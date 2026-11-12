import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dicionário de regiões para personalizar o bloco em cada cidade/condomínio
const regioesRelacionadas = {
  'buffet-em-cesário-lange.html': { nome: 'Cesário Lange', vizinhas: ['Tatuí', 'Cerquilho', 'Boituva', 'Pereiras'] },
  'buffet-em-tatuí.html': { nome: 'Tatuí', vizinhas: ['Cesário Lange', 'Boituva', 'Cerquilho', 'Itapetininga'] },
  'buffet-em-cerquilho.html': { nome: 'Cerquilho', vizinhas: ['Tietê', 'Boituva', 'Cesário Lange', 'Tatuí'] },
  'buffet-em-tiete.html': { nome: 'Tietê', vizinhas: ['Cerquilho', 'Boituva', 'Porto Feliz', 'Laranjal Paulista'] },
  'buffet-em-conchas.html': { nome: 'Conchas', vizinhas: ['Pereiras', 'Porangaba', 'Cesário Lange', 'Laranjal Paulista'] },
  'buffet-em-pereiras.html': { nome: 'Pereiras', vizinhas: ['Conchas', 'Cesário Lange', 'Porangaba', 'Tatuí'] },
  'buffet-em-porangaba.html': { nome: 'Porangaba', vizinhas: ['Conchas', 'Pereiras', 'Bofete', 'Cesário Lange'] },
  'buffet-no-ninho-verde-1.html': { nome: 'Ninho Verde I', vizinhas: ['Porangaba', 'Castelo Branco', 'Cesário Lange', 'Conchas'] },
  'buffet-condomínio-jatobá.html': { nome: 'Condomínio Jatobá', vizinhas: ['Cesário Lange', 'Tatuí', 'Boituva', 'Cerquilho'] },
  'buffet-novillage-manacá.html': { nome: 'Village Manacá', vizinhas: ['Cesário Lange', 'Tatuí', 'Cerquilho', 'Boituva'] },
  'colina-das-estrelas.html': { nome: 'Colina das Estrelas', vizinhas: ['Tatuí', 'Cesário Lange', 'Boituva', 'Itapetininga'] },
  'condominio-haras-vitória.html': { nome: 'Haras Vitória', vizinhas: ['Cesário Lange', 'Tatuí', 'Boituva', 'Cerquilho'] }
};

// Bloco global para páginas genéricas (cardápios, eventos, institucional, etc.)
const genericRegionBlock = `
<!-- ================================================================
     SEÇÃO ESTRATÉGICA: CIDADES E REGIÕES ATENDIDAS
     ================================================================ -->
<section class="bg-ivory py-16 border-t border-gold/20" id="regioes-atendidas">
  <div class="container mx-auto px-6 max-w-6xl">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
      <div>
        <span class="text-xs font-bold uppercase tracking-[0.24em] text-gold">Cobertura Regional</span>
        <h2 class="font-serif text-3xl font-bold text-primary mt-2">Cidades e Regiões Atendidas pelo D’Faria</h2>
        <p class="text-stone text-sm mt-2 max-w-2xl">Atendimento de alta hospitalidade com equipe própria, transporte refrigerado, parrilla e fogo de chão em toda a região de Cesário Lange e condomínios de alto padrão.</p>
      </div>
      <a href="/regioes" class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors">
        <span>Ver todas as regiões atendidas</span>
        <span aria-hidden="true">→</span>
      </a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div class="p-5 bg-white rounded-xl shadow-sm border border-gold/20">
        <h3 class="font-bold text-base text-primary mb-2">Polo Central</h3>
        <p class="text-xs text-stone mb-3">Sede e base operacional em Cesário Lange.</p>
        <ul class="text-xs text-graphite space-y-1.5">
          <li><a href="/buffet-em-cesário-lange" class="hover:underline">· Cesário Lange (Centro e Fazendas)</a></li>
          <li><a href="/buffet-em-tatuí" class="hover:underline">· Tatuí</a></li>
          <li><a href="/buffet-em-cerquilho" class="hover:underline">· Cerquilho</a></li>
        </ul>
      </div>

      <div class="p-5 bg-white rounded-xl shadow-sm border border-gold/20">
        <h3 class="font-bold text-base text-primary mb-2">Eixo Médio Tietê</h3>
        <p class="text-xs text-stone mb-3">Atendimento contínuo em cidades vizinhas.</p>
        <ul class="text-xs text-graphite space-y-1.5">
          <li><a href="/buffet-em-tiete" class="hover:underline">· Tietê</a></li>
          <li><a href="/regioes" class="hover:underline">· Boituva</a></li>
          <li><a href="/regioes" class="hover:underline">· Itapetininga</a></li>
        </ul>
      </div>

      <div class="p-5 bg-white rounded-xl shadow-sm border border-gold/20">
        <h3 class="font-bold text-base text-primary mb-2">Circuito das Colinas</h3>
        <p class="text-xs text-stone mb-3">Festas e eventos em chácaras e sítios.</p>
        <ul class="text-xs text-graphite space-y-1.5">
          <li><a href="/buffet-em-conchas" class="hover:underline">· Conchas</a></li>
          <li><a href="/buffet-em-pereiras" class="hover:underline">· Pereiras</a></li>
          <li><a href="/buffet-em-porangaba" class="hover:underline">· Porangaba</a></li>
        </ul>
      </div>

      <div class="p-5 bg-white rounded-xl shadow-sm border border-gold/20">
        <h3 class="font-bold text-base text-primary mb-2">Condomínios de Luxo</h3>
        <p class="text-xs text-stone mb-3">Equipe acostumada com normas de condomínio.</p>
        <ul class="text-xs text-graphite space-y-1.5">
          <li><a href="/buffet-no-ninho-verde-1" class="hover:underline">· Ninho Verde I e II</a></li>
          <li><a href="/colina-das-estrelas" class="hover:underline">· Colina das Estrelas</a></li>
          <li><a href="/condominio-haras-vitória" class="hover:underline">· Haras Vitória</a></li>
          <li><a href="/buffet-novillage-manacá" class="hover:underline">· Village Manacá</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>
`;

function getSpecificRegionBlock(info) {
  const vizinhasList = info.vizinhas.map(v => `<li class="py-1 text-sm text-graphite">· Buffet em ${v} e região</li>`).join('');
  return `
<!-- ================================================================
     SEÇÃO ESTRATÉGICA: CIDADES E REGIÕES ATENDIDAS (${info.nome.toUpperCase()})
     ================================================================ -->
<section class="bg-ivory py-16 border-t border-gold/20" id="regioes-atendidas">
  <div class="container mx-auto px-6 max-w-6xl">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
      <div>
        <span class="text-xs font-bold uppercase tracking-[0.24em] text-gold">Cobertura Regional</span>
        <h2 class="font-serif text-3xl font-bold text-primary mt-2">Atendimento em ${info.nome} e Cidades Vizinhas</h2>
        <p class="text-stone text-sm mt-2 max-w-2xl">Levamos nossa gastronomia de alta classe, parrilla ao vivo, fogo de chão e enxoval próprio para residências, chácaras, fazendas e condomínios de toda a região de ${info.nome}.</p>
      </div>
      <a href="/regioes" class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors">
        <span>Ver mapa completo de regiões</span>
        <span aria-hidden="true">→</span>
      </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="p-6 bg-white rounded-xl shadow-sm border border-gold/20">
        <h3 class="font-bold text-base text-primary mb-3">Na sua localidade (${info.nome})</h3>
        <p class="text-sm text-stone leading-relaxed">Atendimento completo em <strong>${info.nome}</strong> com equipe uniformizada, logística pontual, montagem de ilhas de frios e serviço volante do início ao fim.</p>
      </div>

      <div class="p-6 bg-white rounded-xl shadow-sm border border-gold/20">
        <h3 class="font-bold text-base text-primary mb-3">Cidades Vizinhas Atendidas</h3>
        <ul class="divide-y divide-graphite/10">
          ${vizinhasList}
        </ul>
      </div>

      <div class="p-6 bg-white rounded-xl shadow-sm border border-gold/20 flex flex-col justify-between">
        <div>
          <h3 class="font-bold text-base text-primary mb-3">Condomínios & Chácaras</h3>
          <p class="text-sm text-stone leading-relaxed">Estrutura móvel adaptável para condomínios fechados (como Ninho Verde I e II, Colina das Estrelas, Jatobá e Haras Vitória) com serviço impecável e sem fumaça excessiva.</p>
        </div>
        <div class="mt-4 pt-4 border-t border-graphite/10">
          <a href="https://wa.me/5515996834734?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20para%20${encodeURIComponent(info.nome)}." class="text-xs font-bold uppercase tracking-wider text-gold hover:underline" target="_blank" rel="noopener noreferrer">Consultar data para ${info.nome} →</a>
        </div>
      </div>
    </div>
  </div>
</section>
`;
}

// Injeção de CSS Luxe no <head> se ainda não tiver
function injectLuxeCss(html) {
  if (html.includes('/assets/luxe-3d.css')) return html;
  return html.replace(
    '</head>',
    '  <link rel="stylesheet" href="/assets/luxe-3d.css" />\n</head>'
  );
}

// Injeção do bloco de regiões antes do rodapé
function injectRegionSection(html, filename) {
  if (html.includes('id="regioes-atendidas"')) return html; // já injetado

  const baseName = path.basename(filename);
  const block = regioesRelacionadas[baseName] 
    ? getSpecificRegionBlock(regioesRelacionadas[baseName])
    : genericRegionBlock;

  // Localiza o <footer ou </main>
  if (html.includes('<footer')) {
    return html.replace('<footer', block + '\n<footer');
  } else if (html.includes('</main>')) {
    return html.replace('</main>', block + '\n</main>');
  }
  return html;
}

// Varre todas as 53 páginas oficiais
function scanFiles(dir) {
  let list = [];
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    if (entry === 'node_modules' || entry === '.git' || entry === 'dfaria-site-hostgator-v2-corrigido (1)') continue;
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      list = list.concat(scanFiles(full));
    } else if (entry.endsWith('.html') && !entry.startsWith('experiencia-') && entry !== '404.html') {
      list.push(full);
    }
  }
  return list;
}

const allPages = scanFiles(__dirname);
console.log(`Iniciando processamento em ${allPages.length} páginas oficiais...`);

let updatedCount = 0;
for (const file of allPages) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  content = injectLuxeCss(content);
  content = injectRegionSection(content, file);

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
  }
}

console.log(`Processamento concluído com sucesso! Páginas atualizadas: ${updatedCount}/${allPages.length}`);
