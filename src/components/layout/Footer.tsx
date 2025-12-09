import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-white border-t border-light-gray/30">
      <div className="container-editorial editorial-section">
        <div className="editorial-grid">
          {/* Logo & Manifesto */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative w-12 h-12 organic-border">
                <Image
                  src="/images/iconefooter.png"
                  alt="Casa Flora"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-serif font-light text-charcoal">Casa Flora</h3>
            </div>

            <p className="body-large leading-relaxed text-warm-gray mb-8 max-w-md">
              Branding e Design. Desenvolvemos marcas sensoriais, autorais e
              profundamente humanas que conectam negócios e pessoas com autenticidade.
            </p>

            {/* Quote Editorial */}
            <div className="sophisticated-card organic-border border-l-4 border-sage-green max-w-lg">
              <p className="quote text-sage-green">
                &quot;Quebramos o óbvio criando identidades elegantes, tecnológicas e humanas.&quot;
              </p>
            </div>
          </div>

          {/* Navegação */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <h4 className="h4 mb-6 text-charcoal font-serif">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/experiencias"
                  className="text-warm-gray hover:text-warm-brown transition-colors body-regular hover-lift-elegant"
                >
                  Experiências
                </Link>
              </li>
              <li>
                <Link
                  href="/hospitalidade"
                  className="text-warm-gray hover:text-warm-brown transition-colors body-regular hover-lift-elegant"
                >
                  Hospitalidade
                </Link>
              </li>
              <li>
                <Link
                  href="/cases"
                  className="text-warm-gray hover:text-warm-brown transition-colors body-regular hover-lift-elegant"
                >
                  Cases
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-warm-gray hover:text-warm-brown transition-colors body-regular hover-lift-elegant"
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <h4 className="h4 mb-6 text-charcoal font-serif">Serviços</h4>
            <ul className="space-y-4">
              <li>
                <div className="text-warm-gray body-regular">
                  Garden - Branding Completo
                </div>
              </li>
              <li>
                <div className="text-warm-gray body-regular">
                  Raíz - Branding Pocket
                </div>
              </li>
              <li>
                <div className="text-warm-gray body-regular">
                  Extensões & Complementares
                </div>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-warm-brown hover:text-sage-green transition-colors body-regular hover-lift-elegant font-medium"
                >
                  Conversar sobre projeto →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-12 lg:col-span-3">
            <h4 className="h4 mb-6 text-charcoal font-serif">Contato</h4>
            <div className="space-y-6">
              <div>
                <div className="caption text-warm-brown mb-2 tracking-wider">LOCALIZAÇÃO</div>
                <div className="text-warm-gray body-regular">R. Visc. de Pirajá, 495</div>
                <div className="text-warm-gray body-regular">Ipanema, Rio de Janeiro - RJ</div>
              </div>

              <div>
                <div className="caption text-warm-brown mb-2 tracking-wider">EMAIL</div>
                <a
                  href="mailto:contato@casaflora-brand.com.br"
                  className="text-warm-gray hover:text-warm-brown transition-colors body-regular hover-lift-elegant"
                >
                  contato@casaflora-brand.com.br
                </a>
              </div>

              <div>
                <div className="caption text-warm-brown mb-2 tracking-wider">TELEFONE</div>
                <a
                  href="tel:+5521995505403"
                  className="text-warm-gray hover:text-warm-brown transition-colors body-regular hover-lift-elegant"
                >
                  (21) 99550-5403
                </a>
              </div>

              {/* Social Links Minimalistas */}
              <div className="pt-4">
                <div className="caption text-warm-brown mb-4 tracking-wider">REDES SOCIAIS</div>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/casaflorabrand/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warm-gray hover:text-warm-brown transition-colors hover-lift-elegant"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.320-1.291a4.49 4.49 0 01-1.291-3.32c0-1.297.49-2.448 1.291-3.32a4.49 4.49 0 013.32-1.291c1.297 0 2.448.49 3.32 1.291a4.49 4.49 0 011.291 3.32c0 1.297-.49 2.448-1.291 3.32a4.49 4.49 0 01-3.32 1.291zm7.098-8.187h-2.51c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-1.768 1.768c-.391.391-.391 1.023 0 1.414l1.768 1.768c.391.391 1.023.391 1.414 0s.391-1.023 0-1.414h2.51c.553 0 1-.448 1-1s-.447-1-1-1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/casaflorabrand/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warm-gray hover:text-sage-green transition-colors hover-lift-elegant"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/5521995505403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warm-gray hover:text-soft-gold transition-colors hover-lift-elegant"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador Respirante */}
        <div className="breathing-line my-12" />

        {/* Copyright Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-warm-gray body-small">
            &copy; {currentYear} Casa Flora. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <p className="caption text-warm-brown">
              SOFISTICAÇÃO ORGÂNICA CONTEMPORÂNEA
            </p>
            <p className="caption text-warm-gray">
              Desenvolvido por <a href="https://salesdrive.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-warm-brown transition-colors">Salesdrive.com.br</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
