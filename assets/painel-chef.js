// Painel do Chef — Módulo SPA Puro (Vanilla JS + Supabase)
// URL: /painel | Privado, Seguro (Supabase Auth), Responsivo e Simples

const SUPABASE_URL = 'https://gcwxhawqvtqhpoohihjo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_yeda5BcY2QZyBoVMi4r_0Q_Hbxc5Ex2';

// Estado global do painel
const state = {
  user: null,
  token: localStorage.getItem('df_chef_token') || null,
  refreshToken: localStorage.getItem('df_chef_refresh') || null,
  categories: [],
  menus: [],
  pricingConfig: null,
  selectedMenu: null,
  isEditing: false,
  activeTab: 'geral', // 'geral', 'secoes', 'colar', 'precos'
  loading: false,
  feedback: null,
  pasteText: ''
};

// Cliente REST / Auth Supabase leve
const api = {
  headers() {
    const h = {
      'apikey': SUPABASE_KEY,
      'Content-Type': 'application/json'
    };
    if (state.token) {
      h['Authorization'] = `Bearer ${state.token}`;
    }
    return h;
  },

  async login(email, password) {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: { 'apikey': SUPABASE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error_description || data.msg || 'Falha no login');
    return data;
  },

  async getUser() {
    if (!state.token) return null;
    const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${state.token}` }
    });
    if (!res.ok) return null;
    return await res.json();
  },

  async getCategories() {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/site_categories?select=*&order=ordem.asc`, {
      headers: api.headers()
    });
    return await res.json();
  },

  async getMenus() {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/site_menus?select=*&order=ordem.asc`, {
      headers: api.headers()
    });
    return await res.json();
  },

  async getPricingConfig() {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/site_pricing_config?id=eq.primary`, {
      headers: api.headers()
    });
    const d = await res.json();
    return d[0] || null;
  },

  async saveMenu(menu) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/site_menus?slug=eq.${encodeURIComponent(menu.slug)}`, {
      method: 'PATCH',
      headers: { ...api.headers(), 'Prefer': 'return=representation' },
      body: JSON.stringify({
        nome: menu.nome,
        categoria_id: menu.categoria_id,
        title: menu.title,
        description: menu.description,
        sobretitulo: menu.sobretitulo,
        resumo: menu.resumo,
        foto_capa: menu.foto_capa,
        cartao: menu.cartao,
        secoes: menu.secoes,
        outros: menu.outros || [],
        status: menu.status || 'publicado',
        ordem: menu.ordem,
        updated_at: new Date().toISOString()
      })
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Erro ao salvar cardápio');
    }
    return await res.json();
  },

  async uploadPhoto(file) {
    const ext = file.name.split('.').pop();
    const cleanName = `menu-${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
    const res = await fetch(`${SUPABASE_URL}/storage/v1/object/dfaria-cardapios/${cleanName}`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${state.token}`,
        'Content-Type': file.type
      },
      body: file
    });
    if (!res.ok) throw new Error('Falha no upload da foto');
    return `${SUPABASE_URL}/storage/v1/object/public/dfaria-cardapios/${cleanName}`;
  }
};

// Parser inteligente: "Colar Cardápio Inteiro"
function parsePasteText(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  let nome = '';
  let categoria = 'almocos-e-jantares';
  let resumo = '';
  let secoes = [];
  let currentSection = null;

  for (const line of lines) {
    if (line.startsWith('# ')) {
      nome = line.replace(/^#\s*/, '').trim();
    } else if (line.toLowerCase().startsWith('categoria:')) {
      const catText = line.split(':')[1].trim().toLowerCase();
      if (catText.includes('churrasco') || catText.includes('fogo') || catText.includes('massa')) {
        categoria = 'experiencias-gastronomicas';
      } else if (catText.includes('café') || catText.includes('cafe') || catText.includes('brunch')) {
        categoria = 'cafes-e-brunches';
      } else if (catText.includes('debutante') || catText.includes('celebra')) {
        categoria = 'celebracoes';
      } else {
        categoria = 'almocos-e-jantares';
      }
    } else if (line.toLowerCase().startsWith('descrição:') || line.toLowerCase().startsWith('resumo:')) {
      resumo = line.substring(line.indexOf(':') + 1).trim();
    } else if (line.startsWith('## ')) {
      const secTitle = line.replace(/^##\s*/, '').trim();
      currentSection = { titulo: secTitle, itens: [] };
      secoes.push(currentSection);
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const item = line.replace(/^[-*]\s*/, '').trim();
      if (currentSection) {
        currentSection.itens.push(item);
      } else {
        currentSection = { titulo: 'Pratos Principais', itens: [item] };
        secoes.push(currentSection);
      }
    }
  }

  return { nome, categoria, resumo, secoes };
}

// Renderizador principal da interface
function render() {
  const app = document.getElementById('app');
  if (!app) return;

  if (!state.user) {
    app.innerHTML = renderLogin();
    attachLoginEvents();
  } else {
    app.innerHTML = renderDashboard();
    attachDashboardEvents();
  }

  // Atualizar ícones do Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Tela de Login
function renderLogin() {
  return `
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="w-full max-w-md bg-white rounded-3xl p-8 border border-[#C5A880]/30 shadow-xl space-y-6">
        <div class="text-center space-y-2">
          <div class="inline-flex p-3 rounded-2xl bg-dfgreen text-dfgold mb-2 shadow-sm">
            <i data-lucide="utensils-crossed" class="w-8 h-8"></i>
          </div>
          <h1 class="font-display text-2xl font-bold text-dfgreen">Painel do Chef</h1>
          <p class="text-xs text-stone-500">D'Faria Gastronomia & Eventos — Gestão de Cardápios</p>
        </div>

        ${state.feedback ? `
          <div class="p-3.5 rounded-xl text-xs font-semibold ${state.feedback.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}">
            ${state.feedback.text}
          </div>
        ` : ''}

        <form id="login-form" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1.5">E-mail do Chef:</label>
            <input type="email" id="login-email" required placeholder="contato@dfariagastronomia.com.br"
              class="w-full py-2.5 px-3.5 rounded-xl border border-stone-200 text-sm font-medium focus:ring-2 focus:ring-dfgreen outline-none" />
          </div>

          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1.5">Senha de Acesso:</label>
            <input type="password" id="login-password" required placeholder="••••••••"
              class="w-full py-2.5 px-3.5 rounded-xl border border-stone-200 text-sm font-medium focus:ring-2 focus:ring-dfgreen outline-none" />
          </div>

          <button type="submit" ${state.loading ? 'disabled' : ''}
            class="w-full py-3 bg-dfgreen hover:bg-dfgreendeep text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
            ${state.loading ? '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Entrando...' : '<i data-lucide="log-in" class="w-4 h-4 text-dfgold"></i> Entrar no Painel'}
          </button>
        </form>

        <div class="text-center">
          <a href="/" class="text-xs text-stone-400 hover:text-dfgreen underline">← Voltar para o site oficial</a>
        </div>
      </div>
    </div>
  `;
}

// Tela Principal (Dashboard e Editor)
function renderDashboard() {
  const m = state.selectedMenu;

  return `
    <!-- Topo / Barra de Navegação -->
    <header class="bg-dfgreen text-white border-b border-dfgold/30 sticky top-0 z-30 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="p-2 rounded-xl bg-white/10 text-dfgold">
            <i data-lucide="chef-hat" class="w-5 h-5"></i>
          </div>
          <div>
            <h1 class="font-display font-bold text-base leading-tight">Painel do Chef</h1>
            <p class="text-[10px] text-dfgold uppercase tracking-wider font-semibold">D'Faria Gastronomia Oficial</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <a href="/cardapios" target="_blank" class="hidden sm:inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors">
            <i data-lucide="external-link" class="w-3.5 h-3.5 text-dfgold"></i>
            <span>Ver no Ar</span>
          </a>

          <button id="btn-logout" class="p-2 rounded-lg bg-white/10 hover:bg-red-500/20 text-white/80 hover:text-red-300 transition-colors" title="Sair do Painel">
            <i data-lucide="log-out" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Feedback Toast -->
    ${state.feedback ? `
      <div class="fixed bottom-6 right-6 z-50 p-4 rounded-2xl shadow-xl max-w-md flex items-center gap-3 text-sm font-bold ${state.feedback.type === 'error' ? 'bg-red-600 text-white' : 'bg-dfgreen text-white border border-dfgold'} animate-bounce">
        <i data-lucide="${state.feedback.type === 'error' ? 'alert-triangle' : 'check-circle'}" class="w-5 h-5 text-dfgold"></i>
        <span>${state.feedback.text}</span>
      </div>
    ` : ''}

    <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Coluna da Esquerda: Lista de Cardápios (17 itens) -->
      <aside class="lg:col-span-4 space-y-4">
        <div class="bg-white rounded-2xl p-4 border border-[#C5A880]/30 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <h2 class="font-display font-bold text-sm text-dfgreen flex items-center gap-2">
              <i data-lucide="book-open" class="w-4 h-4 text-dfgold"></i>
              <span>Cardápios Ativos (${state.menus.length})</span>
            </h2>
          </div>

          <div class="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1">
            ${state.menus.map((menu, idx) => `
              <button data-slug="${menu.slug}" class="btn-select-menu w-full text-left p-3 rounded-xl transition-all border text-xs flex items-start gap-3 ${state.selectedMenu?.slug === menu.slug ? 'bg-[#FDFBF7] border-dfgreen shadow-sm ring-1 ring-dfgreen' : 'bg-white hover:bg-stone-50 border-stone-200'}">
                <span class="font-bold text-dfgold mt-0.5 text-[11px]">${String(idx + 1).padStart(2, '0')}.</span>
                <div class="flex-1 min-w-0">
                  <p class="font-bold text-dfgreen truncate">${menu.nome}</p>
                  <p class="text-[10px] text-stone-400 mt-0.5 capitalize">${menu.categoria_id.replace(/-/g, ' ')}</p>
                </div>
                <span class="text-[9px] px-2 py-0.5 rounded-full font-bold uppercase ${menu.status === 'publicado' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                  ${menu.status}
                </span>
              </button>
            `).join('')}
          </div>
        </div>
      </aside>

      <!-- Coluna da Direita: Editor Completo do Cardápio Selecionado -->
      <section class="lg:col-span-8">
        ${!m ? `
          <div class="h-full bg-white rounded-2xl p-12 border border-[#C5A880]/30 shadow-sm flex flex-col items-center justify-center text-center space-y-3">
            <div class="p-4 rounded-2xl bg-dfsand text-dfgold">
              <i data-lucide="mouse-pointer-click" class="w-8 h-8"></i>
            </div>
            <h3 class="font-display text-lg font-bold text-dfgreen">Selecione um Cardápio para Editar</h3>
            <p class="text-xs text-stone-500 max-w-sm">Escolha qualquer um dos 17 cardápios na lista ao lado para alterar textos, fotos, pratos ou usar o modo "Colar Cardápio".</p>
          </div>
        ` : `
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#C5A880]/30 shadow-sm space-y-6">
            
            <!-- Cabeçalho do Cardápio & Ações -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span class="text-[10px] font-bold text-dfgold uppercase tracking-wider">${m.categoria_id.replace(/-/g, ' ')}</span>
                <h2 class="font-display text-xl sm:text-2xl font-bold text-dfgreen">${m.nome}</h2>
                <p class="text-xs text-stone-400 font-mono mt-0.5">/cardapios/${m.slug}</p>
              </div>

              <div class="flex items-center gap-2">
                <a href="/cardapios/${m.slug}" target="_blank" class="py-2 px-3.5 bg-dfsand hover:bg-[#EAE4D9] text-dfgreen rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5">
                  <i data-lucide="eye" class="w-3.5 h-3.5 text-dfgold"></i>
                  <span>Ver Página</span>
                </a>
                <button id="btn-save-menu" ${state.loading ? 'disabled' : ''} class="py-2.5 px-5 bg-dfgreen hover:bg-dfgreendeep text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5">
                  ${state.loading ? '<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Salvando...' : '<i data-lucide="save" class="w-3.5 h-3.5 text-dfgold"></i> Salvar Alterações'}
                </button>
              </div>
            </div>

            <!-- Abas do Editor -->
            <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
              <button data-tab="geral" class="tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'geral' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
                Informações & Foto
              </button>
              <button data-tab="secoes" class="tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'secoes' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
                Seções de Pratos (${m.secoes?.length || 0})
              </button>
              <button data-tab="colar" class="tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'colar' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
                Colar Cardápio Inteiro (Ctrl+V)
              </button>
            </div>

            <!-- Conteúdo da Aba Ativa -->
            ${state.activeTab === 'geral' ? renderTabGeral(m) : ''}
            ${state.activeTab === 'secoes' ? renderTabSecoes(m) : ''}
            ${state.activeTab === 'colar' ? renderTabColar(m) : ''}

          </div>
        `}
      </section>

    </main>
  `;
}

// Aba 1: Informações Gerais & Foto
function renderTabGeral(m) {
  return `
    <div class="space-y-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">Nome do Cardápio:</label>
          <input type="text" id="edit-nome" value="${m.nome || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 font-bold text-sm text-dfgreen focus:ring-2 focus:ring-dfgreen outline-none" />
        </div>

        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">Categoria:</label>
          <select id="edit-categoria" class="w-full py-2 px-3 rounded-xl border border-stone-300 font-bold text-sm text-dfgreen focus:ring-2 focus:ring-dfgreen outline-none">
            ${state.categories.map(cat => `
              <option value="${cat.id}" ${m.categoria_id === cat.id ? 'selected' : ''}>${cat.titulo}</option>
            `).join('')}
          </select>
        </div>
      </div>

      <div>
        <label class="block text-xs font-bold text-stone-700 mb-1">Resumo Curto (Apresentação):</label>
        <textarea id="edit-resumo" rows="2" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none">${m.resumo || ''}</textarea>
      </div>

      <!-- Upload de Foto de Capa -->
      <div class="p-5 rounded-2xl bg-dfsand/60 border border-stone-200 space-y-3">
        <label class="block text-xs font-bold text-dfgreen">Foto de Capa do Cardápio:</label>
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <div class="w-32 h-24 rounded-xl overflow-hidden bg-stone-200 border border-stone-300 relative shrink-0">
            <img id="preview-cover" src="${m.foto_capa?.src || '/og-dfaria.jpg'}" alt="Capa" class="w-full h-full object-cover" />
          </div>
          <div class="space-y-2 flex-1">
            <input type="file" id="file-cover" accept="image/*" class="text-xs text-stone-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-dfgreen file:text-white hover:file:bg-dfgreendeep cursor-pointer" />
            <p class="text-[10px] text-stone-400">Você pode tirar a foto direto do celular ou escolher uma imagem do seu computador.</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">Título de SEO (Google Title):</label>
          <input type="text" id="edit-title" value="${m.title || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none" />
        </div>
        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">Descrição de SEO (Google Description):</label>
          <input type="text" id="edit-description" value="${m.description || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none" />
        </div>
      </div>
    </div>
  `;
}

// Aba 2: Seções e Itens
function renderTabSecoes(m) {
  const secoes = m.secoes || [];

  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between pb-2 border-b border-stone-100">
        <p class="text-xs text-stone-500">Adicione, exclua ou altere os pratos de cada seção.</p>
        <button id="btn-add-section" class="py-1.5 px-3 bg-dfgreen hover:bg-dfgreendeep text-white rounded-lg text-xs font-bold flex items-center gap-1">
          <i data-lucide="plus" class="w-3.5 h-3.5 text-dfgold"></i>
          <span>Nova Seção</span>
        </button>
      </div>

      <div class="space-y-4" id="sections-container">
        ${secoes.map((sec, sIdx) => `
          <div class="p-4 rounded-2xl bg-dfsand/50 border border-stone-200 space-y-3">
            <div class="flex items-center justify-between gap-3">
              <input type="text" value="${sec.titulo || ''}" data-sidx="${sIdx}" class="input-sec-title font-bold text-sm text-dfgreen bg-white py-1.5 px-3 rounded-lg border border-stone-300 flex-1" placeholder="Título da Seção (ex: Entradas)" />
              <button data-sidx="${sIdx}" class="btn-del-sec text-red-500 hover:text-red-700 p-1.5" title="Remover Seção">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>

            <div class="space-y-2">
              <label class="block text-[10px] font-bold text-stone-500 uppercase">Itens da Seção (um por linha):</label>
              <textarea data-sidx="${sIdx}" rows="4" class="input-sec-items w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none bg-white">${(sec.itens || []).join('\n')}</textarea>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Aba 3: Modo "Colar Cardápio Inteiro"
function renderTabColar(m) {
  return `
    <div class="space-y-4">
      <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1">
        <p class="font-bold flex items-center gap-1.5">
          <i data-lucide="sparkles" class="w-4 h-4 text-amber-600"></i>
          <span>Modo Inteligente: Copiar & Colar</span>
        </p>
        <p class="text-[11px] text-amber-800">
          Você pode colar o texto completo de um cardápio vindo do Word ou WhatsApp. O sistema reconhece títulos com <b>#</b> ou <b>##</b> e itens com <b>-</b>.
        </p>
      </div>

      <div>
        <label class="block text-xs font-bold text-stone-700 mb-1">Cole o texto do cardápio aqui:</label>
        <textarea id="paste-input" rows="12" placeholder="# Nome do Cardápio\nCategoria: Almoços e Jantares\nResumo: Texto curto...\n\n## Entradas\n- Coxinha\n- Bolinha de queijo\n\n## Pratos Principais\n- Filé mignon ao molho madeira\n- Arroz com brócolis" class="w-full p-4 rounded-2xl border border-stone-300 text-xs font-mono text-stone-800 focus:ring-2 focus:ring-dfgreen outline-none bg-stone-50"></textarea>
      </div>

      <div class="flex items-center justify-between">
        <button id="btn-copy-template" class="py-2 px-3.5 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-xl text-xs font-bold flex items-center gap-1.5">
          <i data-lucide="copy" class="w-3.5 h-3.5"></i>
          <span>Copiar Cardápio Atual em Texto</span>
        </button>

        <button id="btn-parse-paste" class="py-2.5 px-6 bg-dfgreen hover:bg-dfgreendeep text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md">
          <i data-lucide="sparkles" class="w-3.5 h-3.5 text-dfgold"></i>
          <span>Entender & Aplicar ao Cardápio</span>
        </button>
      </div>
    </div>
  `;
}

// Eventos de Login
function attachLoginEvents() {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    state.loading = true;
    state.feedback = null;
    render();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
      const auth = await api.login(email, password);
      state.token = auth.access_token;
      state.refreshToken = auth.refresh_token;
      state.user = auth.user;
      localStorage.setItem('df_chef_token', state.token);
      localStorage.setItem('df_chef_refresh', state.refreshToken);
      await loadInitialData();
    } catch (err) {
      state.feedback = { type: 'error', text: err.message };
    } finally {
      state.loading = false;
      render();
    }
  });
}

// Eventos do Dashboard
function attachDashboardEvents() {
  // Logout
  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('df_chef_token');
      localStorage.removeItem('df_chef_refresh');
      state.token = null;
      state.user = null;
      state.selectedMenu = null;
      render();
    });
  }

  // Seleção de cardápio
  document.querySelectorAll('.btn-select-menu').forEach(btn => {
    btn.addEventListener('click', () => {
      const slug = btn.getAttribute('data-slug');
      state.selectedMenu = state.menus.find(m => m.slug === slug);
      state.activeTab = 'geral';
      render();
    });
  });

  // Troca de abas
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.getAttribute('data-tab');
      render();
    });
  });

  // Salvar Cardápio
  const btnSave = document.getElementById('btn-save-menu');
  if (btnSave && state.selectedMenu) {
    btnSave.addEventListener('click', async () => {
      syncFormDataToState();
      state.loading = true;
      render();

      try {
        await api.saveMenu(state.selectedMenu);
        state.feedback = { type: 'success', text: 'Cardápio salvo com sucesso no banco de dados!' };
        // Recarregar lista atualizada
        state.menus = await api.getMenus();
        state.selectedMenu = state.menus.find(m => m.slug === state.selectedMenu.slug);
      } catch (err) {
        state.feedback = { type: 'error', text: err.message };
      } finally {
        state.loading = false;
        render();
        setTimeout(() => { state.feedback = null; render(); }, 4000);
      }
    });
  }

  // Upload de Foto de Capa
  const fileCover = document.getElementById('file-cover');
  if (fileCover && state.selectedMenu) {
    fileCover.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      state.loading = true;
      state.feedback = { type: 'success', text: 'Enviando foto para o servidor...' };
      render();

      try {
        const publicUrl = await api.uploadPhoto(file);
        state.selectedMenu.foto_capa = {
          src: publicUrl,
          alt: `Foto do cardápio ${state.selectedMenu.nome}`,
          largura: 1280,
          altura: 960
        };
        state.selectedMenu.cartao.imagem = state.selectedMenu.foto_capa;
        state.feedback = { type: 'success', text: 'Foto enviada com sucesso!' };
      } catch (err) {
        state.feedback = { type: 'error', text: err.message };
      } finally {
        state.loading = false;
        render();
        setTimeout(() => { state.feedback = null; render(); }, 3500);
      }
    });
  }

  // Seções: Adicionar Nova Seção
  const btnAddSec = document.getElementById('btn-add-section');
  if (btnAddSec && state.selectedMenu) {
    btnAddSec.addEventListener('click', () => {
      if (!state.selectedMenu.secoes) state.selectedMenu.secoes = [];
      state.selectedMenu.secoes.push({ titulo: 'Nova Seção', itens: ['Novo Prato'] });
      render();
    });
  }

  // Seções: Excluir Seção
  document.querySelectorAll('.btn-del-sec').forEach(btn => {
    btn.addEventListener('click', () => {
      const sIdx = parseInt(btn.getAttribute('data-sidx'), 10);
      state.selectedMenu.secoes.splice(sIdx, 1);
      render();
    });
  });

  // Modo Colar: Copiar template do cardápio atual
  const btnCopyTemplate = document.getElementById('btn-copy-template');
  if (btnCopyTemplate && state.selectedMenu) {
    btnCopyTemplate.addEventListener('click', () => {
      const m = state.selectedMenu;
      let text = `# ${m.nome}\nCategoria: ${m.categoria_id}\nResumo: ${m.resumo}\n\n`;
      (m.secoes || []).forEach(sec => {
        text += `## ${sec.titulo}\n`;
        (sec.itens || []).forEach(it => {
          text += `- ${it}\n`;
        });
        text += '\n';
      });
      const input = document.getElementById('paste-input');
      if (input) input.value = text;
      navigator.clipboard.writeText(text);
      state.feedback = { type: 'success', text: 'Cardápio copiado para a Área de Transferência!' };
      render();
      setTimeout(() => { state.feedback = null; render(); }, 3000);
    });
  }

  // Modo Colar: Entender & Aplicar
  const btnParse = document.getElementById('btn-parse-paste');
  if (btnParse && state.selectedMenu) {
    btnParse.addEventListener('click', () => {
      const text = document.getElementById('paste-input').value;
      if (!text.trim()) return;

      const parsed = parsePasteText(text);
      if (parsed.nome) state.selectedMenu.nome = parsed.nome;
      if (parsed.resumo) state.selectedMenu.resumo = parsed.resumo;
      if (parsed.secoes.length > 0) state.selectedMenu.secoes = parsed.secoes;

      state.activeTab = 'geral';
      state.feedback = { type: 'success', text: 'Texto compreendido e aplicado com sucesso ao cardápio!' };
      render();
      setTimeout(() => { state.feedback = null; render(); }, 3500);
    });
  }
}

// Sincroniza campos do formulário para o state antes de salvar
function syncFormDataToState() {
  const m = state.selectedMenu;
  if (!m) return;

  const nomeInput = document.getElementById('edit-nome');
  if (nomeInput) m.nome = nomeInput.value;

  const catSelect = document.getElementById('edit-categoria');
  if (catSelect) m.categoria_id = catSelect.value;

  const resumoInput = document.getElementById('edit-resumo');
  if (resumoInput) m.resumo = resumoInput.value;

  const titleInput = document.getElementById('edit-title');
  if (titleInput) m.title = titleInput.value;

  const descInput = document.getElementById('edit-description');
  if (descInput) m.description = descInput.value;

  // Sincroniza seções
  document.querySelectorAll('.input-sec-title').forEach(input => {
    const sIdx = parseInt(input.getAttribute('data-sidx'), 10);
    if (m.secoes && m.secoes[sIdx]) {
      m.secoes[sIdx].titulo = input.value;
    }
  });

  document.querySelectorAll('.input-sec-items').forEach(textarea => {
    const sIdx = parseInt(textarea.getAttribute('data-sidx'), 10);
    if (m.secoes && m.secoes[sIdx]) {
      m.secoes[sIdx].itens = textarea.value.split('\n').map(i => i.trim()).filter(Boolean);
    }
  });
}

// Carrega dados iniciais do Supabase
async function loadInitialData() {
  const [categories, menus, pricing] = await Promise.all([
    api.getCategories(),
    api.getMenus(),
    api.getPricingConfig()
  ]);
  state.categories = categories;
  state.menus = menus;
  state.pricingConfig = pricing;
  if (state.menus.length > 0 && !state.selectedMenu) {
    state.selectedMenu = state.menus[0];
  }
}

// Inicialização
async function init() {
  if (state.token) {
    try {
      state.user = await api.getUser();
      if (state.user) {
        await loadInitialData();
      } else {
        state.token = null;
        localStorage.removeItem('df_chef_token');
      }
    } catch (e) {
      state.token = null;
      localStorage.removeItem('df_chef_token');
    }
  }
  render();
}

init();
