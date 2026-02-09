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

// Add Supabase Storage domain for CMS images (wildcard for any project)
remotePatterns.push({
  protocol: "https",
  hostname: "**.supabase.co",
  pathname: "/storage/v1/object/public/**",
});

// Allow Unsplash images (commonly used in CMS content)
remotePatterns.push({
  protocol: "https",
  hostname: "images.unsplash.com",
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
  },
};

export default nextConfig;
