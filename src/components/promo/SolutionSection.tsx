import React from 'react';

export default function SolutionSection() {
    const steps = [
        {
            id: "01",
            phase: "Estratégia",
            title: "DNA & Posicionamento",
            desc: "Paramos de olhar para o concorrente. Definimos o que te torna único, sua promessa de valor e quem é seu cliente ideal (e quem não é)."
        },
        {
            id: "02",
            phase: "Personalidade",
            title: "Arquétipos & Narrativa",
            desc: "Sua marca ganha voz. Definimos como ela fala, se comporta e se conecta emocionalmente para vender sem parecer vendedora."
        },
        {
            id: "03",
            phase: "Visual",
            title: "Identidade Visual High-End",
            desc: "Logo, tipografia, paleta de cores e elementos gráficos. Tudo desenhado para transmitir autoridade instantânea e sofisticação."
        },
        {
            id: "04",
            phase: "Aplicação",
            title: "Enxoval de Marca",
            desc: "O design aplicado na vida real: Cartão, Papelaria, Assinatura de E-mail e direcionamento para ambientes físicos e digitais."
        },
        {
            id: "05",
            phase: "Social",
            title: "Direção de Arte Digital",
            desc: "Modelos de posts e stories editáveis para que seu Instagram nunca mais pareça amador ou desconectado da marca."
        },
        {
            id: "06",
            phase: "Legado",
            title: "Brandbook (Guia de Marca)",
            desc: "O manual completo de regras da sua marca. Para garantir que ela se mantenha consistente, não importa quem esteja criando."
        }
    ];

    return (
        <section id="solution-section" className="py-24 bg-[var(--color-paper)] border-t border-[var(--neutral-200)]">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[var(--earth-600)] uppercase tracking-widest text-xs font-semibold mb-2 block">A Solução</span>
                        <h2 className="font-display text-4xl md:text-5xl text-[var(--neutral-900)] leading-tight">
                            Projeto Raiz: <br/>
                            <span className="font-serif italic text-[var(--neutral-600)]">Engenharia de Percepção.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-[var(--neutral-600)] leading-relaxed text-sm md:text-base">
                        O Projeto Raiz é a sustentação que sua marca precisa para crescer. Uma base firme e saudável que traz clareza visual e de mensagem, funcionando como um pacote completo para profissionalizar seu negócio.
                    </p>
                </div>

                {/* Grid Editorial */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {steps.map((step) => (
                        <div key={step.id} className="group flex flex-col items-start">
                            <span className="font-display text-6xl text-[var(--neutral-200)] group-hover:text-[var(--earth-600)] transition-colors duration-500 mb-4 block">
                                {step.id}
                            </span>
                            <div className="w-full h-px bg-[var(--neutral-200)] group-hover:bg-[var(--earth-600)] transition-colors duration-500 mb-6 origin-left"></div>
                            
                            <span className="text-xs font-bold uppercase tracking-widest text-[var(--neutral-400)] mb-2">
                                {step.phase}
                            </span>
                            <h3 className="font-display text-2xl text-[var(--neutral-900)] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                {step.title}
                            </h3>
                            <p className="text-[var(--neutral-600)] leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Visual Summary / Interruption */}
                <div className="mt-24 p-8 md:p-12 bg-[var(--neutral-100)] rounded-2xl border border-[var(--neutral-200)] flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h4 className="font-display text-2xl text-[var(--neutral-900)] mb-2">
                            O resultado?
                        </h4>
                        <p className="text-[var(--neutral-600)] max-w-lg">
                            Sua marca deixa de pedir licença para entrar no mercado e passa a ser a referência que os outros copiam.
                        </p>
                    </div>
                    <a href="#contato-hero" className="btn-primary whitespace-nowrap">
                        VERIFICAR DISPONIBILIDADE
                    </a>
                </div>

            </div>
        </section>
    );
}
