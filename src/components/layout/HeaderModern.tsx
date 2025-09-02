'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeaderModern() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/experiencias', label: 'Experiências' },
    { href: '/hospitalidade', label: 'Hospitalidade' },
    { href: '/cases', label: 'Cases' },
    { href: '/sobre', label: 'Sobre' },
  ];

  return (
    <nav 
      className="nav"
      style={{
        background: isScrolled ? 'rgba(250, 250, 249, 0.95)' : 'rgba(250, 250, 249, 0.9)',
        boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.05)' : 'none'
      }}
    >
      <Link href="/" className="nav__logo">
        <Image
          src="/images/casa-flora-logo.png"
          alt="Casa Flora"
          width={120}
          height={40}
          className="object-contain"
          priority
        />
      </Link>
      
      <ul className="nav__menu">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="nav__link">
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/contato" className="nav__cta">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
