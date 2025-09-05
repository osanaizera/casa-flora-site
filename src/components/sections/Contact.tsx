export default function Contact() {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="h2 mb-6 text-white">Vamos Criar Juntos</h2>
            <p className="body-large mb-8 text-neutral-300">
              Pronto para transformar seu espaço? Entre em contato conosco e descubra como podemos dar vida à sua visão.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-earth-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="body-regular text-neutral-300">Email</p>
                  <a href="mailto:contato@casaflora-brand.com.br" className="body-large text-white hover:text-earth-400 transition-colors">
                    contato@casaflora-brand.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-earth-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="body-regular text-neutral-300">Telefone</p>
                  <a href="tel:+5521995505403" className="body-large text-white hover:text-earth-400 transition-colors">
                    (21) 99550-5403
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-earth-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="body-regular text-neutral-300">Localização</p>
                  <p className="body-large text-white">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8">
            <h3 className="h3 mb-6 text-neutral-900">Fale Conosco</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block body-regular text-neutral-900 mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-earth-600 focus:border-transparent transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block body-regular text-neutral-900 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-earth-600 focus:border-transparent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block body-regular text-neutral-900 mb-2">Tipo de Projeto</label>
                <select 
                  id="project" 
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-earth-600 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione o tipo de projeto</option>
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                  <option value="interiores">Design de Interiores</option>
                  <option value="consultoria">Consultoria</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block body-regular text-neutral-900 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-earth-600 focus:border-transparent transition-colors"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>
              
              <button type="submit" className="w-full btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
