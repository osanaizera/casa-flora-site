"use client";

import styles from "./magazine.module.css";
import { ReactNode } from "react";

export default function MagazineLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container} aria-label="Magazine horizontal scroller">
      <div className={styles.track}>{children}</div>
    </div>
  );
}

