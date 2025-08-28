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
    year: "2024",
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
    location: "Costa do Sol",
    year: "2023",
    service: "Branding Completo",
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
];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return cases.find((c) => c.slug === slug);
}
