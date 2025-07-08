export default function ProcessoVisual() {
  const etapas = [
    {
      numero: "01",
      titulo: "Diagnóstico",
      subtitulo: "Mergulho Estratégico",
      descricao: "Entendemos profundamente seu negócio, mercado e aspirações. Não fazemos suposições — fazemos perguntas certas.",
      detalhes: ["Análise de mercado", "Personas e jornadas", "Posicionamento atual", "Oportunidades escondidas"]
    },
    {
      numero: "02", 
      titulo: "Estratégia",
      subtitulo: "Raízes Profundas",
      descricao: "Definimos o DNA da sua marca: propósito, personalidade, promessa e posicionamento único no mercado.",
      detalhes: ["Definição de propósito", "Arquétipos de marca", "Pilares estratégicos", "Plataforma de marca"]
    },
    {
      numero: "03",
      titulo: "Identidade",
      subtitulo: "Expressão Autêntica", 
      descricao: "Criamos a linguagem visual e verbal que materializa sua estratégia em cada ponto de contato.",
      detalhes: ["Identidade visual", "Tom de voz", "Sistema de aplicações", "Manual de marca"]
    },
    {
      numero: "04",
      titulo: "Ativação",
      subtitulo: "Vida Real",
      descricao: "Implementamos sua nova marca no mundo real, garantindo consistência e impacto em cada interação.",
      detalhes: ["Implementação gradual", "Treinamento de equipe", "Monitoramento", "Ajustes contínuos"]
    }
  ];

  return (
    <section className="py-32 bg-warm-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sage/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-clay/5 to-transparent" />
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="caption text-clay mb-6 tracking-wider">
              NOSSO PROCESSO
            </div>
            <h2 className="h2 mb-8">
              Como plantamos
              <span className="text-clay italic"> raízes profundas</span>
            </h2>
            <p className="body-xl max-w-3xl mx-auto text-slate">
              Cada marca que criamos passa por um processo cuidadoso de descoberta, estratégia e materialização. Não há atalhos para autenticidade.
            </p>
          </div>
          
          {/* Processo Timeline */}
          <div className="relative">
            {/* Linha conectora */}
            <div className="absolute left-16 top-20 bottom-20 w-px bg-gradient-to-b from-clay/20 via-clay to-clay/20 hidden md:block" />
            
            <div className="space-y-24">
              {etapas.map((etapa, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    {/* Número e linha */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-warm-white to-pearl border-2 border-clay/20 flex items-center justify-center group-hover:border-clay group-hover:shadow-xl transition-all duration-500">
                        <span className="text-3xl font-serif font-bold text-clay">{etapa.numero}</span>
                      </div>
                      
                      {/* Dot indicator */}
                      <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-clay rounded-full hidden md:block group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="flex-1 group-hover:translate-x-2 transition-transform duration-500">
                      <div className="mb-6">
                        <h3 className="h3 mb-2 group-hover:text-clay transition-colors duration-300">
                          {etapa.titulo}
                        </h3>
                        <div className="caption text-clay tracking-wider mb-4">
                          {etapa.subtitulo}
                        </div>
                        <p className="body-large text-slate max-w-2xl">
                          {etapa.descricao}
                        </p>
                      </div>
                      
                      {/* Detalhes */}
                      <div className="grid grid-cols-2 gap-4 max-w-lg">
                        {etapa.detalhes.map((detalhe, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-clay rounded-full mr-3 flex-shrink-0" />
                            <span className="body-small text-steel">{detalhe}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-20 pt-16 border-t border-mercury">
            <p className="body-large text-slate mb-8 max-w-2xl mx-auto">
              Interessado em conhecer nosso processo mais profundamente? Vamos conversar sobre seu projeto.
            </p>
            
            <a href="#contato" className="btn-primary">
              Agendar Conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}