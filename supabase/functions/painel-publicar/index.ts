// Painel do Chef — botão "Publicar no site" (Dono e Editor).
// POST {acao:'publicar'} -> dispara o GitHub Actions "publicar-painel.yml" (gera o tema, trava de URLs, envia para a HostGator)
// POST {acao:'status', desde?: ISO} -> andamento da última publicação: fila | publicando | no_ar | erro
// O token do GitHub (GH_TOKEN) fica só aqui no servidor.
import { createClient } from 'npm:@supabase/supabase-js@2';

const REPO = 'cristianodfaria7-tech/site-dfaria';
const WORKFLOW = 'publicar-painel.yml';
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const resposta = (corpo: unknown, status = 200) =>
  new Response(JSON.stringify(corpo), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });
const erro = (mensagem: string, status = 400) => resposta({ erro: mensagem }, status);

function github(caminho: string, init: RequestInit = {}) {
  return fetch(`https://api.github.com/repos/${REPO}${caminho}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${(Deno.env.get('GH_TOKEN') || '').trim()}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'painel-do-chef',
      ...(init.headers || {}),
    },
  });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return erro('Use POST.', 405);
  if (!(Deno.env.get('GH_TOKEN') || '').trim()) return erro('Falta configurar o segredo GH_TOKEN no Supabase.', 500);

  const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const jwt = (req.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
  const { data: quem } = await admin.auth.getUser(jwt);
  const email = quem?.user?.email?.toLowerCase();
  if (!email) return erro('Sessão expirada. Entre de novo no painel.', 401);
  const { data: admins } = await admin.from('painel_admins').select('email, papel');
  if (!(admins ?? []).some((a) => a.email.toLowerCase() === email)) return erro('Sem permissão para publicar.', 403);

  let corpo: Record<string, string> = {};
  try { corpo = await req.json(); } catch { /* vazio */ }

  if (corpo.acao === 'publicar') {
    const r = await github(`/actions/workflows/${WORKFLOW}/dispatches`, {
      method: 'POST',
      body: JSON.stringify({ ref: 'main', inputs: { pedido_por: email } }),
    });
    if (r.status !== 204) return erro(`O GitHub recusou (${r.status}): ${(await r.text()).slice(0, 200)}`, 502);
    const agora = new Date().toISOString();
    await admin.from('site_publicacoes').insert({ pedido_por: email, status: 'pedido' });
    await admin.from('site_audit_logs').insert({ autor: email, acao: 'publicar', alvo_slug: 'site', dados_novos: { pedido_em: agora } });
    return resposta({ ok: true, desde: agora });
  }

  if (corpo.acao === 'status') {
    const r = await github(`/actions/workflows/${WORKFLOW}/runs?per_page=5&event=workflow_dispatch`);
    if (!r.ok) return erro(`Não consegui consultar o GitHub (${r.status}).`, 502);
    const { workflow_runs: runs = [] } = await r.json();
    const desde = corpo.desde ? Date.parse(corpo.desde) - 60_000 : 0;
    const run = runs.find((x: { created_at: string }) => Date.parse(x.created_at) >= desde);
    if (!run) return resposta({ estado: 'fila' });
    let estado = 'publicando';
    if (run.status === 'completed') estado = run.conclusion === 'success' ? 'no_ar' : 'erro';
    if (estado !== 'publicando') {
      await admin.from('site_publicacoes').update({ status: estado, mensagem: run.html_url })
        .eq('status', 'pedido').eq('pedido_por', email);
    }
    return resposta({ estado, inicio: run.created_at, fim: run.updated_at, link: run.html_url });
  }

  return erro('Ação desconhecida.');
});
