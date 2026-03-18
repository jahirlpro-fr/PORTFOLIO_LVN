"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      console.log("Form submitted:", formData);
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setStatus("success");
      setFormData({ name: "", email: "", projectType: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            {t("contact.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  {t("contact.projecttype")}
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">{t("contact.projecttype")}</option>
                  <option value="vitrine">{t("contact.type1")}</option>
                  <option value="menu">{t("contact.type2")}</option>
                  <option value="saas">{t("contact.type3")}</option>
                  <option value="other">{t("contact.type4")}</option>
                </select>
              </div>

              <div>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {status === "loading" ? "..." : t("contact.send")}
              </button>

              {status === "success" && (
                <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-xl text-sm">
                  {t("contact.success")}
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-sm">
                  {t("contact.error")}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-surface border border-border rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:jahirlpro@gmail.com"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    jahirlpro@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/33743596631"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    +33 7 43 59 66 31
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                    {t("contact.location")}
                  </h3>
                  <p className="text-text-secondary">🇫🇷 France</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent-warm/10 border border-accent/20 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
                Prêt à digitaliser votre activité ?
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Transformez votre commerce avec des solutions digitales sur mesure. Contactez-moi
                pour discuter de votre projet.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-text-secondary">Disponible maintenant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}