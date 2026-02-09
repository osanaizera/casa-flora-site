/**
 * Markdown → HTML Pipeline
 *
 * Converts CMS Markdown content to safe, SEO-friendly HTML using unified/rehype.
 *
 * Pipeline:
 *   remarkParse → remarkRehype (allowDangerousHtml)
 *     → rehypeRaw → rehypeSlug → rehypeSdcmsImages → rehypeStringify
 */
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import type { Root, Element } from "hast";

import {
  absolutizeCmsAssetUrl,
  getCmsBaseUrlForAssets,
} from "@/lib/sdcms-assets";

// ─── Custom rehype plugin: absolutize CMS image URLs ──────────

function rehypeSdcmsImages(cmsBaseUrl: string | null) {
  return function transform(tree: Root) {
    function walk(node: Root | Element | { type: string; children?: unknown[] }) {
      if (
        node.type === "element" &&
        "tagName" in node &&
        (node as Element).tagName === "img"
      ) {
        const el = node as Element;
        const props = (el.properties ??= {});
        if (typeof props.src === "string") {
          props.src = absolutizeCmsAssetUrl(props.src, cmsBaseUrl);
        }
        // Add lazy loading for non-first images
        if (!props.loading) {
          props.loading = "lazy";
        }
        // Add decoding async for performance
        if (!props.decoding) {
          props.decoding = "async";
        }
      }
      if ("children" in node && Array.isArray(node.children)) {
        (node.children as Array<Root | Element>).forEach(walk);
      }
    }
    walk(tree);
  };
}

// ─── Add target="_blank" to external links ────────────────────

function rehypeExternalLinks() {
  return function transform(tree: Root) {
    function walk(node: Root | Element | { type: string; children?: unknown[] }) {
      if (
        node.type === "element" &&
        "tagName" in node &&
        (node as Element).tagName === "a"
      ) {
        const el = node as Element;
        const props = (el.properties ??= {});
        const href = typeof props.href === "string" ? props.href : "";
        if (href.startsWith("http://") || href.startsWith("https://")) {
          props.target = "_blank";
          props.rel = "noopener noreferrer";
        }
      }
      if ("children" in node && Array.isArray(node.children)) {
        (node.children as Array<Root | Element>).forEach(walk);
      }
    }
    walk(tree);
  };
}

// ─── Public API ───────────────────────────────

/**
 * Convert Markdown to sanitized HTML with CMS asset resolution.
 */
export async function renderMarkdown(markdown: string): Promise<string> {
  const cmsBase = getCmsBaseUrlForAssets();

  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeSdcmsImages, cmsBase)
    .use(rehypeExternalLinks)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}

/**
 * Strip the first image from Markdown (used when showing hero separately).
 * Returns { imageUrl, contentWithoutImage }.
 */
export function extractFirstImage(markdown: string): {
  imageUrl: string | null;
  contentWithoutImage: string;
} {
  if (!markdown) return { imageUrl: null, contentWithoutImage: markdown };

  const cmsBase = getCmsBaseUrlForAssets();

  // Markdown image: ![alt](url)
  const mdRegex = /!\[([^\]]*)\]\(([^)]+)\)/;
  const mdMatch = markdown.match(mdRegex);
  if (mdMatch) {
    return {
      imageUrl: absolutizeCmsAssetUrl(mdMatch[2], cmsBase),
      contentWithoutImage: markdown.replace(mdRegex, "").trim(),
    };
  }

  // HTML img: <img src="url">
  const htmlRegex = /<img[^>]+src=["']([^"']+)["'][^>]*\/?>/;
  const htmlMatch = markdown.match(htmlRegex);
  if (htmlMatch) {
    return {
      imageUrl: absolutizeCmsAssetUrl(htmlMatch[1], cmsBase),
      contentWithoutImage: markdown.replace(htmlRegex, "").trim(),
    };
  }

  return { imageUrl: null, contentWithoutImage: markdown };
}
