/**
 * SDCMS Asset URL Resolution
 *
 * Converts relative CMS asset URLs (/storage/...) to absolute URLs.
 * Used by the blog adapter and the rehype Markdown pipeline.
 */

export function getCmsBaseUrlForAssets(): string | null {
  const base =
    process.env.CMS_BASE_URL ??
    process.env.NEXT_PUBLIC_CMS_BASE_URL ??
    "";
  return base.replace(/\/+$/, "") || null;
}

/**
 * Converts relative CMS URLs to absolute.
 * Already-absolute URLs (https://…) pass through unchanged.
 */
export function absolutizeCmsAssetUrl(
  url: string,
  cmsBaseUrl?: string | null,
): string {
  const raw = (url ?? "").trim();
  if (!raw) return raw;
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  if (raw.startsWith("//")) return raw;

  const base = cmsBaseUrl ?? getCmsBaseUrlForAssets();
  if (!base) return raw;

  return raw.startsWith("/") ? `${base}${raw}` : `${base}/${raw}`;
}
