"use client";

import { useState, KeyboardEvent } from 'react';
import Image from 'next/image';

type Props = {
  frontSrc: string;
  backSrc: string;
  frontAlt?: string;
  backAlt?: string;
};

export default function FlipCard({ frontSrc, backSrc, frontAlt = 'Frente', backAlt = 'Verso' }: Props) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((v) => !v);
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className={`flip-card ${flipped ? 'is-flipped' : ''}`}>
      <div
        className="flip-card__inner"
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        onClick={toggle}
        onKeyDown={onKey}
      >
        <div className="flip-card__face flip-card__face--front">
          <Image src={frontSrc} alt={frontAlt} fill className="flip-card__img" sizes="(min-width: 1024px) 31vw, 92vw" />
        </div>
        <div className="flip-card__face flip-card__face--back">
          <Image src={backSrc} alt={backAlt} fill className="flip-card__img" sizes="(min-width: 1024px) 31vw, 92vw" />
        </div>
      </div>
    </div>
  );
}
