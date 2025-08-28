"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

type Slide = { src: string; alt?: string };

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className="cf-carousel" role="region" aria-label="Galeria de imagens">
      <div className="cf-carousel__viewport">
        {slides.map((s, i) => (
          <div key={i} className="cf-carousel__slide" aria-hidden={i !== index} style={{ transform: `translateX(${(i - index) * 100}%)` }}>
            <Image src={s.src} alt={s.alt || `Slide ${i + 1}`} fill className="object-cover" sizes="(min-width:1024px) 1000px, 100vw" />
          </div>
        ))}
      </div>
      {count > 1 && (
        <div className="cf-carousel__controls">
          <button className="cf-carousel__btn" onClick={prev} aria-label="Anterior">‹</button>
          <div className="cf-carousel__dots">
            {slides.map((_, i) => (
              <button key={i} className={`cf-carousel__dot ${i === index ? "is-active" : ""}`} onClick={() => setIndex(i)} aria-label={`Ir ao slide ${i + 1}`} />
            ))}
          </div>
          <button className="cf-carousel__btn" onClick={next} aria-label="Próximo">›</button>
        </div>
      )}

      <style jsx>{`
        .cf-carousel { position: relative; width: 100%; height: min(70vh, 680px); border: 1px solid #eee; background: #fff; }
        .cf-carousel__viewport { position: relative; width: 100%; height: 100%; overflow: hidden; }
        .cf-carousel__slide { position: absolute; inset: 0; transition: transform 500ms cubic-bezier(.25,.46,.45,.94); }
        .cf-carousel__controls { position: absolute; inset: auto 0 8px 0; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .cf-carousel__btn { background: rgba(255,255,255,.8); border: 1px solid #e5e5e5; width: 32px; height: 32px; border-radius: 2px; cursor: pointer; }
        .cf-carousel__dots { display: flex; gap: 6px; padding: 4px 8px; background: rgba(255,255,255,.7); border: 1px solid #eee; }
        .cf-carousel__dot { width: 8px; height: 8px; border-radius: 50%; background: #cfcfcf; border: none; cursor: pointer; padding: 0; }
        .cf-carousel__dot.is-active { background: #111; }
      `}</style>
    </div>
  );
}

