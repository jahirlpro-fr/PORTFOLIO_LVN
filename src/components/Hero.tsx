"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, Sparkles } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-warm/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-6 lg:left-8 flex items-center gap-2 bg-surface/50 backdrop-blur-sm border border-border rounded-full px-4 py-2"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-text-secondary">{t("hero.badge")}</span>
        </motion.div>

        <div className="text-center mt-16">
          <div className="space-y-2 mb-8">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[1.1]"
            >
              {t("hero.title1")}
            </motion.h1>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-accent via-accent-warm to-accent bg-clip-text text-transparent leading-[1.1]"
            >
              {t("hero.title2")}
            </motion.h1>
            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[1.1]"
            >
              {t("hero.title3")}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-text-secondary text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-balance"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="bg-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-accent/90 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles size={18} />
              {t("hero.cta1")}
            </a>
            <a
              href="#contact"
              className="border border-border text-text-primary px-8 py-4 rounded-full text-base font-medium hover:bg-surface transition-all hover:scale-105"
            >
              {t("hero.cta2")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} className="text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}