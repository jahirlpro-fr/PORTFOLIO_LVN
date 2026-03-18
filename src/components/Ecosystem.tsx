"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Scale, Activity, ShoppingBag, Home, CreditCard, Zap } from "lucide-react";

export function Ecosystem() {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Scale,
      title: "LegalTech",
      description: t("ecosystem.legaltech"),
    },
    {
      icon: Activity,
      title: "HealthTech",
      description: t("ecosystem.healthtech"),
    },
    {
      icon: ShoppingBag,
      title: "E-commerce",
      description: t("ecosystem.ecommerce"),
    },
    {
      icon: Home,
      title: "Immobilier",
      description: t("ecosystem.realestate"),
    },
    {
      icon: CreditCard,
      title: "Fidélité",
      description: t("ecosystem.loyalty"),
    },
    {
      icon: Zap,
      title: "Automatisation",
      description: t("ecosystem.automation"),
    },
  ];

  return (
    <section className="py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            {t("ecosystem.title")}
          </h2>
          <p className="text-text-secondary text-lg">{t("ecosystem.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative bg-surface/50 border border-border/50 rounded-2xl p-8 opacity-60"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-text-muted/10 text-text-muted px-3 py-1 rounded-full text-xs font-medium">
                    {t("ecosystem.comingsoon")}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-accent" />
                </div>

                <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                  {solution.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}