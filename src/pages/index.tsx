import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Ecosystem } from "@/components/Ecosystem";
import { Marquee } from "@/components/Marquee";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO
        title="LVN Agency — Consultant Digital & Développeur Web"
        description="Transformation digitale pour commerces et entreprises. Sites web, applications SaaS, menus digitaux propulsés par l'IA."
        image="/og-image.png"
      />
      <div className="grain-overlay">
        <Navbar />
        <main>
          <Hero />
          <Metrics />
          <About />
          <Services />
          <Projects />
          <Ecosystem />
          <Marquee />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}