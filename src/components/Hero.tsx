"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, Sparkles, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
    const { t } = useLanguage();
    const containerRef = useRef < HTMLDivElement > (null);

    // Spotlight mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Stagger variants for title lines
    const titleVariants = {
        hidden: { opacity: 0, y: 60, skewY: 3 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            skewY: 0,
            transition: {
                delay: i * 0.18,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.6 + i * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden pt-20"
        >
            {/* ── BACKGROUND LAYERS ── */}

            {/* Spotlight mouse-tracking glow */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(79,142,247,0.07), transparent 70%)`,
                }}
            />

            {/* Static ambient glows */}
            <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[160px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-warm/8 rounded-full blur-[140px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* ── CONTENT ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">

                {/* Availability badge */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex items-center gap-2.5 bg-surface/60 backdrop-blur-md border border-border rounded-full px-5 py-2.5 mb-12"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>
                    <span className="text-sm text-text-secondary font-medium tracking-wide">
                        {t("hero.badge")}
                    </span>
                </motion.div>

                {/* Title block — left aligned, massive */}
                <div className="overflow-hidden mb-8">
                    <div className="space-y-1">
                        {/* Line 1 — plain white */}
                        <div className="overflow-hidden">
                            <motion.h1
                                custom={0}
                                initial="hidden"
                                animate="visible"
                                variants={titleVariants}
                                className="font-display font-bold text-text-primary leading-[1.05] tracking-tight
                           text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                            >
                                {t("hero.title1")}
                            </motion.h1>
                        </div>

                        {/* Line 2 — gradient accent */}
                        <div className="overflow-hidden">
                            <motion.h1
                                custom={1}
                                initial="hidden"
                                animate="visible"
                                variants={titleVariants}
                                className="font-display font-bold leading-[1.05] tracking-tight
                           text-6xl sm:text-7xl md:text-8xl lg:text-9xl
                           bg-gradient-to-r from-accent via-blue-300 to-accent-warm bg-clip-text text-transparent
                           bg-[length:200%_auto] animate-gradient-x"
                            >
                                {t("hero.title2")}
                            </motion.h1>
                        </div>

                        {/* Line 3 — plain white */}
                        <div className="overflow-hidden">
                            <motion.h1
                                custom={2}
                                initial="hidden"
                                animate="visible"
                                variants={titleVariants}
                                className="font-display font-bold text-text-primary leading-[1.05] tracking-tight
                           text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                            >
                                {t("hero.title3")}
                            </motion.h1>
                        </div>
                    </div>
                </div>

                {/* Divider line */}
                <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-px bg-gradient-to-r from-accent/60 via-border to-transparent mb-10 max-w-2xl"
                />

                {/* Subtitle + CTAs — side by side on desktop */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 max-w-6xl">

                    {/* Subtitle */}
                    <motion.p
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl"
                    >
                        {t("hero.subtitle")}
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row items-start lg:items-center gap-4 flex-shrink-0"
                    >
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center gap-2.5 bg-accent text-white
                         px-8 py-4 rounded-full text-sm font-semibold tracking-wide
                         hover:bg-accent/90 transition-all duration-300 hover:scale-105
                         shadow-[0_0_30px_rgba(79,142,247,0.3)] hover:shadow-[0_0_50px_rgba(79,142,247,0.5)]"
                        >
                            <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                            {t("hero.cta1")}
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </a>

                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2.5
                         border border-border text-text-primary
                         px-8 py-4 rounded-full text-sm font-semibold tracking-wide
                         hover:border-accent/50 hover:bg-surface hover:text-accent
                         transition-all duration-300 hover:scale-105"
                        >
                            {t("hero.cta2")}
                            <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                        </a>
                    </motion.div>
                </div>

                {/* Bottom stats row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="flex flex-wrap items-center gap-8 mt-16 pt-10 border-t border-border"
                >
                    {[
                        { value: "2", label: "Clients" },
                        { value: "4", label: "Projets livrés" },
                        { value: "1", label: "SaaS en dev" },
                    ].map((stat, i) => (
                        <div key={i} className="flex items-baseline gap-2">
                            <span className="font-display text-3xl font-bold text-accent">{stat.value}</span>
                            <span className="text-text-muted text-sm">{stat.label}</span>
                        </div>
                    ))}

                    <div className="ml-auto hidden md:flex items-center gap-2 text-text-muted text-sm">
                        <span>Scroll</span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        >
                            <ChevronDown size={16} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}