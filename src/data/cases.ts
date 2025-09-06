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
  // Campos para o carrossel
  image: string; // Imagem para o carrossel (pode ser igual à heroImage)
  pack?: string[]; // Array de serviços para badges (ex: ['Garden', 'Ativação Âmbar'])
  available?: boolean; // Se o case está disponível ou "em breve" (default: false)
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
    location: "BÚZIOS (RJ)",
    segment: "Hotel Boutique & Spa",
    tagline: "Rebranding & Estratégia de Marca",
    servicePack: "Garden + Ativação Âmbar",
    year: "2022",
    service: "Garden",
    category: "Hotel & Spa",
    summary:
      "Hospitalidade que encontra a cultura: rebranding e estratégia para uma marca boutique à beira-mar.",
    description:
      "Rebranding sensorial para um ícone boutique à beira-mar.",
    heroImage: "/images/cases/insolito/hero.jpg",
    image: "/images/INSOLITO%20CAPA.jpg",
    pack: ["Garden", "Ativação Âmbar"],
    available: true, // Único case disponível
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
  {
    slug: "casa-poema",
    title: "Casa Poema",
    client: "Casa Poema",
    location: "PARATY (RJ)",
    segment: "Identidade",
    tagline: "Simplicidade acolhedora da experiência de estar em casa",
    year: "2024",
    service: "Raiz",
    category: "Identidade",
    summary:
      "Uma identidade visual que traduz a simplicidade acolhedora da experiência de estar em casa.",
    description:
      "Uma identidade visual que traduz a simplicidade acolhedora da experiência de estar em casa.",
    heroImage: "/images/CASAPOEMACAPA.png",
    image: "/images/CASAPOEMACAPA.png",
    pack: ["Raiz"],
    available: false, // Em breve
    gallery: [
      "/images/experiencia.jpg",
      "/images/hospitalidade.jpg",
      "/images/garden.jpg",
    ],
    results: [
      "Identidade visual coesa",
      "Simplicidade que acolhe",
      "Base sólida de marca",
    ],
  },
  {
    slug: "zendaya",
    title: "Zendaya",
    client: "Zendaya Resort",
    location: "BÚZIOS (RJ)",
    segment: "Resort",
    tagline: "Elegância contemporânea para um resort de destino",
    year: "2024/2025",
    service: "Garden",
    servicePack: "Garden + Acompanhamento Seiva",
    category: "Resort",
    summary:
      "Elegância contemporânea para um resort de destino.",
    description:
      "Elegância contemporânea para um resort de destino.",
    heroImage: "/images/ZENDAYA%20CAPA.png",
    image: "/images/ZENDAYA%20CAPA.png",
    pack: ["Garden", "Acompanhamento Seiva"],
    available: false, // Em breve
    gallery: [
      "/images/experiencia.jpg",
      "/images/hospitalidade.jpg",
      "/images/garden.jpg",
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
    client: "Búzios Mar",
    location: "BÚZIOS (RJ)",
    segment: "Hospitalidade",
    tagline: "Identidade e experiência com alma praiana",
    year: "2024",
    service: "Raiz",
    category: "Hospitalidade",
    summary:
      "Identidade e presença alinhadas ao espírito praiano e sofisticado de Búzios.",
    description:
      "Identidade e presença alinhadas ao espírito praiano e sofisticado de Búzios.",
    heroImage: "/images/BUZIOS%20MAR%20CAPA.png",
    image: "/images/BUZIOS%20MAR%20CAPA.png",
    pack: ["Raiz"],
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
  {
    slug: "greco-hotel",
    title: "Greco Hotel",
    client: "Greco Hotel",
    location: "BÚZIOS (RJ)",
    segment: "Hotel Boutique",
    tagline: "Mediterrâneo encontra brasilidade",
    year: "2024",
    service: "Raiz",
    category: "Hotel Boutique",
    summary:
      "Marca com autenticidade mediterrânea e brasilidade na experiência.",
    description:
      "Marca com autenticidade mediterrânea e brasilidade na experiência.",
    heroImage: "/images/GRECO%20CAPA.jpg",
    image: "/images/GRECO%20CAPA.jpg",
    pack: ["Raiz"],
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
  {
    slug: "le-village",
    title: "Le Village",
    client: "Le Village",
    location: "BÚZIOS (RJ)",
    segment: "Pousada",
    tagline: "Charme histórico que acolhe",
    year: "2023",
    service: "Raiz",
    category: "Pousada",
    summary:
      "Charme histórico traduzido em identidade e jornada de encantamento.",
    description:
      "Charme histórico traduzido em identidade e jornada de encantamento.",
    heroImage: "/images/LE%20VILLAGE%20CAPA.jpg",
    image: "/images/LE%20VILLAGE%20CAPA.jpg",
    pack: ["Raiz"],
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
    location: "LUMIAR (RJ)",
    segment: "Hospedagem",
    year: "2024",
    service: "Raiz",
    category: "Hospedagem",
    summary:
      "Posicionamento estratégico e visual com natureza como protagonista.",
    description:
      "Posicionamento estratégico e visual com natureza como protagonista.",
    heroImage: "/images/PARADOR%20LUMIAR%20CAPA.webp",
    image: "/images/PARADOR%20LUMIAR%20CAPA.webp",
    pack: ["Raiz"],
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
  // ——— Em breve ———
  {
    slug: "vedan-advocacia",
    title: "Vedan Advocacia",
    client: "Vedan Advocacia",
    location: "PATO BRANCO (PR)",
    segment: "Identidade",
    year: "2025",
    service: "Raiz",
    category: "Identidade",
    summary:
      "Exclusividade, sofisticação e a experiência como essência: a identidade viva do Vedan Advocacia.",
    description:
      "Exclusividade, sofisticação e a experiência como essência: a identidade viva do Vedan Advocacia.",
    heroImage: "/images/VEDANCAPA.jpg",
    image: "/images/VEDANCAPA.jpg",
    pack: ["Raiz"],
    gallery: [
      "/images/experiencia.jpg",
      "/images/hospitalidade.jpg",
      "/images/garden.jpg",
    ],
    results: [
      "Identidade sofisticada",
      "Posicionamento premium",
      "Experiência diferenciada",
    ],
  },
  {
    slug: "bego",
    title: "Begô",
    client: "Begô",
    location: "PORTO ALEGRE (RS)",
    segment: "Identidade",
    year: "2025",
    service: "Raiz",
    category: "Identidade",
    summary:
      "Redesign que simplifica para valorizar: Begô agora traduz o essencialismo e o feito à mão em uma identidade minimalista e atemporal.",
    description:
      "Redesign que simplifica para valorizar: Begô agora traduz o essencialismo e o feito à mão em uma identidade minimalista e atemporal.",
    heroImage: "/images/BEGOCAPA.png",
    image: "/images/BEGOCAPA.png",
    pack: ["Raiz"],
    gallery: [
      "/images/experiencia.jpg",
      "/images/hospitalidade.jpg",
      "/images/garden.jpg",
    ],
    results: [
      "Identidade minimalista",
      "Essencialismo valorizado",
      "Marca atemporal",
    ],
  },
  {
    slug: "influa-filmes",
    title: "Influa Filmes",
    client: "Influa Filmes",
    location: "PORTO ALEGRE (RS)",
    segment: "Identidade",
    year: "2024",
    service: "Raiz",
    category: "Identidade",
    summary:
      "Rebranding que conecta essência, confiança e excelência em todos os detalhes.",
    description:
      "Rebranding que conecta essência, confiança e excelência em todos os detalhes.",
    heroImage: "/images/INFLUACAPA.png",
    image: "/images/INFLUACAPA.png",
    pack: ["Raiz"],
    gallery: [
      "/images/experiencia.jpg",
      "/images/hospitalidade.jpg",
      "/images/garden.jpg",
    ],
    results: [
      "Rebranding consistente",
      "Confiança fortalecida",
      "Excelência comunicada",
    ],
  },
  {
    slug: "tomazzetti-melo",
    title: "Tomazzetti e Melo",
    client: "Tomazzetti e Melo",
    location: "SANTA CRUZ DO SUL (RS)",
    segment: "Identidade",
    year: "2025",
    service: "Raiz",
    category: "Identidade",
    summary:
      "Transformando a marca para expressar maturidade, excelência e autoridade.",
    description:
      "Transformando a marca para expressar maturidade, excelência e autoridade.",
    heroImage: "/images/TOMAZZETTICAPA.png",
    image: "/images/TOMAZZETTICAPA.png",
    pack: ["Raiz"],
    gallery: [
      "/images/experiencia.jpg",
      "/images/hospitalidade.jpg",
      "/images/garden.jpg",
    ],
    results: [
      "Maturidade expressa",
      "Autoridade consolidada",
      "Marca transformada",
    ],
  },
];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return cases.find((c) => c.slug === slug);
}
