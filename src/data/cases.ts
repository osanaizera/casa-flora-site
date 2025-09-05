export type CaseItem = {
  slug: string;
  title: string;
  client?: string;
  location: string; // Ex.: Búzios (RJ)
  segment?: string; // Ex.: Hotel Boutique & Spa
  tagline?: string; // Ex.: Rebranding & Estratégia de Marca
  servicePack?: string; // Ex.: Garden + Ativação Âmbar
  year: string;
  service: string;
  category: string;
  summary: string;
  description: string;
  heroImage: string;
  logo?: string; // Caminho opcional para logo do case
  // Conteúdo narrativo
  aboutHotel?: string;
  challenge?: string;
  approach?: string[];
  solution?: string[];
  resultsText?: string;
  // Galeria com spans opcionais
  gallery: (string | { src: string; alt?: string; span?: 'wide' | 'tall' | 'normal' })[];
  results: string[];
  seo?: {
    title?: string;
    description?: string;
    image?: string;
  };
  notionUrl?: string;
};

export const cases: CaseItem[] = [
  {
    slug: "insolito",
    title: "Insólito",
    client: "Insólito Boutique Hotel & Spa",
    location: "Búzios (RJ)",
    segment: "Hotel Boutique & Spa",
    tagline: "Rebranding & Estratégia de Marca",
    servicePack: "Garden + Ativação Âmbar",
    year: "2022",
    service: "Rebranding",
    category: "Hospitalidade",
    summary:
      "Hospitalidade que encontra a cultura: rebranding e estratégia para uma marca boutique à beira-mar.",
    description:
      "Transformação estratégica e visual para alinhar a identidade do Insólito ao seu caráter artístico e sensorial, do posicionamento ao plano de ativação.",
    heroImage: "/images/cases/insolito/hero.jpg",
    logo: "/images/cases/insolito/insolitologo.png",
    aboutHotel:
      "O Insólito é um hotel boutique e spa visualmente vibrante, com alma e estética profundamente brasileiras. Localizado à beira-mar, é reconhecido por sua curadoria artística: cada quarto é inspirado em uma obra de arte, transformando o espaço em uma galeria viva que celebra artistas nacionais.",
    challenge:
      "Apesar do potencial único do espaço, a marca não traduzia no digital nem na jornada do hóspede toda a riqueza sensorial. A identidade carecia de unidade e sofisticação e o posicionamento não comunicava o valor do hotel como destino de imersão cultural.",
    approach: [
      "Pesquisa de percepção (brand awareness) com análise de comentários em OTAs e pesquisa qualitativa com stakeholders.",
      "Benchmark competitivo com rankings de audiência social e avaliações em OTAs, complementado por estudo de referências.",
      "Análise de tendências em hotelaria/turismo e estudo de comportamento do consumidor no pós-pandemia.",
      "Análise SWOT para forças, fraquezas, oportunidades e ameaças, alinhada à estratégia de posicionamento.",
      "Desenvolvimento do universo de marca: conceito, manifesto, posicionamento e redesign da identidade visual.",
      "Ativação: tom de voz, editorias, personas, canais on/offline e mapeamento da jornada do cliente (pré, durante, pós estadia).",
      "Ativação Âmbar: construção, reforço e consolidação da presença da marca com plano anual de campanhas.",
    ],
    solution: [
      "Rebranding completo com identidade contemporânea e alinhada à proposta artística.",
      "Posicionamento de marca que conecta hospitalidade, arte e brasilidade.",
      "Conceito de marca para guiar comunicações e experiências.",
      "Jornada do hóspede mapeada do pré-reserva ao pós-estadia.",
      "Planejamento anual e campanhas mensais para consistência e inspiração.",
      "Branding Garden + Ativação Âmbar para fortalecer relacionamento com hóspedes e comunidade.",
      "Plano editorial e moodboard fotográfico para redes e comunicação visual.",
    ],
    resultsText:
      "Após o lançamento, a marca elevou sua percepção de valor no segmento boutique, gerando maior engajamento no digital e conexões mais profundas com o público, potencializando a experiência desde o primeiro contato.",
    gallery: [
      { src: "/images/cases/insolito/Captura de Tela 2025-08-13 às 09.48.54.png", span: "wide" },
      { src: "/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.03.png" },
      { src: "/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.14.png" },
      { src: "/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.51.png", span: "wide" },
      { src: "/images/cases/insolito/Captura de Tela 2025-08-13 às 09.50.00.png" },
      { src: "/images/cases/insolito/Captura de Tela 2025-08-13 às 09.50.16.png", span: "tall" },
      { src: "/images/cases/insolito/Captura de Tela 2025-08-13 às 09.51.01.png" },
      { src: "/images/cases/insolito/Captura de Tela 2025-08-13 às 09.55.19.png" }
    ],
    results: [
      "Percepção de valor elevada",
      "Consistência visual e verbal",
      "Engajamento e conexão mais profundos",
    ],
    seo: {
      title: "Insólito — Case de Rebranding | Casa Flora",
      description:
        "Rebranding e estratégia para Insólito Boutique Hotel & Spa, alinhando identidade, experiência e presença de marca.",
      image: "/images/cases/insolito/hero.jpg",
    },
    notionUrl:
      "https://brief-key-ebd.notion.site/Ins-lito-24efc4073fad80609415c29c713a8577",
  },
  // Placeholder — Búzios Mar
  {
    slug: "buzios-mar",
    title: "Búzios Mar",
    client: "Búzios Mar",
    location: "Búzios (RJ)",
    segment: "Hospitalidade",
    tagline: "Identidade e experiência com alma praiana",
    year: "2024",
    service: "Raiz",
    category: "Hospitalidade",
    summary:
      "Identidade e presença alinhadas ao espírito praiano e sofisticado de Búzios.",
    description:
      "Projeto de base para estruturar linguagem visual, narrativa e pontos de contato essenciais de uma marca com vocação solar e acolhedora.",
    heroImage: "/images/BUZIOS MAR CAPA.png",
    gallery: [
      "/images/experiencia.jpg",
      "/images/hospitalidade.jpg",
      "/images/garden.jpg",
    ],
    results: [
      "Base sólida de identidade",
      "Coerência nos pontos de contato",
      "Prontidão para ativações",
    ],
  },
  // Placeholder — Greco Hotel
  {
    slug: "greco-hotel",
    title: "Greco Hotel",
    client: "Greco Hotel",
    location: "Búzios (RJ)",
    segment: "Hotel Boutique",
    tagline: "Mediterrâneo encontra brasilidade",
    year: "2024",
    service: "Raiz",
    category: "Hospitalidade",
    summary:
      "Marca com autenticidade mediterrânea e brasilidade na experiência.",
    description:
      "Essência, linguagem e estética que traduzem hospitalidade calorosa com referências mediterrâneas e alma brasileira.",
    heroImage: "/images/raiz.jpg",
    gallery: [
      "/images/raiz.jpg",
      "/images/hospitalidade.jpg",
      "/images/experiencia.jpg",
    ],
    results: [
      "Direção clara de identidade",
      "Expressão visual consistente",
      "Experiência mais memorável",
    ],
  },
  // Placeholder — Le Village
  {
    slug: "le-village",
    title: "Le Village",
    client: "Le Village",
    location: "Búzios (RJ)",
    segment: "Pousada",
    tagline: "Charme histórico que acolhe",
    year: "2023",
    service: "Raiz",
    category: "Hospitalidade",
    summary:
      "Charme histórico traduzido em identidade e jornada de encantamento.",
    description:
      "Linguagem autoral que respeita o patrimônio e potencializa a experiência com sutileza e afeto.",
    heroImage: "/images/hospitalidade.jpg",
    gallery: [
      "/images/hospitalidade.jpg",
      "/images/experiencia.jpg",
      "/images/garden.jpg",
    ],
    results: [
      "Presença mais alinhada ao lugar",
      "Toques de encantamento na jornada",
      "Identidade fácil de aplicar",
    ],
  },
  {
    slug: "parador-lumiar",
    title: "Parador Lumiar",
    client: "Parador Lumiar",
    location: "Lumiar",
    year: "2024",
    service: "Rebranding",
    category: "Hospitalidade",
    summary:
      "Reposicionamento estratégico de marca para uma pousada premium na serra, conectando natureza com experiências autênticas.",
    description:
      "Estratégia e identidade que unem conforto, autenticidade e o cenário exuberante da serra para uma marca memorável.",
    heroImage: "/images/experiencia.jpg",
    gallery: [
      "/images/experiencia.jpg",
      "/images/hospitalidade.jpg",
      "/images/garden.jpg",
    ],
    results: [
      "Clareza de posicionamento",
      "Sistema visual aplicável",
      "Base para comunicação consistente",
    ],
  },
  {
    slug: "zendaya-resort",
    title: "Zendaya Resort",
    client: "Zendaya Resort",
    location: "Búzios (RJ)",
    year: "2024/2025",
    service: "Branding Completo",
    servicePack: "Garden + Acompanhamento Seiva",
    category: "Resort",
    summary:
      "Criação de marca sofisticada para resort de luxo, capturando a essência do destino e da hospitalidade de alto padrão.",
    description:
      "Do diagnóstico ao universo simbólico e visual, um branding completo para uma experiência de luxo com identidade forte.",
    heroImage: "/images/garden.jpg",
    gallery: [
      "/images/garden.jpg",
      "/images/experiencia.jpg",
      "/images/hospitalidade.jpg",
    ],
    results: [
      "Marca premium reconhecível",
      "Coerência em todos os touchpoints",
      "Material de apresentação impecável",
    ],
  },
  {
    slug: "buzios-mar",
    title: "Búzios Mar",
    client: "Búzios Mar Hotel",
    location: "Búzios (RJ)",
    year: "2024",
    service: "Identidade Visual",
    category: "Hospitalidade",
    summary:
      "Criação de identidade visual para hotel boutique em Búzios, capturando a essência do mar e a sofisticação local.",
    description:
      "Desenvolvimento de marca que conecta o charme de Búzios com experiências únicas à beira-mar.",
    heroImage: "/images/hospitalidade.jpg",
    gallery: [
      "/images/hospitalidade.jpg",
      "/images/experiencia.jpg",
      "/images/garden.jpg",
    ],
    results: [
      "Identidade visual consistente",
      "Posicionamento claro no mercado",
      "Material de comunicação alinhado",
    ],
  },
  {
    slug: "greco-hotel",
    title: "Greco Hotel",
    client: "Greco Hotel",
    location: "Santorini",
    year: "2023",
    service: "Rebranding",
    category: "Hospitalidade",
    summary:
      "Rebranding completo para hotel greco, unindo tradição mediterrânea com hospitalidade contemporânea.",
    description:
      "Revitalização da marca com inspiração na arquitetura e cultura grega para uma experiência autêntica.",
    heroImage: "/images/experiencia.jpg",
    gallery: [
      "/images/experiencia.jpg",
      "/images/hospitalidade.jpg",
      "/images/garden.jpg",
    ],
    results: [
      "Marca autêntica e memorável",
      "Conexão emocional com hóspedes",
      "Diferenciação no mercado greco",
    ],
  },
  {
    slug: "le-village",
    title: "Le Village",
    client: "Le Village Resort",
    location: "Vale dos Vinhedos (RS)",
    year: "2024",
    service: "Branding Completo",
    category: "Resort",
    summary:
      "Branding completo para resort na região vinícola, celebrando a cultura do vinho e experiências gastronômicas.",
    description:
      "Criação de marca que expressa sofisticação, tradição vinícola e experiências únicas no Vale dos Vinhedos.",
    heroImage: "/images/garden.jpg",
    gallery: [
      "/images/garden.jpg",
      "/images/experiencia.jpg",
      "/images/hospitalidade.jpg",
    ],
    results: [
      "Posicionamento premium estabelecido",
      "Identidade alinhada à região",
      "Material promocional sofisticado",
    ],
  },
];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return cases.find((c) => c.slug === slug);
}
