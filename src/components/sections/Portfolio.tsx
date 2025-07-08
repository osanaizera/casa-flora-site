import Link from 'next/link';

const portfolioItems = [
  {
    title: 'Residência Moderna SP',
    category: 'Residencial',
    image: '/images/portfolio/residencia-sp.jpg',
    description: 'Casa contemporânea que combina linhas clean com elementos naturais',
  },
  {
    title: 'Escritório Corporativo',
    category: 'Comercial',
    image: '/images/portfolio/escritorio-corporativo.jpg',
    description: 'Ambiente de trabalho inspirador com design biofílico',
  },
  {
    title: 'Loft Industrial',
    category: 'Residencial',
    image: '/images/portfolio/loft-industrial.jpg',
    description: 'Transformação de galpão em residência sofisticada',
  },
  {
    title: 'Showroom Premium',
    category: 'Comercial',
    image: '/images/portfolio/showroom-premium.jpg',
    description: 'Espaço de vendas que valoriza a experiência do cliente',
  },
  {
    title: 'Apartamento Cobertura',
    category: 'Residencial',
    image: '/images/portfolio/apartamento-cobertura.jpg',
    description: 'Integração perfeita entre interior e terraço',
  },
  {
    title: 'Restaurante Conceito',
    category: 'Comercial',
    image: '/images/portfolio/restaurante-conceito.jpg',
    description: 'Gastronomia e arquitetura em perfeita harmonia',
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Portfolio</h2>
          <p className="body-large text-neutral-600 max-w-2xl mx-auto">
            Explore nossos projetos mais recentes e descubra como transformamos visões em realidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-neutral-200 mb-4">
                <div className="w-full h-full bg-gradient-to-br from-sage-200 to-earth-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-earth-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="caption text-neutral-600">{item.title}</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="h4 mb-2">{item.title}</h3>
                    <p className="body-small">{item.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="h4 group-hover:text-earth-600 transition-colors">{item.title}</h3>
                  <p className="body-small text-neutral-600">{item.category}</p>
                </div>
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-earth-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/cases" className="btn-primary">
            Ver Todos os Projetos
          </Link>
        </div>
      </div>
    </section>
  );
}