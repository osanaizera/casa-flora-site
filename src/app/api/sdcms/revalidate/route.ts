import crypto from "crypto";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

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
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  if (!verifySignature(secret, timestamp, body, signature)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const payload = JSON.parse(body);
  const slug = payload.post?.slug;
  const previousSlug = payload.previousSlug;

  if (event) {
    // Event available for debugging or conditional revalidation.
  }

  revalidatePath("/blog");
  if (slug) revalidatePath(`/blog/${slug}`);
  if (previousSlug && previousSlug !== slug) {
    revalidatePath(`/blog/${previousSlug}`);
  }

  return NextResponse.json({ ok: true });
}
