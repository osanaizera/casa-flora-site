'use client';

import React from 'react';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section id="contato-hero" className="py-24 bg-[#0c0a09] text-[var(--neutral-50)] relative overflow-hidden">
      
      {/* 1. Cinematic Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Modern "Card" Wrapper */}
        <div className="max-w-6xl mx-auto bg-[#1c1917] rounded-[2rem] shadow-2xl border border-[var(--neutral-800)] overflow-hidden relative">
            
            <div className="grid lg:grid-cols-2 min-h-[600px]">
                
                {/* LEFT COLUMN: Visual & Impact (The "Same Photo" as Main Site) */}
                <div className="relative h-[400px] lg:h-auto w-full overflow-hidden group">
                    <Image
                        src="/images/form.jpeg"
                        alt="Experiência Casa Flora"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                    
                    {/* Dark Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Content Over Image */}
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10">
                        <div className="inline-flex items-center gap-2 mb-4">
                             <div className="w-2 h-2 rounded-full bg-[var(--earth-600)] animate-pulse"></div>
                             <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--earth-200)]">Últimas Vagas</span>
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl text-white leading-[1.1] mb-4 drop-shadow-lg">
                            Parabéns por dar <br/> esse passo.
                        </h2>
                        <p className="text-[var(--neutral-200)] text-lg leading-relaxed max-w-md font-light drop-shadow-md">
                             Em 2026 sua marca estará à frente de quem ainda não escolheu se posicionar.
                        </p>
                    </div>
                </div>
                
                {/* RIGHT COLUMN: The Form */}
                <div className="bg-[#1c1917] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                    
                     {/* Subtle Glow inside Form Area */}
                     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--earth-600)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

                    <h3 className="font-display text-3xl text-white mb-2 relative z-10">Aplicação Rápida</h3>
                    <p className="text-[var(--neutral-400)] text-sm mb-8 relative z-10">
                        Preencha seus dados para receber o contato do nosso time.
                    </p>

                    <form className="space-y-5 relative z-10">
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-xs uppercase tracking-widest text-[var(--neutral-500)] font-bold ml-1">Nome Completo</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full px-5 py-4 bg-[#292524] border border-[#44403c] rounded-xl focus:ring-1 focus:ring-[var(--earth-600)] focus:border-[var(--earth-600)] outline-none transition-all text-[var(--neutral-100)] placeholder-[var(--neutral-600)]"
                                placeholder="Como podemos te chamar?"
                            />
                        </div>
                        
                        <div className="space-y-1">
                            <label htmlFor="company" className="text-xs uppercase tracking-widest text-[var(--neutral-500)] font-bold ml-1">Empresa / Instagram</label>
                            <input 
                                type="text" 
                                id="company" 
                                className="w-full px-5 py-4 bg-[#292524] border border-[#44403c] rounded-xl focus:ring-1 focus:ring-[var(--earth-600)] focus:border-[var(--earth-600)] outline-none transition-all text-[var(--neutral-100)] placeholder-[var(--neutral-600)]"
                                placeholder="@suamarca"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="phone" className="text-xs uppercase tracking-widest text-[var(--neutral-500)] font-bold ml-1">WhatsApp</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                className="w-full px-5 py-4 bg-[#292524] border border-[#44403c] rounded-xl focus:ring-1 focus:ring-[var(--earth-600)] focus:border-[var(--earth-600)] outline-none transition-all text-[var(--neutral-100)] placeholder-[var(--neutral-600)]"
                                placeholder="(XX) 99999-9999"
                            />
                        </div>
                        
                        <button type="submit" className="w-full group relative overflow-hidden bg-[var(--earth-600)] text-white py-5 rounded-xl text-lg font-medium tracking-wide shadow-lg transition-all hover:bg-[var(--earth-500)] hover:shadow-[0_10px_30px_rgba(139,115,85,0.3)] hover:-translate-y-1 mt-4">
                             <span className="relative z-10 flex items-center justify-center gap-2">
                                SOLICITAR PROPOSTA
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                             </span>
                        </button>
                        
                        <div className="text-center pt-2">
                            <p className="text-xs text-[var(--neutral-600)]">
                                Seus dados estão seguros. Não enviamos spam.
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
}
