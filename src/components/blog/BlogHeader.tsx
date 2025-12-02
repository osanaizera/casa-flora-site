'use client';

export default function BlogHeader() {
    return (
        <header className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--color-paper)]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                    <span className="text-[var(--earth-600)] font-medium tracking-widest uppercase text-sm mb-4 block fade-in">
                        Journal
                    </span>
                    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-neutral-900 mb-8 leading-[1.1] fade-in">
                        Insights sobre <span className="italic">hospitalidade</span>, <br className="hidden md:block" />
                        design e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--earth-600)] to-[var(--earth-400)]">experiência</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed fade-in">
                        Um espaço dedicado a explorar como o design sensorial e a arquitetura de marca transformam negócios em destinos memoráveis.
                    </p>
                </div>
            </div>
        </header>
    );
}
