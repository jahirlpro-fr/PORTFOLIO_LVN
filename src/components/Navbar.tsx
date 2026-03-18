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

    // Scroll progress bar at top
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Detect scroll for navbar background
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Active section detection via IntersectionObserver
    useEffect(() => {
        const sectionIds = ["projects", "services", "pricing", "contact"];
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.3 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    const toggleLanguage = useCallback(() => {
        setLanguage(language === "fr" ? "en" : "fr");
    }, [language, setLanguage]);

    const navLinks = [
        { href: "#services", label: t("nav.services"), id: "services" },
        { href: "#projects", label: t("nav.projects"), id: "projects" },
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

            {/* ── NAVBAR ── */}
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-bg/85 backdrop-blur-2xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        {/* ── LOGO ── */}
                        <Link href="/" className="group flex items-center gap-2.5">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <div className="absolute inset-0 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors duration-300" />
                                <div className="absolute inset-[3px] bg-accent rounded-md group-hover:scale-110 transition-transform duration-300" />
                                <span className="relative text-white font-display font-black text-xs z-10">L</span>
                            </div>
                            <span className="font-display text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                                LVN Agency
                            </span>
                        </Link>

                        {/* ── DESKTOP NAV LINKS ── */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.id;
                                return (

                                    key = { link.href }
                href = { link.href }
                                className = "relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group"
                                    >
                <motion.span
                    className="absolute inset-0 rounded-xl"
                    style={{ border: "1px solid" }}
                    animate={{
                        backgroundColor: isActive ? "rgba(79,142,247,0.12)" : "rgba(79,142,247,0)",
                        borderColor: isActive ? "rgba(79,142,247,0.25)" : "rgba(79,142,247,0)",
                        boxShadow: isActive ? "0 0 16px rgba(79,142,247,0.15)" : "0 0 0px rgba(79,142,247,0)",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-200" />
                <span className={`relative z-10 transition-colors duration-300 ${
                    isActive
                        ? "text-accent"
                        : "text-text-secondary group-hover:text-text-primary"
                }`}>
                    {link.label}
                </span>
            </a>
                        );
    })}
                    </div>

                        {/* ── DESKTOP RIGHT ACTIONS ── */}
                        <div className="hidden md:flex items-center gap-3">
                            {/* Language toggle */}
                            <button
                                onClick={toggleLanguage}
                                className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-text-muted hover:text-text-primary hover:border-accent/40 transition-all duration-300 text-xs font-semibold tracking-widest uppercase"
                                aria-label="Toggle language"
                            >
                                <span className={language === "fr" ? "text-text-primary" : "text-text-muted"}>FR</span>
                                <span className="text-text-muted">/</span>
                                <span className={language === "en" ? "text-text-primary" : "text-text-muted"}>EN</span>
                            </button>

                            {/* CTA button */}
                            <a
                                href="#contact"
                                className="group relative inline-flex items-center gap-2 bg-accent text-white
                           px-5 py-2.5 rounded-full text-sm font-semibold
                           hover:bg-accent/90 transition-all duration-300
                           shadow-[0_0_20px_rgba(79,142,247,0.25)]
                           hover:shadow-[0_0_35px_rgba(79,142,247,0.45)]
                           hover:scale-105"
                            >
                                {t("nav.cta")}
                                <ArrowUpRight
                                    size={14}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                />
                            </a>
                        </div>

                        {/* ── MOBILE HAMBURGER ── */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-accent/40 hover:bg-surface transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={18} className="text-text-primary" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="open"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={18} className="text-text-primary" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                    </div>
                </div>
            </motion.nav>

            {/* ── MOBILE MENU OVERLAY ── */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 52px) 40px)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 52px) 40px)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 52px) 40px)" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-2xl md:hidden flex flex-col"
                    >
                        {/* Top bar */}
                        <div className="flex items-center justify-between px-6 h-20 border-b border-border">
                            <span className="font-display text-lg font-bold text-text-primary">LVN Agency</span>
                        </div>

                        {/* Nav links */}
                        <div className="flex flex-col justify-center flex-1 px-8 gap-2">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="group flex items-center justify-between py-5 border-b border-border/50 last:border-0"
                                >
                                    <span className="font-display text-3xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                                        {link.label}
                                    </span>
                                    <ArrowUpRight
                                        size={20}
                                        className="text-text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                                    />
                                </motion.a>
                            ))}
                        </div>

                        {/* Bottom actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45, duration: 0.5 }}
                            className="px-8 pb-12 flex items-center justify-between"
                        >
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-300 text-sm font-semibold tracking-widest uppercase"
                            >
                                <span className={language === "fr" ? "text-text-primary" : "text-text-muted"}>FR</span>
                                <span>/</span>
                                <span className={language === "en" ? "text-text-primary" : "text-text-muted"}>EN</span>
                            </button>

                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent/90 transition-all shadow-[0_0_25px_rgba(79,142,247,0.3)]"
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