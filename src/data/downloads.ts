export interface DownloadMaterial {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'guide';
  category: string;
  downloadUrl: string;
  thumbnailUrl?: string;
  fileSize?: string;
  duration?: string;
}

export const downloadMaterials: DownloadMaterial[] = [
  {
    id: 'branding-hospitalidade',
    title: 'Guia Completo de Branding para Hospitalidade',
    description: 'Estratégias essenciais para criar identidades marcantes no setor de hospitalidade. Como alinhar experiência do hóspede com propósito da marca.',
    type: 'pdf',
    category: 'Branding',
    downloadUrl: '/downloads/branding-hospitalidade.pdf',
    thumbnailUrl: '/images/experiencia.jpg',
    fileSize: '2.3 MB'
  },
  {
    id: 'jornada-hospede',
    title: 'Mapeando a Jornada do Hóspede',
    description: 'Metodologia completa para mapear e otimizar cada ponto de contato da jornada do hóspede, do pré-reserva ao pós-estadia.',
    type: 'video',
    category: 'Experiência',
    downloadUrl: '/downloads/jornada-hospede.mp4',
    thumbnailUrl: '/images/hospitalidade.jpg',
    duration: '45 min'
  },
  {
    id: 'tendencias-2024',
    title: 'Tendências em Hospitalidade 2024',
    description: 'Análise detalhada das principais tendências que estão moldando o futuro da hospitalidade, com cases reais e insights práticos.',
    type: 'pdf',
    category: 'Tendências',
    downloadUrl: '/downloads/tendencias-2024.pdf',
    thumbnailUrl: '/images/garden.jpg',
    fileSize: '1.8 MB'
  },
  {
    id: 'rebranding-hoteleiro',
    title: 'Rebranding no Setor Hoteleiro',
    description: 'Passo a passo para conduzir um processo de rebranding eficaz em hotéis e pousadas, com metodologia testada em projetos reais.',
    type: 'guide',
    category: 'Rebranding',
    downloadUrl: '/downloads/rebranding-hoteleiro.pdf',
    thumbnailUrl: '/images/raiz.jpg',
    fileSize: '3.1 MB'
  },
  {
    id: 'storytelling-marca',
    title: 'Storytelling para Marcas de Hospitalidade',
    description: 'Como criar narrativas envolventes que conectem emocionalmente com hóspedes e fortaleçam o posicionamento da marca.',
    type: 'video',
    category: 'Storytelling',
    downloadUrl: '/downloads/storytelling-marca.mp4',
    thumbnailUrl: '/images/experiencia.jpg',
    duration: '32 min'
  },
  {
    id: 'pesquisa-mercado',
    title: 'Metodologia de Pesquisa de Mercado',
    description: 'Ferramentas e técnicas para conduzir pesquisas de mercado eficazes no setor de hospitalidade, incluindo templates práticos.',
    type: 'pdf',
    category: 'Pesquisa',
    downloadUrl: '/downloads/pesquisa-mercado.pdf',
    thumbnailUrl: '/images/hospitalidade.jpg',
    fileSize: '2.7 MB'
  }
];