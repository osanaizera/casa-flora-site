'use client';

import { useState, useEffect } from 'react';

interface SectionFloralAccentsProps {
  sectionId: string;
  accentColor: 'warm' | 'sage' | 'gold';
  side: 'left' | 'right';
  intensity?: 'subtle' | 'medium' | 'strong';
}

export default function SectionFloralAccents({ 
  sectionId, 
  accentColor, 
  side,
  intensity = 'medium' 
}: SectionFloralAccentsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Verifica se a seção está visível
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificação inicial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId]);

  const getIntensityClass = () => {
    switch (intensity) {
      case 'subtle': return 'opacity-20';
      case 'medium': return 'opacity-40';
      case 'strong': return 'opacity-60';
      default: return 'opacity-40';
    }
  };

  const getColorClasses = () => {
    switch (accentColor) {
      case 'warm': return 'glass-warm floral-warm';
      case 'sage': return 'glass-sage floral-sage';
      case 'gold': return 'glass-gold floral-gold';
      default: return 'glass-warm floral-warm';
    }
  };

  const getSideClasses = () => {
    return side === 'left' ? 'left-4' : 'right-4';
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed ${getSideClasses()} top-1/2 transform -translate-y-1/2 z-5 pointer-events-none ${getIntensityClass()}`}>
      <div className="space-y-8">
        {/* Elemento Principal */}
        <div
          className={`
            w-16 h-20
            floral-bloom
            ${getColorClasses()}
            animate-floral-float
            animate-glassmorphism-glow
            animate-glassmorphism-pulse
            transition-all duration-1000
          `}
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${side === 'left' ? 15 : -15}deg)`,
          }}
        />

        {/* Elemento Secundário */}
        <div
          className={`
            w-12 h-16
            floral-leaf
            ${getColorClasses()}
            animate-floral-bloom
            animate-organic-breathe
            transition-all duration-1000
          `}
          style={{
            transform: `translateY(${scrollY * -0.08}px) rotate(${side === 'left' ? -10 : 10}deg)`,
            animationDelay: '0.5s'
          }}
        />

        {/* Elemento Terciário */}
        <div
          className={`
            w-8 h-12
            floral-exotic
            ${getColorClasses()}
            animate-organic-morph
            transition-all duration-1000
          `}
          style={{
            transform: `translateY(${scrollY * 0.12}px) rotate(${side === 'left' ? 25 : -25}deg)`,
            animationDelay: '1s'
          }}
        />

        {/* Elementos Pequenos */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`
              w-4 h-6
              ${index % 2 === 0 ? 'floral-wave' : 'floral-spiral'}
              ${getColorClasses()}
              ${index % 2 === 0 ? 'animate-organic-shimmer' : 'animate-floral-float'}
              transition-all duration-1000
            `}
            style={{
              transform: `translateY(${scrollY * (0.05 + index * 0.02)}px) rotate(${(side === 'left' ? 1 : -1) * index * 30}deg)`,
              animationDelay: `${1.5 + index * 0.3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}