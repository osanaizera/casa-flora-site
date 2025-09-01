"use client";

import { useEffect } from "react";

export default function HeroFade() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".case-hero--fixed");
    if (!hero) return;
    const onScroll = () => {
      const vh = window.innerHeight;
      const total = Math.max(1, vh * 0.7); // desaparece em ~70% da tela
      const p = Math.min(Math.max(window.scrollY / total, 0), 1);
      hero.style.setProperty("--heroFade", String(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return null;
}

