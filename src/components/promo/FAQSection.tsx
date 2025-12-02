import React from 'react';

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
        <section className="py-24 bg-white border-t border-[var(--neutral-200)]">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl text-[var(--neutral-900)]">
                        Dúvidas Frequentes
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-[var(--neutral-200)] rounded-lg p-6 hover:border-[var(--earth-600)] transition-colors duration-300 bg-[var(--neutral-50)]">
                            <h3 className="font-display text-lg text-[var(--neutral-900)] mb-3 font-medium">
                                {faq.question}
                            </h3>
                            <p className="text-[var(--neutral-600)] leading-relaxed text-sm">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
