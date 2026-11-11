<?php
/**
 * D'FARIA GASTRONOMIA E EVENTOS — ENDPOINT DO FORMULÁRIO DE ORÇAMENTO
 *
 * Localização de Produção na HostGator:
 *   /home2/cris8907/public_html/api/enviar-orcamento.php
 *
 * Arquitetura e Segurança:
 *   1. Recebe os dados do formulário oficial (https://dfariagastronomia.com.br/orcamento).
 *   2. Filtra robôs via campo invisível 'website' (honeypot anti-spam).
 *   3. Envia e-mail transacional imediato para contato@dfariagastronomia.com.br.
 *   4. Carrega as credenciais com isolamento estrito de segurança:
 *      - Arquivo seguro externo /home2/cris8907/config/dfaria_credentials.php (fora de public_html)
 *      - Variável de ambiente DFARIA_SITE_LEAD_SECRET (quando disponível)
 *      - Nenhum segredo ou chave privada é exposto ou gravado dentro de public_html.
 *   5. Registra o lead diretamente no CRM (Supabase) via RPC segura receber_lead_site.
 *   6. Opera com timeout estrito de 4s para nunca reter o visitante.
 *   7. Não expõe credenciais, tokens ou detalhes internos em respostas ou logs.
 */

ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');

// 1. Validação de Método HTTP (Apenas POST permitido)
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'erro' => 'Método não permitido.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// 2. Leitura e Decodificação do Payload (Suporte a JSON e Form POST com limite de tamanho)
$inputRaw = file_get_contents('php://input', false, null, 0, 16384);
if ($inputRaw === false || strlen($inputRaw) >= 16384) {
    http_response_code(413);
    echo json_encode(['ok' => false, 'erro' => 'Requisição muito grande.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$data = null;
if (!empty($inputRaw)) {
    $decoded = json_decode($inputRaw, true);
    if (is_array($decoded) && json_last_error() === JSON_ERROR_NONE) {
        $data = $decoded;
    }
}

if (!is_array($data) && !empty($_POST) && is_array($_POST)) {
    $data = $_POST;
}

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'erro' => 'Formato de requisição inválido.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// 3. Filtro Anti-Spam (Honeypot do campo invisível 'website')
$websiteHoneypot = isset($data['website']) ? trim((string)$data['website']) : '';
if ($websiteHoneypot !== '') {
    http_response_code(200);
    echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
    exit;
}

// 4. Sanitização e Validação dos Campos do Formulário
function sanitizar_campo($valor, int $maxLen = 200): string {
    if (!is_scalar($valor)) {
        return '';
    }
    $texto = trim(strip_tags((string)$valor));
    if (function_exists('mb_substr')) {
        return mb_substr($texto, 0, $maxLen, 'UTF-8');
    }
    return substr($texto, 0, $maxLen);
}

$nome       = sanitizar_campo($data['nome'] ?? '', 120);
$whatsapp   = sanitizar_campo($data['whatsapp'] ?? '', 30);
$emailBruto = filter_var(trim((string)($data['email'] ?? '')), FILTER_SANITIZE_EMAIL);
$email      = is_string($emailBruto) ? sanitizar_campo($emailBruto, 255) : '';
$dataEvento = sanitizar_campo($data['data_evento'] ?? '', 10);
$tipoEvento = sanitizar_campo($data['tipo_evento'] ?? '', 100);
$convidados = sanitizar_campo($data['convidados'] ?? '', 10);
$cidade     = sanitizar_campo($data['cidade'] ?? '', 100);
$local      = sanitizar_campo($data['local'] ?? '', 200);
$servicos   = sanitizar_campo($data['servicos'] ?? '', 300);
$mensagem   = sanitizar_campo($data['mensagem'] ?? '', 2000);

if ($nome === '' || (function_exists('mb_strlen') ? mb_strlen($nome, 'UTF-8') : strlen($nome)) < 2) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'erro' => 'O preenchimento do seu nome é obrigatório.'], JSON_UNESCAPED_UNICODE);
    exit;
}

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'erro' => 'Informe um e-mail válido.'], JSON_UNESCAPED_UNICODE);
    exit;
}

if (empty($whatsapp) && empty($email)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'erro' => 'Informe ao menos um meio de contato (WhatsApp ou E-mail).'], JSON_UNESCAPED_UNICODE);
    exit;
}

// 5. Carregamento Seguro das Credenciais Externas (Exclusivamente fora da raiz pública public_html)
$configExterna = [];
$docRootParent = (!empty($_SERVER['DOCUMENT_ROOT']) ? dirname((string)$_SERVER['DOCUMENT_ROOT']) : '');
$candidatosConfig = array_filter([
    '/home2/cris8907/config/dfaria_credentials.php',          // Prioridade 1: Caminho absoluto cPanel HostGator
    '/home/cris8907/config/dfaria_credentials.php',           // Prioridade 2: Variação de partição Linux
    ($docRootParent !== '' ? $docRootParent . '/config/dfaria_credentials.php' : ''), // Prioridade 3: Derivado do DOCUMENT_ROOT real do Apache
    dirname(__DIR__, 2) . '/config/dfaria_credentials.php',   // Prioridade 4: Caminho relativo seguro (dois níveis acima de api/)
]);

foreach ($candidatosConfig as $caminho) {
    if (is_readable($caminho)) {
        try {
            $carregado = @include $caminho;
            if (is_array($carregado)) {
                $configExterna = $carregado;
                break;
            }
        } catch (\Throwable $e) {
            // Ignora silenciosamente e tenta próximo candidato
        }
    }
}

// Obtenção do segredo de integração (Variável de ambiente ou arquivo seguro externo em /home2/cris8907/config/)
$tokenSegredo = getenv('DFARIA_SITE_LEAD_SECRET')
    ?: ($configExterna['DFARIA_SITE_LEAD_SECRET'] 
    ?? ($_ENV['DFARIA_SITE_LEAD_SECRET'] ?? ''));

if (empty($tokenSegredo)) {
    error_log("[DFARIA-CRM] AVISO: Credenciais externas nao carregadas. Verifique /home2/cris8907/config/dfaria_credentials.php");
}

// 6. Envio do E-mail Transacional (Garantia Operacional Incondicional)
$destinatarioEmail = $configExterna['EMAIL_DESTINATARIO'] ?? 'contato@dfariagastronomia.com.br';
$assuntoEmail = "Novo Pedido de Orçamento pelo Site — {$nome}";

$corpoEmail = "Novo pedido de orçamento recebido através do site oficial:\n\n";
$corpoEmail .= "Nome: {$nome}\n";
$corpoEmail .= "WhatsApp: " . ($whatsapp !== '' ? $whatsapp : "Não informado") . "\n";
$corpoEmail .= "E-mail: " . ($email !== '' ? $email : "Não informado") . "\n";
$corpoEmail .= "Tipo de Evento: " . ($tipoEvento !== '' ? $tipoEvento : "Não informado") . "\n";
$corpoEmail .= "Data do Evento: " . ($dataEvento !== '' ? $dataEvento : "Data a definir com o cliente") . "\n";
$corpoEmail .= "Número de Convidados: " . ($convidados !== '' ? $convidados : "Não informado") . "\n";
$corpoEmail .= "Cidade: " . ($cidade !== '' ? $cidade : "Não informada") . "\n";
$corpoEmail .= "Local: " . ($local !== '' ? $local : "Não informado") . "\n";
$corpoEmail .= "Serviços de Interesse: " . ($servicos !== '' ? $servicos : "Não informado") . "\n";
$corpoEmail .= "Mensagem/Observações:\n" . ($mensagem !== '' ? $mensagem : "Nenhuma") . "\n\n";
$corpoEmail .= "---\nEnviado em " . date('d/m/Y H:i:s') . " pelo site https://dfariagastronomia.com.br\n";

$headersEmail = [
    'From: D\'Faria Gastronomia <' . $destinatarioEmail . '>',
    'Reply-To: ' . ($email !== '' ? $email : $destinatarioEmail),
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8'
];

$emailEnviado = @mail(
    $destinatarioEmail,
    $assuntoEmail,
    $corpoEmail,
    implode("\r\n", $headersEmail),
    "-f " . $destinatarioEmail
);

// 7. Sincronização Automática com o CRM (Supabase RPC no projeto oficial idrfcnsdsbuepcyhvzza)
$crmSincronizado = false;

if (!empty($tokenSegredo) && function_exists('curl_init')) {
    // Endpoint Oficial do D'FARIA GESTÃO (Supabase idrfcnsdsbuepcyhvzza; o arquivo de credenciais pode sobrescrever)
    $urlOficial = $configExterna['SUPABASE_URL'] 
        ?? getenv('SUPABASE_URL') 
        ?: 'https://idrfcnsdsbuepcyhvzza.supabase.co';
    $keyOficial = $configExterna['SUPABASE_ANON_KEY'] 
        ?? getenv('SUPABASE_ANON_KEY') 
        ?: 'sb_publishable_QIQVXTVytsoSxRVFDQ5slQ_Whnl6z2F';

    $payloadRpc = [
        'p_dados' => [
            'nome'        => $nome,
            'whatsapp'    => $whatsapp,
            'email'       => $email,
            'data_evento' => $dataEvento,
            'tipo_evento' => $tipoEvento,
            'convidados'  => $convidados,
            'cidade'      => $cidade,
            'local'       => $local,
            'servicos'    => $servicos,
            'mensagem'    => $mensagem,
            'website'     => $websiteHoneypot
        ],
        'p_token_segredo' => $tokenSegredo
    ];
    $jsonPayload = json_encode($payloadRpc, JSON_UNESCAPED_UNICODE);

    $headersRpc = [
        'Content-Type: application/json',
        'apikey: ' . $keyOficial,
        'Authorization: Bearer ' . $keyOficial,
        'Prefer: return=representation'
    ];

    $ch = curl_init(rtrim($urlOficial, '/') . '/rest/v1/rpc/receber_lead_site');
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER     => $headersRpc,
        CURLOPT_POSTFIELDS     => $jsonPayload,
        CURLOPT_CONNECTTIMEOUT => 3,
        CURLOPT_TIMEOUT        => 5,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2
    ]);

    $respostaSupabase = curl_exec($ch);
    $httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200 && !empty($respostaSupabase)) {
        $jsonRetorno = json_decode($respostaSupabase, true);
        if (is_array($jsonRetorno) && !empty($jsonRetorno['ok'])) {
            $crmSincronizado = true;
        } else {
            error_log("[DFARIA-CRM] Resposta inesperada da RPC oficial: " . substr((string)$respostaSupabase, 0, 200));
        }
    } else {
        error_log("[DFARIA-CRM] Erro HTTP {$httpCode} na comunicacao com Supabase oficial: " . substr((string)$respostaSupabase, 0, 200));
    }
}

// 8. Resposta Estruturada ao Navegador
if ($emailEnviado || $crmSincronizado) {
    http_response_code(200);
    echo json_encode([
        'ok'               => true,
        'email_enviado'    => (bool)$emailEnviado,
        'crm_sincronizado' => (bool)$crmSincronizado
    ], JSON_UNESCAPED_UNICODE);
} else {
    http_response_code(500);
    echo json_encode([
        'ok'   => false,
        'erro' => 'Não foi possível processar seu pedido agora. Por favor, fale com a equipe pelo WhatsApp.'
    ], JSON_UNESCAPED_UNICODE);
}
