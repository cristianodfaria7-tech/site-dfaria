/* D'Faria — script de TODAS as páginas (versão s33; o site não usa mais React).
   Google Analytics (page_view e clique_whatsapp/clique_telefone), menu do celular,
   janela "Solicite seu orçamento" e formulário da página /orcamento (abrem o WhatsApp),
   ampliar foto (anterior/próxima, setas do teclado), filtros da galeria,
   animações de entrada iguais às do site. */
(function () {
  'use strict';
  var GA = 'G-682595J4L0';
  var ZAP = '5515996834734';
  var BTN = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ';
  var BTN_PRIMARIO = BTN + 'bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2';
  var ICONE_X = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
  var ICONE_MENU = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>';

  /* ---------- Google Analytics (igual ao do React) ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  if (!document.getElementById('dfaria-google-analytics')) {
    var s = document.createElement('script');
    s.id = 'dfaria-google-analytics'; s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA;
    document.head.appendChild(s);
    gtag('js', new Date());
  }
  var caminho = location.pathname;
  try { caminho = decodeURIComponent(caminho); } catch (e) {}
  gtag('config', GA, { page_path: caminho });
  document.addEventListener('click', function (ev) {
    var t = ev.target;
    if (!(t instanceof Element)) return;
    var a = t.closest('a[href]');
    var href = a && a.getAttribute('href');
    if (!href) return;
    var nome = /wa\.me|whatsapp/i.test(href) ? 'clique_whatsapp' : href.indexOf('tel:') === 0 ? 'clique_telefone' : null;
    if (nome) gtag('event', nome, { link_url: href });
  }, true);

  /* ---------- menu do celular ---------- */
  var header = document.querySelector('header.site-header');
  var botaoMenu = header && header.querySelector('.site-menu-button');
  function fecharMenu() {
    var nav = document.getElementById('menu-mobile');
    if (nav) nav.remove();
    if (!botaoMenu) return;
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
    botaoMenu.innerHTML = ICONE_MENU;
  }
  function abrirMenu() {
    var nav = document.createElement('nav');
    nav.id = 'menu-mobile'; nav.className = 'site-mobile-nav';
    nav.setAttribute('aria-label', 'Navegação no celular');
    header.querySelectorAll('.site-desktop-nav > a').forEach(function (a) {
      var b = document.createElement('a');
      if (a.classList.contains('active')) { b.className = 'active'; }
      b.setAttribute('href', a.getAttribute('href'));
      if (a.hasAttribute('data-status')) b.setAttribute('data-status', a.getAttribute('data-status'));
      if (a.hasAttribute('aria-current')) b.setAttribute('aria-current', a.getAttribute('aria-current'));
      b.textContent = a.textContent;
      nav.appendChild(b);
    });
    var q = document.createElement('button');
    q.className = BTN_PRIMARIO; q.textContent = 'Solicitar orçamento';
    nav.appendChild(q);
    header.appendChild(nav);
    botaoMenu.setAttribute('aria-expanded', 'true');
    botaoMenu.setAttribute('aria-label', 'Fechar menu');
    botaoMenu.innerHTML = ICONE_X;
  }
  if (botaoMenu) botaoMenu.addEventListener('click', function () {
    if (document.getElementById('menu-mobile')) fecharMenu(); else abrirMenu();
  });

  /* ---------- janela de orçamento ---------- */
  var janela = null, quemAbriu = null;
  var FORM =
    '<form class="quote-form" novalidate=""><input autocomplete="off" tabindex="-1" aria-hidden="true" class="hidden" name="website">' +
    '<label class="quote-wide">Nome completo<input autocomplete="name" required="" minlength="2" maxlength="120" name="nome"></label>' +
    '<label>WhatsApp<input autocomplete="tel" placeholder="(15) 99999-9999" maxlength="30" type="tel" name="whatsapp"></label>' +
    '<label>E-mail<input autocomplete="email" maxlength="255" type="email" name="email"></label>' +
    '<p class="quote-wide" style="margin: 0px; font-size: 0.85rem; opacity: 0.8;">Informe WhatsApp ou e-mail (pelo menos um).</p>' +
    '<label>Data do evento<input required="" type="date" name="data_evento"></label>' +
    '<label>Número de convidados<input min="1" max="999999" required="" type="number" name="convidados"></label>' +
    '<label>Tipo de evento<input placeholder="Casamento, corporativo..." required="" maxlength="80" name="tipo_evento"></label>' +
    '<label>Cidade e local do evento<input required="" minlength="2" maxlength="200" name="local"></label>' +
    '<label class="quote-wide">Serviços de interesse<input placeholder="Buffet, churrasco, locação..." maxlength="200" name="servicos"></label>' +
    '<label class="quote-wide">Mensagem adicional<textarea name="mensagem" rows="3" maxlength="2000"></textarea></label>' +
    '<button class="' + BTN_PRIMARIO + ' quote-submit quote-wide" type="submit">Enviar pedido pelo WhatsApp</button></form>';

  function focaveis() {
    return Array.prototype.filter.call(
      janela.dialogo.querySelectorAll('a[href], button, input:not([tabindex="-1"]), textarea, select'),
      function (e) { return !e.disabled && e.offsetParent !== null; });
  }
  function teclas(ev) {
    if (!janela) return;
    if (ev.key === 'Escape') { ev.preventDefault(); fecharJanela(); return; }
    if (ev.key !== 'Tab') return;
    var f = focaveis(); if (!f.length) return;
    var i = f.indexOf(document.activeElement);
    if (ev.shiftKey && (i <= 0)) { ev.preventDefault(); f[f.length - 1].focus(); }
    else if (!ev.shiftKey && (i === -1 || i === f.length - 1)) { ev.preventDefault(); f[0].focus(); }
  }
  function abrirJanela(origem) {
    if (janela) return;
    quemAbriu = origem || document.activeElement;
    var fundo = document.createElement('div');
    fundo.className = 'df-dialog-overlay'; fundo.setAttribute('data-state', 'open');
    var d = document.createElement('div');
    d.setAttribute('role', 'dialog'); d.id = 'df-orcamento'; d.className = 'df-dialog-content';
    d.setAttribute('data-state', 'open'); d.tabIndex = -1;
    d.setAttribute('aria-labelledby', 'df-orcamento-titulo'); d.setAttribute('aria-describedby', 'df-orcamento-texto');
    d.innerHTML = '<h2 id="df-orcamento-titulo">Solicite seu orçamento</h2><p id="df-orcamento-texto">Conte a data, o local e o número de convidados.</p>' +
      '<button class="' + BTN + 'hover:bg-accent hover:text-accent-foreground h-9 w-9 df-dialog-close" aria-label="Fechar orçamento" type="button">' + ICONE_X + '</button>' + FORM;
    document.body.appendChild(fundo); document.body.appendChild(d);
    janela = { fundo: fundo, dialogo: d, overflow: document.body.style.overflow };
    document.body.style.overflow = 'hidden';
    fundo.addEventListener('click', fecharJanela);
    d.querySelector('.df-dialog-close').addEventListener('click', fecharJanela);
    d.querySelector('form').addEventListener('submit', enviar);
    document.addEventListener('keydown', teclas, true);
    var f = focaveis(); (f[0] || d).focus();
  }
  function fecharJanela() {
    if (!janela) return;
    janela.fundo.remove(); janela.dialogo.remove();
    document.body.style.overflow = janela.overflow;
    document.removeEventListener('keydown', teclas, true);
    janela = null;
    if (quemAbriu && quemAbriu.focus) quemAbriu.focus();
  }
  // qualquer botão de orçamento abre a janela (cabeçalho, menu do celular e chamadas da página)
  document.addEventListener('click', function (ev) {
    var b = ev.target instanceof Element && ev.target.closest('button');
    if (!b || b.closest('.df-dialog-content') || b.classList.contains('site-menu-button')) return;
    if (/orcamento|orçamento/i.test(b.textContent + ' ' + b.className)) abrirJanela(b);
  });

  /* ---------- formulário (mesmas regras e mensagens do site) ---------- */
  var EMAIL = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  function validar(fd) {
    var v = function (k) { var x = fd.get(k); return x == null ? '' : String(x); };
    var d = {
      nome: v('nome').trim(), email: v('email').trim(), whatsapp: v('whatsapp').trim(),
      data_evento: v('data_evento'), convidados: Number(v('convidados')), local: v('local').trim(),
      tipo_evento: v('tipo_evento').trim(), mensagem: v('mensagem').trim(), servicos: v('servicos').trim(), website: v('website')
    };
    if (d.nome.length < 2) return 'Informe seu nome completo.';
    if (d.nome.length > 120) return 'Informe seu nome completo.';
    if (d.email.length > 255 || (d.email !== '' && !EMAIL.test(d.email))) return 'Informe um e-mail válido.';
    if (d.whatsapp.length > 30 || (d.whatsapp !== '' && d.whatsapp.replace(/\D/g, '').length < 10)) return 'Informe um WhatsApp com DDD.';
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d.data_evento)) return 'Informe a data do evento.';
    if (!Number.isInteger(d.convidados) || d.convidados < 1 || d.convidados > 999999) return 'Informe o número de convidados.';
    if (d.local.length < 2 || d.local.length > 200) return 'Informe a cidade e o local do evento.';
    if (d.tipo_evento.length < 2 || d.tipo_evento.length > 80) return 'Informe o tipo de evento.';
    if (d.mensagem.length > 2000 || d.servicos.length > 200 || d.website.length > 0) return 'Confira os dados informados.';
    if (d.email === '' && d.whatsapp === '') return 'Informe seu WhatsApp ou seu e-mail.';
    return d;
  }
  function dataBR(s) { var p = s.split('-'); return p[2] + '/' + p[1] + '/' + p[0]; }
  function linkZap(d) {
    var txt = ['Olá! Gostaria de solicitar um orçamento.', '', 'Nome: ' + d.nome,
      'WhatsApp: ' + (d.whatsapp || 'não informado'), 'E-mail: ' + (d.email || 'não informado'),
      'Data do evento: ' + dataBR(d.data_evento), 'Tipo de evento: ' + d.tipo_evento,
      'Número de convidados: ' + d.convidados, 'Cidade e local: ' + d.local,
      'Serviços de interesse: ' + (d.servicos || 'não informado'), 'Mensagem adicional: ' + (d.mensagem || 'nenhuma')].join('\n');
    return 'https://wa.me/' + ZAP + '?text=' + encodeURIComponent(txt);
  }
  function enviar(ev) {
    ev.preventDefault();
    var form = ev.currentTarget;
    var velho = form.querySelector('.quote-error'); if (velho) velho.remove();
    var r = validar(new FormData(form));
    var botao = form.querySelector('.quote-submit');
    if (typeof r === 'string') {
      var p = document.createElement('p');
      p.setAttribute('role', 'alert'); p.className = 'quote-error quote-wide'; p.textContent = r;
      form.insertBefore(p, botao);
      return;
    }
    var url = linkZap(r);
    var dados = { nome: r.nome, email: r.email, whatsapp: r.whatsapp, data_evento: r.data_evento, convidados: r.convidados,
      local: r.local, tipo_evento: r.tipo_evento, mensagem: r.mensagem, servicos: r.servicos, website: r.website };
    try {
      fetch('/api/enviar-orcamento.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dados), keepalive: true })['catch'](function () {});
    } catch (e) {}
    var st = form.querySelector('p[role="status"]');
    if (!st) {
      st = document.createElement('p'); st.className = 'quote-wide'; st.setAttribute('role', 'status');
      st.appendChild(document.createTextNode('O WhatsApp não abriu? '));
      var a = document.createElement('a'); a.target = '_blank'; a.rel = 'noopener noreferrer'; a.style.textDecoration = 'underline';
      a.textContent = 'Clique aqui para abrir a conversa com sua mensagem';
      st.appendChild(a); st.appendChild(document.createTextNode('.'));
      form.appendChild(st);
    }
    st.querySelector('a').href = url;
    window.open(url, '_blank', 'noopener');
  }

  /* ---------- formulário fixo da página (ex.: /orcamento) ---------- */
  document.querySelectorAll('form.quote-form').forEach(function (f) {
    if (f.closest('.df-dialog-content')) return;
    f.addEventListener('submit', enviar);
  });

  /* ---------- galeria: filtros por categoria ---------- */
  var filtroAtual = 'Todos';
  var botoesFiltro = Array.prototype.slice.call(document.querySelectorAll('main button[aria-pressed]'));
  function aplicarFiltro(nome) {
    filtroAtual = nome;
    botoesFiltro.forEach(function (b) { b.setAttribute('aria-pressed', b.textContent.trim() === nome ? 'true' : 'false'); });
    document.querySelectorAll('main button[data-categoria]').forEach(function (b) {
      b.style.display = (nome === 'Todos' || b.getAttribute('data-categoria') === nome) ? '' : 'none';
    });
  }
  botoesFiltro.forEach(function (b) {
    b.addEventListener('click', function () { fecharFoto(); aplicarFiltro(b.textContent.trim()); });
  });

  /* ---------- ampliar foto ---------- */
  var ICONE_ESQ = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>';
  var ICONE_DIR = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>';
  var foto = null;
  function fotosVisiveis() {
    var r = [];
    document.querySelectorAll('.original-site button:not([aria-pressed])').forEach(function (b) {
      if (b.style.display === 'none' || /orcamento|orçamento/i.test(b.textContent + ' ' + b.className)) return;
      var im = b.querySelector('img');
      if (im && im.getAttribute('src')) r.push({ src: im.getAttribute('src'), alt: im.getAttribute('alt') || '' });
    });
    document.querySelectorAll('[data-lightbox-src]').forEach(function (d) {
      r.push({ src: d.getAttribute('data-lightbox-src'), alt: d.getAttribute('data-lightbox-caption') || '' });
    });
    return r;
  }
  function mostrarFoto(f) {
    foto.atual = f;
    var fig = foto.dialogo.querySelector('figure');
    fig.querySelector('img').src = f.src; fig.querySelector('img').alt = f.alt;
    fig.querySelector('figcaption').textContent = f.alt;
    foto.dialogo.querySelector('.sr-only').textContent = f.alt || 'Foto do evento';
  }
  function andarFoto(passo) {
    if (!foto) return;
    var l = fotosVisiveis(); if (!l.length) return;
    var i = -1;
    for (var k = 0; k < l.length; k++) if (l[k].src === foto.atual.src) { i = k; break; }
    mostrarFoto(l[(i + passo + l.length) % l.length]);
  }
  function teclasFoto(ev) {
    if (!foto) return;
    if (ev.key === 'Escape') { ev.preventDefault(); fecharFoto(); }
    else if (ev.key === 'ArrowLeft') andarFoto(-1);
    else if (ev.key === 'ArrowRight') andarFoto(1);
  }
  function abrirFoto(f, origem) {
    if (foto) { mostrarFoto(f); return; }
    var fundo = document.createElement('div');
    fundo.className = 'df-dialog-overlay'; fundo.setAttribute('data-state', 'open');
    var d = document.createElement('div');
    d.setAttribute('role', 'dialog'); d.className = 'df-photo-dialog'; d.setAttribute('data-state', 'open'); d.tabIndex = -1;
    d.innerHTML = '<h2 class="sr-only"></h2><p class="sr-only">Fotografia de um evento D’Faria.</p>' +
      '<figure><img src="" alt=""><figcaption></figcaption></figure>' +
      '<button class="' + BTN + 'hover:bg-accent hover:text-accent-foreground h-9 w-9 df-photo-prev" aria-label="Foto anterior" type="button">' + ICONE_ESQ + '</button>' +
      '<button class="' + BTN + 'hover:bg-accent hover:text-accent-foreground h-9 w-9 df-photo-next" aria-label="Próxima foto" type="button">' + ICONE_DIR + '</button>' +
      '<button class="' + BTN + 'hover:bg-accent hover:text-accent-foreground h-9 w-9 df-dialog-close" aria-label="Fechar foto" type="button">' + ICONE_X + '</button>';
    document.body.appendChild(fundo); document.body.appendChild(d);
    foto = { fundo: fundo, dialogo: d, origem: origem, overflow: document.body.style.overflow, atual: f };
    document.body.style.overflow = 'hidden';
    mostrarFoto(f);
    fundo.addEventListener('click', fecharFoto);
    d.querySelector('.df-photo-prev').addEventListener('click', function () { andarFoto(-1); });
    d.querySelector('.df-photo-next').addEventListener('click', function () { andarFoto(1); });
    d.querySelector('.df-dialog-close').addEventListener('click', fecharFoto);
    document.addEventListener('keydown', teclasFoto, true);
    d.focus();
  }
  function fecharFoto() {
    if (!foto) return;
    foto.fundo.remove(); foto.dialogo.remove();
    document.body.style.overflow = foto.overflow;
    document.removeEventListener('keydown', teclasFoto, true);
    var o = foto.origem; foto = null;
    if (o && o.focus) o.focus();
  }
  document.addEventListener('click', function (ev) {
    if (!(ev.target instanceof Element) || ev.target.closest('.df-photo-dialog, .df-dialog-content')) return;
    var b = ev.target.closest('.original-site button:not([aria-pressed])');
    if (b && !/orcamento|orçamento/i.test(b.textContent + ' ' + b.className)) {
      var im = b.querySelector('img');
      if (im && im.getAttribute('src')) { abrirFoto({ src: im.getAttribute('src'), alt: im.getAttribute('alt') || '' }, b); return; }
    }
    var q = ev.target.closest('[data-lightbox-src]');
    if (q) abrirFoto({ src: q.getAttribute('data-lightbox-src'), alt: q.getAttribute('data-lightbox-caption') || '' }, q);
  });

  /* ---------- animações de entrada (mesmas regras do site) ---------- */
  (function () {
    if (!document.querySelector('.original-site')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('df-in'); obs.unobserve(e.target); } });
    }, { rootMargin: '0px 0px 80px 0px', threshold: 0.01 });
    var obsLinha = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove('df-line-wait'); obsLinha.unobserve(e.target); } });
    }, { threshold: 0.01 });
    var sel = '.original-site main section:not(:first-child) h2, .original-site main section:not(:first-child) .grid > a, .original-site main section:not(:first-child) .grid > article, .original-site main section:not(:first-child) figure, .original-site main section:not(:first-child) .grid > button:has(img), .original-site .df-city-list > li, .original-site .df-trust-quote';
    var els; try { els = document.querySelectorAll(sel); } catch (e) { els = document.querySelectorAll(sel.replace(', .original-site main section:not(:first-child) .grid > button:has(img)', '')); }
    document.querySelectorAll('.original-site .df-city-list > li').forEach(function (e, i) { e.style.setProperty('--i', String(i)); });
    els.forEach(function (e) {
      if (e.classList.contains('df-in')) return;
      if (e.getBoundingClientRect().top > window.innerHeight) e.classList.add('df-reveal');
      obs.observe(e);
    });
    document.querySelectorAll('.original-site main section:not(:first-child) span.h-px.bg-gold').forEach(function (e) {
      if (e.getBoundingClientRect().top > window.innerHeight) e.classList.add('df-line-wait');
      obsLinha.observe(e);
    });
  })();

  /* ---------- Sincronização ao vivo com Supabase (Tempo Real) ---------- */
  var SUPABASE_URL = 'https://gcwxhawqvtqhpoohihjo.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_yeda5BcY2QZyBoVMi4r_0Q_Hbxc5Ex2';

  function sincAoVivo() {
    var path = location.pathname.replace(/\/$/, '');
    var matchCardapio = path.match(/^\/cardapios\/([a-z0-9-]+)$/);

    if (matchCardapio) {
      var slug = matchCardapio[1];
      fetch(SUPABASE_URL + '/rest/v1/site_menus?slug=eq.' + encodeURIComponent(slug) + '&status=eq.publicado&select=*', {
        headers: { 'apikey': SUPABASE_KEY }
      })
      .then(function (r) { return r.json(); })
      .then(function (dados) {
        if (!dados || !dados.length) return;
        var menu = dados[0];

        // 1. Título do cardápio
        var h1 = document.querySelector('h1.df-page-title');
        if (h1 && menu.nome) {
          var p = menu.nome.trim().split(/\s+/);
          var n = Math.max(1, p.length - Math.ceil(p.length / 3));
          var a = p.slice(0, n).join(' '), b = p.slice(n).join(' ');
          h1.innerHTML = a + (p.length > 1 ? ' ' : '') + '<span class="df-page-title-accent">' + b + '</span>';
        }

        // 2. Sobretítulo
        var sobre = document.querySelector('.df-unified-text p.text-green');
        if (sobre && menu.sobretitulo) sobre.textContent = menu.sobretitulo;

        // 3. Resumo
        var resumo = document.querySelector('.df-unified-text p.text-stone');
        if (resumo && menu.resumo) resumo.textContent = menu.resumo;

        // 4. Foto de Capa
        var img = document.querySelector('img.df-unified-backdrop');
        if (img && menu.foto_capa && menu.foto_capa.src) {
          img.src = menu.foto_capa.src;
          if (menu.foto_capa.alt) img.alt = menu.foto_capa.alt;
        }

        // 5. Seções e Pratos
        var grid = document.querySelector('section.bg-ivory div.grid.gap-8');
        if (grid && menu.secoes && Array.isArray(menu.secoes)) {
          var htmlSecoes = menu.secoes.map(function (sec, i) {
            var itensHtml = (sec.itens || []).map(function (it) {
              return '<li class="flex gap-3 text-[0.95rem] leading-relaxed text-stone text-pretty"><span aria-hidden="true" class="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold"></span>' + it + '</li>';
            }).join('');
            return '<div class="transition-all duration-700 ease-out translate-y-0 opacity-100"' + (i % 2 ? ' style="transition-delay:80ms"' : '') + '><div class="h-full rounded-3xl bg-sand/60 p-7 ring-1 ring-graphite/5 lg:p-8"><h2 class="font-display text-lg font-medium tracking-tight text-graphite">' + sec.titulo + '</h2><span aria-hidden="true" class="mt-3 block h-px w-12 bg-gold/70"></span><ul class="mt-5 space-y-3">' + itensHtml + '</ul></div></div>';
          }).join('');
          grid.innerHTML = htmlSecoes;
        }
      })
      ['catch'](function () {});
    }

    if (path === '/cardapios') {
      fetch(SUPABASE_URL + '/rest/v1/site_menus?status=eq.publicado&order=ordem.asc&select=*', {
        headers: { 'apikey': SUPABASE_KEY }
      })
      .then(function (r) { return r.json(); })
      .then(function (menus) {
        if (!menus || !menus.length) return;
        menus.forEach(function (m) {
          var link = document.querySelector('a[href="/cardapios/' + m.slug + '"]');
          if (!link) return;
          var h3 = link.querySelector('h3');
          if (h3 && m.cartao && m.cartao.titulo) h3.textContent = m.cartao.titulo;
          var p = link.querySelector('p');
          if (p && m.cartao && m.cartao.resumo) p.textContent = m.cartao.resumo;
          var im = link.querySelector('img');
          if (im && m.cartao && m.cartao.imagem && m.cartao.imagem.src) im.src = m.cartao.imagem.src;
        });
      })
      ['catch'](function () {});
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sincAoVivo);
  } else {
    sincAoVivo();
  }
})();
