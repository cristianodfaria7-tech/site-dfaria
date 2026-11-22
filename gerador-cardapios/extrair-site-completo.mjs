// Extrator Completo de Conteúdo do Site D'Faria Gastronomia
// Lê todos os arquivos HTML do site e gera gerador-cardapios/site_pages.json
// com 100% dos textos, títulos, heros, seções e fotos mapeados.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(aqui, '..');
const jsonPath = path.join(aqui, 'site_pages.json');

const paginasConfig = [
  {
    id: 'home',
    nome: '🏠 Início (Página Principal)',
    categoria: 'Institucional',
    slug: '/',
    file: 'index.html'
  },
  {
    id: 'o-dfaria',
    nome: '👨‍🍳 O D’Faria & Chef Cristiano',
    categoria: 'Institucional',
    slug: '/o-dfaria',
    file: 'o-dfaria.html'
  },
  {
    id: 'eventos',
    nome: '🎉 Eventos (Visão Geral)',
    categoria: 'Eventos',
    slug: '/eventos',
    file: 'eventos.html'
  },
  {
    id: 'casamentos',
    nome: '💍 Casamentos',
    categoria: 'Eventos',
    slug: '/eventos/casamentos',
    file: 'eventos/casamentos.html'
  },
  {
    id: 'corporativos',
    nome: '🏢 Eventos Corporativos',
    categoria: 'Eventos',
    slug: '/eventos-corporativos',
    file: 'eventos-corporativos.html'
  },
  {
    id: 'formaturas',
    nome: '🎓 Formaturas',
    categoria: 'Eventos',
    slug: '/eventos/formaturas',
    file: 'eventos/formaturas.html'
  },
  {
    id: 'aniversarios',
    nome: '🎂 Aniversários e Bodas',
    categoria: 'Eventos',
    slug: '/eventos/aniversarios-bodas-e-celebracoes',
    file: 'eventos/aniversarios-bodas-e-celebracoes.html'
  },
  {
    id: 'gastronomia',
    nome: '🍲 Gastronomia (Visão Geral)',
    categoria: 'Gastronomia',
    slug: '/gastronomia',
    file: 'gastronomia.html'
  },
  {
    id: 'churrasco-premium',
    nome: '🥩 Churrasco Premium',
    categoria: 'Gastronomia',
    slug: '/gastronomia/churrasco-premium',
    file: 'gastronomia/churrasco-premium.html'
  },
  {
    id: 'parrilla',
    nome: '🇦🇷 Parrilla Argentina',
    categoria: 'Gastronomia',
    slug: '/gastronomia/parrilla-argentina',
    file: 'gastronomia/parrilla-argentina.html'
  },
  {
    id: 'costela-de-chao',
    nome: '🔥 Costela no Fogo de Chão',
    categoria: 'Gastronomia',
    slug: '/gastronomia/costela-de-chao',
    file: 'gastronomia/costela-de-chao.html'
  },
  {
    id: 'frios-finger-food',
    nome: '🧀 Frios & Finger Food',
    categoria: 'Gastronomia',
    slug: '/frios-e-finger-food',
    file: 'frios-e-finger-food.html'
  },
  {
    id: 'esculturas',
    nome: '🍉 Esculturas em Frutas',
    categoria: 'Gastronomia',
    slug: '/gastronomia/esculturas-em-frutas',
    file: 'gastronomia/esculturas-em-frutas.html'
  },
  {
    id: 'estacoes',
    nome: '🍽️ Estações Gastronômicas',
    categoria: 'Gastronomia',
    slug: '/gastronomia/estacoes-gastronomicas',
    file: 'gastronomia/estacoes-gastronomicas.html'
  },
  {
    id: 'locacao',
    nome: '🪑 Locação de Materiais',
    categoria: 'Serviços',
    slug: '/alugue-material-para-festa',
    file: 'alugue-material-para-festa.html'
  },
  {
    id: 'galeria',
    nome: '📸 Galeria de Fotos',
    categoria: 'Mídia',
    slug: '/galeria',
    file: 'galeria.html'
  },
  {
    id: 'depoimentos',
    nome: '⭐ Depoimentos de Clientes',
    categoria: 'Institucional',
    slug: '/depoimentos',
    file: 'depoimentos.html'
  },
  {
    id: 'faq',
    nome: '❓ Perguntas Frequentes (FAQ)',
    categoria: 'Atendimento',
    slug: '/faq',
    file: 'faq.html'
  },
  {
    id: 'contato',
    nome: '📞 Contato & Localização',
    categoria: 'Atendimento',
    slug: '/contato',
    file: 'contato.html'
  }
];

function limpaTexto(str) {
  if (!str) return '';
  return str.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extrairConteudo(filePath) {
  const full = path.join(root, filePath);
  if (!fs.existsSync(full)) return null;
  const html = fs.readFileSync(full, 'utf8');

  // Title e Meta Description
  const titleM = html.match(/<title>([\s\S]*?)<\/title>/i);
  const descM = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  const meta_title = limpaTexto(titleM ? titleM[1] : '');
  const meta_description = descM ? descM[1] : '';

  // H1 (Hero Title)
  const h1M = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const hero_titulo = limpaTexto(h1M ? h1M[1] : '');

  // Hero Imagem (primeira imagem relevante ou imagem com hero/fundo/capa)
  const allImgs = Array.from(html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi)).map(m => ({
    src: m[1],
    alt: m[2]
  })).filter(i => !i.src.includes('logo-dfaria') && !i.src.includes('data:') && !i.src.includes('google'));

  const hero_imagem = allImgs[0] || { src: '/og-dfaria.jpg', alt: hero_titulo };

  // Subtítulo do hero ou primeiro parágrafo
  const firstP = html.match(/<h1[\s\S]*?<\/h1>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
  const hero_subtitulo = limpaTexto(firstP ? firstP[1] : '');

  // Extrair Seções com H2 e seus parágrafos
  const secoes = [];
  const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2|$)/gi;
  let match;
  let sIdx = 1;
  while ((match = h2Regex.exec(html)) !== null) {
    const h2Text = limpaTexto(match[1]);
    const sectionHtml = match[2];
    
    // Pegar parágrafos da seção
    const ps = Array.from(sectionHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)).map(p => limpaTexto(p[1])).filter(Boolean);
    const texto = ps.join('\n\n');

    // Pegar imagem da seção se houver
    const secImg = sectionHtml.match(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/i);
    const imagem = secImg ? { src: secImg[1], alt: secImg[2] } : null;

    // Pegar itens em lista se houver
    const lis = Array.from(sectionHtml.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)).map(li => limpaTexto(li[1])).filter(Boolean);

    if (h2Text && !h2Text.toLowerCase().includes('solicite seu orçamento') && !h2Text.toLowerCase().includes('por perto')) {
      secoes.push({
        id: `sec-${sIdx++}`,
        titulo: h2Text,
        texto: texto || '',
        imagem: imagem,
        itens: lis.slice(0, 10)
      });
    }
  }

  // Dados específicos
  const dados_extras = {};

  // FAQ
  if (filePath.includes('faq') || html.includes('FAQPage')) {
    const faqQuestions = Array.from(html.matchAll(/"name":\s*"([^"]+)",\s*"acceptedAnswer":\s*\{\s*"@type":\s*"Answer",\s*"text":\s*"([^"]+)"/g));
    if (faqQuestions.length > 0) {
      dados_extras.faq = faqQuestions.map(f => ({
        pergunta: f[1].replace(/\\"/g, '"'),
        resposta: f[2].replace(/\\"/g, '"')
      }));
    }
  }

  // Contato
  if (filePath.includes('contato')) {
    dados_extras.contato = {
      whatsapp_display: '(15) 99683-4734',
      whatsapp_numero: '5515996834734',
      telefone_display: '(15) 3287-1498',
      telefone_numero: '+551532871498',
      email: 'contato@dfariagastronomia.com.br',
      endereco: 'Rua 15 de Novembro, 910 — Centro, Cesário Lange - SP, 18285-000',
      horario: 'Segunda a Sábado, das 08h às 18h',
      instagram: 'https://www.instagram.com/dfariagastronomia/'
    };
  }

  // Depoimentos
  if (filePath.includes('depoimentos')) {
    const revs = Array.from(html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi)).map(r => ({
      nome: limpaTexto(r[1]),
      texto: limpaTexto(r[2]),
      estrelas: 5
    })).filter(r => r.nome && r.texto);
    if (revs.length > 0) dados_extras.depoimentos = revs;
  }

  // Galeria
  if (filePath.includes('galeria')) {
    dados_extras.galeria = allImgs.slice(0, 30);
  }

  return {
    meta_title,
    meta_description,
    hero: {
      titulo: hero_titulo,
      subtitulo: hero_subtitulo,
      imagem: hero_imagem
    },
    secoes: secoes.slice(0, 15),
    galeria: allImgs.slice(0, 8),
    dados_extras
  };
}

const resultado = {};
for (const p of paginasConfig) {
  const data = extrairConteudo(p.file);
  if (data) {
    resultado[p.id] = {
      id: p.id,
      nome: p.nome,
      categoria: p.categoria,
      slug: p.slug,
      arquivo: p.file,
      ...data,
      updated_at: new Date().toISOString()
    };
  }
}

fs.writeFileSync(jsonPath, JSON.stringify(resultado, null, 2), 'utf8');
console.log(`✅ ${Object.keys(resultado).length} páginas extraídas com sucesso para ${jsonPath}!`);
