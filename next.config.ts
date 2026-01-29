import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config";

const cmsBaseUrl = process.env.CMS_BASE_URL;
const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [];

// Add CMS domain
if (cmsBaseUrl) {
  try {
    const url = new URL(cmsBaseUrl);
    const pattern: RemotePattern = {
      protocol: url.protocol === "https:" ? "https" : "http",
      hostname: url.hostname,
      pathname: "/**",
    };
    if (url.port) {
      pattern.port = url.port;
    }
    remotePatterns.push(pattern);
  } catch {
    // Ignore invalid CMS_BASE_URL.
  }
}

// Add Supabase Storage domain for CMS images
remotePatterns.push({
  protocol: "https",
  hostname: "plqkfyjzulvdztmasyft.supabase.co",
  pathname: "/storage/v1/object/public/**",
});

const nextConfig: NextConfig = {
  images: remotePatterns.length ? { remotePatterns } : undefined,
};

export default nextConfig;
