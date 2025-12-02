import React from 'react';

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Depois do Projeto Raiz, parei de atrair clientes que pediam desconto. Hoje meu orçamento é aprovado com facilidade porque a marca transmite a autoridade que eu tenho.",
            author: "Dra. Juliana M.",
            role: "Clínica de Estética Avançada"
        },
        {
            quote: "Eu tinha vergonha de mandar meu cartão de visitas ou meu Instagram. Agora, tenho orgulho de apresentar minha empresa. O processo me deu a clareza que faltava.",
            author: "Ricardo S.",
            role: "Escritório de Arquitetura"
        },
        {
            quote: "O manual de encantamento mudou meu atendimento. Os clientes notam os detalhes, elogiam o cheiro, a música... virou uma experiência de verdade.",
            author: "Mariana L.",
            role: "Bistrô & Café"
        }
    ];

    return (
        <section className="py-24 bg-[var(--color-paper)] border-t border-[var(--neutral-200)]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[var(--earth-600)] uppercase tracking-widest text-xs font-semibold mb-4 block">Resultados Reais</span>
                    <h2 className="font-display text-3xl md:text-4xl text-[var(--neutral-900)] leading-tight">
                        Design que se paga: <br/>
                        <span className="font-serif italic text-[var(--neutral-600)]">O impacto de uma marca forte.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[var(--neutral-200)] relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-[var(--earth-200)] font-serif text-8xl absolute -top-4 left-6 opacity-50">“</div>
                            
                            <p className="text-[var(--neutral-700)] text-lg leading-relaxed relative z-10 pt-8 mb-8 flex-grow font-light">
                                {t.quote}
                            </p>
                            
                            <div className="border-t border-[var(--neutral-100)] pt-6 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--neutral-200)] flex items-center justify-center text-[var(--neutral-500)] font-display font-bold">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <strong className="block text-[var(--neutral-900)] font-medium text-sm">{t.author}</strong>
                                    <span className="text-xs text-[var(--neutral-500)] uppercase tracking-wide">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 flex justify-center">
                    <div className="inline-flex items-center gap-2 bg-[var(--neutral-100)] px-4 py-2 rounded-full border border-[var(--neutral-200)]">
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-[var(--earth-600)] border-2 border-white"></div>
                            <div className="w-6 h-6 rounded-full bg-[var(--sage-600)] border-2 border-white"></div>
                            <div className="w-6 h-6 rounded-full bg-[var(--neutral-900)] border-2 border-white"></div>
                        </div>
                        <span className="text-xs font-medium text-[var(--neutral-600)] pl-2">Junte-se a +40 marcas transformadas.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
