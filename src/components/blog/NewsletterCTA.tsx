'use client';

export default function NewsletterCTA() {
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
                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="sr-only">Email corporativo</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Seu email corporativo"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[var(--earth-400)] focus:ring-1 focus:ring-[var(--earth-400)] transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[var(--earth-600)] hover:bg-[var(--earth-400)] text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-[var(--earth-600)]/20"
                            >
                                Inscrever-se
                            </button>
                            <p className="text-xs text-neutral-500 text-center mt-2">
                                Respeitamos sua privacidade. Zero spam.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
