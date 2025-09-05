'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="contato-hero" className="contact-cta" aria-labelledby="contact-cta-title">
      <div className="contact-cta__container">
        <div className="contact-cta__layout">
          <div className="contact-cta__image" style={{ position: 'relative', minHeight: '220px' }}>
            <Image src="/images/form.jpeg" alt="Casa Flora" fill priority sizes="(min-width: 1024px) 40vw, 92vw" style={{ objectFit: 'cover' }} />
          </div>
          
          <div className="contact-cta__content">
            <h3 id="contact-cta-title" className="contact-cta__title">Vamos conversar?</h3>
            <p className="contact-cta__description">
              Entre em contato ou inscreva-se para receber nosso material rico de pesquisa.
            </p>
            
            <div className="contact-cta__actions">
              <a 
                href="https://wa.me/5521995505403" 
                className="contact-cta__btn contact-cta__btn--whatsapp"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
              <a 
                href="mailto:contato@casaflora-brand.com.br" 
                className="contact-cta__btn contact-cta__btn--email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m4 4 7.07 8.94a1 1 0 0 0 1.46 0L20 4"/>
                  <path d="m4 4 16 16-16-16 16 16"/>
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                </svg>
                Email
              </a>
            </div>

            <div className="contact-cta__divider">
              <span>E você quer receber conteúdos exclusivos? Deixe seu contato e entre no nosso círculo de pesquisa e criação.</span>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="contact-cta__form">
                <div className="contact-cta__form-grid">
                  <div className="contact-cta__form-field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="contact-cta__form-input"
                      required
                    />
                  </div>
                  <div className="contact-cta__form-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="contact-cta__form-input"
                      required
                    />
                  </div>
                  <div className="contact-cta__form-field">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telefone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="contact-cta__form-input"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="contact-cta__form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Receber Material Rico'}
                </button>
              </form>
            ) : (
              <div className="contact-cta__success">
                <div className="contact-cta__success-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <h4>Obrigado!</h4>
                <p>Em breve você receberá nosso material rico de pesquisa no seu email.</p>
                <Link href="/#cases" className="contact-cta__success-cta">
                  Ver nossos cases
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
