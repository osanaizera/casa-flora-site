'use client';

import { useState } from 'react';

export default function ServicosInteligente() {
  const [activeTab, setActiveTab] = useState('branding');
  const [activeService, setActiveService] = useState<string | null>(null);

  const servicosBranding = [
    {
      id: 'garden',
      nome: 'Garden',
      subtitulo: 'Projeto Completo de Branding',
      descricao: 'O caminho mais completo para estruturar sua marca com estratégia, identidade e aplicação prática.',
      detalhes: 'Inclui diagnóstico profundo, posicionamento estratégico, universo simbólico e visual, e plano de ativação da marca.',
      icon: '🌱',
      cor: 'flora-green',
      duracao: '3-4 meses',
      ideal: 'Negócios estabelecidos prontos para transformação completa'
    },
    {
      id: 'raiz',
      nome: 'Raíz',
      subtitulo: 'Projeto Pocket de Branding',
      descricao: 'Versão compacta e essencial para estruturar a essência e identidade visual da marca de forma ágil e estratégica.',
      detalhes: 'Ideal para negócios que precisam organizar sua marca, mas ainda não estão no momento de um projeto completo.',
      icon: '🌿',
      cor: 'flora-sage',
      duracao: '4-6 semanas',
      ideal: 'Startups e negócios em crescimento'
    }
  ];

  const extensoes = [
    {
      id: 'ativacao',
      nome: 'Plano de Ativação na Prática',
      descricao: 'Tradução do brandbook em um plano de ação concreto, com acompanhamento da implementação e suporte estratégico.',
      detalhes: 'Inclui planejamento de lançamento, aplicação nos pontos físicos e digitais e análise de resultados.',
      icon: '🚀',
      cor: 'flora-coral'
    },
    {
      id: 'performance',
      nome: 'Branding & Performance',
      subtitulo: 'Gestão de Marca Contínua',
      descricao: 'Acompanhamento estratégico e criativo contínuo, com planejamento de campanhas, ações e conteúdos.',
      detalhes: 'Garantindo que a marca permaneça viva e coerente.',
      icon: '📈',
      cor: 'flora-amber'
    },
    {
      id: 'colmeia',
      nome: 'Colméia',
      subtitulo: 'Cultura Organizacional & Rituais',
      descricao: 'Workshops e materiais internos para transformar o time em embaixadores da marca.',
      detalhes: 'Ideal para negócios onde o atendimento e o alinhamento da equipe fazem toda a diferença.',
      icon: '🐝',
      cor: 'flora-clay'
    },
    {
      id: 'polen',
      nome: 'Pólen',
      subtitulo: 'Jornada de Encantamento',
      descricao: 'Mapeamento da experiência do cliente em todos os pontos de contato.',
      detalhes: 'Com plano de ações para gerar conexão, encantamento e rentabilidade.',
      icon: '✨',
      cor: 'flora-green'
    },
    {
      id: 'arquitetura',
      nome: 'Arquitetura de Marca',
      descricao: 'Organização e alinhamento estratégico de marcas e sub-marcas dentro de um mesmo negócio.',
      detalhes: 'Garantindo clareza, coerência e conexões estratégicas.',
      icon: '🏗️',
      cor: 'flora-sage'
    },
    {
      id: 'naming',
      nome: 'Naming',
      subtitulo: 'Criação de Nome para Marcas',
      descricao: 'Processo estratégico de criação de nomes memoráveis, alinhados ao posicionamento.',
      detalhes: 'Disponíveis para uso, com curadoria e pesquisa de mercado.',
      icon: '💭',
      cor: 'flora-coral'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-warm-white via-off-white to-warm-white relative overflow-hidden">
      {/* Background Elements Sutis */}
      <div className="absolute top-0 right-0 w-80 h-80 blob bg-gradient-to-bl from-flora-green/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 tear-drop bg-gradient-to-tr from-flora-coral/5 to-transparent" />
      
      <div className="container relative z-10">
        {/* Header Editorial */}
        <div className="max-w-5xl mb-20">
          <div className="flex items-center mb-8">
            <div className="w-24 h-px bg-warm-brown mr-6" />
            <span className="caption text-warm-brown tracking-[0.3em] font-bold">
              NOSSOS SERVIÇOS
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif leading-none mb-8">
                <span className="block text-4xl md:text-6xl font-light text-charcoal">
                  Marcas
                </span>
                <span className="block text-5xl md:text-7xl font-bold text-flora-green italic -mt-3">
                  sensoriais,
                </span>
                <span className="block text-3xl md:text-5xl font-normal text-flora-coral -mt-1">
                  autorais &
                </span>
                <span className="block text-6xl md:text-8xl font-black text-charcoal -mt-4">
                  HUMANAS
                </span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="body-xl text-warm-gray leading-relaxed">
                Na Casa Flora, desenvolvemos marcas que conectam negócios e pessoas 
                com estratégia, identidade e impacto real.
              </p>
              
              <p className="body-large text-warm-gray leading-relaxed">
                Nossos serviços atendem negócios de produtos, serviços e hospitalidade 
                que desejam crescer com consistência, autenticidade e presença.
              </p>

              <div className="p-6 bg-flora-sage/10 organic-border">
                <p className="body-regular text-slate italic leading-relaxed">
                  <strong className="text-flora-green">Decodificador:</strong> Casa Flora 
                  Experiências & Hospitalidade — transformamos negócios em marcas 
                  memoráveis através de dois universos complementares.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navegação entre categorias */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/80 backdrop-blur-sm p-2 organic-border border border-mercury/30">
            <button
              onClick={() => setActiveTab('branding')}
              className={`px-8 py-4 caption font-bold tracking-wider transition-all duration-500 ${
                activeTab === 'branding'
                  ? 'bg-flora-green text-white'
                  : 'text-steel hover:text-flora-green'
              }`}
              style={{
                borderRadius: activeTab === 'branding' ? '20px 5px 20px 5px' : '0'
              }}
            >
              PROJETOS DE BRANDING
            </button>
            <button
              onClick={() => setActiveTab('extensoes')}
              className={`px-8 py-4 caption font-bold tracking-wider transition-all duration-500 ${
                activeTab === 'extensoes'
                  ? 'bg-flora-coral text-white'
                  : 'text-steel hover:text-flora-coral'
              }`}
              style={{
                borderRadius: activeTab === 'extensoes' ? '5px 20px 5px 20px' : '0'
              }}
            >
              EXTENSÕES & COMPLEMENTARES
            </button>
          </div>
        </div>

        {/* Conteúdo dos Serviços */}
        {activeTab === 'branding' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="h3 text-charcoal mb-4">Projetos Completos de Branding</h3>
              <p className="body-large text-slate max-w-3xl mx-auto">
                Oferecemos projetos completos de branding e extensões que aprofundam 
                a aplicação e a gestão contínua da marca.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {servicosBranding.map((servico) => (
                <div 
                  key={servico.id}
                  className="group cursor-pointer"
                  onClick={() => setActiveService(activeService === servico.id ? null : servico.id)}
                >
                  <div className={`relative overflow-hidden bg-white/60 backdrop-blur-sm border transition-all duration-700 hover:shadow-2xl ${
                    activeService === servico.id 
                      ? `border-${servico.cor} shadow-xl` 
                      : 'border-mercury/30 hover:border-flora-green/30'
                  }`}
                  style={{
                    borderRadius: servico.id === 'garden' ? '30px 5px 30px 5px' : '5px 30px 5px 30px'
                  }}>
                    
                    {/* Header do Serviço */}
                    <div className="p-8 border-b border-mercury/20">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 bg-${servico.cor}/20 rounded-full flex items-center justify-center text-2xl`}>
                            {servico.icon}
                          </div>
                          <div>
                            <h4 className="h4 text-charcoal group-hover:text-flora-green transition-colors duration-500">
                              {servico.nome}
                            </h4>
                            <p className={`caption text-${servico.cor} tracking-wider font-bold`}>
                              {servico.subtitulo}
                            </p>
                          </div>
                        </div>
                        
                        <div className={`w-8 h-8 border-2 border-${servico.cor} rounded-full flex items-center justify-center transition-transform duration-300 ${
                          activeService === servico.id ? 'rotate-45' : 'group-hover:rotate-45'
                        }`}>
                          <svg className="w-4 h-4 text-flora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      </div>
                      
                      <p className="body-large text-slate leading-relaxed mb-4">
                        {servico.descricao}
                      </p>
                      
                      <div className="flex items-center space-x-6 text-steel">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-${servico.cor} rounded-full`} />
                          <span className="body-small">{servico.duracao}</span>
                        </div>
                        <div className="w-px h-4 bg-mercury" />
                        <span className="body-small">{servico.ideal}</span>
                      </div>
                    </div>

                    {/* Detalhes Expansíveis */}
                    <div className={`overflow-hidden transition-all duration-700 ${
                      activeService === servico.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-8 bg-gradient-to-br from-warm-white to-pearl">
                        <h5 className="h4 mb-4 text-charcoal">O que está incluído:</h5>
                        <p className="body-regular text-slate leading-relaxed mb-6">
                          {servico.detalhes}
                        </p>
                        
                        <a 
                          href={`/servicos/${servico.id}`}
                          className="inline-flex items-center text-flora-green hover:text-flora-coral transition-colors duration-300"
                        >
                          <span className="caption font-bold tracking-wider mr-2">SABER MAIS</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'extensoes' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="h3 text-charcoal mb-4">Extensões e Projetos Complementares</h3>
              <p className="body-large text-slate max-w-3xl mx-auto">
                Projetos que aprofundam, expandem e garantem a aplicação prática 
                e consistente do branding.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extensoes.map((extensao, index) => (
                <div 
                  key={extensao.id}
                  className="group cursor-pointer"
                  onClick={() => setActiveService(activeService === extensao.id ? null : extensao.id)}
                >
                  <div className={`relative overflow-hidden bg-white/60 backdrop-blur-sm border border-mercury/30 transition-all duration-700 hover:shadow-xl hover:border-flora-coral/30 h-full ${
                    activeService === extensao.id ? 'shadow-xl border-flora-coral' : ''
                  }`}
                  style={{
                    borderRadius: index % 3 === 0 ? '25px 5px 25px 5px' : 
                                 index % 3 === 1 ? '5px 25px 5px 25px' : 
                                 '25px 25px 5px 25px'
                  }}>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 bg-${extensao.cor}/20 rounded-full flex items-center justify-center text-lg`}>
                          {extensao.icon}
                        </div>
                        <div>
                          <h4 className="h4 text-charcoal group-hover:text-flora-coral transition-colors duration-500">
                            {extensao.nome}
                          </h4>
                          {extensao.subtitulo && (
                            <p className={`caption text-${extensao.cor} tracking-wider font-bold`}>
                              {extensao.subtitulo}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <p className="body-regular text-slate leading-relaxed mb-4">
                        {extensao.descricao}
                      </p>
                      
                      <p className="body-small text-steel leading-relaxed">
                        {extensao.detalhes}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action Final */}
        <div className="mt-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-8 leading-tight">
              Qual é o próximo passo para 
              <span className="text-flora-green italic"> sua marca florescer</span>?
            </h3>
            
            <p className="body-xl text-slate mb-12 leading-relaxed max-w-2xl mx-auto">
              Cada marca tem sua jornada única. Vamos descobrir juntos qual caminho 
              faz mais sentido para o seu negócio neste momento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/contato" 
                className="group relative overflow-hidden bg-flora-green text-white px-10 py-5 magnetic-button"
                style={{
                  borderRadius: '25px 5px 25px 5px',
                  boxShadow: '0 15px 30px rgba(123, 160, 91, 0.3)'
                }}
              >
                <span className="relative z-10 font-bold tracking-wide">CONVERSAR SOBRE MEU PROJETO</span>
                <div className="absolute inset-0 bg-flora-coral transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
              
              <a 
                href="/servicos" 
                className="group relative overflow-hidden border-2 border-flora-coral text-flora-coral px-10 py-5 magnetic-button"
                style={{
                  borderRadius: '5px 25px 5px 25px'
                }}
              >
                <span className="relative z-10 font-bold tracking-wide group-hover:text-white transition-colors duration-500">
                  VER TODOS OS SERVIÇOS
                </span>
                <div className="absolute inset-0 bg-flora-coral transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}