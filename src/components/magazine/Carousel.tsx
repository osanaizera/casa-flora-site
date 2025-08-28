"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

type Slide = { src: string; alt?: string };
type Props = { slides: Slide[]; height?: string; border?: boolean };

export default function Carousel({ slides, height = 'min(70vh, 680px)', border = true }: Props) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  // Drag / swipe
  const [dragActive, setDragActive] = useState(false);
  const [startX, setStartX] = useState(0);
  const [delta, setDelta] = useState(0);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setDragActive(true);
    setStartX(e.clientX);
    setDelta(0);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragActive) return;
    setDelta(e.clientX - startX);
  };
  const onPointerEnd = () => {
    if (!dragActive) return;
    const threshold = 40;
    if (delta > threshold) prev();
    else if (delta < -threshold) next();
    setDragActive(false);
    setDelta(0);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const dragOffsetPercent = dragActive ? (delta / Math.max(1, (typeof window !== 'undefined' ? window.innerWidth : 1))) * 100 : 0;

  return (
    <div className="cf-carousel" role="region" aria-label="Galeria de imagens" style={{ ['--cfH' as any]: height, ['--cfB' as any]: border ? '1px' : '0px' }}>
      <div
        className="cf-carousel__viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className="cf-carousel__slide"
            aria-hidden={i !== index}
            style={{ transform: `translateX(${(i - index) * 100 + dragOffsetPercent}%)` }}
          >
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
        .cf-carousel { position: relative; width: 100%; height: var(--cfH, min(70vh, 680px)); border: var(--cfB, 1px) solid #eee; background: #fff; user-select: none; }
        .cf-carousel__viewport { position: relative; width: 100%; height: 100%; overflow: hidden; touch-action: pan-y; cursor: grab; }
        .cf-carousel__viewport:active { cursor: grabbing; }
        .cf-carousel__slide { position: absolute; inset: 0; transition: transform 420ms cubic-bezier(.25,.46,.45,.94); will-change: transform; }
        .cf-carousel__controls { position: absolute; inset: auto 0 8px 0; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .cf-carousel__btn { background: rgba(255,255,255,.85); border: 1px solid #e5e5e5; width: 32px; height: 32px; border-radius: 2px; cursor: pointer; }
        .cf-carousel__dots { display: flex; gap: 6px; padding: 4px 8px; background: rgba(255,255,255,.7); border: 1px solid #eee; }
        .cf-carousel__dot { width: 8px; height: 8px; border-radius: 50%; background: #cfcfcf; border: none; cursor: pointer; padding: 0; }
        .cf-carousel__dot.is-active { background: #111; }
      `}</style>
    </div>
  );
}
