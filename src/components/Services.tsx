"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, QrCode, Cpu, TrendingUp, ArrowUpRight } from "lucide-react";

export function Services() {
    const { t } = useLanguage();

    const services = [
        {
            number: "01",
            icon: Globe,
            title: t("services.01.title"),
            description: t("services.01.desc"),
            deliverables: ["Design responsive", "SEO optimisé", "Hébergement inclus", "Dashboard admin"],
            accent: "from-blue-500/10 to-cyan-500/5",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-400",
        },
        {
            number: "02",
            icon: QrCode,
            title: t("services.02.title"),
            description: t("services.02.desc"),
            deliverables: ["QR code personnalisé", "Mise à jour temps réel", "Sans application", "Multi-langues"],
            accent: "from-purple-500/10 to-pink-500/5",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400",
        },
        {
            number: "03",
            icon: Cpu,
            title: t("services.03.title"),
            description: t("services.03.desc"),
            deliverables: ["Auth utilisateurs", "Base de données", "Analytics", "API sur mesure"],
            accent: "from-accent/10 to-indigo-500/5",
            iconBg: "bg-accent/10",
            iconColor: "text-accent",
        },
        {
            number: "04",
            icon: TrendingUp,
            title: t("services.04.title"),
            description: t("services.04.desc"),
            deliverables: ["Audit digital", "Stratégie sur mesure", "Formation", "Suivi mensuel"],
            accent: "from-emerald-500/10 to-teal-500/5",
            iconBg: "bg-emerald-500/10",
            iconColor: "text-emerald-400",
        },
    ];

    return (
        <section id="services" className="py-32 relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* ── HEADER — left aligned ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
                >
                    <div>
                        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                            — Ce que je fais
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
                            {t("services.title")}
                        </h2>
                    </div>
                    <p className="text-text-secondary max-w-sm md:text-right leading-relaxed">
                        Des solutions digitales concrètes, livrées rapidement et adaptées à votre activité.
                    </p>
                </motion.div>

                {/* ── SERVICES GRID — asymétrique ── */}
                <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                className={`group relative bg-surface border border-border rounded-2xl p-8
                            hover:border-accent/30 transition-all duration-400 overflow-hidden cursor-pointer
                            hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]`}
                            >
                                {/* Gradient hover background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Giant number watermark */}
                                <span className="absolute -top-4 -right-2 font-display text-[120px] font-black text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-white/[0.05] transition-colors duration-500">
                                    {service.number}
                                </span>

                                <div className="relative z-10">
                                    {/* Top row — number + icon */}
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="font-display text-sm font-bold text-text-muted tracking-widest">
                                            {service.number}
                                        </span>
                                        <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon size={22} className={service.iconColor} />
                                        </div>
                                    </div>

                                    {/* Divider line animée */}
                                    <div className="relative h-px bg-border mb-8 overflow-hidden">
                                        <motion.div
                                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-transparent"
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "40%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-display text-2xl font-bold text-text-primary mb-4 group-hover:text-white transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-text-secondary leading-relaxed mb-6 text-sm">
                                        {service.description}
                                    </p>

                                    {/* Deliverables pills */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {service.deliverables.map((item) => (
                                            <span
                                                key={item}
                                                className="bg-surface-hover border border-border/50 px-3 py-1 rounded-full text-xs text-text-muted group-hover:border-border group-hover:text-text-secondary transition-colors duration-300"
                                            >
                                                ✓ {item}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA link */}
                                    <div className="flex items-center gap-2 text-text-muted group-hover:text-accent transition-colors duration-300 text-sm font-medium">
                                        <a href="#contact" className="flex items-center gap-1.5">
                                            En savoir plus
                                            <ArrowUpRight
                                                size={14}
                                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ── BOTTOM CTA BAND ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6
                     bg-surface border border-border rounded-2xl px-8 py-6"
                >
                    <div>
                        <p className="font-display text-lg font-bold text-text-primary">
                            Vous ne trouvez pas ce qu'il vous faut ?
                        </p>
                        <p className="text-text-secondary text-sm mt-1">
                            Chaque projet est unique — discutons de vos besoins spécifiques.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        className="flex-shrink-0 inline-flex items-center gap-2 bg-accent text-white
                       px-6 py-3 rounded-xl text-sm font-semibold
                       hover:bg-accent/90 transition-all duration-300
                       shadow-[0_0_20px_rgba(79,142,247,0.25)]
                       hover:shadow-[0_0_30px_rgba(79,142,247,0.4)]
                       hover:scale-105"
                    >
                        Parlons de votre projet
                        <ArrowUpRight size={14} />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}