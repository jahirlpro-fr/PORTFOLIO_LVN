"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navbar
    "nav.projects": "Projets",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.cta": "Prendre contact",
    
    // Hero
    "hero.title1": "Bonjour, je suis Jahir",
    "hero.title2": "Consultant Digital",
    "hero.title3": "& Développeur Web.",
    "hero.subtitle": "Je transforme les commerces et entreprises en acteurs digitaux performants — sites web, applications, outils sur mesure, propulsés par l'IA.",
    "hero.cta1": "Voir mes projets",
    "hero.cta2": "Me contacter",
    "hero.badge": "Disponible pour de nouveaux projets",
    
    // Metrics
    "metrics.clients": "Clients satisfaits",
    "metrics.projects": "Projets livrés",
    "metrics.saas": "SaaS en développement",
    "metrics.ontime": "Dans les délais",
    
    // About
    "about.title": "À Propos",
    "about.description": "Autodidacte passionné, j'ai lancé LVN Agency avec une conviction : la transformation digitale doit être accessible à tous les commerces. En maîtrisant les meilleurs outils IA du marché, je livre des solutions professionnelles rapidement et efficacement — sites vitrine, menus digitaux, applications SaaS, et bien plus.",
    "about.skill1": "IA & Automatisation",
    "about.skill2": "Développement Web",
    "about.skill3": "UX/UI Design",
    
    // Services
    "services.title": "Mes Services",
    "services.01.title": "Sites Vitrine",
    "services.01.desc": "Création de sites web professionnels, responsive, optimisés SEO et hébergés. Idéal pour restaurants, commerces et professions libérales.",
    "services.02.title": "Menus Digitaux",
    "services.02.desc": "Menus interactifs accessibles via QR code, modifiables en temps réel, sans application à télécharger.",
    "services.03.title": "Applications SaaS",
    "services.03.desc": "Développement d'outils digitaux sur mesure : gamification d'avis clients, cartes de fidélité numériques, solutions métier.",
    "services.04.title": "Conseil & Transformation Digitale",
    "services.04.desc": "Accompagnement stratégique pour digitaliser votre activité : audit, outils, formation et suivi.",
    
    // Projects
    "projects.title": "Mes Réalisations",
    "projects.subtitle": "Des projets concrets, livrés pour de vrais clients.",
    "projects.delivered": "Livré",
    "projects.development": "En développement",
    "projects.view": "Voir le projet",
    
    "projects.bimbambao.type": "Site Vitrine Restaurant",
    "projects.bimbambao.desc": "Site vitrine professionnel avec menu intégré, galerie photos et optimisation Google.",
    
    "projects.menubimbambao.type": "Menu Digital QR Code",
    "projects.menubimbambao.desc": "Menu digital accessible via QR code, mis à jour en temps réel sans aucun téléchargement.",
    
    "projects.dadicook.type": "Site Vitrine Restaurant",
    "projects.dadicook.desc": "Site vitrine moderne avec menu digital intégré et optimisation locale Google Maps.",
    
    "projects.menudadicook.type": "Menu Digital QR Code",
    "projects.menudadicook.desc": "Menu responsive accessible sans application, design sur mesure.",
    
    "projects.saas.type": "Application SaaS",
    "projects.saas.desc": "Plateforme de gamification des avis Google pour commerces. Les clients gagnent des récompenses en laissant un avis, augmentant mécaniquement la note et la visibilité Google.",
    
    // Ecosystem
    "ecosystem.title": "L'Écosystème LVN Agency",
    "ecosystem.subtitle": "Des solutions digitales pour chaque secteur. En cours de développement.",
    "ecosystem.comingsoon": "Coming Soon",
    "ecosystem.legaltech": "Outils pour cabinets d'avocats et notaires",
    "ecosystem.healthtech": "Prise de RDV et portails praticiens",
    "ecosystem.ecommerce": "Boutiques en ligne clé en main",
    "ecosystem.realestate": "Visites virtuelles et sites agences",
    "ecosystem.loyalty": "Programme fidélité sans app",
    "ecosystem.automation": "Chatbots et automatisation de tâches",
    
    // Pricing
    "pricing.title": "Nos Offres",
    "pricing.subtitle": "Des tarifs clairs, sans surprise. Tout inclus.",
    "pricing.popular": "Populaire",
    "pricing.starter.name": "STARTER",
    "pricing.starter.subtitle": "Site Vitrine",
    "pricing.starter.price": "À partir de 490€",
    "pricing.starter.feature1": "Site 5 pages (Accueil, À propos, Services, Galerie, Contact)",
    "pricing.starter.feature2": "Design responsive sur mesure",
    "pricing.starter.feature3": "Formulaire de contact",
    "pricing.starter.feature4": "SEO de base",
    "pricing.starter.feature5": "Hébergement 1 an inclus",
    "pricing.starter.feature6": "1 mois de support",
    "pricing.starter.cta": "Démarrer",
    
    "pricing.resto.name": "RESTO PACK",
    "pricing.resto.subtitle": "Site Vitrine",
    "pricing.resto.price": "À partir de 790€",
    "pricing.resto.feature1": "Tout le Starter +",
    "pricing.resto.feature2": "Menu digital QR Code",
    "pricing.resto.feature3": "Fiche Google My Business optimisée",
    "pricing.resto.feature4": "Indexation Google Maps",
    "pricing.resto.feature5": "Modifications illimitées 2 mois",
    "pricing.resto.feature6": "Support prioritaire 3 mois",
    "pricing.resto.cta": "Choisir ce pack",
    
    "pricing.transform.name": "DIGITAL TRANSFORM",
    "pricing.transform.subtitle": "Application SaaS",
    "pricing.transform.price": "Sur devis",
    "pricing.transform.feature1": "Application SaaS ou outil métier sur mesure",
    "pricing.transform.feature2": "Analyse des besoins + cahier des charges",
    "pricing.transform.feature3": "Développement complet",
    "pricing.transform.feature4": "Formation à l'utilisation",
    "pricing.transform.feature5": "Support dédié 6 mois",
    "pricing.transform.feature6": " ",
    "pricing.transform.cta": "Prendre contact",
    
    // Contact
    "contact.title": "Parlons de votre projet",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.projecttype": "Type de projet",
    "contact.message": "Message",
    "contact.type1": "Site Vitrine",
    "contact.type2": "Menu Digital",
    "contact.type3": "Application SaaS",
    "contact.type4": "Autre",
    "contact.send": "Envoyer ma demande",
    "contact.location": "France",
    "contact.success": "Message envoyé avec succès !",
    "contact.error": "Erreur lors de l'envoi. Veuillez réessayer.",
    
    // Footer
    "footer.tagline": "Votre partenaire digital",
    "footer.home": "Accueil",
    "footer.rights": "Tous droits réservés",
  },
  en: {
    // Navbar
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",
    
    // Hero
    "hero.title1": "Hello, I'm Jahir",
    "hero.title2": "Digital Consultant",
    "hero.title3": "& Web Developer.",
    "hero.subtitle": "I turn businesses into high-performing digital players — websites, apps, custom tools, powered by AI.",
    "hero.cta1": "View my projects",
    "hero.cta2": "Contact me",
    "hero.badge": "Available for new projects",
    
    // Metrics
    "metrics.clients": "Happy Clients",
    "metrics.projects": "Projects Delivered",
    "metrics.saas": "SaaS in Development",
    "metrics.ontime": "On Time",
    
    // About
    "about.title": "About",
    "about.description": "Self-taught and passionate, I founded LVN Agency with one belief: digital transformation should be accessible to every business. By mastering the best AI tools available, I deliver professional solutions fast and efficiently — landing pages, digital menus, SaaS apps, and more.",
    "about.skill1": "AI & Automation",
    "about.skill2": "Web Development",
    "about.skill3": "UX/UI Design",
    
    // Services
    "services.title": "My Services",
    "services.01.title": "Landing Pages",
    "services.01.desc": "Professional, responsive, SEO-optimized websites. Perfect for restaurants, shops and freelancers.",
    "services.02.title": "Digital Menus",
    "services.02.desc": "Interactive menus via QR code, editable in real time, no app needed.",
    "services.03.title": "SaaS Applications",
    "services.03.desc": "Custom digital tools: review gamification, loyalty cards, business-specific SaaS solutions.",
    "services.04.title": "Digital Strategy",
    "services.04.desc": "Strategic consulting to digitize your business: audit, tools, training and follow-up.",
    
    // Projects
    "projects.title": "My Work",
    "projects.subtitle": "Real projects, delivered for real clients.",
    "projects.delivered": "Delivered",
    "projects.development": "In Development",
    "projects.view": "View project",
    
    "projects.bimbambao.type": "Restaurant Website",
    "projects.bimbambao.desc": "Professional restaurant website with integrated menu, photo gallery and Google optimization.",
    
    "projects.menubimbambao.type": "Digital Menu QR Code",
    "projects.menubimbambao.desc": "QR code digital menu, updated in real time with no download required.",
    
    "projects.dadicook.type": "Restaurant Website",
    "projects.dadicook.desc": "Modern restaurant website with digital menu and Google Maps local optimization.",
    
    "projects.menudadicook.type": "Digital Menu QR Code",
    "projects.menudadicook.desc": "Responsive menu accessible without any app, custom design.",
    
    "projects.saas.type": "SaaS Application",
    "projects.saas.desc": "Google review gamification platform for local businesses. Customers earn rewards for leaving reviews, boosting ratings and Google visibility automatically.",
    
    // Ecosystem
    "ecosystem.title": "The LVN Agency Ecosystem",
    "ecosystem.subtitle": "Digital solutions for every industry. Coming soon.",
    "ecosystem.comingsoon": "Coming Soon",
    "ecosystem.legaltech": "Tools for law firms and notaries",
    "ecosystem.healthtech": "Appointment booking and practitioner portals",
    "ecosystem.ecommerce": "Turnkey online shops",
    "ecosystem.realestate": "Virtual tours and real estate sites",
    "ecosystem.loyalty": "App-free loyalty programs",
    "ecosystem.automation": "Chatbots and task automation",
    
    // Pricing
    "pricing.title": "Our Packages",
    "pricing.subtitle": "Clear pricing, no surprises. Everything included.",
    "pricing.popular": "Most Popular",
    "pricing.starter.name": "STARTER",
    "pricing.starter.subtitle": "Landing Page",
    "pricing.starter.price": "From €490",
    "pricing.starter.feature1": "5-page website (Home, About, Services, Gallery, Contact)",
    "pricing.starter.feature2": "Custom responsive design",
    "pricing.starter.feature3": "Contact form",
    "pricing.starter.feature4": "Basic SEO",
    "pricing.starter.feature5": "1 year hosting included",
    "pricing.starter.feature6": "1 month support",
    "pricing.starter.cta": "Get Started",
    
    "pricing.resto.name": "RESTO PACK",
    "pricing.resto.subtitle": "Landing Page",
    "pricing.resto.price": "From €790",
    "pricing.resto.feature1": "Everything in Starter +",
    "pricing.resto.feature2": "QR Code digital menu",
    "pricing.resto.feature3": "Optimized Google My Business",
    "pricing.resto.feature4": "Google Maps indexing",
    "pricing.resto.feature5": "Unlimited edits for 2 months",
    "pricing.resto.feature6": "Priority support for 3 months",
    "pricing.resto.cta": "Choose this pack",
    
    "pricing.transform.name": "DIGITAL TRANSFORM",
    "pricing.transform.subtitle": "SaaS Application",
    "pricing.transform.price": "Custom quote",
    "pricing.transform.feature1": "Custom SaaS app or business tool",
    "pricing.transform.feature2": "Needs analysis + specifications",
    "pricing.transform.feature3": "Full development",
    "pricing.transform.feature4": "Usage training",
    "pricing.transform.feature5": "Dedicated support for 6 months",
    "pricing.transform.feature6": " ",
    "pricing.transform.cta": "Get in touch",
    
    // Contact
    "contact.title": "Let's Talk About Your Project",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.projecttype": "Project type",
    "contact.message": "Message",
    "contact.type1": "Landing Page",
    "contact.type2": "Digital Menu",
    "contact.type3": "SaaS Application",
    "contact.type4": "Other",
    "contact.send": "Send my request",
    "contact.location": "France",
    "contact.success": "Message sent successfully!",
    "contact.error": "Error sending message. Please try again.",
    
    // Footer
    "footer.tagline": "Your digital partner",
    "footer.home": "Home",
    "footer.rights": "All rights reserved",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("lvn-language") as Language;
    if (saved && (saved === "fr" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("lvn-language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}