'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CasesShowcase() {
  const [activeCase, setActiveCase] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{ down: boolean; startX: number; startScroll: number }>({ down: false, startX: 0, startScroll: 0 });

  const cases = [
    {
      id: 'buzios-mar',
      title: 'Búzios Mar',
      location: 'BÚZIOS',
      service: 'Raiz',
      category: 'Hospitalidade',
      year: '2024',
      image: '/images/BUZIOS MAR CAPA.png',
      description: 'Identidade e presença alinhadas ao espírito praiano e sofisticado de Búzios.'
    },
    {
      id: 'greco-hotel',
      title: 'Greco Hotel',
      location: 'ILHABELA',
      service: 'Raiz',
      category: 'Hotel Boutique',
      year: '2024',
      image: '/images/GRECO CAPA.jpg',
      description: 'Marca com autenticidade mediterrânea e brasilidade na experiência.'
    },
    {
      id: 'insolito',
      title: 'Insólito',
      location: 'BÚZIOS',
      service: 'Garden',
      category: 'Hotel & Spa',
      year: '2024',
      image: '/images/INSOLITO CAPA.jpg',
      description: 'Rebranding sensorial para um ícone boutique à beira-mar.'
    },
    {
      id: 'le-village',
      title: 'Le Village',
      location: 'PARATY',
      service: 'Raiz',
      category: 'Pousada',
      year: '2023',
      image: '/images/LE VILLAGE CAPA.jpg',
      description: 'Charme histórico traduzido em identidade e jornada de encantamento.'
    },
    {
      id: 'parador-lumiar',
      title: 'Parador Lumiar',
      location: 'LUMIAR',
      service: 'Raiz',
      category: 'Hospedagem',
      year: '2024',
      image: '/images/PARADOR LUMIAR CAPA.webp',
      description: 'Posicionamento estratégico e visual com natureza como protagonista.'
    },
    {
      id: 'zendaya',
      title: 'Zendaya',
      location: 'COSTA DO SOL',
      service: 'Garden',
      category: 'Resort',
      year: '2023',
      image: '/images/ZENDAYA CAPA.png',
      description: 'Elegância contemporânea para um resort de destino.'
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
    <section className="cases-showcase" id="cases" ref={sectionRef}>
      {/* Background Elements */}
      <div className="cases-showcase__background">
        <div className="cases-showcase__gradient-orb cases-showcase__gradient-orb--1"></div>
        <div className="cases-showcase__gradient-orb cases-showcase__gradient-orb--2"></div>
        <div className="cases-showcase__gradient-orb cases-showcase__gradient-orb--3"></div>
      </div>

      <div className="cases-showcase__container">
        {/* Header no topo */}
        <motion.div
          className="cases-showcase__header cases-showcase__header--top"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="cases-showcase__title">Cases</h2>
          <p className="cases-showcase__subtitle">Portfólio vivo de marcas que encantam lugares e pessoas.</p>
        </motion.div>

        {/* Carousel de cards */}
        <div className="cases-showcase__carousel-wrap">
          <div
            className="cases-showcase__carousel"
            ref={carouselRef}
            onPointerDown={(e) => {
              const el = carouselRef.current; if (!el) return;
              (e.target as Element).setPointerCapture?.(e.pointerId);
              dragRef.current.down = true;
              dragRef.current.startX = e.clientX;
              dragRef.current.startScroll = el.scrollLeft;
            }}
            onPointerMove={(e) => {
              const el = carouselRef.current; if (!el || !dragRef.current.down) return;
              const dx = e.clientX - dragRef.current.startX;
              el.scrollLeft = dragRef.current.startScroll - dx;
            }}
            onPointerUp={() => { dragRef.current.down = false; }}
            onPointerCancel={() => { dragRef.current.down = false; }}
          >
          {cases.map((caseItem, index) => {
            const href =
              caseItem.id === 'zendaya' ? '/cases/zendaya-resort' :
              `/cases/${caseItem.id}`;
            return (
            <motion.div
              key={caseItem.id}
              className={`cases-showcase__card cases-showcase__card--${caseItem.service.toLowerCase()}`}
              variants={cardVariants}
              onHoverStart={() => setActiveCase(index)}
            >
              {href && (
                <Link href={href} className="cases-showcase__card-overlay" aria-label={`Abrir case ${caseItem.title}`}></Link>
              )}
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
                  {/* Thumb */}
                  <div className="cases-showcase__thumb">
                    <Image src={caseItem.image} alt={caseItem.title} fill className="cases-showcase__img" sizes="(min-width: 1024px) 540px, 92vw" />
                  </div>
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
                  {href ? (
                    <Link href={href} className="cases-showcase__card-cta">
                      <span>Ver projeto</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  ) : (
                    <button className="cases-showcase__card-cta" disabled>
                      <span>Em breve</span>
                    </button>
                  )}
                  
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
            );
          })}
          </div>
          <div className="cases-showcase__nav">
            <button
              className="cases-showcase__nav-btn cases-showcase__nav-btn--prev"
              onClick={() => {
                const el = carouselRef.current; if (el) el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
              }}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              className="cases-showcase__nav-btn cases-showcase__nav-btn--next"
              onClick={() => {
                const el = carouselRef.current; if (el) el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
              }}
              aria-label="Próximo"
            >
              ›
            </button>
          </div>
        </div>

        {/* Sessão Sobre (refeita do zero) */}
        <section className="about-clean" id="sobre">
          <div className="about-clean__container">
            <motion.header
              className="about-clean__header"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h3 className="about-clean__title">Sobre a Casa Flora</h3>
              <p className="about-clean__lead">
                A Casa Flora nasce do encontro entre criação e estratégia — de Ana Bossardi e Pedro Zanin — para cultivar marcas com alma, verdade e propósito.
              </p>
            </motion.header>

            {/* Ana e Pedro lado a lado */}
            <div className="about-clean__grid">
              <motion.div
                className="about-clean__card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <figure className="about-clean__media">
                  <Image src="/images/anabossardi.jpeg" alt="Ana Bossardi" fill className="about-clean__img" sizes="(min-width: 1024px) 28vw, 92vw" />
                </figure>
                <div className="about-clean__copy">
                  <div className="about-clean__head">
                    <h4 className="about-clean__name">Ana Bossardi</h4>
                    <p className="about-clean__role">Sócia Fundadora e Diretora Criativa</p>
                  </div>
                  <p className="about-clean__text">
                    Designer de formação e empreendedora desde 2017, Ana sempre teve um olhar sensível para estética e narrativa. Com seu primeiro projeto autoral, o Bossarts Design, transformou intuição em identidade, dando vida a histórias por meio da imagem. Desde então, dedica-se a criar marcas que respiram autenticidade e emoção.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="about-clean__card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                <figure className="about-clean__media">
                  <Image src="/images/pedrozanin.jpeg" alt="Pedro Zanin" fill className="about-clean__img" sizes="(min-width: 1024px) 28vw, 92vw" />
                </figure>
                <div className="about-clean__copy">
                  <div className="about-clean__head">
                    <h4 className="about-clean__name">Pedro Zanin</h4>
                    <p className="about-clean__role">Sócio e Diretor Estratégico</p>
                  </div>
                  <p className="about-clean__text">
                    Publicitário de formação, Pedro atua há mais de oito anos em comunicação e marketing. Especializado em branding, negócios e neuromarketing, constrói estratégias que unem visão de mercado e resultados sustentáveis. Para ele, uma marca só ganha força quando conecta propósito e impacto real.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Juntos abaixo com design específico */}
            <motion.div
              className="about-clean__juntos"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <figure className="about-clean__juntos-media">
                <Image src="/images/juntos.jpeg" alt="Juntos" fill className="about-clean__img" sizes="(min-width: 1024px) 36vw, 92vw" />
              </figure>
              <div className="about-clean__juntos-copy">
                <h4 className="about-clean__name">Juntos</h4>
                <p className="about-clean__text">
                  Foi dessa soma de olhares — o criativo e o estratégico — que nasceu a Casa Flora. Há mais de cinco anos, Ana e Pedro caminham lado a lado, desenvolvendo marcas de experiência e hospitalidade, com mais de 20 projetos já assinados.
                </p>
                <p className="about-clean__text">
                  A Casa Flora é a expressão dessa parceria: um espaço onde estratégia, branding e design se encontram para cultivar marcas com alma, verdade e propósito.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}
