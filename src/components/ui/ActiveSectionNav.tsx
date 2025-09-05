'use client';

import { useEffect, useState } from 'react';

interface ActiveSectionNavProps {
  sections: { href: string; label: string }[];
}

export default function ActiveSectionNav({ sections }: ActiveSectionNavProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => ({
            id: entry.target.id,
            ratio: entry.intersectionRatio,
            boundingRect: entry.boundingClientRect
          }));
        
        if (visibleSections.length > 0) {
          // Prefer the section that's closest to the top of the viewport
          const topSection = visibleSections.reduce((prev, current) => {
            const prevDistance = Math.abs(prev.boundingRect.top);
            const currentDistance = Math.abs(current.boundingRect.top);
            return currentDistance < prevDistance ? current : prev;
          });
          
          setActiveSection(topSection.id);
        }
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0.1, 0.3, 0.5, 0.7, 1],
      }
    );

    // Observe only in-page anchors (hrefs that start with '#')
    sections.forEach(({ href }) => {
      if (href.startsWith('#')) {
        const element = document.getElementById(href.substring(1));
        if (element) {
          observer.observe(element);
        } else {
          console.warn(`Section not found: ${href.substring(1)}`);
        }
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="case-menu" aria-label="Sessões do case">
      {sections.map(({ href, label }) => {
        const isAnchor = href.startsWith('#');
        const cls = isAnchor ? (activeSection === href.substring(1) ? 'active' : '') : 'case-menu__home';
        if (!isAnchor && label.toLowerCase() === 'home') {
          return (
            <a key={href} href={href} className={cls} aria-label="Voltar para a Home">
              <span className="home-icon" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9.5L12 3l9 6.5"/>
                  <path d="M19 10v9a1 1 0 0 1-1 1h-4v-6h-4v6H6a1 1 0 0 1-1-1v-9"/>
                </svg>
              </span>
              <span>Home</span>
            </a>
          );
        }
        return (
          <a key={href} href={href} className={cls}>{label}</a>
        );
      })}
    </nav>
  );
}
