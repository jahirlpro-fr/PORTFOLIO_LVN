"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight, Code2, Brain, Palette, Zap } from "lucide-react";

export function About() {
    const { t } = useLanguage();

    const skills = [
        { icon: Brain, label: t("about.skill1"), color: "text-blue-400", bg: "bg-blue-500/10" },
        { icon: Code2, label: t("about.skill2"), color: "text-purple-400", bg: "bg-purple-500/10" },
        { icon: Palette, label: t("about.skill3"), color: "text-accent", bg: "bg-accent/10" },
    ];

    const stack = [
        "Next.js", "React", "TypeScript", "Tailwind CSS",
        "Framer Motion", "Supabase", "Firebase", "OpenAI",
        "Vercel", "Figma",
    ];

    const facts = [
        { value: "2+", label: "ans d'expérience" },
        { value: "4", label: "projets livrés" },
        { value: "1", label: "SaaS en production" },
    ];

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                        — Qui je suis
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
                        {t("about.title")}
                    </h2>
                </motion.div>

                {/* ── MAIN GRID ── */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* LEFT — texte + facts + skills */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Description */}
                        <p className="text-text-secondary text-lg leading-relaxed">
                            {t("about.description")}
                        </p>

                        {/* Facts row */}
                        <div className="flex gap-8 py-6 border-y border-border">
                            {facts.map((fact, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                >
                                    <div className="font-display text-3xl font-black text-accent">{fact.value}</div>
                                    <div className="text-text-muted text-sm mt-1">{fact.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skill cards */}
                        <div className="grid grid-cols-3 gap-3">
                            {skills.map((skill, i) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                        className="group bg-surface border border-border rounded-xl p-4 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] cursor-default"
                                    >
                                        <div className={`w-9 h-9 rounded-lg ${skill.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon size={18} className={skill.color} />
                                        </div>
                                        <p className="text-text-primary text-xs font-medium leading-tight">{skill.label}</p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="group inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-300"
                        >
                            Travaillons ensemble
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </motion.a>
                    </motion.div>

                    {/* RIGHT — avatar card + stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        {/* Avatar card */}
                        <div className="relative bg-surface border border-border rounded-2xl overflow-hidden">
                            {/* Gradient header */}
                            <div className="h-32 bg-gradient-to-br from-accent/20 via-blue-900/30 to-[#0a0a0a] relative">
                                <div className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: "linear-gradient(rgba(79,142,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.4) 1px, transparent 1px)",
                                        backgroundSize: "30px 30px"
                                    }}
                                />
                                {/* Glow */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-accent/20 rounded-full blur-2xl" />
                            </div>

                            {/* Avatar circle */}
                            <div className="absolute top-16 left-8">
                                <div className="relative w-24 h-24 rounded-full border-4 border-[#111111] bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(79,142,247,0.4)]">
                                    <span className="font-display text-3xl font-black text-white">JL</span>
                                    {/* Online dot */}
                                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#111111]" />
                                </div>
                            </div>

                            {/* Card body */}
                            <div className="pt-16 pb-6 px-8">
                                <h3 className="font-display text-xl font-bold text-text-primary">Jahir LE VAN</h3>
                                <p className="text-text-muted text-sm mb-1">Consultant Digital & Développeur Web</p>
                                <p className="text-accent text-xs font-medium">🇫🇷 France · LVN Agency</p>

                                <div className="flex items-center gap-2 mt-4">
                                    <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                        Disponible
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">
                                        <Zap size={10} className="fill-accent" />
                                        Propulsé par l'IA
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stack card */}
                        <div className="bg-surface border border-border rounded-2xl p-6">
                            <p className="text-text-muted text-xs uppercase tracking-wider font-medium mb-4">Stack technique</p>
                            <div className="flex flex-wrap gap-2">
                                {stack.map((tech, i) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.04, duration: 0.3 }}
                                        className="bg-surface-hover border border-border px-3 py-1 rounded-full text-xs text-text-secondary hover:border-accent/40 hover:text-text-primary transition-colors duration-200 cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}