'use client';

import { useState, useEffect } from 'react';

export default function FloralElements() {
  const [scrollY, setScrollY] = useState(0);
  const [colorPhase, setColorPhase] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Sistema de cores baseado em seções específicas
      const servicos = document.getElementById('servicos');
      const portfolio = document.getElementById('portfolio'); 
      const about = document.getElementById('about');
      const manifesto = document.getElementById('manifesto');
      const contact = document.getElementById('contact');
      
      // Calcula qual seção está mais visível
      let phase = 0; // Padrão warm para hero
      
      if (servicos && isElementInView(servicos)) {
        phase = 1; // warm para serviços
      } else if (portfolio && isElementInView(portfolio)) {
        phase = 4; // sage para portfolio
      } else if (about && isElementInView(about)) {
        phase = 7; // gold para about
      } else if (manifesto && isElementInView(manifesto)) {
        phase = 2; // warm para manifesto
      } else if (contact && isElementInView(contact)) {
        phase = 5; // sage para contato
      }
      
      setColorPhase(phase);
    };

    const isElementInView = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      return elementCenter >= 0 && elementCenter <= windowHeight;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Execução inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getColorClass = (phase: number) => {
    switch (phase) {
      case 0:
      case 1:
      case 2:
        return 'glass-warm floral-warm';
      case 3:
        return 'glass-warm floral-warm-sage'; // Transição warm->sage
      case 4:
      case 5:
        return 'glass-sage floral-sage';
      case 6:
        return 'glass-sage floral-sage-gold'; // Transição sage->gold
      case 7:
      case 8:
        return 'glass-gold floral-gold';
      default:
        return 'glass-warm floral-warm';
    }
  };

  const getFloralShape = (index: number) => {
    const shapes = [
      'floral-petal', 'floral-leaf', 'floral-bloom', 'floral-stem', 
      'floral-organic', 'floral-exotic', 'floral-complex', 
      'floral-wave', 'floral-spiral', 'floral-drop'
    ];
    return shapes[index % shapes.length];
  };

  const getAnimation = (index: number) => {
    const animations = [
      'animate-floral-float', 'animate-floral-bloom', 'animate-floral-drift',
      'animate-organic-breathe', 'animate-organic-morph', 'animate-organic-shimmer'
    ];
    return animations[index % animations.length];
  };

  return (
    <>
      {/* Florais Laterais Esquerdos */}
      <div className="floral-sidebar floral-left hidden lg:block">
        <div className="space-y-16">
          {[...Array(6)].map((_, index) => (
            <div
              key={`left-${index}`}
              className={`
                w-12 h-16 
                ${getFloralShape(index)} 
                ${getColorClass(colorPhase)} 
                ${getAnimation(index)}
                animate-glassmorphism-glow
                animate-glassmorphism-pulse
              `}
              style={{
                transform: `translateY(${scrollY * (0.1 + index * 0.05)}px) rotate(${index * 15}deg)`,
                animationDelay: `${index * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Florais Laterais Direitos */}
      <div className="floral-sidebar floral-right hidden lg:block">
        <div className="space-y-20">
          {[...Array(5)].map((_, index) => (
            <div
              key={`right-${index}`}
              className={`
                w-10 h-14 
                ${getFloralShape(index + 3)} 
                ${getColorClass(colorPhase)} 
                ${getAnimation(index + 1)}
                animate-glassmorphism-glow
                animate-organic-breathe
              `}
              style={{
                transform: `translateY(${scrollY * (0.08 + index * 0.04)}px) rotate(${-index * 20}deg)`,
                animationDelay: `${index * 0.7}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Elementos Florais Flutuantes - Hero Section */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Lado Esquerdo Superior */}
        <div
          className={`
            absolute top-32 left-8 w-20 h-24
            floral-bloom ${getColorClass(colorPhase)}
            animate-floral-float
          `}
          style={{
            transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />

        {/* Lado Direito Meio */}
        <div
          className={`
            absolute top-1/2 right-12 w-16 h-20
            floral-leaf ${getColorClass(colorPhase)}
            animate-floral-bloom
          `}
          style={{
            transform: `translateY(${scrollY * -0.12}px) rotate(${-scrollY * 0.08}deg)`,
          }}
        />

        {/* Lado Esquerdo Inferior */}
        <div
          className={`
            absolute bottom-40 left-16 w-14 h-18
            floral-petal ${getColorClass(colorPhase)}
            animate-floral-drift
          `}
          style={{
            transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.05}deg)`,
          }}
        />

        {/* Elemento Central Sutil */}
        <div
          className={`
            absolute top-1/4 left-1/2 w-8 h-12
            floral-stem ${getColorClass(colorPhase)}
            animate-floral-float opacity-50
          `}
          style={{
            transform: `translateX(-50%) translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.15}deg)`,
          }}
        />

        {/* Elementos Sofisticados Adicionais */}
        <div
          className={`
            absolute top-3/4 right-1/4 w-24 h-32
            floral-exotic ${getColorClass(colorPhase)}
            animate-organic-morph opacity-40
          `}
          style={{
            transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * 0.08}deg)`,
          }}
        />

        <div
          className={`
            absolute top-1/3 left-1/4 w-18 h-24
            floral-complex ${getColorClass(colorPhase)}
            animate-organic-shimmer opacity-30
          `}
          style={{
            transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * -0.06}deg)`,
          }}
        />

        {/* Elementos Pequenos Dispersos */}
        {[...Array(8)].map((_, index) => (
          <div
            key={`floating-${index}`}
            className={`
              absolute w-4 h-6
              ${getFloralShape(index)}
              ${getColorClass(colorPhase)}
              ${getAnimation(index)}
              opacity-30
            `}
            style={{
              top: `${20 + index * 10}%`,
              left: `${10 + (index % 2) * 80}%`,
              transform: `translateY(${scrollY * (0.05 + index * 0.02)}px) rotate(${index * 45}deg)`,
              animationDelay: `${index * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Elementos de Transição entre Seções */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Transição superior */}
        <div
          className={`
            absolute top-0 left-1/4 w-32 h-40
            floral-organic ${getColorClass(colorPhase)}
            animate-floral-bloom opacity-20
          `}
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />

        {/* Transição inferior */}
        <div
          className={`
            absolute bottom-0 right-1/4 w-28 h-36
            floral-bloom ${getColorClass(colorPhase)}
            animate-floral-drift opacity-25
          `}
          style={{
            transform: `translateY(${-scrollY * 0.2}px) rotate(${-scrollY * 0.12}deg)`,
          }}
        />
      </div>
    </>
  );
}