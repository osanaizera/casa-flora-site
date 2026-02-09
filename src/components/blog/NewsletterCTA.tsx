'use client';

import { useState, FormEvent } from 'react';
import SdcmsLeadWidget from '@/components/SdcmsLeadWidget';

export default function NewsletterCTA() {
    const hasWidget = Boolean(
        process.env.NEXT_PUBLIC_CMS_BASE_URL &&
        process.env.NEXT_PUBLIC_SDCMS_LEAD_PUBLIC_ID,
    );

    return (
        <section className="py-20 bg-neutral-900 text-white overflow-hidden relative">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 opacity-20 bg-[url('/images/texture-subtle.png')] mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--earth-600)]/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-[var(--earth-400)] font-medium tracking-widest uppercase text-xs mb-3 block">
                            Newsletter
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl mb-4">
                            Receba insights exclusivos
                        </h2>
                        <p className="text-neutral-400 leading-relaxed max-w-md">
                            Junte-se a hoteleiros e investidores visionários. Receba mensalmente nossa curadoria sobre tendências de hospitalidade e branding.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        {hasWidget ? (
                            <div className="sdcms-lead-embed sdcms-lead-embed--dark">
                                <SdcmsLeadWidget noStyle />
                            </div>
                        ) : (
                            <NewsletterFallbackForm />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function NewsletterFallbackForm() {
    const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [msg, setMsg] = useState('');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setState('submitting');

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ name: 'Newsletter', email, message: 'Inscrição na newsletter' }),
            });
            const json = await res.json();

            if (res.ok && json.ok) {
                setState('success');
                setMsg('Inscrição realizada com sucesso!');
                (e.target as HTMLFormElement).reset();
            } else {
                setState('error');
                setMsg(json.error || 'Erro ao inscrever. Tente novamente.');
            }
        } catch {
            setState('error');
            setMsg('Erro de conexão. Tente novamente.');
        }
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <label htmlFor="newsletter-email" className="sr-only">Email corporativo</label>
                <input
                    type="email"
                    id="newsletter-email"
                    name="email"
                    required
                    placeholder="Seu email corporativo"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[var(--earth-400)] focus:ring-1 focus:ring-[var(--earth-400)] transition-all"
                />
            </div>
            <button
                type="submit"
                disabled={state === 'submitting'}
                className="w-full bg-[var(--earth-600)] hover:bg-[var(--earth-400)] disabled:opacity-50 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-[var(--earth-600)]/20"
            >
                {state === 'submitting' ? 'Enviando...' : 'Inscrever-se'}
            </button>
            {state === 'success' && (
                <p className="text-green-400 text-sm text-center">{msg}</p>
            )}
            {state === 'error' && (
                <p className="text-red-400 text-sm text-center">{msg}</p>
            )}
            {state === 'idle' && (
                <p className="text-xs text-neutral-500 text-center mt-2">
                    Respeitamos sua privacidade. Zero spam.
                </p>
            )}
        </form>
    );
}
