'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24" role="banner" aria-label="Hero Section">
      
      {/* Elementos Conceituais Ultra Sutis */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/3 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-charcoal/5 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"
          style={{ transform: `translateX(${scrollY * -0.05}px)` }}
        />
      </div>

      {/* Container Principal - Foco Total no Texto */}
      <div className="relative z-10 w-full">
        <div className="container-editorial">
          <div className="text-center max-w-7xl mx-auto">
            
            
            {/* Typography Épica - Hierarquia Perfeita */}
            <div className="space-y-8 mb-24">
              {/* Typography Conceitual Elegante */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal leading-tight tracking-wide">
                  Quebramos
                  <span className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-charcoal/60 ml-3">
                    o óbvio
                  </span>
                </h1>
              </div>

              {/* Segunda linha - Sutil e Elegante */}
              <div className="mt-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-charcoal/70 leading-relaxed tracking-normal">
                  criando marcas 
                  <span className="font-serif italic text-warm-brown">
                    memoráveis
                  </span>
                </h2>
              </div>
            </div>

            {/* Manifesto Editorial */}
            <div className="max-w-3xl mx-auto mb-20">
              <p className="text-base md:text-lg lg:text-xl text-charcoal/60 leading-loose font-sans font-light px-12 text-center">
                Desenvolvemos identidades sensoriais, autorais e 
                profundamente humanas que conectam negócios 
                e pessoas com autenticidade.
              </p>
            </div>

            {/* CTAs Minimalistas */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24">
              <Link 
                href="/contato" 
                className="text-sm font-medium text-charcoal border-b-2 border-charcoal pb-2 hover:border-warm-brown hover:text-warm-brown transition-all duration-500 tracking-wider uppercase"
                aria-label="Iniciar processo de transformação da marca"
              >
                Começar projeto
              </Link>
              
              <Link 
                href="/cases" 
                className="text-sm font-light text-charcoal/50 hover:text-charcoal transition-all duration-500 tracking-wider"
                aria-label="Ver portfólio de transformações"
              >
                Ver trabalhos
              </Link>
            </div>

            {/* Info Discreta */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center mb-20">
              <div>
                <div className="text-lg font-sans font-light text-charcoal/70 mb-1">Desde 2019</div>
                <div className="text-xs font-sans text-charcoal/40 tracking-widest uppercase">Fundação</div>
              </div>
              
              <div className="w-px h-12 bg-charcoal/10 hidden md:block" />
              
              <div>
                <div className="text-lg font-sans font-light text-charcoal/70 mb-1">50+ projetos</div>
                <div className="text-xs font-sans text-charcoal/40 tracking-widest uppercase">Realizados</div>
              </div>
              
              <div className="w-px h-12 bg-charcoal/10 hidden md:block" />
              
              <div>
                <div className="text-lg font-sans font-light text-charcoal/70 mb-1">São Paulo</div>
                <div className="text-xs font-sans text-charcoal/40 tracking-widest uppercase">Base</div>
              </div>
            </div>

            {/* Assinatura Minimalista */}
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-xs font-sans text-charcoal/30 tracking-[0.3em] uppercase mb-3">Por</div>
                <div className="space-y-1">
                  <div className="text-base font-serif font-light text-charcoal/60">Ana Bossardi</div>
                  <div className="text-xs font-sans text-charcoal/30">&</div>
                  <div className="text-base font-serif font-light text-charcoal/60">Pedro Zanin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Sutil */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-charcoal/20 to-transparent" />
      </div>
    </section>
  );
}