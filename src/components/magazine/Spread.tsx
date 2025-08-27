"use client";

import styles from "./magazine.module.css";
import { ReactNode } from "react";

type SpreadProps = {
  children: ReactNode;
  variant?: "default" | "narrow" | "wide";
  role?: string;
  ariaLabel?: string;
};

export default function Spread({ children, variant = "default", role, ariaLabel }: SpreadProps) {
  const className = [
    styles.spread,
    variant === "narrow" && styles.spreadNarrow,
    variant === "wide" && styles.spreadWide,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={className} role={role} aria-label={ariaLabel}>
      {children}
    </section>
  );
}

