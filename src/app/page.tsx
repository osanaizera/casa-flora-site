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
        </main>
      </div>
    </>
  );
}
