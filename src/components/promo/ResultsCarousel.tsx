'use client';

import React from 'react';
import Image from 'next/image';

import styles from './ResultsCarousel.module.css';

// Dados selecionados manualmente para garantir as melhores imagens para a Promo
const featuredCases = [
  {
    id: 1,
    name: 'Insólito',
    segment: 'Boutique Hotel & Spa',
    image: '/images/INSOLITO CAPA.jpg',
  },
  {
    id: 2,
    name: 'Parador Lumiar',
    segment: 'Hotelaria de Charme',
    image: '/images/PARADOR LUMIAR CAPA.webp',
  },
  {
    id: 3,
    name: 'Zendaya',
    segment: 'Resort & Beach Club',
    image: '/images/ZENDAYA CAPA.png',
  },
  {
    id: 4,
    name: 'Le Village',
    segment: 'Hospedagem Boutique',
    image: '/images/LE VILLAGE CAPA.jpg',
  },
  {
    id: 5,
    name: 'Greco',
    segment: 'Hospitalidade',
    image: '/images/GRECO CAPA.jpg',
  },
  {
    id: 6,
    name: 'Vedan',
    segment: 'Arquitetura & Design',
    image: '/images/VEDANCAPA.jpg',
  }
];

export default function ResultsCarousel() {
  return (
    <section className={styles.section}>
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--neutral-500)]">
          Marcas que se tornaram referência
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full">
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--color-paper)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--color-paper)] to-transparent pointer-events-none" />

        {/* Scrolling Track */}
        <div className={styles.track}>
          {/* Duplicate list 3 times to ensure smooth infinite loop on wide screens */}
          {[...featuredCases, ...featuredCases, ...featuredCases].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className={`group relative cursor-pointer ${styles.item}`}
            >
              {/* Card Image */}
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 280px, 340px"
                />
                {/* Overlay on hover */}
                <div className={styles.overlay} />
              </div>

              {/* Card Info */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl text-[var(--neutral-900)] leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[var(--neutral-500)] tracking-wide uppercase mt-1">
                    {item.segment}
                  </p>
                </div>
                {/* Arrow Icon */}
                <div className="w-8 h-8 rounded-full border border-[var(--neutral-300)] flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-3 h-3 text-[var(--neutral-900)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
