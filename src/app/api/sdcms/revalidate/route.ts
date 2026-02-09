import crypto from "crypto";
import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

function verifySignature(secret: string, timestamp: string, body: string, signature: string) {
  const message = `${timestamp}.${body}`;
  const expected = crypto.createHmac("sha256", secret).update(message).digest("hex");

  let signatureBuffer: Buffer;
  let expectedBuffer: Buffer;
  try {
    signatureBuffer = Buffer.from(signature, "hex");
    expectedBuffer = Buffer.from(expected, "hex");
  } catch {
    return false;
  }

  if (signatureBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(signatureBuffer, expectedBuffer);
}

export async function POST(request: Request) {
  const secret = process.env.CMS_WEBHOOK_SECRET || "";
  const timestamp = request.headers.get("x-sdcms-timestamp") || "";
  const signature = request.headers.get("x-sdcms-signature") || "";
  const event = request.headers.get("x-sdcms-event") || "";
  const body = await request.text();

  if (!secret || !timestamp || !signature) {
    return NextResponse.json({ ok: false, error: "Missing auth headers" }, { status: 401 });
  }
  if (!verifySignature(secret, timestamp, body, signature)) {
    return NextResponse.json({ ok: false, error: "Invalid signature" }, { status: 401 });
  }

  let payload: { post?: { slug?: string; type?: string }; previousSlug?: string };
  try {
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const slug = payload.post?.slug;
  const previousSlug = payload.previousSlug;
  const type = payload.post?.type || "BLOG";

  const revalidated: string[] = [];

  // 1. Invalidate all CMS content cache via tag
  revalidateTag("cms-posts");
  revalidated.push("tag:cms-posts");

  // 2. Revalidate relevant paths based on content type
  if (type === "BLOG") {
    revalidatePath("/blog");
    revalidated.push("/blog");

    if (slug) {
      revalidatePath(`/blog/${slug}`);
      revalidated.push(`/blog/${slug}`);
    }
    if (previousSlug && previousSlug !== slug) {
      revalidatePath(`/blog/${previousSlug}`);
      revalidated.push(`/blog/${previousSlug}`);
    }
  }

  // 3. Always revalidate homepage (shows latest posts) and sitemap
  revalidatePath("/");
  revalidated.push("/");
  revalidatePath("/sitemap.xml");
  revalidated.push("/sitemap.xml");

  console.log(
    `[SDCMS Webhook] event=${event} slug=${slug ?? "none"} revalidated=${revalidated.join(", ")}`,
  );

  return NextResponse.json({
    ok: true,
    event,
    revalidated,
  });
}
