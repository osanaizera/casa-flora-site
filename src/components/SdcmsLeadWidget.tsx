"use client";

import Script from "next/script";

interface SdcmsLeadWidgetProps {
  publicId?: string;
  noStyle?: boolean;
  className?: string;
}

/**
 * Embeds the SDCMS Lead Magnet widget.
 * Uses the CMS-hosted JS script that dynamically renders the form
 * based on the formSchema configured in the CMS panel.
 *
 * When noStyle=true (default), the widget injects only markup —
 * the site controls all styling via CSS classes documented in the API docs.
 */
export default function SdcmsLeadWidget({
  publicId,
  noStyle = true,
  className,
}: SdcmsLeadWidgetProps) {
  const base = process.env.NEXT_PUBLIC_CMS_BASE_URL?.replace(/\/+$/, "");
  const id = publicId || process.env.NEXT_PUBLIC_SDCMS_LEAD_PUBLIC_ID;

  // Fail-closed: don't render if config is missing
  if (!id || !base) return null;

  return (
    <>
      <div
        className={className}
        data-sdcms-lead={id}
        data-sdcms-no-style={noStyle ? "1" : undefined}
      />
      <Script
        src={`${base}/widget/lead.js`}
        strategy="afterInteractive"
      />
    </>
  );
}
