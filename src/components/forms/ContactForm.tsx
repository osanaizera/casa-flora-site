"use client";

import { useState, FormEvent } from "react";
import SdcmsLeadWidget from "@/components/SdcmsLeadWidget";

type FormState = "idle" | "submitting" | "success" | "error";

/**
 * ContactForm with SDCMS widget integration.
 * If the SDCMS widget is configured (env vars present), it renders the widget.
 * Otherwise, falls back to a local form that POSTs to /api/contact.
 */
export default function ContactForm() {
  const hasWidget = Boolean(
    process.env.NEXT_PUBLIC_CMS_BASE_URL &&
      process.env.NEXT_PUBLIC_SDCMS_LEAD_PUBLIC_ID,
  );

  if (hasWidget) {
    return (
      <div className="sdcms-lead-embed">
        <SdcmsLeadWidget noStyle />
      </div>
    );
  }

  return <FallbackForm />;
}

function FallbackForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok && json.ok) {
        setState("success");
        setMessage(json.message || "Obrigado pelo contato!");
        (e.target as HTMLFormElement).reset();
      } else {
        setState("error");
        setMessage(json.error || "Erro ao enviar. Tente novamente.");
      }
    } catch {
      setState("error");
      setMessage("Erro de conexão. Tente novamente.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Nome *
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          maxLength={120}
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[var(--earth-600)] focus:border-transparent transition-all"
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          maxLength={254}
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[var(--earth-600)] focus:border-transparent transition-all"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Mensagem
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          maxLength={800}
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[var(--earth-600)] focus:border-transparent transition-all resize-none"
          placeholder="Conte-nos sobre seu projeto..."
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg"
      >
        {state === "submitting" ? "Enviando..." : "Enviar Mensagem"}
      </button>

      {state === "success" && (
        <p className="text-green-600 text-sm text-center font-medium">
          {message}
        </p>
      )}
      {state === "error" && (
        <p className="text-red-500 text-sm text-center font-medium">
          {message}
        </p>
      )}
    </form>
  );
}
