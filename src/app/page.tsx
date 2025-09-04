import HeaderModern from '@/components/layout/HeaderModern';
import HeroModern from '@/components/sections/HeroModern';
import ServicesModern from '@/components/sections/ServicesModern';
import CasesShowcase from '@/components/sections/CasesShowcase';
import ScrollScript from '@/components/shared/ScrollScript';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <ScrollScript />
      <div className="main">
        <HeaderModern />
        
        <main>
          <HeroModern />
          <ServicesModern />
          <CasesShowcase />
          {/* CTA final reposicionado para o fim da página */}
          <section className="cta-final" aria-labelledby="cta-final-title">
            <div className="cases-showcase__container">
              <div className="cases-showcase__bottom-cta">
                <div className="cases-showcase__cta-content">
                  <h3 id="cta-final-title" className="cases-showcase__cta-title">Pronto para elevar sua marca?</h3>
                  <p className="cases-showcase__cta-description">Cada projeto é único e merece uma abordagem personalizada. Vamos conversar sobre como a Casa Flora pode transformar sua marca em algo verdadeiramente memorável.</p>
                  <button className="cases-showcase__cta-button">
                    <span>Iniciar conversa</span>
                    <div className="cases-showcase__cta-button-glow"></div>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Rodapé preto minimalista */}
          <footer className="site-footer">
            <div className="site-footer__container">
              <div className="site-footer__row">
                <div className="site-footer__brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Image src="/images/iconefooter.png" alt="Casa Flora" width={140} height={140} style={{ objectFit: 'contain' }} />
                </div>
                <nav className="site-footer__nav">
                  <Link href="/" className="site-footer__link">Home</Link>
                  <Link href="/#servicos" className="site-footer__link">Serviços</Link>
                  <Link href="/#cases" className="site-footer__link">Cases</Link>
                  <Link href="/#sobre" className="site-footer__link">Sobre</Link>
                </nav>
              </div>
              <div className="site-footer__row site-footer__meta">
                <p>© {new Date().getFullYear()} Casa Flora — Todos os direitos reservados.</p>
                <p>
                  desenvolvido por {""}
                  <a href="https://ozaoza.com.br" target="_blank" rel="noopener noreferrer" className="site-footer__link">
                    ozaoza.com.br
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
