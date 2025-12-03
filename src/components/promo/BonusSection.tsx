import React from 'react';

export default function BonusSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1c1917] to-[#292524] text-[var(--neutral-50)] relative overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--earth-600)] opacity-10 blur-[100px] rounded-full pointer-events-none" />
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-[var(--earth-600)]/20 border border-[var(--earth-600)]/40 px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--earth-400)] animate-pulse"></span>
                <span className="text-[var(--earth-200)] text-xs font-bold tracking-widest uppercase">
                 Cortesia Institucional
                </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              A marca atrai. <br/>
              <span className="text-[var(--earth-400)] font-serif italic">A experiência fideliza.</span>
            </h2>

            <p className="text-[var(--neutral-300)] text-lg leading-relaxed">
              De nada adianta um logo bonito se o atendimento é frio. 
              Ao garantir sua vaga no <strong>Projeto Raiz</strong> agora, você recebe <span className="text-white font-bold">sem custo adicional</span> nosso manual interno de hospitalidade.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden">
                {/* Ribbon */}
                <div className="absolute top-0 right-0 bg-[#16a34a] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                    DE <span className="line-through opacity-70">R$ 1.500</span> POR ZERO
                </div>

                <h3 className="text-xl font-display mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎁</span>
                    <span className="text-white">Manual de Encantamento (M.E.C)</span>
                </h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-[var(--neutral-300)]">
                        <svg className="w-5 h-5 text-[var(--earth-400)] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span><strong>Rituais de Boas-vindas:</strong> O passo a passo para encantar o cliente nos primeiros 5 minutos.</span>
                    </li>
                    <li className="flex items-start gap-3 text-[var(--neutral-300)]">
                        <svg className="w-5 h-5 text-[var(--earth-400)] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span><strong>Sensorial & Ambiente:</strong> Checklists de aroma, som e luz para criar uma atmosfera de marca.</span>
                    </li>
                    <li className="flex items-start gap-3 text-[var(--neutral-300)]">
                        <svg className="w-5 h-5 text-[var(--earth-400)] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span><strong>Recuperação de Clientes:</strong> O script exato para transformar uma reclamação em um elogio público.</span>
                    </li>
                </ul>
            </div>
            
            <p className="text-xs text-[var(--neutral-400)] uppercase tracking-widest mt-4">
                * Disponível exclusivamente para clientes do ciclo atual.
            </p>
          </div>

          {/* Right: Visual (Book Mockup) */}
          <div className="order-1 lg:order-2 flex justify-center perspective-1000">
            <div className="relative group w-[300px] h-[420px] bg-[#1a1a1a] rounded-r-lg shadow-[20px_20px_60px_rgba(0,0,0,0.5)] border-l-4 border-l-[var(--neutral-600)] transform transition-transform duration-500 hover:rotate-y-[-10deg] hover:rotate-x-[5deg]">
                {/* Book Cover Design */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center border border-[var(--neutral-700)] rounded-r-lg bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]">
                    <div className="w-16 h-16 border border-[var(--earth-600)] rounded-full flex items-center justify-center mb-8">
                        <span className="text-[var(--earth-600)] font-display text-2xl">CF</span>
                    </div>
                    <h3 className="font-display text-3xl text-white tracking-widest uppercase mb-2">Manual de<br/>Encantamento</h3>
                    <p className="font-serif italic text-[var(--earth-400)]">Edição Clientes Raiz</p>
                    
                    <div className="absolute bottom-8 text-[10px] uppercase tracking-[0.3em] text-[var(--neutral-500)]">
                        Casa Flora • 2026
                    </div>
                </div>
                {/* Book Pages Effect (Side) */}
                <div className="absolute top-2 bottom-2 right-0 w-4 bg-gradient-to-l from-[#e5e5e5] to-[#d4d4d4] rounded-r-sm transform translate-x-[2px] z-[-1]"></div>
                <div className="absolute top-3 bottom-3 right-0 w-3 bg-gradient-to-l from-[#f5f5f5] to-[#e5e5e5] rounded-r-sm transform translate-x-[4px] z-[-2]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
