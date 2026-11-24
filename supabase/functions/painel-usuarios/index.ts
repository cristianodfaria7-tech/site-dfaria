// Painel do Chef — Configurações > Usuários (só o DONO usa).
// Ações (POST JSON): {acao:'listar'} | {acao:'criar', email, nome, papel, senha?, convite?} |
//                    {acao:'papel', email, papel} | {acao:'excluir', email}
// Usa a chave secreta do Supabase (SUPABASE_SERVICE_ROLE_KEY), que existe só aqui no servidor.
import { createClient } from 'npm:@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const resposta = (corpo: unknown, status = 200) =>
  new Response(JSON.stringify(corpo), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });
const erro = (mensagem: string, status = 400) => resposta({ erro: mensagem }, status);
const PAPEIS = ['dono', 'editor'];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return erro('Use POST.', 405);

  const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  // 1) Quem está pedindo? Tem que estar logado e ser DONO.
  const jwt = (req.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
  const { data: quem } = await admin.auth.getUser(jwt);
  const eu = quem?.user;
  if (!eu?.email) return erro('Sessão expirada. Entre de novo no painel.', 401);

  const { data: lista, error: e1 } = await admin.from('painel_admins').select('email, nome, papel, criado_em');
  if (e1) return erro('Não consegui ler a lista de usuários: ' + e1.message, 500);
  const admins = lista ?? [];
  const meuEmail = eu.email.toLowerCase();
  const minhaLinha = admins.find((a) => a.email.toLowerCase() === meuEmail);
  if (minhaLinha?.papel !== 'dono') return erro('Só o Dono pode mexer em usuários.', 403);

  let corpo: Record<string, string | boolean> = {};
  try { corpo = await req.json(); } catch { return erro('Pedido inválido.'); }
  const acao = String(corpo.acao || '');
  const alvo = String(corpo.email || '').trim().toLowerCase();
  const donos = admins.filter((a) => a.papel === 'dono').map((a) => a.email.toLowerCase());

  async function registrar(oque: string, dados: unknown) {
    await admin.from('site_audit_logs').insert({ autor: eu!.email, acao: 'usuarios:' + oque, alvo_slug: alvo || null, dados_novos: dados });
  }
  async function acharUsuario(email: string) {
    for (let pagina = 1; pagina <= 20; pagina++) {
      const { data, error } = await admin.auth.admin.listUsers({ page: pagina, perPage: 200 });
      if (error) throw error;
      const u = data.users.find((x) => (x.email || '').toLowerCase() === email);
      if (u) return u;
      if (data.users.length < 200) return null;
    }
    return null;
  }

  try {
    if (acao === 'listar') {
      const { data, error } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
      if (error) throw error;
      const contas = new Map(data.users.map((u) => [(u.email || '').toLowerCase(), u]));
      const usuarios = admins.map((a) => {
        const u = contas.get(a.email.toLowerCase());
        return {
          email: a.email, nome: a.nome || '', papel: a.papel,
          temConta: !!u, confirmado: !!u?.email_confirmed_at, ultimoAcesso: u?.last_sign_in_at || null,
          souEu: a.email.toLowerCase() === meuEmail,
        };
      }).sort((x, y) => (x.papel === y.papel ? x.email.localeCompare(y.email) : x.papel === 'dono' ? -1 : 1));
      // contas que existem no Supabase mas NÃO têm acesso ao painel (para o dono saber)
      const semAcesso = data.users.filter((u) => u.email && !admins.some((a) => a.email.toLowerCase() === u.email!.toLowerCase()))
        .map((u) => ({ email: u.email, criadoEm: u.created_at }));
      return resposta({ usuarios, semAcesso });
    }

    if (acao === 'criar') {
      const nome = String(corpo.nome || '').trim().slice(0, 80);
      const papel = String(corpo.papel || 'editor');
      const senha = String(corpo.senha || '');
      const convite = corpo.convite === true;
      if (!EMAIL.test(alvo)) return erro('E-mail inválido.');
      if (!PAPEIS.includes(papel)) return erro('Papel inválido.');
      if (admins.some((a) => a.email.toLowerCase() === alvo)) return erro('Esse e-mail já tem acesso ao painel.');
      if (!convite && senha.length < 8) return erro('A senha provisória precisa ter pelo menos 8 caracteres.');

      let conta = await acharUsuario(alvo);
      if (!conta) {
        if (convite) {
          const { data, error } = await admin.auth.admin.inviteUserByEmail(alvo, { redirectTo: 'https://dfariagastronomia.com.br/painel' });
          if (error) throw error;
          conta = data.user;
        } else {
          const { data, error } = await admin.auth.admin.createUser({ email: alvo, password: senha, email_confirm: true });
          if (error) throw error;
          conta = data.user;
        }
      }
      const { error: e2 } = await admin.from('painel_admins').insert({ email: alvo, nome, papel });
      if (e2) throw e2;
      await registrar('criar', { email: alvo, nome, papel, convite });
      return resposta({ ok: true, mensagem: convite ? 'Convite enviado por e-mail.' : 'Usuário criado. Passe a senha provisória para a pessoa.' });
    }

    if (acao === 'papel') {
      const papel = String(corpo.papel || '');
      if (!PAPEIS.includes(papel)) return erro('Papel inválido.');
      if (!admins.some((a) => a.email.toLowerCase() === alvo)) return erro('Usuário não encontrado.');
      if (papel !== 'dono' && donos.includes(alvo) && donos.length <= 1) return erro('Precisa ficar pelo menos 1 Dono.');
      const { error } = await admin.from('painel_admins').update({ papel }).eq('email', admins.find((a) => a.email.toLowerCase() === alvo)!.email);
      if (error) throw error;
      await registrar('papel', { email: alvo, papel });
      return resposta({ ok: true, mensagem: 'Papel alterado.' });
    }

    if (acao === 'excluir') {
      if (alvo === meuEmail) return erro('Você não pode excluir a si mesmo.');
      const linha = admins.find((a) => a.email.toLowerCase() === alvo);
      if (!linha) return erro('Usuário não encontrado.');
      if (linha.papel === 'dono' && donos.length <= 1) return erro('Precisa ficar pelo menos 1 Dono.');
      const { error } = await admin.from('painel_admins').delete().eq('email', linha.email);
      if (error) throw error;
      const conta = await acharUsuario(alvo);
      if (conta) { const { error: e3 } = await admin.auth.admin.deleteUser(conta.id); if (e3) throw e3; }
      await registrar('excluir', { email: alvo });
      return resposta({ ok: true, mensagem: 'Usuário excluído. Ele não entra mais no painel.' });
    }

    return erro('Ação desconhecida.');
  } catch (e) {
    return erro('Não deu certo: ' + ((e as Error).message || String(e)), 500);
  }
});
