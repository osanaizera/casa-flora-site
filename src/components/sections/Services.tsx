import Link from 'next/link';

const services = [
  {
    title: 'Arquitetura Residencial',
    description: 'Projetos únicos que refletem a personalidade dos moradores, combinando funcionalidade e estética em perfeita harmonia.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Design de Interiores',
    description: 'Ambientes sofisticados que respiram elegância e conforto, criados com materiais premium e atenção aos detalhes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m4 0H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zM9 9h6m-6 4h6m-6 4h4" />
      </svg>
    ),
  },
  {
    title: 'Projetos Comerciais',
    description: 'Espaços corporativos que inspiram produtividade e bem-estar, projetados para fortalecer a identidade da marca.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Consultoria Especializada',
    description: 'Orientação técnica e criativa para transformar sua visão em realidade, com expertise em sustentabilidade e inovação.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Nossos Serviços</h2>
          <p className="body-large text-neutral-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em arquitetura e design, sempre com foco na excelência e inovação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card hover-lift text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-earth-200 rounded-full text-earth-600">
                {service.icon}
              </div>
              <h3 className="h4 mb-4">{service.title}</h3>
              <p className="body-regular text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/servicos" className="btn-primary">
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}