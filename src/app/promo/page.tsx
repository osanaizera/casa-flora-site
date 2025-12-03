import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/promo/HeroSection';
import ResultsCarousel from '@/components/promo/ResultsCarousel';
import PainSection from '@/components/promo/PainSection';
import SolutionSection from '@/components/promo/SolutionSection';
import BonusSection from '@/components/promo/BonusSection';
import OfferSection from '@/components/promo/OfferSection';
import TestimonialsSection from '@/components/promo/TestimonialsSection';
import FAQSection from '@/components/promo/FAQSection';
import ContactSection from '@/components/promo/ContactSection';

export const metadata = {
  title: 'Projeto Raiz — Promo | Casa Flora',
  description:
    'Estruture sua marca para 2026 com o Projeto Raiz: estratégia, identidade e aplicações com assinatura Casa Flora. Vagas de janeiro com tabela 2025 + bônus exclusivo.',
};

export default function PromoPage() {
  return (
    <div className="main">
      {/* Header minimalista focado em conversão (sem menu) */}
      <nav className="nav">
        <Link href="/" className="nav__logo">
          <Image
            src="/images/iconeheader.png"
            alt="Casa Flora"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5521995505403"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__cta"
            aria-label="Fale no WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </nav>
      <main className="min-h-screen bg-[var(--color-paper)]">
        <HeroSection />
        <ResultsCarousel />
        <PainSection />
        <SolutionSection />
        <BonusSection />
        <OfferSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />

        {/* Rodapé consistente com o site */}
        <footer className="site-footer bg-[var(--neutral-900)] text-white border-t border-[var(--neutral-800)]">
          <div className="site-footer__container container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="site-footer__brand flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <Image src="/images/iconefooter.png" alt="Casa Flora" width={120} height={120} style={{ objectFit: 'contain' }} className="invert brightness-0 bg-white rounded-full p-1" />
              </div>
              <div className="text-sm text-[var(--neutral-500)] text-center md:text-right">
                <p className="mb-2">© {new Date().getFullYear()} Casa Flora — Todos os direitos reservados.</p>
                <p>
                  Design High-End para marcas que querem liderar.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
