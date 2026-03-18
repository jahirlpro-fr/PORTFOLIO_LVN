"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Github, MessageSquare, Globe } from "lucide-react";

export function Footer() {
  const { language, setLanguage, t } = useLanguage();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const parisTime = now.toLocaleTimeString("fr-FR", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(parisTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: "#", label: t("footer.home") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#services", label: t("nav.services") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: MessageSquare, href: "https://wa.me/33743596631", label: "WhatsApp" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-display text-2xl font-bold text-accent mb-3">
              LVN Agency
            </div>
            <p className="text-text-secondary text-sm mb-6">{t("footer.tagline")}</p>
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Paris · {time}</span>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4">Social</h3>
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface-hover border border-border flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-text-secondary" />
                  </a>
                );
              })}
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm"
            >
              <Globe size={16} />
              <span>{language === "fr" ? "EN" : "FR"}</span>
            </button>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">
              © 2026 LVN Agency — {t("footer.rights")}
            </p>
            <p className="text-text-muted text-sm">
              Designed & Built by Jahir LE VAN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}