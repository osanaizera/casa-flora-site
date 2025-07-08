'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CasesShowcase() {
  const [activeCase, setActiveCase] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cases = [
    {
      id: 'insolito',
      title: 'Insólito',
      location: 'BÚZIOS',
      service: 'Rebranding',
      category: 'Hospitalidade',
      year: '2024',
      description: 'Transformação completa da identidade visual de um resort boutique em Búzios, criando uma marca que reflete a exclusividade e o charme único da propriedade.',
      color: 'coral',
      gradient: 'from-orange-50 to-red-50'
    },
    {
      id: 'parador-lumiar',
      title: 'Parador Lumiar',
      location: 'LUMIAR',
      service: 'Rebranding',
      category: 'Hospitalidade',
      year: '2024',
      description: 'Reposicionamento estratégico de marca para uma pousada premium na serra, conectando natureza exuberante com experiências autênticas.',
      color: 'green',
      gradient: 'from-green-50 to-emerald-50'
    },
    {
      id: 'zendaya-resort',
      title: 'Zendaya Resort',
      location: 'COSTA DO SOL',
      service: 'Branding Completo',
      category: 'Resort',
      year: '2023',
      description: 'Criação de marca completa para resort de luxo, desenvolvendo identidade visual sofisticada que captura a essência do destino.',
      color: 'blue',
      gradient: 'from-blue-50 to-cyan-50'
    },
    {
      id: 'casa-poema',
      title: 'Casa Poema',
      location: 'PARATY',
      service: 'Identidade Visual',
      category: 'Boutique Hotel',
      year: '2023',
      description: 'Desenvolvimento de identidade visual poética para casa de hospedagem histórica, honrando o patrimônio cultural de Paraty.',
      color: 'purple',
      gradient: 'from-purple-50 to-indigo-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="cases-showcase" ref={sectionRef}>
      {/* Background Elements */}
      <div className="cases-showcase__background">
        <div className="cases-showcase__gradient-orb cases-showcase__gradient-orb--1"></div>
        <div className="cases-showcase__gradient-orb cases-showcase__gradient-orb--2"></div>
        <div className="cases-showcase__gradient-orb cases-showcase__gradient-orb--3"></div>
      </div>

      <div className="cases-showcase__container">
        {/* Header Section */}
        <motion.div
          className="cases-showcase__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="cases-showcase__badge">
            <span className="cases-showcase__badge-text">Nossos Cases</span>
            <div className="cases-showcase__badge-glow"></div>
          </div>
          
          <h2 className="cases-showcase__title">
            Marcas que
            <span className="cases-showcase__title-highlight"> transformamos</span>
          </h2>
          
          <p className="cases-showcase__subtitle">
            Experiências únicas criadas para destinos especiais. Cada projeto é uma jornada 
            de descoberta, onde estratégia e criatividade se encontram para gerar resultados extraordinários.
          </p>

          <div className="cases-showcase__stats">
            <div className="cases-showcase__stat">
              <span className="cases-showcase__stat-number">50+</span>
              <span className="cases-showcase__stat-label">Marcas transformadas</span>
            </div>
            <div className="cases-showcase__stat">
              <span className="cases-showcase__stat-number">15+</span>
              <span className="cases-showcase__stat-label">Anos de experiência</span>
            </div>
            <div className="cases-showcase__stat">
              <span className="cases-showcase__stat-number">98%</span>
              <span className="cases-showcase__stat-label">Satisfação do cliente</span>
            </div>
          </div>
        </motion.div>

        {/* Cases Grid */}
        <motion.div
          className="cases-showcase__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              className={`cases-showcase__card cases-showcase__card--${caseItem.color}`}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              onHoverStart={() => setActiveCase(index)}
            >
              {/* Card Background Effects */}
              <div className={`cases-showcase__card-gradient ${caseItem.gradient}`}></div>
              <div className="cases-showcase__card-glow"></div>
              <div className="cases-showcase__card-shimmer"></div>

              {/* Card Content */}
              <div className="cases-showcase__card-content">
                {/* Header */}
                <div className="cases-showcase__card-header">
                  <div className="cases-showcase__card-meta">
                    <span className="cases-showcase__card-category">{caseItem.category}</span>
                    <span className="cases-showcase__card-year">{caseItem.year}</span>
                  </div>
                  <div className="cases-showcase__card-service">
                    <span>{caseItem.service}</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="cases-showcase__card-main">
                  <div className="cases-showcase__card-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10C21 17L12 21L3 10C3 5.029 7.029 1 12 1S21 5.029 21 10Z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    {caseItem.location}
                  </div>
                  
                  <h3 className="cases-showcase__card-title">{caseItem.title}</h3>
                  <p className="cases-showcase__card-description">{caseItem.description}</p>
                </div>

                {/* Footer */}
                <div className="cases-showcase__card-footer">
                  <button className="cases-showcase__card-cta">
                    <span>Ver projeto</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  <div className="cases-showcase__card-indicator">
                    <div className="cases-showcase__card-dot"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="cases-showcase__card-decoration">
                <div className="cases-showcase__card-lines">
                  <div className="cases-showcase__card-line cases-showcase__card-line--1"></div>
                  <div className="cases-showcase__card-line cases-showcase__card-line--2"></div>
                  <div className="cases-showcase__card-line cases-showcase__card-line--3"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="cases-showcase__bottom-cta"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="cases-showcase__cta-content">
            <h3 className="cases-showcase__cta-title">
              Pronto para ser nosso próximo case de sucesso?
            </h3>
            <p className="cases-showcase__cta-description">
              Vamos conversar sobre como podemos transformar sua marca em algo verdadeiramente memorável.
            </p>
            <button className="cases-showcase__cta-button">
              <span>Iniciar conversa</span>
              <div className="cases-showcase__cta-button-glow"></div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}