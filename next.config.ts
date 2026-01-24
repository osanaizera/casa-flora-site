import type { NextConfig } from "next";

const cmsBaseUrl = process.env.CMS_BASE_URL;
const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [];

if (cmsBaseUrl) {
  try {
    const url = new URL(cmsBaseUrl);
    remotePatterns.push({
      protocol: url.protocol.replace(":", ""),
      hostname: url.hostname,
      port: url.port || undefined,
      pathname: "/**",
    });
  } catch {
    // Ignore invalid CMS_BASE_URL.
  }
}

const nextConfig: NextConfig = {
  images: remotePatterns.length ? { remotePatterns } : undefined,
};

export default nextConfig;
