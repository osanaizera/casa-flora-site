import Link from 'next/link';

export default function About() {
  return (
    <section className="py-24 bg-accent-warm">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="h2 mb-6">Uma Nova Visão da Arquitetura</h2>
            <p className="body-large mb-6 text-neutral-600">
              A Casa Flora nasceu da paixão por criar espaços que transcendem o comum. Nosso manifesto é simples: quebrar o óbvio do florido constante e abraçar a elegância high-tech com alma orgânica.
            </p>
            <p className="body-regular mb-8 text-neutral-600">
              Cada projeto é uma oportunidade de explorar a interseção entre tecnologia e natureza, criando ambientes que são ao mesmo tempo sofisticados e acolhedores, modernos e atemporais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sobre" className="btn-primary">
                Nossa História
              </Link>
              <Link href="/contato" className="btn-secondary">
                Trabalhe Conosco
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-neutral-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-sage-200 to-earth-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-earth-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="body-small text-neutral-600">Imagem dos Fundadores</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-earth-600 rounded-full opacity-10"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-sage-600 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}