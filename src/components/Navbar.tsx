"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = ["projects", "services", "pricing", "contact"];
        const observers: IntersectionObserver[] = [];
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.3 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    const toggleLanguage = useCallback(() => {
        setLanguage(language === "fr" ? "en" : "fr");
    }, [language, setLanguage]);

    const navLinks = [
        { href: "#projects", label: t("nav.projects"), id: "projects" },
        { href: "#services", label: t("nav.services"), id: "services" },
        { href: "#pricing", label: t("nav.pricing"), id: "pricing" },
        { href: "#contact", label: t("nav.contact"), id: "contact" },
    ];

    return (
        <>
            {/* ── SCROLL PROGRESS BAR ── */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
                style={{ scaleX }}
            />

            {/* ── FLOATING PILL NAVBAR ── */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
                <motion.nav
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`pointer-events-auto flex items-center justify-between gap-4 w-full max-w-3xl
                      px-4 py-2.5 rounded-2xl border transition-all duration-500
                      ${isScrolled
                            ? "bg-[#0A0A0A]/85 backdrop-blur-2xl border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]"
                            : "bg-[#111111]/60 backdrop-blur-xl border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]"
                        }`}
                >
                    {/* ── LOGO ── */}
                    <Link href="/" className="group flex items-center gap-2.5 flex-shrink-0">
                        <div className="relative w-7 h-7 flex items-center justify-center rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-accent" />
                            <span className="relative text-white font-display font-black text-xs z-10">L</span>
                        </div>
                        <span className="font-display text-sm font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                            LVN Agency
                        </span>
                    </Link>

                    {/* ── CENTER NAV LINKS ── */}
                    <div className="hidden md:flex items-center gap-0.5">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 group"
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill-active"
                                            className="absolute inset-0 rounded-xl bg-accent/10 border border-accent/20"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                    {!isActive && (
                                        <span className="absolute inset-0 rounded-xl bg-transparent group-hover:bg-white/5 transition-colors duration-200" />
                                    )}
                                    <span className={`relative z-10 transition-colors duration-200 ${isActive
                                            ? "text-accent"
                                            : "text-text-secondary group-hover:text-text-primary"
                                        }`}>
                                        {link.label}
                                    </span>
                                </a>
                            );
                        })}
                    </div>

                    {/* ── RIGHT ACTIONS ── */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {/* Language pill */}
                        <button
                            onClick={toggleLanguage}
                            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg
                         border border-white/10 hover:border-accent/30 hover:bg-accent/5
                         transition-all duration-300"
                            aria-label="Toggle language"
                        >
                            <span className={`text-xs font-bold tracking-wider transition-colors ${language === "fr" ? "text-white" : "text-text-muted"}`}>FR</span>
                            <span className="text-text-muted text-xs mx-0.5">/</span>
                            <span className={`text-xs font-bold tracking-wider transition-colors ${language === "en" ? "text-white" : "text-text-muted"}`}>EN</span>
                        </button>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="group hidden md:inline-flex items-center gap-1.5
                         bg-accent text-white px-4 py-2 rounded-xl text-xs font-semibold
                         hover:bg-accent/90 transition-all duration-300
                         shadow-[0_0_12px_rgba(79,142,247,0.35)]
                         hover:shadow-[0_0_22px_rgba(79,142,247,0.55)]
                         hover:scale-105"
                        >
                            {t("nav.cta")}
                            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg
                         border border-white/10 hover:border-accent/30 hover:bg-accent/5
                         transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <X size={15} className="text-text-primary" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <Menu size={15} className="text-text-primary" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* ── MOBILE MENU OVERLAY ── */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-2xl md:hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 pt-7 pb-4">
                            <span className="font-display text-lg font-bold text-text-primary">LVN Agency</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-9 h-9 flex items-center justify-center rounded-xl border border-border hover:border-accent/40 transition-colors"
                            >
                                <X size={16} className="text-text-primary" />
                            </button>
                        </div>

                        {/* Nav links — big editorial style */}
                        <div className="flex flex-col justify-center flex-1 px-6 gap-0">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 + index * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="group flex items-center justify-between py-5 border-b border-border/40 last:border-0"
                                >
                                    <span className="font-display text-4xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                                        {link.label}
                                    </span>
                                    <ArrowUpRight
                                        size={22}
                                        className="text-text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                                    />
                                </motion.a>
                            ))}
                        </div>

                        {/* Bottom bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35 }}
                            className="px-6 pb-10 flex items-center justify-between border-t border-border/40 pt-6"
                        >
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border text-sm font-bold tracking-wider hover:border-accent/40 hover:text-accent transition-all duration-300"
                            >
                                <span className={language === "fr" ? "text-white" : "text-text-muted"}>FR</span>
                                <span className="text-text-muted">/</span>
                                <span className={language === "en" ? "text-white" : "text-text-muted"}>EN</span>
                            </button>

                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(79,142,247,0.3)]"
                            >
                                {t("nav.cta")}
                                <ArrowUpRight size={14} />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}