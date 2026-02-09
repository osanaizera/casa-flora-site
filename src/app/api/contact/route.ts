import { NextResponse } from "next/server";
import { z } from "zod";

// ─── Validation Schema ───────────────────────

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .max(120, "Nome deve ter no máximo 120 caracteres"),
  email: z
    .string()
    .email("Email inválido")
    .max(254, "Email muito longo"),
  message: z
    .string()
    .max(800, "Mensagem deve ter no máximo 800 caracteres")
    .optional()
    .default(""),
});

// ─── SDCMS Lead Capture ──────────────────────

async function captureToSdcms(data: {
  name: string;
  email: string;
  message: string;
}): Promise<{ ok: boolean; message?: string }> {
  const baseUrl = (process.env.CMS_BASE_URL ?? "").replace(/\/$/, "");
  const publicId =
    process.env.NEXT_PUBLIC_SDCMS_LEAD_PUBLIC_ID ?? "";

  if (!baseUrl || !publicId) {
    console.warn("[Contact] SDCMS lead capture skipped — missing env vars.");
    return { ok: true, message: "Lead capture skipped (no config)" };
  }

  // First, fetch the lead magnet config to get the correct field keys
  let messageFieldKey = "message";
  try {
    const configRes = await fetch(
      `${baseUrl}/api/lead-magnets/${publicId}`,
      { cache: "no-store" },
    );
    if (configRes.ok) {
      const config = await configRes.json();
      const fields = config?.data?.formSchema?.fields ?? [];
      // Find a field that is NOT name/email — that's the message/custom field
      const customField = fields.find(
        (f: { key: string; type: string }) =>
          f.key !== "name" && f.key !== "email",
      );
      if (customField) {
        messageFieldKey = customField.key;
      }
    }
  } catch {
    // Use default "message" key
  }

  const captureRes = await fetch(
    `${baseUrl}/api/lead-magnets/${publicId}/capture`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        data: {
          name: data.name,
          email: data.email,
          [messageFieldKey]: data.message,
        },
        hp: "", // honeypot anti-spam — always empty
      }),
    },
  );

  if (!captureRes.ok) {
    const err = await captureRes.text().catch(() => "");
    console.error(`[Contact] SDCMS capture error ${captureRes.status}: ${err}`);
    return { ok: false, message: "Falha ao registrar contato" };
  }

  const result = await captureRes.json();
  return { ok: true, message: result.message };
}

// ─── SMTP Notification (best-effort) ─────────

async function sendEmailNotification(data: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return; // SMTP not configured — skip silently
  }

  try {
    // Use fetch to a hypothetical local mail endpoint, or log for now.
    // Install nodemailer and uncomment below for full SMTP support:
    //   npm install nodemailer @types/nodemailer
    console.log(
      `[Contact] SMTP configured but nodemailer not installed. Would send notification to ${user} for contact from ${data.name} <${data.email}>`,
    );
  } catch (err) {
    console.warn("[Contact] SMTP notification failed (non-blocking):", err);
  }
}

// ─── Route Handler ───────────────────────────

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Dados inválidos",
        details: parsed.error.issues.map((i) => i.message),
      },
      { status: 400 },
    );
  }

  const { name, email, message } = parsed.data;

  // Primary: capture to SDCMS (blocking)
  const capture = await captureToSdcms({ name, email, message });
  if (!capture.ok) {
    return NextResponse.json(
      { ok: false, error: capture.message },
      { status: 500 },
    );
  }

  // Secondary: email notification (fire-and-forget)
  sendEmailNotification({ name, email, message }).catch(() => {});

  return NextResponse.json({
    ok: true,
    message:
      capture.message ||
      "Obrigado pelo contato! Retornaremos em breve.",
  });
}
