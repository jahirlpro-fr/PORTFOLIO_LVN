import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // ── Backgrounds ──
                bg: "#ffffff",
                "bg-secondary": "#f8f7f5",
                surface: "#f4f3f1",
                "surface-hover": "#eeede9",

                // ── Borders ──
                border: "#e8e7e3",
                "border-dark": "#d0cfc9",

                // ── Text ──
                "text-primary": "#111111",
                "text-secondary": "#2e2e2e",
                "text-muted": "#888888",
                "text-light": "#cccccc",

                // ── Accent ──
                accent: "#0099ff",
                "accent-dark": "#0077cc",
            },

            fontFamily: {
                display: ["Amiri", "Georgia", "serif"],
                body: ["Poppins", "system-ui", "sans-serif"],
                sans: ["Poppins", "system-ui", "sans-serif"],
            },

            fontSize: {
                // Titres hero style Bruno
                "hero": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "display": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
                // Labels uppercase
                "label": ["12px", { lineHeight: "1", letterSpacing: "0.12em" }],
                // Stats
                "stat": ["clamp(3rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
            },

            letterSpacing: {
                tight: "-0.02em",
                tighter: "-0.03em",
                wide: "0.08em",
                widest: "0.12em",
            },

            // Animations marquee pour le ticker de logos
            animation: {
                marquee: "marquee 30s linear infinite",
                "marquee-slow": "marquee 50s linear infinite",
                "fade-in-up": "fadeInUp 0.7s ease forwards",
                "fade-in": "fadeIn 0.6s ease forwards",
            },

            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                fadeInUp: {
                    from: { opacity: "0", transform: "translateY(24px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
            },

            // Espacements généreux style Bruno
            spacing: {
                "18": "4.5rem",
                "22": "5.5rem",
                "30": "7.5rem",
                "36": "9rem",
            },

            borderRadius: {
                "xl": "0.75rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
            },

            maxWidth: {
                "8xl": "88rem",
                "9xl": "96rem",
            },
        },
    },
    plugins: [],
};

export default config;