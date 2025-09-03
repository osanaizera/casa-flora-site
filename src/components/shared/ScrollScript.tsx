'use client';

import { useEffect } from 'react';

export default function ScrollScript() {
  useEffect(() => {
    // Intersection Observer for service cards animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(el => {
      observer.observe(el);
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement | null)?.getAttribute('href');
        if (!href) return;
        const target = document.querySelector<HTMLElement>(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // Este componente não renderiza nada
}
