// Painel do Chef & CMS Completo D'Faria Gastronomia (v3)
// Gerencia 100% dos Cardápios Oficiais (17 itens) e Páginas do Site (19 páginas)
// URL: /painel | Privado, Seguro (Supabase Auth), Responsivo e Simples (Regra Zero)

const SUPABASE_URL = 'https://gcwxhawqvtqhpoohihjo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_yeda5BcY2QZyBoVMi4r_0Q_Hbxc5Ex2';

// Base padrão das 19 páginas do site
const DEFAULT_PAGES = {
  "home": {
    "id": "home",
    "nome": "🏠 Início (Página Principal)",
    "categoria": "Institucional",
    "slug": "/",
    "arquivo": "index.html",
    "meta_title": "Buffet para Casamentos e Eventos Corporativos | D&#x27;Faria",
    "meta_description": "Buffet e gastronomia para casamentos, eventos corporativos, formaturas e celebrações em Cesário Lange e região. Desde 2016, com mais de 38 anos de experiência do chef Cristiano De Faria.",
    "hero": {
      "titulo": "O CHEF CRISTIANO ASSUME CADA DETALHE.",
      "subtitulo": "VOCÊ CELEBRA, CONFRATERNIZA E APROVEITA CADA MOMENTO. VIVE O MELHOR DO SEU EVENTO.",
      "imagem": {
        "src": "/assets/hero-dfaria-luxo.jpg",
        "alt": "Banquete de alta gastronomia e buffet para eventos — D’Faria Gastronomia"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Um pouco do nosso trabalho ao vivo",
        "texto": "Montagem, atendimento e apresentação: o cuidado que aplicamos em cada evento.\n\nSOLICITAR ORÇAMENTO Eventos",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "O formato do dia, do jeito que ele pede",
        "texto": "D’FARIA GASTRONOMIA",
        "imagem": null,
        "itens": [
          "Eventos Corporativos Coffee breaks, jantares, palestras e grandes operações de fim de ano.",
          "Formaturas Celebrações grandes, com operação organizada do início ao fim.",
          "Aniversários, Bodas e Celebrações Datas marcantes com gastronomia e serviço à altura."
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Fogo, técnica e apresentação",
        "texto": "Da brasa viva sob a grelha ao corte preciso diante do convidado, cada estação do D’Faria Gastronomia é montada para servir o momento — conforme a proposta contratada.\n\nSolicite seu orçamento Ver toda a gastronomia Ver cardápios Galeria",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-4",
        "titulo": "Eventos, pratos, montagem e serviço",
        "texto": "Por que o D’Faria",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-5",
        "titulo": "Gastronomia é metade. A outra metade é operação.",
        "texto": "Cozinhar bem resolve o cardápio. Servir bem depende de equipe, estrutura, logística e coordenação — e é aí que se decide se o evento corre bem.\n\nHistória",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-6",
        "titulo": "Desde 2016, com mais de 38 anos de experiência por trás",
        "texto": "O D’Faria nasceu em 2016, mas a experiência que sustenta a casa vem de mais de 38 anos do chef Cristiano De Faria entre gastronomia, gestão, planejamento, coordenação de equipes, atendimento, logística e estrutura — em eventos pequenos e em grandes operações.\n\nNúmeros que sustentam a promessa\n\nTodos os números abaixo se referem à trajetória real do D’Faria e do chef Cristiano De Faria.\n\n38+ anos\n\nde experiência profissional do chef Cristiano De Faria\n\nTrajetória pessoal dedicada a gastronomia, serviço e operação de eventos — o D’Faria existe desde 2016.\n\n2.000 eventos\n\nservidos do primeiro ao último prato\n\nCasamentos, festas de família, formaturas e celebrações corporativas.\n\n8.500 convidados\n\nna maior operação já supervisionada\n\nCenter Norte, São Paulo — operação conduzida na trajetória profissional anterior ao D’Faria.\n\nRegiões atendidas",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-7",
        "titulo": "Cidades, condomínios e espaços da região",
        "texto": "Operação sediada em Cesário Lange, com atendimento nas cidades e nos espaços de eventos do entorno.\n\nDepoimentos",
        "imagem": null,
        "itens": [
          "01 Cesário Lange →",
          "02 Tatuí →",
          "03 Porangaba →",
          "04 Conchas →",
          "05 Cerquilho →",
          "06 Pereiras →",
          "07 Tietê →",
          "08 Residencial Village Manacá →",
          "09 Ninho Verde I Eco Residence →",
          "10 Condomínio Jatobá →"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "O que nossos clientes dizem",
        "texto": "Nota 5.0 com 57 avaliações no Google. Avaliações reais de clientes, publicadas no perfil oficial do D’Faria.\n\nA confiança se prova na mesa. Veja como o D’Faria é avaliado.\n\nAvaliações reais de clientes, direto no perfil oficial no Google.\n\nCaroline Câncio de Oliveira · 2 semanas atrás\n\nLarissa Ferreira · um mês atrás\n\nEmilyn Monreal · um mês atrás\n\nElias Miguel Inácio Silvestre · 2 meses atrás\n\nMarili Aparecida · 2 meses atrás\n\nAvaliações publicadas no Perfil da Empresa no Google.\n\nPerguntas frequentes",
        "imagem": {
          "src": "/reviews/caroline-cancio-de-oliveira.png",
          "alt": "Foto de perfil de Caroline Câncio de Oliveira no Google"
        },
        "itens": [
          "★★★★★ “Quero agradecer ao buffet por todo o carinho, dedicação e profissionalismo! ❤️ Tudo estava maravilhoso, desde o atendimento até a organização, a comida e cada detalhe. Vocês fizeram parte de um momento muito especial e ajudaram a tornar os 15 anos da minha filha inesquecíveis. Foi tudo feito com muito capricho e amor! Gratidão por fazerem parte desse sonho! 🩵✨” Caroline Câncio de Oliveira · 2 semanas atrás Ver avaliação no Google",
          "★★★★★ “Comida e atendimento SENSACIONAL! Nunca comi comida tão gostosa como comi nesses dias com esse buffet.” Larissa Ferreira · um mês atrás Ver avaliação no Google",
          "★★★★★ “Nossa experiência com o buffet foi excelente! A comida claramente foi preparada com muito capricho, estava saborosa e muito bem temperada. A mesa foi muito bem servida e organizada, com bastante atenção aos detalhes. Além da qualidade da comida, destaco o atendimento. O Cristiano e toda a equipe foram extremamente solícitos, educados e colaborativos durante todo o evento. Mostraram-se flexíveis diante das nossas necessidades específicas, foram cuidadosos com os ajustes de horário e sempre muito responsivos aos feedbacks e às demandas que surgiram. Os profissionais apresentaram-se responsáveis, agradáveis, bem articulados na busca por soluções, transmitindo confiança. Certamente voltaremos a contratá-los em outras oportunidades. Recomendamos muito!” Emilyn Monreal · um mês atrás Ver avaliação no Google",
          "★★★★★ “Quero deixar aqui o meu agradecimento especial ao Buffet D&#x27;Faria e Gastronomia Por todo o excelente serviço prestado. Foi tudo preparado com muito carinho, dedicação e profissionalismo, e isso fez toda a diferença. Agradeço de coração por todo o cuidado e atenção em cada detalhe. Recomendo muito o trabalho de vocês! Muito obrigado por fazerem parte desse momento e contribuírem para que tudo fosse ainda mais especial! 👏🏼❤️🍽️” Elias Miguel Inácio Silvestre · 2 meses atrás Ver avaliação no Google",
          "★★★★★ “Contratar o D’Faria Gastronomia e Eventos foi uma das melhores decisões para o nosso evento. Desde o primeiro contato fomos atendidos com muito profissionalismo e atenção. A qualidade das carnes, especialmente a costela no fogo de chão e a parrilla, impressionou todos os convidados. A equipe foi extremamente educada, organizada e cuidou de cada detalhe com muito capricho. Recebemos muitos elogios pela comida e pelo atendimento. Tudo foi servido no tempo certo, com excelente apresentação e um sabor impecável. Recomendo de olhos fechados para quem procura um buffet de alto padrão e quer proporcionar uma experiência inesquecível aos convidados. Com certeza contrataremos novamente!” Marili Aparecida · 2 meses atrás Ver avaliação no Google"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "O que costumam nos perguntar",
        "texto": "Ficou alguma dúvida? Fale pelo WhatsApp .\n\nCasamentos, eventos corporativos, formaturas, aniversários, festas de 15 anos, bodas, confraternizações e celebrações em geral, em diferentes portes.\n\nSim. O cardápio é montado junto com o cliente e pode contemplar opções vegetarianas e veganas, além de restrições alimentares informadas na fase de proposta.\n\nO valor depende do número de convidados, do cardápio, do formato do serviço, da estrutura necessária e da distância até o local. Por isso a proposta é feita caso a caso, sem tabela fixa.\n\nConforme a proposta contratada, o serviço pode envolver gastronomia, equipe especializada, mobiliário, enxoval, louças, prataria, réchauds, estações gastronômicas e a estrutura necessária para a execução do evento.\n\nQuanto antes, maior a disponibilidade de data — especialmente em alta temporada de casamentos e no fim de ano. Consulte a data desejada pelo WhatsApp para verificar a agenda.\n\nA degustação é combinada durante a negociação da proposta, conforme o tipo de evento e o cardápio em estudo. Fale com a equipe para alinhar as condições.\n\nSim, esses itens podem ser fornecidos conforme a proposta contratada, incluindo mobiliário, enxoval, louças, prataria e peças de serviço.\n\nA equipe é definida pelo número de convidados, pelo formato do serviço e pela estrutura do local, de modo a manter o ritmo de atendimento durante todo o evento.\n\nAjustes de número de convidados devem ser informados dentro do prazo combinado na proposta, para que cardápio, equipe e estrutura sejam redimensionados.\n\nSim. O serviço é executado em chácaras, sítios, condomínios, residências, espaços de eventos e na própria sede das empresas.\n\nSim. Coffee breaks, reuniões, treinamentos, palestras, workshops, confraternizações, festas de fim de ano, comemorações de metas, aniversários empresariais, almoços, jantares, coquetéis e lançamentos.\n\nSim. A experiência profissional de Cristiano D’Faria inclui a supervisão de uma grande operação realizada no Center Norte, em São Paulo, para aproximadamente 8.500 pessoas, com 850 mesas de 10 lugares, 12 pontos de buffet, 6 ilhas de open bar e centenas de profissionais envolvidos. Essa operação pertence à sua trajetória profissional anterior à criação do D’Faria Gastronomia e Eventos.\n\nInforme data, cidade e local, número aproximado de convidados, tipo de evento e serviço de interesse. Com esses dados a proposta sai mais próxima da realidade do seu evento.\n\nCesário Lange, Tatuí, Boituva, Cerquilho, Tietê, Itapetininga, Conchas, Pereiras e Porangaba, além de condomínios e espaços de eventos da região.\n\nDepois do primeiro contato, são levantadas as informações do evento, montada a proposta com cardápio, equipe e estrutura e, com o aceite, a data é reservada na agenda.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-10",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-12",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-13",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-14",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-15",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google",
          "👨‍🍳 Painel do Chef"
        ]
      }
    ],
    "galeria": [
      {
        "src": "/reviews/caroline-cancio-de-oliveira.png",
        "alt": "Foto de perfil de Caroline Câncio de Oliveira no Google"
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
        "alt": "Foto de perfil de Elias Miguel Inácio Silvestre no Google"
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
          "resposta": "Casamentos, eventos corporativos, formaturas, aniversários, festas de 15 anos, bodas, confraternizações e celebrações em geral, em diferentes portes."
        },
        {
          "pergunta": "Existem opções vegetarianas e veganas?",
          "resposta": "Sim. O cardápio é montado junto com o cliente e pode contemplar opções vegetarianas e veganas, além de restrições alimentares informadas na fase de proposta."
        },
        {
          "pergunta": "Quanto custa contratar um buffet?",
          "resposta": "O valor depende do número de convidados, do cardápio, do formato do serviço, da estrutura necessária e da distância até o local. Por isso a proposta é feita caso a caso, sem tabela fixa."
        },
        {
          "pergunta": "O que está incluído no buffet?",
          "resposta": "Conforme a proposta contratada, o serviço pode envolver gastronomia, equipe especializada, mobiliário, enxoval, louças, prataria, réchauds, estações gastronômicas e a estrutura necessária para a execução do evento."
        },
        {
          "pergunta": "Com quanto tempo de antecedência devo contratar?",
          "resposta": "Quanto antes, maior a disponibilidade de data — especialmente em alta temporada de casamentos e no fim de ano. Consulte a data desejada pelo WhatsApp para verificar a agenda."
        },
        {
          "pergunta": "Como funciona a degustação?",
          "resposta": "A degustação é combinada durante a negociação da proposta, conforme o tipo de evento e o cardápio em estudo. Fale com a equipe para alinhar as condições."
        },
        {
          "pergunta": "O buffet fornece mesas, louças e réchauds?",
          "resposta": "Sim, esses itens podem ser fornecidos conforme a proposta contratada, incluindo mobiliário, enxoval, louças, prataria e peças de serviço."
        },
        {
          "pergunta": "Como é dimensionada a equipe?",
          "resposta": "A equipe é definida pelo número de convidados, pelo formato do serviço e pela estrutura do local, de modo a manter o ritmo de atendimento durante todo o evento."
        },
        {
          "pergunta": "O que acontece se o número de convidados mudar?",
          "resposta": "Ajustes de número de convidados devem ser informados dentro do prazo combinado na proposta, para que cardápio, equipe e estrutura sejam redimensionados."
        },
        {
          "pergunta": "O D'Faria atende chácaras, sítios, condomínios, residências e empresas?",
          "resposta": "Sim. O serviço é executado em chácaras, sítios, condomínios, residências, espaços de eventos e na própria sede das empresas."
        },
        {
          "pergunta": "O D'Faria atende eventos corporativos?",
          "resposta": "Sim. Coffee breaks, reuniões, treinamentos, palestras, workshops, confraternizações, festas de fim de ano, comemorações de metas, aniversários empresariais, almoços, jantares, coquetéis e lançamentos."
        },
        {
          "pergunta": "O D'Faria atende eventos de grande porte?",
          "resposta": "Sim. A experiência profissional de Cristiano D’Faria inclui a supervisão de uma grande operação realizada no Center Norte, em São Paulo, para aproximadamente 8.500 pessoas, com 850 mesas de 10 lugares, 12 pontos de buffet, 6 ilhas de open bar e centenas de profissionais envolvidos. Essa operação pertence à sua trajetória profissional anterior à criação do D’Faria Gastronomia e Eventos."
        },
        {
          "pergunta": "Como solicitar um orçamento preciso?",
          "resposta": "Informe data, cidade e local, número aproximado de convidados, tipo de evento e serviço de interesse. Com esses dados a proposta sai mais próxima da realidade do seu evento."
        },
        {
          "pergunta": "O D'Faria atende quais cidades e regiões?",
          "resposta": "Cesário Lange, Tatuí, Boituva, Cerquilho, Tietê, Itapetininga, Conchas, Pereiras e Porangaba, além de condomínios e espaços de eventos da região."
        },
        {
          "pergunta": "Como funciona a contratação e definição da proposta?",
          "resposta": "Depois do primeiro contato, são levantadas as informações do evento, montada a proposta com cardápio, equipe e estrutura e, com o aceite, a data é reservada na agenda."
        }
      ]
    },
    "updated_at": "2026-11-22T17:54:55.560Z"
  },
  "o-dfaria": {
    "id": "o-dfaria",
    "nome": "👨‍🍳 O D’Faria & Chef Cristiano",
    "categoria": "Institucional",
    "slug": "/o-dfaria",
    "arquivo": "o-dfaria.html",
    "meta_title": "O D&#x27;Faria — história, experiência, equipe e estrutura",
    "meta_description": "Mais de 38 anos de experiência em gastronomia e operação de eventos, cerca de 2.000 eventos e operação para mais de 8.500 pessoas.",
    "hero": {
      "titulo": "O D’Faria",
      "subtitulo": "Buffet para casamentos e eventos em Cesário Lange e região",
      "imagem": {
        "src": "/__l5e/assets-v1/e5d011ca-5a5d-4743-8fa0-987e11261d08/salao-mesas-redondas-recepcao-dfaria.webp",
        "alt": "Salão montado com mesas redondas para recepção do D’Faria"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Conheça o D’Faria em vídeo",
        "texto": "Nossa história",
        "imagem": {
          "src": "/__l5e/assets-v1/e5d011ca-5a5d-4743-8fa0-987e11261d08/salao-mesas-redondas-recepcao-dfaria.webp",
          "alt": "Salão montado com mesas redondas para recepção do D’Faria"
        },
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Uma história construída em torno de grandes momentos.",
        "texto": "Experiência, gastronomia e excelência operacional transformando celebrações em experiências memoráveis.\n\nHistória",
        "imagem": {
          "src": "/__l5e/assets-v1/79439b84-da56-495f-9a75-81311d234e2c/mesa-posta-beira-piscina-dfaria.webp",
          "alt": "Mesa posta à beira da piscina para evento ao ar livre"
        },
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Nasceu da cozinha. Cresceu com os eventos.",
        "texto": "O D’Faria nasceu da cozinha e cresceu com os eventos. Ao longo de mais de 38 anos, a operação foi se ampliando: mais formatos, mais convidados, mais estrutura própria e uma equipe treinada para trabalhar sob pressão de horário.\n\nHoje o D’Faria acumula cerca de 2.000 eventos realizados, entre casamentos, celebrações familiares, formaturas e eventos de empresas.\n\nExperiência e trajetória",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-4",
        "titulo": "Gastronomia, gestão e operação no mesmo comando.",
        "texto": "A experiência do D’Faria envolve gastronomia, gestão, operação de eventos, planejamento, coordenação de equipes, atendimento, logística e estrutura.\n\nAntes de construir o D’Faria, Cristiano D’Faria acumulou experiência em grandes operações de gastronomia e eventos, atuando como maître principal do Buffet Maria Fulô, em São Paulo. Na prática, sua atuação envolvia liderança, coordenação e supervisão operacional de grandes equipes e estruturas.\n\n38+ anos de experiência\n\n2.000 eventos realizados\n\n8.500 convidados na maior operação\n\nEquipe",
        "imagem": {
          "src": "/__l5e/assets-v1/f4ef0018-2e70-437f-9026-c2f8a2094d3a/estacao-saladas-arroz-rechauds-dfaria.webp",
          "alt": "Estação de saladas, arroz e acompanhamentos em réchauds de inox"
        },
        "itens": []
      },
      {
        "id": "sec-5",
        "titulo": "Cozinha, salão e coordenação com funções definidas.",
        "texto": "A equipe é dimensionada evento a evento, considerando número de convidados, formato do serviço e características do local. Cozinha, salão e coordenação trabalham com funções definidas desde a montagem.\n\nEstrutura",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-6",
        "titulo": "Tudo o que o evento precisa para acontecer.",
        "texto": "Conforme a proposta contratada, o D’Faria pode fornecer gastronomia, equipe especializada, mobiliário, enxoval, louças, prataria, réchauds, estações gastronômicas e a estrutura necessária para a execução do evento.\n\nTrajetória profissional\n\n8.500\n\npessoas, aproximadamente",
        "imagem": {
          "src": "/__l5e/assets-v1/455b55ff-e44a-494e-8d42-9ec932b0f072/mesas-montadas-evento-ar-livre-dfaria.webp",
          "alt": "Mesas montadas com toalhas e cadeiras em evento ao ar livre estruturado pelo D’Faria"
        },
        "itens": []
      },
      {
        "id": "sec-7",
        "titulo": "Center Norte, São Paulo — operação para cerca de 8.500 pessoas",
        "texto": "Entre as grandes operações sob sua supervisão nesse período está um evento realizado no Center Norte, em São Paulo, para aproximadamente 8.500 pessoas.\n\nOperação realizada durante a atuação de Cristiano D’Faria como maître principal do Buffet Maria Fulô, em São Paulo — parte da sua trajetória profissional anterior à criação do D’Faria Gastronomia e Eventos.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-8",
        "titulo": "A confiança se prova na mesa. Veja como o D’Faria é avaliado.",
        "texto": "Avaliações reais de clientes, direto no perfil oficial no Google.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-9",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-11",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-12",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-13",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-14",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google",
          "👨‍🍳 Painel do Chef"
        ]
      }
    ],
    "galeria": [
      {
        "src": "/__l5e/assets-v1/e5d011ca-5a5d-4743-8fa0-987e11261d08/salao-mesas-redondas-recepcao-dfaria.webp",
        "alt": "Salão montado com mesas redondas para recepção do D’Faria"
      },
      {
        "src": "/__l5e/assets-v1/79439b84-da56-495f-9a75-81311d234e2c/mesa-posta-beira-piscina-dfaria.webp",
        "alt": "Mesa posta à beira da piscina para evento ao ar livre"
      },
      {
        "src": "/__l5e/assets-v1/f4ef0018-2e70-437f-9026-c2f8a2094d3a/estacao-saladas-arroz-rechauds-dfaria.webp",
        "alt": "Estação de saladas, arroz e acompanhamentos em réchauds de inox"
      },
      {
        "src": "/__l5e/assets-v1/3836589a-379b-4536-b7ee-54a3974d88a3/equipe-servindo-sobremesas-bandeja-dfaria.webp",
        "alt": "Profissional da equipe do D’Faria servindo sobremesas em bandeja durante o evento"
      },
      {
        "src": "/__l5e/assets-v1/455b55ff-e44a-494e-8d42-9ec932b0f072/mesas-montadas-evento-ar-livre-dfaria.webp",
        "alt": "Mesas montadas com toalhas e cadeiras em evento ao ar livre estruturado pelo D’Faria"
      },
      {
        "src": "/__l5e/assets-v1/67ace9da-8071-4626-812a-f63776a428b3/buffet-rechauds-saladas-dfaria.webp",
        "alt": "Buffet montado com réchauds, saladas e acompanhamentos em evento do D’Faria"
      },
      {
        "src": "/__l5e/assets-v1/4233a8bd-f9f5-4419-ac63-391420711ec7/estacao-churrasco-brasa-dfaria.webp",
        "alt": "Estação de churrasco com brasa e cortes em preparo"
      },
      {
        "src": "/__l5e/assets-v1/459e8554-24ce-4397-b95e-e3c6e7fa59fc/ilha-de-frios-evento-noturno-dfaria.webp",
        "alt": "Ilha de frios montada pela equipe do D’Faria em evento noturno"
      }
    ],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.562Z"
  },
  "eventos": {
    "id": "eventos",
    "nome": "🎉 Eventos (Visão Geral)",
    "categoria": "Eventos",
    "slug": "/eventos",
    "arquivo": "eventos.html",
    "meta_title": "Eventos atendidos | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Casamentos, eventos corporativos, formaturas, aniversários, bodas e celebrações com gastronomia, equipe e estrutura do D&#x27;Faria.",
    "hero": {
      "titulo": "Eventos atendidos pelo D’Faria",
      "subtitulo": "Cada formato tem um ritmo próprio de serviço. Escolha o tipo de evento para ver como o D’Faria trabalha.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Eventos atendidos pelo D’Faria"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google",
          "👨‍🍳 Painel do Chef"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.563Z"
  },
  "casamentos": {
    "id": "casamentos",
    "nome": "💍 Casamentos",
    "categoria": "Eventos",
    "slug": "/eventos/casamentos",
    "arquivo": "eventos/casamentos.html",
    "meta_title": "Buffet para Casamentos | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Buffet para casamentos em Cesário Lange e região, com gastronomia, equipe, estrutura e atendimento personalizado. Mais de 38 anos de experiência.",
    "hero": {
      "titulo": "Buffet para Casamentos",
      "subtitulo": "O casamento é um dia de muitas decisões e de uma única memória. O D&#x27;Faria acompanha o casal do planejamento do cardápio à última mesa recolhida, com gastronomia, equipe e estrutura dimensionadas para o formato da celebração.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Buffet para Casamentos"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "O que compõe o serviço",
        "texto": "Cada casamento recebe uma proposta própria. Conforme a proposta contratada, o serviço pode envolver:",
        "imagem": null,
        "itens": [
          "Gastronomia e cardápio personalizado",
          "Equipe especializada de cozinha e salão",
          "Mobiliário, enxoval, louças e prataria",
          "Réchauds e peças de serviço",
          "Estações gastronômicas ao vivo",
          "Estrutura necessária para a execução do evento"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "Formatos atendidos",
        "texto": "Recepções em chácaras, sítios, condomínios, espaços de eventos e residências, do jantar servido à mesa ao buffet completo com ilhas e estações.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Como começamos",
        "texto": "A conversa inicial define número de convidados, data, local e estilo da recepção. A partir disso montamos a proposta com cardápio, equipe e estrutura.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-4",
        "titulo": "Veja também",
        "texto": "",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Eventos Corporativos",
          "Formaturas"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Onde atendemos",
        "texto": "O D’Faria leva estrutura, equipe e gastronomia completa para as cidades e locais da região:",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-11",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.564Z"
  },
  "corporativos": {
    "id": "corporativos",
    "nome": "🏢 Eventos Corporativos",
    "categoria": "Eventos",
    "slug": "/eventos-corporativos",
    "arquivo": "eventos-corporativos.html",
    "meta_title": "Eventos Corporativos e Confraternização de Empresa | D&#x27;Faria",
    "meta_description": "Buffet para eventos corporativos: churrasco para empresas, confraternização de fim de ano, coffee breaks, almoços, jantares e coquetéis em Cesário Lange, Tatuí, Cerquilho, Tietê e região.",
    "hero": {
      "titulo": "Buffet para Eventos Corporativos",
      "subtitulo": "Gastronomia + Estrutura + Serviço",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Buffet para Eventos Corporativos"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Recepções que abrem o apetite",
        "texto": "Entradas e petiscos servidos em eventos do D’Faria — montados no local, conforme a proposta contratada.\n\nClientes já atendidos",
        "imagem": null,
        "itens": [
          "Pastel com caldo de cana",
          "Flor de batatas chips",
          "Terrine na tela, com cestos de pães, crostines, crostatas e grisines",
          "Mini batatas em conserva de chimichurri"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "Nosso portfólio.",
        "texto": "Algumas das empresas e instituições que fazem parte do nosso portfólio.\n\nOperações realizadas para empresas, cooperativas e instituições.\n\nD’Faria Gastronomia e Eventos\n\nFormatos atendidos",
        "imagem": null,
        "itens": [
          "Bayer",
          "Bradesco",
          "Bunge Alimentos",
          "Canopus",
          "Fadel Soluções em Logística",
          "Nitro",
          "Sicoob",
          "Sicredi",
          "LAF Sorocaba",
          "Igreja Presbiteriana do Morumbi"
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Do coffee break da manhã à festa de fim de ano",
        "texto": "O D&#x27;Faria atende empresas em diferentes formatos:\n\nRotina corporativa",
        "imagem": null,
        "itens": [
          "01 Churrasco corporativo e confraternização de equipe",
          "02 Festas de fim de ano",
          "03 Coffee breaks",
          "04 Reuniões, treinamentos e palestras",
          "05 Workshops",
          "06 Comemorações de metas e aniversários empresariais",
          "07 Almoços, jantares e coquetéis",
          "08 Lançamentos",
          "09 Grandes operações"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Coffee breaks, almoços, jantares e coquetéis",
        "texto": "Para a rotina corporativa, o serviço se ajusta ao relógio do evento: coffee break entre blocos de treinamento, almoço servido dentro da janela de intervalo, jantar de encerramento ou coquetel de lançamento e networking.",
        "imagem": null,
        "itens": [
          "Coffee break de manhã, tarde ou entre sessões",
          "Almoço executivo servido no local",
          "Jantar de encerramento ou premiação",
          "Coquetel de lançamento e networking",
          "Ilhas de frios e finger foods para recepção"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Churrasco para empresas e confraternizações",
        "texto": "O churrasco é o formato mais pedido para confraternizar equipe: reúne todo mundo em volta da brasa e funciona tanto no pátio da empresa quanto em chácaras e espaços alugados. O D&#x27;Faria leva assadores, cortes, acompanhamentos, equipe de cozinha e de salão — a estação pode ser churrasco premium, parrilla argentina ou costela de chão, conforme a proposta contratada.\n\nNovembro e dezembro concentram a agenda corporativa e as datas se esgotam primeiro. Fechar cardápio, número de convidados e local com antecedência é o que garante a data e permite dimensionar equipe e estrutura com folga.\n\nExperiência gastronômica",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-6",
        "titulo": "Evento de empresa também se lembra pela mesa",
        "texto": "As estações do D’Faria Gastronomia entram no evento corporativo conforme a proposta contratada — da brasa à recepção com ilhas de frios e finger foods.\n\nSolicite seu orçamento Ver toda a gastronomia Estrutura e serviço",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-7",
        "titulo": "Não é só a comida. É a operação inteira.",
        "texto": "O serviço pode ser executado na sede da empresa, em espaços de eventos, auditórios, chácaras e locais externos, conforme a proposta contratada. Quando o espaço não tem cozinha de apoio, a estrutura vai junto.\n\nChef Cristiano de Faria",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-8",
        "titulo": "Experiência à frente. Precisão em cada detalhe.",
        "texto": "Um evento corporativo representa a sua empresa. A gastronomia, a apresentação e o ritmo do serviço precisam estar à altura dessa responsabilidade.\n\nÀ frente do D’Faria desde 2016, o chef Cristiano de Faria reúne mais de 38 anos de experiência profissional em gastronomia e eventos. Essa trajetória orienta o planejamento do cardápio, a montagem das estações e o dimensionamento da equipe para cada ocasião.\n\nDo coffee break ao jantar de encerramento, a proposta considera o perfil dos participantes, os horários e a estrutura do local — para receber sua equipe, seus clientes e seus parceiros com cuidado e profissionalismo.\n\nCapacidade operacional",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-9",
        "titulo": "Experiência para dimensionar qualquer porte",
        "texto": "A trajetória profissional de Cristiano D’Faria inclui a supervisão de uma operação para cerca de 8.500 pessoas no Center Norte, em São Paulo, anterior à criação do D’Faria. Estrutura, equipe e logística são dimensionadas para o porte de cada evento.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-10",
        "titulo": "A confiança se prova na mesa. Veja como o D’Faria é avaliado.",
        "texto": "Avaliações reais de clientes, direto no perfil oficial no Google.\n\nComo pedir a proposta",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-11",
        "titulo": "Quatro informações e a proposta já sai dimensionada",
        "texto": "Informe data, cidade e local, número aproximado de participantes, horário e formato desejado (churrasco, coffee break, almoço, jantar ou coquetel). Com esses dados a proposta sai com cardápio, equipe e estrutura já dimensionados. Empresas com nota fiscal e prazos internos de aprovação devem sinalizar isso logo no primeiro contato.\n\nSolicite seu orçamento Fale pelo WhatsApp Prefere escrever com calma? Envie pelo formulário de orçamento ou ligue para (15) 99683-4734 .",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-12",
        "titulo": "Onde atendemos",
        "texto": "O D’Faria leva estrutura, equipe e gastronomia completa para as cidades e locais da região:",
        "imagem": null,
        "itens": [
          "Cesário Lange →",
          "Tatuí →",
          "Porangaba →",
          "Conchas →",
          "Cerquilho →",
          "Pereiras →",
          "Tietê →",
          "Residencial Village Manacá →",
          "Ninho Verde I Eco Residence →",
          "Colina das Estrelas →"
        ]
      },
      {
        "id": "sec-13",
        "titulo": "Vamos montar o evento da sua empresa?",
        "texto": "Informe data, cidade, número de participantes e formato. A partir daí montamos a proposta com cardápio, equipe e estrutura.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-15",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.566Z"
  },
  "formaturas": {
    "id": "formaturas",
    "nome": "🎓 Formaturas",
    "categoria": "Eventos",
    "slug": "/eventos/formaturas",
    "arquivo": "eventos/formaturas.html",
    "meta_title": "Buffet para Formaturas | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Buffet para formaturas com gastronomia, equipe e estrutura para grandes públicos, em Cesário Lange, Tatuí, Cerquilho, Tietê e região.",
    "hero": {
      "titulo": "Buffet para Formaturas",
      "subtitulo": "Formatura reúne muita gente em pouco tempo. O planejamento de fluxo, equipe e reposição é o que garante que todo mundo seja bem servido — do primeiro ao último convidado.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Buffet para Formaturas"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Estrutura para grandes públicos",
        "texto": "Dimensionamento de equipe, estações gastronômicas e reposição contínua, conforme o número de convidados e o formato do salão.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Opções gastronômicas",
        "texto": "Churrasco premium, parrilla argentina, costela de chão, ilhas de frios e finger foods e estações gastronômicas podem compor o cardápio, conforme a proposta contratada.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja também",
        "texto": "",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Onde atendemos",
        "texto": "O D’Faria leva estrutura, equipe e gastronomia completa para as cidades e locais da região:",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.567Z"
  },
  "aniversarios": {
    "id": "aniversarios",
    "nome": "🎂 Aniversários e Bodas",
    "categoria": "Eventos",
    "slug": "/eventos/aniversarios-bodas-e-celebracoes",
    "arquivo": "eventos/aniversarios-bodas-e-celebracoes.html",
    "meta_title": "Buffet para Aniversários, Bodas e Celebrações | D&#x27;Faria",
    "meta_description": "Buffet para aniversários, festas de 15 anos, bodas e celebrações familiares, com gastronomia, equipe e estrutura em Cesário Lange e região.",
    "hero": {
      "titulo": "Buffet para Aniversários, Bodas e Celebrações",
      "subtitulo": "Aniversários, festas de 15 anos, bodas e comemorações em família pedem proximidade. O D&#x27;Faria ajusta cardápio, serviço e montagem ao tamanho e ao clima da celebração.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Buffet para Aniversários, Bodas e Celebrações"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Celebrações atendidas",
        "texto": "Entre os formatos mais comuns:",
        "imagem": null,
        "itens": [
          "Aniversários",
          "Festas de 15 anos",
          "Bodas",
          "Almoços e jantares em família",
          "Confraternizações"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "Em casa, na chácara ou no salão",
        "texto": "O D&#x27;Faria atende chácaras, sítios, condomínios, residências e espaços de eventos, levando gastronomia, equipe e estrutura conforme a proposta contratada.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja também",
        "texto": "",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Onde atendemos",
        "texto": "O D’Faria leva estrutura, equipe e gastronomia completa para as cidades e locais da região:",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.568Z"
  },
  "gastronomia": {
    "id": "gastronomia",
    "nome": "🍲 Gastronomia (Visão Geral)",
    "categoria": "Gastronomia",
    "slug": "/gastronomia",
    "arquivo": "gastronomia.html",
    "meta_title": "Gastronomia para eventos | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Churrasco premium, parrilla argentina, costela de chão, ilhas de frios e finger foods, esculturas em frutas e estações gastronômicas.",
    "hero": {
      "titulo": "Fogo, técnica e apresentação",
      "subtitulo": "As experiências gastronômicas do D’Faria são montadas no local do evento, conforme a proposta contratada.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Fogo, técnica e apresentação"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Churrasco Premium",
        "texto": "Cortes nobres, ponto controlado e serviço contínuo. O churrasco premium do D&#x27;Faria é preparado no local do evento e servido no ritmo da festa.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Parrilla Argentina",
        "texto": "A parrilla é gastronomia e cena ao mesmo tempo: o fogo fica à vista, o corte acontece na frente do convidado e o serviço segue quente do início ao fim.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Costela de Chão",
        "texto": "Fogo baixo, tempo longo e paciência. A costela de chão é uma estação de presença: ela marca o ambiente antes mesmo de ser servida.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-4",
        "titulo": "Ilhas de Frios e Finger Foods",
        "texto": "As ilhas de frios e finger foods abrem o evento. É o primeiro contato do convidado com a mesa — e por isso recebem cuidado de montagem, apresentação e reposição.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-5",
        "titulo": "Esculturas em Frutas",
        "texto": "Trabalho manual que dá volume, cor e centro às ilhas. As esculturas em frutas compõem a apresentação das mesas e estações.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-6",
        "titulo": "Estações Gastronômicas",
        "texto": "Estações distribuem o fluxo de convidados e transformam o serviço em experiência. Cada uma é montada com equipe, equipamento e peças próprias.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-7",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-11",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-12",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google",
          "👨‍🍳 Painel do Chef"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.569Z"
  },
  "churrasco-premium": {
    "id": "churrasco-premium",
    "nome": "🥩 Churrasco Premium",
    "categoria": "Gastronomia",
    "slug": "/gastronomia/churrasco-premium",
    "arquivo": "gastronomia/churrasco-premium.html",
    "meta_title": "Churrasco Premium para Eventos | D&#x27;Faria",
    "meta_description": "Churrasco premium para casamentos, formaturas e eventos corporativos: cortes nobres na brasa, assadores e serviço à mesa em Cesário Lange e região.",
    "hero": {
      "titulo": "Churrasco Premium para Eventos",
      "subtitulo": "Cortes nobres, ponto controlado e serviço contínuo. O churrasco premium do D&#x27;Faria é preparado no local do evento e servido no ritmo da festa.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Churrasco Premium para Eventos"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Como funciona",
        "texto": "A operação é montada no local, com assadores, equipe de corte e serviço. O cardápio de cortes é definido na proposta, conforme o número de convidados e o formato do evento.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Combina com",
        "texto": "Ilhas de frios e finger foods na recepção, estações gastronômicas e sobremesas — conforme a proposta contratada.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja também",
        "texto": "",
        "imagem": null,
        "itens": [
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.569Z"
  },
  "parrilla": {
    "id": "parrilla",
    "nome": "🇦🇷 Parrilla Argentina",
    "categoria": "Gastronomia",
    "slug": "/gastronomia/parrilla-argentina",
    "arquivo": "gastronomia/parrilla-argentina.html",
    "meta_title": "Parrilla Argentina para Eventos | D&#x27;Faria",
    "meta_description": "Parrilla argentina em eventos: assados no fogo, corte na hora e apresentação como parte da experiência gastronômica do D&#x27;Faria.",
    "hero": {
      "titulo": "Parrilla Argentina para Eventos",
      "subtitulo": "A parrilla é gastronomia e cena ao mesmo tempo: o fogo fica à vista, o corte acontece na frente do convidado e o serviço segue quente do início ao fim.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Parrilla Argentina para Eventos"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "A experiência",
        "texto": "Grelha em brasa, controle de ponto e corte no momento do serviço. Uma estação que concentra atenção e alimenta bem.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Estrutura",
        "texto": "Equipamento, equipe e peças de serviço acompanham a proposta contratada.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja também",
        "texto": "",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.570Z"
  },
  "costela-de-chao": {
    "id": "costela-de-chao",
    "nome": "🔥 Costela no Fogo de Chão",
    "categoria": "Gastronomia",
    "slug": "/gastronomia/costela-de-chao",
    "arquivo": "gastronomia/costela-de-chao.html",
    "meta_title": "Costela de Chão para Eventos | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Costela de chão assada em fogo lento como estação especial do evento, com apresentação e serviço executados pela equipe do D&#x27;Faria.",
    "hero": {
      "titulo": "Costela de Chão para Eventos",
      "subtitulo": "Fogo baixo, tempo longo e paciência. A costela de chão é uma estação de presença: ela marca o ambiente antes mesmo de ser servida.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Costela de Chão para Eventos"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Preparo",
        "texto": "A peça é assada no local, em cocção lenta ao redor do fogo, acompanhada pela equipe durante todo o processo.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Apresentação",
        "texto": "A estação pode ser posicionada como atração do evento, com corte e serviço diante dos convidados.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja também",
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
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.571Z"
  },
  "frios-finger-food": {
    "id": "frios-finger-food",
    "nome": "🧀 Frios & Finger Food",
    "categoria": "Gastronomia",
    "slug": "/frios-e-finger-food",
    "arquivo": "frios-e-finger-food.html",
    "meta_title": "Ilhas de Frios e Finger Foods | D&#x27;Faria",
    "meta_description": "Ilhas de frios e finger foods para casamentos, festas de 15 anos, aniversários e eventos corporativos, com montagem, mobiliário, enxoval e peças de serviço.",
    "hero": {
      "titulo": "Ilhas de Frios e Finger Foods",
      "subtitulo": "As ilhas de frios e finger foods abrem o evento. É o primeiro contato do convidado com a mesa — e por isso recebem cuidado de montagem, apresentação e reposição.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Ilhas de Frios e Finger Foods"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "O que compõe",
        "texto": "Conforme a proposta contratada, a montagem pode envolver:",
        "imagem": null,
        "itens": [
          "Frios",
          "Finger foods",
          "Esculturas em frutas",
          "Mobiliário e enxoval",
          "Louças e peças de serviço",
          "Montagem e apresentação no local"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "Para quais eventos",
        "texto": "Casamentos, festas de 15 anos, aniversários e eventos corporativos.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja também",
        "texto": "Fotos reais",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Ilhas de frios e finger foods do D’Faria",
        "texto": "Registros de tábuas de frios, canapés, mini sanduíches e porções individuais servidos em eventos atendidos pelo D’Faria.\n\nPeça central\n\nA terrine de roquefort com nozes chega à mesa servida em uma tela, como um quadro que abre a ilha. O acabamento é feito na hora, com ervas frescas, e ao redor ficam pães, torradas e antepastos que a acompanham.\n\nFinger foods\n\nPorções individuais pensadas para serem servidas em um único movimento: cones de massa crocante recheados com tabule, finalizados com hortelã e montados em tábuas de madeira.\n\nServiço\n\nDurante a recepção, a equipe do D’Faria circula entre os convidados servindo os finger foods em bandejas — o cardápio chega fresco, na medida, sem que ninguém precise sair do lugar.\n\nQueijos\n\nQueijos como o brie entram na ilha acompanhados de mel, laranja e nozes — um contraste doce e fresco junto aos frios e pães da recepção.\n\nFrios\n\nSalames, queijos, batatinhas, tomates cereja e frutas da estação: a tábua de frios que costuma reunir os primeiros grupos de convidados em volta da mesa.\n\nGaleria",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-5",
        "titulo": "Mais fotos dos eventos",
        "texto": "Registros de tábuas de frios, canapés, mini sanduíches e porções individuais servidos em eventos atendidos pelo D’Faria.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-6",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-11",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google",
          "👨‍🍳 Painel do Chef"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.571Z"
  },
  "esculturas": {
    "id": "esculturas",
    "nome": "🍉 Esculturas em Frutas",
    "categoria": "Gastronomia",
    "slug": "/gastronomia/esculturas-em-frutas",
    "arquivo": "gastronomia/esculturas-em-frutas.html",
    "meta_title": "Esculturas em Frutas | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Esculturas em frutas como elemento de apresentação das ilhas e estações gastronômicas do D&#x27;Faria em casamentos e eventos.",
    "hero": {
      "titulo": "Esculturas em Frutas",
      "subtitulo": "Trabalho manual que dá volume, cor e centro às ilhas. As esculturas em frutas compõem a apresentação das mesas e estações.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Esculturas em Frutas"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Onde aparecem",
        "texto": "Compondo ilhas de frios e finger foods, mesas de recepção e estações gastronômicas, conforme a proposta contratada.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Veja também",
        "texto": "Arte &amp; Maestria Manual",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Galeria de Esculturas em Frutas",
        "texto": "Cada escultura é uma obra única produzida artesanalmente pelo chef Cristiano de Faria e equipe para encantar seus convidados e coroar a apresentação gastronômica do seu evento.\n\nComposição monumental com melancias entalhadas em flor e mensagem festiva, ladeada por coroas de abacaxi e folhas de palmeira.\n\nEscultura de cisne em melão espanhol com melancia em pétalas e casal de pássaros esculpidos, cercada por seleção de frutas frescas.\n\nMelancia floral central com barquetes de abacaxi cortados em leque, cisne em maçã verde e cascata de uvas e cerejas.\n\nGrau máximo de precisão em camadas tridimensionais que revelam o degradê natural da casca branca à polpa vermelha viva.\n\nEscultura delicada com textura aveludada nas pétalas, montada especialmente para ilhas de alta sofisticação.\n\nEntalhe rendado na casca do melão amarelo formando uma alça perfeita, preenchida com morangos frescos e uvas selecionadas.\n\nPássaros esculpidos diretamente na coroa do abacaxi com morangos silvestres, kiwis laminados e melão.\n\nPadrão floral concêntrico esculpido à mão livre sobre melancia fresca, acompanhado de fatias triangulares para os convidados.\n\nDetalhe dos cortes em ângulo preciso com detalhes foliares esculpidos aproveitando a própria casca verde.\n\nTrabalho de tipografia na casca com moldura de rosas em três dimensões sobre farta base de mangas, pêssegos e ameixas.\n\nCubos refrescantes de mamão papaya com coração de melão esculpido e flor de gomos de laranja com cereja marrasquino.\n\nComposição de Ano Novo com cortes chanfrados e contraste marcante entre o verde da casca e o vermelho da polpa.\n\nGrande arranjo de celebração com flor de mamão com kiwi ao centro e abundância de frutas da estação.\n\nLetreiro entalhado em melancia rodeado por maçãs gala, ameixas frescas, peras williams e uvas thompson.\n\nEntalhe rendado na melancia com leque de pétalas, kiwis e cerejas frescas.\n\nDeseja uma escultura personalizada com o tema ou monograma do seu evento?",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-4",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.572Z"
  },
  "estacoes": {
    "id": "estacoes",
    "nome": "🍽️ Estações Gastronômicas",
    "categoria": "Gastronomia",
    "slug": "/gastronomia/estacoes-gastronomicas",
    "arquivo": "gastronomia/estacoes-gastronomicas.html",
    "meta_title": "Estações Gastronômicas | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Estações gastronômicas montadas no local do evento, com preparo e serviço ao vivo pela equipe do D&#x27;Faria.",
    "hero": {
      "titulo": "Estações Gastronômicas",
      "subtitulo": "Estações distribuem o fluxo de convidados e transformam o serviço em experiência. Cada uma é montada com equipe, equipamento e peças próprias.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Estações Gastronômicas"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Montagem",
        "texto": "A quantidade e o tipo de estação são definidos pelo número de convidados, pelo espaço disponível e pelo formato do evento.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-2",
        "titulo": "Composição possível",
        "texto": "Estações podem incluir churrasco premium, parrilla argentina, costela de chão, ilhas de frios e finger foods e roda-gigante, quando fizer parte da proposta.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Veja também",
        "texto": "",
        "imagem": null,
        "itens": [
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Casamentos",
          "Eventos Corporativos"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {},
    "updated_at": "2026-11-22T17:54:55.573Z"
  },
  "locacao": {
    "id": "locacao",
    "nome": "🪑 Locação de Materiais",
    "categoria": "Serviços",
    "slug": "/alugue-material-para-festa",
    "arquivo": "alugue-material-para-festa.html",
    "meta_title": "D’Faria Locações | Aluguel de Materiais para Festas em Cesário Lange",
    "meta_description": "Aluguel de materiais para festas em Cesário Lange e região: mesas, cadeiras, louças, rechauds, suqueiras, suportes e utensílios. Consulte o D’Faria Locações.",
    "hero": {
      "titulo": "O D’Faria Locações — Aluguel de Materiais para Festas e Eventos",
      "subtitulo": "A operação que você conheceu como FAÇA A FESTA agora está em uma nova fase: o D’Faria Locações. Seguimos com mesas, cadeiras, louças, copos, taças, toalhas e outros materiais para festas e eventos — prontos para deixar a sua comemoração completa, do jantar em casa à festa grande.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "O D’Faria Locações — Aluguel de Materiais para Festas e Eventos"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Materiais disponíveis para locação",
        "texto": "Todas as fotos são dos materiais reais que ficam à disposição para aluguel.\n\nConjuntos para acomodar os convidados com conforto, em qualquer tamanho de festa.\n\nConsultar disponibilidade Cadeira plástica branca Consultar disponibilidade Mesas e cadeiras montadas para o evento Consultar disponibilidade Mesa retangular dobrável Consultar disponibilidade D’Faria Locações\n\nMesas e cadeiras conferidas peça por peça antes de cada locação: limpas, firmes e prontas para acomodar seus convidados com conforto do início ao fim da festa.\n\nMontagem clássica de salão: mesa redonda vestida e cadeiras com capa, na cor que combinar com a sua festa.\n\nConsultar disponibilidade Mesa redonda com toalha azul marinho Consultar disponibilidade Mesa redonda com toalha branca Consultar disponibilidade D’Faria Locações\n\nToalhas e capas lavadas e passadas com o mesmo cuidado que o D’Faria dedica aos seus próprios eventos, para que cada mesa chegue impecável ao seu salão.\n\nPeças para montar a mesa posta e servir bebidas com apresentação bonita.\n\nConsultar disponibilidade Prato raso de porcelana Consultar disponibilidade Taça Paulista Consultar disponibilidade Taça Diamond Consultar disponibilidade Xícara com pires e colher Consultar disponibilidade D’Faria Locações\n\nPratos, taças e xícaras são higienizados e revisados um a um. A Taça Paulista e a Taça Diamond dão brilho à mesa posta e valorizam cada brinde.\n\nD’Faria Locações\n\nPratos, taças e xícaras são higienizados e revisados um a um. A Taça Paulista e a Taça Diamond dão brilho à mesa posta e valorizam cada brinde.\n\nToalhas xadrez em várias cores para dar identidade à decoração da festa.\n\nConsultar disponibilidade D’Faria Locações\n\nToalhas em várias cores para compor a decoração da sua festa. Cada peça é lavada, conferida e dobrada com cuidado, pronta para deixar o ambiente acolhedor e bem apresentado.\n\nD’Faria Locações\n\nToalhas em várias cores para compor a decoração da sua festa. Cada peça é lavada, conferida e dobrada com cuidado, pronta para deixar o ambiente acolhedor e bem apresentado.\n\nBandejas, panelas e suportes para preparar e servir com organização.\n\nConsultar disponibilidade Rechaud retangular com cuba única Consultar disponibilidade Rechaud redondo com tampa de vidro Consultar disponibilidade Rechaud redondo com alças Consultar disponibilidade Bandejas redondas de inox Consultar disponibilidade Panelões de alumínio Consultar disponibilidade Talheres (garfos e facas) Consultar disponibilidade Suporte de madeira em três andares Consultar disponibilidade Roda gigante para frios, doces ou finger foods Consultar disponibilidade Samovar em prata para chá ou café Consultar disponibilidade Samovar prateado ornamentado para café Consultar disponibilidade Açucareiro de inox com tampa Consultar disponibilidade Suqueira de vidro com torneira Consultar disponibilidade Panela de barro com tampa Consultar disponibilidade Conjunto de panelas de barro com tampa Consultar disponibilidade Travessa redonda de vidro Consultar disponibilidade Suporte redondo em três andares Consultar disponibilidade Suportes para buffet e finger foods Consultar disponibilidade Espátula de inox para bolo Consultar disponibilidade Pegador de massa de inox Consultar disponibilidade Pegador de inox dentado Consultar disponibilidade D’Faria Locações\n\nRéchauds, bandejas, samovares e suportes são mantidos limpos e polidos, para que a apresentação dos alimentos seja tão bonita quanto o sabor.\n\nApoio para bebidas e cozinha, para a operação do evento funcionar sem improviso.\n\nConsultar disponibilidade Fogão industrial 3 bocas Consultar disponibilidade Estrutura reforçada do fogão industrial Consultar disponibilidade Chapa dupla para crepe francês Consultar disponibilidade Garrafa térmica de inox Consultar disponibilidade Acervo de materiais para locação Consultar disponibilidade Salão montado com os nossos materiais de locação. Os materiais também acompanham os eventos que o D’Faria atende em condomínios da região, como o Ninho Verde I Eco Residence .\n\nCesário Lange e região",
        "imagem": null,
        "itens": [
          "Conjunto de mesa com 4 cadeiras Consultar disponibilidade",
          "Cadeira plástica branca Consultar disponibilidade",
          "Mesas e cadeiras montadas para o evento Consultar disponibilidade",
          "Mesa retangular dobrável Consultar disponibilidade",
          "D’Faria Locações Conforto para receber Mesas e cadeiras conferidas peça por peça antes de cada locação: limpas, firmes e prontas para acomodar seus convidados com conforto do início ao fim da festa.",
          "Mesa redonda com toalha de renda branca Consultar disponibilidade",
          "Mesa redonda com toalha azul marinho Consultar disponibilidade",
          "Mesa redonda com toalha branca Consultar disponibilidade",
          "D’Faria Locações Salão vestido com elegância Toalhas e capas lavadas e passadas com o mesmo cuidado que o D’Faria dedica aos seus próprios eventos, para que cada mesa chegue impecável ao seu salão.",
          "Prato raso branco trabalhado Consultar disponibilidade"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "Locação de materiais para festas em Cesário Lange e região",
        "texto": "O D’Faria fica na R. Quinze de Novembro, 910 , Centro , em Cesário Lange/SP. Daqui atendemos festas e eventos na cidade e na região, com o mesmo cuidado do buffet em Cesário Lange . Se preferir o evento completo, conheça também os cardápios , as Ilhas de Frios e Finger Foods ou peça um orçamento .\n\nComo funciona",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Quatro passos até a sua festa montada",
        "texto": "Veja o catálogo e separe o que a sua festa precisa.\n\nDiga o dia do evento e quantas peças você quer.\n\nConferimos o estoque para a data informada.\n\nAcertamos entrega, retirada e os detalhes finais.\n\nPerguntas frequentes",
        "imagem": null,
        "itens": [
          "01 Escolha os materiais Veja o catálogo e separe o que a sua festa precisa.",
          "02 Informe data e quantidade Diga o dia do evento e quantas peças você quer.",
          "03 Consultamos a disponibilidade Conferimos o estoque para a data informada.",
          "04 Combinamos a locação Acertamos entrega, retirada e os detalhes finais."
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Dúvidas sobre a locação",
        "texto": "Mesas e cadeiras, toalhas e capas, louças, copos, taças, xícaras, rechauds, bandejas, panelas, talheres, suportes para buffet e finger foods, samovares, suqueira, champanheira, fogão industrial, chapa para crepe e garrafa térmica. Todos os itens do catálogo aparecem com foto real.\n\nNão. A locação atende festas com ou sem buffet contratado do D’Faria.\n\nO D’Faria fica em Cesário Lange/SP e atende a cidade e a região, incluindo condomínios como o Ninho Verde I Eco Residence.\n\nPelo WhatsApp da locação, (15) 99769-7332. Informe a data do evento, os materiais e as quantidades para conferirmos o estoque.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-5",
        "titulo": "Vai fazer uma festa?",
        "texto": "Alugue o material que você precisa.\n\nConsultar disponibilidade pelo WhatsApp FAÇA A FESTA · (15) 99769-7332\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-10",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google",
          "👨‍🍳 Painel do Chef"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {
      "faq": [
        {
          "pergunta": "Quais materiais o D’Faria Locações tem para alugar?",
          "resposta": "Mesas e cadeiras, toalhas e capas, louças, copos, taças, xícaras, rechauds, bandejas, panelas, talheres, suportes para buffet e finger foods, samovares, suqueira, champanheira, fogão industrial, chapa para crepe e garrafa térmica. Todos os itens do catálogo aparecem com foto real."
        },
        {
          "pergunta": "Preciso contratar o buffet para alugar os materiais?",
          "resposta": "Não. A locação atende festas com ou sem buffet contratado do D’Faria."
        },
        {
          "pergunta": "Qual região o D’Faria Locações atende?",
          "resposta": "O D’Faria fica em Cesário Lange/SP e atende a cidade e a região, incluindo condomínios como o Ninho Verde I Eco Residence."
        },
        {
          "pergunta": "Como consulto a disponibilidade?",
          "resposta": "Pelo WhatsApp da locação, (15) 99769-7332. Informe a data do evento, os materiais e as quantidades para conferirmos o estoque."
        }
      ]
    },
    "updated_at": "2026-11-22T17:54:55.575Z"
  },
  "galeria": {
    "id": "galeria",
    "nome": "📸 Galeria de Fotos",
    "categoria": "Mídia",
    "slug": "/galeria",
    "arquivo": "galeria.html",
    "meta_title": "Galeria de Momentos Inesquecíveis | D&#x27;Faria",
    "meta_description": "Fotografias reais de eventos do D&#x27;Faria: ilhas de frios, churrasco, costela de chão, parrilla, finger foods, montagem e serviço.",
    "hero": {
      "titulo": "Galeria de Momentos Inesquecíveis",
      "subtitulo": "Fotografias de eventos realizados pelo D’Faria Gastronomia e Eventos: gastronomia, montagem, serviço e equipe.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Galeria de Momentos Inesquecíveis"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google",
          "👨‍🍳 Painel do Chef"
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
    "nome": "⭐ Depoimentos de Clientes",
    "categoria": "Institucional",
    "slug": "/depoimentos",
    "arquivo": "depoimentos.html",
    "meta_title": "Depoimentos de clientes | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Depoimentos reais de clientes do D&#x27;Faria e acesso às avaliações publicadas no perfil oficial da empresa no Google.",
    "hero": {
      "titulo": "O que nossos clientes dizem",
      "subtitulo": "Publicamos apenas avaliações reais de clientes, vindas do perfil oficial do D’Faria no Google.",
      "imagem": {
        "src": "/__l5e/assets-v1/e5d011ca-5a5d-4743-8fa0-987e11261d08/salao-mesas-redondas-recepcao-dfaria.webp",
        "alt": "Salão nobre montado para recepção do D’Faria"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Nota 5.0 com 57 avaliações no Google",
        "texto": "Avaliações reais de clientes, publicadas no perfil oficial do D’Faria.\n\nCaroline Câncio de Oliveira · 2 semanas atrás\n\nLarissa Ferreira · um mês atrás\n\nEmilyn Monreal · um mês atrás\n\nElias Miguel Inácio Silvestre · 2 meses atrás\n\nMarili Aparecida · 2 meses atrás\n\nAvaliações publicadas no Perfil da Empresa no Google.",
        "imagem": {
          "src": "/reviews/caroline-cancio-de-oliveira.png",
          "alt": "Foto de perfil de Caroline Câncio de Oliveira no Google"
        },
        "itens": [
          "★★★★★ “Quero agradecer ao buffet por todo o carinho, dedicação e profissionalismo! ❤️ Tudo estava maravilhoso, desde o atendimento até a organização, a comida e cada detalhe. Vocês fizeram parte de um momento muito especial e ajudaram a tornar os 15 anos da minha filha inesquecíveis. Foi tudo feito com muito capricho e amor! Gratidão por fazerem parte desse sonho! 🩵✨” Caroline Câncio de Oliveira · 2 semanas atrás Ver avaliação no Google",
          "★★★★★ “Comida e atendimento SENSACIONAL! Nunca comi comida tão gostosa como comi nesses dias com esse buffet.” Larissa Ferreira · um mês atrás Ver avaliação no Google",
          "★★★★★ “Nossa experiência com o buffet foi excelente! A comida claramente foi preparada com muito capricho, estava saborosa e muito bem temperada. A mesa foi muito bem servida e organizada, com bastante atenção aos detalhes. Além da qualidade da comida, destaco o atendimento. O Cristiano e toda a equipe foram extremamente solícitos, educados e colaborativos durante todo o evento. Mostraram-se flexíveis diante das nossas necessidades específicas, foram cuidadosos com os ajustes de horário e sempre muito responsivos aos feedbacks e às demandas que surgiram. Os profissionais apresentaram-se responsáveis, agradáveis, bem articulados na busca por soluções, transmitindo confiança. Certamente voltaremos a contratá-los em outras oportunidades. Recomendamos muito!” Emilyn Monreal · um mês atrás Ver avaliação no Google",
          "★★★★★ “Quero deixar aqui o meu agradecimento especial ao Buffet D&#x27;Faria e Gastronomia Por todo o excelente serviço prestado. Foi tudo preparado com muito carinho, dedicação e profissionalismo, e isso fez toda a diferença. Agradeço de coração por todo o cuidado e atenção em cada detalhe. Recomendo muito o trabalho de vocês! Muito obrigado por fazerem parte desse momento e contribuírem para que tudo fosse ainda mais especial! 👏🏼❤️🍽️” Elias Miguel Inácio Silvestre · 2 meses atrás Ver avaliação no Google",
          "★★★★★ “Contratar o D’Faria Gastronomia e Eventos foi uma das melhores decisões para o nosso evento. Desde o primeiro contato fomos atendidos com muito profissionalismo e atenção. A qualidade das carnes, especialmente a costela no fogo de chão e a parrilla, impressionou todos os convidados. A equipe foi extremamente educada, organizada e cuidou de cada detalhe com muito capricho. Recebemos muitos elogios pela comida e pelo atendimento. Tudo foi servido no tempo certo, com excelente apresentação e um sabor impecável. Recomendo de olhos fechados para quem procura um buffet de alto padrão e quer proporcionar uma experiência inesquecível aos convidados. Com certeza contrataremos novamente!” Marili Aparecida · 2 meses atrás Ver avaliação no Google"
        ]
      },
      {
        "id": "sec-2",
        "titulo": "A confiança se prova na mesa. Veja como o D’Faria é avaliado.",
        "texto": "Avaliações reais de clientes, direto no perfil oficial no Google.",
        "imagem": null,
        "itens": []
      },
      {
        "id": "sec-3",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google",
          "👨‍🍳 Painel do Chef"
        ]
      }
    ],
    "galeria": [
      {
        "src": "/reviews/caroline-cancio-de-oliveira.png",
        "alt": "Foto de perfil de Caroline Câncio de Oliveira no Google"
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
        "alt": "Foto de perfil de Elias Miguel Inácio Silvestre no Google"
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
    "nome": "❓ Perguntas Frequentes (FAQ)",
    "categoria": "Atendimento",
    "slug": "/faq",
    "arquivo": "faq.html",
    "meta_title": "Perguntas frequentes | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Dúvidas sobre contratação de buffet, cardápio, degustação, equipe, estrutura, prazos, cidades atendidas e orçamento.",
    "hero": {
      "titulo": "Perguntas frequentes",
      "subtitulo": "As dúvidas mais comuns de quem está organizando um evento com o D’Faria.",
      "imagem": {
        "src": "/og-dfaria.jpg",
        "alt": "Perguntas frequentes"
      }
    },
    "secoes": [
      {
        "id": "sec-1",
        "titulo": "Eu vou transformar o seu evento em uma experiência memorável e inesquecível.",
        "texto": "Conte a data, o local e o número de convidados. A partir daí montamos a proposta.\n\nSolicite seu orçamento Pedir pelo formulário D’Faria Gastronomia e Eventos\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-3",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-4",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ Painel do Chef",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-5",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google",
          "👨‍🍳 Painel do Chef"
        ]
      }
    ],
    "galeria": [],
    "dados_extras": {
      "faq": [
        {
          "pergunta": "Quais tipos de eventos o D'Faria atende?",
          "resposta": "Casamentos, eventos corporativos, formaturas, aniversários, festas de 15 anos, bodas, confraternizações e celebrações em geral, em diferentes portes."
        },
        {
          "pergunta": "Existem opções vegetarianas e veganas?",
          "resposta": "Sim. O cardápio é montado junto com o cliente e pode contemplar opções vegetarianas e veganas, além de restrições alimentares informadas na fase de proposta."
        },
        {
          "pergunta": "Quanto custa contratar um buffet?",
          "resposta": "O valor depende do número de convidados, do cardápio, do formato do serviço, da estrutura necessária e da distância até o local. Por isso a proposta é feita caso a caso, sem tabela fixa."
        },
        {
          "pergunta": "O que está incluído no buffet?",
          "resposta": "Conforme a proposta contratada, o serviço pode envolver gastronomia, equipe especializada, mobiliário, enxoval, louças, prataria, réchauds, estações gastronômicas e a estrutura necessária para a execução do evento."
        },
        {
          "pergunta": "Com quanto tempo de antecedência devo contratar?",
          "resposta": "Quanto antes, maior a disponibilidade de data — especialmente em alta temporada de casamentos e no fim de ano. Consulte a data desejada pelo WhatsApp para verificar a agenda."
        },
        {
          "pergunta": "Como funciona a degustação?",
          "resposta": "A degustação é combinada durante a negociação da proposta, conforme o tipo de evento e o cardápio em estudo. Fale com a equipe para alinhar as condições."
        },
        {
          "pergunta": "O buffet fornece mesas, louças e réchauds?",
          "resposta": "Sim, esses itens podem ser fornecidos conforme a proposta contratada, incluindo mobiliário, enxoval, louças, prataria e peças de serviço."
        },
        {
          "pergunta": "Como é dimensionada a equipe?",
          "resposta": "A equipe é definida pelo número de convidados, pelo formato do serviço e pela estrutura do local, de modo a manter o ritmo de atendimento durante todo o evento."
        },
        {
          "pergunta": "O que acontece se o número de convidados mudar?",
          "resposta": "Ajustes de número de convidados devem ser informados dentro do prazo combinado na proposta, para que cardápio, equipe e estrutura sejam redimensionados."
        },
        {
          "pergunta": "O D'Faria atende chácaras, sítios, condomínios, residências e empresas?",
          "resposta": "Sim. O serviço é executado em chácaras, sítios, condomínios, residências, espaços de eventos e na própria sede das empresas."
        },
        {
          "pergunta": "O D'Faria atende eventos corporativos?",
          "resposta": "Sim. Coffee breaks, reuniões, treinamentos, palestras, workshops, confraternizações, festas de fim de ano, comemorações de metas, aniversários empresariais, almoços, jantares, coquetéis e lançamentos."
        },
        {
          "pergunta": "O D'Faria atende eventos de grande porte?",
          "resposta": "Sim. A experiência profissional de Cristiano D’Faria inclui a supervisão de uma grande operação realizada no Center Norte, em São Paulo, para aproximadamente 8.500 pessoas, com 850 mesas de 10 lugares, 12 pontos de buffet, 6 ilhas de open bar e centenas de profissionais envolvidos. Essa operação pertence à sua trajetória profissional anterior à criação do D’Faria Gastronomia e Eventos."
        },
        {
          "pergunta": "Como solicitar um orçamento preciso?",
          "resposta": "Informe data, cidade e local, número aproximado de convidados, tipo de evento e serviço de interesse. Com esses dados a proposta sai mais próxima da realidade do seu evento."
        },
        {
          "pergunta": "O D'Faria atende quais cidades e regiões?",
          "resposta": "Cesário Lange, Tatuí, Boituva, Cerquilho, Tietê, Itapetininga, Conchas, Pereiras e Porangaba, além de condomínios e espaços de eventos da região."
        },
        {
          "pergunta": "Como funciona a contratação e definição da proposta?",
          "resposta": "Depois do primeiro contato, são levantadas as informações do evento, montada a proposta com cardápio, equipe e estrutura e, com o aceite, a data é reservada na agenda."
        }
      ]
    },
    "updated_at": "2026-11-22T17:54:55.578Z"
  },
  "contato": {
    "id": "contato",
    "nome": "📞 Contato & Localização",
    "categoria": "Atendimento",
    "slug": "/contato",
    "arquivo": "contato.html",
    "meta_title": "Contato | D&#x27;Faria Gastronomia e Eventos",
    "meta_description": "Fale com o D&#x27;Faria: R. Quinze de Novembro, 910, Centro, Cesário Lange - SP. Telefone e WhatsApp (15) 99683-4734.",
    "hero": {
      "titulo": "Contato",
      "subtitulo": "Fale com o D’Faria por telefone, WhatsApp ou pelo formulário de orçamento.",
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
          "Veja nossas avaliações no Google",
          "👨‍🍳 Painel do Chef"
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
        "titulo": "A confiança se prova na mesa. Veja como o D’Faria é avaliado.",
        "texto": "Avaliações reais de clientes, direto no perfil oficial no Google.\n\nDesde 2016\n\nD&#x27;Faria Gastronomia e Eventos . R. Quinze de Novembro, 910 – Centro Cesário Lange – SP · CEP 18285-049 Brasil\n\nAtendimento 09:00 – 17:00",
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
          "Aniversários, Bodas e Celebrações",
          "Churrasco para Empresas"
        ]
      },
      {
        "id": "sec-6",
        "titulo": "Gastronomia",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cardápios",
          "Churrasco Premium",
          "Parrilla Argentina",
          "Costela de Chão",
          "Ilhas de Frios e Finger Foods",
          "Esculturas em Frutas",
          "Estações Gastronômicas"
        ]
      },
      {
        "id": "sec-7",
        "titulo": "Institucional",
        "texto": "",
        "imagem": null,
        "itens": [
          "O D’Faria",
          "Galeria",
          "Depoimentos",
          "FAQ",
          "Contato",
          "Orçamento"
        ]
      },
      {
        "id": "sec-8",
        "titulo": "Regiões atendidas",
        "texto": "",
        "imagem": null,
        "itens": [
          "Cesário Lange",
          "Tatuí",
          "Porangaba",
          "Conchas",
          "Cerquilho",
          "Pereiras",
          "Tietê",
          "Residencial Village Manacá",
          "Ninho Verde I Eco Residence",
          "Colina das Estrelas"
        ]
      },
      {
        "id": "sec-9",
        "titulo": "Canais oficiais",
        "texto": "© 2026 D&#x27;Faria Gastronomia e Eventos",
        "imagem": null,
        "itens": [
          "Instagram",
          "Facebook",
          "Veja nossas avaliações no Google"
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
        "endereco": "Rua 15 de Novembro, 910 — Centro, Cesário Lange - SP, 18285-000",
        "horario": "Segunda a Sábado, das 08h às 18h",
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
  activeTab: 'geral', // Cardápios: 'geral', 'secoes', 'colar' | Páginas: 'banner', 'secoes', 'especifico', 'seo'
  loading: false,
  feedback: null,
  pasteText: ''
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
                if (neg.hero && neg.hero.imagem && neg.hero.imagem.src && neg.hero.imagem.src.includes('/reviews/')) {
                  neg.hero.imagem.src = '/assets/hero-dfaria-luxo.jpg';
                  neg.hero.imagem.alt = 'Banquete de alta gastronomia e buffet para eventos — D’Faria Gastronomia';
                }
                if (neg.hero && neg.hero.titulo) {
                  neg.hero.titulo = neg.hero.titulo.replace(/CHEF/gi, 'CHEF').trim();
                }
                if (neg.hero && neg.hero.subtitulo) {
                  neg.hero.subtitulo = neg.hero.subtitulo.replace(/VOCÊ/gi, 'VOCÊ').trim();
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
      throw new Error(err.message || 'Erro ao salvar cardápio');
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
      throw new Error(err.message || 'Erro ao salvar página no banco');
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
      // Fallback elegante: Data URL local temporária para preview se storage falhar
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    }

    return SUPABASE_URL + '/storage/v1/object/public/' + bucket + '/' + cleanName;
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
            <i data-lucide="chef-hat" class="w-8 h-8"></i>
          </div>
          <h1 class="font-display text-2xl font-bold text-dfgreen">Painel do Chef</h1>
          <p class="text-xs text-stone-500">D'Faria Gastronomia & Eventos — Gestão Completa do Site</p>
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
            <input type="password" id="login-password" name="password" required autocomplete="current-password" placeholder="••••••••"
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
  const isPage = state.viewMode === 'paginas';
  const item = isPage ? state.selectedPage : state.selectedMenu;

  return `
    <!-- Topo / Barra de Navegação -->
    <header class="bg-dfgreen text-white border-b border-dfgold/30 sticky top-0 z-30 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="p-2 rounded-xl bg-white/10 text-dfgold">
            <i data-lucide="chef-hat" class="w-5 h-5"></i>
          </div>
          <div>
            <h1 class="font-display font-bold text-base leading-tight">Painel do Chef & Editor do Site</h1>
            <p class="text-[10px] text-dfgold uppercase tracking-wider font-semibold">100% do Site Editável em Tempo Real</p>
          </div>
        </div>

        <div class="flex items-center gap-2 sm:gap-4">
          <!-- Alternador de Visão: Páginas vs Cardápios -->
          <div class="flex items-center p-1 bg-black/20 rounded-xl border border-white/10 text-xs font-bold">
            <button id="btn-toggle-pages" class="py-1.5 px-3 rounded-lg transition-all flex items-center gap-1.5 ${isPage ? 'bg-dfgold text-dfgreen shadow-sm' : 'text-white/80 hover:text-white'}">
              <i data-lucide="layout" class="w-3.5 h-3.5"></i>
              <span>Páginas (${Object.keys(state.pages).length})</span>
            </button>
            <button id="btn-toggle-menus" class="py-1.5 px-3 rounded-lg transition-all flex items-center gap-1.5 ${!isPage ? 'bg-dfgold text-dfgreen shadow-sm' : 'text-white/80 hover:text-white'}">
              <i data-lucide="utensils" class="w-3.5 h-3.5"></i>
              <span>Cardápios (${state.menus.length})</span>
            </button>
          </div>

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

    <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Coluna da Esquerda: Navegação (Páginas ou Cardápios) -->
      <aside class="lg:col-span-4 space-y-4">
        ${isPage ? renderSidebarPages() : renderSidebarMenus()}
      </aside>

      <!-- Coluna da Direita: Editor Completo -->
      <section class="lg:col-span-8">
        ${isPage ? renderPageEditor(state.selectedPage) : renderMenuEditor(state.selectedMenu)}
      </section>

    </main>
  `;
}

// Sidebar de Páginas
function renderSidebarPages() {
  const pagesList = Object.values(state.pages);
  const categorias = ['Institucional', 'Eventos', 'Gastronomia', 'Serviços', 'Mídia', 'Atendimento'];

  return `
    <div class="bg-white rounded-2xl p-4 border border-[#C5A880]/30 shadow-sm space-y-4">
      <div class="flex items-center justify-between pb-2 border-b border-stone-100">
        <h2 class="font-display font-bold text-sm text-dfgreen flex items-center gap-2">
          <i data-lucide="file-text" class="w-4 h-4 text-dfgold"></i>
          <span>Páginas do Site (${pagesList.length})</span>
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

// Sidebar de Cardápios
function renderSidebarMenus() {
  return `
    <div class="bg-white rounded-2xl p-4 border border-[#C5A880]/30 shadow-sm space-y-3">
      <div class="flex items-center justify-between pb-2 border-b border-stone-100">
        <h2 class="font-display font-bold text-sm text-dfgreen flex items-center gap-2">
          <i data-lucide="book-open" class="w-4 h-4 text-dfgold"></i>
          <span>Cardápios Oficiais (${state.menus.length})</span>
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

// Editor de Páginas do Site
function renderPageEditor(p) {
  if (!p) {
    return `
      <div class="h-full bg-white rounded-3xl p-12 border border-[#C5A880]/30 shadow-sm flex flex-col items-center justify-center text-center space-y-3">
        <div class="p-4 rounded-2xl bg-dfsand text-dfgold">
          <i data-lucide="mouse-pointer-click" class="w-8 h-8"></i>
        </div>
        <h3 class="font-display text-lg font-bold text-dfgreen">Selecione uma Página do Site</h3>
        <p class="text-xs text-stone-500 max-w-sm">Escolha qualquer página na lista ao lado para alterar títulos, textos, fotos de banner, FAQ ou contatos em tempo real.</p>
      </div>
    `;
  }

  const temEspecifico = p.dados_extras && (p.dados_extras.faq || p.dados_extras.contato || p.dados_extras.depoimentos || p.dados_extras.galeria);

  return `
    <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#C5A880]/30 shadow-sm space-y-6">
      
      <!-- Cabeçalho da Página & Ações -->
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
            ${state.loading ? '<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Salvando...' : '<i data-lucide="save" class="w-3.5 h-3.5 text-dfgold"></i> Salvar Alterações na Página'}
          </button>
        </div>
      </div>

      <!-- Abas da Página -->
      <div class="flex flex-wrap items-center gap-2 border-b border-stone-100 pb-3">
        <button data-pagetab="banner" class="page-tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'banner' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
          🌟 Banner Principal (Hero)
        </button>
        <button data-pagetab="secoes" class="page-tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'secoes' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
          📝 Seções & Textos (${p.secoes?.length || 0})
        </button>
        ${temEspecifico ? `
          <button data-pagetab="especifico" class="page-tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'especifico' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
            ⚡ Conteúdo Especial (${p.id.toUpperCase()})
          </button>
        ` : ''}
        <button data-pagetab="seo" class="page-tab-btn py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${state.activeTab === 'seo' ? 'bg-dfgreen text-white' : 'text-stone-600 hover:bg-dfsand'}">
          🔍 SEO & Google
        </button>
      </div>

      <!-- Conteúdo da Aba da Página -->
      ${state.activeTab === 'banner' ? renderPageTabBanner(p) : ''}
      ${state.activeTab === 'secoes' ? renderPageTabSecoes(p) : ''}
      ${state.activeTab === 'especifico' ? renderPageTabEspecifico(p) : ''}
      ${state.activeTab === 'seo' ? renderPageTabSEO(p) : ''}

    </div>
  `;
}

// Aba 1 da Página: Banner Principal (Hero)
function renderPageTabBanner(p) {
  const h = p.hero || {};
  return `
    <div class="space-y-5">
      <div>
        <label class="block text-xs font-bold text-stone-700 mb-1">Título Principal do Banner (H1):</label>
        <input type="text" id="page-hero-title" value="${h.titulo || ''}" class="w-full py-2.5 px-3.5 rounded-xl border border-stone-300 font-bold text-base text-dfgreen focus:ring-2 focus:ring-dfgreen outline-none" placeholder="Ex: Buffet para Casamentos" />
      </div>

      <div>
        <label class="block text-xs font-bold text-stone-700 mb-1">Subtítulo / Chamada de Destaque:</label>
        <textarea id="page-hero-subtitle" rows="2" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none" placeholder="Frase de apresentação no início da página">${h.subtitulo || ''}</textarea>
      </div>

      <!-- Status Hero Cinematográfica Fasano -->
      ${p.id === 'home' ? `
        <div class="p-4 rounded-2xl bg-gradient-to-r from-dfgreen/10 via-dfgold/15 to-transparent border border-dfgold/30 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-dfgreen text-dfgold flex items-center justify-center font-bold shadow-sm">
              <i data-lucide="video" class="w-5 h-5"></i>
            </div>
            <div>
              <p class="text-xs font-bold text-dfgreen flex items-center gap-1.5">
                <span>Hero Cinematográfica em Vídeo Full HD (Padrão Fasano)</span>
                <span class="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-dfgreen text-white">ATIVO NO AR</span>
              </p>
              <p class="text-[11px] text-stone-600">Vídeo real do buffet em loop contínuo com carregamento no byte zero e iluminação cênica sem véu escuro.</p>
            </div>
          </div>
          <a href="/" target="_blank" class="py-1.5 px-3 rounded-xl bg-dfgreen text-white text-xs font-bold hover:bg-dfgreendeep transition-all shadow-sm flex items-center gap-1 shrink-0">
            <span>Assistir no Site</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5 text-dfgold"></i>
          </a>
        </div>
      ` : ''}

      <!-- Foto do Banner Hero -->
      <div class="p-5 rounded-2xl bg-dfsand/60 border border-stone-200 space-y-3">
        <label class="block text-xs font-bold text-dfgreen">Imagem do Banner Principal:</label>
        <div class="flex flex-col sm:flex-row items-center gap-5">
          <div class="w-48 h-32 rounded-2xl overflow-hidden bg-stone-200 border border-stone-300 relative shrink-0 shadow-sm">
            <img id="page-preview-hero-img" src="${h.imagem?.src || '/og-dfaria.jpg'}" alt="${h.imagem?.alt || 'Banner'}" class="w-full h-full object-cover" />
          </div>
          <div class="space-y-3 flex-1 w-full">
            <div>
              <label class="block text-[10px] font-bold text-stone-500 uppercase mb-1">Enviar Nova Imagem:</label>
              <input type="file" id="page-file-hero" accept="image/*" class="text-xs text-stone-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-dfgreen file:text-white hover:file:bg-dfgreendeep cursor-pointer" />
            </div>
            <div>
              <label class="block text-[10px] font-bold text-stone-500 uppercase mb-1">Ou Cole a URL da Imagem:</label>
              <input type="text" id="page-hero-img-src" value="${h.imagem?.src || ''}" class="w-full py-1.5 px-3 rounded-lg border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none" />
            </div>
          </div>
        </div>

        <!-- Capas Imponentes Recomendadas em 1 Clique -->
        <div class="pt-3 border-t border-stone-200/80">
          <label class="block text-[11px] font-bold text-dfgreen mb-2 flex items-center gap-1.5">
            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-dfgold"></i>
            <span>Capas Imponentes Disponíveis (Clique para aplicar imediatamente):</span>
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <button type="button" class="btn-preset-hero p-2 rounded-xl border border-stone-200 bg-white hover:border-dfgold hover:shadow-sm text-left transition-all group" data-src="/assets/hero-dfaria-luxo.jpg" data-alt="Banquete de alta gastronomia e buffet para eventos — D’Faria Gastronomia">
              <div class="h-16 rounded-lg overflow-hidden mb-1.5 bg-stone-100">
                <img src="/assets/hero-dfaria-luxo.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <p class="text-[11px] font-bold text-stone-800 line-clamp-1">🌟 Banquete Sunset Luxo (16:9)</p>
              <p class="text-[9px] text-stone-400">Cinematográfico / Noturno</p>
            </button>
            <button type="button" class="btn-preset-hero p-2 rounded-xl border border-stone-200 bg-white hover:border-dfgold hover:shadow-sm text-left transition-all group" data-src="/__l5e/assets-v1/1472106d-603b-4c1a-9f89-7b8fdf1f18ef/hero-mesa-piscina.webp" data-alt="Mesa posta de alta gastronomia junto à piscina — D’Faria">
              <div class="h-16 rounded-lg overflow-hidden mb-1.5 bg-stone-100">
                <img src="/__l5e/assets-v1/1472106d-603b-4c1a-9f89-7b8fdf1f18ef/hero-mesa-piscina.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <p class="text-[11px] font-bold text-stone-800 line-clamp-1">🏊 Mesa Piscina (Original)</p>
              <p class="text-[9px] text-stone-400">Ar Livre / Clássico</p>
            </button>
            <button type="button" class="btn-preset-hero p-2 rounded-xl border border-stone-200 bg-white hover:border-dfgold hover:shadow-sm text-left transition-all group" data-src="/__l5e/assets-v1/5a856cc3-8d4b-4c1c-9238-6c6e2cac0104/churrasco-fogo-de-chao-evento-dfaria.webp" data-alt="Churrasco Fogo de Chão D’Faria">
              <div class="h-16 rounded-lg overflow-hidden mb-1.5 bg-stone-100">
                <img src="/__l5e/assets-v1/5a856cc3-8d4b-4c1c-9238-6c6e2cac0104/churrasco-fogo-de-chao-evento-dfaria.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <p class="text-[11px] font-bold text-stone-800 line-clamp-1">🥩 Fogo de Chão & Brasa</p>
              <p class="text-[9px] text-stone-400">Carnes Nobres & Parrilla</p>
            </button>
            <button type="button" class="btn-preset-hero p-2 rounded-xl border border-stone-200 bg-white hover:border-dfgold hover:shadow-sm text-left transition-all group" data-src="/__l5e/assets-v1/d9e32d7c-dd7e-46de-b79b-739f373ae6b5/ilha-frios-mesa-madeira-jardim.webp" data-alt="Ilha de Frios no Jardim D’Faria">
              <div class="h-16 rounded-lg overflow-hidden mb-1.5 bg-stone-100">
                <img src="/__l5e/assets-v1/d9e32d7c-dd7e-46de-b79b-739f373ae6b5/ilha-frios-mesa-madeira-jardim.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <p class="text-[11px] font-bold text-stone-800 line-clamp-1">🧀 Ilha Gourmet de Frios</p>
              <p class="text-[9px] text-stone-400">Mesa Rústica de Jardim</p>
            </button>
            <button type="button" class="btn-preset-hero p-2 rounded-xl border border-stone-200 bg-white hover:border-dfgold hover:shadow-sm text-left transition-all group" data-src="/__l5e/assets-v1/e5d011ca-5a5d-4743-8fa0-987e11261d08/salao-mesas-redondas-recepcao-dfaria.webp" data-alt="Salão Nobre para Casamentos D’Faria">
              <div class="h-16 rounded-lg overflow-hidden mb-1.5 bg-stone-100">
                <img src="/__l5e/assets-v1/e5d011ca-5a5d-4743-8fa0-987e11261d08/salao-mesas-redondas-recepcao-dfaria.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <p class="text-[11px] font-bold text-stone-800 line-clamp-1">🏛️ Salão Recepção Nobre</p>
              <p class="text-[9px] text-stone-400">Casamentos & Gala</p>
            </button>
            <button type="button" class="btn-preset-hero p-2 rounded-xl border border-stone-200 bg-white hover:border-dfgold hover:shadow-sm text-left transition-all group" data-src="/__l5e/assets-v1/455b55ff-e44a-494e-8d42-9ec932b0f072/mesas-montadas-evento-ar-livre-dfaria.webp" data-alt="Mesas montadas em evento ao ar livre D’Faria">
              <div class="h-16 rounded-lg overflow-hidden mb-1.5 bg-stone-100">
                <img src="/__l5e/assets-v1/455b55ff-e44a-494e-8d42-9ec932b0f072/mesas-montadas-evento-ar-livre-dfaria.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <p class="text-[11px] font-bold text-stone-800 line-clamp-1">🌿 Mesas ao Ar Livre</p>
              <p class="text-[9px] text-stone-400">Jardim & Celebração</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Aba 2 da Página: Seções & Textos
function renderPageTabSecoes(p) {
  const secoes = p.secoes || [];
  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between pb-2 border-b border-stone-100">
        <p class="text-xs text-stone-500">Edite os títulos, parágrafos e tópicos das seções da página.</p>
        <button id="btn-add-page-sec" class="py-1.5 px-3 bg-dfgreen hover:bg-dfgreendeep text-white rounded-lg text-xs font-bold flex items-center gap-1">
          <i data-lucide="plus" class="w-3.5 h-3.5 text-dfgold"></i>
          <span>Nova Seção</span>
        </button>
      </div>

      <div class="space-y-5" id="page-sections-container">
        ${secoes.map((sec, sIdx) => `
          <div class="p-5 rounded-2xl bg-dfsand/50 border border-stone-200 space-y-4">
            <div class="flex items-center justify-between gap-3">
              <input type="text" value="${sec.titulo || ''}" data-sidx="${sIdx}" class="page-sec-title font-bold text-sm text-dfgreen bg-white py-2 px-3 rounded-xl border border-stone-300 flex-1" placeholder="Título da Seção (H2)" />
              <button data-sidx="${sIdx}" class="btn-del-page-sec text-red-500 hover:text-red-700 p-2" title="Remover Seção">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>

            <div>
              <label class="block text-[10px] font-bold text-stone-500 uppercase mb-1">Texto Descritivo / Parágrafos:</label>
              <textarea data-sidx="${sIdx}" rows="4" class="page-sec-text w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none bg-white">${sec.texto || ''}</textarea>
            </div>

            ${sec.itens && sec.itens.length > 0 ? `
              <div>
                <label class="block text-[10px] font-bold text-stone-500 uppercase mb-1">Tópicos / Itens em Lista (um por linha):</label>
                <textarea data-sidx="${sIdx}" rows="3" class="page-sec-itens w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none bg-white">${sec.itens.join('\n')}</textarea>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Aba 3 da Página: Conteúdo Específico (FAQ, Contato, Depoimentos, Galeria)
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
            <label class="block text-xs font-bold text-stone-700 mb-1">WhatsApp de Atendimento (Exibição):</label>
            <input type="text" id="contact-whatsapp-display" value="${c.whatsapp_display || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 font-bold text-xs text-dfgreen" placeholder="(15) 99683-4734" />
          </div>
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">WhatsApp Número (Link sem traços):</label>
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
          <label class="block text-xs font-bold text-stone-700 mb-1">Endereço Completo:</label>
          <input type="text" id="contact-address" value="${c.endereco || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">Horário de Atendimento:</label>
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
        <p class="text-xs text-stone-500">Depoimentos reais de clientes exibidos na página.</p>
        <div class="space-y-4">
          ${ext.depoimentos.map((d, dIdx) => `
            <div class="p-4 rounded-2xl bg-dfsand/50 border border-stone-200 space-y-2">
              <input type="text" value="${d.nome || ''}" data-didx="${dIdx}" class="dep-input-nome font-bold text-xs text-dfgreen bg-white py-1.5 px-3 rounded-lg border border-stone-300 w-full" placeholder="Nome do Cliente" />
              <textarea data-didx="${dIdx}" rows="3" class="dep-input-texto w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 bg-white" placeholder="Texto da avaliação">${d.texto || ''}</textarea>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  return '<p class="text-xs text-stone-400">Nenhum conteúdo específico para esta página.</p>';
}

// Aba 4 da Página: SEO & Google
function renderPageTabSEO(p) {
  return `
    <div class="space-y-5">
      <div>
        <label class="block text-xs font-bold text-stone-700 mb-1">Título no Google (&lt;title&gt;):</label>
        <input type="text" id="page-meta-title" value="${p.meta_title || ''}" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none" />
      </div>

      <div>
        <label class="block text-xs font-bold text-stone-700 mb-1">Descrição no Google (Meta Description):</label>
        <textarea id="page-meta-desc" rows="3" class="w-full py-2 px-3 rounded-xl border border-stone-300 text-xs text-stone-700 focus:ring-2 focus:ring-dfgreen outline-none">${p.meta_description || ''}</textarea>
        <p class="text-[10px] text-stone-400 mt-1">Recomendado entre 140 e 160 caracteres para visualização perfeita nas buscas do Google.</p>
      </div>
    </div>
  `;
}

// Editor de Cardápios (Geral, Seções, Colar)
function renderMenuEditor(m) {
  if (!m) {
    return `
      <div class="h-full bg-white rounded-3xl p-12 border border-[#C5A880]/30 shadow-sm flex flex-col items-center justify-center text-center space-y-3">
        <div class="p-4 rounded-2xl bg-dfsand text-dfgold">
          <i data-lucide="mouse-pointer-click" class="w-8 h-8"></i>
        </div>
        <h3 class="font-display text-lg font-bold text-dfgreen">Selecione um Cardápio para Editar</h3>
        <p class="text-xs text-stone-500 max-w-sm">Escolha qualquer um dos 17 cardápios na lista ao lado para alterar textos, fotos, pratos ou usar o modo "Colar Cardápio".</p>
      </div>
    `;
  }

  return `
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

      <!-- Abas do Editor de Cardápio -->
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
  `;
}

// Aba 1 Cardápio: Informações Gerais & Foto
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

// Aba 2 Cardápio: Seções e Itens
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

// Aba 3 Cardápio: Modo "Colar Cardápio Inteiro"
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
        msg = 'E-mail cadastrado, mas pendente de confirmação no Supabase.';
      }
      state.feedback = { type: 'error', text: msg };
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

  // Alternador de Visão (Páginas vs Cardápios)
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

  // Seleção de Página
  document.querySelectorAll('.btn-select-page').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-pid');
      state.selectedPage = state.pages[pid];
      state.activeTab = 'banner';
      render();
    });
  });

  // Troca de abas da página
  document.querySelectorAll('.page-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.getAttribute('data-pagetab');
      render();
    });
  });

  // Salvar Página
  const btnSavePage = document.getElementById('btn-save-page');
  if (btnSavePage && state.selectedPage) {
    btnSavePage.addEventListener('click', async () => {
      syncPageFormDataToState();
      state.loading = true;
      render();

      try {
        await api.savePage(state.selectedPage);
        state.feedback = { type: 'success', text: '✅ Página salva com sucesso! Alterações ativas no site em tempo real.' };
      } catch (err) {
        state.feedback = { type: 'error', text: err.message };
      } finally {
        state.loading = false;
        render();
        setTimeout(() => { state.feedback = null; render(); }, 4000);
      }
    });
  }

  // Botões de Presets de Capa Imponente
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

  // Upload Foto Hero da Página
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

  // Adicionar Nova Seção à Página
  const btnAddPageSec = document.getElementById('btn-add-page-sec');
  if (btnAddPageSec && state.selectedPage) {
    btnAddPageSec.addEventListener('click', () => {
      if (!state.selectedPage.secoes) state.selectedPage.secoes = [];
      state.selectedPage.secoes.push({
        id: 'sec-' + (state.selectedPage.secoes.length + 1),
        titulo: 'Nova Seção de Destaque',
        texto: 'Texto explicativo da nova seção...',
        itens: []
      });
      render();
    });
  }

  // Excluir Seção da Página
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

  // Seleção de Cardápio
  document.querySelectorAll('.btn-select-menu').forEach(btn => {
    btn.addEventListener('click', () => {
      const slug = btn.getAttribute('data-slug');
      state.selectedMenu = state.menus.find(m => m.slug === slug);
      state.activeTab = 'geral';
      render();
    });
  });

  // Troca de abas do cardápio
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.getAttribute('data-tab');
      render();
    });
  });

  // Salvar Cardápio
  const btnSaveMenu = document.getElementById('btn-save-menu');
  if (btnSaveMenu && state.selectedMenu) {
    btnSaveMenu.addEventListener('click', async () => {
      syncFormDataToState();
      state.loading = true;
      render();

      try {
        await api.saveMenu(state.selectedMenu);
        state.feedback = { type: 'success', text: '✅ Cardápio salvo com sucesso no banco de dados!' };
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

  // Upload Foto Cardápio
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
          alt: 'Foto do cardápio ' + state.selectedMenu.nome,
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

  // Adicionar Seção Cardápio
  const btnAddSec = document.getElementById('btn-add-section');
  if (btnAddSec && state.selectedMenu) {
    btnAddSec.addEventListener('click', () => {
      if (!state.selectedMenu.secoes) state.selectedMenu.secoes = [];
      state.selectedMenu.secoes.push({ titulo: 'Nova Seção', itens: ['Novo Prato'] });
      render();
    });
  }

  // Excluir Seção Cardápio
  document.querySelectorAll('.btn-del-sec').forEach(btn => {
    btn.addEventListener('click', () => {
      const sIdx = parseInt(btn.getAttribute('data-sidx'), 10);
      state.selectedMenu.secoes.splice(sIdx, 1);
      render();
    });
  });

  // Copiar template cardápio
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
      state.feedback = { type: 'success', text: 'Cardápio copiado para a Área de Transferência!' };
      render();
      setTimeout(() => { state.feedback = null; render(); }, 3000);
    });
  }

  // Parse paste cardápio
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

// Sincroniza campos da Página antes de salvar
function syncPageFormDataToState() {
  const p = state.selectedPage;
  if (!p) return;

  const hTitle = document.getElementById('page-hero-title');
  if (hTitle) {
    if (!p.hero) p.hero = {};
    p.hero.titulo = hTitle.value;
  }

  const hSub = document.getElementById('page-hero-subtitle');
  if (hSub) {
    if (!p.hero) p.hero = {};
    p.hero.subtitulo = hSub.value;
  }

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

  const mTitle = document.getElementById('page-meta-title');
  if (mTitle) p.meta_title = mTitle.value;

  const mDesc = document.getElementById('page-meta-desc');
  if (mDesc) p.meta_description = mDesc.value;

  // Sincroniza seções da página
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

  // Sincroniza FAQ se aplicável
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

  // Sincroniza Contato se aplicável
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

// Sincroniza campos do Cardápio para o state antes de salvar
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

  if (state.menus.length > 0 && !state.selectedMenu) {
    state.selectedMenu = state.menus[0];
  }
  if (!state.selectedPage && state.pages['home']) {
    state.selectedPage = state.pages['home'];
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
