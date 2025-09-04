'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavItems = [
    { href: '/experiencias', label: 'Experiências' },
    { href: '/hospitalidade', label: 'Hospitalidade' },
  ];
  
  const secondaryNavItems = [
    { href: '/cases', label: 'Cases' },
    { href: '/sobre', label: 'Sobre' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 py-4">
          {/* Logo Conceitual */}
          <Link href="/" className="group flex items-center">
            <div className="relative w-auto h-10">
              <Image
                src="/images/iconeheader.png"
                alt="Casa Flora - Experiências & Hospitalidade"
                width={160}
                height={40}
                className="object-contain group-hover:opacity-70 transition-opacity duration-500 filter invert"
                priority
                loading="eager"
              />
            </div>
          </Link>
          
          {/* Navigation Desktop - Dualidade */}
          <nav className="hidden lg:flex items-center">
            {/* Menus Principais - Dualidade */}
            <div className="flex items-center space-x-1 mr-8">
              {primaryNavItems.map((item, index) => (
                <>
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm font-light text-charcoal hover:text-charcoal/60 transition-all duration-500 tracking-wide"
                  >
                    {item.label}
                  </Link>
                  {index === 0 && (
                    <div className="w-px h-6 bg-light-gray mx-2" />
                  )}
                </>
              ))}
            </div>
            
            {/* Menus Secundários */}
            <div className="flex items-center space-x-6">
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-light text-charcoal/40 hover:text-charcoal/60 transition-colors duration-500 tracking-wider"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button Modern */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/contato" 
              className="hidden md:inline-flex items-center text-xs font-light text-charcoal/60 hover:text-charcoal transition-all duration-500 tracking-widest uppercase"
              aria-label="Entre em contato"
            >
              Contato
            </Link>
          </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-charcoal hover:text-warm-brown transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <div className="w-5 h-5 relative">
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-200 ${
                  isMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
                }`} />
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-200 top-2.5 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-200 ${
                  isMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
                }`} />
              </div>
            </button>
        </div>

        {/* Mobile Menu Clean */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-off-white/98 backdrop-blur-xl border-b border-light-gray/20 transform transition-all duration-300 origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}>
          <nav className="py-6">
            {/* Menus Principais Mobile */}
            <div className="border-b border-light-gray/20 pb-4 mb-4">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-4 text-lg font-semibold text-charcoal hover:text-warm-brown hover:bg-warm-white/20 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Menus Secundários Mobile */}
            {secondaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-3 text-charcoal hover:text-warm-brown hover:bg-warm-white/20 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="px-6 pt-4 border-t border-light-gray/20">
              <Link 
                href="/contato"
                className="block w-full bg-charcoal text-off-white text-center py-3 rounded-sm hover:bg-warm-brown transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
