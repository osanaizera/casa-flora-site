import React from 'react';

export default function OfferSection() {
    return (
        <section className="py-24 bg-[var(--color-paper)] relative">
            <div className="container mx-auto px-6">
                
                {/* The "Invitation" Card */}
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-[var(--neutral-200)] overflow-hidden relative">
                    
                    {/* Top Accent */}
                    <div className="h-2 w-full bg-[var(--earth-600)]"></div>
                    
                    <div className="p-8 md:p-16 text-center">
                        <span className="text-[var(--neutral-400)] uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
                            Apenas 10 vagas disponíveis
                        </span>
                        
                        <h2 className="font-display text-4xl md:text-5xl text-[var(--neutral-900)] mb-6">
                            Sua marca em <br/>
                            <span className="italic font-serif text-[var(--earth-600)]">outro patamar em 2026.</span>
                        </h2>

                        <p className="text-[var(--neutral-600)] text-lg mb-12 max-w-xl mx-auto">
                            Garanta o preço de 2025 e comece o ano com tudo pronto. As vagas são limitadas até o preenchimento total do ciclo de Janeiro.
                        </p>

                        {/* Value Stack Grid */}
                        <div className="bg-[var(--neutral-50)] rounded-xl p-8 mb-10 text-left border border-[var(--neutral-200)]">
                            <p className="text-xs uppercase text-[var(--neutral-400)] font-bold tracking-widest mb-6 text-center">Escopo do Projeto</p>
                            <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[var(--earth-600)] flex items-center justify-center text-white text-xs">✓</div>
                                    <span className="text-[var(--neutral-700)] font-medium">Diagnóstico de Marca Profundo</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[var(--earth-600)] flex items-center justify-center text-white text-xs">✓</div>
                                    <span className="text-[var(--neutral-700)] font-medium">Estratégia de Posicionamento</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[var(--earth-600)] flex items-center justify-center text-white text-xs">✓</div>
                                    <span className="text-[var(--neutral-700)] font-medium">Identidade Visual Completa</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[var(--earth-600)] flex items-center justify-center text-white text-xs">✓</div>
                                    <span className="text-[var(--neutral-700)] font-medium">Enxoval de Aplicações</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[var(--earth-600)] flex items-center justify-center text-white text-xs">✓</div>
                                    <span className="text-[var(--neutral-700)] font-medium">Brandbook (Guia de Uso)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#16a34a] flex items-center justify-center text-white text-xs">★</div>
                                    <span className="text-[var(--neutral-900)] font-bold">Bônus: Manual de Encantamento</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col items-center gap-4">
                            <a href="#contato-hero" className="btn-primary w-full md:w-auto text-lg px-12 py-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                                APLICAR PARA O PROJETO
                            </a>
                            <p className="text-xs text-[var(--neutral-500)] mt-2">
                                Sem compromisso. Vamos apenas conversar sobre o seu momento.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
