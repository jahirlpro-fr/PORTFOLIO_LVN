"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, CheckCircle2, Settings } from "lucide-react";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      name: "Bimbambao",
      type: t("projects.bimbambao.type"),
      description: t("projects.bimbambao.desc"),
      status: "delivered",
      tags: ["Site Vitrine", "Restaurant", "SEO"],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      name: "Menu Digital Bimbambao",
      type: t("projects.menubimbambao.type"),
      description: t("projects.menubimbambao.desc"),
      status: "delivered",
      tags: ["Menu Digital", "QR Code"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Dadicook",
      type: t("projects.dadicook.type"),
      description: t("projects.dadicook.desc"),
      status: "delivered",
      tags: ["Site Vitrine", "Restaurant", "SEO"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Menu Digital Dadicook",
      type: t("projects.menudadicook.type"),
      description: t("projects.menudadicook.desc"),
      status: "delivered",
      tags: ["Menu Digital", "QR Code"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      name: "App Avis Google",
      type: t("projects.saas.type"),
      description: t("projects.saas.desc"),
      status: "development",
      tags: ["SaaS", "Gamification", "Google Reviews"],
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-text-secondary text-lg">{t("projects.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-4xl font-bold text-white/80">
                    {project.name.split(" ")[0]}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-text-muted uppercase tracking-wider">
                    {project.type}
                  </span>
                  {project.status === "delivered" ? (
                    <div className="flex items-center gap-1.5 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                      <CheckCircle2 size={14} />
                      {t("projects.delivered")}
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 bg-accent-warm/10 text-accent-warm px-3 py-1 rounded-full text-xs font-medium">
                      <Settings size={14} />
                      {t("projects.development")}
                    </div>
                  )}
                </div>

                <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                  {project.name}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-surface-hover border border-border px-3 py-1 rounded-full text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  disabled
                  className="w-full flex items-center justify-center gap-2 bg-surface-hover border border-border text-text-muted px-4 py-3 rounded-xl text-sm font-medium cursor-not-allowed"
                >
                  <ExternalLink size={16} />
                  {t("projects.view")}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}