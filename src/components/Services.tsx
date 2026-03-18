"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, QrCode, Cpu, TrendingUp } from "lucide-react";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      number: "01",
      icon: Globe,
      title: t("services.01.title"),
      description: t("services.01.desc"),
    },
    {
      number: "02",
      icon: QrCode,
      title: t("services.02.title"),
      description: t("services.02.desc"),
    },
    {
      number: "03",
      icon: Cpu,
      title: t("services.03.title"),
      description: t("services.03.desc"),
    },
    {
      number: "04",
      icon: TrendingUp,
      title: t("services.04.title"),
      description: t("services.04.desc"),
    },
  ];

  return (
    <section id="services" className="py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            {t("services.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-surface border border-border rounded-2xl p-8 hover:border-accent/50 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display text-5xl font-bold text-accent/20">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon size={24} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}