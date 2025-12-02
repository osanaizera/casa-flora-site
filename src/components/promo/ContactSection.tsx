import React from 'react';

export default function ContactSection() {
  return (
    <section id="contato-hero" className="py-24 bg-[var(--neutral-900)] text-[var(--neutral-50)] relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Context */}
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              Vamos garantir sua vaga?
            </h2>
            <p className="text-[var(--neutral-400)] text-lg leading-relaxed">
              Preencha o formulário abaixo para aplicar para uma das vagas de Janeiro/2026. 
              <br/><br/>
              Entraremos em contato em até 24h para entender seu momento e confirmar se o <strong>Projeto Raiz</strong> é o ideal para você agora.
            </p>
            
            <div className="space-y-6 pt-6 border-t border-[var(--neutral-800)]">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[var(--earth-600)] rounded-full flex items-center justify-center mr-4 shadow-lg shadow-[var(--earth-600)]/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--neutral-500)]">WhatsApp Comercial</p>
                  <a href="https://wa.me/5521995505403" target="_blank" className="text-lg text-white hover:text-[var(--earth-400)] transition-colors">
                    (21) 99550-5403
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="font-display text-2xl text-[var(--neutral-900)] mb-6">Aplicação Rápida</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--neutral-700)] mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-[var(--neutral-50)] border border-[var(--neutral-200)] rounded-lg focus:ring-2 focus:ring-[var(--earth-600)] focus:border-transparent outline-none transition-all text-[var(--neutral-900)]"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[var(--neutral-700)] mb-2">Nome da Empresa / Instagram</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 bg-[var(--neutral-50)] border border-[var(--neutral-200)] rounded-lg focus:ring-2 focus:ring-[var(--earth-600)] focus:border-transparent outline-none transition-all text-[var(--neutral-900)]"
                  placeholder="@suamarca"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--neutral-700)] mb-2">WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 bg-[var(--neutral-50)] border border-[var(--neutral-200)] rounded-lg focus:ring-2 focus:ring-[var(--earth-600)] focus:border-transparent outline-none transition-all text-[var(--neutral-900)]"
                  placeholder="(XX) 99999-9999"
                />
              </div>
              
              <button type="submit" className="w-full btn-primary py-4 text-base mt-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                SOLICITAR PROPOSTA
              </button>
              
              <p className="text-xs text-center text-[var(--neutral-500)] mt-4">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
