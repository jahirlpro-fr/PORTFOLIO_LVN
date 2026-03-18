"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Metrics() {
  const { t } = useLanguage();

  const metrics = [
    { value: 2, label: t("metrics.clients") },
    { value: 4, label: t("metrics.projects") },
    { value: 1, label: t("metrics.saas") },
    { value: 100, label: t("metrics.ontime"), suffix: "%" },
  ];

  return (
    <section className="py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-text-secondary text-sm md:text-base">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}