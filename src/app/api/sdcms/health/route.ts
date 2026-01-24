import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.CMS_BASE_URL || "";
  const apiKey = process.env.CMS_API_KEY || "";

  if (!baseUrl || !apiKey) {
    return NextResponse.json(
      { ok: false, cmsOk: false, message: "Missing CMS env vars" },
      { status: 500 }
    );
  }

  const response = await fetch(
    `${baseUrl.replace(/\\/$/, "")}/api/content?limit=1&includeContent=false`,
    {
      headers: { "x-api-key": apiKey },
      cache: "no-store",
    }
  );

  return NextResponse.json({
    ok: true,
    cmsOk: response.ok,
    message: response.ok ? "CMS reachable" : "CMS error",
  });
}
