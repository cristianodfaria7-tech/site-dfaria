// Seção "Conheça a cidade" nas páginas das cidades atendidas: foto livre (Wikimedia Commons,
// com crédito e licença), história, curiosidade e o D'Faria na cidade.
// Pode rodar de novo: substitui a seção existente (marcada com data-df-cidade).
// Uso: node .ferramentas/historia-cidades.mjs [--conferir]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const conferir = process.argv.includes('--conferir');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const LIC = {
  'CC BY 2.5': 'https://creativecommons.org/licenses/by/2.5/deed.pt-br',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/deed.pt-br',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br',
};

const CIDADES = [
  {
    arquivo: 'buffet-em-cesário-lange.html', nome: 'Cesário Lange',
    titulo: 'Cesário Lange, a casa do D’Faria',
    foto: { src: 'cesario-lange-matriz-santa-cruz.webp', w: 1200, h: 800,
      alt: 'Igreja Matriz de Santa Cruz, no centro de Cesário Lange, ao entardecer',
      legenda: 'Igreja Matriz de Santa Cruz, no centro de Cesário Lange.',
      autor: 'José Reynaldo da Fonseca', licenca: 'CC BY 2.5', pagina: 'https://commons.wikimedia.org/wiki/File:Matriz_S_Cruz_-Ces%C3%A1rio_070309_REFON_2.JPG' },
    historia: [
      'Tudo começou com uma capelinha. Sertanistas que tinham terras na região ergueram a capela de Santa Cruz de Passa-Três, e a primeira missa celebrada nela, em 12 de dezembro de 1878, marca a fundação oficial da vila. Ao redor da capela vieram as casas e o comércio, e é dessa origem que nasce a atual Matriz de Santa Cruz, no coração da cidade.',
      'O povoado pertencia a Tatuí e foi elevado a município em 1959. O nome atual homenageia Cesário Lange Adrien, professor e diretor da primeira escola da vila.',
    ],
    curiosidade: 'O antigo nome, Passa Três, foi dado pelos tropeiros: para chegar aqui, eles precisavam atravessar três córregos, o das Pedras, o Guarapó e o Aleluia.',
    dfaria: 'É daqui que sai cada evento do D’Faria. A mesma terra que um dia ofereceu pouso e mesa aos tropeiros é hoje a base da nossa cozinha. Em Cesário Lange os cardápios são criados, testados e preparados com o cuidado de quem recebe em casa. Para nós, receber bem é uma tradição local.',
  },
  {
    arquivo: 'buffet-em-tatuí.html', nome: 'Tatuí',
    titulo: 'Tatuí, a Capital da Música',
    foto: { src: 'tatui-basilica-conceicao.webp', w: 1200, h: 868,
      alt: 'Vista aérea da Basílica Santuário Nossa Senhora da Conceição, em Tatuí',
      legenda: 'Basílica Santuário Nossa Senhora da Conceição, em Tatuí.',
      autor: 'Santuário Conceição', licenca: 'CC BY-SA 4.0', pagina: 'https://commons.wikimedia.org/wiki/File:BasilicaConceicaoTatui.jpg' },
    historia: [
      'O nome vem do tupi e quer dizer “rio dos tatus”. A cidade foi fundada em 11 de agosto de 1826, quando começou a divisão das terras doadas pelo brigadeiro Manoel Rodrigues Jordão para formar a vila. Com a chegada da Estrada de Ferro Sorocabana, no fim do século XIX, Tatuí ganhou força e se tornou uma das cidades mais importantes da região.',
      'Também é terra de Paulo Setúbal, nascido aqui em 1893, autor de “A Marquesa de Santos” e membro da Academia Brasileira de Letras. O museu histórico da cidade leva o nome dele.',
    ],
    curiosidade: 'Tatuí é reconhecida por lei estadual como a “Capital da Música” de São Paulo. O título se deve ao Conservatório de Tatuí, fundado em 1954 e considerado uma das maiores escolas de música da América Latina, com cursos gratuitos e cerca de 2.000 alunos por ano, vindos de todo o Brasil e de outros países.',
    dfaria: 'Numa cidade onde a música está em cada esquina, um evento precisa de ritmo. É assim que o D’Faria trabalha em Tatuí, com a cozinha afinada, o serviço no tempo certo e cada prato entrando como uma nota bem colocada. Assim a sua festa soa como um concerto, do primeiro brinde à sobremesa.',
  },
  {
    arquivo: 'buffet-em-tiete.html', nome: 'Tietê',
    titulo: 'Tietê, o porto das monções',
    foto: { src: 'tiete-praca-elias-garcia-coreto.webp', w: 720, h: 900,
      alt: 'Chafariz e coreto da Praça Doutor Elias Garcia, no centro de Tietê',
      legenda: 'Chafariz e coreto da Praça Doutor Elias Garcia, em Tietê.',
      autor: 'Foltrann', licenca: 'CC BY-SA 4.0', recorte: true, pagina: 'https://commons.wikimedia.org/wiki/File:Chafariz_do_coreto.jpg' },
    historia: [
      'A cidade nasceu à beira do rio que lhe dá o nome, como o vilarejo de Pirapora do Curuçá. No século XVIII, foi o primeiro e mais importante porto de reabastecimento e descanso das monções, as expedições de canoas que partiam de Araritaguaba (hoje Porto Feliz) rumo a Cuiabá.',
      'A freguesia foi criada em 1811 e virou município em 8 de março de 1842. O nome Tietê só foi adotado em 1867.',
    ],
    curiosidade: 'O antigo nome, Curuçá, vem de uma pedra à margem do rio que os indígenas chamavam de Curuçu-Guaçu, que em tupi significa “cruz grande”, porque nela havia uma cruz entalhada.',
    dfaria: 'Durante séculos, Tietê foi o lugar onde os viajantes paravam para descansar e se abastecer antes da longa jornada. Quando a cidade celebra, o D’Faria traz essa mesma ideia de acolhimento: mesa farta, comida feita com capricho e uma equipe que cuida de tudo para você aproveitar a festa.',
  },
  {
    arquivo: 'buffet-em-cerquilho.html', nome: 'Cerquilho',
    titulo: 'Cerquilho, onde o trabalho vence',
    foto: { src: 'cerquilho-vista-ferrovia-matriz.webp', w: 640, h: 480,
      alt: 'Vista de Cerquilho com a linha férrea e a torre da igreja matriz ao fundo',
      legenda: 'Vista de Cerquilho, com a linha férrea e a torre da matriz ao fundo.',
      autor: 'Andre v', licenca: 'CC BY-SA 3.0', pagina: 'https://commons.wikimedia.org/wiki/File:Cerquilho1.JPG' },
    historia: [
      'O nome conta a origem da cidade. Aqui havia um cercado de pau a pique, o “cerquinho”, onde os tropeiros a caminho da feira de Sorocaba deixavam os animais descansar. Em 1882 chegaram os trilhos da Estrada de Ferro Sorocabana, e em volta da estação formou-se o povoado.',
      'Depois vieram imigrantes italianos, espanhóis e portugueses, que fizeram a cidade crescer. Cerquilho se tornou município em 24 de dezembro de 1948, quando se separou de Tietê.',
    ],
    curiosidade: 'O lema da cidade, “Hic Labor Vincit”, é latim e quer dizer “aqui o trabalho vence”. É uma homenagem aos imigrantes que construíram Cerquilho.',
    dfaria: 'Cerquilho foi construída por famílias que sabiam que a mesa é o centro de qualquer celebração. O D’Faria honra essa herança com cardápios generosos, da massa ao churrasco, servidos com o cuidado de quem também acredita que o trabalho bem feito é o que vence.',
  },
  {
    arquivo: 'buffet-em-conchas.html', nome: 'Conchas',
    titulo: 'Conchas, um pouso à beira do ribeirão',
    foto: { src: 'conchas-matriz-senhor-bom-jesus.webp', w: 882, h: 590,
      alt: 'Igreja Matriz Senhor Bom Jesus, em Conchas',
      legenda: 'Igreja Matriz Senhor Bom Jesus, em Conchas.',
      autor: 'José Reynaldo da Fonseca', licenca: 'CC BY-SA 3.0', pagina: 'https://commons.wikimedia.org/wiki/File:Igreja_Matriz_S_Bom_Jesus_(Conchas)_210209_REFON_1.JPG' },
    historia: [
      'Conchas nasceu como ponto de descanso das tropas de burros que levavam mercadorias para Botucatu e Tietê. Muitos viajantes acabaram ficando perto do ribeirão onde paravam para passar a noite, e assim se formou o povoado.',
      'Com a chegada da ferrovia à região, no fim do século XIX, vieram novos moradores. O lugar virou distrito em 1896 e conquistou a autonomia em 1916. Hoje o município inclui também o distrito de Juquiratiba.',
    ],
    curiosidade: 'O nome vem do Ribeirão das Conchas, que tinha tantos moluscos que as margens ficavam cobertas de conchas.',
    dfaria: 'Conchas nasceu como um lugar de descanso para quem chegava cansado da estrada. O D’Faria leva para os eventos da cidade esse mesmo espírito de pouso acolhedor. É só chegar, sentar à mesa e ser bem servido, enquanto a nossa equipe cuida de cada detalhe.',
  },
  {
    arquivo: 'buffet-em-pereiras.html', nome: 'Pereiras',
    titulo: 'Pereiras, uma cidade feita por famílias',
    foto: { src: 'pereiras-praca-coreto.webp', w: 882, h: 590,
      alt: 'Praça central de Pereiras com o coreto e um monumento',
      legenda: 'O coreto da praça de Pereiras.',
      autor: 'José Reynaldo da Fonseca', licenca: 'CC BY-SA 3.0', pagina: 'https://commons.wikimedia.org/wiki/File:Pereiras_210209_REFON_3.JPG' },
    historia: [
      'A região começou a ser povoada no século XVIII, com pousos de tropeiros e o comércio de gado ao longo do Ribeirão das Conchas. Por volta de 1829 chegaram famílias vindas de Bragança Paulista, que se fixaram nas terras e formaram o povoado.',
      'Em 1876, quando virou freguesia, já tinha cerca de 200 casas. Em 1889 tornou-se vila, separando-se de Tatuí, e em 1906 recebeu o título de cidade.',
    ],
    curiosidade: 'O nome vem da família Pereira, que construiu uma capela para a imagem de Nossa Senhora da Conceição trazida de Bragança Paulista. A família Goes Leme ergueu outra capela na parte alta, e a disputa entre as duas famílias levou os Pereira a construir uma capela nova. Daí nasceu a Freguesia de Nossa Senhora da Conceição dos Pereiras.',
    dfaria: 'Em Pereiras, a história foi escrita por famílias, e é para as famílias que o D’Faria cozinha. Casamentos, aniversários e reencontros ganham um buffet completo, montado com o carinho de quem sabe que uma boa festa é aquela em que todo mundo se sente em casa.',
  },
  {
    arquivo: 'buffet-em-porangaba.html', nome: 'Porangaba',
    titulo: 'Porangaba, a bela vista',
    foto: { src: 'porangaba-estrada-bela-vista.webp', w: 1200, h: 900,
      alt: 'Estrada a caminho de Porangaba, com morros e vegetação ao fundo',
      legenda: 'A caminho de Porangaba, pela Rodovia Prefeito Benedito de Oliveira Vaz.',
      autor: 'Manoel Messias de So… (Panoramio)', licenca: 'CC BY-SA 3.0', pagina: 'https://commons.wikimedia.org/wiki/File:Rod._Pref._Benedito_de_Oliveira_Vaz_-_indo_para_cidade_de_Porangaba_-_panoramio.jpg' },
    historia: [
      'Porangaba começou como o bairro de Santo Antônio do Rio Feio, um ponto de pernoite dos tropeiros na trilha entre Sorocaba e Botucatu. Por volta de 1870 foi construída a capela de Santo Antônio, o padroeiro. Em 1885 o lugar virou freguesia, com o nome de Bela Vista de Tatuí.',
      'A emancipação veio em 1927, e o município foi instalado em 4 de junho de 1928. O nome, em tupi, quer dizer “bela vista” ou “lugar bonito”.',
    ],
    curiosidade: 'Em 1897, o naturalista belga Auguste Collon fez na região de Bofete e Porangaba a primeira sondagem profunda de petróleo do Brasil. E em 9 de janeiro de 2015 um meteorito caiu perto da cidade. Os fragmentos foram recolhidos e estudados, e o “meteorito Porangaba” está registrado no banco de dados internacional de meteoritos.',
    dfaria: 'Porangaba quer dizer “bela vista”, e é isso que buscamos em cada evento na cidade e nos condomínios da região, como o Ninho Verde I: uma mesa linda de ver e ainda melhor de provar.',
  },
];

const CSS = `<style id="df-cidade-css">
.df-cidade{background:var(--sand)}
.df-cidade-grid{display:grid;gap:2.5rem;align-items:start}
@media(min-width:1024px){.df-cidade-grid{grid-template-columns:5fr 7fr;gap:4rem}}
.df-cidade-foto{margin:0}
.df-cidade-foto img{display:block;width:100%;height:auto;aspect-ratio:4/3;object-fit:cover;border-radius:1.5rem;box-shadow:0 28px 60px -34px rgba(22,26,21,.55)}
.df-cidade-foto.vertical img{aspect-ratio:4/5}
.df-cidade-foto figcaption{margin-top:.85rem;font-size:.82rem;line-height:1.45;color:var(--stone)}
.df-cidade-foto figcaption small{display:block;margin-top:.2rem;font-size:.72rem;opacity:.8}
.df-cidade-foto figcaption a{color:inherit;text-decoration:underline;text-underline-offset:2px}
.df-cidade-curiosidade{margin-top:2rem;padding:1.4rem 1.6rem;border-left:3px solid var(--gold);background:color-mix(in oklab,var(--gold) 9%,transparent);border-radius:0 1rem 1rem 0}
.df-cidade-curiosidade strong{display:block;margin-bottom:.4rem;font-size:.7rem;letter-spacing:.24em;text-transform:uppercase;color:var(--gold)}
.df-cidade-dfaria{margin-top:2rem;padding-top:1.6rem;border-top:1px solid color-mix(in oklab,var(--graphite) 12%,transparent)}
</style>`;

function secao(c) {
  const f = c.foto;
  const vertical = f.h > f.w;
  const credito = `Foto: ${esc(f.autor)}${f.recorte ? ' (recortada)' : ''}, <a href="${LIC[f.licenca]}" rel="noopener license" target="_blank">${f.licenca}</a>, via <a href="${f.pagina}" rel="noopener" target="_blank">Wikimedia Commons</a>`;
  if (!LIC[f.licenca]) throw new Error('licença sem link: ' + f.licenca);
  return `<section class="df-cidade" data-df-cidade="${esc(c.nome)}" aria-labelledby="df-cidade-titulo">${CSS}` +
    `<div class="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24"><div class="df-cidade-grid">` +
    `<figure class="df-cidade-foto${vertical ? ' vertical' : ''}"><img src="/assets/regioes/cidades/${f.src}" alt="${esc(f.alt)}" width="${f.w}" height="${f.h}" loading="lazy" decoding="async">` +
    `<figcaption>${esc(f.legenda)}<small>${credito}</small></figcaption></figure>` +
    `<div><p class="text-xs uppercase tracking-[0.3em] text-green">Conheça ${esc(c.nome)}</p>` +
    `<h2 id="df-cidade-titulo" class="mt-5 font-display text-2xl text-graphite lg:text-3xl">${esc(c.titulo)}</h2>` +
    c.historia.map((p) => `<p class="mt-5 max-w-[62ch] text-base text-stone text-pretty">${esc(p)}</p>`).join('') +
    `<div class="df-cidade-curiosidade"><strong>Você sabia?</strong><p class="text-base text-graphite text-pretty">${esc(c.curiosidade)}</p></div>` +
    `<div class="df-cidade-dfaria"><p class="text-xs uppercase tracking-[0.3em] text-green">O D’Faria em ${esc(c.nome)}</p>` +
    `<p class="mt-4 max-w-[62ch] font-brand text-lg text-graphite text-pretty lg:text-xl">${esc(c.dfaria)}</p></div>` +
    `</div></div></div></section>`;
}

const ANTIGA = /<section class="df-cidade"[\s\S]*?<\/section>/;
const ANCORA = '<section class="green-texture-soft';
let erros = 0;
for (const c of CIDADES) {
  if (!existsSync('assets/regioes/cidades/' + c.foto.src)) { console.log('FALTA FOTO', c.foto.src); erros++; continue; }
  const antes = readFileSync(c.arquivo, 'utf8');
  let depois = antes.replace(ANTIGA, '');
  const i = depois.indexOf(ANCORA);
  if (i < 0 || depois.indexOf(ANCORA, i + 1) >= 0) { console.log('ÂNCORA não única em', c.arquivo); erros++; continue; }
  depois = depois.slice(0, i) + secao(c) + depois.slice(i);
  if (!conferir) writeFileSync(c.arquivo, depois);
  console.log(`${conferir ? 'conferido' : 'gravado'}: ${c.arquivo} (+${depois.length - antes.length} bytes)`);
}
if (erros) process.exitCode = 1;
