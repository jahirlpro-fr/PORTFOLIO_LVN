"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, CheckCircle2, ArrowUpRight, Star, LayoutDashboard } from "lucide-react";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-text-secondary text-lg">{t("projects.subtitle")}</p>
        </motion.div>

        {/* ── FEATURED CARD — PRIZMO ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative bg-surface border border-border rounded-3xl overflow-hidden mb-6
                     hover:border-accent/40 transition-all duration-500
                     shadow-[0_0_0_1px_rgba(79,142,247,0)] hover:shadow-[0_0_40px_rgba(79,142,247,0.08)]"
        >
          {/* Glow background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-warm/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex flex-col lg:flex-row">

            {/* Left — visual */}
            <div className="relative lg:w-[45%] h-64 lg:h-auto bg-gradient-to-br from-[#0f1f3d] via-[#1a3a6e] to-[#0a0a0a] overflow-hidden flex-shrink-0">
              {/* Ambient glows */}
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-accent/30 rounded-full blur-[60px]" />
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent-warm/20 rounded-full blur-[40px]" />
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(79,142,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.3) 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }}
              />
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-10 gap-4">
                <div className="text-5xl">🎡</div>
                <div className="font-display text-4xl font-black text-white tracking-tight">Prizmo</div>
                <p className="text-white/60 text-sm text-center max-w-xs">Gamification & fidélisation client</p>
                {/* Stats row */}
                <div className="flex items-center gap-6 mt-4">
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-accent">+47%</div>
                    <div className="text-white/50 text-xs">avis Google</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-accent">5 min</div>
                    <div className="text-white/50 text-xs">pour démarrer</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-accent">3x</div>
                    <div className="text-white/50 text-xs">clients fidèles</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — content */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Badges row */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <div className="flex items-center gap-1.5 bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                    <Star size={12} className="fill-accent" />
                    Projet Vedette
                  </div>
                  <div className="flex items-center gap-1.5 bg-accent-warm/10 text-accent-warm border border-accent-warm/20 px-3 py-1 rounded-full text-xs font-medium">
                    🚀 En production
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-hover border border-border text-text-secondary px-3 py-1 rounded-full text-xs font-medium">
                    <LayoutDashboard size={12} />
                    Dashboard inclus
                  </div>
                </div>

                <h3 className="font-display text-3xl font-bold text-text-primary mb-3">
                  Transformez vos clients en ambassadeurs
                </h3>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Prizmo gamifie l'expérience client dans votre restaurant. Roue de la fortune, avis Google automatiques, carte fidélité digitale — le tout sans application à installer. Un vrai SaaS avec espace admin, analytics temps réel et affiches imprimables.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["SaaS", "Gamification", "Google Reviews", "Carte Fidélité", "Analytics", "RGPD"].map((tag) => (
                    <span key={tag} className="bg-surface-hover border border-border px-3 py-1 rounded-full text-xs text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://prizmo.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 bg-accent text-white
                           px-6 py-3 rounded-xl text-sm font-semibold w-fit
                           hover:bg-accent/90 transition-all duration-300
                           shadow-[0_0_20px_rgba(79,142,247,0.3)]
                           hover:shadow-[0_0_35px_rgba(79,142,247,0.5)]
                           hover:scale-105"
              >
                <ExternalLink size={16} />
                Voir Prizmo
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── GRID 2x2 — AUTRES PROJETS ── */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Card 1 — Bimbambao Site */}
          <ProjectCard
            index={0}
            gradient="from-orange-600 via-red-600 to-pink-700"
            emoji="🥢"
            name="Bimbambao"
            type="Site Vitrine Restaurant"
            description="Site vitrine professionnel pour un restaurant asiatique — menu intégré, galerie photos, horaires, accès et optimisation Google My Business."
            tags={["Site Vitrine", "Restaurant", "Next.js", "SEO"]}
            status="delivered"
            href="https://www.bimbambao-restaurant.fr/"
            hasAdmin
            t={t}
          />

          {/* Card 2 — Bimbambao Menu */}
          <ProjectCard
            index={1}
            gradient="from-pink-600 via-purple-600 to-indigo-700"
            emoji="📱"
            name="Menu Digital Bimbambao"
            type="Menu QR Code"
            description="Menu digital accessible via QR code, mis à jour en temps réel. Catégories, photos des plats, prix et allergènes — sans aucune application."
            tags={["Menu Digital", "QR Code", "Temps Réel"]}
            status="delivered"
            href="https://www.bimbambao-restaurant.fr/qr"
            hasAdmin
            t={t}
          />

          {/* Card 3 — Dadicook Site */}
          <ProjectCard
            index={2}
            gradient="from-emerald-600 via-teal-600 to-cyan-700"
            emoji="🍽️"
            name="Dadicook"
            type="Site Vitrine Restaurant"
            description="Site vitrine moderne avec menu digital intégré, optimisation locale Google Maps et fiche Google My Business pour maximiser la visibilité locale."
            tags={["Site Vitrine", "Restaurant", "Google Maps", "SEO"]}
            status="delivered"
            href="https://3000-9d56efd5-ac2f-43cf-87c7-6c54f40a529b.softgen.dev/"
            hasAdmin
            t={t}
          />

          {/* Card 4 — Dadicook Menu */}
          <ProjectCard
            index={3}
            gradient="from-cyan-600 via-blue-600 to-violet-700"
            emoji="🔗"
            name="Menu Digital Dadicook"
            type="Menu QR Code"
            description="Menu responsive accessible sans application via QR code. Design sur mesure aux couleurs du restaurant, mis à jour en temps réel par le gérant."
            tags={["Menu Digital", "QR Code", "Responsive"]}
            status="delivered"
            href="https://3000-9d56efd5-ac2f-43cf-87c7-6c54f40a529b.softgen.dev/qr"
            hasAdmin
            t={t}
          />

        </div>
      </div>
    </section>
  );
}

// ── REUSABLE PROJECT CARD COMPONENT ──
interface ProjectCardProps {
  index: number;
  gradient: string;
  emoji: string;
  name: string;
  type: string;
  description: string;
  tags: string[];
  status: "delivered" | "development";
  href: string;
  hasAdmin?: boolean;
  t: (key: string) => string;
}

function ProjectCard({ index, gradient, emoji, name, type, description, tags, status, href, hasAdmin, t }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group bg-surface border border-border rounded-2xl overflow-hidden
                 hover:border-accent/40 transition-all duration-400
                 hover:shadow-[0_0_30px_rgba(79,142,247,0.07)]"
    >
      {/* Visual header */}
      <div className={`h-40 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center gap-4">
          <span className="text-4xl">{emoji}</span>
          <span className="font-display text-2xl font-bold text-white/90">{name}</span>
        </div>
        {/* Hover glow */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Top row */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-text-muted uppercase tracking-wider font-medium">{type}</span>
          <div className="flex items-center gap-2">
            {hasAdmin && (
              <div className="flex items-center gap-1 bg-surface-hover border border-border text-text-muted px-2 py-0.5 rounded-full text-xs">
                <LayoutDashboard size={10} />
                Admin
              </div>
            )}
            {status === "delivered" ? (
              <div className="flex items-center gap-1.5 bg-green-500/10 text-green-400 px-2.5 py-1 rounded-full text-xs font-medium">
                <CheckCircle2 size={12} />
                {t("projects.delivered")}
              </div>
            ) : (
              <div className="flex items-center gap-1.5 bg-accent-warm/10 text-accent-warm px-2.5 py-1 rounded-full text-xs font-medium">
                🚀 {t("projects.development")}
              </div>
            )}
          </div>
        </div>

        <h3 className="font-display text-xl font-bold text-text-primary mb-2">{name}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag) => (
            <span key={tag} className="bg-surface-hover border border-border px-2.5 py-0.5 rounded-full text-xs text-text-secondary">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn w-full flex items-center justify-center gap-2
                     border border-border text-text-secondary
                     px-4 py-2.5 rounded-xl text-sm font-medium
                     hover:border-accent/50 hover:text-accent hover:bg-accent/5
                     transition-all duration-300"
        >
          <ExternalLink size={15} />
          {t("projects.view")}
          <ArrowUpRight size={13} className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
        </a>
      </div>
    </motion.div>
  );
}