import HeaderModern from '@/components/layout/HeaderModern';
import HeroModern from '@/components/sections/HeroModern';
import ServicesModern from '@/components/sections/ServicesModern';
import CasesShowcase from '@/components/sections/CasesShowcase';
import ScrollScript from '@/components/shared/ScrollScript';

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
        </main>
      </div>
    </>
  );
}
