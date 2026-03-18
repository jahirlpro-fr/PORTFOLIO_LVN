"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Sparkles } from "lucide-react";

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
        t("pricing.transform.feature6"),
      ],
      cta: t("pricing.transform.cta"),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-text-secondary text-lg">{t("pricing.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative bg-surface border rounded-2xl p-8 ${
                plan.popular ? "border-accent scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Sparkles size={14} />
                  {t("pricing.popular")}
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-text-primary mb-1">
                  {plan.name}
                </h3>
                <p className="text-text-muted text-sm">{plan.subtitle}</p>
              </div>

              <div className="mb-8">
                <div className="font-display text-4xl font-bold text-accent mb-2">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  plan.popular
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "border border-border text-text-primary hover:bg-surface-hover"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}