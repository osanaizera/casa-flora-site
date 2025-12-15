'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';

const testimonialsImages = [
  '/images/testimonials/testimonial-1.jpg',
  '/images/testimonials/testimonial-2.jpg',
  '/images/testimonials/testimonial-3.jpg',
  '/images/testimonials/testimonial-4.jpg',
  '/images/testimonials/testimonial-5.jpg',
  '/images/testimonials/testimonial-6.jpg',
];

export default function TestimonialsSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-[var(--color-paper)] relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-[var(--earth-200)] opacity-20 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--sage-200)] opacity-20 blur-[100px] rounded-full pointer-events-none translate-x-1/3" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Block */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--earth-600)]"></span>
                        <span className="text-[var(--earth-600)] uppercase tracking-[0.25em] text-xs font-bold">
                            Trajetória Validada
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--earth-600)]"></span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-6xl text-[var(--neutral-900)] leading-[1.1] tracking-tight"
                    >
                        Design que se paga: <br/>
                        <span className="font-serif italic text-[var(--earth-600)] relative inline-block">
                            O retorno de uma marca forte.
                            <svg className="absolute -bottom-2 w-full h-3 text-[var(--earth-400)] opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </motion.h2>
                </div>

                {/* The "Glassmorphism" Hero Block */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative max-w-5xl mx-auto mb-24"
                >
                    {/* Dark Glass Container for Impact */}
                    <div className="relative bg-[#1c1917] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden shadow-2xl">
                        
                        {/* Background Effects inside card */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 mix-blend-overlay" />
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--earth-600)] opacity-10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_4s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left relative z-10">
                            <h3 className="font-display text-2xl md:text-3xl text-white mb-3">
                                Junte-se a quem decidiu se profissionalizar.
                            </h3>
                            <p className="text-[var(--neutral-300)] font-light leading-relaxed max-w-md mx-auto md:mx-0">
                                Nossa metodologia já guiou negócios de mais de 15 nichos diferentes rumo à construção de uma autoridade visual inquestionável.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-[var(--neutral-700)] to-transparent" />

                        {/* Progressive Counter Block */}
                        <div className="flex items-center gap-6 relative z-10 min-w-[240px]">
                            <div className="text-right hidden md:block">
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--neutral-400)] mb-1">Portfólio</span>
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--earth-400)]">Consolidado</span>
                            </div>
                            
                            {/* Fixed width container for counter to prevent jitter */}
                            <div className="flex items-baseline w-[180px]"> 
                                <span className="font-display text-7xl md:text-8xl text-white font-medium tracking-tighter flex items-baseline">
                                    +<span className="inline-block w-[140px] text-left tabular-nums"><Counter from={0} to={120} /></span>
                                </span>
                                <div className="ml-[-10px] flex flex-col items-start relative top-[-6px]">
                                    <span className="text-xl md:text-2xl font-serif italic text-[var(--neutral-200)] leading-none whitespace-nowrap">Marcas</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--earth-500)] mt-1 whitespace-nowrap">Posicionadas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Flying Cards Gallery */}
                <div className="relative w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        <motion.div style={{ y: y1 }} className="flex flex-col gap-8">
                            {testimonialsImages.slice(0, 2).map((src, i) => (
                                <FloatingCard key={i} src={src} index={i} />
                            ))}
                        </motion.div>

                        <motion.div style={{ y: y2 }} className="flex flex-col gap-8 md:mt-12">
                             {testimonialsImages.slice(2, 4).map((src, i) => (
                                <FloatingCard key={i+2} src={src} index={i+2} />
                            ))}
                        </motion.div>

                        <motion.div style={{ y: y3 }} className="flex flex-col gap-8 lg:mt-6">
                            {testimonialsImages.slice(4, 6).map((src, i) => (
                                <FloatingCard key={i+4} src={src} index={i+4} />
                            ))}
                        </motion.div>

                    </div>
                </div>

                <div className="mt-24 text-center">
                    <p className="text-[var(--neutral-500)] text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 5.152 4.076 9.87 4.076 9.886 9.865 4.435 9.884 9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Depoimentos recebidos via WhatsApp
                    </p>
                </div>
            </div>
        </section>
    );
}

function Counter({ from, to }: { from: number; to: number }) {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
  
    useEffect(() => {
      const controls = animate(count, to, { duration: 2.5, ease: "circOut" });
      return controls.stop;
    }, [count, to]);
  
    return <motion.span>{rounded}</motion.span>;
}

function FloatingCard({ src, index }: { src: string; index: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
            className="group relative"
        >
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-[6px] border-white transform transition-all duration-500 hover:shadow-[0_30px_60px_rgba(139,115,85,0.2)]">
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <Image
                    src={src}
                    alt="Depoimento de cliente Casa Flora"
                    width={500}
                    height={800} 
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </motion.div>
    );
}
