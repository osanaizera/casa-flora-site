export default function Manifesto() {
  return (
    <section className="py-32 bg-charcoal text-ivory overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-gold rounded-full animate-glow" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-copper rounded-full animate-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-gold rounded-full animate-glow" style={{ animationDelay: '4s' }} />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Quote Principal */}
          <div className="mb-20">
            <h2 className="h1 mb-12 leading-tight">
              Sua marca é um 
              <span className="text-gold italic"> organismo vivo</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="body-xl mb-8 leading-relaxed">
                Não criamos logotipos. Não fazemos campanhas. Não vendemos identidades visuais prontas.
              </p>
              
              <p className="body-xl mb-8 leading-relaxed">
                <strong className="text-gold">Cultivamos marcas</strong> que respiram, crescem e se conectam profundamente com as pessoas certas. Marcas que carregam propósito, contam histórias verdadeiras e constroem legados duradouros.
              </p>
              
              <p className="body-xl leading-relaxed text-mercury">
                Porque no fim, branding não é sobre você se destacar no mercado. É sobre você <em className="text-gold">pertencer</em> genuinamente ao coração de quem mais importa.
              </p>
            </div>
          </div>
          
          {/* Princípios */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8 mx-auto" />
              <h3 className="h4 mb-4 text-gold">Estratégia Profunda</h3>
              <p className="body-regular text-silver">
                Mergulhamos na essência do seu negócio. Entendemos não só o que você faz, mas por que existe e para onde quer ir.
              </p>
            </div>
            
            <div className="group">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8 mx-auto" />
              <h3 className="h4 mb-4 text-gold">Estética Sensível</h3>
              <p className="body-regular text-silver">
                Cada cor, forma e palavra é escolhida com intenção. Criamos experiências visuais que emocionam antes de informar.
              </p>
            </div>
            
            <div className="group">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8 mx-auto" />
              <h3 className="h4 mb-4 text-gold">Presença Autêntica</h3>
              <p className="body-regular text-silver">
                Sua marca precisa ser reconhecível não pelo logo, mas pela energia que transmite. Isso é presença real.
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-20">
            <p className="caption text-gold mb-8 tracking-wider">
              PRONTO PARA TRANSFORMAR SUA MARCA EM UM ORGANISMO VIVO?
            </p>
            
            <div className="inline-block">
              <a 
                href="#contato" 
                className="group relative inline-flex items-center px-8 py-4 text-ivory border border-gold/30 hover:border-gold transition-all duration-500"
              >
                <span className="relative z-10 caption tracking-wider">VAMOS CONVERSAR</span>
                <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <svg className="w-4 h-4 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}