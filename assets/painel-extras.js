/* Painel do Chef — Aparência (cores e fontes), Configurações (usuários) e "Publicar no site".
   Ligado ao painel principal por instalarExtras(ctx) em painel-chef-v3.js.
   Depende de /assets/tema-gerador.js (window.DfTema), carregado no painel.html. */

let ctx = null; // { state, api, render, SUPABASE_URL, SUPABASE_KEY }

// Endereço (slug) de cada Edge Function no Supabase. O painel do Supabase deu nome automático
// à função de publicar ("rapid-api"); o nome exibido lá é "painel-publicar".
const FUNCOES = { 'painel-publicar': 'rapid-api', 'painel-usuarios': 'painel-usuarios' };
const T = () => window.DfTema;

export function escaparHtml(v) {
  return String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
const esc = escaparHtml;

function toast(type, text, ms = 4500) {
  ctx.state.feedback = { type, text };
  ctx.render();
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { ctx.state.feedback = null; ctx.render(); }, ms);
}

async function chamarFuncao(nome, corpo) {
  const r = await fetch(`${ctx.SUPABASE_URL}/functions/v1/${FUNCOES[nome] || nome}`, {
    method: 'POST',
    headers: { apikey: ctx.SUPABASE_KEY, Authorization: 'Bearer ' + ctx.state.token, 'Content-Type': 'application/json' },
    body: JSON.stringify(corpo || {})
  });
  let dados = {};
  try { dados = await r.json(); } catch (e) { /* vazio */ }
  if (!r.ok || dados.erro) {
    if (r.status === 404) throw new Error('A função "' + nome + '" ainda não foi instalada no Supabase.');
    throw new Error(dados.erro || dados.message || ('Erro ' + r.status));
  }
  return dados;
}

/* ===================== Papel e tema (carregamento) ===================== */
export async function carregarPapel() {
  const s = ctx.state;
  try {
    const email = (s.user && s.user.email || '').toLowerCase();
    const r = await fetch(`${ctx.SUPABASE_URL}/rest/v1/painel_admins?select=email,nome,papel`, { headers: ctx.api.headers() });
    if (!r.ok) { s.papel = null; return; }
    const linhas = await r.json();
    const eu = linhas.find((l) => (l.email || '').toLowerCase() === email);
    s.papel = eu ? eu.papel : null;
    s.meuNome = eu ? (eu.nome || '') : '';
  } catch (e) { s.papel = null; }
}

export async function carregarTema() {
  const s = ctx.state;
  try {
    const r = await fetch(`${ctx.SUPABASE_URL}/rest/v1/site_catalog_config?id=eq.tema&select=negocio`, { headers: ctx.api.headers() });
    const l = r.ok ? await r.json() : [];
    s.temaSalvo = (l[0] && l[0].negocio) || {};
  } catch (e) { s.temaSalvo = {}; }
  s.temaRascunho = T().normalizar(s.temaSalvo);
}

/* ===================== Cabeçalho: botões extras ===================== */
export function botoesCabecalho() {
  const s = ctx.state;
  const b = (id, modo, icone, txt) => `
    <button id="${id}" class="py-1.5 px-3 rounded-lg transition-all flex items-center gap-1.5 ${s.viewMode === modo ? 'bg-dfgold text-dfgreen shadow-sm' : 'text-white/80 hover:text-white'}">
      <i data-lucide="${icone}" class="w-3.5 h-3.5"></i><span>${txt}</span>
    </button>`;
  const galeria = b('btn-toggle-galeria', 'galeria', 'images', 'Galeria');
  if (s.papel !== 'dono') return galeria;
  return b('btn-toggle-precos', 'precos', 'calculator', 'Preços') + galeria + b('btn-toggle-aparencia', 'aparencia', 'palette', 'Aparência') + b('btn-toggle-config', 'config', 'settings', 'Configurações');
}

export function botaoPublicar() {
  const p = ctx.state.publicacao;
  const ocupado = p && (p.estado === 'enviando' || p.estado === 'fila' || p.estado === 'publicando');
  return `
    <button id="btn-publicar-site" ${ocupado ? 'disabled' : ''} title="Envia para o site tudo o que está salvo no painel"
      class="inline-flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-dfgold hover:bg-[#d8bd78] text-dfgreen text-xs font-extrabold shadow-md transition-all ${ocupado ? 'opacity-70 cursor-wait' : ''}">
      <i data-lucide="${ocupado ? 'loader-2' : 'rocket'}" class="w-4 h-4 ${ocupado ? 'animate-spin' : ''}"></i>
      <span>${ocupado ? 'Publicando…' : 'Publicar no site'}</span>
    </button>`;
}

/* Barra de andamento da publicação (fixa no rodapé) */
export function barraPublicacao() {
  const p = ctx.state.publicacao;
  if (!p) return '';
  const etapas = { enviando: 'Pedindo a publicação…', fila: 'Na fila para publicar…', publicando: 'Publicando: gerando o site, conferindo as URLs e enviando para a HostGator…', no_ar: 'No ar! O site já está atualizado para todos.', erro: 'A publicação não terminou. Nada quebrou: o site continua como estava.' };
  const cor = p.estado === 'no_ar' ? 'bg-emerald-600' : p.estado === 'erro' ? 'bg-red-600' : 'bg-dfgreen';
  const seg = p.inicio ? Math.round((Date.now() - p.inicio) / 1000) : 0;
  return `
    <div class="fixed bottom-0 inset-x-0 z-40 ${cor} text-white shadow-2xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3 text-sm font-semibold">
        <i data-lucide="${p.estado === 'no_ar' ? 'check-circle-2' : p.estado === 'erro' ? 'alert-triangle' : 'loader-2'}" class="w-5 h-5 text-dfgold ${['no_ar', 'erro'].includes(p.estado) ? '' : 'animate-spin'}"></i>
        <span class="flex-1">${etapas[p.estado] || ''} ${['no_ar', 'erro'].includes(p.estado) ? '' : `<span class="opacity-70 font-normal">(${seg}s — leva cerca de 1 minuto)</span>`}</span>
        ${p.estado === 'erro' && p.mensagem ? `<span class="text-xs opacity-90">${esc(p.mensagem)}</span>` : ''}
        ${p.estado === 'erro' && p.link ? `<a href="${esc(p.link)}" target="_blank" class="text-xs underline">detalhes</a>` : ''}
        ${['no_ar', 'erro'].includes(p.estado) ? '<button id="btn-fechar-publicacao" class="p-1 rounded hover:bg-white/20" aria-label="Fechar"><i data-lucide="x" class="w-4 h-4"></i></button>' : ''}
      </div>
    </div>`;
}

export async function publicar() {
  const s = ctx.state;
  s.publicacao = { estado: 'enviando', inicio: Date.now() };
  ctx.render();
  try {
    const r = await chamarFuncao('painel-publicar', { acao: 'publicar' });
    s.publicacao = { estado: 'fila', inicio: Date.now(), desde: r.desde };
    ctx.render();
    acompanhar();
  } catch (e) {
    s.publicacao = { estado: 'erro', mensagem: e.message };
    ctx.render();
  }
}

function acompanhar() {
  const s = ctx.state;
  clearTimeout(acompanhar._t);
  acompanhar._t = setTimeout(async () => {
    if (!s.publicacao || ['no_ar', 'erro'].includes(s.publicacao.estado)) return;
    try {
      const r = await chamarFuncao('painel-publicar', { acao: 'status', desde: s.publicacao.desde });
      s.publicacao = { ...s.publicacao, estado: r.estado, link: r.link };
    } catch (e) { /* tenta de novo */ }
    if (Date.now() - s.publicacao.inicio > 8 * 60 * 1000 && s.publicacao.estado !== 'no_ar') s.publicacao = { ...s.publicacao, estado: 'erro', mensagem: 'Demorou mais que o normal.' };
    if (s.viewMode !== 'aparencia') ctx.render(); else atualizarCabecalhoPublicar();
    if (!['no_ar', 'erro'].includes(s.publicacao.estado)) acompanhar();
  }, 5000);
}

function atualizarCabecalhoPublicar() {
  // Na Aparência não redesenhamos tudo (para não recarregar a prévia): só o botão e a barra.
  const b = document.getElementById('btn-publicar-site');
  if (b) b.outerHTML = botaoPublicar();
  const barra = document.getElementById('df-barra-publicacao');
  if (barra) barra.innerHTML = barraPublicacao();
  ligarBotoesPublicar();
  if (window.lucide) window.lucide.createIcons();
}

function ligarBotoesPublicar() {
  const b = document.getElementById('btn-publicar-site');
  if (b) b.onclick = () => (ctx.state.viewMode === 'aparencia' ? salvarTema(true) : publicar());
  const f = document.getElementById('btn-fechar-publicacao');
  if (f) f.onclick = () => { ctx.state.publicacao = null; ctx.render(); };
}

/* ===================== Corpo das telas novas ===================== */
export function renderCorpo() {
  const s = ctx.state;
  if (s.viewMode === 'aparencia') return renderAparencia();
  if (s.viewMode === 'config') return renderConfig();
  if (s.viewMode === 'galeria') return renderGaleria();
  if (s.viewMode === 'precos') return renderPrecos();
  return '';
}

/* ---------- Preços dos cardápios (só Dono) ----------
   O dono digita só o valor por pessoa para 100 convidados. O motor (assets/motor-precos.js,
   o MESMO usado no site) calcula 30..100 na hora. Salvo em site_catalog_config id='precos'.
   "Publicar no site" gera as páginas com o "A partir de" e o simulador. */
const P = () => window.DfPrecos;

async function carregarPrecos() {
  const s = ctx.state;
  s.precos = null;
  try {
    if (!Array.isArray(s.menus) || !s.menus.length) {
      const rm = await fetch(`${ctx.SUPABASE_URL}/rest/v1/site_menus?select=slug,nome,ordem&order=ordem.asc`, { headers: ctx.api.headers() });
      s.menus = rm.ok ? await rm.json() : [];
    }
    const r = await fetch(`${ctx.SUPABASE_URL}/rest/v1/site_catalog_config?id=eq.precos&select=negocio`, { headers: ctx.api.headers() });
    const l = r.ok ? await r.json() : [];
    let cardapios = l[0] && l[0].negocio && l[0].negocio.cardapios;
    let origem = 'painel';
    if (!cardapios) {
      // primeira vez: começa com o que já está no ar
      origem = 'site';
      try {
        const rs = await fetch('/assets/precos-cardapios.json?t=' + Date.now(), { cache: 'no-store' });
        cardapios = rs.ok ? (await rs.json()).cardapios : {};
      } catch (e) { cardapios = {}; }
    }
    s.precos = { cardapios: cardapios || {}, origem, atualizado_em: l[0] && l[0].negocio && l[0].negocio.atualizado_em };
  } catch (e) {
    s.precos = { cardapios: {}, erro: 'Não consegui carregar os preços. Atualize a página.' };
  }
  if (s.viewMode === 'precos') ctx.render();
}

function linhaPreco(slug) {
  const c = (ctx.state.precos.cardapios[slug]) || {};
  if (c.p100 === undefined || c.p100 === null || c.p100 === '') return { vazio: true };
  return P().calcularTabela(c.p100, { temChurrasco: !!c.churrasco });
}

function htmlPrevia(slug) {
  const t = linhaPreco(slug);
  if (t.vazio) return '<p class="text-xs text-stone-400">Sem valor: o cardápio fica no site sem preço (como hoje).</p>';
  if (!t.ok) return `<p class="text-xs font-bold text-red-600">${esc(t.erros.join(' '))}</p>`;
  const R = (v) => 'R$ ' + P().formatarReal(v);
  const cel = t.faixas.map((f) => `
    <div class="rounded-lg ${f.convidados === 100 ? 'bg-dfgreen text-white' : 'bg-dfsand/60 text-dfgreen'} px-2 py-1.5 text-center">
      <div class="text-[10px] uppercase tracking-wide opacity-70">${f.convidados} pess.</div>
      <div class="text-sm font-extrabold">${R(f.porPessoa)}</div>
      <div class="text-[10px] opacity-70">${R(f.total)}</div>
    </div>`).join('');
  const a150 = t.acimaDe100.find((f) => f.convidados === 150);
  return `<div class="grid grid-cols-4 sm:grid-cols-8 gap-1.5">${cel}</div>
    <p class="text-[11px] text-stone-500 mt-1.5">Margem com 100 pessoas: <b>${Math.round(t.margem100 * 100)}%</b>${a150 ? ` · 150 pessoas (só aqui no painel; no site aparece "Consulte-nos"): <b>${R(a150.porPessoa)}</b> por pessoa` : ''}${t.avisos.length ? ` · <span class="text-amber-700 font-bold">${esc(t.avisos.join(' '))}</span>` : ''}</p>`;
}

function renderPrecos() {
  const s = ctx.state;
  if (!P()) return '<main class="max-w-5xl mx-auto p-8"><p class="text-red-600 font-bold">O motor de preços não carregou. Atualize a página (Ctrl+F5).</p></main>';
  if (!s.precos) return '<main class="max-w-5xl mx-auto p-8 text-center text-stone-500"><i data-lucide="loader-2" class="w-8 h-8 mx-auto animate-spin text-dfgold"></i><p class="mt-2">Carregando preços…</p></main>';
  const menus = (s.menus || []).slice().sort((a, b) => (a.ordem || 0) - (b.ordem || 0));
  const linhas = menus.map((m) => {
    const c = s.precos.cardapios[m.slug] || {};
    const v = c.p100 === undefined || c.p100 === null ? '' : String(c.p100).replace('.', ',');
    return `
      <div class="bg-white rounded-2xl border border-[#C5A880]/30 p-4 space-y-3" data-preco-linha="${esc(m.slug)}">
        <div class="flex flex-wrap items-center gap-3">
          <div class="flex-1 min-w-[14rem]">
            <p class="font-display font-bold text-dfgreen">${esc(m.nome)}</p>
            <a class="text-[11px] text-stone-400 hover:underline" href="/cardapios/${esc(m.slug)}" target="_blank" rel="noopener">/cardapios/${esc(m.slug)}</a>
          </div>
          <label class="flex items-center gap-2 text-sm font-bold text-dfgreen">Valor por pessoa p/ 100 convidados
            <span class="flex items-center rounded-xl border-2 border-dfgold bg-white px-2"><span class="text-stone-500">R$</span>
              <input data-preco-valor="${esc(m.slug)}" value="${esc(v)}" inputmode="decimal" placeholder="—" class="w-24 py-1.5 px-1 text-lg font-extrabold text-dfgreen outline-none"></span>
          </label>
          <label class="flex items-center gap-1.5 text-xs text-stone-600"><input type="checkbox" data-preco-churrasco="${esc(m.slug)}" ${c.churrasco ? 'checked' : ''}> com churrasco (entra churrasqueiro)</label>
        </div>
        <div data-preco-previa="${esc(m.slug)}">${htmlPrevia(m.slug)}</div>
      </div>`;
  }).join('');
  return `
    <main class="max-w-6xl mx-auto px-4 sm:px-6 py-8 w-full space-y-5 pb-28">
      <div class="bg-dfgreen text-white rounded-3xl p-6 border border-dfgold/40 shadow-md">
        <div class="flex items-center gap-2"><i data-lucide="calculator" class="w-5 h-5 text-dfgold"></i><h2 class="font-display font-bold text-xl">Preços dos cardápios</h2></div>
        <p class="text-xs text-white/80 mt-1">Digite só o <b>valor por pessoa para 100 convidados</b>. O motor calcula na hora os preços de 30 a 100 convidados (o mesmo cálculo do site). Estrutura, equipamento, equipe e deslocamento já estão dentro do valor. Deixe em branco para o cardápio ficar sem preço.</p>
        <p class="text-xs text-white/80 mt-2"><b>1.</b> Ajuste os valores → <b>2.</b> <b>Salvar preços</b> → <b>3.</b> <b>Publicar no site</b> (1 a 3 minutos).</p>
        ${s.precos.origem === 'site' ? '<p class="text-xs text-dfgold mt-2">Valores iniciais trazidos do site no ar.</p>' : ''}
        ${s.precos.erro ? `<p class="text-xs text-red-200 font-bold mt-2">${esc(s.precos.erro)}</p>` : ''}
      </div>
      <div class="space-y-3">${linhas || '<p class="text-stone-500">Nenhum cardápio encontrado.</p>'}</div>
      <div class="sticky bottom-20 flex justify-end">
        <button id="btn-salvar-precos" class="inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-dfgreen text-white font-extrabold shadow-xl hover:bg-[#0f2118] ${s.precosSalvando ? 'opacity-70 cursor-wait' : ''}" ${s.precosSalvando ? 'disabled' : ''}>
          <i data-lucide="${s.precosSalvando ? 'loader-2' : 'save'}" class="w-5 h-5 ${s.precosSalvando ? 'animate-spin' : ''}"></i>${s.precosSalvando ? 'Salvando…' : 'Salvar preços'}
        </button>
      </div>
    </main>`;
}

function ligarPrecos() {
  const s = ctx.state;
  const atual = (slug) => (s.precos.cardapios[slug] = s.precos.cardapios[slug] || {});
  const redesenhar = (slug) => { const d = document.querySelector(`[data-preco-previa="${slug}"]`); if (d) d.innerHTML = htmlPrevia(slug); };
  document.querySelectorAll('[data-preco-valor]').forEach((inp) => {
    inp.oninput = () => {
      const slug = inp.getAttribute('data-preco-valor');
      const txt = inp.value.trim();
      const c = atual(slug);
      if (txt === '') delete c.p100; else c.p100 = P().numero(txt);
      s.precosAlterados = true;
      redesenhar(slug);
    };
  });
  document.querySelectorAll('[data-preco-churrasco]').forEach((cb) => {
    cb.onchange = () => { const slug = cb.getAttribute('data-preco-churrasco'); atual(slug).churrasco = cb.checked; s.precosAlterados = true; redesenhar(slug); };
  });
  const b = document.getElementById('btn-salvar-precos');
  if (b) b.onclick = salvarPrecos;
}

async function salvarPrecos() {
  const s = ctx.state;
  const limpos = {}, erros = [];
  (s.menus || []).forEach((m) => {
    const c = s.precos.cardapios[m.slug];
    if (!c || c.p100 === undefined || c.p100 === null || c.p100 === '') { if (c && c.churrasco) limpos[m.slug] = { churrasco: true }; return; }
    const t = P().calcularTabela(c.p100, { temChurrasco: !!c.churrasco });
    if (!t.ok) erros.push(m.nome + ': ' + t.erros[0]); else limpos[m.slug] = { p100: t.p100, churrasco: !!c.churrasco };
  });
  if (erros.length) { toast('error', 'Corrija antes de salvar — ' + erros[0], 8000); return; }
  s.precosSalvando = true; ctx.render();
  const corpo = { id: 'precos', negocio: { cardapios: limpos, motor: 1, atualizado_por: s.user && s.user.email, atualizado_em: new Date().toISOString() }, updated_at: new Date().toISOString() };
  let ok = false;
  try {
    const r = await fetch(`${ctx.SUPABASE_URL}/rest/v1/site_catalog_config?on_conflict=id`, {
      method: 'POST', headers: { ...ctx.api.headers(), Prefer: 'resolution=merge-duplicates,return=minimal' }, body: JSON.stringify(corpo)
    });
    ok = r.ok;
    if (!ok) toast('error', 'Não consegui salvar os preços (' + r.status + '). Nada foi alterado no site.', 8000);
  } catch (e) { toast('error', 'Sem conexão: os preços não foram salvos.', 8000); }
  s.precosSalvando = false;
  if (ok) {
    s.precos.cardapios = limpos; s.precos.origem = 'painel'; s.precosAlterados = false;
    toast('success', 'Preços salvos! Agora clique em "Publicar no site" para levar ao ar.', 7000);
  }
  ctx.render();
}

/* ---------- Galeria: enviar fotos ---------- */
const CATEGORIAS_GALERIA = ['Celebrações', 'Montagem', 'Churrasco', 'Ilhas de Frios e Finger Foods', 'Finger Foods', 'Corporativo', 'Equipe'];
const urlFoto = (nome) => `${ctx.SUPABASE_URL}/storage/v1/object/public/dfaria-midia/galeria/${encodeURIComponent(nome)}`;

async function carregarGaleria() {
  const s = ctx.state;
  try {
    const r = await fetch(`${ctx.SUPABASE_URL}/rest/v1/site_catalog_config?id=eq.galeria&select=negocio`, { headers: ctx.api.headers() });
    const l = r.ok ? await r.json() : [];
    s.galeria = (l[0] && l[0].negocio && Array.isArray(l[0].negocio.fotos)) ? l[0].negocio : { fotos: [] };
  } catch (e) { s.galeria = { fotos: [], erro: 'Não consegui carregar a galeria.' }; }
  if (s.viewMode === 'galeria') ctx.render();
}

async function salvarGaleria(msg) {
  const s = ctx.state;
  const corpo = { id: 'galeria', negocio: { fotos: s.galeria.fotos, atualizado_por: s.user && s.user.email, atualizado_em: new Date().toISOString() }, updated_at: new Date().toISOString() };
  const r = await fetch(`${ctx.SUPABASE_URL}/rest/v1/site_catalog_config?on_conflict=id`, {
    method: 'POST', headers: { ...ctx.api.headers(), Prefer: 'resolution=merge-duplicates,return=minimal' }, body: JSON.stringify(corpo)
  });
  if (!r.ok) { toast('error', 'Não consegui salvar a galeria (' + r.status + ').'); return false; }
  s.galeriaSalvaEm = Date.now();
  if (msg) toast('success', msg);
  return true;
}

async function subirArquivo(nome, blob) {
  const r = await fetch(`${ctx.SUPABASE_URL}/storage/v1/object/dfaria-midia/galeria/${encodeURIComponent(nome)}`, {
    method: 'POST', headers: { apikey: ctx.SUPABASE_KEY, Authorization: 'Bearer ' + ctx.state.token, 'Content-Type': blob.type, 'x-upsert': 'true' }, body: blob
  });
  if (!r.ok) {
    let t = ''; try { t = (await r.json()).message || ''; } catch (e) {}
    if (/bucket not found/i.test(t)) throw new Error('A pasta de fotos (dfaria-midia) não existe no Supabase. Avise o Claude.');
    throw new Error('Falha ao enviar a foto (' + r.status + ') ' + t);
  }
}

async function enviarFotos(arquivos) {
  const s = ctx.state;
  const lista = Array.from(arquivos).filter((f) => /^image\//.test(f.type) || /\.(jpe?g|png|webp|heic|heif)$/i.test(f.name));
  if (!lista.length) { toast('error', 'Escolha arquivos de foto (JPG, PNG ou WebP).'); return; }
  s.galEnviando = { total: lista.length, feitas: 0, erros: [] };
  ctx.render();
  for (const f of lista) {
    try {
      const base = new Date().toISOString().replace(/\D/g, '').slice(0, 14) + '-' + Math.random().toString(36).slice(2, 7);
      const tratada = await window.DfFoto.preparar(f, { tratar: true });
      const original = await window.DfFoto.preparar(f, { tratar: false });
      const ext = tratada.tipo === 'image/webp' ? 'webp' : 'jpg';
      const nomeT = `dfaria-${base}.${ext}`, nomeO = `dfaria-${base}-original.${ext}`;
      await subirArquivo(nomeT, tratada.blob);
      await subirArquivo(nomeO, original.blob);
      URL.revokeObjectURL(tratada.url); URL.revokeObjectURL(original.url);
      s.galeria.fotos.unshift({
        arquivo: nomeT, arquivoTratado: nomeT, arquivoOriginal: nomeO, tratada: true,
        legenda: '', categoria: s.galCategoriaPadrao || 'Celebrações',
        largura: tratada.largura, altura: tratada.altura, enviada_em: new Date().toISOString()
      });
      await salvarGaleria();
    } catch (e) { s.galEnviando.erros.push(f.name + ': ' + e.message); }
    s.galEnviando.feitas++;
    ctx.render();
  }
  const erros = s.galEnviando.erros;
  s.galEnviando = null;
  if (erros.length) toast('error', erros.length + ' foto(s) não subiram. ' + erros[0], 8000);
  else toast('success', lista.length + ' foto(s) enviada(s) e tratada(s). Escreva as legendas e clique em “Publicar no site”.', 7000);
}

function renderGaleria() {
  const s = ctx.state;
  const g = s.galeria;
  const env = s.galEnviando;
  const semLegenda = g ? g.fotos.filter((f) => !String(f.legenda || '').trim()).length : 0;
  return `
    <main class="max-w-6xl mx-auto px-4 sm:px-6 py-8 w-full space-y-6 pb-28">
      <div class="bg-dfgreen text-white rounded-3xl p-6 border border-dfgold/40 shadow-md">
        <div class="flex items-center gap-2"><i data-lucide="images" class="w-5 h-5 text-dfgold"></i><h2 class="font-display font-bold text-xl">Fotos novas da Galeria</h2></div>
        <p class="text-xs text-white/80 mt-1">As fotos enviadas aqui entram <b>no topo</b> da página Galeria, as mais recentes primeiro. Cada foto recebe um <b>tratamento automático de luz e cor</b> (como na edição de um fotógrafo, sem mudar nada da cena) e fica leve para o site. Depois clique em <b>Publicar no site</b>.</p>
      </div>

      <label id="gal-drop" class="block bg-white rounded-3xl border-2 border-dashed border-[#C5A880]/70 hover:border-dfgreen hover:bg-dfsand/40 transition-colors p-8 text-center cursor-pointer ${env ? 'pointer-events-none opacity-70' : ''}">
        <input id="gal-arquivos" type="file" accept="image/*" multiple class="hidden">
        ${env ? `
          <i data-lucide="loader-2" class="w-10 h-10 mx-auto text-dfgold animate-spin"></i>
          <p class="mt-3 font-display font-bold text-dfgreen">Tratando e enviando… ${env.feitas} de ${env.total}</p>
          <div class="mt-3 h-2 max-w-sm mx-auto bg-stone-100 rounded-full overflow-hidden"><div class="h-full bg-dfgold transition-all" style="width:${Math.round(env.feitas / env.total * 100)}%"></div></div>
        ` : `
          <i data-lucide="image-plus" class="w-10 h-10 mx-auto text-dfgold"></i>
          <p class="mt-3 font-display font-bold text-lg text-dfgreen">Arraste as fotos aqui ou clique para escolher</p>
          <p class="text-xs text-stone-500 mt-1">Pode escolher várias de uma vez. No celular, abre a galeria do aparelho.</p>
        `}
      </label>
      <div class="flex flex-wrap items-center gap-2 text-xs text-stone-600">
        <span class="font-bold">Categoria para as próximas fotos:</span>
        <select id="gal-cat-padrao" class="border border-stone-200 rounded-lg py-1.5 px-2 bg-white">
          ${CATEGORIAS_GALERIA.map((c) => `<option ${c === (s.galCategoriaPadrao || 'Celebrações') ? 'selected' : ''}>${esc(c)}</option>`).join('')}
        </select>
      </div>

      ${!g ? '<p class="text-sm text-stone-500 flex items-center gap-2"><i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Carregando…</p>' : g.erro ? `<p class="text-sm text-red-600">${esc(g.erro)}</p>` : !g.fotos.length ? '<p class="text-sm text-stone-500 text-center py-6">Nenhuma foto nova ainda. As 56 fotos atuais da galeria continuam no site.</p>' : `
      ${semLegenda ? `<p class="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">${semLegenda} foto(s) sem legenda. Uma frase curta ajuda o Google a mostrar suas fotos (ex.: “Mesa de casamento com flores brancas em Tatuí”).</p>` : ''}
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${g.fotos.map((f, i) => `
          <div class="bg-white rounded-3xl border border-[#C5A880]/30 shadow-sm overflow-hidden flex flex-col">
            <div class="relative aspect-[4/3] bg-stone-100">
              <img src="${urlFoto(f.arquivo)}" alt="" class="w-full h-full object-cover" loading="lazy">
              <span class="absolute top-2 left-2 text-[10px] font-bold px-2 py-1 rounded-full ${f.tratada ? 'bg-dfgold text-dfgreen' : 'bg-white/90 text-stone-600'}">${f.tratada ? '✨ Tratada' : 'Original'}</span>
              ${i === 0 ? '<span class="absolute top-2 right-2 text-[10px] font-bold px-2 py-1 rounded-full bg-dfgreen text-white">1ª da galeria</span>' : ''}
            </div>
            <div class="p-4 space-y-3 flex-1 flex flex-col">
              <input class="gal-legenda w-full py-2 px-3 rounded-xl border ${String(f.legenda || '').trim() ? 'border-stone-200' : 'border-amber-300'} text-sm" data-i="${i}" maxlength="140" placeholder="Legenda (ex.: Mesa posta para casamento)" value="${esc(f.legenda)}">
              <select class="gal-categoria w-full py-2 px-3 rounded-xl border border-stone-200 text-sm" data-i="${i}">
                ${CATEGORIAS_GALERIA.map((c) => `<option ${c === f.categoria ? 'selected' : ''}>${esc(c)}</option>`).join('')}
              </select>
              <div class="mt-auto flex items-center gap-1.5 pt-1">
                <button class="gal-trat flex-1 text-[11px] font-bold py-2 rounded-lg border ${f.tratada ? 'border-dfgold text-dfgreen bg-dfsand' : 'border-stone-200 text-stone-500'}" data-i="${i}" title="Alternar entre a foto tratada e a original">${f.tratada ? 'Usar a original' : 'Usar a tratada ✨'}</button>
                <button class="gal-sobe p-2 rounded-lg border border-stone-200 text-stone-500 hover:text-dfgreen ${i === 0 ? 'invisible' : ''}" data-i="${i}" title="Mover para antes"><i data-lucide="arrow-left" class="w-4 h-4"></i></button>
                <button class="gal-desce p-2 rounded-lg border border-stone-200 text-stone-500 hover:text-dfgreen ${i === g.fotos.length - 1 ? 'invisible' : ''}" data-i="${i}" title="Mover para depois"><i data-lucide="arrow-right" class="w-4 h-4"></i></button>
                <button class="gal-remover p-2 rounded-lg border border-stone-200 text-stone-400 hover:text-red-600 hover:bg-red-50" data-i="${i}" title="Tirar da galeria"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
              </div>
            </div>
          </div>`).join('')}
      </div>`}
      ${s.confirmar ? modalConfirmar(s.confirmar) : ''}
    </main>`;
}

function ligarGaleria() {
  const s = ctx.state;
  const input = document.getElementById('gal-arquivos');
  if (input) input.onchange = () => { if (input.files.length) enviarFotos(input.files); };
  const drop = document.getElementById('gal-drop');
  if (drop) {
    drop.ondragover = (e) => { e.preventDefault(); drop.classList.add('border-dfgreen', 'bg-dfsand/40'); };
    drop.ondragleave = () => drop.classList.remove('border-dfgreen', 'bg-dfsand/40');
    drop.ondrop = (e) => { e.preventDefault(); if (e.dataTransfer.files.length) enviarFotos(e.dataTransfer.files); };
  }
  const cat = document.getElementById('gal-cat-padrao');
  if (cat) cat.onchange = () => { s.galCategoriaPadrao = cat.value; };
  let espera = null;
  const salvarDepois = () => { clearTimeout(espera); espera = setTimeout(() => salvarGaleria(), 700); };
  document.querySelectorAll('.gal-legenda').forEach((el) => {
    el.oninput = () => { s.galeria.fotos[+el.dataset.i].legenda = el.value; el.classList.toggle('border-amber-300', !el.value.trim()); salvarDepois(); };
  });
  document.querySelectorAll('.gal-categoria').forEach((el) => {
    el.onchange = () => { s.galeria.fotos[+el.dataset.i].categoria = el.value; salvarGaleria(); };
  });
  const mover = (i, d) => { const f = s.galeria.fotos; const j = i + d; if (j < 0 || j >= f.length) return; [f[i], f[j]] = [f[j], f[i]]; salvarGaleria(); ctx.render(); };
  document.querySelectorAll('.gal-sobe').forEach((b) => b.onclick = () => mover(+b.dataset.i, -1));
  document.querySelectorAll('.gal-desce').forEach((b) => b.onclick = () => mover(+b.dataset.i, 1));
  document.querySelectorAll('.gal-trat').forEach((b) => b.onclick = () => {
    const f = s.galeria.fotos[+b.dataset.i];
    if (!f.arquivoOriginal) return;
    f.tratada = !f.tratada; f.arquivo = f.tratada ? f.arquivoTratado : f.arquivoOriginal;
    salvarGaleria(); ctx.render();
  });
  document.querySelectorAll('.gal-remover').forEach((b) => b.onclick = () => {
    s.confirmar = { titulo: 'Tirar esta foto da galeria?', texto: 'Ela sai do site na próxima publicação. As outras fotos não mudam.', botao: 'Tirar da galeria', acao: 'galeria-remover', i: +b.dataset.i };
    ctx.render();
  });
  const nao = document.getElementById('modal-nao');
  if (nao) nao.onclick = () => { s.confirmar = null; ctx.render(); };
  const sim = document.getElementById('modal-sim');
  if (sim && s.confirmar && s.confirmar.acao === 'galeria-remover') sim.onclick = async () => {
    const i = s.confirmar.i; s.confirmar = null;
    s.galeria.fotos.splice(i, 1);
    await salvarGaleria('Foto retirada. Clique em “Publicar no site” para sair do site.');
    ctx.render();
  };
}

/* ---------- Aparência ---------- */
const TIPOS = [
  { id: 'capa', nome: 'Frase da capa', ajuda: 'Só a frase embaixo do título grande da página inicial (“Você celebra, confraterniza…”). Ganha sombra para ler bem sobre o vídeo.', cor: 'capaFrase', fonte: null, semFonte: 'A fonte desta frase acompanha a fonte dos Textos.', exemplo: 'Você celebra, confraterniza e aproveita cada momento…' },
  { id: 'titulos', nome: 'Títulos', ajuda: 'Os títulos grandes das páginas e das seções.', cor: 'titulos', fonte: 'titulos', exemplo: 'Eventos atendidos pelo D’Faria' },
  { id: 'textos', nome: 'Textos', ajuda: 'Os parágrafos, listas, menu e rodapé.', cor: 'textos', fonte: 'textos', exemplo: 'Cada formato tem um ritmo próprio de serviço.' },
  { id: 'destaques', nome: 'Destaques', ajuda: 'O “dourado”: segunda parte dos títulos, subtítulos, links e detalhes.', cor: 'destaques', fonte: null, exemplo: 'Alta gastronomia' },
  { id: 'botoes', nome: 'Botões', ajuda: 'O botão “Solicitar orçamento” e os botões principais.', cor: 'botaoFundo', cor2: 'botaoTexto', fonte: 'botoes', exemplo: 'Solicitar orçamento' }
];

function valorCor(chave) { const r = ctx.state.temaRascunho; return (r && r.cores[chave]) || T().PADRAO.cores[chave]; }
function valorFonte(chave) { const r = ctx.state.temaRascunho; return (r && r.fontes[chave]) || T().PADRAO.fontes[chave]; }
function familia(nome) { const f = T().fonte(nome); return f ? f.familia : 'inherit'; }

function seletorCor(tipo, chave, rotulo) {
  const atual = valorCor(chave);
  const escolhida = ctx.state.temaRascunho.cores[chave];
  const fundo = chave === 'botaoTexto' ? valorCor('botaoFundo') : T().FUNDO_SITE;
  // a frase da capa fica sobre o vídeo (claro e escuro ao mesmo tempo): a sombra garante a leitura, sem selo
  const l = chave === 'capaFrase' ? null : T().leitura(atual, fundo);
  const corNivel = !l ? '' : l.razao >= 4.5 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : l.razao >= 3 ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-red-50 text-red-700 border-red-200';
  return `
    <div class="space-y-2">
      <div class="flex items-center justify-between gap-2">
        <span class="text-xs font-bold text-stone-700">${rotulo}</span>
        ${l ? `<span class="text-[11px] font-semibold px-2 py-0.5 rounded-full border ${corNivel}" title="Contraste ${l.razao}:1 sobre o fundo">Leitura: ${l.nivel}</span>` : ''}
      </div>
      <div class="flex flex-wrap items-center gap-1.5">
        ${T().PALETA.map((p) => `
          <button type="button" class="ap-cor w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${atual === p.cor ? 'border-dfgreen ring-2 ring-dfgold scale-110' : 'border-stone-200'}"
            style="background:${p.cor}" data-chave="${chave}" data-cor="${p.cor}" title="${esc(p.nome)}" aria-label="${esc(p.nome)}"></button>`).join('')}
        <label class="relative w-8 h-8 rounded-full border-2 border-dashed border-stone-300 flex items-center justify-center cursor-pointer hover:border-dfgreen" title="Outra cor">
          <i data-lucide="pipette" class="w-3.5 h-3.5 text-stone-500"></i>
          <input type="color" class="ap-cor-livre absolute inset-0 opacity-0 cursor-pointer" data-chave="${chave}" value="${atual}">
        </label>
        <span class="text-[11px] font-mono text-stone-500 ml-1">${atual}${escolhida ? '' : ' (padrão)'}</span>
      </div>
    </div>`;
}

function seletorFonte(chave) {
  const atual = valorFonte(chave);
  const escolhida = ctx.state.temaRascunho.fontes[chave];
  const grupos = {};
  T().FONTES.forEach((f) => { (grupos[f.estilo] = grupos[f.estilo] || []).push(f); });
  return `
    <div class="space-y-2">
      <span class="text-xs font-bold text-stone-700">Fonte ${escolhida ? '' : '<span class="font-normal text-stone-400">(padrão)</span>'}</span>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-48 overflow-y-auto pr-1">
        ${Object.entries(grupos).map(([g, fs]) => fs.map((f) => `
          <button type="button" class="ap-fonte text-left px-2.5 py-2 rounded-lg border text-[15px] leading-tight transition-all ${atual === f.nome ? 'border-dfgreen bg-dfgreen text-white' : 'border-stone-200 hover:border-dfgold bg-white'}"
            style="font-family:${f.familia}" data-chave="${chave}" data-fonte="${esc(f.nome)}">
            ${esc(f.nome)}<span class="block text-[10px] opacity-60" style="font-family:Inter,sans-serif">${esc(g)}</span>
          </button>`).join('')).join('')}
      </div>
    </div>`;
}

function cartaoTipo(t) {
  const corTxt = valorCor(t.cor2 ? 'botaoTexto' : t.cor);
  const fundo = t.cor2 ? valorCor('botaoFundo') : T().FUNDO_SITE;
  const fonteEx = t.fonte ? familia(valorFonte(t.fonte)) : familia(valorFonte(t.id === 'capa' ? 'textos' : 'titulos'));
  return `
    <div class="bg-white rounded-3xl p-5 sm:p-6 border border-[#C5A880]/30 shadow-sm space-y-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="font-display text-lg font-bold text-dfgreen">${t.nome}</h3>
          <p class="text-xs text-stone-500">${t.ajuda}</p>
        </div>
        <button type="button" class="ap-restaurar-tipo text-[11px] text-stone-400 hover:text-dfgreen underline whitespace-nowrap" data-tipo="${t.id}">Voltar ao padrão</button>
      </div>
      <div class="rounded-2xl px-4 py-3 text-lg" style="background:${t.id === 'capa' ? 'linear-gradient(135deg,#d9dde0,#f4f1ea 55%,#b9c2c7)' : t.cor2 ? '#0a1c0d' : fundo};${t.id === 'capa' ? 'text-shadow:0 2px 10px rgba(0,0,0,.75),0 0 2px rgba(0,0,0,.6)' : ''}">
        ${t.cor2
          ? `<span class="inline-block px-4 py-2 rounded-md text-sm font-semibold" style="background:${valorCor('botaoFundo')};color:${corTxt};font-family:${fonteEx}">${t.exemplo}</span>`
          : `<span style="color:${corTxt};font-family:${fonteEx}">${t.exemplo}</span>`}
      </div>
      ${t.cor2 ? seletorCor(t, 'botaoFundo', 'Cor do botão') + seletorCor(t, 'botaoTexto', 'Cor do texto do botão') : seletorCor(t, t.cor, 'Cor')}
      ${t.fonte ? seletorFonte(t.fonte) : `<p class="text-[11px] text-stone-400">${t.semFonte || 'A fonte dos destaques acompanha a fonte dos Títulos.'}</p>`}
    </div>`;
}

function renderControlesAparencia() {
  const s = ctx.state;
  const mudou = JSON.stringify(T().normalizar(s.temaSalvo)) !== JSON.stringify(s.temaRascunho);
  const hist = (s.temaSalvo && s.temaSalvo.historico) || [];
  return `
    <div class="bg-dfgreen text-white rounded-3xl p-5 border border-dfgold/40 shadow-md space-y-3">
      <div class="flex items-center gap-2"><i data-lucide="palette" class="w-5 h-5 text-dfgold"></i><h2 class="font-display font-bold text-lg">Cores e fontes do site inteiro</h2></div>
      <p class="text-xs text-white/80">Escolha à vontade: a prévia ao lado muda na hora. O site só muda quando você clicar em <b>Publicar no site</b>.</p>
      <div class="flex flex-wrap gap-2">
        <button type="button" id="ap-publicar" class="inline-flex items-center gap-1.5 py-2 px-4 rounded-xl bg-dfgold text-dfgreen text-sm font-extrabold shadow ${mudou ? '' : 'opacity-60'}"><i data-lucide="rocket" class="w-4 h-4"></i> Publicar no site</button>
        <button type="button" id="ap-salvar" class="inline-flex items-center gap-1.5 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold ${mudou ? '' : 'opacity-60'}"><i data-lucide="save" class="w-4 h-4 text-dfgold"></i> Só salvar</button>
        <button type="button" id="ap-descartar" class="inline-flex items-center gap-1.5 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold ${mudou ? '' : 'hidden'}"><i data-lucide="undo-2" class="w-4 h-4 text-dfgold"></i> Desfazer o que não salvei</button>
        <button type="button" id="ap-padrao" class="inline-flex items-center gap-1.5 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold"><i data-lucide="rotate-ccw" class="w-4 h-4 text-dfgold"></i> Tudo como era (padrão)</button>
        ${hist.length ? `<button type="button" id="ap-anterior" class="inline-flex items-center gap-1.5 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold"><i data-lucide="history" class="w-4 h-4 text-dfgold"></i> Voltar ao visual anterior</button>` : ''}
      </div>
      ${mudou ? '<p class="text-[11px] text-dfgold font-semibold">● Você tem mudanças que ainda não foram para o site.</p>' : ''}
    </div>
    ${TIPOS.map(cartaoTipo).join('')}`;
}

function renderAparencia() {
  const s = ctx.state;
  const pag = s.apPagina || '/';
  const cel = s.apCelular;
  const paginas = [['/', 'Início'], ['/eventos', 'Eventos'], ['/eventos/casamentos', 'Casamentos'], ['/cardapios', 'Cardápios'], ['/galeria', 'Galeria'], ['/orcamento', 'Orçamento'], ['/faq', 'FAQ']];
  return `
    <main class="max-w-[1500px] mx-auto px-4 sm:px-6 py-6 w-full grid grid-cols-1 xl:grid-cols-12 gap-6 pb-24">
      <section id="ap-controles" class="xl:col-span-5 space-y-5">${renderControlesAparencia()}</section>
      <section class="xl:col-span-7">
        <div class="xl:sticky xl:top-20 bg-white rounded-3xl border border-[#C5A880]/30 shadow-sm overflow-hidden">
          <div class="flex flex-wrap items-center gap-2 px-4 py-3 border-b border-stone-100 bg-dfsand/60">
            <span class="text-xs font-bold text-dfgreen flex items-center gap-1.5"><i data-lucide="eye" class="w-4 h-4 text-dfgold"></i> Prévia ao vivo</span>
            <select id="ap-pagina" class="ml-auto text-xs border border-stone-200 rounded-lg py-1.5 px-2 bg-white">
              ${paginas.map(([u, n]) => `<option value="${u}" ${u === pag ? 'selected' : ''}>${n}</option>`).join('')}
            </select>
            <div class="flex p-0.5 bg-white rounded-lg border border-stone-200">
              <button type="button" id="ap-pc" class="px-2 py-1 rounded-md ${cel ? 'text-stone-500' : 'bg-dfgreen text-white'}" title="Computador"><i data-lucide="monitor" class="w-4 h-4"></i></button>
              <button type="button" id="ap-cel" class="px-2 py-1 rounded-md ${cel ? 'bg-dfgreen text-white' : 'text-stone-500'}" title="Celular"><i data-lucide="smartphone" class="w-4 h-4"></i></button>
            </div>
          </div>
          <div class="bg-stone-200 flex justify-center" style="height:78vh">
            <iframe id="ap-previa" src="${pag}" title="Prévia do site" class="bg-white h-full border-0 shadow-inner" style="width:${cel ? '390px' : '100%'}"></iframe>
          </div>
        </div>
      </section>
    </main>`;
}

function aplicarPrevia() {
  const f = document.getElementById('ap-previa');
  if (!f) return;
  let d;
  try { d = f.contentDocument; } catch (e) { return; }
  if (!d || !d.head) return;
  // desliga o tema publicado e coloca o rascunho
  d.querySelectorAll('link[href^="/assets/tema.css"]').forEach((l) => { l.disabled = true; });
  let fontes = d.getElementById('df-previa-fontes');
  const href = T().linkFontes(ctx.state.temaRascunho);
  if (href) {
    if (!fontes) { fontes = d.createElement('link'); fontes.id = 'df-previa-fontes'; fontes.rel = 'stylesheet'; d.head.appendChild(fontes); }
    if (fontes.getAttribute('href') !== href) fontes.setAttribute('href', href);
  }
  let st = d.getElementById('df-previa-tema');
  if (!st) { st = d.createElement('style'); st.id = 'df-previa-tema'; d.head.appendChild(st); }
  st.textContent = T().gerarCss(ctx.state.temaRascunho);
}

function redesenharControles() {
  const c = document.getElementById('ap-controles');
  if (!c) return;
  const y = window.scrollY;
  c.innerHTML = renderControlesAparencia();
  ligarAparencia();
  if (window.lucide) window.lucide.createIcons();
  window.scrollTo(0, y);
  aplicarPrevia();
}

function mudar(fn) { fn(ctx.state.temaRascunho); redesenharControles(); }

async function salvarTema(eDepoisPublicar) {
  const s = ctx.state;
  const antes = T().normalizar(s.temaSalvo);
  const novo = T().normalizar(s.temaRascunho);
  const mudou = JSON.stringify(antes) !== JSON.stringify(novo);
  if (mudou) {
    const hist = ((s.temaSalvo && s.temaSalvo.historico) || []).slice(0, 9);
    const registro = { cores: antes.cores, fontes: antes.fontes, em: (s.temaSalvo && s.temaSalvo.atualizado_em) || null };
    const corpo = { ...novo, historico: [registro, ...hist], atualizado_por: s.user && s.user.email, atualizado_em: new Date().toISOString() };
    const r = await fetch(`${ctx.SUPABASE_URL}/rest/v1/site_catalog_config?id=eq.tema`, {
      method: 'PATCH', headers: { ...ctx.api.headers(), Prefer: 'return=representation' }, body: JSON.stringify({ negocio: corpo })
    });
    const linhas = r.ok ? await r.json() : [];
    if (!r.ok || !linhas.length) { toast('error', 'Não consegui salvar a aparência. Só o Dono pode mudar cores e fontes.'); return; }
    s.temaSalvo = linhas[0].negocio;
    s.temaRascunho = T().normalizar(s.temaSalvo);
  }
  if (eDepoisPublicar) { await publicar(); atualizarCabecalhoPublicar(); redesenharControles(); }
  else { toast('success', mudou ? 'Aparência salva. Clique em “Publicar no site” para ir ao ar.' : 'Nada novo para salvar.'); }
}

function ligarAparencia() {
  const q = (s) => document.querySelectorAll(s);
  q('.ap-cor').forEach((b) => b.onclick = () => mudar((r) => { r.cores[b.dataset.chave] = b.dataset.cor; }));
  q('.ap-cor-livre').forEach((i) => i.oninput = () => mudar((r) => { r.cores[i.dataset.chave] = i.value.toLowerCase(); }));
  q('.ap-fonte').forEach((b) => b.onclick = () => mudar((r) => { r.fontes[b.dataset.chave] = b.dataset.fonte; }));
  q('.ap-restaurar-tipo').forEach((b) => b.onclick = () => mudar((r) => {
    const t = TIPOS.find((x) => x.id === b.dataset.tipo);
    r.cores[t.cor] = null; if (t.cor2) r.cores[t.cor2] = null; if (t.fonte) r.fontes[t.fonte] = null;
  }));
  const on = (id, fn) => { const e = document.getElementById(id); if (e) e.onclick = fn; };
  on('ap-padrao', () => mudar((r) => { Object.keys(r.cores).forEach((k) => r.cores[k] = null); Object.keys(r.fontes).forEach((k) => r.fontes[k] = null); }));
  on('ap-descartar', () => { ctx.state.temaRascunho = T().normalizar(ctx.state.temaSalvo); redesenharControles(); });
  on('ap-anterior', () => {
    const h = (ctx.state.temaSalvo.historico || [])[0];
    if (h) { ctx.state.temaRascunho = T().normalizar(h); redesenharControles(); toast('success', 'Visual anterior carregado na prévia. Confira e clique em “Publicar no site”.'); }
  });
  on('ap-salvar', () => salvarTema(false));
  on('ap-publicar', () => salvarTema(true));
}

/* ---------- Configurações: usuários ---------- */
function renderConfig() {
  const s = ctx.state;
  const u = s.usuarios;
  const novo = s.novoUsuario || { nome: '', email: '', papel: 'editor', modo: 'senha', senha: '' };
  const data = (iso) => iso ? new Date(iso).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }) : 'nunca entrou';
  return `
    <main class="max-w-5xl mx-auto px-4 sm:px-6 py-8 w-full space-y-6 pb-24">
      <div class="bg-dfgreen text-white rounded-3xl p-6 border border-dfgold/40 shadow-md">
        <div class="flex items-center gap-2"><i data-lucide="users" class="w-5 h-5 text-dfgold"></i><h2 class="font-display font-bold text-xl">Usuários do painel</h2></div>
        <p class="text-xs text-white/80 mt-1">Só quem estiver nesta lista entra no painel. <b>Dono</b>: tudo, inclusive usuários e aparência. <b>Editor</b>: textos, fotos e cardápios, e pode publicar.</p>
      </div>

      <div class="bg-white rounded-3xl p-6 border border-[#C5A880]/30 shadow-sm">
        <h3 class="font-display font-bold text-dfgreen mb-4 flex items-center gap-2"><i data-lucide="user-plus" class="w-4 h-4 text-dfgold"></i> Adicionar usuário</h3>
        <form id="cfg-novo" class="grid sm:grid-cols-2 gap-4">
          <label class="text-xs font-bold text-stone-700">Nome<input name="nome" value="${esc(novo.nome)}" maxlength="80" placeholder="Ex.: Maria (atendimento)" class="mt-1 w-full py-2.5 px-3 rounded-xl border border-stone-200 text-sm font-normal"></label>
          <label class="text-xs font-bold text-stone-700">E-mail<input name="email" type="email" required value="${esc(novo.email)}" placeholder="pessoa@email.com" class="mt-1 w-full py-2.5 px-3 rounded-xl border border-stone-200 text-sm font-normal"></label>
          <label class="text-xs font-bold text-stone-700">Papel
            <select name="papel" class="mt-1 w-full py-2.5 px-3 rounded-xl border border-stone-200 text-sm font-normal">
              <option value="editor" ${novo.papel === 'editor' ? 'selected' : ''}>Editor — textos, fotos, cardápios e publicar</option>
              <option value="dono" ${novo.papel === 'dono' ? 'selected' : ''}>Dono — tudo, inclusive usuários e aparência</option>
            </select></label>
          <div class="text-xs font-bold text-stone-700">Como a pessoa vai entrar
            <div class="mt-1 flex gap-2">
              <label class="flex-1 flex items-center gap-2 py-2.5 px-3 rounded-xl border ${novo.modo === 'senha' ? 'border-dfgreen bg-dfsand' : 'border-stone-200'} font-normal cursor-pointer"><input type="radio" name="modo" value="senha" ${novo.modo === 'senha' ? 'checked' : ''}> Eu crio a senha</label>
              <label class="flex-1 flex items-center gap-2 py-2.5 px-3 rounded-xl border ${novo.modo === 'convite' ? 'border-dfgreen bg-dfsand' : 'border-stone-200'} font-normal cursor-pointer"><input type="radio" name="modo" value="convite" ${novo.modo === 'convite' ? 'checked' : ''}> Convite por e-mail</label>
            </div></div>
          ${novo.modo === 'senha' ? `<label class="text-xs font-bold text-stone-700 sm:col-span-2">Senha provisória (mínimo 8 caracteres)<input name="senha" type="text" minlength="8" autocomplete="new-password" value="${esc(novo.senha)}" class="mt-1 w-full py-2.5 px-3 rounded-xl border border-stone-200 text-sm font-normal font-mono"><span class="block font-normal text-stone-400 mt-1">Passe essa senha para a pessoa. Ela entra com o e-mail e essa senha.</span></label>` : '<p class="text-xs text-stone-500 sm:col-span-2">A pessoa recebe um e-mail para criar a própria senha.</p>'}
          <div class="sm:col-span-2"><button type="submit" class="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-dfgreen hover:bg-dfgreendeep text-white text-sm font-bold"><i data-lucide="user-plus" class="w-4 h-4 text-dfgold"></i> Adicionar</button></div>
        </form>
      </div>

      <div class="bg-white rounded-3xl p-6 border border-[#C5A880]/30 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-display font-bold text-dfgreen flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-dfgold"></i> Quem tem acesso</h3>
          <button id="cfg-recarregar" class="text-xs text-stone-500 hover:text-dfgreen flex items-center gap-1"><i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Atualizar</button>
        </div>
        ${!u ? '<p class="text-sm text-stone-500 flex items-center gap-2"><i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Carregando…</p>' : u.erro ? `<p class="text-sm text-red-600">${esc(u.erro)}</p>` : `
        <div class="divide-y divide-stone-100">
          ${u.usuarios.map((x) => `
            <div class="py-3 flex flex-wrap items-center gap-3">
              <div class="w-9 h-9 rounded-full ${x.papel === 'dono' ? 'bg-dfgold text-dfgreen' : 'bg-dfsand text-dfgreen'} flex items-center justify-center font-bold">${esc((x.nome || x.email)[0].toUpperCase())}</div>
              <div class="flex-1 min-w-[180px]">
                <p class="text-sm font-bold text-dfgreen">${esc(x.nome || x.email.split('@')[0])} ${x.souEu ? '<span class="text-[10px] font-semibold text-dfgold">(você)</span>' : ''}</p>
                <p class="text-xs text-stone-500">${esc(x.email)} · ${x.temConta ? 'último acesso: ' + data(x.ultimoAcesso) : '<span class="text-amber-600">sem conta criada</span>'}</p>
              </div>
              <select class="cfg-papel text-xs border border-stone-200 rounded-lg py-1.5 px-2" data-email="${esc(x.email)}" ${x.souEu ? 'disabled title="Você não pode mudar o seu próprio papel"' : ''}>
                <option value="dono" ${x.papel === 'dono' ? 'selected' : ''}>Dono</option>
                <option value="editor" ${x.papel === 'editor' ? 'selected' : ''}>Editor</option>
              </select>
              <button class="cfg-excluir p-2 rounded-lg text-stone-400 hover:text-red-600 hover:bg-red-50 ${x.souEu ? 'invisible' : ''}" data-email="${esc(x.email)}" title="Excluir"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>`).join('')}
        </div>
        ${u.semAcesso && u.semAcesso.length ? `<p class="mt-4 text-[11px] text-stone-400">Contas no sistema sem acesso ao painel: ${u.semAcesso.map((x) => esc(x.email)).join(', ')}</p>` : ''}`}
      </div>
      ${s.confirmar ? modalConfirmar(s.confirmar) : ''}
    </main>`;
}

function modalConfirmar(c) {
  return `
    <div class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div class="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4" role="dialog" aria-modal="true">
        <h3 class="font-display font-bold text-lg text-dfgreen flex items-center gap-2"><i data-lucide="alert-triangle" class="w-5 h-5 text-red-500"></i> ${esc(c.titulo)}</h3>
        <p class="text-sm text-stone-600">${esc(c.texto)}</p>
        <div class="flex justify-end gap-2">
          <button id="modal-nao" class="py-2 px-4 rounded-xl border border-stone-200 text-sm font-bold text-stone-600">Cancelar</button>
          <button id="modal-sim" class="py-2 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold">${esc(c.botao)}</button>
        </div>
      </div>
    </div>`;
}

async function carregarUsuarios() {
  try { ctx.state.usuarios = await chamarFuncao('painel-usuarios', { acao: 'listar' }); }
  catch (e) { ctx.state.usuarios = { erro: e.message }; }
  if (ctx.state.viewMode === 'config') ctx.render();
}

function ligarConfig() {
  const s = ctx.state;
  const form = document.getElementById('cfg-novo');
  if (form) {
    const guardar = () => {
      const fd = new FormData(form);
      s.novoUsuario = { nome: fd.get('nome') || '', email: fd.get('email') || '', papel: fd.get('papel') || 'editor', modo: fd.get('modo') || 'senha', senha: fd.get('senha') || '' };
    };
    form.querySelectorAll('input[name="modo"]').forEach((r) => r.onchange = () => { guardar(); ctx.render(); });
    form.onsubmit = async (e) => {
      e.preventDefault(); guardar();
      const n = s.novoUsuario;
      try {
        const r = await chamarFuncao('painel-usuarios', { acao: 'criar', email: n.email, nome: n.nome, papel: n.papel, senha: n.senha, convite: n.modo === 'convite' });
        s.novoUsuario = null;
        toast('success', r.mensagem || 'Usuário adicionado.', 6000);
        carregarUsuarios();
      } catch (err) { toast('error', err.message, 6000); }
    };
  }
  const rec = document.getElementById('cfg-recarregar');
  if (rec) rec.onclick = () => { s.usuarios = null; ctx.render(); carregarUsuarios(); };
  document.querySelectorAll('.cfg-papel').forEach((sel) => sel.onchange = async () => {
    try { const r = await chamarFuncao('painel-usuarios', { acao: 'papel', email: sel.dataset.email, papel: sel.value }); toast('success', r.mensagem); }
    catch (err) { toast('error', err.message); }
    carregarUsuarios();
  });
  document.querySelectorAll('.cfg-excluir').forEach((b) => b.onclick = () => {
    s.confirmar = { titulo: 'Excluir usuário?', texto: `${b.dataset.email} não vai mais conseguir entrar no painel. Isso não apaga nada do site.`, botao: 'Excluir', email: b.dataset.email };
    ctx.render();
  });
  const nao = document.getElementById('modal-nao');
  if (nao) nao.onclick = () => { s.confirmar = null; ctx.render(); };
  const sim = document.getElementById('modal-sim');
  if (sim) sim.onclick = async () => {
    const email = s.confirmar.email; s.confirmar = null; ctx.render();
    try { const r = await chamarFuncao('painel-usuarios', { acao: 'excluir', email }); toast('success', r.mensagem); }
    catch (err) { toast('error', err.message); }
    carregarUsuarios();
  };
}

/* ===================== Eventos gerais ===================== */
export function ligarEventos() {
  const s = ctx.state;
  const on = (id, fn) => { const e = document.getElementById(id); if (e) e.onclick = fn; };
  on('btn-toggle-aparencia', () => { s.viewMode = 'aparencia'; if (!s.temaRascunho) s.temaRascunho = T().normalizar(s.temaSalvo); ctx.render(); });
  on('btn-toggle-config', () => { s.viewMode = 'config'; s.usuarios = null; ctx.render(); carregarUsuarios(); });
  on('btn-toggle-galeria', () => { s.viewMode = 'galeria'; if (!s.galeria) { ctx.render(); carregarGaleria(); } else ctx.render(); });
  on('btn-toggle-precos', () => { s.viewMode = 'precos'; ctx.render(); carregarPrecos(); });
  if (s.viewMode === 'galeria') ligarGaleria();
  if (s.viewMode === 'precos' && s.precos) ligarPrecos();
  ligarBotoesPublicar();
  if (s.viewMode === 'aparencia') {
    ligarAparencia();
    const f = document.getElementById('ap-previa');
    if (f) f.onload = aplicarPrevia;
    const sel = document.getElementById('ap-pagina');
    if (sel) sel.onchange = () => { s.apPagina = sel.value; ctx.render(); };
    on('ap-pc', () => { s.apCelular = false; ctx.render(); });
    on('ap-cel', () => { s.apCelular = true; ctx.render(); });
  }
  if (s.viewMode === 'config') ligarConfig();
}

/* Tela para quem fez login mas não está na lista de usuários do painel */
export function renderSemAcesso() {
  return `
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="w-full max-w-md bg-white rounded-3xl p-8 border border-[#C5A880]/30 shadow-xl space-y-4 text-center">
        <div class="inline-flex p-3 rounded-2xl bg-red-50 text-red-600"><i data-lucide="lock" class="w-8 h-8"></i></div>
        <h1 class="font-display text-xl font-bold text-dfgreen">Sem acesso ao painel</h1>
        <p class="text-sm text-stone-500">A conta <b>${esc(ctx.state.user && ctx.state.user.email)}</b> não está autorizada. Peça ao Dono para adicionar você em Configurações.</p>
        <button id="btn-logout" class="py-2.5 px-5 rounded-xl bg-dfgreen text-white text-sm font-bold">Sair</button>
      </div>
    </div>`;
}

export function instalarExtras(c) {
  ctx = c;
  // carrega todas as fontes da seleção (para a lista mostrar cada nome na própria fonte)
  if (window.DfTema && !document.getElementById('df-fontes-painel')) {
    const l = document.createElement('link');
    l.id = 'df-fontes-painel'; l.rel = 'stylesheet'; l.href = T().linkTodasFontes();
    document.head.appendChild(l);
  }
}
