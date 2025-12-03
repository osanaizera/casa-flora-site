import React from 'react';

export default function PainSection() {
    return (
        <section id="pain-section" className="py-24 bg-[var(--neutral-900)] text-[var(--color-paper)] relative overflow-hidden">
             {/* Background Element */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--earth-600)] opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <span className="text-[var(--earth-600)] uppercase tracking-widest text-sm font-semibold mb-4 block">Diagnóstico</span>
                    <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
                        O sintoma silencioso que está <br/>
                        <span className="text-white font-medium">limitando o valor do seu contrato.</span>
                    </h2>
                    <p className="text-[var(--neutral-400)] text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Seu produto é &quot;Premium&quot;, mas sua apresentação é &quot;Básica&quot;. Esse gap cria uma dissonância cognitiva no seu cliente, gerando objeções como:
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {/* Card 1 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors duration-300">
                        <div className="w-12 h-12 bg-[var(--neutral-800)] flex items-center justify-center rounded-full mb-6 text-[var(--earth-600)]">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-xl mb-3 text-white">Guerra de Preço</h3>
                        <p className="text-[var(--neutral-400)] text-sm leading-relaxed">
                            O cliente não vê diferença entre você e o concorrente mais barato. Você se vê forçado a dar descontos para fechar.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors duration-300">
                        <div className="w-12 h-12 bg-[var(--neutral-800)] flex items-center justify-center rounded-full mb-6 text-[var(--earth-600)]">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-xl mb-3 text-white">Desconfiança Inicial</h3>
                        <p className="text-[var(--neutral-400)] text-sm leading-relaxed">
                            O lead frio entra no seu Instagram e sai em 3 segundos. Ele não sente segurança de que você é uma empresa sólida.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors duration-300">
                        <div className="w-12 h-12 bg-[var(--neutral-800)] flex items-center justify-center rounded-full mb-6 text-[var(--earth-600)]">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-xl mb-3 text-white">Estagnação</h3>
                        <p className="text-[var(--neutral-400)] text-sm leading-relaxed">
                            Você quer cobrar mais caro, atrair clientes melhores, mas sua embalagem visual atrai o mesmo perfil de sempre.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <p className="font-serif italic text-2xl md:text-3xl text-white opacity-80 max-w-3xl mx-auto leading-relaxed">
                        &quot;O mercado não compra o que você é. <br/>
                        O mercado compra <span className="text-[var(--earth-600)] border-b border-[var(--earth-600)]">o que você parece ser</span>.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
