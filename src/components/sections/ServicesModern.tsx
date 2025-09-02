'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

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

  // Agrupamento estratégico dos serviços
  const actionServices = [
    {
      id: 'ativacao',
      number: '01',
      title: 'Plano de Ativação na Prática',
      description: 'Transforme estratégia em ação concreta com acompanhamento e suporte para garantir resultados.',
      category: 'action'
    },
    {
      id: 'colmeia',
      number: '02',
      title: 'Colméia — Cultura Organizacional',
      description: 'Workshops e materiais para transformar seu time em embaixadores da marca.',
      category: 'action'
    },
    {
      id: 'polen',
      number: '03',
      title: 'Pólen — Jornada de Encantamento',
      description: 'Mapeamento da experiência do cliente em todos os pontos de contato.',
      category: 'action'
    }
  ];

  const performanceService = {
    id: 'performance',
    number: '01',
    title: 'Branding & Performance',
    description: 'Acompanhamento estratégico contínuo garantindo que a marca permaneça viva e coerente. Nosso serviço mais completo de gestão e evolução contínua da marca.',
    category: 'performance'
  };

  const structuralServices = [
    {
      id: 'arquitetura',
      number: '01',
      title: 'Arquitetura de Marca',
      description: 'Organização estratégica de marcas e sub-marcas garantindo clareza e coerência.',
      category: 'structural'
    },
    {
      id: 'naming',
      number: '02',
      title: 'Naming — Criação de Nome',
      description: 'Processo estratégico de criação de nomes memoráveis e disponíveis para uso.',
      category: 'structural'
    }
  ];

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
                className={`services-modern__tab ${activeTab === 'extensions' ? 'active' : ''}`}
                onClick={() => setActiveTab('extensions')}
              >
                <span className="services-modern__tab-label">02</span>
                <span className="services-modern__tab-title">Extensões & Projetos Complementares</span>
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
            ) : (
              // Grid Elegante com Cards Refinados
              <div className="services-modern__extensions-showcase">
                {/* Card 1 - Plano de Ativação */}
                <motion.div 
                  className="services-modern__extension-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="services-modern__extension-content"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="services-modern__extension-header">
                      <div className="services-modern__extension-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M6 18L9 15L12 18L15 12L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 12L18 9L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="services-modern__extension-tag services-modern__extension-tag--action">Ação</div>
                    </div>
                    <div className="services-modern__extension-main">
                      <span className="services-modern__extension-number">01</span>
                      <h4 className="services-modern__extension-title">Plano de Ativação na Prática</h4>
                      <p className="services-modern__extension-description">Transformamos sua estratégia em ações concretas com acompanhamento dedicado para garantir resultados.</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Card 2 - Colméia */}
                <motion.div 
                  className="services-modern__extension-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="services-modern__extension-content"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="services-modern__extension-header">
                      <div className="services-modern__extension-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 3L18 6V18L12 21L6 18V6L12 3Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <path d="M12 9L15 10.5V13.5L12 15L9 13.5V10.5L12 9Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                        </svg>
                      </div>
                      <div className="services-modern__extension-tag services-modern__extension-tag--action">Ação</div>
                    </div>
                    <div className="services-modern__extension-main">
                      <span className="services-modern__extension-number">02</span>
                      <h4 className="services-modern__extension-title">Colméia — Cultura Organizacional</h4>
                      <p className="services-modern__extension-description">Workshops imersivos e materiais para transformar seu time em embaixadores da marca.</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Card 3 - Pólen */}
                <motion.div 
                  className="services-modern__extension-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="services-modern__extension-content"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="services-modern__extension-header">
                      <div className="services-modern__extension-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 4.5L15 7.5L12 10.5L9 7.5L12 4.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <path d="M12 13.5L15 16.5L12 19.5L9 16.5L12 13.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <path d="M4.5 12L7.5 9L10.5 12L7.5 15L4.5 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <path d="M13.5 12L16.5 9L19.5 12L16.5 15L13.5 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="services-modern__extension-tag services-modern__extension-tag--action">Ação</div>
                    </div>
                    <div className="services-modern__extension-main">
                      <span className="services-modern__extension-number">03</span>
                      <h4 className="services-modern__extension-title">Pólen — Jornada de Encantamento</h4>
                      <p className="services-modern__extension-description">Mapeamento da experiência do cliente em todos os pontos de contato para máximo impacto.</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Card 4 - Branding & Performance */}
                <motion.div 
                  className="services-modern__extension-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="services-modern__extension-content"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="services-modern__extension-header">
                      <div className="services-modern__extension-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M4.5 18L7.5 12L10.5 15L13.5 9L16.5 13.5L19.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          <circle cx="7.5" cy="12" r="1.5" fill="currentColor"/>
                          <circle cx="10.5" cy="15" r="1.5" fill="currentColor"/>
                          <circle cx="13.5" cy="9" r="1.5" fill="currentColor"/>
                          <circle cx="16.5" cy="13.5" r="1.5" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="services-modern__extension-tag services-modern__extension-tag--follow">Acompanhamento</div>
                    </div>
                    <div className="services-modern__extension-main">
                      <span className="services-modern__extension-number">04</span>
                      <h4 className="services-modern__extension-title">Branding & Performance</h4>
                      <p className="services-modern__extension-description">Acompanhamento estratégico contínuo com análise de performance e otimização da marca.</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Card 5 - Arquitetura */}
                <motion.div 
                  className="services-modern__extension-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="services-modern__extension-content"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="services-modern__extension-header">
                      <div className="services-modern__extension-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M4.5 19.5H19.5V9L12 4.5L4.5 9V19.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <path d="M9 19.5V13.5H15V19.5" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <path d="M10.5 16.5H13.5" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="services-modern__extension-tag services-modern__extension-tag--structure">Arquitetura</div>
                    </div>
                    <div className="services-modern__extension-main">
                      <span className="services-modern__extension-number">05</span>
                      <h4 className="services-modern__extension-title">Arquitetura de Marca</h4>
                      <p className="services-modern__extension-description">Estruturação estratégica de marcas e sub-marcas com hierarquia clara e coerência total.</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Card 6 - Naming */}
                <motion.div 
                  className="services-modern__extension-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="services-modern__extension-content"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="services-modern__extension-header">
                      <div className="services-modern__extension-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M6 4.5H18V9H6V4.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <path d="M4.5 10.5H19.5V15H4.5V10.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <path d="M7.5 16.5H16.5V21H7.5V16.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                        </svg>
                      </div>
                      <div className="services-modern__extension-tag services-modern__extension-tag--structure">Arquitetura</div>
                    </div>
                    <div className="services-modern__extension-main">
                      <span className="services-modern__extension-number">06</span>
                      <h4 className="services-modern__extension-title">Naming — Criação de Nome</h4>
                      <p className="services-modern__extension-description">Processo criativo e estratégico para desenvolver nomes únicos, memoráveis e disponíveis.</p>
                    </div>
                  </motion.div>
                </motion.div>
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
