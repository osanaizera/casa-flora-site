"use client";

import { ReactNode } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface TrackedKiwifyCheckoutLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  eventName?: string;
}

/**
 * Tracks checkout intent on Meta Pixel before redirecting to Kiwify.
 * This event is scoped to the LP checkout click.
 */
export default function TrackedKiwifyCheckoutLink({
  href,
  className,
  children,
  eventName = "WorkshopLPCheckoutClick",
}: TrackedKiwifyCheckoutLinkProps) {
  const handleClick = () => {
    if (typeof window === "undefined" || typeof window.fbq !== "function") {
      return;
    }

    window.fbq("track", "InitiateCheckout", {
      content_name: "Workshop Branding LP",
      content_category: "workshop",
      value: 997,
      currency: "BRL",
      destination: "kiwify",
    });

    window.fbq("trackCustom", eventName, {
      content_name: "Workshop Branding LP",
      destination: "kiwify",
      checkout_url: href,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
