export default function CasesDestaque() {
  const cases = [
    {
      titulo: "Organic Essence",
      categoria: "Experiências",
      tipo: "Marca de Cosméticos Naturais",
      desafio: "Criar presença autêntica no mercado saturado de beleza natural",
      resultado: "300% aumento no reconhecimento de marca em 6 meses",
      tags: ["Estratégia", "Identidade Visual", "Packaging"],
      cor: "sage"
    },
    {
      titulo: "Villa Serena",
      categoria: "Hospitalidade", 
      tipo: "Boutique Hotel",
      desafio: "Diferenciação no mercado de hospitalidade de luxo regional",
      resultado: "Ocupação média de 95% e lista de espera de 3 meses",
      tags: ["Branding Sensorial", "Experiência", "Comunicação"],
      cor: "clay"
    },
    {
      titulo: "Mindful Studio",
      categoria: "Experiências",
      tipo: "Estúdio de Bem-Estar",
      desafio: "Comunicar expertise sem perder acessibilidade e humanização",
      resultado: "Expansão para 3 unidades e comunidade de 2.000+ alunos",
      tags: ["Propósito", "Comunidade", "Digital"],
      cor: "forest"
    }
  ];

  return (
    <section className="py-32 bg-pearl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-transparent to-charcoal" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }} />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="caption text-clay mb-6 tracking-wider">
              CASES EM DESTAQUE
            </div>
            <h2 className="h2 mb-8">
              Marcas que 
              <span className="text-clay italic"> floresceram</span>
            </h2>
            <p className="body-xl max-w-3xl mx-auto text-slate">
              Cada projeto é uma história de transformação. Veja como ajudamos marcas a encontrar sua voz autêntica e crescer com propósito.
            </p>
          </div>
          
          {/* Cases Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {cases.map((caso, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-warm-white border border-mercury/50 transition-all duration-700 hover:shadow-2xl hover:border-clay/20">
                  {/* Header do Case */}
                  <div className="p-8 border-b border-mercury/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="caption text-clay tracking-wider">
                        {caso.categoria}
                      </div>
                      <div className={`w-3 h-3 rounded-full bg-${caso.cor}`} />
                    </div>
                    
                    <h3 className="h3 mb-2 group-hover:text-clay transition-colors duration-500">
                      {caso.titulo}
                    </h3>
                    <p className="body-small text-steel">
                      {caso.tipo}
                    </p>
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-cream to-platinum relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="caption text-steel">Imagem do Projeto</p>
                      </div>
                    </div>
                    
                    {/* Overlay com informações */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-6 text-ivory">
                        <h4 className="h4 mb-3">Desafio</h4>
                        <p className="body-small mb-4 leading-relaxed">
                          {caso.desafio}
                        </p>
                        <div className="flex items-center text-gold">
                          <span className="caption mr-2">VER CASE COMPLETO</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Resultado */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="h4 mb-2 text-clay">Resultado</h4>
                      <p className="body-regular text-slate">
                        {caso.resultado}
                      </p>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {caso.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-mercury/50 text-steel caption tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <p className="body-large text-slate mb-8 max-w-2xl mx-auto">
              Cada marca tem sua própria jornada. Que história vamos escrever juntos?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/cases" className="btn-primary">
                Ver Todos os Cases
              </a>
              <a href="#contato" className="btn-secondary">
                Iniciar Meu Projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}