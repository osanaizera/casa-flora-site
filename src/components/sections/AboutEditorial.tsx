export default function AboutEditorial() {
  return (
    <section className="py-32 bg-charcoal text-ivory relative overflow-hidden">
      {/* Background Elements Orgânicos */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 blob bg-gradient-to-br from-flora-green/10 to-transparent animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 left-10 w-80 h-80 tear-drop bg-gradient-to-tr from-flora-coral/10 to-transparent animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 w-60 h-60 blob bg-gradient-to-bl from-flora-amber/8 to-transparent animate-float" style={{ animationDelay: '6s' }} />
      </div>

      <div className="container relative z-10">
        {/* Layout Magazine Assimétrico */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Coluna 1 - Headline Editorial */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="flex items-center mb-8">
                <div className="w-24 h-px bg-flora-coral mr-6" />
                <span className="caption text-flora-coral tracking-[0.3em] font-bold">
                  NOSSA HISTÓRIA
                </span>
              </div>
              
              <h2 className="font-serif leading-none mb-12">
                <span className="block text-4xl md:text-6xl font-light text-ivory">
                  Duas mentes,
                </span>
                <span className="block text-5xl md:text-7xl font-bold text-flora-green italic -mt-3">
                  uma visão:
                </span>
                <span className="block text-6xl md:text-8xl font-black text-flora-coral -mt-4">
                  MARCAS
                </span>
                <span className="block text-3xl md:text-5xl font-light text-flora-amber italic -mt-2">
                  que transformam
                </span>
              </h2>

              {/* Stats Flutuantes */}
              <div className="space-y-8">
                <div className="floating-element">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-flora-green to-flora-coral rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">50+</span>
                    </div>
                    <div>
                      <p className="caption text-flora-green font-bold">MARCAS TRANSFORMADAS</p>
                      <p className="body-small text-silver">Desde 2019</p>
                    </div>
                  </div>
                </div>

                <div className="floating-element ml-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-flora-amber to-flora-rose rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">2M+</span>
                    </div>
                    <div>
                      <p className="caption text-flora-amber font-bold">PESSOAS IMPACTADAS</p>
                      <p className="body-small text-silver">Através das marcas que criamos</p>
                    </div>
                  </div>
                </div>

                <div className="floating-element">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-flora-lavender to-flora-coral rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">95%</span>
                    </div>
                    <div>
                      <p className="caption text-flora-lavender font-bold">CLIENTES SATISFEITOS</p>
                      <p className="body-small text-silver">Que recomendam nosso trabalho</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Conteúdo e Imagens */}
          <div className="lg:col-span-7">
            <div className="space-y-16">
              
              {/* Ana Bossardi */}
              <div className="magazine-layout">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-flora-green to-flora-coral rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <div>
                      <h3 className="h3 text-flora-green font-serif">Ana Bossardi</h3>
                      <p className="caption text-flora-coral tracking-wider font-bold">CO-FUNDADORA & ESTRATEGISTA</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-4 top-0 text-4xl text-flora-green/50 font-serif leading-none">&ldquo;</div>
                    <p className="body-large text-silver leading-relaxed pl-8 mb-6">
                      Acredito que toda marca tem uma alma única esperando para ser descoberta. 
                      Meu papel é ser a ponte entre a essência autêntica de um negócio e sua 
                      expressão no mundo.
                    </p>
                  </div>

                  <p className="body-regular text-mercury leading-relaxed">
                    Formada em Design e especialista em estratégia de marca, Ana combina rigor 
                    analítico com sensibilidade criativa. Sua abordagem humanizada transformou 
                    dezenas de marcas, sempre priorizando autenticidade sobre tendências.
                  </p>
                </div>

                {/* Placeholder Imagem Ana */}
                <div className="aspect-[4/5] bg-gradient-to-br from-flora-green/20 to-flora-coral/10 organic-border overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-flora-green/30 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-flora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="caption text-flora-green">Ana Bossardi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pedro Zanin */}
              <div className="magazine-layout">
                <div className="order-2 lg:order-1 aspect-[4/5] bg-gradient-to-br from-flora-coral/20 to-flora-amber/10 tear-drop overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-flora-coral/30 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-flora-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="caption text-flora-coral">Pedro Zanin</p>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-flora-coral to-flora-amber rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">P</span>
                    </div>
                    <div>
                      <h3 className="h3 text-flora-coral font-serif">Pedro Zanin</h3>
                      <p className="caption text-flora-amber tracking-wider font-bold">CO-FUNDADOR & ESPECIALISTA EM HOSPITALIDADE</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-4 top-0 text-4xl text-flora-coral/50 font-serif leading-none">&ldquo;</div>
                    <p className="body-large text-silver leading-relaxed pl-8 mb-6">
                      Na hospitalidade, cada detalhe conta uma história. Ajudo marcas a criar 
                      experiências que ficam na memória muito depois do último encontro.
                    </p>
                  </div>

                  <p className="body-regular text-mercury leading-relaxed">
                    Com 10+ anos no setor de hospitalidade de luxo, Pedro entende como 
                    transformar momentos em memórias. Sua expertise em experiências sensoriais 
                    revolucionou a forma como hotéis e restaurantes se conectam com seus hóspedes.
                  </p>
                </div>
              </div>

              {/* Manifesto Final */}
              <div className="mt-20 p-12 bg-gradient-to-br from-flora-green/10 to-flora-coral/5 organic-border">
                <div className="text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-8 leading-tight">
                    Nossa missão é simples:
                    <span className="block text-flora-amber italic">transformar negócios em marcas vivas</span>
                  </h3>
                  
                  <p className="body-xl text-silver leading-relaxed max-w-2xl mx-auto mb-10">
                    Não criamos apenas identidades visuais. Plantamos sementes de autenticidade 
                    que crescem em conexões genuínas, negócios prósperos e legados duradouros.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a 
                      href="/sobre" 
                      className="group relative overflow-hidden bg-flora-green text-white px-8 py-4 magnetic-button"
                      style={{
                        borderRadius: '25px 5px 25px 5px',
                        boxShadow: '0 20px 40px rgba(109, 179, 63, 0.3)'
                      }}
                    >
                      <span className="relative z-10 font-bold tracking-wide">NOSSA HISTÓRIA COMPLETA</span>
                      <div className="absolute inset-0 bg-flora-coral transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                    </a>
                    
                    <a 
                      href="/contato" 
                      className="group relative overflow-hidden border-2 border-flora-coral text-flora-coral px-8 py-4 magnetic-button"
                      style={{
                        borderRadius: '5px 25px 5px 25px'
                      }}
                    >
                      <span className="relative z-10 font-bold tracking-wide group-hover:text-white transition-colors duration-500">
                        TRABALHAR CONOSCO
                      </span>
                      <div className="absolute inset-0 bg-flora-coral transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}