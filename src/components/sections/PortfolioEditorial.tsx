'use client';

import { useState } from 'react';

export default function PortfolioEditorial() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Organic Essence",
      subtitle: "Cosmética Natural Premium",
      category: "experiencias",
      tags: ["Branding", "Packaging", "Digital"],
      color: "flora-green",
      size: "large", // large, medium, small
      description: "Marca de cosmética natural que conquistou o mercado premium com identidade autêntica e sustentável."
    },
    {
      id: 2,
      title: "Villa Serena",
      subtitle: "Boutique Hotel Experience",
      category: "hospitalidade",
      tags: ["Branding", "Experiência", "Ambiente"],
      color: "flora-coral",
      size: "medium",
      description: "Transformação completa de hotel boutique com foco na experiência sensorial dos hóspedes."
    },
    {
      id: 3,
      title: "Mindful Studio",
      subtitle: "Bem-Estar & Consciência",
      category: "experiencias",
      tags: ["Digital", "Comunidade", "Propósito"],
      color: "flora-amber",
      size: "small",
      description: "Estúdio de bem-estar que criou uma comunidade de 2000+ pessoas através de branding autêntico."
    },
    {
      id: 4,
      title: "Terra Gastronomy",
      subtitle: "Restaurante de Autor",
      category: "hospitalidade",
      tags: ["Identidade", "Menu", "Ambiente"],
      color: "flora-lavender",
      size: "medium",
      description: "Restaurante de alta gastronomia com identidade que celebra ingredientes locais."
    },
    {
      id: 5,
      title: "Creative Collective",
      subtitle: "Coletivo de Criadores",
      category: "experiencias",
      tags: ["Movimento", "Digital", "Comunidade"],
      color: "flora-rose",
      size: "large",
      description: "Movimento que conecta criadores independentes através de branding colaborativo."
    },
    {
      id: 6,
      title: "Retreat Haven",
      subtitle: "Retiros de Transformação",
      category: "hospitalidade",
      tags: ["Experiência", "Wellness", "Branding"],
      color: "sage",
      size: "small",
      description: "Centro de retiros que criou uma marca única no segmento de transformação pessoal."
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getGridClass = (size: string) => {
    switch(size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2 md:row-span-1';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-pearl via-ivory to-warm-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 blob bg-gradient-to-bl from-flora-green/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-80 h-80 tear-drop bg-gradient-to-tr from-flora-coral/5 to-transparent" />
      
      <div className="container relative z-10">
        {/* Header Editorial */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center mb-8">
            <div className="w-24 h-px bg-flora-coral mr-6" />
            <span className="caption text-flora-coral tracking-[0.3em] font-bold">
              PORTFOLIO
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <h2 className="font-serif leading-none mb-6">
                <span className="block text-5xl md:text-7xl font-light text-charcoal">
                  Marcas que
                </span>
                <span className="block text-6xl md:text-8xl font-bold text-flora-green italic -mt-4">
                  floresceram
                </span>
              </h2>
            </div>
            
            <div>
              <p className="body-xl text-slate leading-relaxed mb-8">
                Cada projeto é uma jornada única de descoberta e transformação. 
                Veja como ajudamos marcas a encontrar sua voz autêntica.
              </p>
              
              {/* Filtros Estilizados */}
              <div className="flex flex-wrap gap-4">
                {[
                  { key: 'all', label: 'Todos os Projetos' },
                  { key: 'experiencias', label: 'Experiências' },
                  { key: 'hospitalidade', label: 'Hospitalidade' }
                ].map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-6 py-3 caption font-bold tracking-wider transition-all duration-500 ${
                      activeFilter === filter.key
                        ? 'bg-flora-green text-white'
                        : 'bg-transparent text-steel border border-mercury hover:border-flora-green hover:text-flora-green'
                    }`}
                    style={{
                      borderRadius: activeFilter === filter.key ? '20px 5px 20px 5px' : '5px 20px 5px 20px'
                    }}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid Assimétrico de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-6 auto-rows-fr">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${getGridClass(project.size)}`}
            >
              <div className="relative h-full min-h-[300px] overflow-hidden bg-gradient-to-br from-charcoal/5 to-clay/10">
                {/* Image Placeholder com forma orgânica */}
                <div 
                  className={`w-full h-full bg-gradient-to-br from-${project.color}/20 to-${project.color}/5 relative overflow-hidden transition-all duration-700 group-hover:scale-105`}
                  style={{
                    borderRadius: index % 3 === 0 ? '30px 5px 30px 5px' : 
                                 index % 3 === 1 ? '5px 30px 5px 30px' : 
                                 '25px 25px 5px 25px'
                  }}
                >
                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-${project.color} to-flora-coral rounded-full flex items-center justify-center`}>
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="caption text-steel">{project.title}</p>
                    </div>
                  </div>

                  {/* Overlay com Informações */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center mb-3">
                        <div className={`w-3 h-3 bg-${project.color} rounded-full mr-3`} />
                        <span className="caption text-flora-coral tracking-wider font-bold">
                          {project.category.toUpperCase()}
                        </span>
                      </div>
                      
                      <h3 className="h4 text-white mb-2 font-serif">
                        {project.title}
                      </h3>
                      
                      <p className="body-small text-mercury mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/20 text-white caption">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-flora-amber group-hover:translate-x-2 transition-transform duration-300">
                        <span className="caption mr-2 font-bold">VER PROJETO</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-12 h-12 bg-${project.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">
                      {String(project.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Editorial */}
        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
              Sua marca é o próximo
              <span className="text-flora-green italic"> case de sucesso</span>?
            </h3>
            
            <p className="body-xl text-slate mb-12 leading-relaxed">
              Cada transformação começa com uma conversa. Vamos descobrir juntos 
              o potencial único da sua marca.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/cases" 
                className="group relative overflow-hidden bg-flora-coral text-white px-10 py-5 magnetic-button"
                style={{
                  borderRadius: '30px 5px 30px 5px',
                  boxShadow: '0 20px 40px rgba(255, 107, 107, 0.3)'
                }}
              >
                <span className="relative z-10 font-bold tracking-wide">VER TODOS OS CASES</span>
                <div className="absolute inset-0 bg-flora-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
              
              <a 
                href="/contato" 
                className="group relative overflow-hidden border-2 border-flora-green text-flora-green px-10 py-5 magnetic-button"
                style={{
                  borderRadius: '5px 30px 5px 30px'
                }}
              >
                <span className="relative z-10 font-bold tracking-wide group-hover:text-white transition-colors duration-500">
                  INICIAR MEU PROJETO
                </span>
                <div className="absolute inset-0 bg-flora-green transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}