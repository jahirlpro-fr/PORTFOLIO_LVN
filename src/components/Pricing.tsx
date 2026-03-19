"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Sparkles, ArrowUpRight, Zap } from "lucide-react";

export function Pricing() {
    const { t } = useLanguage();

    const plans = [
        {
            name: t("pricing.starter.name"),
            subtitle: t("pricing.starter.subtitle"),
            price: t("pricing.starter.price"),
            features: [
                t("pricing.starter.feature1"),
                t("pricing.starter.feature2"),
                t("pricing.starter.feature3"),
                t("pricing.starter.feature4"),
                t("pricing.starter.feature5"),
                t("pricing.starter.feature6"),
            ],
            cta: t("pricing.starter.cta"),
            popular: false,
            accent: "border-border hover:border-white/20",
            badge: null,
            priceColor: "text-text-primary",
            description: "Idéal pour lancer votre présence en ligne rapidement.",
        },
        {
            name: t("pricing.resto.name"),
            subtitle: t("pricing.resto.subtitle"),
            price: t("pricing.resto.price"),
            features: [
                t("pricing.resto.feature1"),
                t("pricing.resto.feature2"),
                t("pricing.resto.feature3"),
                t("pricing.resto.feature4"),
                t("pricing.resto.feature5"),
                t("pricing.resto.feature6"),
            ],
            cta: t("pricing.resto.cta"),
            popular: true,
            accent: "border-accent/50 hover:border-accent",
            badge: t("pricing.popular"),
            priceColor: "text-accent",
            description: "Le pack complet pour les restaurateurs et commerçants.",
        },
        {
            name: t("pricing.transform.name"),
            subtitle: t("pricing.transform.subtitle"),
            price: t("pricing.transform.price"),
            features: [
                t("pricing.transform.feature1"),
                t("pricing.transform.feature2"),
                t("pricing.transform.feature3"),
                t("pricing.transform.feature4"),
                t("pricing.transform.feature5"),
            ],
            cta: t("pricing.transform.cta"),
            popular: false,
            accent: "border-border hover:border-white/20",
            badge: null,
            priceColor: "text-text-primary",
            description: "Pour les projets ambitieux nécessitant une solution sur mesure.",
        },
    ];

    return (
        <section id="pricing" className="py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                        — Tarifs
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
                        {t("pricing.title")}
                    </h2>
                    <p className="text-text-secondary text-lg max-w-xl mx-auto">{t("pricing.subtitle")}</p>
                </motion.div>

                {/* ── PLANS GRID ── */}
                <div className="grid md:grid-cols-3 gap-6 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className={`relative bg-surface border rounded-2xl transition-all duration-400 ${plan.accent} ${plan.popular
                                    ? "p-8 pt-12 shadow-[0_0_60px_rgba(79,142,247,0.12)] scale-[1.02]"
                                    : "p-8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                                }`}
                        >
                            {/* Popular glow background */}
                            {plan.popular && (
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
                            )}

                            {/* Badge populaire */}
                            {plan.badge && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(79,142,247,0.5)] whitespace-nowrap">
                                    <Sparkles size={12} />
                                    {plan.badge}
                                </div>
                            )}

                            <div className="relative z-10">
                                {/* Plan name + subtitle */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-display text-xl font-bold text-text-primary">
                                            {plan.name}
                                        </h3>
                                        {plan.popular && (
                                            <Zap size={16} className="text-accent fill-accent" />
                                        )}
                                    </div>
                                    <p className="text-text-muted text-xs uppercase tracking-wider">{plan.subtitle}</p>
                                    <p className="text-text-secondary text-sm mt-2 leading-relaxed">{plan.description}</p>
                                </div>

                                {/* Divider */}
                                <div className={`h-px mb-6 ${plan.popular ? "bg-accent/30" : "bg-border"}`} />

                                {/* Price */}
                                <div className="mb-8">
                                    <div className={`font-display text-4xl font-black ${plan.priceColor} mb-1`}>
                                        {plan.price}
                                    </div>
                                    {plan.popular && (
                                        <p className="text-text-muted text-xs">Paiement en plusieurs fois possible</p>
                                    )}
                                </div>

                                {/* Features list */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.filter(f => f.trim()).map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.popular ? "bg-accent/20" : "bg-surface-hover"
                                                }`}>
                                                <Check size={12} className={plan.popular ? "text-accent" : "text-text-muted"} />
                                            </div>
                                            <span className="text-text-secondary text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA button */}
                                <a
                                    href="#contact"
                                    className={`group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${plan.popular
                                            ? "bg-accent text-white hover:bg-accent/90 shadow-[0_0_20px_rgba(79,142,247,0.3)] hover:shadow-[0_0_35px_rgba(79,142,247,0.5)] hover:scale-105"
                                            : "border border-border text-text-primary hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
                                        }`}
                                >
                                    {plan.cta}
                                    <ArrowUpRight
                                        size={14}
                                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                    />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── BOTTOM REASSURANCE BAND ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-8 text-text-muted text-sm"
                >
                    {[
                        "✓ Devis gratuit sous 24h",
                        "✓ Sans engagement",
                        "✓ Paiement sécurisé",
                        "✓ Support réactif",
                    ].map((item) => (
                        <span key={item} className="flex items-center gap-2">{item}</span>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}