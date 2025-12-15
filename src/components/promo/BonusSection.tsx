'use client';

import React from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';

export default function BonusSection() {
    return (
        <section className="py-20 md:py-24 lg:py-28 bg-[#0c0a09] relative overflow-hidden text-[var(--neutral-50)] min-h-[calc(100vh-80px)] flex items-center">
            
            {/* 1. Cinematic Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'%2F%3E%3C%2Ffilter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C%2Fsvg%3E")' }}>
            </div>
            
            {/* 2. Ambient Lighting (Golden Hour Glow) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--earth-600)] opacity-10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--earth-800)] opacity-10 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* LEFT COLUMN: Content Strategy */}
                    <div className="lg:col-span-7 space-y-6 md:space-y-8">
                        
                        {/* Eyebrow */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                        >
                            <span className="h-px w-8 bg-[var(--earth-400)]"></span>
                            <span className="text-[var(--earth-400)] text-xs font-bold tracking-[0.25em] uppercase">
                                Cortesia Institucional
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-4xl md:text-5xl leading-[1.05]"
                        >
                            A marca atrai. <br/>
                            <span className="font-serif italic text-[var(--neutral-400)]">A experiência fideliza.</span>
                        </motion.h2>

                        {/* Editorial Body */}
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[var(--neutral-300)] text-base md:text-lg leading-relaxed max-w-xl font-light border-l border-[var(--neutral-800)] pl-6"
                        >
                             Aqui na Casa Flora valorizamos cada detalhe da experiência com o cliente, e você vai sentir isso desde o seu primeiro contato. Para que seus clientes também vivam essa sensação, criamos o <strong className="text-white font-medium">Manual de Encantamento 2026</strong>. Ao garantir sua vaga no Projeto Raiz agora, você recebe sem custo adicional nosso manual interno de hospitalidade.
                        </motion.p>

                        {/* High-Value List (Cards) with new icons */}
                        <div className="space-y-3 md:space-y-4 pt-4">
                            <FeatureCard 
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                                title="Rituais de Boas-vindas"
                                desc="O passo a passo para encantar o cliente nos primeiros 5 minutos."
                                delay={0.3}
                            />
                            <FeatureCard 
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                }
                                title="Sensorial & Ambiente"
                                desc="Checklists de aroma, som e luz para criar uma atmosfera de marca."
                                delay={0.4}
                            />
                            <FeatureCard 
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                }
                                title="Recuperação de Clientes"
                                desc="O script exato para transformar uma reclamação em um elogio público."
                                delay={0.5}
                            />
                        </div>

                         {/* Price Anchor Tag - ENHANCED */}
                         <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center gap-4 mt-8 bg-[var(--earth-800)]/20 border border-[var(--earth-600)]/40 p-4 rounded-lg backdrop-blur-md shadow-lg"
                        >
                            <span className="text-sm md:text-base text-[var(--neutral-500)] line-through font-bold whitespace-nowrap">
                                DE R$ 1.500
                            </span>
                            <span className="text-xl md:text-2xl font-extrabold text-white bg-[var(--earth-600)] px-4 py-2 rounded-md shadow-xl whitespace-nowrap">
                                POR ZERO!
                            </span>
                            <span className="text-xs md:text-sm uppercase tracking-widest text-[var(--earth-200)] font-bold ml-auto">
                                BÔNUS EXCLUSIVO
                            </span>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: The "Artifact" (3D Book) */}
                    <div className="lg:col-span-5 flex justify-center perspective-1000 relative">
                        {/* Glow Behind Book */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--earth-500)] to-purple-900 opacity-20 blur-[90px] rounded-full animate-pulse" />
                        
                        <Book3D />
                    </div>

                </div>
            </div>
        </section>
    );
}

// --- Subcomponents for Clean Architecture --- 

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-[var(--earth-600)]/30 transition-all duration-300 backdrop-blur-sm cursor-default"
        >
            <div className="w-10 h-10 rounded-full bg-[var(--neutral-800)] flex items-center justify-center text-lg border border-[var(--neutral-700)] group-hover:scale-110 transition-transform text-[var(--earth-400)]">
                {icon}
            </div>
            <div>
                <h4 className="text-[var(--neutral-100)] font-display text-lg mb-1">{title}</h4>
                <p className="text-[var(--neutral-400)] text-sm leading-relaxed group-hover:text-[var(--neutral-300)] transition-colors">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
}

function Book3D() {
    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 200);
        y.set(yPct * 200);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-[280px] h-[400px] md:w-[320px] md:h-[460px] cursor-pointer group flex-shrink-0"
        >
            {/* BOOK SPINE (Thickness) */}
            <div 
                className="absolute left-0 top-0 bottom-0 w-[30px] md:w-[40px] bg-[#1a1a1a] origin-left transform -rotate-y-90 translate-z-[15px] md:translate-z-[20px]"
                style={{ transform: 'rotateY(-90deg) translateX(-15px)', zIndex: 0 }}
            >
                <div className="h-full w-full"></div>
            </div>

            {/* PAGES (Thickness Right) */}
            <div 
                className="absolute right-0 top-2 bottom-2 w-[26px] md:w-[36px] bg-[#e5e5e5] origin-right transform rotate-y-90 translate-z-[13px] md:translate-z-[18px]"
                style={{ 
                    backgroundImage: 'repeating-linear-gradient(90deg, #e5e5e5 0px, #d4d4d4 1px, #e5e5e5 2px)',
                    transform: 'rotateY(90deg) translateX(13px)',
                    zIndex: 0 
                }}
            />

            {/* FRONT COVER */}
            <div 
                className="absolute inset-0 bg-[#1c1917] rounded-sm shadow-2xl border-l-2 border-[#333] overflow-hidden"
                style={{ transform: 'translateZ(15px)' }}
            >
                {/* Cover Texture */}
                <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] mix-blend-overlay" />
                
                {/* Shine Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                {/* Cover Content */}
                <div className="relative h-full p-6 md:p-8 flex flex-col justify-between border-[1px] border-white/10 m-2 md:m-3">
                    
                    {/* Top Logos */}
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--earth-600)] flex items-center justify-center">
                             <span className="font-display text-[var(--earth-600)] text-lg md:text-xl">CF</span>
                        </div>
                        <span className="text-[8px] md:text-[10px] text-[var(--neutral-500)] uppercase tracking-widest border border-[var(--neutral-800)] px-2 py-1 rounded">
                            Confidencial
                        </span>
                    </div>

                    {/* Center Title - Adjusted for better fit */}
                    <div className="space-y-1 md:space-y-2 mb-auto mt-auto">
                        <h3 className="font-display text-2xl md:text-3xl text-white leading-[1.05]">
                            MANUAL DE <br/>
                            <span className="text-[var(--earth-500)]">ENCANTAMENTO</span>
                        </h3>
                        <div className="w-10 h-1 bg-[var(--earth-600)] mt-2 md:mt-4"></div>
                        <p className="font-serif italic text-[var(--neutral-400)] text-sm md:text-lg pt-1 md:pt-2">
                            Edição Clientes Raiz
                        </p>
                    </div>

                    {/* Bottom Detail */}
                    <div>
                        <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-[var(--neutral-600)] text-center">
                            Metodologia M.E.C • 2026
                        </p>
                    </div>
                </div>
            </div>

            {/* BACK COVER (Shadow mostly) */}
            <div 
                className="absolute inset-0 bg-[#111] rounded-sm transform translate-z-[-15px] md:translate-z-[-20px] shadow-2xl"
                style={{ transform: 'translateZ(-15px)' }}
            />
        </motion.div>
    );
}
