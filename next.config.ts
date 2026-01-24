import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config";

const cmsBaseUrl = process.env.CMS_BASE_URL;
const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [];

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

const nextConfig: NextConfig = {
  images: remotePatterns.length ? { remotePatterns } : undefined,
};

export default nextConfig;
