'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const founders = {
    ana: {
      id: 'ana',
      name: 'Ana Bossardi',
      role: 'Fundadora & Diretora Criativa',
      bio: 'Empreende desde 2019, formada em Design Gráfico. Ana é responsável pelo aspecto artístico da Casa Flora, liderando a criação de identidades visuais memoráveis e experiências sensoriais únicas.',
      expertise: 'Com mais de 100 marcas transformadas, especialista em criar conexões emocionais através do design.',
      image: '/images/ana.JPG'
    },
    pedro: {
      id: 'pedro',
      name: 'Pedro Zanin',
      role: 'Fundador & Estrategista',
      bio: 'Publicitário por amor, estrategista por vocação. Com quase 10 anos de experiência, Pedro atua na interseção entre tendências, comportamento e criatividade.',
      expertise: 'Especialista em branding, neuromarketing e consumer insights. MBA em Marketing, Branding e Gestão de Negócios. Foco especial no setor de hospitalidade.',
      image: '/images/pedro.jpeg'
    }
  };

  const mosaicConfig = {
    gridSize: {
      columns: 12,
      rows: 8,
    },
    gap: '1rem',
    items: [
      { id: 'ana-photo', type: 'photo', person: 'ana', gridArea: { row: 1, col: 1, width: 3, height: 4 }, delay: 0.1 },
      { id: 'pedro-photo', type: 'photo', person: 'pedro', gridArea: { row: 5, col: 10, width: 3, height: 4 }, delay: 0.2 },
      { id: 'ana-info', type: 'info', person: 'ana', gridArea: { row: 5, col: 1, width: 3, height: 2 }, delay: 0.3 },
      { id: 'pedro-info', type: 'info', person: 'pedro', gridArea: { row: 3, col: 10, width: 3, height: 2 }, delay: 0.4 },
      { id: 'manifesto-title', type: 'manifesto-title', gridArea: { row: 1, col: 4, width: 6, height: 1 }, delay: 0.5 },
      { id: 'manifesto-body', type: 'manifesto-body', gridArea: { row: 2, col: 4, width: 3, height: 3 }, delay: 0.6 },
      { id: 'expertise-1', type: 'expertise', gridArea: { row: 2, col: 7, width: 3, height: 3 }, delay: 0.7 },
      { id: 'expertise-2', type: 'expertise', gridArea: { row: 5, col: 4, width: 3, height: 3 }, delay: 0.8 },
      { id: 'impacto-stat-1', type: 'stat', content: '+100 Marcas', gridArea: { row: 5, col: 7, width: 3, height: 1 }, delay: 0.9 },
      { id: 'impacto-stat-2', type: 'stat', content: '10 Anos Exp.', gridArea: { row: 6, col: 7, width: 3, height: 1 }, delay: 1.0 },
      { id: 'aesthetic-pattern', type: 'aesthetic', theme: 'pattern', gridArea: { row: 7, col: 7, width: 6, height: 2 }, delay: 1.1 },
      { id: 'aesthetic-raiz', type: 'aesthetic', theme: 'raiz', gridArea: { row: 7, col: 1, width: 6, height: 2 }, delay: 1.2 },
    ]
  };

  // Nota: Parallax via useScroll/useTransform removidos por não utilizados (pode-se reintroduzir conforme necessidade visual)

  return (
    <section className="about-mosaic" ref={sectionRef}>
      <div className="about-mosaic__container">
        {/* Header elegante */}
        <motion.div
          className="about-mosaic__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="about-mosaic__title">
            <span className="about-mosaic__title-prefix">Sobre:</span>
            <span className="about-mosaic__title-main">Nosso Ethos</span>
          </h2>
        </motion.div>

        {/* Mathematical Grid System - Puzzle Layout */}
        <motion.div
          className="about-mosaic__grid"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${mosaicConfig.gridSize.columns}, 1fr)`,
            gridTemplateRows: `repeat(${mosaicConfig.gridSize.rows}, auto)`,
            gap: mosaicConfig.gap,
          }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {mosaicConfig.items.map((card) => (
            <motion.div
              key={card.id}
              className={`about-mosaic__card about-mosaic__card--${card.type}`}
              style={{
                gridArea: `${card.gridArea.row} / ${card.gridArea.col} / span ${card.gridArea.height} / span ${card.gridArea.width}`,
              }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: card.delay }}
            >
              {card.type === 'photo' && (() => {
                const pk = (card as { person: 'ana' | 'pedro' }).person;
                return (
                  <div className="about-mosaic__image-wrapper">
                    <Image
                      src={founders[pk].image}
                      alt={founders[pk].name}
                      fill
                      className={`about-mosaic__image object-cover ${pk === 'pedro' ? 'about-mosaic__image--pedro' : ''}`}
                    />
                    <div className="about-mosaic__photo-overlay"></div>
                  </div>
                );
              })()}
              
              {card.type === 'info' && (() => {
                const pk = (card as { person: 'ana' | 'pedro' }).person;
                return (
                  <div className="about-mosaic__info-content">
                    <h3 className="about-mosaic__info-name">{founders[pk].name}</h3>
                    <p className="about-mosaic__info-role">{founders[pk].role}</p>
                    <div className="about-mosaic__info-accent"></div>
                  </div>
                );
              })()}
              
              {card.type === 'manifesto-title' && (
                <div className="about-mosaic__manifesto-title-content">
                  <h3 className="about-mosaic__manifesto-title">Marcas Sensoriais, Autorais e Humanas</h3>
                </div>
              )}

              {card.type === 'manifesto-body' && (
                <div className="about-mosaic__manifesto-body-content">
                  <p className="about-mosaic__manifesto-text">Acreditamos que o futuro do branding está na criação de experiências que tocam todos os sentidos.</p>
                </div>
              )}

              {card.type === 'expertise' && (
                <div className="about-mosaic__expertise-content">
                  <ul className="about-mosaic__expertise-list">
                    <li>Branding Sensorial</li>
                    <li>Design Estratégico</li>
                    <li>Neuromarketing</li>
                  </ul>
                </div>
              )}

              {card.type === 'stat' && (
                <div className="about-mosaic__stat-content">
                  <span className="about-mosaic__stat-text">{card.content}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
