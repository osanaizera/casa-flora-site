'use client';

import { useState } from 'react';

export default function ServicesModern() {
  const [activeTab, setActiveTab] = useState('branding');

  const brandingServices = [
    {
      id: 'garden',
      number: '01',
      badge: 'Projeto Completo',
      title: 'Garden',
      subtitle: 'Para marcas que querem crescer com estratégia completa',
      description: 'O caminho mais completo para estruturar sua marca com estratégia, identidade e aplicação prática. Inclui diagnóstico profundo, posicionamento estratégico, universo simbólico e visual, e plano de ativação da marca.',
      color: 'garden'
    },
    {
      id: 'raiz',
      number: '02', 
      badge: 'Base Sólida',
      title: 'Raíz',
      subtitle: 'Para negócios que precisam organizar sua essência',
      description: 'Versão compacta e essencial para estruturar a essência e identidade visual da marca de forma ágil e estratégica. Ideal para quem está começando ou precisa de uma base sólida inicial.',
      color: 'raiz'
    }
  ];

  // Removidos arrays não utilizados para build clean

  return (
    <section className="services-modern" id="servicos">
      {/* Sidebar floral removido para fundo sólido e limpo */}
      
      <div className="services-modern__container">
        <div className="services-modern__layout">
          {/* Left Panel - Sidebar */}
          <div className="services-modern__sidebar">
            <h2 className="services-modern__title">Nossos Serviços</h2>
            <p className="services-modern__lead">
              Na Casa Flora, desenvolvemos marcas sensoriais, autorais e humanas, que conectam 
              negócios e pessoas com estratégia, identidade e impacto real.
            </p>
            <div className="services-modern__details">
              <p>
                Nossos serviços atendem negócios de produtos, serviços e hospitalidade que desejam 
                crescer com consistência, autenticidade e presença.
              </p>
              <p>
                Oferecemos projetos completos de branding e extensões que aprofundam a aplicação 
                e a gestão contínua da marca.
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="services-modern__tabs">
              <button 
                className={`services-modern__tab ${activeTab === 'branding' ? 'active' : ''}`}
                onClick={() => setActiveTab('branding')}
              >
                <span className="services-modern__tab-label">01</span>
                <span className="services-modern__tab-title">Projetos de Branding</span>
              </button>
              <button 
                className={`services-modern__tab ${activeTab === 'ativacao' ? 'active' : ''}`}
                onClick={() => setActiveTab('ativacao')}
              >
                <span className="services-modern__tab-label">02</span>
                <span className="services-modern__tab-title">Projetos de Ativação</span>
              </button>
              <button 
                className={`services-modern__tab ${activeTab === 'extensions' ? 'active' : ''}`}
                onClick={() => setActiveTab('extensions')}
              >
                <span className="services-modern__tab-label">03</span>
                <span className="services-modern__tab-title">Acompanhamento e Gestão de Marca</span>
              </button>
            </div>
          </div>

          {/* Right Panel - Content */}
          <div className="services-modern__content">
            {activeTab === 'branding' ? (
              // Glass Cards for Branding Projects
              <div className="services-modern__branding-grid">
                {brandingServices.map((service) => (
                  <div key={service.id} className="services-modern__glass-card">
                    <div className={`services-modern__glass-bg services-modern__glass-bg--${service.color}`}></div>
                    <div className="services-modern__glass-content">
                      <div className="services-modern__glass-header">
                        <span className="services-modern__glass-number">{service.number}</span>
                        <div className="services-modern__glass-badge">{service.badge}</div>
                        <h3 className="services-modern__glass-title">{service.title}</h3>
                        <p className="services-modern__glass-subtitle">{service.subtitle}</p>
                      </div>
                      
                      <p className="services-modern__glass-description">{service.description}</p>
                      
                      <div className="services-modern__glass-footer">
                        <div className="services-modern__glass-arrow">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : activeTab === 'ativacao' ? (
              // Ativação Âmbar - Header Card + Two Column Layout
              <div className="services-modern__ativacao-layout">
                {/* Glass Card Header */}
                <div className="services-modern__glass-card services-modern__glass-card--header">
                  <div className="services-modern__glass-bg services-modern__glass-bg--ambar"></div>
                  <div className="services-modern__glass-content services-modern__glass-content--header">
                    <div className="services-modern__glass-header">
                      <span className="services-modern__glass-number">02</span>
                      <div className="services-modern__glass-badge">Estrutura da identidade</div>
                      <h3 className="services-modern__glass-title">Ativação Âmbar</h3>
                      <p className="services-modern__glass-subtitle">Acendimento da presença</p>
                    </div>
                    
                    <div className="services-modern__glass-footer">
                      <div className="services-modern__glass-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div className="services-modern__content-layout">
                  <div className="services-modern__content-column">
                    <div className="services-modern__text-content">
                      <p>A <strong>Ativação Âmbar</strong> é o ponto de partida para marcas que desejam alinhar essência, organizar presença e comunicar com clareza.</p>
                      <p>Mais que um projeto, é um <strong>ritual estratégico de ativação de branding</strong> — intenso, profundo e direcionado.</p>
                      <p>Assim como o âmbar, que cristaliza e protege ao longo do tempo, esse processo dá forma, densidade e luz à identidade da marca.</p>
                      <p>Desenvolvemos o <strong>Ritual Âmbar</strong> — nossa metodologia exclusiva — aplicada em ciclos de <strong>3, 6 ou 12 meses</strong>.</p>
                    </div>
                  </div>
                  
                  <div className="services-modern__content-column">
                    <div className="services-modern__phases-section">
                      <h4 className="services-modern__phases-title">✽ Os três tempos do Ritual Âmbar</h4>
                      <div className="services-modern__phases-list">
                        <div className="services-modern__phase-item">
                          <div className="services-modern__phase-header">
                            <span className="services-modern__phase-number">01</span>
                            <h5 className="services-modern__phase-title">Imersão</h5>
                          </div>
                          <p className="services-modern__phase-description">
                            Mergulho profundo na essência, história e diferenciais da marca. 
                            Análise de público, mercado, concorrência e oportunidades.
                          </p>
                        </div>
                        <div className="services-modern__phase-item">
                          <div className="services-modern__phase-header">
                            <span className="services-modern__phase-number">02</span>
                            <h5 className="services-modern__phase-title">Organização</h5>
                          </div>
                          <p className="services-modern__phase-description">
                            Construção da base estratégica: posicionamento, tom de voz, 
                            identidade visual, storytelling e plano editorial.
                          </p>
                        </div>
                        <div className="services-modern__phase-item">
                          <div className="services-modern__phase-header">
                            <span className="services-modern__phase-number">03</span>
                            <h5 className="services-modern__phase-title">Ativação</h5>
                          </div>
                          <p className="services-modern__phase-description">
                            Aplicação prática e consistente da marca: campanhas, plano de 
                            comunicação, conteúdos, materiais e diretrizes vivas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Acompanhamento Seiva - Header Card + Two Column Layout
              <div className="services-modern__ativacao-layout">
                {/* Glass Card Header */}
                <div className="services-modern__glass-card services-modern__glass-card--header">
                  <div className="services-modern__glass-bg services-modern__glass-bg--seiva"></div>
                  <div className="services-modern__glass-content services-modern__glass-content--header">
                    <div className="services-modern__glass-header">
                      <span className="services-modern__glass-number">03</span>
                      <div className="services-modern__glass-badge">Proteção da essência</div>
                      <h3 className="services-modern__glass-title">Acompanhamento Seiva</h3>
                      <p className="services-modern__glass-subtitle">Clareza no crescimento</p>
                    </div>
                    
                    <div className="services-modern__glass-footer">
                      <div className="services-modern__glass-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div className="services-modern__content-layout">
                  <div className="services-modern__content-column">
                    <div className="services-modern__text-content">
                      <p><strong>É estratégia contínua e personalizada</strong>. A Seiva acompanha a marca já viva — ajudando a crescer com coerência, inteligência e ritmo.</p>
                      <blockquote className="services-modern__seiva-quote">
                        <p>A seiva é o fluido vital que percorre todo o organismo.<br/>
                        Conecta raízes, caule, folhas e flores. Nutre de dentro para fora.</p>
                      </blockquote>
                      <p>Para nós, a Seiva é o <strong>branding vivo</strong>: o sistema que conecta essência, estratégia, expressão e evolução.</p>
                      <p>Criamos o <strong>Método Seiva</strong> — nossa metodologia proprietária de gestão de marca viva, aplicada exclusivamente no <strong>Acompanhamento Seiva</strong>.</p>
                    </div>
                  </div>
                  
                  <div className="services-modern__content-column">
                    <div className="services-modern__phases-section">
                      <h4 className="services-modern__phases-title">✽ Os quatro pilares do Método Seiva</h4>
                      <div className="services-modern__pillars-list">
                        <div className="services-modern__pillar-item">
                          <div className="services-modern__pillar-header">
                            <span className="services-modern__pillar-number">01</span>
                            <h5 className="services-modern__pillar-title">Essência</h5>
                          </div>
                          <p className="services-modern__pillar-description">
                            Identidade viva e autêntica. Propósito, valores, diferenciais, arquétipo e tom de voz.
                          </p>
                        </div>
                        <div className="services-modern__pillar-item">
                          <div className="services-modern__pillar-header">
                            <span className="services-modern__pillar-number">02</span>
                            <h5 className="services-modern__pillar-title">Estratégia</h5>
                          </div>
                          <p className="services-modern__pillar-description">
                            Direção clara e viável. Posicionamento, objetivos, público, metas e planos de ação.
                          </p>
                        </div>
                        <div className="services-modern__pillar-item">
                          <div className="services-modern__pillar-header">
                            <span className="services-modern__pillar-number">03</span>
                            <h5 className="services-modern__pillar-title">Expressão</h5>
                          </div>
                          <p className="services-modern__pillar-description">
                            Presença visual e narrativa sensível. Design, storytelling, campanhas, canais e comportamento.
                          </p>
                        </div>
                        <div className="services-modern__pillar-item">
                          <div className="services-modern__pillar-header">
                            <span className="services-modern__pillar-number">04</span>
                            <h5 className="services-modern__pillar-title">Evolução</h5>
                          </div>
                          <p className="services-modern__pillar-description">
                            Crescimento contínuo com consciência. KPIs, reputação, inteligência de marca e performance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA do serviços removido — CTA global fica no final da home */}

        {/* Remove floating accents - too much visual noise */}
      </div>
    </section>
  );
}
