 'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-paper)] pt-20 pb-16 md:pt-0 md:pb-0">
      {/* Background Texture - Subtle Grain & Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-paper)] to-[var(--color-paper)]"></div>
      </div>

      {/* Ambient Glow - Organic Feel */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-[var(--earth-200)] opacity-30 blur-[100px] rounded-full pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[var(--sage-200)] opacity-30 blur-[80px] rounded-full pointer-events-none mix-blend-multiply" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">

          {/* Authority Trigger / Scarcity */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-[var(--neutral-200)] backdrop-blur-sm mb-8 shadow-sm animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--earth-600)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--earth-600)]"></span>
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--neutral-600)] font-sans">
              Agenda Janeiro/26: <span className="text-[var(--neutral-900)] font-bold">Últimas Vagas</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="flex flex-col items-center font-display text-[var(--neutral-900)] leading-[0.95] tracking-tight mb-8">
            <span className="text-5xl md:text-8xl font-light block mb-2">Sua empresa cresceu.</span>
            <span className="text-5xl md:text-8xl font-medium italic font-serif text-[var(--earth-600)] block relative">
              Sua marca travou?
              {/* Decorative line */}
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-6 text-[var(--sage-600)] opacity-40" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 6.99997C25.7538 3.52554 84.609 7.42598 127.34 2.89433C158.42 0.638456 182.25 2.5 198 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-lg md:text-xl text-[var(--neutral-600)] max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12">
            Você tem qualidade, entrega e história. Mas o visual da sua marca ainda passa a imagem de <span className="bg-[var(--neutral-200)] px-1">quem está começando</span>. 
            O <strong>Projeto Raiz</strong> é a intervenção estratégica para alinhar sua percepção ao seu faturamento.
          </p>

          {/* CTA & Trust */}
          <div className="flex flex-col items-center gap-6 w-full md:w-auto">
            <a href="#contato-hero"
              className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 md:px-12 py-5 bg-[var(--neutral-900)] text-[var(--color-paper)] rounded-sm text-lg font-medium tracking-wide transition-all duration-300 hover:bg-[var(--earth-600)] hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(139,115,85,0.3)] overflow-hidden">
              <span className="relative z-10">SOLICITAR PROPOSTA VIP</span>
              <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
            </a>
            
            <p className="text-xs md:text-sm text-[var(--neutral-500)] flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--sage-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Condição especial de pré-venda válida até preenchimento das vagas.
            </p>
          </div>

        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce cursor-pointer"
           onClick={() => document.getElementById('pain-section')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--neutral-900)]">Descubra</span>
        <svg className="w-5 h-5 text-[var(--neutral-900)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
