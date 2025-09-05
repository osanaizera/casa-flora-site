import HeaderModern from '@/components/layout/HeaderModern';
import HeroModern from '@/components/sections/HeroModern';
import ServicesModern from '@/components/sections/ServicesModern';
import CasesShowcase from '@/components/sections/CasesShowcase';
import ContactCTA from '@/components/sections/ContactCTA';
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
          <ContactCTA />
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
