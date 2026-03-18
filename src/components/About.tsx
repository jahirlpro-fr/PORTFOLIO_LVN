"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const skills = [t("about.skill1"), t("about.skill2"), t("about.skill3")];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-warm rounded-full blur-2xl opacity-30" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent/20 to-accent-warm/20 border border-border flex items-center justify-center backdrop-blur-sm">
                <span className="font-display text-6xl md:text-7xl font-bold text-accent">
                  JLV
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6">
              {t("about.title")}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              {t("about.description")}
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-surface border border-border px-4 py-2 rounded-full text-text-primary text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}