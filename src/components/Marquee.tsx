"use client";

import { Sparkles } from "lucide-react";

export function Marquee() {
  const items = [
    "Sites Web Professionnels",
    "Menus Digitaux",
    "Applications SaaS",
    "Transformation Digitale",
    "Résultats Rapides",
    "Propulsé par l'IA",
    "LVN Agency",
  ];

  return (
    <div className="relative overflow-hidden bg-surface border-y border-border py-6">
      <div className="flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="font-display text-xl font-semibold text-text-primary">
                {item}
              </span>
              <Sparkles size={16} className="mx-8 text-accent" />
            </div>
          ))}
        </div>

        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {items.map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="font-display text-xl font-semibold text-text-primary">
                {item}
              </span>
              <Sparkles size={16} className="mx-8 text-accent" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-4">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {items.map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="font-display text-xl font-semibold text-text-secondary">
                {item}
              </span>
              <Sparkles size={16} className="mx-8 text-accent-warm" />
            </div>
          ))}
        </div>

        <div className="flex animate-marquee-reverse whitespace-nowrap" aria-hidden="true">
          {items.map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="font-display text-xl font-semibold text-text-secondary">
                {item}
              </span>
              <Sparkles size={16} className="mx-8 text-accent-warm" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}