// Painel do Chef & CMS Completo D'Faria Gastronomia (v3)
// Gerencia 100% dos CardÃ¡pios Oficiais (17 itens) e PÃ¡ginas do Site (19 pÃ¡ginas)
// URL: /painel | Privado, Seguro (Supabase Auth), Responsivo e Simples (Regra Zero)

import * as extras from './painel-extras.js?v=20261124a';

const SUPABASE_URL = 'https://gcwxhawqvtqhpoohihjo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_yeda5BcY2QZyBoVMi4r_0Q_Hbxc5Ex2';

// Base padrÃ£o das 19 pÃ¡ginas do site
const DEFAULT_PAGES = {
  "home": {
    "id": "home",
    "nome": "ðŸ  InÃ­cio (PÃ¡gina Principal)",
    "categoria": "Institucional",
    "slug": "/",
    "arquivo": "index.html",
    "meta_title": "Buffet para Casamentos e Eventos Corporativos | D&#x27;Faria",
    "meta_description": "Buffet e gastronomia para casamentos, eventos corporativos, formaturas e celebraÃ§Ãµes em CesÃ¡rio Lange e regiÃ£o. Desde 2016, com mais de 38 anos de experiÃªncia do chef Cristiano De Faria.",
    "hero": {
      "titulo": "O CHEF CRISTIANO ASSUME CADA DETALHE.",
      "subtitulo": "VOCÃŠ CELEBRA, CONFRATERNIZA E APROVEITA CADA MOMENTO. VIVE O MELHOR DO SEU EVENTO.",
      "imagem": {
        "src": "/assets/hero-dfaria-luxo.jpg",
        "alt": "Banquete de alta gastronomia e buffet para eventos â€” Dâ€™Faria Gastronomia"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Um pouco do nosso trabalho ao vivo",
        "texto": "Montagem, atendimento e apresentaÃ§Ã£o: o cuidado que aplicamos em cada evento.\n\nSOLICITAR ORÃ‡AMENTO Eventos",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "O formato do dia, do jeito que ele pede",
        "texto": "Dâ€™FARIA GASTRONOMIA",
        "imagem": null,
        "itens": [
          "Eventos Corporativos Coffee breaks, jantares, palestras e grandes operaÃ§Ãµes de fim de ano.",
          "Formaturas CelebraÃ§Ãµes grandes, com operaÃ§Ã£o organizada do inÃ­cio ao fim.",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes Datas marcantes com gastronomia e serviÃ§o Ã  altura."
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Fogo, tÃ©cnica e apresentaÃ§Ã£o",
        "texto": "Da brasa viva sob a grelha ao corte preciso diante do convidado, cada estaÃ§Ã£o do Dâ€™Faria Gastronomia Ã© montada para servir o momento â€” conforme a proposta contratada.\n\nSolicite seu orÃ§amento Ver toda a gastronomia Ver cardÃ¡pios Galeria",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-4",
        "titulo": "Eventos, pratos, montagem e serviÃ§o",
        "texto": "Por que o Dâ€™Faria",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-5",
        "titulo": "Gastronomia Ã© metade. A outra metade Ã© operaÃ§Ã£o.",
        "texto": "Cozinhar bem resolve o cardÃ¡pio. Servir bem depende de equipe, estrutura, logÃ­stica e coordenaÃ§Ã£o â€” e Ã© aÃ­ que se decide se o evento corre bem.\n\nHistÃ³ria",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-6",
        "titulo": "Desde 2016, com mais de 38 anos de experiÃªncia por trÃ¡s",
        "texto": "O Dâ€™Faria nasceu em 2016, mas a experiÃªncia que sustenta a casa vem de mais de 38 anos do chef Cristiano De Faria entre gastronomia, gestÃ£o, planejamento, coordenaÃ§Ã£o de equipes, atendimento, logÃ­stica e estrutura â€” em eventos pequenos e em grandes operaÃ§Ãµes.\n\nNÃºmeros que sustentam a promessa\n\nTodos os nÃºmeros abaixo se referem Ã  trajetÃ³ria real do Dâ€™Faria e do chef Cristiano De Faria.\n\n38+ anos\n\nde experiÃªncia profissional do chef Cristiano De Faria\n\nTrajetÃ³ria pessoal dedicada a gastronomia, serviÃ§o e operaÃ§Ã£o de eventos â€” o Dâ€™Faria existe desde 2016.\n\n2.000 eventos\n\nservidos do primeiro ao Ãºltimo prato\n\nCasamentos, festas de famÃ­lia, formaturas e celebraÃ§Ãµes corporativas.\n\n8.500 convidados\n\nna maior operaÃ§Ã£o jÃ¡ supervisionada\n\nCenter Norte, SÃ£o Paulo â€” operaÃ§Ã£o conduzida na trajetÃ³ria profissional anterior ao Dâ€™Faria.\n\nRegiÃµes atendidas",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-7",
        "titulo": "Cidades, condomÃ­nios e espaÃ§os da regiÃ£o",
        "texto": "OperaÃ§Ã£o sediada em CesÃ¡rio Lange, com atendimento nas cidades e nos espaÃ§os de eventos do entorno.\n\nDepoimentos",
        "imagem": null,
        "itens": [
          "01 CesÃ¡rio Lange â†’",
          "02 TatuÃ­ â†’",
          "03 Porangaba â†’",
          "04 Conchas â†’",
          "05 Cerquilho â†’",
          "06 Pereiras â†’",
          "07 TietÃª â†’",
          "08 Residencial Village ManacÃ¡ â†’",
          "09 Ninho Verde I Eco Residence â†’",
          "10 CondomÃ­nio JatobÃ¡ â†’"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "O que nossos clientes dizem",
        "texto": "Nota 5.0 com 57 avaliaÃ§Ãµes no Google. AvaliaÃ§Ãµes reais de clientes, publicadas no perfil oficial do Dâ€™Faria.\n\nA confianÃ§a se prova na mesa. Veja como o Dâ€™Faria Ã© avaliado.\n\nAvaliaÃ§Ãµes reais de clientes, direto no perfil oficial no Google.\n\nCaroline CÃ¢ncio de Oliveira Â· 2 semanas atrÃ¡s\n\nLarissa Ferreira Â· um mÃªs atrÃ¡s\n\nEmilyn Monreal Â· um mÃªs atrÃ¡s\n\nElias Miguel InÃ¡cio Silvestre Â· 2 meses atrÃ¡s\n\nMarili Aparecida Â· 2 meses atrÃ¡s\n\nAvaliaÃ§Ãµes publicadas no Perfil da Empresa no Google.\n\nPerguntas frequentes",
        "imagem": {
          "src": "/reviews/caroline-cancio-de-oliveira.png",
          "alt": "Foto de perfil de Caroline CÃ¢ncio de Oliveira no Google"
        },
        "itens": [
          "â˜…â˜…â˜…â˜…â˜… â€œQuero agradecer ao buffet por todo o carinho, dedicaÃ§Ã£o e profissionalismo! â¤ï¸ Tudo estava maravilhoso, desde o atendimento atÃ© a organizaÃ§Ã£o, a comida e cada detalhe. VocÃªs fizeram parte de um momento muito especial e ajudaram a tornar os 15 anos da minha filha inesquecÃ­veis. Foi tudo feito com muito capricho e amor! GratidÃ£o por fazerem parte desse sonho! ðŸ©µâœ¨â€ Caroline CÃ¢ncio de Oliveira Â· 2 semanas atrÃ¡s Ver avaliaÃ§Ã£o no Google",
          "â˜…â˜…â˜…â˜…â˜… â€œComida e atendimento SENSACIONAL! Nunca comi comida tÃ£o gostosa como comi nesses dias com esse buffet.â€ Larissa Ferreira Â· um mÃªs atrÃ¡s Ver avaliaÃ§Ã£o no Google",
          "â˜…â˜…â˜…â˜…â˜… â€œNossa experiÃªncia com o buffet foi excelente! A comida claramente foi preparada com muito capricho, estava saborosa e muito bem temperada. A mesa foi muito bem servida e organizada, com bastante atenÃ§Ã£o aos detalhes. AlÃ©m da qualidade da comida, destaco o atendimento. O Cristiano e toda a equipe foram extremamente solÃ­citos, educados e colaborativos durante todo o evento. Mostraram-se flexÃ­veis diante das nossas necessidades especÃ­ficas, foram cuidadosos com os ajustes de horÃ¡rio e sempre muito responsivos aos feedbacks e Ã s demandas que surgiram. Os profissionais apresentaram-se responsÃ¡veis, agradÃ¡veis, bem articulados na busca por soluÃ§Ãµes, transmitindo confianÃ§a. Certamente voltaremos a contratÃ¡-los em outras oportunidades. Recomendamos muito!â€ Emilyn Monreal Â· um mÃªs atrÃ¡s Ver avaliaÃ§Ã£o no Google",
          "â˜…â˜…â˜…â˜…â˜… â€œQuero deixar aqui o meu agradecimento especial ao Buffet D&#x27;Faria e Gastronomia Por todo o excelente serviÃ§o prestado. Foi tudo preparado com muito carinho, dedicaÃ§Ã£o e profissionalismo, e isso fez toda a diferenÃ§a. AgradeÃ§o de coraÃ§Ã£o por todo o cuidado e atenÃ§Ã£o em cada detalhe. Recomendo muito o trabalho de vocÃªs! Muito obrigado por fazerem parte desse momento e contribuÃ­rem para que tudo fosse ainda mais especial! ðŸ‘ðŸ¼â¤ï¸ðŸ½ï¸â€ Elias Miguel InÃ¡cio Silvestre Â· 2 meses atrÃ¡s Ver avaliaÃ§Ã£o no Google",
          "â˜…â˜…â˜…â˜…â˜… â€œContratar o Dâ€™Faria Gastronomia e Eventos foi uma das melhores decisÃµes para o nosso evento. Desde o primeiro contato fomos atendidos com muito profissionalismo e atenÃ§Ã£o. A qualidade das carnes, especialmente a costela no fogo de chÃ£o e a parrilla, impressionou todos os convidados. A equipe foi extremamente educada, organizada e cuidou de cada detalhe com muito capricho. Recebemos muitos elogios pela comida e pelo atendimento. Tudo foi servido no tempo certo, com excelente apresentaÃ§Ã£o e um sabor impecÃ¡vel. Recomendo de olhos fechados para quem procura um buffet de alto padrÃ£o e quer proporcionar uma experiÃªncia inesquecÃ­vel aos convidados. Com certeza contrataremos novamente!â€ Marili Aparecida Â· 2 meses atrÃ¡s Ver avaliaÃ§Ã£o no Google"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "O que costumam nos perguntar",
        "texto": "Ficou alguma dÃºvida? Fale pelo WhatsApp .\n\nCasamentos, eventos corporativos, formaturas, aniversÃ¡rios, festas de 15 anos, bodas, confraternizaÃ§Ãµes e celebraÃ§Ãµes em geral, em diferentes portes.\n\nSim. O cardÃ¡pio Ã© montado junto com o cliente e pode contemplar opÃ§Ãµes vegetarianas e veganas, alÃ©m de restriÃ§Ãµes alimentares informadas na fase de proposta.\n\nO valor depende do nÃºmero de convidados, do cardÃ¡pio, do formato do serviÃ§o, da estrutura necessÃ¡ria e da distÃ¢ncia atÃ© o local. Por isso a proposta Ã© feita caso a caso, sem tabela fixa.\n\nConforme a proposta contratada, o serviÃ§o pode envolver gastronomia, equipe especializada, mobiliÃ¡rio, enxoval, louÃ§as, prataria, rÃ©chauds, estaÃ§Ãµes gastronÃ´micas e a estrutura necessÃ¡ria para a execuÃ§Ã£o do evento.\n\nQuanto antes, maior a disponibilidade de data â€” especialmente em alta temporada de casamentos e no fim de ano. Consulte a data desejada pelo WhatsApp para verificar a agenda.\n\nA degustaÃ§Ã£o Ã© combinada durante a negociaÃ§Ã£o da proposta, conforme o tipo de evento e o cardÃ¡pio em estudo. Fale com a equipe para alinhar as condiÃ§Ãµes.\n\nSim, esses itens podem ser fornecidos conforme a proposta contratada, incluindo mobiliÃ¡rio, enxoval, louÃ§as, prataria e peÃ§as de serviÃ§o.\n\nA equipe Ã© definida pelo nÃºmero de convidados, pelo formato do serviÃ§o e pela estrutura do local, de modo a manter o ritmo de atendimento durante todo o evento.\n\nAjustes de nÃºmero de convidados devem ser informados dentro do prazo combinado na proposta, para que cardÃ¡pio, equipe e estrutura sejam redimensionados.\n\nSim. O serviÃ§o Ã© executado em chÃ¡caras, sÃ­tios, condomÃ­nios, residÃªncias, espaÃ§os de eventos e na prÃ³pria sede das empresas.\n\nSim. Coffee breaks, reuniÃµes, treinamentos, palestras, workshops, confraternizaÃ§Ãµes, festas de fim de ano, comemoraÃ§Ãµes de metas, aniversÃ¡rios empresariais, almoÃ§os, jantares, coquetÃ©is e lanÃ§amentos.\n\nSim. A experiÃªncia profissional de Cristiano Dâ€™Faria inclui a supervisÃ£o de uma grande operaÃ§Ã£o realizada no Center Norte, em SÃ£o Paulo, para aproximadamente 8.500 pessoas, com 850 mesas de 10 lugares, 12 pontos de buffet, 6 ilhas de open bar e centenas de profissionais envolvidos. Essa operaÃ§Ã£o pertence Ã  sua trajetÃ³ria profissional anterior Ã  criaÃ§Ã£o do Dâ€™Faria Gastronomia e Eventos.\n\nInforme data, cidade e local, nÃºmero aproximado de convidados, tipo de evento e serviÃ§o de interesse. Com esses dados a proposta sai mais prÃ³xima da realidade do seu evento.\n\nCesÃ¡rio Lange, TatuÃ­, Boituva, Cerquilho, TietÃª, Itapetininga, Conchas, Pereiras e Porangaba, alÃ©m de condomÃ­nios e espaÃ§os de eventos da regiÃ£o.\n\nDepois do primeiro contato, sÃ£o levantadas as informaÃ§Ãµes do evento, montada a proposta com cardÃ¡pio, equipe e estrutura e, com o aceite, a data Ã© reservada na agenda.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-10",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-11",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-12",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-13",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-14",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-15",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google",
          "ðŸ‘¨â€ðŸ³ Painel do Chef"
        ]
      }
    ],
    "galeria": [
      {
        "src": "/reviews/caroline-cancio-de-oliveira.png",
        "alt": "Foto de perfil de Caroline CÃ¢ncio de Oliveira no Google"
      },
      {
        "src": "/reviews/larissa-ferreira.png",
        "alt": "Foto de perfil de Larissa Ferreira no Google"
      },
      {
        "src": "/reviews/emilyn-monreal.png",
        "alt": "Foto de perfil de Emilyn Monreal no Google"
      },
      {
        "src": "/reviews/elias-miguel-inacio-silvestre.png",
        "alt": "Foto de perfil de Elias Miguel InÃ¡cio Silvestre no Google"
      },
      {
        "src": "/reviews/marili-aparecida.png",
        "alt": "Foto de perfil de Marili Aparecida no Google"
      }
    ],
    "dados_extras": {
      "faq": [
        {
          "pergunta": "Quais tipos de eventos o D'Faria atende?",
          "resposta": "Casamentos, eventos corporativos, formaturas, aniversÃ¡rios, festas de 15 anos, bodas, confraternizaÃ§Ãµes e celebraÃ§Ãµes em geral, em diferentes portes."
        },
        {
          "pergunta": "Existem opÃ§Ãµes vegetarianas e veganas?",
          "resposta": "Sim. O cardÃ¡pio Ã© montado junto com o cliente e pode contemplar opÃ§Ãµes vegetarianas e veganas, alÃ©m de restriÃ§Ãµes alimentares informadas na fase de proposta."
        },
        {
          "pergunta": "Quanto custa contratar um buffet?",
          "resposta": "O valor depende do nÃºmero de convidados, do cardÃ¡pio, do formato do serviÃ§o, da estrutura necessÃ¡ria e da distÃ¢ncia atÃ© o local. Por isso a proposta Ã© feita caso a caso, sem tabela fixa."
        },
        {
          "pergunta": "O que estÃ¡ incluÃ­do no buffet?",
          "resposta": "Conforme a proposta contratada, o serviÃ§o pode envolver gastronomia, equipe especializada, mobiliÃ¡rio, enxoval, louÃ§as, prataria, rÃ©chauds, estaÃ§Ãµes gastronÃ´micas e a estrutura necessÃ¡ria para a execuÃ§Ã£o do evento."
        },
        {
          "pergunta": "Com quanto tempo de antecedÃªncia devo contratar?",
          "resposta": "Quanto antes, maior a disponibilidade de data â€” especialmente em alta temporada de casamentos e no fim de ano. Consulte a data desejada pelo WhatsApp para verificar a agenda."
        },
        {
          "pergunta": "Como funciona a degustaÃ§Ã£o?",
          "resposta": "A degustaÃ§Ã£o Ã© combinada durante a negociaÃ§Ã£o da proposta, conforme o tipo de evento e o cardÃ¡pio em estudo. Fale com a equipe para alinhar as condiÃ§Ãµes."
        },
        {
          "pergunta": "O buffet fornece mesas, louÃ§as e rÃ©chauds?",
          "resposta": "Sim, esses itens podem ser fornecidos conforme a proposta contratada, incluindo mobiliÃ¡rio, enxoval, louÃ§as, prataria e peÃ§as de serviÃ§o."
        },
        {
          "pergunta": "Como Ã© dimensionada a equipe?",
          "resposta": "A equipe Ã© definida pelo nÃºmero de convidados, pelo formato do serviÃ§o e pela estrutura do local, de modo a manter o ritmo de atendimento durante todo o evento."
        },
        {
          "pergunta": "O que acontece se o nÃºmero de convidados mudar?",
          "resposta": "Ajustes de nÃºmero de convidados devem ser informados dentro do prazo combinado na proposta, para que cardÃ¡pio, equipe e estrutura sejam redimensionados."
        },
        {
          "pergunta": "O D'Faria atende chÃ¡caras, sÃ­tios, condomÃ­nios, residÃªncias e empresas?",
          "resposta": "Sim. O serviÃ§o Ã© executado em chÃ¡caras, sÃ­tios, condomÃ­nios, residÃªncias, espaÃ§os de eventos e na prÃ³pria sede das empresas."
        },
        {
          "pergunta": "O D'Faria atende eventos corporativos?",
          "resposta": "Sim. Coffee breaks, reuniÃµes, treinamentos, palestras, workshops, confraternizaÃ§Ãµes, festas de fim de ano, comemoraÃ§Ãµes de metas, aniversÃ¡rios empresariais, almoÃ§os, jantares, coquetÃ©is e lanÃ§amentos."
        },
        {
          "pergunta": "O D'Faria atende eventos de grande porte?",
          "resposta": "Sim. A experiÃªncia profissional de Cristiano Dâ€™Faria inclui a supervisÃ£o de uma grande operaÃ§Ã£o realizada no Center Norte, em SÃ£o Paulo, para aproximadamente 8.500 pessoas, com 850 mesas de 10 lugares, 12 pontos de buffet, 6 ilhas de open bar e centenas de profissionais envolvidos. Essa operaÃ§Ã£o pertence Ã  sua trajetÃ³ria profissional anterior Ã  criaÃ§Ã£o do Dâ€™Faria Gastronomia e Eventos."
        },
        {
          "pergunta": "Como solicitar um orÃ§amento preciso?",
          "resposta": "Informe data, cidade e local, nÃºmero aproximado de convidados, tipo de evento e serviÃ§o de interesse. Com esses dados a proposta sai mais prÃ³xima da realidade do seu evento."
        },
        {
          "pergunta": "O D'Faria atende quais cidades e regiÃµes?",
          "resposta": "CesÃ¡rio Lange, TatuÃ­, Boituva, Cerquilho, TietÃª, Itapetininga, Conchas, Pereiras e Porangaba, alÃ©m de condomÃ­nios e espaÃ§os de eventos da regiÃ£o."
        },
        {
          "pergunta": "Como funciona a contrataÃ§Ã£o e definiÃ§Ã£o da proposta?",
          "resposta": "Depois do primeiro contato, sÃ£o levantadas as informaÃ§Ãµes do evento, montada a proposta com cardÃ¡pio, equipe e estrutura e, com o aceite, a data Ã© reservada na agenda."
        }
      ]
    },
    "updated_at": "2026-11-22T17:54:55.560Z"
  },
  "o-dfaria": {
    "id": "o-dfaria",
    "nome": "ðŸ‘¨â€ðŸ³ O Dâ€™Faria & Chef Cristiano",
    "categoria": "Institucional",
    "slug": "/o-dfaria",
    "arquivo": "o-dfaria.html",
    "meta_title": "O D&#x27;Faria â€” histÃ³ria, experiÃªncia, equipe e estrutura",
    "meta_description": "Mais de 38 anos de experiÃªncia em gastronomia e operaÃ§Ã£o de eventos, cerca de 2.000 eventos e operaÃ§Ã£o para mais de 8.500 pessoas.",
    "hero": {
      "titulo": "O Dâ€™Faria",
      "subtitulo": "Buffet para casamentos e eventos em CesÃ¡rio Lange e regiÃ£o",
      "imagem": {
        "src": "/__l5e/assets-v1/e5d011ca-5a5d-4743-8fa0-987e11261d08/salao-mesas-redondas-recepcao-dfaria.webp",
        "alt": "SalÃ£o montado com mesas redondas para recepÃ§Ã£o do Dâ€™Faria"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "ConheÃ§a o Dâ€™Faria em vÃ­deo",
        "texto": "Nossa histÃ³ria",
        "imagem": {
          "src": "/__l5e/assets-v1/e5d011ca-5a5d-4743-8fa0-987e11261d08/salao-mesas-redondas-recepcao-dfaria.webp",
          "alt": "SalÃ£o montado com mesas redondas para recepÃ§Ã£o do Dâ€™Faria"
        },
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Uma histÃ³ria construÃ­da em torno de grandes momentos.",
        "texto": "ExperiÃªncia, gastronomia e excelÃªncia operacional transformando celebraÃ§Ãµes em experiÃªncias memorÃ¡veis.\n\nHistÃ³ria",
        "imagem": {
          "src": "/__l5e/assets-v1/79439b84-da56-495f-9a75-81311d234e2c/mesa-posta-beira-piscina-dfaria.webp",
          "alt": "Mesa posta Ã  beira da piscina para evento ao ar livre"
        },
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Nasceu da cozinha. Cresceu com os eventos.",
        "texto": "O Dâ€™Faria nasceu da cozinha e cresceu com os eventos. Ao longo de mais de 38 anos, a operaÃ§Ã£o foi se ampliando: mais formatos, mais convidados, mais estrutura prÃ³pria e uma equipe treinada para trabalhar sob pressÃ£o de horÃ¡rio.\n\nHoje o Dâ€™Faria acumula cerca de 2.000 eventos realizados, entre casamentos, celebraÃ§Ãµes familiares, formaturas e eventos de empresas.\n\nExperiÃªncia e trajetÃ³ria",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-4",
        "titulo": "Gastronomia, gestÃ£o e operaÃ§Ã£o no mesmo comando.",
        "texto": "A experiÃªncia do Dâ€™Faria envolve gastronomia, gestÃ£o, operaÃ§Ã£o de eventos, planejamento, coordenaÃ§Ã£o de equipes, atendimento, logÃ­stica e estrutura.\n\nAntes de construir o Dâ€™Faria, Cristiano Dâ€™Faria acumulou experiÃªncia em grandes operaÃ§Ãµes de gastronomia e eventos, atuando como maÃ®tre principal do Buffet Maria FulÃ´, em SÃ£o Paulo. Na prÃ¡tica, sua atuaÃ§Ã£o envolvia lideranÃ§a, coordenaÃ§Ã£o e supervisÃ£o operacional de grandes equipes e estruturas.\n\n38+ anos de experiÃªncia\n\n2.000 eventos realizados\n\n8.500 convidados na maior operaÃ§Ã£o\n\nEquipe",
        "imagem": {
          "src": "/__l5e/assets-v1/f4ef0018-2e70-437f-9026-c2f8a2094d3a/estacao-saladas-arroz-rechauds-dfaria.webp",
          "alt": "EstaÃ§Ã£o de saladas, arroz e acompanhamentos em rÃ©chauds de inox"
        },
        "itens": []
      },
      {
        "id": "sec-5",
        "titulo": "Cozinha, salÃ£o e coordenaÃ§Ã£o com funÃ§Ãµes definidas.",
        "texto": "A equipe Ã© dimensionada evento a evento, considerando nÃºmero de convidados, formato do serviÃ§o e caracterÃ­sticas do local. Cozinha, salÃ£o e coordenaÃ§Ã£o trabalham com funÃ§Ãµes definidas desde a montagem.\n\nEstrutura",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-6",
        "titulo": "Tudo o que o evento precisa para acontecer.",
        "texto": "Conforme a proposta contratada, o Dâ€™Faria pode fornecer gastronomia, equipe especializada, mobiliÃ¡rio, enxoval, louÃ§as, prataria, rÃ©chauds, estaÃ§Ãµes gastronÃ´micas e a estrutura necessÃ¡ria para a execuÃ§Ã£o do evento.\n\nTrajetÃ³ria profissional\n\n8.500\n\npessoas, aproximadamente",
        "imagem": {
          "src": "/__l5e/assets-v1/455b55ff-e44a-494e-8d42-9ec932b0f072/mesas-montadas-evento-ar-livre-dfaria.webp",
          "alt": "Mesas montadas com toalhas e cadeiras em evento ao ar livre estruturado pelo Dâ€™Faria"
        },
        "itens": []
      },
      {
        "id": "sec-7",
        "titulo": "Center Norte, SÃ£o Paulo â€” operaÃ§Ã£o para cerca de 8.500 pessoas",
        "texto": "Entre as grandes operaÃ§Ãµes sob sua supervisÃ£o nesse perÃ­odo estÃ¡ um evento realizado no Center Norte, em SÃ£o Paulo, para aproximadamente 8.500 pessoas.\n\nOperaÃ§Ã£o realizada durante a atuaÃ§Ã£o de Cristiano Dâ€™Faria como maÃ®tre principal do Buffet Maria FulÃ´, em SÃ£o Paulo â€” parte da sua trajetÃ³ria profissional anterior Ã  criaÃ§Ã£o do Dâ€™Faria Gastronomia e Eventos.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-8",
        "titulo": "A confianÃ§a se prova na mesa. Veja como o Dâ€™Faria Ã© avaliado.",
        "texto": "AvaliaÃ§Ãµes reais de clientes, direto no perfil oficial no Google.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-9",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-11",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-12",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-13",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-14",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google",
          "ðŸ‘¨â€ðŸ³ Painel do Chef"
        ]
      }
    ],
    "galeria": [
      {
        "src": "/__l5e/assets-v1/e5d011ca-5a5d-4743-8fa0-987e11261d08/salao-mesas-redondas-recepcao-dfaria.webp",
        "alt": "SalÃ£o montado com mesas redondas para recepÃ§Ã£o do Dâ€™Faria"
      },
      {
        "src": "/__l5e/assets-v1/79439b84-da56-495f-9a75-81311d234e2c/mesa-posta-beira-piscina-dfaria.webp",
        "alt": "Mesa posta Ã  beira da piscina para evento ao ar livre"
      },
      {
        "src": "/__l5e/assets-v1/f4ef0018-2e70-437f-9026-c2f8a2094d3a/estacao-saladas-arroz-rechauds-dfaria.webp",
        "alt": "EstaÃ§Ã£o de saladas, arroz e acompanhamentos em rÃ©chauds de inox"
      },
      {
        "src": "/__l5e/assets-v1/3836589a-379b-4536-b7ee-54a3974d88a3/equipe-servindo-sobremesas-bandeja-dfaria.webp",
        "alt": "Profissional da equipe do Dâ€™Faria servindo sobremesas em bandeja durante o evento"
      },
      {
        "src": "/__l5e/assets-v1/455b55ff-e44a-494e-8d42-9ec932b0f072/mesas-montadas-evento-ar-livre-dfaria.webp",
        "alt": "Mesas montadas com toalhas e cadeiras em evento ao ar livre estruturado pelo Dâ€™Faria"
      },
      {
        "src": "/__l5e/assets-v1/67ace9da-8071-4626-812a-f63776a428b3/buffet-rechauds-saladas-dfaria.webp",
        "alt": "Buffet montado com rÃ©chauds, saladas e acompanhamentos em evento do Dâ€™Faria"
      },
      {
        "src": "/__l5e/assets-v1/4233a8bd-f9f5-4419-ac63-391420711ec7/estacao-churrasco-brasa-dfaria.webp",
        "alt": "EstaÃ§Ã£o de churrasco com brasa e cortes em preparo"
      },
      {
        "src": "/__l5e/assets-v1/459e8554-24ce-4397-b95e-e3c6e7fa59fc/ilha-de-frios-evento-noturno-dfaria.webp",
        "alt": "Ilha de frios montada pela equipe do Dâ€™Faria em evento noturno"
      }
    ],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.562Z"
  },
  "eventos": {
    "id": "eventos",
    "nome": "ðŸŽ‰ Eventos (VisÃ£o Geral)",
    "categoria": "Eventos",
    "slug": "/eventos",
    "arquivo": "eventos.html",
    "meta_title": "Eventos atendidos | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Casamentos, eventos corporativos, formaturas, aniversÃ¡rios, bodas e celebraÃ§Ãµes com gastronomia, equipe e estrutura do D&#x27;Faria.",
    "hero": {
      "titulo": "Eventos atendidos pelo Dâ€™Faria",
      "subtitulo": "Cada formato tem um ritmo prÃ³prio de serviÃ§o. Escolha o tipo de evento para ver como o Dâ€™Faria trabalha.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Eventos atendidos pelo Dâ€™Faria"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google",
          "ðŸ‘¨â€ðŸ³ Painel do Chef"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.563Z"
  },
  "casamentos": {
    "id": "casamentos",
    "nome": "ðŸ’ Casamentos",
    "categoria": "Eventos",
    "slug": "/eventos/casamentos",
    "arquivo": "eventos/casamentos.html",
    "meta_title": "Buffet para Casamentos | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Buffet para casamentos em CesÃ¡rio Lange e regiÃ£o, com gastronomia, equipe, estrutura e atendimento personalizado. Mais de 38 anos de experiÃªncia.",
    "hero": {
      "titulo": "Buffet para Casamentos",
      "subtitulo": "O casamento Ã© um dia de muitas decisÃµes e de uma Ãºnica memÃ³ria. O D&#x27;Faria acompanha o casal do planejamento do cardÃ¡pio Ã  Ãºltima mesa recolhida, com gastronomia, equipe e estrutura dimensionadas para o formato da celebraÃ§Ã£o.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Buffet para Casamentos"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "O que compÃµe o serviÃ§o",
        "texto": "Cada casamento recebe uma proposta prÃ³pria. Conforme a proposta contratada, o serviÃ§o pode envolver:",
        "imagem": null,
        "itens": [
          "Gastronomia e cardÃ¡pio personalizado",
          "Equipe especializada de cozinha e salÃ£o",
          "MobiliÃ¡rio, enxoval, louÃ§as e prataria",
          "RÃ©chauds e peÃ§as de serviÃ§o",
          "EstaÃ§Ãµes gastronÃ´micas ao vivo",
          "Estrutura necessÃ¡ria para a execuÃ§Ã£o do evento"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "Formatos atendidos",
        "texto": "RecepÃ§Ãµes em chÃ¡caras, sÃ­tios, condomÃ­nios, espaÃ§os de eventos e residÃªncias, do jantar servido Ã  mesa ao buffet completo com ilhas e estaÃ§Ãµes.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Como comeÃ§amos",
        "texto": "A conversa inicial define nÃºmero de convidados, data, local e estilo da recepÃ§Ã£o. A partir disso montamos a proposta com cardÃ¡pio, equipe e estrutura.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-4",
        "titulo": "Veja tambÃ©m",
        "texto": "",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Eventos Corporativos",
          "Formaturas"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Onde atendemos",
        "texto": "O Dâ€™Faria leva estrutura, equipe e gastronomia completa para as cidades e locais da regiÃ£o:",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-11",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.564Z"
  },
  "corporativos": {
    "id": "corporativos",
    "nome": "ðŸ¢ Eventos Corporativos",
    "categoria": "Eventos",
    "slug": "/eventos-corporativos",
    "arquivo": "eventos-corporativos.html",
    "meta_title": "Eventos Corporativos e ConfraternizaÃ§Ã£o de Empresa | D&#x27;Faria",
    "meta_description": "Buffet para eventos corporativos: churrasco para empresas, confraternizaÃ§Ã£o de fim de ano, coffee breaks, almoÃ§os, jantares e coquetÃ©is em CesÃ¡rio Lange, TatuÃ­, Cerquilho, TietÃª e regiÃ£o.",
    "hero": {
      "titulo": "Buffet para Eventos Corporativos",
      "subtitulo": "Gastronomia + Estrutura + ServiÃ§o",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Buffet para Eventos Corporativos"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "RecepÃ§Ãµes que abrem o apetite",
        "texto": "Entradas e petiscos servidos em eventos do Dâ€™Faria â€” montados no local, conforme a proposta contratada.\n\nClientes jÃ¡ atendidos",
        "imagem": null,
        "itens": [
          "Pastel com caldo de cana",
          "Flor de batatas chips",
          "Terrine na tela, com cestos de pÃ£es, crostines, crostatas e grisines",
          "Mini batatas em conserva de chimichurri"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "Nosso portfÃ³lio.",
        "texto": "Algumas das empresas e instituiÃ§Ãµes que fazem parte do nosso portfÃ³lio.\n\nOperaÃ§Ãµes realizadas para empresas, cooperativas e instituiÃ§Ãµes.\n\nDâ€™Faria Gastronomia e Eventos\n\nFormatos atendidos",
        "imagem": null,
        "itens": [
          "Bayer",
          "Bradesco",
          "Bunge Alimentos",
          "Canopus",
          "Fadel SoluÃ§Ãµes em LogÃ­stica",
          "Nitro",
          "Sicoob",
          "Sicredi",
          "LAF Sorocaba",
          "Igreja Presbiteriana do Morumbi"
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Do coffee break da manhÃ£ Ã  festa de fim de ano",
        "texto": "O D&#x27;Faria atende empresas em diferentes formatos:\n\nRotina corporativa",
        "imagem": null,
        "itens": [
          "01 Churrasco corporativo e confraternizaÃ§Ã£o de equipe",
          "02 Festas de fim de ano",
          "03 Coffee breaks",
          "04 ReuniÃµes, treinamentos e palestras",
          "05 Workshops",
          "06 ComemoraÃ§Ãµes de metas e aniversÃ¡rios empresariais",
          "07 AlmoÃ§os, jantares e coquetÃ©is",
          "08 LanÃ§amentos",
          "09 Grandes operaÃ§Ãµes"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Coffee breaks, almoÃ§os, jantares e coquetÃ©is",
        "texto": "Para a rotina corporativa, o serviÃ§o se ajusta ao relÃ³gio do evento: coffee break entre blocos de treinamento, almoÃ§o servido dentro da janela de intervalo, jantar de encerramento ou coquetel de lanÃ§amento e networking.",
        "imagem": null,
        "itens": [
          "Coffee break de manhÃ£, tarde ou entre sessÃµes",
          "AlmoÃ§o executivo servido no local",
          "Jantar de encerramento ou premiaÃ§Ã£o",
          "Coquetel de lanÃ§amento e networking",
          "Ilhas de frios e finger foods para recepÃ§Ã£o"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Churrasco para empresas e confraternizaÃ§Ãµes",
        "texto": "O churrasco Ã© o formato mais pedido para confraternizar equipe: reÃºne todo mundo em volta da brasa e funciona tanto no pÃ¡tio da empresa quanto em chÃ¡caras e espaÃ§os alugados. O D&#x27;Faria leva assadores, cortes, acompanhamentos, equipe de cozinha e de salÃ£o â€” a estaÃ§Ã£o pode ser churrasco premium, parrilla argentina ou costela de chÃ£o, conforme a proposta contratada.\n\nNovembro e dezembro concentram a agenda corporativa e as datas se esgotam primeiro. Fechar cardÃ¡pio, nÃºmero de convidados e local com antecedÃªncia Ã© o que garante a data e permite dimensionar equipe e estrutura com folga.\n\nExperiÃªncia gastronÃ´mica",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-6",
        "titulo": "Evento de empresa tambÃ©m se lembra pela mesa",
        "texto": "As estaÃ§Ãµes do Dâ€™Faria Gastronomia entram no evento corporativo conforme a proposta contratada â€” da brasa Ã  recepÃ§Ã£o com ilhas de frios e finger foods.\n\nSolicite seu orÃ§amento Ver toda a gastronomia Estrutura e serviÃ§o",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-7",
        "titulo": "NÃ£o Ã© sÃ³ a comida. Ã‰ a operaÃ§Ã£o inteira.",
        "texto": "O serviÃ§o pode ser executado na sede da empresa, em espaÃ§os de eventos, auditÃ³rios, chÃ¡caras e locais externos, conforme a proposta contratada. Quando o espaÃ§o nÃ£o tem cozinha de apoio, a estrutura vai junto.\n\nChef Cristiano de Faria",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-8",
        "titulo": "ExperiÃªncia Ã  frente. PrecisÃ£o em cada detalhe.",
        "texto": "Um evento corporativo representa a sua empresa. A gastronomia, a apresentaÃ§Ã£o e o ritmo do serviÃ§o precisam estar Ã  altura dessa responsabilidade.\n\nÃ€ frente do Dâ€™Faria desde 2016, o chef Cristiano de Faria reÃºne mais de 38 anos de experiÃªncia profissional em gastronomia e eventos. Essa trajetÃ³ria orienta o planejamento do cardÃ¡pio, a montagem das estaÃ§Ãµes e o dimensionamento da equipe para cada ocasiÃ£o.\n\nDo coffee break ao jantar de encerramento, a proposta considera o perfil dos participantes, os horÃ¡rios e a estrutura do local â€” para receber sua equipe, seus clientes e seus parceiros com cuidado e profissionalismo.\n\nCapacidade operacional",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-9",
        "titulo": "ExperiÃªncia para dimensionar qualquer porte",
        "texto": "A trajetÃ³ria profissional de Cristiano Dâ€™Faria inclui a supervisÃ£o de uma operaÃ§Ã£o para cerca de 8.500 pessoas no Center Norte, em SÃ£o Paulo, anterior Ã  criaÃ§Ã£o do Dâ€™Faria. Estrutura, equipe e logÃ­stica sÃ£o dimensionadas para o porte de cada evento.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-10",
        "titulo": "A confianÃ§a se prova na mesa. Veja como o Dâ€™Faria Ã© avaliado.",
        "texto": "AvaliaÃ§Ãµes reais de clientes, direto no perfil oficial no Google.\n\nComo pedir a proposta",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-11",
        "titulo": "Quatro informaÃ§Ãµes e a proposta jÃ¡ sai dimensionada",
        "texto": "Informe data, cidade e local, nÃºmero aproximado de participantes, horÃ¡rio e formato desejado (churrasco, coffee break, almoÃ§o, jantar ou coquetel). Com esses dados a proposta sai com cardÃ¡pio, equipe e estrutura jÃ¡ dimensionados. Empresas com nota fiscal e prazos internos de aprovaÃ§Ã£o devem sinalizar isso logo no primeiro contato.\n\nSolicite seu orÃ§amento Fale pelo WhatsApp Prefere escrever com calma? Envie pelo formulÃ¡rio de orÃ§amento ou ligue para (15) 99683-4734 .",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-12",
        "titulo": "Onde atendemos",
        "texto": "O Dâ€™Faria leva estrutura, equipe e gastronomia completa para as cidades e locais da regiÃ£o:",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange â†’",
          "TatuÃ­ â†’",
          "Porangaba â†’",
          "Conchas â†’",
          "Cerquilho â†’",
          "Pereiras â†’",
          "TietÃª â†’",
          "Residencial Village ManacÃ¡ â†’",
          "Ninho Verde I Eco Residence â†’",
          "Colina das Estrelas â†’"
        ]
      },
      {
        "id": "sec-13",
        "titulo": "Vamos montar o evento da sua empresa?",
        "texto": "Informe data, cidade, nÃºmero de participantes e formato. A partir daÃ­ montamos a proposta com cardÃ¡pio, equipe e estrutura.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-14",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-15",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.566Z"
  },
  "formaturas": {
    "id": "formaturas",
    "nome": "ðŸŽ“ Formaturas",
    "categoria": "Eventos",
    "slug": "/eventos/formaturas",
    "arquivo": "eventos/formaturas.html",
    "meta_title": "Buffet para Formaturas | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Buffet para formaturas com gastronomia, equipe e estrutura para grandes pÃºblicos, em CesÃ¡rio Lange, TatuÃ­, Cerquilho, TietÃª e regiÃ£o.",
    "hero": {
      "titulo": "Buffet para Formaturas",
      "subtitulo": "Formatura reÃºne muita gente em pouco tempo. O planejamento de fluxo, equipe e reposiÃ§Ã£o Ã© o que garante que todo mundo seja bem servido â€” do primeiro ao Ãºltimo convidado.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Buffet para Formaturas"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Estrutura para grandes pÃºblicos",
        "texto": "Dimensionamento de equipe, estaÃ§Ãµes gastronÃ´micas e reposiÃ§Ã£o contÃ­nua, conforme o nÃºmero de convidados e o formato do salÃ£o.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "OpÃ§Ãµes gastronÃ´micas",
        "texto": "Churrasco premium, parrilla argentina, costela de chÃ£o, ilhas de frios e finger foods e estaÃ§Ãµes gastronÃ´micas podem compor o cardÃ¡pio, conforme a proposta contratada.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja tambÃ©m",
        "texto": "",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Onde atendemos",
        "texto": "O Dâ€™Faria leva estrutura, equipe e gastronomia completa para as cidades e locais da regiÃ£o:",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.567Z"
  },
  "aniversarios": {
    "id": "aniversarios",
    "nome": "ðŸŽ‚ AniversÃ¡rios e Bodas",
    "categoria": "Eventos",
    "slug": "/eventos/aniversarios-bodas-e-celebracoes",
    "arquivo": "eventos/aniversarios-bodas-e-celebracoes.html",
    "meta_title": "Buffet para AniversÃ¡rios, Bodas e CelebraÃ§Ãµes | D&#x27;Faria",
    "meta_description": "Buffet para aniversÃ¡rios, festas de 15 anos, bodas e celebraÃ§Ãµes familiares, com gastronomia, equipe e estrutura em CesÃ¡rio Lange e regiÃ£o.",
    "hero": {
      "titulo": "Buffet para AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
      "subtitulo": "AniversÃ¡rios, festas de 15 anos, bodas e comemoraÃ§Ãµes em famÃ­lia pedem proximidade. O D&#x27;Faria ajusta cardÃ¡pio, serviÃ§o e montagem ao tamanho e ao clima da celebraÃ§Ã£o.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Buffet para AniversÃ¡rios, Bodas e CelebraÃ§Ãµes"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "CelebraÃ§Ãµes atendidas",
        "texto": "Entre os formatos mais comuns:",
        "imagem": null,
        "itens": [
          "AniversÃ¡rios",
          "Festas de 15 anos",
          "Bodas",
          "AlmoÃ§os e jantares em famÃ­lia",
          "ConfraternizaÃ§Ãµes"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "Em casa, na chÃ¡cara ou no salÃ£o",
        "texto": "O D&#x27;Faria atende chÃ¡caras, sÃ­tios, condomÃ­nios, residÃªncias e espaÃ§os de eventos, levando gastronomia, equipe e estrutura conforme a proposta contratada.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja tambÃ©m",
        "texto": "",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Onde atendemos",
        "texto": "O Dâ€™Faria leva estrutura, equipe e gastronomia completa para as cidades e locais da regiÃ£o:",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.568Z"
  },
  "gastronomia": {
    "id": "gastronomia",
    "nome": "ðŸ² Gastronomia (VisÃ£o Geral)",
    "categoria": "Gastronomia",
    "slug": "/gastronomia",
    "arquivo": "gastronomia.html",
    "meta_title": "Gastronomia para eventos | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Churrasco premium, parrilla argentina, costela de chÃ£o, ilhas de frios e finger foods, esculturas em frutas e estaÃ§Ãµes gastronÃ´micas.",
    "hero": {
      "titulo": "Fogo, tÃ©cnica e apresentaÃ§Ã£o",
      "subtitulo": "As experiÃªncias gastronÃ´micas do Dâ€™Faria sÃ£o montadas no local do evento, conforme a proposta contratada.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Fogo, tÃ©cnica e apresentaÃ§Ã£o"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Churrasco Premium",
        "texto": "Cortes nobres, ponto controlado e serviÃ§o contÃ­nuo. O churrasco premium do D&#x27;Faria Ã© preparado no local do evento e servido no ritmo da festa.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Parrilla Argentina",
        "texto": "A parrilla Ã© gastronomia e cena ao mesmo tempo: o fogo fica Ã  vista, o corte acontece na frente do convidado e o serviÃ§o segue quente do inÃ­cio ao fim.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Costela de ChÃ£o",
        "texto": "Fogo baixo, tempo longo e paciÃªncia. A costela de chÃ£o Ã© uma estaÃ§Ã£o de presenÃ§a: ela marca o ambiente antes mesmo de ser servida.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-4",
        "titulo": "Ilhas de Frios e Finger Foods",
        "texto": "As ilhas de frios e finger foods abrem o evento. Ã‰ o primeiro contato do convidado com a mesa â€” e por isso recebem cuidado de montagem, apresentaÃ§Ã£o e reposiÃ§Ã£o.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-5",
        "titulo": "Esculturas em Frutas",
        "texto": "Trabalho manual que dÃ¡ volume, cor e centro Ã s ilhas. As esculturas em frutas compÃµem a apresentaÃ§Ã£o das mesas e estaÃ§Ãµes.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-6",
        "titulo": "EstaÃ§Ãµes GastronÃ´micas",
        "texto": "EstaÃ§Ãµes distribuem o fluxo de convidados e transformam o serviÃ§o em experiÃªncia. Cada uma Ã© montada com equipe, equipamento e peÃ§as prÃ³prias.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-7",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-11",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-12",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google",
          "ðŸ‘¨â€ðŸ³ Painel do Chef"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.569Z"
  },
  "churrasco-premium": {
    "id": "churrasco-premium",
    "nome": "ðŸ¥© Churrasco Premium",
    "categoria": "Gastronomia",
    "slug": "/gastronomia/churrasco-premium",
    "arquivo": "gastronomia/churrasco-premium.html",
    "meta_title": "Churrasco Premium para Eventos | D&#x27;Faria",
    "meta_description": "Churrasco premium para casamentos, formaturas e eventos corporativos: cortes nobres na brasa, assadores e serviÃ§o Ã  mesa em CesÃ¡rio Lange e regiÃ£o.",
    "hero": {
      "titulo": "Churrasco Premium para Eventos",
      "subtitulo": "Cortes nobres, ponto controlado e serviÃ§o contÃ­nuo. O churrasco premium do D&#x27;Faria Ã© preparado no local do evento e servido no ritmo da festa.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Churrasco Premium para Eventos"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Como funciona",
        "texto": "A operaÃ§Ã£o Ã© montada no local, com assadores, equipe de corte e serviÃ§o. O cardÃ¡pio de cortes Ã© definido na proposta, conforme o nÃºmero de convidados e o formato do evento.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Combina com",
        "texto": "Ilhas de frios e finger foods na recepÃ§Ã£o, estaÃ§Ãµes gastronÃ´micas e sobremesas â€” conforme a proposta contratada.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja tambÃ©m",
        "texto": "",
        "imagem": null,
        "itens": [
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.569Z"
  },
  "parrilla": {
    "id": "parrilla",
    "nome": "ðŸ‡¦ðŸ‡· Parrilla Argentina",
    "categoria": "Gastronomia",
    "slug": "/gastronomia/parrilla-argentina",
    "arquivo": "gastronomia/parrilla-argentina.html",
    "meta_title": "Parrilla Argentina para Eventos | D&#x27;Faria",
    "meta_description": "Parrilla argentina em eventos: assados no fogo, corte na hora e apresentaÃ§Ã£o como parte da experiÃªncia gastronÃ´mica do D&#x27;Faria.",
    "hero": {
      "titulo": "Parrilla Argentina para Eventos",
      "subtitulo": "A parrilla Ã© gastronomia e cena ao mesmo tempo: o fogo fica Ã  vista, o corte acontece na frente do convidado e o serviÃ§o segue quente do inÃ­cio ao fim.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Parrilla Argentina para Eventos"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "A experiÃªncia",
        "texto": "Grelha em brasa, controle de ponto e corte no momento do serviÃ§o. Uma estaÃ§Ã£o que concentra atenÃ§Ã£o e alimenta bem.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Estrutura",
        "texto": "Equipamento, equipe e peÃ§as de serviÃ§o acompanham a proposta contratada.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja tambÃ©m",
        "texto": "",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.570Z"
  },
  "costela-de-chao": {
    "id": "costela-de-chao",
    "nome": "ðŸ”¥ Costela no Fogo de ChÃ£o",
    "categoria": "Gastronomia",
    "slug": "/gastronomia/costela-de-chao",
    "arquivo": "gastronomia/costela-de-chao.html",
    "meta_title": "Costela de ChÃ£o para Eventos | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Costela de chÃ£o assada em fogo lento como estaÃ§Ã£o especial do evento, com apresentaÃ§Ã£o e serviÃ§o executados pela equipe do D&#x27;Faria.",
    "hero": {
      "titulo": "Costela de ChÃ£o para Eventos",
      "subtitulo": "Fogo baixo, tempo longo e paciÃªncia. A costela de chÃ£o Ã© uma estaÃ§Ã£o de presenÃ§a: ela marca o ambiente antes mesmo de ser servida.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Costela de ChÃ£o para Eventos"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Preparo",
        "texto": "A peÃ§a Ã© assada no local, em cocÃ§Ã£o lenta ao redor do fogo, acompanhada pela equipe durante todo o processo.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "ApresentaÃ§Ã£o",
        "texto": "A estaÃ§Ã£o pode ser posicionada como atraÃ§Ã£o do evento, com corte e serviÃ§o diante dos convidados.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja tambÃ©m",
        "texto": "",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Ilhas de Frios e Finger Foods",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.571Z"
  },
  "frios-finger-food": {
    "id": "frios-finger-food",
    "nome": "ðŸ§€ Frios & Finger Food",
    "categoria": "Gastronomia",
    "slug": "/frios-e-finger-food",
    "arquivo": "frios-e-finger-food.html",
    "meta_title": "Ilhas de Frios e Finger Foods | D&#x27;Faria",
    "meta_description": "Ilhas de frios e finger foods para casamentos, festas de 15 anos, aniversÃ¡rios e eventos corporativos, com montagem, mobiliÃ¡rio, enxoval e peÃ§as de serviÃ§o.",
    "hero": {
      "titulo": "Ilhas de Frios e Finger Foods",
      "subtitulo": "As ilhas de frios e finger foods abrem o evento. Ã‰ o primeiro contato do convidado com a mesa â€” e por isso recebem cuidado de montagem, apresentaÃ§Ã£o e reposiÃ§Ã£o.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Ilhas de Frios e Finger Foods"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "O que compÃµe",
        "texto": "Conforme a proposta contratada, a montagem pode envolver:",
        "imagem": null,
        "itens": [
          "Frios",
          "Finger foods",
          "Esculturas em frutas",
          "MobiliÃ¡rio e enxoval",
          "LouÃ§as e peÃ§as de serviÃ§o",
          "Montagem e apresentaÃ§Ã£o no local"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "Para quais eventos",
        "texto": "Casamentos, festas de 15 anos, aniversÃ¡rios e eventos corporativos.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja tambÃ©m",
        "texto": "Fotos reais",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Ilhas de frios e finger foods do Dâ€™Faria",
        "texto": "Registros de tÃ¡buas de frios, canapÃ©s, mini sanduÃ­ches e porÃ§Ãµes individuais servidos em eventos atendidos pelo Dâ€™Faria.\n\nPeÃ§a central\n\nA terrine de roquefort com nozes chega Ã  mesa servida em uma tela, como um quadro que abre a ilha. O acabamento Ã© feito na hora, com ervas frescas, e ao redor ficam pÃ£es, torradas e antepastos que a acompanham.\n\nFinger foods\n\nPorÃ§Ãµes individuais pensadas para serem servidas em um Ãºnico movimento: cones de massa crocante recheados com tabule, finalizados com hortelÃ£ e montados em tÃ¡buas de madeira.\n\nServiÃ§o\n\nDurante a recepÃ§Ã£o, a equipe do Dâ€™Faria circula entre os convidados servindo os finger foods em bandejas â€” o cardÃ¡pio chega fresco, na medida, sem que ninguÃ©m precise sair do lugar.\n\nQueijos\n\nQueijos como o brie entram na ilha acompanhados de mel, laranja e nozes â€” um contraste doce e fresco junto aos frios e pÃ£es da recepÃ§Ã£o.\n\nFrios\n\nSalames, queijos, batatinhas, tomates cereja e frutas da estaÃ§Ã£o: a tÃ¡bua de frios que costuma reunir os primeiros grupos de convidados em volta da mesa.\n\nGaleria",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-5",
        "titulo": "Mais fotos dos eventos",
        "texto": "Registros de tÃ¡buas de frios, canapÃ©s, mini sanduÃ­ches e porÃ§Ãµes individuais servidos em eventos atendidos pelo Dâ€™Faria.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-6",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-11",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google",
          "ðŸ‘¨â€ðŸ³ Painel do Chef"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.571Z"
  },
  "esculturas": {
    "id": "esculturas",
    "nome": "ðŸ‰ Esculturas em Frutas",
    "categoria": "Gastronomia",
    "slug": "/gastronomia/esculturas-em-frutas",
    "arquivo": "gastronomia/esculturas-em-frutas.html",
    "meta_title": "Esculturas em Frutas | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Esculturas em frutas como elemento de apresentaÃ§Ã£o das ilhas e estaÃ§Ãµes gastronÃ´micas do D&#x27;Faria em casamentos e eventos.",
    "hero": {
      "titulo": "Esculturas em Frutas",
      "subtitulo": "Trabalho manual que dÃ¡ volume, cor e centro Ã s ilhas. As esculturas em frutas compÃµem a apresentaÃ§Ã£o das mesas e estaÃ§Ãµes.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Esculturas em Frutas"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Onde aparecem",
        "texto": "Compondo ilhas de frios e finger foods, mesas de recepÃ§Ã£o e estaÃ§Ãµes gastronÃ´micas, conforme a proposta contratada.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Veja tambÃ©m",
        "texto": "Arte &amp; Maestria Manual",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Galeria de Esculturas em Frutas",
        "texto": "Cada escultura Ã© uma obra Ãºnica produzida artesanalmente pelo chef Cristiano de Faria e equipe para encantar seus convidados e coroar a apresentaÃ§Ã£o gastronÃ´mica do seu evento.\n\nComposiÃ§Ã£o monumental com melancias entalhadas em flor e mensagem festiva, ladeada por coroas de abacaxi e folhas de palmeira.\n\nEscultura de cisne em melÃ£o espanhol com melancia em pÃ©talas e casal de pÃ¡ssaros esculpidos, cercada por seleÃ§Ã£o de frutas frescas.\n\nMelancia floral central com barquetes de abacaxi cortados em leque, cisne em maÃ§Ã£ verde e cascata de uvas e cerejas.\n\nGrau mÃ¡ximo de precisÃ£o em camadas tridimensionais que revelam o degradÃª natural da casca branca Ã  polpa vermelha viva.\n\nEscultura delicada com textura aveludada nas pÃ©talas, montada especialmente para ilhas de alta sofisticaÃ§Ã£o.\n\nEntalhe rendado na casca do melÃ£o amarelo formando uma alÃ§a perfeita, preenchida com morangos frescos e uvas selecionadas.\n\nPÃ¡ssaros esculpidos diretamente na coroa do abacaxi com morangos silvestres, kiwis laminados e melÃ£o.\n\nPadrÃ£o floral concÃªntrico esculpido Ã  mÃ£o livre sobre melancia fresca, acompanhado de fatias triangulares para os convidados.\n\nDetalhe dos cortes em Ã¢ngulo preciso com detalhes foliares esculpidos aproveitando a prÃ³pria casca verde.\n\nTrabalho de tipografia na casca com moldura de rosas em trÃªs dimensÃµes sobre farta base de mangas, pÃªssegos e ameixas.\n\nCubos refrescantes de mamÃ£o papaya com coraÃ§Ã£o de melÃ£o esculpido e flor de gomos de laranja com cereja marrasquino.\n\nComposiÃ§Ã£o de Ano Novo com cortes chanfrados e contraste marcante entre o verde da casca e o vermelho da polpa.\n\nGrande arranjo de celebraÃ§Ã£o com flor de mamÃ£o com kiwi ao centro e abundÃ¢ncia de frutas da estaÃ§Ã£o.\n\nLetreiro entalhado em melancia rodeado por maÃ§Ã£s gala, ameixas frescas, peras williams e uvas thompson.\n\nEntalhe rendado na melancia com leque de pÃ©talas, kiwis e cerejas frescas.\n\nDeseja uma escultura personalizada com o tema ou monograma do seu evento?",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-4",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.572Z"
  },
  "estacoes": {
    "id": "estacoes",
    "nome": "ðŸ½ï¸ EstaÃ§Ãµes GastronÃ´micas",
    "categoria": "Gastronomia",
    "slug": "/gastronomia/estacoes-gastronomicas",
    "arquivo": "gastronomia/estacoes-gastronomicas.html",
    "meta_title": "EstaÃ§Ãµes GastronÃ´micas | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "EstaÃ§Ãµes gastronÃ´micas montadas no local do evento, com preparo e serviÃ§o ao vivo pela equipe do D&#x27;Faria.",
    "hero": {
      "titulo": "EstaÃ§Ãµes GastronÃ´micas",
      "subtitulo": "EstaÃ§Ãµes distribuem o fluxo de convidados e transformam o serviÃ§o em experiÃªncia. Cada uma Ã© montada com equipe, equipamento e peÃ§as prÃ³prias.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "EstaÃ§Ãµes GastronÃ´micas"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Montagem",
        "texto": "A quantidade e o tipo de estaÃ§Ã£o sÃ£o definidos pelo nÃºmero de convidados, pelo espaÃ§o disponÃ­vel e pelo formato do evento.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "ComposiÃ§Ã£o possÃ­vel",
        "texto": "EstaÃ§Ãµes podem incluir churrasco premium, parrilla argentina, costela de chÃ£o, ilhas de frios e finger foods e roda-gigante, quando fizer parte da proposta.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja tambÃ©m",
        "texto": "",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.573Z"
  },
  "locacao": {
    "id": "locacao",
    "nome": "ðŸª‘ LocaÃ§Ã£o de Materiais",
    "categoria": "ServiÃ§os",
    "slug": "/alugue-material-para-festa",
    "arquivo": "alugue-material-para-festa.html",
    "meta_title": "Dâ€™Faria LocaÃ§Ãµes | Aluguel de Materiais para Festas em CesÃ¡rio Lange",
    "meta_description": "Aluguel de materiais para festas em CesÃ¡rio Lange e regiÃ£o: mesas, cadeiras, louÃ§as, rechauds, suqueiras, suportes e utensÃ­lios. Consulte o Dâ€™Faria LocaÃ§Ãµes.",
    "hero": {
      "titulo": "O Dâ€™Faria LocaÃ§Ãµes â€” Aluguel de Materiais para Festas e Eventos",
      "subtitulo": "A operaÃ§Ã£o que vocÃª conheceu como FAÃ‡A A FESTA agora estÃ¡ em uma nova fase: o Dâ€™Faria LocaÃ§Ãµes. Seguimos com mesas, cadeiras, louÃ§as, copos, taÃ§as, toalhas e outros materiais para festas e eventos â€” prontos para deixar a sua comemoraÃ§Ã£o completa, do jantar em casa Ã  festa grande.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "O Dâ€™Faria LocaÃ§Ãµes â€” Aluguel de Materiais para Festas e Eventos"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Materiais disponÃ­veis para locaÃ§Ã£o",
        "texto": "Todas as fotos sÃ£o dos materiais reais que ficam Ã  disposiÃ§Ã£o para aluguel.\n\nConjuntos para acomodar os convidados com conforto, em qualquer tamanho de festa.\n\nConsultar disponibilidade Cadeira plÃ¡stica branca Consultar disponibilidade Mesas e cadeiras montadas para o evento Consultar disponibilidade Mesa retangular dobrÃ¡vel Consultar disponibilidade Dâ€™Faria LocaÃ§Ãµes\n\nMesas e cadeiras conferidas peÃ§a por peÃ§a antes de cada locaÃ§Ã£o: limpas, firmes e prontas para acomodar seus convidados com conforto do inÃ­cio ao fim da festa.\n\nMontagem clÃ¡ssica de salÃ£o: mesa redonda vestida e cadeiras com capa, na cor que combinar com a sua festa.\n\nConsultar disponibilidade Mesa redonda com toalha azul marinho Consultar disponibilidade Mesa redonda com toalha branca Consultar disponibilidade Dâ€™Faria LocaÃ§Ãµes\n\nToalhas e capas lavadas e passadas com o mesmo cuidado que o Dâ€™Faria dedica aos seus prÃ³prios eventos, para que cada mesa chegue impecÃ¡vel ao seu salÃ£o.\n\nPeÃ§as para montar a mesa posta e servir bebidas com apresentaÃ§Ã£o bonita.\n\nConsultar disponibilidade Prato raso de porcelana Consultar disponibilidade TaÃ§a Paulista Consultar disponibilidade TaÃ§a Diamond Consultar disponibilidade XÃ­cara com pires e colher Consultar disponibilidade Dâ€™Faria LocaÃ§Ãµes\n\nPratos, taÃ§as e xÃ­caras sÃ£o higienizados e revisados um a um. A TaÃ§a Paulista e a TaÃ§a Diamond dÃ£o brilho Ã  mesa posta e valorizam cada brinde.\n\nDâ€™Faria LocaÃ§Ãµes\n\nPratos, taÃ§as e xÃ­caras sÃ£o higienizados e revisados um a um. A TaÃ§a Paulista e a TaÃ§a Diamond dÃ£o brilho Ã  mesa posta e valorizam cada brinde.\n\nToalhas xadrez em vÃ¡rias cores para dar identidade Ã  decoraÃ§Ã£o da festa.\n\nConsultar disponibilidade Dâ€™Faria LocaÃ§Ãµes\n\nToalhas em vÃ¡rias cores para compor a decoraÃ§Ã£o da sua festa. Cada peÃ§a Ã© lavada, conferida e dobrada com cuidado, pronta para deixar o ambiente acolhedor e bem apresentado.\n\nDâ€™Faria LocaÃ§Ãµes\n\nToalhas em vÃ¡rias cores para compor a decoraÃ§Ã£o da sua festa. Cada peÃ§a Ã© lavada, conferida e dobrada com cuidado, pronta para deixar o ambiente acolhedor e bem apresentado.\n\nBandejas, panelas e suportes para preparar e servir com organizaÃ§Ã£o.\n\nConsultar disponibilidade Rechaud retangular com cuba Ãºnica Consultar disponibilidade Rechaud redondo com tampa de vidro Consultar disponibilidade Rechaud redondo com alÃ§as Consultar disponibilidade Bandejas redondas de inox Consultar disponibilidade PanelÃµes de alumÃ­nio Consultar disponibilidade Talheres (garfos e facas) Consultar disponibilidade Suporte de madeira em trÃªs andares Consultar disponibilidade Roda gigante para frios, doces ou finger foods Consultar disponibilidade Samovar em prata para chÃ¡ ou cafÃ© Consultar disponibilidade Samovar prateado ornamentado para cafÃ© Consultar disponibilidade AÃ§ucareiro de inox com tampa Consultar disponibilidade Suqueira de vidro com torneira Consultar disponibilidade Panela de barro com tampa Consultar disponibilidade Conjunto de panelas de barro com tampa Consultar disponibilidade Travessa redonda de vidro Consultar disponibilidade Suporte redondo em trÃªs andares Consultar disponibilidade Suportes para buffet e finger foods Consultar disponibilidade EspÃ¡tula de inox para bolo Consultar disponibilidade Pegador de massa de inox Consultar disponibilidade Pegador de inox dentado Consultar disponibilidade Dâ€™Faria LocaÃ§Ãµes\n\nRÃ©chauds, bandejas, samovares e suportes sÃ£o mantidos limpos e polidos, para que a apresentaÃ§Ã£o dos alimentos seja tÃ£o bonita quanto o sabor.\n\nApoio para bebidas e cozinha, para a operaÃ§Ã£o do evento funcionar sem improviso.\n\nConsultar disponibilidade FogÃ£o industrial 3 bocas Consultar disponibilidade Estrutura reforÃ§ada do fogÃ£o industrial Consultar disponibilidade Chapa dupla para crepe francÃªs Consultar disponibilidade Garrafa tÃ©rmica de inox Consultar disponibilidade Acervo de materiais para locaÃ§Ã£o Consultar disponibilidade SalÃ£o montado com os nossos materiais de locaÃ§Ã£o. Os materiais tambÃ©m acompanham os eventos que o Dâ€™Faria atende em condomÃ­nios da regiÃ£o, como o Ninho Verde I Eco Residence .\n\nCesÃ¡rio Lange e regiÃ£o",
        "imagem": null,
        "itens": [
          "Conjunto de mesa com 4 cadeiras Consultar disponibilidade",
          "Cadeira plÃ¡stica branca Consultar disponibilidade",
          "Mesas e cadeiras montadas para o evento Consultar disponibilidade",
          "Mesa retangular dobrÃ¡vel Consultar disponibilidade",
          "Dâ€™Faria LocaÃ§Ãµes Conforto para receber Mesas e cadeiras conferidas peÃ§a por peÃ§a antes de cada locaÃ§Ã£o: limpas, firmes e prontas para acomodar seus convidados com conforto do inÃ­cio ao fim da festa.",
          "Mesa redonda com toalha de renda branca Consultar disponibilidade",
          "Mesa redonda com toalha azul marinho Consultar disponibilidade",
          "Mesa redonda com toalha branca Consultar disponibilidade",
          "Dâ€™Faria LocaÃ§Ãµes SalÃ£o vestido com elegÃ¢ncia Toalhas e capas lavadas e passadas com o mesmo cuidado que o Dâ€™Faria dedica aos seus prÃ³prios eventos, para que cada mesa chegue impecÃ¡vel ao seu salÃ£o.",
          "Prato raso branco trabalhado Consultar disponibilidade"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "LocaÃ§Ã£o de materiais para festas em CesÃ¡rio Lange e regiÃ£o",
        "texto": "O Dâ€™Faria fica na R. Quinze de Novembro, 910 , Centro , em CesÃ¡rio Lange/SP. Daqui atendemos festas e eventos na cidade e na regiÃ£o, com o mesmo cuidado do buffet em CesÃ¡rio Lange . Se preferir o evento completo, conheÃ§a tambÃ©m os cardÃ¡pios , as Ilhas de Frios e Finger Foods ou peÃ§a um orÃ§amento .\n\nComo funciona",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Quatro passos atÃ© a sua festa montada",
        "texto": "Veja o catÃ¡logo e separe o que a sua festa precisa.\n\nDiga o dia do evento e quantas peÃ§as vocÃª quer.\n\nConferimos o estoque para a data informada.\n\nAcertamos entrega, retirada e os detalhes finais.\n\nPerguntas frequentes",
        "imagem": null,
        "itens": [
          "01 Escolha os materiais Veja o catÃ¡logo e separe o que a sua festa precisa.",
          "02 Informe data e quantidade Diga o dia do evento e quantas peÃ§as vocÃª quer.",
          "03 Consultamos a disponibilidade Conferimos o estoque para a data informada.",
          "04 Combinamos a locaÃ§Ã£o Acertamos entrega, retirada e os detalhes finais."
        ]
      },
      {
        "id": "sec-4",
        "titulo": "DÃºvidas sobre a locaÃ§Ã£o",
        "texto": "Mesas e cadeiras, toalhas e capas, louÃ§as, copos, taÃ§as, xÃ­caras, rechauds, bandejas, panelas, talheres, suportes para buffet e finger foods, samovares, suqueira, champanheira, fogÃ£o industrial, chapa para crepe e garrafa tÃ©rmica. Todos os itens do catÃ¡logo aparecem com foto real.\n\nNÃ£o. A locaÃ§Ã£o atende festas com ou sem buffet contratado do Dâ€™Faria.\n\nO Dâ€™Faria fica em CesÃ¡rio Lange/SP e atende a cidade e a regiÃ£o, incluindo condomÃ­nios como o Ninho Verde I Eco Residence.\n\nPelo WhatsApp da locaÃ§Ã£o, (15) 99769-7332. Informe a data do evento, os materiais e as quantidades para conferirmos o estoque.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-5",
        "titulo": "Vai fazer uma festa?",
        "texto": "Alugue o material que vocÃª precisa.\n\nConsultar disponibilidade pelo WhatsApp FAÃ‡A A FESTA Â· (15) 99769-7332\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google",
          "ðŸ‘¨â€ðŸ³ Painel do Chef"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {
      "faq": [
        {
          "pergunta": "Quais materiais o Dâ€™Faria LocaÃ§Ãµes tem para alugar?",
          "resposta": "Mesas e cadeiras, toalhas e capas, louÃ§as, copos, taÃ§as, xÃ­caras, rechauds, bandejas, panelas, talheres, suportes para buffet e finger foods, samovares, suqueira, champanheira, fogÃ£o industrial, chapa para crepe e garrafa tÃ©rmica. Todos os itens do catÃ¡logo aparecem com foto real."
        },
        {
          "pergunta": "Preciso contratar o buffet para alugar os materiais?",
          "resposta": "NÃ£o. A locaÃ§Ã£o atende festas com ou sem buffet contratado do Dâ€™Faria."
        },
        {
          "pergunta": "Qual regiÃ£o o Dâ€™Faria LocaÃ§Ãµes atende?",
          "resposta": "O Dâ€™Faria fica em CesÃ¡rio Lange/SP e atende a cidade e a regiÃ£o, incluindo condomÃ­nios como o Ninho Verde I Eco Residence."
        },
        {
          "pergunta": "Como consulto a disponibilidade?",
          "resposta": "Pelo WhatsApp da locaÃ§Ã£o, (15) 99769-7332. Informe a data do evento, os materiais e as quantidades para conferirmos o estoque."
        }
      ]
    },
    "updated_at": "2026-11-22T17:54:55.575Z"
  },
  "galeria": {
    "id": "galeria",
    "nome": "ðŸ“¸ Galeria de Fotos",
    "categoria": "MÃ­dia",
    "slug": "/galeria",
    "arquivo": "galeria.html",
    "meta_title": "Galeria de Momentos InesquecÃ­veis | D&#x27;Faria",
    "meta_description": "Fotografias reais de eventos do D&#x27;Faria: ilhas de frios, churrasco, costela de chÃ£o, parrilla, finger foods, montagem e serviÃ§o.",
    "hero": {
      "titulo": "Galeria de Momentos InesquecÃ­veis",
      "subtitulo": "Fotografias de eventos realizados pelo Dâ€™Faria Gastronomia e Eventos: gastronomia, montagem, serviÃ§o e equipe.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Galeria de Momentos InesquecÃ­veis"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google",
          "ðŸ‘¨â€ðŸ³ Painel do Chef"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {
      "galeria": []
    },
    "updated_at": "2026-11-22T17:54:55.576Z"
  },
  "depoimentos": {
    "id": "depoimentos",
    "nome": "â­ Depoimentos de Clientes",
    "categoria": "Institucional",
    "slug": "/depoimentos",
    "arquivo": "depoimentos.html",
    "meta_title": "Depoimentos de clientes | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Depoimentos reais de clientes do D&#x27;Faria e acesso Ã s avaliaÃ§Ãµes publicadas no perfil oficial da empresa no Google.",
    "hero": {
      "titulo": "O que nossos clientes dizem",
      "subtitulo": "Publicamos apenas avaliaÃ§Ãµes reais de clientes, vindas do perfil oficial do Dâ€™Faria no Google.",
      "imagem": {
        "src": "/__l5e/assets-v1/e5d011ca-5a5d-4743-8fa0-987e11261d08/salao-mesas-redondas-recepcao-dfaria.webp",
        "alt": "SalÃ£o nobre montado para recepÃ§Ã£o do Dâ€™Faria"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Nota 5.0 com 57 avaliaÃ§Ãµes no Google",
        "texto": "AvaliaÃ§Ãµes reais de clientes, publicadas no perfil oficial do Dâ€™Faria.\n\nCaroline CÃ¢ncio de Oliveira Â· 2 semanas atrÃ¡s\n\nLarissa Ferreira Â· um mÃªs atrÃ¡s\n\nEmilyn Monreal Â· um mÃªs atrÃ¡s\n\nElias Miguel InÃ¡cio Silvestre Â· 2 meses atrÃ¡s\n\nMarili Aparecida Â· 2 meses atrÃ¡s\n\nAvaliaÃ§Ãµes publicadas no Perfil da Empresa no Google.",
        "imagem": {
          "src": "/reviews/caroline-cancio-de-oliveira.png",
          "alt": "Foto de perfil de Caroline CÃ¢ncio de Oliveira no Google"
        },
        "itens": [
          "â˜…â˜…â˜…â˜…â˜… â€œQuero agradecer ao buffet por todo o carinho, dedicaÃ§Ã£o e profissionalismo! â¤ï¸ Tudo estava maravilhoso, desde o atendimento atÃ© a organizaÃ§Ã£o, a comida e cada detalhe. VocÃªs fizeram parte de um momento muito especial e ajudaram a tornar os 15 anos da minha filha inesquecÃ­veis. Foi tudo feito com muito capricho e amor! GratidÃ£o por fazerem parte desse sonho! ðŸ©µâœ¨â€ Caroline CÃ¢ncio de Oliveira Â· 2 semanas atrÃ¡s Ver avaliaÃ§Ã£o no Google",
          "â˜…â˜…â˜…â˜…â˜… â€œComida e atendimento SENSACIONAL! Nunca comi comida tÃ£o gostosa como comi nesses dias com esse buffet.â€ Larissa Ferreira Â· um mÃªs atrÃ¡s Ver avaliaÃ§Ã£o no Google",
          "â˜…â˜…â˜…â˜…â˜… â€œNossa experiÃªncia com o buffet foi excelente! A comida claramente foi preparada com muito capricho, estava saborosa e muito bem temperada. A mesa foi muito bem servida e organizada, com bastante atenÃ§Ã£o aos detalhes. AlÃ©m da qualidade da comida, destaco o atendimento. O Cristiano e toda a equipe foram extremamente solÃ­citos, educados e colaborativos durante todo o evento. Mostraram-se flexÃ­veis diante das nossas necessidades especÃ­ficas, foram cuidadosos com os ajustes de horÃ¡rio e sempre muito responsivos aos feedbacks e Ã s demandas que surgiram. Os profissionais apresentaram-se responsÃ¡veis, agradÃ¡veis, bem articulados na busca por soluÃ§Ãµes, transmitindo confianÃ§a. Certamente voltaremos a contratÃ¡-los em outras oportunidades. Recomendamos muito!â€ Emilyn Monreal Â· um mÃªs atrÃ¡s Ver avaliaÃ§Ã£o no Google",
          "â˜…â˜…â˜…â˜…â˜… â€œQuero deixar aqui o meu agradecimento especial ao Buffet D&#x27;Faria e Gastronomia Por todo o excelente serviÃ§o prestado. Foi tudo preparado com muito carinho, dedicaÃ§Ã£o e profissionalismo, e isso fez toda a diferenÃ§a. AgradeÃ§o de coraÃ§Ã£o por todo o cuidado e atenÃ§Ã£o em cada detalhe. Recomendo muito o trabalho de vocÃªs! Muito obrigado por fazerem parte desse momento e contribuÃ­rem para que tudo fosse ainda mais especial! ðŸ‘ðŸ¼â¤ï¸ðŸ½ï¸â€ Elias Miguel InÃ¡cio Silvestre Â· 2 meses atrÃ¡s Ver avaliaÃ§Ã£o no Google",
          "â˜…â˜…â˜…â˜…â˜… â€œContratar o Dâ€™Faria Gastronomia e Eventos foi uma das melhores decisÃµes para o nosso evento. Desde o primeiro contato fomos atendidos com muito profissionalismo e atenÃ§Ã£o. A qualidade das carnes, especialmente a costela no fogo de chÃ£o e a parrilla, impressionou todos os convidados. A equipe foi extremamente educada, organizada e cuidou de cada detalhe com muito capricho. Recebemos muitos elogios pela comida e pelo atendimento. Tudo foi servido no tempo certo, com excelente apresentaÃ§Ã£o e um sabor impecÃ¡vel. Recomendo de olhos fechados para quem procura um buffet de alto padrÃ£o e quer proporcionar uma experiÃªncia inesquecÃ­vel aos convidados. Com certeza contrataremos novamente!â€ Marili Aparecida Â· 2 meses atrÃ¡s Ver avaliaÃ§Ã£o no Google"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "A confianÃ§a se prova na mesa. Veja como o Dâ€™Faria Ã© avaliado.",
        "texto": "AvaliaÃ§Ãµes reais de clientes, direto no perfil oficial no Google.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google",
          "ðŸ‘¨â€ðŸ³ Painel do Chef"
        ]
      }
    ],
    "galeria": [
      {
        "src": "/reviews/caroline-cancio-de-oliveira.png",
        "alt": "Foto de perfil de Caroline CÃ¢ncio de Oliveira no Google"
      },
      {
        "src": "/reviews/larissa-ferreira.png",
        "alt": "Foto de perfil de Larissa Ferreira no Google"
      },
      {
        "src": "/reviews/emilyn-monreal.png",
        "alt": "Foto de perfil de Emilyn Monreal no Google"
      },
      {
        "src": "/reviews/elias-miguel-inacio-silvestre.png",
        "alt": "Foto de perfil de Elias Miguel InÃ¡cio Silvestre no Google"
      },
      {
        "src": "/reviews/marili-aparecida.png",
        "alt": "Foto de perfil de Marili Aparecida no Google"
      }
    ],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.577Z"
  },
  "faq": {
    "id": "faq",
    "nome": "â“ Perguntas Frequentes (FAQ)",
    "categoria": "Atendimento",
    "slug": "/faq",
    "arquivo": "faq.html",
    "meta_title": "Perguntas frequentes | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "DÃºvidas sobre contrataÃ§Ã£o de buffet, cardÃ¡pio, degustaÃ§Ã£o, equipe, estrutura, prazos, cidades atendidas e orÃ§amento.",
    "hero": {
      "titulo": "Perguntas frequentes",
      "subtitulo": "As dÃºvidas mais comuns de quem estÃ¡ organizando um evento com o Dâ€™Faria.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Perguntas frequentes"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Eu vou transformar o seu evento em uma experiÃªncia memorÃ¡vel e inesquecÃ­vel.",
        "texto": "Conte a data, o local e o nÃºmero de convidados. A partir daÃ­ montamos a proposta.\n\nSolicite seu orÃ§amento Pedir pelo formulÃ¡rio Dâ€™Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ Painel do Chef",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google",
          "ðŸ‘¨â€ðŸ³ Painel do Chef"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {
      "faq": [
        {
          "pergunta": "Quais tipos de eventos o D'Faria atende?",
          "resposta": "Casamentos, eventos corporativos, formaturas, aniversÃ¡rios, festas de 15 anos, bodas, confraternizaÃ§Ãµes e celebraÃ§Ãµes em geral, em diferentes portes."
        },
        {
          "pergunta": "Existem opÃ§Ãµes vegetarianas e veganas?",
          "resposta": "Sim. O cardÃ¡pio Ã© montado junto com o cliente e pode contemplar opÃ§Ãµes vegetarianas e veganas, alÃ©m de restriÃ§Ãµes alimentares informadas na fase de proposta."
        },
        {
          "pergunta": "Quanto custa contratar um buffet?",
          "resposta": "O valor depende do nÃºmero de convidados, do cardÃ¡pio, do formato do serviÃ§o, da estrutura necessÃ¡ria e da distÃ¢ncia atÃ© o local. Por isso a proposta Ã© feita caso a caso, sem tabela fixa."
        },
        {
          "pergunta": "O que estÃ¡ incluÃ­do no buffet?",
          "resposta": "Conforme a proposta contratada, o serviÃ§o pode envolver gastronomia, equipe especializada, mobiliÃ¡rio, enxoval, louÃ§as, prataria, rÃ©chauds, estaÃ§Ãµes gastronÃ´micas e a estrutura necessÃ¡ria para a execuÃ§Ã£o do evento."
        },
        {
          "pergunta": "Com quanto tempo de antecedÃªncia devo contratar?",
          "resposta": "Quanto antes, maior a disponibilidade de data â€” especialmente em alta temporada de casamentos e no fim de ano. Consulte a data desejada pelo WhatsApp para verificar a agenda."
        },
        {
          "pergunta": "Como funciona a degustaÃ§Ã£o?",
          "resposta": "A degustaÃ§Ã£o Ã© combinada durante a negociaÃ§Ã£o da proposta, conforme o tipo de evento e o cardÃ¡pio em estudo. Fale com a equipe para alinhar as condiÃ§Ãµes."
        },
        {
          "pergunta": "O buffet fornece mesas, louÃ§as e rÃ©chauds?",
          "resposta": "Sim, esses itens podem ser fornecidos conforme a proposta contratada, incluindo mobiliÃ¡rio, enxoval, louÃ§as, prataria e peÃ§as de serviÃ§o."
        },
        {
          "pergunta": "Como Ã© dimensionada a equipe?",
          "resposta": "A equipe Ã© definida pelo nÃºmero de convidados, pelo formato do serviÃ§o e pela estrutura do local, de modo a manter o ritmo de atendimento durante todo o evento."
        },
        {
          "pergunta": "O que acontece se o nÃºmero de convidados mudar?",
          "resposta": "Ajustes de nÃºmero de convidados devem ser informados dentro do prazo combinado na proposta, para que cardÃ¡pio, equipe e estrutura sejam redimensionados."
        },
        {
          "pergunta": "O D'Faria atende chÃ¡caras, sÃ­tios, condomÃ­nios, residÃªncias e empresas?",
          "resposta": "Sim. O serviÃ§o Ã© executado em chÃ¡caras, sÃ­tios, condomÃ­nios, residÃªncias, espaÃ§os de eventos e na prÃ³pria sede das empresas."
        },
        {
          "pergunta": "O D'Faria atende eventos corporativos?",
          "resposta": "Sim. Coffee breaks, reuniÃµes, treinamentos, palestras, workshops, confraternizaÃ§Ãµes, festas de fim de ano, comemoraÃ§Ãµes de metas, aniversÃ¡rios empresariais, almoÃ§os, jantares, coquetÃ©is e lanÃ§amentos."
        },
        {
          "pergunta": "O D'Faria atende eventos de grande porte?",
          "resposta": "Sim. A experiÃªncia profissional de Cristiano Dâ€™Faria inclui a supervisÃ£o de uma grande operaÃ§Ã£o realizada no Center Norte, em SÃ£o Paulo, para aproximadamente 8.500 pessoas, com 850 mesas de 10 lugares, 12 pontos de buffet, 6 ilhas de open bar e centenas de profissionais envolvidos. Essa operaÃ§Ã£o pertence Ã  sua trajetÃ³ria profissional anterior Ã  criaÃ§Ã£o do Dâ€™Faria Gastronomia e Eventos."
        },
        {
          "pergunta": "Como solicitar um orÃ§amento preciso?",
          "resposta": "Informe data, cidade e local, nÃºmero aproximado de convidados, tipo de evento e serviÃ§o de interesse. Com esses dados a proposta sai mais prÃ³xima da realidade do seu evento."
        },
        {
          "pergunta": "O D'Faria atende quais cidades e regiÃµes?",
          "resposta": "CesÃ¡rio Lange, TatuÃ­, Boituva, Cerquilho, TietÃª, Itapetininga, Conchas, Pereiras e Porangaba, alÃ©m de condomÃ­nios e espaÃ§os de eventos da regiÃ£o."
        },
        {
          "pergunta": "Como funciona a contrataÃ§Ã£o e definiÃ§Ã£o da proposta?",
          "resposta": "Depois do primeiro contato, sÃ£o levantadas as informaÃ§Ãµes do evento, montada a proposta com cardÃ¡pio, equipe e estrutura e, com o aceite, a data Ã© reservada na agenda."
        }
      ]
    },
    "updated_at": "2026-11-22T17:54:55.578Z"
  },
  "contato": {
    "id": "contato",
    "nome": "ðŸ“ž Contato & LocalizaÃ§Ã£o",
    "categoria": "Atendimento",
    "slug": "/contato",
    "arquivo": "contato.html",
    "meta_title": "Contato | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Fale com o D&#x27;Faria: R. Quinze de Novembro, 910, Centro, CesÃ¡rio Lange - SP. Telefone e WhatsApp (15) 99683-4734.",
    "hero": {
      "titulo": "Contato",
      "subtitulo": "Fale com o Dâ€™Faria por telefone, WhatsApp ou pelo formulÃ¡rio de orÃ§amento.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Contato"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "D&#x27;Faria Gastronomia e Eventos",
        "texto": "",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Canais oficiais",
        "texto": "",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps",
          "Instagram @dfariagastronomia",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google",
          "ðŸ‘¨â€ðŸ³ Painel do Chef"
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Como chegar",
        "texto": "",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-4",
        "titulo": "A confianÃ§a se prova na mesa. Veja como o Dâ€™Faria Ã© avaliado.",
        "texto": "AvaliaÃ§Ãµes reais de clientes, direto no perfil oficial no Google.\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 â€“ Centro CesÃ¡rio Lange â€“ SP Â· CEP 18285-049 Brasil\n\nAtendimento 09:00 â€“ 17:00",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "WhatsApp",
          "Google Maps"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Eventos",
        "texto": "",
        "imagem": null,
        "itens": [
          "Casamentos",
          "Eventos Corporativos",
          "Formaturas",
          "AniversÃ¡rios, Bodas e CelebraÃ§Ãµes",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "CardÃ¡pios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de ChÃ£o",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "EstaÃ§Ãµes GastronÃ´micas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O Dâ€™Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "OrÃ§amento"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "RegiÃµes atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "CesÃ¡rio Lange",
          "TatuÃ­",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "TietÃª",
          "Residencial Village ManacÃ¡",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Canais oficiais",
        "texto": "Â© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliaÃ§Ãµes no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {
      "contato": {
        "whatsapp_display": "(15) 99683-4734",
        "whatsapp_numero": "5515996834734",
        "telefone_display": "(15) 3287-1498",
        "telefone_numero": "+551532871498",
        "email": "contato@dfariagastronomia.com.br",
        "endereco": "Rua 15 de Novembro, 910 â€” Centro, CesÃ¡rio Lange - SP, 18285-000",
        "horario": "Segunda a SÃ¡bado, das 08h Ã s 18h",
        "instagram": "https://www.instagram.com/dfariagastronomia/"
      }
    },
    "updated_at": "2026-11-22T17:54:55.579Z"
  }
};

// Estado global do painel
const state = {
  user: null,
  loginEmail: '',
  token: localStorage.getItem('df_chef_token') || null,
  refreshToken: localStorage.getItem('df_chef_refresh') || null,
  viewMode: 'paginas', // 'paginas' ou 'cardapios'
  categories: [],
  menus: [],
  pages: DEFAULT_PAGES,
  pricingConfig: null,
  selectedMenu: null,
  selectedPage: DEFAULT_PAGES['home'],
  activeTab: 'geral', // CardÃ¡pios: 'geral', 'secoes', 'colar' | PÃ¡ginas: 'banner', 'secoes', 'especifico', 'seo'
  loading: false,
  feedback: null,
  pasteText: '',
  // Painel 2.0
  papel: null,          // 'dono' | 'editor' | null (sem acesso)
  meuNome: '',
  temaSalvo: {},
  temaRascunho: null,
  usuarios: null,
  novoUsuario: null,
  confirmar: null,
  publicacao: null,
  apPagina: '/',
  apCelular: false
};

// Cliente REST / Auth Supabase leve e resiliente
const api = {
  headers() {
    const h = {
      'apikey': SUPABASE_KEY,
      'Content-Type': 'application/json'
    };
    if (state.token) {
      h['Authorization'] = 'Bearer ' + state.token;
    }
    return h;
  },

  async login(email, password) {
    const res = await fetch(SUPABASE_URL + '/auth/v1/token?grant_type=password', {
      method: 'POST',
      headers: { 'apikey': SUPABASE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) {
      const msg = data.error_description || data.msg || data.message || 'Falha no login';
      throw new Error(msg);
    }
    return data;
  },

  // Renova a sessÃ£o com o refresh token (antes a sessÃ£o expirava e o painel "deslogava" sozinho)
  async refresh() {
    if (!state.refreshToken) return false;
    const res = await fetch(SUPABASE_URL + '/auth/v1/token?grant_type=refresh_token', {
      method: 'POST',
      headers: { 'apikey': SUPABASE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: state.refreshToken })
    });
    if (!res.ok) return false;
    const data = await res.json();
    state.token = data.access_token;
    state.refreshToken = data.refresh_token;
    if (data.user) state.user = data.user;
    localStorage.setItem('df_chef_token', state.token);
    localStorage.setItem('df_chef_refresh', state.refreshToken);
    return true;
  },

  async getUser() {
    if (!state.token) return null;
    const res = await fetch(SUPABASE_URL + '/auth/v1/user', {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + state.token }
    });
    if (!res.ok) return null;
    return await res.json();
  },

  async getCategories() {
    try {
      const res = await fetch(SUPABASE_URL + '/rest/v1/site_categories?select=*&order=ordem.asc', {
        headers: api.headers()
      });
      if (!res.ok) return [];
      return await res.json();
    } catch (e) {
      return [];
    }
  },

  async getMenus() {
    try {
      const res = await fetch(SUPABASE_URL + '/rest/v1/site_menus?select=*&order=ordem.asc', {
        headers: api.headers()
      });
      if (!res.ok) return [];
      return await res.json();
    } catch (e) {
      return [];
    }
  },

  async getPricingConfig() {
    try {
      const res = await fetch(SUPABASE_URL + '/rest/v1/site_pricing_config?id=eq.primary', {
        headers: api.headers()
      });
      if (!res.ok) return null;
      const d = await res.json();
      return d[0] || null;
    } catch (e) {
      return null;
    }
  },

  async getPages() {
    // 1. Tentar tabela dedicada 'site_pages'
    try {
      const resP = await fetch(SUPABASE_URL + '/rest/v1/site_pages?select=*', {
        headers: api.headers()
      });
      if (resP.ok) {
        const rows = await resP.json();
        if (Array.isArray(rows) && rows.length > 0) {
          const mapa = { ...DEFAULT_PAGES };
          for (const r of rows) {
            mapa[r.id] = { ...mapa[r.id], ...r };
          }
          return mapa;
        }
      }
    } catch (e) {}

    // 2. Tentar 'site_catalog_config'
    try {
      const resC = await fetch(SUPABASE_URL + '/rest/v1/site_catalog_config?select=*', {
        headers: api.headers()
      });
      if (resC.ok) {
        const rows = await resC.json();
        if (Array.isArray(rows)) {
          const pageRows = rows.filter(r => r.id && r.id.startsWith('page_'));
          if (pageRows.length > 0) {
            const mapa = { ...DEFAULT_PAGES };
            for (const r of pageRows) {
              const pid = r.id.replace(/^page_/, '');
              if (mapa[pid]) {
                const neg = { ...r.negocio };
                if (neg.hero && neg.hero.imagem && neg.hero.imagem.src && (neg.hero.imagem.src.includes('/reviews/') || neg.hero.imagem.src.includes('midia-1795375758870'))) {
                  neg.hero.imagem.src = pid === 'home' ? '/assets/hero-cinematic-poster.jpg' : '/assets/hero-dfaria-luxo.jpg';
                  neg.hero.imagem.alt = pid === 'home' ? "D'Faria Gastronomia e Eventos" : 'Banquete de alta gastronomia e buffet para eventos â€” Dâ€™Faria Gastronomia';
                }
                if (neg.hero && neg.hero.titulo) {
                  neg.hero.titulo = neg.hero.titulo.replace(/CHEFFE/gi, 'CHEF').replace(/CHEF\s+CRISTIANO/gi, 'CHEF CRISTIANO').trim();
                }
                if (neg.hero && neg.hero.subtitulo) {
                  neg.hero.subtitulo = neg.hero.subtitulo.replace(/VOCÃŠVOCÃŠ/gi, 'VOCÃŠ').trim();
                }
                if (pid === 'home') {
                  neg.hero = neg.hero || {};
                  neg.hero.video = {
                    src: '/assets/dfaria-hero-cinematic.mp4',
                    poster: '/assets/hero-cinematic-poster.jpg'
                  };
                  if (!neg.hero.imagem || neg.hero.imagem.src.includes('midia-1795375758870') || neg.hero.imagem.src.includes('/reviews/')) {
                    neg.hero.imagem = {
                      src: '/assets/hero-cinematic-poster.jpg',
                      alt: "D'Faria Gastronomia e Eventos"
                    };
                  }
                }
                mapa[pid] = { ...mapa[pid], ...neg };
              }
            }
            return mapa;
          }
        }
      }
    } catch (e) {}

    return DEFAULT_PAGES;
  },

  async saveMenu(menu) {
    const res = await fetch(SUPABASE_URL + '/rest/v1/site_menus?slug=eq.' + encodeURIComponent(menu.slug), {
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
      throw new Error(err.message || 'Erro ao salvar cardÃ¡pio');
    }
    return await res.json();
  },

  async savePage(page) {
    const payload = {
      id: page.id,
      nome: page.nome,
      categoria: page.categoria,
      slug: page.slug,
      meta_title: page.meta_title,
      meta_description: page.meta_description,
      hero: page.hero,
      secoes: page.secoes,
      galeria: page.galeria || [],
      dados_extras: page.dados_extras || {},
      updated_at: new Date().toISOString()
    };

    // 1. Tentar salvar em 'site_pages'
    let ok = false;
    try {
      const resP = await fetch(SUPABASE_URL + '/rest/v1/site_pages?id=eq.' + encodeURIComponent(page.id), {
        method: 'PATCH',
        headers: { ...api.headers(), 'Prefer': 'return=representation' },
        body: JSON.stringify(payload)
      });
      if (resP.ok) {
        const d = await resP.json();
        if (Array.isArray(d) && d.length > 0) ok = true;
      }
    } catch (e) {}

    // 2. Salvar em 'site_catalog_config' (resiliente e permanente)
    const configId = 'page_' + page.id;
    const resC = await fetch(SUPABASE_URL + '/rest/v1/site_catalog_config?id=eq.' + encodeURIComponent(configId), {
      method: 'PUT',
      headers: { ...api.headers(), 'Prefer': 'return=representation' },
      body: JSON.stringify({
        id: configId,
        negocio: payload,
        lista_cabecalho: {},
        fechamento: {},
        updated_at: new Date().toISOString()
      })
    });

    if (!resC.ok && !ok) {
      const err = await resC.json().catch(() => ({}));
      throw new Error(err.message || 'Erro ao salvar pÃ¡gina no banco');
    }

    return payload;
  },

  async uploadPhoto(file) {
    const ext = file.name.split('.').pop();
    const cleanName = 'midia-' + Date.now() + '-' + Math.random().toString(36).substring(7) + '.' + ext;
    
    // Tenta primeiro no bucket dfaria-midia, depois dfaria-cardapios
    let bucket = 'dfaria-midia';
    let res = await fetch(SUPABASE_URL + '/storage/v1/object/' + bucket + '/' + cleanName, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + state.token,
        'Content-Type': file.type
      },
      body: file
    });

    if (!res.ok) {
      bucket = 'dfaria-cardapios';
      res = await fetch(SUPABASE_URL + '/storage/v1/object/' + bucket + '/' + cleanName, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': 'Bearer ' + state.token,
          'Content-Type': file.type
        },
        body: file
      });
    }

    if (!res.ok) {
      // Fallback elegante: Data URL local temporÃ¡ria para preview se storage falhar
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    }

    return SUPABASE_URL + '/storage/v1/object/public/' + bucket + '/' + cleanName;
  }
};

// Parser inteligente: "Colar CardÃ¡pio Inteiro"
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
      } else if (catText.includes('cafÃ©') || catText.includes('cafe') || catText.includes('brunch')) {
        categoria = 'cafes-e-brunches';
      } else if (catText.includes('debutante') || catText.includes('celebra')) {
        categoria = 'celebracoes';
      } else {
        categoria = 'almocos-e-jantares';
      }
    } else if (line.toLowerCase().startsWith('descriÃ§Ã£o:') || line.toLowerCase().startsWith('resumo:')) {
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
  } else if (!state.papel) {
    // logado, mas fora da lista de usuÃ¡rios do painel
    app.innerHTML = extras.renderSemAcesso();
    const sair = document.getElementById('btn-logout');
    if (sair) sair.addEventListener('click', sairDoPainel);
  } else {
    app.innerHTML = renderDashboard();
    attachDashboardEvents();
    extras.ligarEventos();
  }

  // Atualizar Ã­cones do Lucide
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
            <i data-lucide="chef-hat" class="w-8 h-8"></i>
          </div>
          <h1 class="font-display text-2xl font-bold text-dfgreen">Painel do Chef</h1>
          <p class="text-xs text-stone-500">D'Faria Gastronomia & Eventos â€” GestÃ£o Completa do Site</p>
        </div>

        ${state.feedback ? `
          <div class="p-3.5 rounded-xl text-xs font-semibold ${state.feedback.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}">
            ${state.feedback.text}
          </div>
        ` : ''}

        <form id="login-form" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1.5" for="login-email">E-mail de Acesso:</label>
            <input type="email" id="login-email" name="email" required autocomplete="username" value="${state.loginEmail || ''}" placeholder="contato@dfariagastronomia.com.br"
              class="w-full py-2.5 px-3.5 rounded-xl border border-stone-200 text-sm font-medium focus:ring-2 focus:ring-dfgreen outline-none" />
          </div>

          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1.5" for="login-password">Senha de Acesso:</label>
            <input type="password" id="login-password" name="password" required autocomplete="current-password" placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
              class="w-full py-2.5 px-3.5 rounded-xl border border-stone-200 text-sm font-medium focus:ring-2 focus:ring-dfgreen outline-none" />
          </div>

          <button type="submit" ${state.loading ? 'disabled' : ''}
            class="w-full py-3 bg-dfgreen hover:bg-dfgreendeep text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
            ${state.loading ? '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Entrando...' : '<i data-lucide="log-in" class="w-4 h-4 text-dfgold"></i> Entrar no Painel'}
          </button>
        </form>

        <div class="text-center">
          <a href="/" class="text-xs text-stone-400 hover:text-dfgreen underline">â† Voltar para o site oficial</a>
        </div>
      </div>
    </div>
  `;
}

// Tela Principal (Dashboard e Editor)
function renderDashboard() {
  const isPage = state.viewMode === 'paginas';
  const isMenus = state.viewMode === 'cardapios';
  const isExtra = !isPage && !isMenus; // 'aparencia' ou 'config'
  const item = isPage ? state.selectedPage : state.selectedMenu;

  return `
    <!-- Topo / Barra de NavegaÃ§Ã£o -->
    <header class="bg-dfgreen text-white border-b border-dfgold/30 sticky top-0 z-30 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="p-2 rounded-xl bg-white/10 text-dfgold">
            <i data-lucide="chef-hat" class="w-5 h-5"></i>
          </div>
          <div>
            <h1 class="font-display font-bold text-base leading-tight">Painel do Chef & Editor do Site</h1>
            <p class="text-[10px] text-dfgold uppercase tracking-wider font-semibold">100% do Site EditÃ¡vel em Tempo Real</p>
          </div>
        </div>

        <div class="flex items-center gap-2 sm:gap-4">
          <!-- Alternador de VisÃ£o: PÃ¡ginas vs CardÃ¡pios -->
          <div class="flex items-center p-1 bg-black/20 rounded-xl border border-white/10 text-xs font-bold">
            <button id="btn-toggle-pages" class="py-1.5 px-3 rounded-lg transition-all flex items-center gap-1.5 ${isPage ? 'bg-dfgold text-dfgreen shadow-sm' : 'text-white/80 hover:text-white'}">
              <i data-lucide="layout" class="w-3.5 h-3.5"></i>
              <span>PÃ¡ginas (${Object.keys(state.pages).length})</span>
            </button>
            <button id="btn-toggle-menus" class="py-1.5 px-3 rounded-lg transition-all flex items-center gap-1.5 ${isMenus ? 'bg-dfgold text-dfgreen shadow-sm' : 'text-white/80 hover:text-white'}">
              <i data-lucide="utensils" class="w-3.5 h-3.5"></i>
              <span>CardÃ¡pios (${state.menus.length})</span>
            </button>
            ${extras.botoesCabecalho()}
          </div>

          ${extras.botaoPublicar()}

          <a href="/" target="_blank" class="hidden md:inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors">
            <i data-lucide="external-link" class="w-3.5 h-3.5 text-dfgold"></i>
            <span>Ver Site</span>
          </a>

          <button id="btn-logout" class="p-2 rounded-lg bg-white/10 hover:bg-red-500/20 text-white/80 hover:text-red-300 transition-colors" title="Sair do Painel">
            <i data-lucide="log-out" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Feedback Toast -->
    ${state.feedback ? `
      <div class="fixed bottom-6 right-6 z-50 p-4 rounded-2xl shadow-xl max-w-md flex items-center gap-3 text-sm font-bold ${state.feedback.type === 'error' ? 'bg-red-600 text-white' : 'bg-dfgreen text-white border-2 border-dfgold'} animate-bounce">
        <i data-lucide="${state.feedback.type === 'error' ? 'alert-triangle' : 'check-circle'}" class="w-5 h-5 text-dfgold"></i>
        <span>${state.feedback.text}</span>
      </div>
    ` : ''}

    ${isExtra ? extras.renderCorpo() : `
    <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 pb-24">

      <!-- Coluna da Esquerda: NavegaÃ§Ã£o (PÃ¡ginas ou CardÃ¡pios) -->
      <aside class="lg:col-span-4 space-y-4">
        ${isPage ? renderSidebarPages() : renderSidebarMenus()}
      </aside>

      <!-- Coluna da Direita: Editor Completo -->
      <section class="lg:col-span-8">
        ${isPage ? renderPageEditor(state.selectedPage) : renderMenuEditor(state.selectedMenu)}
      </section>

    </main>`}
    <div id="df-barra-publicacao">${extras.barraPublicacao()}</div>
  `;
}

// Sidebar de PÃ¡ginas
function renderSidebarPages() {
  const pagesList = Object.values(state.pages);
  const categorias = ['Institucional', 'Eventos', 'Gastronomia', 'ServiÃ§os', 'MÃ­dia', 'Atendimento'];

  return `
    <div class="bg-white rounded-2xl p-4 border border-[#C5A880]/30 shadow-sm space-y-4">
      <div class="flex items-center justify-between pb-2 border-b border-stone-100">
        <h2 class="font-display font-bold text-sm text-dfgreen flex items-center gap-2">
          <i data-lucide="file-text" class="w-4 h-4 text-dfgold"></i>
          <span>PÃ¡ginas do Site (${pagesList.length})</span>
        </h2>
        <span class="text-[10px] font-bold text-stone-400 uppercase">Textos & Fotos</span>
      </div>

      <div class="space-y-4 max-h-[72vh] overflow-y-auto pr-1">
        ${categorias.map(cat => {
          const pags = pagesList.filter(p => p.categoria === cat);
          if (pags.length === 0) return '';
          return `
            <div class="space-y-1.5">
              <span class="text-[10px] font-bold text-dfgold uppercase tracking-wider px-2">${cat}</span>
              <div class="space-y-1">
                ${pags.map(p => `
                  <button data-pid="${p.id}" class="btn-select-page w-full text-left p-2.5 rounded-xl transition-all border text-xs flex items-center justify-between gap-2 ${state.selectedPage?.id === p.id ? 'bg-[#FDFBF7] border-dfgreen shadow-sm ring-1 ring-dfgreen font-bold text-dfgreen' : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-700'}">
                    <span class="truncate">${p.nome}</span>
                    <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-stone-400 shrink-0"></i>
                  </button>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// Sidebar de CardÃ¡pios
function renderSidebarMenus() {
  return `
    <div class="bg-white rounded-2xl p-4 border border-[#C5A880]/30 shadow-sm space-y-3">
      <div class="flex items-center justify-between pb-2 border-b border-stone-100">
        <h2 class="font-display font-bold text-sm text-dfgreen flex items-center gap-2">
          <i data-lucide="book-open" class="w-4 h-4 text-dfgold"></i>
          <span>CardÃ¡pios Oficiais (${state.menus.length})</span>
        </h2>
        <span class="text-[10px] font-bold text-stone-400 uppercase">Buffet</span>
      </div>

      <div class="space-y-1.5 max-h-[72vh] overflow-y-auto pr-1">
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
  `;
}

// Editor de PÃ¡ginas do Site
function renderPageEditor(p) {
  if (!p) {
    return `
      <div class="h-full bg-white rounded-3xl p-12 border border-[#C5A880]/30 shadow-sm flex flex-col items-center justify-center text-center space-y-3">
        <div class="p-4 rounded-2xl bg-dfsand text-dfgold">
          <i data-lucide="mouse-pointer-click" class="w-8 h-8"></i>
        </div>
        <h3 class="font-display text-lg font-bold text-dfgreen">Selecione uma PÃ¡gina do Site</h3>
        <p class="text-xs text-stone-500 max-w-sm">Escolha qualquer pÃ¡gina na lista ao lado para alterar tÃ­tulos, textos, fotos de banner, FAQ ou contatos em tempo real.</p>
      </div>
    `;
  }

  const temEspecifico = p.dados_extras && (p.dados_extras.faq || p.dados_extras.contato || p.dados_extras.depoimentos || p.dados_extras.galeria);

  return `
    <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#C5A880]/30 shadow-sm space-y-6">
      
      <!-- CabeÃ§alho da PÃ¡gina & AÃ§Ãµes -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <div>
          <span class="text-[10px] font-bold text-dfgold uppercase tracking-wider">${p.categoria}</span>
          <h2 class="font-display text-xl sm:text-2xl font-bold text-dfgreen">${p.nome}</h2>
          <p class="text-xs text-stone-400 font-mono mt-0.5">${p.slug}</p>
        </div>

        <div class="flex items-center gap-2">
          <a href="${p.slug}" target="_blank" class="py-2 px-3.5 bg-dfsand hover:bg-[#EAE4D9] text-dfgreen rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5">
            <i data-lucide="eye" class="w-3.5 h-3.5 text-dfgold"></i>
            <span>Ver no Ar</span>
          </a>
          <button id="btn-save-page" ${state.loading ? 'disabled' : ''} class="py-2.5 px-5 bg-dfgreen hover:bg-dfgreendeep text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5">
            ${state.loading ? '<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Salvando...' : '<i data-lucide="save" class="w-3.5 h-3.5 text-dfgold"></i> Salvar AlteraÃ§Ãµes na PÃ¡gina'}
          </button>
        </div>
      </div>

      <!-- Abas da PÃ¡gina -->
      <div class="flex flex-wrap items-center gap-2 border-b border-stone-100 pb-3">
        <button data-pagetab="banner" class="page-tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'banner' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
          ðŸŒŸ Banner Principal (Hero)
        </button>
        <button data-pagetab="secoes" class="page-tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'secoes' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
          ðŸ“ SeÃ§Ãµes & Textos (${p.secoes?.length || 0})
        </button>
        ${temEspecifico ? `
          <button data-pagetab="especifico" class="page-tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'especifico' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
            âš¡ ConteÃºdo Especial (${p.id.toUpperCase()})
          </button>
        ` : ''}
        <button data-pagetab="seo" class="page-tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'seo' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
          ðŸ” SEO & Google
        </button>
      </div>

      <!-- ConteÃºdo da Aba da PÃ¡gina -->
      ${state.activeTab === 'banner' ? renderPageTabBanner(p) : ''}
      ${state.activeTab === 'secoes' ? renderPageTabSecoes(p) : ''}
      ${state.activeTab === 'especifico' ? renderPageTabEspecifico(p) : ''}
      ${state.activeTab === 'seo' ? renderPageTabSEO(p) : ''}

    </div>
  `;
}

// Aba 1 da PÃ¡gina: Banner Principal (Hero)
function renderPageTabBanner(p) {
  const h = p.hero || {};
  const isHome = p.id === 'home';

  return `
    <div class="space-y-6">
      
      <!-- CARD 1: EDIÃ‡ÃƒO INDEPENDENTE DE TEXTOS DA HERO (TÃTULO E SUBTÃTULO) -->
      <div class="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-dfgreen/10 text-dfgreen flex items-center justify-center font-bold">
              <i data-lucide="type" class="w-4 h-4"></i>
            </div>
            <div>
              <h3 class="text-sm font-bold text-dfgreen">Textos da Hero (TÃ­tulo & SubtÃ­tulo)</h3>
              <p class="text-[11px] text-stone-500">Edite apenas o texto com seguranÃ§a absoluta â€” a foto e o vÃ­deo NÃƒO serÃ£o alterados.</p>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-dfsand text-dfgreen border border-stone-200">
            TEXTO ISOLADO
          </span>
        </div>

        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">TÃ­tulo Principal da Hero (H1):</label>
          <input type="text" id="page-hero-title" value="${h.titulo || ''}" class="w-full py-2.5 px-3.5 rounded-xl border border-stone-300 font-bold text-base text-dfgreen focus:ring-2 focus:ring-dfgreen outline-none" placeholder="Ex: D'FARIA GASTRONOMIA" />
        </div>

        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">SubtÃ­tulo / Frase de ApresentaÃ§Ã£o:</label>
          <textarea id="page-hero-subtitle" rows="3" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none leading-relaxed" placeholder="Frase de apresentaÃ§Ã£o no inÃ­cio da pÃ¡gina">${h.subtitulo || ''}</textarea>
        </div>

        <div class="pt-2 flex items-center justify-between">
          <p class="text-[11px] text-stone-500 flex items-center gap-1">
            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-dfgreen"></i>
            <span>Salva imediatamente o texto mantendo o vÃ­deo/foto atual intacto.</span>
          </p>
          <button id="btn-save-hero-text" type="button" class="py-2.5 px-5 bg-dfgreen hover:bg-dfgreendeep text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer">
            <i data-lucide="check" class="w-4 h-4 text-dfgold"></i>
            <span>Salvar Apenas Textos da Hero</span>
          </button>
        </div>
      </div>

      <!-- CARD 2: MÃDIA DA HERO (VÃDEO / FOTO DE FUNDO) -->
      <div class="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
        <div class="flex items-center justify-between border-b border-stone-100 pb-3">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-dfgold/20 text-dfgreen flex items-center justify-center font-bold">
              <i data-lucide="${isHome ? 'film' : 'image'}" class="w-4 h-4 text-dfgold"></i>
            </div>
            <div>
              <h3 class="text-sm font-bold text-dfgreen">MÃ­dia da Hero (${isHome ? 'VÃ­deo CinematogrÃ¡fico Fasano' : 'Foto de Capa'})</h3>
              <p class="text-[11px] text-stone-500">${isHome ? 'VÃ­deo real em Full HD 60fps rodando no fundo da pÃ¡gina inicial.' : 'Imagem de alta gastronomia para o banner desta pÃ¡gina.'}</p>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full text-[10px] font-extrabold ${isHome ? 'bg-dfgreen text-white' : 'bg-stone-100 text-stone-600'}">
            ${isHome ? 'VÃDEO FASANO ATIVO' : 'FOTO ATIVA'}
          </span>
        </div>

        ${isHome ? `
          <!-- Painel Especial da Home: VÃ­deo Fasano Protegido -->
          <div class="p-4 rounded-xl bg-dfsand/60 border border-stone-200 space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-16 h-12 rounded-lg overflow-hidden bg-black shrink-0 border border-stone-300 relative">
                  <img src="/assets/hero-cinematic-poster.jpg" alt="Poster do VÃ­deo" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 flex items-center justify-center bg-black/30">
                    <i data-lucide="play" class="w-4 h-4 text-white fill-white"></i>
                  </div>
                </div>
                <div>
                  <p class="text-xs font-bold text-dfgreen">VÃ­deo de Champagne & TaÃ§as de Cristal (60fps Full HD)</p>
                  <p class="text-[10px] text-stone-500">Arquivo: /assets/dfaria-hero-cinematic.mp4 Â· PadrÃ£o Fasano</p>
                </div>
              </div>
              <a href="/" target="_blank" class="py-1.5 px-3 rounded-lg bg-dfgreen text-white text-xs font-bold hover:bg-dfgreendeep transition-all shadow-sm flex items-center gap-1 shrink-0">
                <span>Ver no Site</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5 text-dfgold"></i>
              </a>
            </div>

            <!-- Trava de SeguranÃ§a para NÃƒO Mudar MÃ­dia Sem Querer -->
            <div class="pt-2 border-t border-stone-200/70">
              <label class="flex items-center gap-2 text-xs font-semibold text-stone-700 cursor-pointer">
                <input type="checkbox" id="chk-allow-media-change" class="w-4 h-4 text-dfgreen rounded focus:ring-dfgreen" />
                <span>Habilitar alteraÃ§Ã£o de mÃ­dia (manter desmarcado para preservar o vÃ­deo Fasano)</span>
              </label>
            </div>
          </div>
        ` : ''}

        <!-- Seletor de Imagem (sÃ³ ativo se for outra pÃ¡gina ou se o chef marcou a trava na home) -->
        <div id="media-change-container" class="${isHome ? 'hidden' : 'space-y-4'}">
          <div class="flex flex-col sm:flex-row items-center gap-5">
            <div class="w-48 h-32 rounded-2xl overflow-hidden bg-stone-200 border border-stone-300 relative shrink-0 shadow-sm">
              <img id="page-preview-hero-img" src="${h.imagem?.src || '/og-dfaria.jpg'}" alt="${h.imagem?.alt || 'Banner'}" class="w-full h-full object-cover" />
            </div>
            <div class="space-y-3 flex-1 w-full">
              <div>
                <label class="block text-[10px] font-bold text-stone-500 uppercase mb-1">Enviar Nova Imagem de Capa:</label>
                <input type="file" id="page-file-hero" accept="image/*" class="text-xs text-stone-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-dfgreen file:text-white hover:file:bg-dfgreendeep cursor-pointer" />
              </div>
              <div>
                <label class="block text-[10px] font-bold text-stone-500 uppercase mb-1">Ou Cole a URL da Imagem:</label>
                <input type="text" id="page-hero-img-src" value="${h.imagem?.src || ''}" class="w-full py-1.5 px-3 rounded-lg border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none" />
              </div>
            </div>
          </div>

          <!-- Capas Imponentes DisponÃ­veis -->
          <div class="pt-3 border-t border-stone-200/80">
            <label class="block text-[11px] font-bold text-dfgreen mb-2 flex items-center gap-1.5">
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-dfgold"></i>
              <span>Capas Imponentes DisponÃ­veis (Clique para aplicar se desejar):</span>
            </label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <button type="button" class="btn-preset-hero p-2 rounded-xl border border-stone-200 bg-white hover:border-dfgold hover:shadow-sm text-left transition-all group" data-src="/assets/hero-dfaria-luxo.jpg" data-alt="Banquete de alta gastronomia e buffet para eventos â€” Dâ€™Faria Gastronomia">
                <div class="h-16 rounded-lg overflow-hidden mb-1.5 bg-stone-100">
                  <img src="/assets/hero-dfaria-luxo.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <p class="text-[11px] font-bold text-stone-800 line-clamp-1">ðŸŒŸ Banquete Sunset Luxo (16:9)</p>
                <p class="text-[9px] text-stone-400">CinematogrÃ¡fico / Noturno</p>
              </button>
              <button type="button" class="btn-preset-hero p-2 rounded-xl border border-stone-200 bg-white hover:border-dfgold hover:shadow-sm text-left transition-all group" data-src="/__l5e/assets-v1/1472106d-603b-4c1a-9f89-7b8fdf1f18ef/hero-mesa-piscina.webp" data-alt="Mesa posta de alta gastronomia junto Ã  piscina â€” Dâ€™Faria">
                <div class="h-16 rounded-lg overflow-hidden mb-1.5 bg-stone-100">
                  <img src="/__l5e/assets-v1/1472106d-603b-4c1a-9f89-7b8fdf1f18ef/hero-mesa-piscina.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <p class="text-[11px] font-bold text-stone-800 line-clamp-1">ðŸŠ Mesa Piscina (Original)</p>
                <p class="text-[9px] text-stone-400">Ar Livre / ClÃ¡ssico</p>
              </button>
              <button type="button" class="btn-preset-hero p-2 rounded-xl border border-stone-200 bg-white hover:border-dfgold hover:shadow-sm text-left transition-all group" data-src="/__l5e/assets-v1/5a856cc3-8d4b-4c1c-9238-6c6e2cac0104/churrasco-fogo-de-chao-evento-dfaria.webp" data-alt="Churrasco Fogo de ChÃ£o Dâ€™Faria">
                <div class="h-16 rounded-lg overflow-hidden mb-1.5 bg-stone-100">
                  <img src="/__l5e/assets-v1/5a856cc3-8d4b-4c1c-9238-6c6e2cac0104/churrasco-fogo-de-chao-evento-dfaria.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <p class="text-[11px] font-bold text-stone-800 line-clamp-1">ðŸ¥© Fogo de ChÃ£o & Brasa</p>
                <p class="text-[9px] text-stone-400">Carnes Nobres & Parrilla</p>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

function renderPageTabSecoes(p) {
  const secoes = p.secoes || [];
  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between pb-2 border-b border-stone-100">
        <p class="text-xs text-stone-500">Edite os tÃ­tulos, parÃ¡grafos e tÃ³picos das seÃ§Ãµes da pÃ¡gina.</p>
        <button id="btn-add-page-sec" class="py-1.5 px-3 bg-dfgreen hover:bg-dfgreendeep text-white rounded-lg text-xs font-bold flex items-center gap-1">
          <i data-lucide="plus" class="w-3.5 h-3.5 text-dfgold"></i>
          <span>Nova SeÃ§Ã£o</span>
        </button>
      </div>

      <div class="space-y-5" id="page-sections-container">
        ${secoes.map((sec, sIdx) => `
          <div class="p-5 rounded-2xl bg-dfsand/50 border border-stone-200 space-y-4">
            <div class="flex items-center justify-between gap-3">
              <input type="text" value="${sec.titulo || ''}" data-sidx="${sIdx}" class="page-sec-title font-bold text-sm text-dfgreen bg-white py-2 px-3 rounded-xl border border-stone-300 flex-1" placeholder="TÃ­tulo da SeÃ§Ã£o (H2)" />
              <button data-sidx="${sIdx}" class="btn-del-page-sec text-red-500 hover:text-red-700 p-2" title="Remover SeÃ§Ã£o">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>

            <div>
              <label class="block text-[10px] font-bold text-stone-500 uppercase mb-1">Texto Descritivo / ParÃ¡grafos:</label>
              <textarea data-sidx="${sIdx}" rows="4" class="page-sec-text w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none bg-white">${sec.texto || ''}</textarea>
            </div>

            ${sec.itens && sec.itens.length > 0 ? `
              <div>
                <label class="block text-[10px] font-bold text-stone-500 uppercase mb-1">TÃ³picos / Itens em Lista (um por linha):</label>
                <textarea data-sidx="${sIdx}" rows="3" class="page-sec-itens w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none bg-white">${sec.itens.join('\n')}</textarea>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Aba 3 da PÃ¡gina: ConteÃºdo EspecÃ­fico (FAQ, Contato, Depoimentos, Galeria)
function renderPageTabEspecifico(p) {
  const ext = p.dados_extras || {};

  // Se for FAQ
  if (ext.faq) {
    return `
      <div class="space-y-5">
        <div class="flex items-center justify-between pb-2 border-b border-stone-100">
          <p class="text-xs text-stone-500">Perguntas e Respostas Frequentes (FAQ)</p>
          <button id="btn-add-faq-item" class="py-1.5 px-3 bg-dfgreen hover:bg-dfgreendeep text-white rounded-lg text-xs font-bold flex items-center gap-1">
            <i data-lucide="plus" class="w-3.5 h-3.5 text-dfgold"></i>
            <span>Nova Pergunta</span>
          </button>
        </div>

        <div class="space-y-4" id="faq-container">
          ${ext.faq.map((item, fIdx) => `
            <div class="p-4 rounded-2xl bg-dfsand/50 border border-stone-200 space-y-3">
              <div class="flex items-center justify-between gap-3">
                <input type="text" value="${item.pergunta || ''}" data-fidx="${fIdx}" class="faq-input-q font-bold text-xs text-dfgreen bg-white py-1.5 px-3 rounded-lg border border-stone-300 flex-1" placeholder="Pergunta" />
                <button data-fidx="${fIdx}" class="btn-del-faq text-red-500 hover:text-red-700 p-1.5" title="Remover">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              </div>
              <textarea data-fidx="${fIdx}" rows="3" class="faq-input-a w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none bg-white" placeholder="Resposta detalhada">${item.resposta || ''}</textarea>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Se for Contato
  if (ext.contato) {
    const c = ext.contato;
    return `
      <div class="space-y-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">WhatsApp de Atendimento (ExibiÃ§Ã£o):</label>
            <input type="text" id="contact-whatsapp-display" value="${c.whatsapp_display || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 font-bold text-xs text-dfgreen" placeholder="(15) 99683-4734" />
          </div>
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">WhatsApp NÃºmero (Link sem traÃ§os):</label>
            <input type="text" id="contact-whatsapp-num" value="${c.whatsapp_numero || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 font-bold text-xs text-dfgreen" placeholder="5515996834734" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">Telefone Fixo:</label>
            <input type="text" id="contact-phone-display" value="${c.telefone_display || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700" placeholder="(15) 3287-1498" />
          </div>
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">E-mail Principal:</label>
            <input type="email" id="contact-email" value="${c.email || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700" placeholder="contato@dfariagastronomia.com.br" />
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">EndereÃ§o Completo:</label>
          <input type="text" id="contact-address" value="${c.endereco || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">HorÃ¡rio de Atendimento:</label>
            <input type="text" id="contact-hours" value="${c.horario || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700" />
          </div>
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">Link do Instagram:</label>
            <input type="url" id="contact-instagram" value="${c.instagram || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700" />
          </div>
        </div>
      </div>
    `;
  }

  // Se for Depoimentos
  if (ext.depoimentos) {
    return `
      <div class="space-y-4">
        <p class="text-xs text-stone-500">Depoimentos reais de clientes exibidos na pÃ¡gina.</p>
        <div class="space-y-4">
          ${ext.depoimentos.map((d, dIdx) => `
            <div class="p-4 rounded-2xl bg-dfsand/50 border border-stone-200 space-y-2">
              <input type="text" value="${d.nome || ''}" data-didx="${dIdx}" class="dep-input-nome font-bold text-xs text-dfgreen bg-white py-1.5 px-3 rounded-lg border border-stone-300 w-full" placeholder="Nome do Cliente" />
              <textarea data-didx="${dIdx}" rows="3" class="dep-input-texto w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 bg-white" placeholder="Texto da avaliaÃ§Ã£o">${d.texto || ''}</textarea>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  return '<p class="text-xs text-stone-400">Nenhum conteÃºdo especÃ­fico para esta pÃ¡gina.</p>';
}

// Aba 4 da PÃ¡gina: SEO & Google
function renderPageTabSEO(p) {
  return `
    <div class="space-y-5">
      <div>
        <label class="block text-xs font-bold text-stone-700 mb-1">TÃ­tulo no Google (&lt;title&gt;):</label>
        <input type="text" id="page-meta-title" value="${p.meta_title || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none" />
      </div>

      <div>
        <label class="block text-xs font-bold text-stone-700 mb-1">DescriÃ§Ã£o no Google (Meta Description):</label>
        <textarea id="page-meta-desc" rows="3" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none">${p.meta_description || ''}</textarea>
        <p class="text-[10px] text-stone-400 mt-1">Recomendado entre 140 e 160 caracteres para visualizaÃ§Ã£o perfeita nas buscas do Google.</p>
      </div>
    </div>
  `;
}

// Editor de CardÃ¡pios (Geral, SeÃ§Ãµes, Colar)
function renderMenuEditor(m) {
  if (!m) {
    return `
      <div class="h-full bg-white rounded-3xl p-12 border border-[#C5A880]/30 shadow-sm flex flex-col items-center justify-center text-center space-y-3">
        <div class="p-4 rounded-2xl bg-dfsand text-dfgold">
          <i data-lucide="mouse-pointer-click" class="w-8 h-8"></i>
        </div>
        <h3 class="font-display text-lg font-bold text-dfgreen">Selecione um CardÃ¡pio para Editar</h3>
        <p class="text-xs text-stone-500 max-w-sm">Escolha qualquer um dos 17 cardÃ¡pios na lista ao lado para alterar textos, fotos, pratos ou usar o modo "Colar CardÃ¡pio".</p>
      </div>
    `;
  }

  return `
    <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#C5A880]/30 shadow-sm space-y-6">
      
      <!-- CabeÃ§alho do CardÃ¡pio & AÃ§Ãµes -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <div>
          <span class="text-[10px] font-bold text-dfgold uppercase tracking-wider">${m.categoria_id.replace(/-/g, ' ')}</span>
          <h2 class="font-display text-xl sm:text-2xl font-bold text-dfgreen">${m.nome}</h2>
          <p class="text-xs text-stone-400 font-mono mt-0.5">/cardapios/${m.slug}</p>
        </div>

        <div class="flex items-center gap-2">
          <a href="/cardapios/${m.slug}" target="_blank" class="py-2 px-3.5 bg-dfsand hover:bg-[#EAE4D9] text-dfgreen rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5">
            <i data-lucide="eye" class="w-3.5 h-3.5 text-dfgold"></i>
            <span>Ver PÃ¡gina</span>
          </a>
          <button id="btn-save-menu" ${state.loading ? 'disabled' : ''} class="py-2.5 px-5 bg-dfgreen hover:bg-dfgreendeep text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5">
            ${state.loading ? '<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Salvando...' : '<i data-lucide="save" class="w-3.5 h-3.5 text-dfgold"></i> Salvar AlteraÃ§Ãµes'}
          </button>
        </div>
      </div>

      <!-- Abas do Editor de CardÃ¡pio -->
      <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
        <button data-tab="geral" class="tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'geral' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
          InformaÃ§Ãµes & Foto
        </button>
        <button data-tab="secoes" class="tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'secoes' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
          SeÃ§Ãµes de Pratos (${m.secoes?.length || 0})
        </button>
        <button data-tab="colar" class="tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'colar' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
          Colar CardÃ¡pio Inteiro (Ctrl+V)
        </button>
      </div>

      <!-- ConteÃºdo da Aba Ativa -->
      ${state.activeTab === 'geral' ? renderTabGeral(m) : ''}
      ${state.activeTab === 'secoes' ? renderTabSecoes(m) : ''}
      ${state.activeTab === 'colar' ? renderTabColar(m) : ''}

    </div>
  `;
}

// Aba 1 CardÃ¡pio: InformaÃ§Ãµes Gerais & Foto
function renderTabGeral(m) {
  return `
    <div class="space-y-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">Nome do CardÃ¡pio:</label>
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
        <label class="block text-xs font-bold text-stone-700 mb-1">Resumo Curto (ApresentaÃ§Ã£o):</label>
        <textarea id="edit-resumo" rows="2" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none">${m.resumo || ''}</textarea>
      </div>

      <!-- Upload de Foto de Capa -->
      <div class="p-5 rounded-2xl bg-dfsand/60 border border-stone-200 space-y-3">
        <label class="block text-xs font-bold text-dfgreen">Foto de Capa do CardÃ¡pio:</label>
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <div class="w-32 h-24 rounded-xl overflow-hidden bg-stone-200 border border-stone-300 relative shrink-0">
            <img id="preview-cover" src="${m.foto_capa?.src || '/og-dfaria.jpg'}" alt="Capa" class="w-full h-full object-cover" />
          </div>
          <div class="space-y-2 flex-1">
            <input type="file" id="file-cover" accept="image/*" class="text-xs text-stone-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-dfgreen file:text-white hover:file:bg-dfgreendeep cursor-pointer" />
            <p class="text-[10px] text-stone-400">VocÃª pode tirar a foto direto do celular ou escolher uma imagem do seu computador.</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">TÃ­tulo de SEO (Google Title):</label>
          <input type="text" id="edit-title" value="${m.title || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none" />
        </div>
        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">DescriÃ§Ã£o de SEO (Google Description):</label>
          <input type="text" id="edit-description" value="${m.description || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none" />
        </div>
      </div>
    </div>
  `;
}

// Aba 2 CardÃ¡pio: SeÃ§Ãµes e Itens
function renderTabSecoes(m) {
  const secoes = m.secoes || [];

  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between pb-2 border-b border-stone-100">
        <p class="text-xs text-stone-500">Adicione, exclua ou altere os pratos de cada seÃ§Ã£o.</p>
        <button id="btn-add-section" class="py-1.5 px-3 bg-dfgreen hover:bg-dfgreendeep text-white rounded-lg text-xs font-bold flex items-center gap-1">
          <i data-lucide="plus" class="w-3.5 h-3.5 text-dfgold"></i>
          <span>Nova SeÃ§Ã£o</span>
        </button>
      </div>

      <div class="space-y-4" id="sections-container">
        ${secoes.map((sec, sIdx) => `
          <div class="p-4 rounded-2xl bg-dfsand/50 border border-stone-200 space-y-3">
            <div class="flex items-center justify-between gap-3">
              <input type="text" value="${sec.titulo || ''}" data-sidx="${sIdx}" class="input-sec-title font-bold text-sm text-dfgreen bg-white py-1.5 px-3 rounded-lg border border-stone-300 flex-1" placeholder="TÃ­tulo da SeÃ§Ã£o (ex: Entradas)" />
              <button data-sidx="${sIdx}" class="btn-del-sec text-red-500 hover:text-red-700 p-1.5" title="Remover SeÃ§Ã£o">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>

            <div class="space-y-2">
              <label class="block text-[10px] font-bold text-stone-500 uppercase">Itens da SeÃ§Ã£o (um por linha):</label>
              <textarea data-sidx="${sIdx}" rows="4" class="input-sec-items w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none bg-white">${(sec.itens || []).join('\n')}</textarea>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Aba 3 CardÃ¡pio: Modo "Colar CardÃ¡pio Inteiro"
function renderTabColar(m) {
  return `
    <div class="space-y-4">
      <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1">
        <p class="font-bold flex items-center gap-1.5">
          <i data-lucide="sparkles" class="w-4 h-4 text-amber-600"></i>
          <span>Modo Inteligente: Copiar & Colar</span>
        </p>
        <p class="text-[11px] text-amber-800">
          VocÃª pode colar o texto completo de um cardÃ¡pio vindo do Word ou WhatsApp. O sistema reconhece tÃ­tulos com <b>#</b> ou <b>##</b> e itens com <b>-</b>.
        </p>
      </div>

      <div>
        <label class="block text-xs font-bold text-stone-700 mb-1">Cole o texto do cardÃ¡pio aqui:</label>
        <textarea id="paste-input" rows="12" placeholder="# Nome do CardÃ¡pio\nCategoria: AlmoÃ§os e Jantares\nResumo: Texto curto...\n\n## Entradas\n- Coxinha\n- Bolinha de queijo\n\n## Pratos Principais\n- FilÃ© mignon ao molho madeira\n- Arroz com brÃ³colis" class="w-full p-4 rounded-2xl border border-stone-300 text-xs font-mono text-stone-800 focus:ring-2 focus:ring-dfgreen outline-none bg-stone-50"></textarea>
      </div>

      <div class="flex items-center justify-between">
        <button id="btn-copy-template" class="py-2 px-3.5 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-xl text-xs font-bold flex items-center gap-1.5">
          <i data-lucide="copy" class="w-3.5 h-3.5"></i>
          <span>Copiar CardÃ¡pio Atual em Texto</span>
        </button>

        <button id="btn-parse-paste" class="py-2.5 px-6 bg-dfgreen hover:bg-dfgreendeep text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md">
          <i data-lucide="sparkles" class="w-3.5 h-3.5 text-dfgold"></i>
          <span>Entender & Aplicar ao CardÃ¡pio</span>
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

    const emailEl = document.getElementById('login-email');
    const passwordEl = document.getElementById('login-password');
    const email = (emailEl ? emailEl.value : '').trim();
    const password = passwordEl ? passwordEl.value : '';

    state.loginEmail = email;

    if (!email || !password) {
      state.feedback = { type: 'error', text: 'Por favor, preencha o e-mail e a senha de acesso.' };
      render();
      return;
    }

    const btnSubmit = form.querySelector('button[type="submit"]');
    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.classList.add('opacity-80', 'cursor-not-allowed');
      btnSubmit.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Entrando...';
      if (window.lucide) window.lucide.createIcons();
    }

    try {
      const auth = await api.login(email, password);
      state.token = auth.access_token;
      state.refreshToken = auth.refresh_token;
      state.user = auth.user;
      localStorage.setItem('df_chef_token', state.token);
      localStorage.setItem('df_chef_refresh', state.refreshToken);
      state.feedback = null;
      await loadInitialData();
      render();
    } catch (err) {
      let msg = err.message || 'Falha no login';
      if (msg === 'Invalid login credentials') {
        msg = 'E-mail ou senha incorretos. Verifique suas credenciais de acesso.';
      } else if (msg === 'Email not confirmed') {
        msg = 'E-mail cadastrado, mas pendente de confirmaÃ§Ã£o no Supabase.';
      }
      state.feedback = { type: 'error', text: msg };
      render();
    }
  });
}

function sairDoPainel() {
  localStorage.removeItem('df_chef_token');
  localStorage.removeItem('df_chef_refresh');
  state.token = null;
  state.refreshToken = null;
  state.user = null;
  state.papel = null;
  state.selectedMenu = null;
  state.viewMode = 'paginas';
  render();
}

// Eventos do Dashboard
function attachDashboardEvents() {
  // Logout
  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', sairDoPainel);
  }

  // Alternador de VisÃ£o (PÃ¡ginas vs CardÃ¡pios)
  const btnTogglePages = document.getElementById('btn-toggle-pages');
  if (btnTogglePages) {
    btnTogglePages.addEventListener('click', () => {
      state.viewMode = 'paginas';
      state.activeTab = 'banner';
      render();
    });
  }

  const btnToggleMenus = document.getElementById('btn-toggle-menus');
  if (btnToggleMenus) {
    btnToggleMenus.addEventListener('click', () => {
      state.viewMode = 'cardapios';
      state.activeTab = 'geral';
      render();
    });
  }

  // SeleÃ§Ã£o de PÃ¡gina
  document.querySelectorAll('.btn-select-page').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-pid');
      state.selectedPage = state.pages[pid];
      state.activeTab = 'banner';
      render();
    });
  });

  // Troca de abas da pÃ¡gina
  document.querySelectorAll('.page-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.getAttribute('data-pagetab');
      render();
    });
  });

  // Salvar PÃ¡gina
  
  // Salvar Apenas Textos da Hero (sem mexer em foto ou vÃ­deo)
  const btnSaveHeroText = document.getElementById('btn-save-hero-text');
  if (btnSaveHeroText && state.selectedPage) {
    btnSaveHeroText.addEventListener('click', async () => {
      syncPageFormDataToState({ onlyText: true });
      state.loading = true;
      render();

      try {
        await api.savePage(state.selectedPage);
        state.feedback = { type: 'success', text: 'âœ… Textos da Hero salvos com sucesso! A foto e o vÃ­deo foram 100% preservados sem alteraÃ§Ãµes.' };
      } catch (err) {
        state.feedback = { type: 'error', text: err.message };
      } finally {
        state.loading = false;
        render();
        setTimeout(() => { state.feedback = null; render(); }, 4000);
      }
    });
  }

  // Trava de seguranÃ§a para alterar mÃ­dia na Home
  const chkMediaChange = document.getElementById('chk-allow-media-change');
  if (chkMediaChange) {
    chkMediaChange.addEventListener('change', () => {
      const container = document.getElementById('media-change-container');
      if (container) {
        if (chkMediaChange.checked) container.classList.remove('hidden');
        else container.classList.add('hidden');
      }
    });
  }

  const btnSavePage = document.getElementById('btn-save-page');
  if (btnSavePage && state.selectedPage) {
    btnSavePage.addEventListener('click', async () => {
      syncPageFormDataToState();
      state.loading = true;
      render();

      try {
        await api.savePage(state.selectedPage);
        state.feedback = { type: 'success', text: 'âœ… PÃ¡gina salva com sucesso! AlteraÃ§Ãµes ativas no site em tempo real.' };
      } catch (err) {
        state.feedback = { type: 'error', text: err.message };
      } finally {
        state.loading = false;
        render();
        setTimeout(() => { state.feedback = null; render(); }, 4000);
      }
    });
  }

  // BotÃµes de Presets de Capa Imponente
  document.querySelectorAll('.btn-preset-hero').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      const alt = btn.getAttribute('data-alt');
      const input = document.getElementById('page-hero-img-src');
      const prev = document.getElementById('page-preview-hero-img');
      if (input) input.value = src;
      if (prev) prev.src = src;
      if (state.selectedPage) {
        if (!state.selectedPage.hero) state.selectedPage.hero = {};
        state.selectedPage.hero.imagem = { src, alt };
      }
    });
  });

  // Upload Foto Hero da PÃ¡gina
  const pageFileHero = document.getElementById('page-file-hero');
  if (pageFileHero && state.selectedPage) {
    pageFileHero.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      state.loading = true;
      state.feedback = { type: 'success', text: 'Enviando imagem do banner...' };
      render();

      try {
        const publicUrl = await api.uploadPhoto(file);
        if (!state.selectedPage.hero) state.selectedPage.hero = {};
        state.selectedPage.hero.imagem = {
          src: publicUrl,
          alt: state.selectedPage.hero.titulo || state.selectedPage.nome
        };
        state.feedback = { type: 'success', text: 'Imagem do banner atualizada com sucesso!' };
      } catch (err) {
        state.feedback = { type: 'error', text: err.message };
      } finally {
        state.loading = false;
        render();
        setTimeout(() => { state.feedback = null; render(); }, 3500);
      }
    });
  }

  // Adicionar Nova SeÃ§Ã£o Ã  PÃ¡gina
  const btnAddPageSec = document.getElementById('btn-add-page-sec');
  if (btnAddPageSec && state.selectedPage) {
    btnAddPageSec.addEventListener('click', () => {
      if (!state.selectedPage.secoes) state.selectedPage.secoes = [];
      state.selectedPage.secoes.push({
        id: 'sec-' + (state.selectedPage.secoes.length + 1),
        titulo: 'Nova SeÃ§Ã£o de Destaque',
        texto: 'Texto explicativo da nova seÃ§Ã£o...',
        itens: []
      });
      render();
    });
  }

  // Excluir SeÃ§Ã£o da PÃ¡gina
  document.querySelectorAll('.btn-del-page-sec').forEach(btn => {
    btn.addEventListener('click', () => {
      const sIdx = parseInt(btn.getAttribute('data-sidx'), 10);
      state.selectedPage.secoes.splice(sIdx, 1);
      render();
    });
  });

  // Adicionar Pergunta FAQ
  const btnAddFaq = document.getElementById('btn-add-faq-item');
  if (btnAddFaq && state.selectedPage?.dados_extras?.faq) {
    btnAddFaq.addEventListener('click', () => {
      state.selectedPage.dados_extras.faq.push({
        pergunta: 'Nova pergunta frequente?',
        resposta: 'Resposta clara e detalhada para o cliente.'
      });
      render();
    });
  }

  // Excluir Pergunta FAQ
  document.querySelectorAll('.btn-del-faq').forEach(btn => {
    btn.addEventListener('click', () => {
      const fIdx = parseInt(btn.getAttribute('data-fidx'), 10);
      state.selectedPage.dados_extras.faq.splice(fIdx, 1);
      render();
    });
  });

  // SeleÃ§Ã£o de CardÃ¡pio
  document.querySelectorAll('.btn-select-menu').forEach(btn => {
    btn.addEventListener('click', () => {
      const slug = btn.getAttribute('data-slug');
      state.selectedMenu = state.menus.find(m => m.slug === slug);
      state.activeTab = 'geral';
      render();
    });
  });

  // Troca de abas do cardÃ¡pio
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.getAttribute('data-tab');
      render();
    });
  });

  // Salvar CardÃ¡pio
  const btnSaveMenu = document.getElementById('btn-save-menu');
  if (btnSaveMenu && state.selectedMenu) {
    btnSaveMenu.addEventListener('click', async () => {
      syncFormDataToState();
      state.loading = true;
      render();

      try {
        await api.saveMenu(state.selectedMenu);
        state.feedback = { type: 'success', text: 'âœ… CardÃ¡pio salvo com sucesso no banco de dados!' };
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

  // Upload Foto CardÃ¡pio
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
          alt: 'Foto do cardÃ¡pio ' + state.selectedMenu.nome,
          largura: 1280,
          altura: 960
        };
        if (state.selectedMenu.cartao) state.selectedMenu.cartao.imagem = state.selectedMenu.foto_capa;
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

  // Adicionar SeÃ§Ã£o CardÃ¡pio
  const btnAddSec = document.getElementById('btn-add-section');
  if (btnAddSec && state.selectedMenu) {
    btnAddSec.addEventListener('click', () => {
      if (!state.selectedMenu.secoes) state.selectedMenu.secoes = [];
      state.selectedMenu.secoes.push({ titulo: 'Nova SeÃ§Ã£o', itens: ['Novo Prato'] });
      render();
    });
  }

  // Excluir SeÃ§Ã£o CardÃ¡pio
  document.querySelectorAll('.btn-del-sec').forEach(btn => {
    btn.addEventListener('click', () => {
      const sIdx = parseInt(btn.getAttribute('data-sidx'), 10);
      state.selectedMenu.secoes.splice(sIdx, 1);
      render();
    });
  });

  // Copiar template cardÃ¡pio
  const btnCopyTemplate = document.getElementById('btn-copy-template');
  if (btnCopyTemplate && state.selectedMenu) {
    btnCopyTemplate.addEventListener('click', () => {
      const m = state.selectedMenu;
      let text = '# ' + m.nome + '\nCategoria: ' + m.categoria_id + '\nResumo: ' + m.resumo + '\n\n';
      (m.secoes || []).forEach(sec => {
        text += '## ' + sec.titulo + '\n';
        (sec.itens || []).forEach(it => {
          text += '- ' + it + '\n';
        });
        text += '\n';
      });
      const input = document.getElementById('paste-input');
      if (input) input.value = text;
      navigator.clipboard.writeText(text);
      state.feedback = { type: 'success', text: 'CardÃ¡pio copiado para a Ãrea de TransferÃªncia!' };
      render();
      setTimeout(() => { state.feedback = null; render(); }, 3000);
    });
  }

  // Parse paste cardÃ¡pio
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
      state.feedback = { type: 'success', text: 'Texto compreendido e aplicado com sucesso ao cardÃ¡pio!' };
      render();
      setTimeout(() => { state.feedback = null; render(); }, 3500);
    });
  }
}

// Sincroniza campos da PÃ¡gina antes de salvar
function syncPageFormDataToState(opts = {}) {
  const p = state.selectedPage;
  if (!p) return;

  const hTitle = document.getElementById('page-hero-title');
  if (hTitle) {
    if (!p.hero) p.hero = {};
    p.hero.titulo = hTitle.value.trim();
  }

  const hSub = document.getElementById('page-hero-subtitle');
  if (hSub) {
    if (!p.hero) p.hero = {};
    p.hero.subtitulo = hSub.value.trim();
  }

  // PreservaÃ§Ã£o de mÃ­dia se for apenas texto ou se for home sem permissÃ£o explÃ­cita
  if (!opts.onlyText) {
    const isHome = p.id === 'home';
    const chkMedia = document.getElementById('chk-allow-media-change');
    const allowMedia = !isHome || (chkMedia && chkMedia.checked);

    if (allowMedia) {
      const hSrc = document.getElementById('page-hero-img-src');
      if (hSrc) {
        if (!p.hero) p.hero = {};
        if (!p.hero.imagem) p.hero.imagem = { src: '', alt: p.nome };
        let val = hSrc.value.trim();
        if (val.includes('/reviews/')) {
          val = '/assets/hero-dfaria-luxo.jpg';
        }
        p.hero.imagem.src = val;
      }
    } else if (isHome) {
      // Garantir que a Home preserva o vÃ­deo cinematogrÃ¡fico Fasano
      if (!p.hero) p.hero = {};
      p.hero.video = {
        src: '/assets/dfaria-hero-cinematic.mp4',
        poster: '/assets/hero-cinematic-poster.jpg'
      };
      if (!p.hero.imagem) {
        p.hero.imagem = { src: '/assets/hero-cinematic-poster.jpg', alt: "D'Faria Gastronomia" };
      }
    }
  }

  const mTitle = document.getElementById('page-meta-title');
  if (mTitle) p.meta_title = mTitle.value;

  const mDesc = document.getElementById('page-meta-desc');
  if (mDesc) p.meta_description = mDesc.value;

  // Sincroniza seÃ§Ãµes da pÃ¡gina
  document.querySelectorAll('.page-sec-title').forEach(input => {
    const sIdx = parseInt(input.getAttribute('data-sidx'), 10);
    if (p.secoes && p.secoes[sIdx]) p.secoes[sIdx].titulo = input.value;
  });

  document.querySelectorAll('.page-sec-text').forEach(textarea => {
    const sIdx = parseInt(textarea.getAttribute('data-sidx'), 10);
    if (p.secoes && p.secoes[sIdx]) p.secoes[sIdx].texto = textarea.value;
  });

  document.querySelectorAll('.page-sec-itens').forEach(textarea => {
    const sIdx = parseInt(textarea.getAttribute('data-sidx'), 10);
    if (p.secoes && p.secoes[sIdx]) {
      p.secoes[sIdx].itens = textarea.value.split('\n').map(i => i.trim()).filter(Boolean);
    }
  });

  // Sincroniza FAQ se aplicÃ¡vel
  document.querySelectorAll('.faq-input-q').forEach(input => {
    const fIdx = parseInt(input.getAttribute('data-fidx'), 10);
    if (p.dados_extras?.faq && p.dados_extras.faq[fIdx]) {
      p.dados_extras.faq[fIdx].pergunta = input.value;
    }
  });

  document.querySelectorAll('.faq-input-a').forEach(textarea => {
    const fIdx = parseInt(textarea.getAttribute('data-fidx'), 10);
    if (p.dados_extras?.faq && p.dados_extras.faq[fIdx]) {
      p.dados_extras.faq[fIdx].resposta = textarea.value;
    }
  });

  // Sincroniza Contato se aplicÃ¡vel
  if (p.dados_extras?.contato) {
    const c = p.dados_extras.contato;
    const wDisp = document.getElementById('contact-whatsapp-display');
    if (wDisp) c.whatsapp_display = wDisp.value;
    const wNum = document.getElementById('contact-whatsapp-num');
    if (wNum) c.whatsapp_numero = wNum.value;
    const tDisp = document.getElementById('contact-phone-display');
    if (tDisp) c.telefone_display = tDisp.value;
    const emailEl = document.getElementById('contact-email');
    if (emailEl) c.email = emailEl.value;
    const addrEl = document.getElementById('contact-address');
    if (addrEl) c.endereco = addrEl.value;
    const hoursEl = document.getElementById('contact-hours');
    if (hoursEl) c.horario = hoursEl.value;
    const instaEl = document.getElementById('contact-instagram');
    if (instaEl) c.instagram = instaEl.value;
  }
}

// Sincroniza campos do CardÃ¡pio para o state antes de salvar
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

  document.querySelectorAll('.input-sec-title').forEach(input => {
    const sIdx = parseInt(input.getAttribute('data-sidx'), 10);
    if (m.secoes && m.secoes[sIdx]) m.secoes[sIdx].titulo = input.value;
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
  const [categories, menus, pricing, pages] = await Promise.all([
    api.getCategories(),
    api.getMenus(),
    api.getPricingConfig(),
    api.getPages()
  ]);
  state.categories = categories;
  state.menus = menus;
  state.pricingConfig = pricing;
  state.pages = pages;
  await Promise.all([extras.carregarPapel(), extras.carregarTema()]);
  if (state.papel !== 'dono' && (state.viewMode === 'aparencia' || state.viewMode === 'config')) state.viewMode = 'paginas';

  if (state.menus.length > 0 && !state.selectedMenu) {
    state.selectedMenu = state.menus[0];
  }
  if (!state.selectedPage && state.pages['home']) {
    state.selectedPage = state.pages['home'];
  }
}

// InicializaÃ§Ã£o
async function init() {
  extras.instalarExtras({ state, api, render, SUPABASE_URL, SUPABASE_KEY });
  if (state.token || state.refreshToken) {
    try {
      state.user = await api.getUser();
      if (!state.user && await api.refresh()) state.user = await api.getUser();
      if (state.user) {
        await loadInitialData();
      } else {
        state.token = null;
        localStorage.removeItem('df_chef_token');
        localStorage.removeItem('df_chef_refresh');
      }
    } catch (e) {
      state.token = null;
      localStorage.removeItem('df_chef_token');
    }
  }
  render();
  // renova a sessÃ£o a cada 40 minutos enquanto o painel estiver aberto (o acesso dura 1 hora)
  setInterval(() => { if (state.user) api.refresh(); }, 40 * 60 * 1000);
}

init();
