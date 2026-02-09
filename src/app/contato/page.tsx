import type { Metadata } from "next";
import HeaderModern from "@/components/layout/HeaderModern";
import ContactForm from "@/components/forms/ContactForm";

const SITE_URL = process.env.SITE_URL || "https://www.casaflora-brand.com.br";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Casa Flora Branding e Design. Transformamos visões em marcas memoráveis. Escritório em Ipanema, Rio de Janeiro.",
  alternates: {
    canonical: `${SITE_URL}/contato`,
  },
  openGraph: {
    title: "Contato | Casa Flora Branding e Design",
    description:
      "Fale conosco e descubra como podemos transformar seu negócio.",
    url: `${SITE_URL}/contato`,
    type: "website",
  },
};

export default function ContatoPage() {
  return (
    <div className="bg-[var(--color-paper)] min-h-screen">
      <HeaderModern />

      <main className="pt-32 pb-24 md:pt-40">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left – Info */}
            <div>
              <span className="text-[var(--earth-600)] font-medium tracking-widest uppercase text-xs mb-4 block">
                Contato
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-neutral-900 mb-6 leading-[1.1]">
                Vamos Criar Juntos
              </h1>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-lg mb-12">
                Pronto para transformar seu negócio? Entre em contato e
                descubra como podemos dar vida à sua visão.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:contato@casaflora-brand.com.br"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[var(--earth-100)] rounded-full flex items-center justify-center group-hover:bg-[var(--earth-200)] transition-colors">
                    <svg
                      className="w-5 h-5 text-[var(--earth-600)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-neutral-900 font-medium group-hover:text-[var(--earth-600)] transition-colors">
                      contato@casaflora-brand.com.br
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+5521995505403"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[var(--earth-100)] rounded-full flex items-center justify-center group-hover:bg-[var(--earth-200)] transition-colors">
                    <svg
                      className="w-5 h-5 text-[var(--earth-600)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">
                      Telefone
                    </p>
                    <p className="text-neutral-900 font-medium group-hover:text-[var(--earth-600)] transition-colors">
                      (21) 99550-5403
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--earth-100)] rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[var(--earth-600)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">
                      Localização
                    </p>
                    <p className="text-neutral-900 font-medium">
                      R. Visc. de Pirajá, 495
                    </p>
                    <p className="text-neutral-500 text-sm">
                      Ipanema, Rio de Janeiro - RJ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right – Form */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-neutral-200 shadow-sm">
              <h2 className="font-display text-2xl font-medium text-neutral-900 mb-8">
                Fale Conosco
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}