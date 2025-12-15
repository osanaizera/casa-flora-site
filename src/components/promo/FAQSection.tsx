'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
    const faqs = [
        {
            question: "Não tenho o briefing pronto, e agora?",
            answer: "Não se preocupe. O briefing não é sua responsabilidade, é nossa. Nossa imersão inicial serve justamente para extrair de você as informações certas. Você só precisa trazer sua visão de negócio, nós cuidamos da estrutura."
        },
        {
            question: "Quanto tempo demora o processo?",
            answer: "O ciclo completo é de aproximadamente 45 dias. Fechando agora em Dezembro, você usa o \"tempo morto\" do fim de ano para organizar a casa e já começa Janeiro com a marca nova sendo apresentada."
        },
        {
            question: "Vocês fazem só o logo?",
            answer: "Não. Um logo sozinho não sustenta um negócio. Criamos um sistema de marca completo (estratégia + visual) para que sua empresa funcione em todos os pontos de contato: do Instagram à fachada."
        },
        {
            question: "Para quem é o Projeto Raiz?",
            answer: "Para prestadores de serviço e negócios locais (clínicas, escritórios, estúdios, restaurantes, consultorias) que cansaram de parecer amadores e querem construir um legado."
        },
        {
            question: "Como funciona o pagamento?",
            answer: "Trabalhamos com uma entrada para reserva de data e o restante parcelado. A condição de tabela 2025 é exclusiva para fechamentos até o fim deste mês."
        }
    ];

    return (
        <section className="py-24 bg-[#0c0a09] relative overflow-hidden text-[var(--neutral-50)]">
             
             {/* 1. Cinematic Background Texture (Seamless flow from Bonus Section) */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}>
            </div>

            {/* 2. Ambient Lighting (Subtle Center Glow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--earth-600)] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--earth-500)]"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--neutral-400)]">
                            Tire suas dúvidas
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--earth-500)]"></span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl text-white"
                    >
                        Perguntas Frequentes
                    </motion.h2>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ faq, index }: { faq: { question: string, answer: string }, index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer
                    ${isOpen 
                        ? 'bg-[var(--neutral-800)]/40 border-[var(--earth-600)]/50 shadow-[0_0_30px_rgba(139,115,85,0.1)]' 
                        : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15]'
                    }
                `}
            >
                {/* Header */}
                <div className="p-6 md:p-8 flex items-center justify-between gap-6">
                    <h3 className={`font-display text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-[var(--earth-400)]' : 'text-white'}`}>
                        {faq.question}
                    </h3>
                    
                    {/* Icon */}
                    <div className={`
                        flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300
                        ${isOpen 
                            ? 'border-[var(--earth-600)] bg-[var(--earth-600)] text-white rotate-180' 
                            : 'border-[var(--neutral-600)] text-[var(--neutral-400)] group-hover:border-white group-hover:text-white'
                        }
                    `}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="px-6 md:px-8 pb-8 pt-0">
                                <p className="text-[var(--neutral-300)] leading-relaxed font-light border-t border-white/10 pt-6">
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}