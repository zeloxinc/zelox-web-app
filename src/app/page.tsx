"use client";

import React, { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

type SectionKey = "home" | "products" | "about" | "testimonials";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  // Define sections with full viewport height
  const renderSection = (key: SectionKey) => {
    switch (key) {
      case "home":
        return (
          <div className="w-full">
            <div className="min-h-screen snap-start">
              <Hero />
            </div>
            <div className="min-h-screen snap-start">
              <Shop setActiveSection={setActiveSection} />
            </div>
            <div className="min-h-screen snap-start">
              <About setActiveSection={setActiveSection} />
            </div>
            <div className="min-h-h-screen snap-start">
              <Testimonials setActiveSection={setActiveSection} />
            </div>
            <Footer />
          </div>
        );
      case "products":
        return (
          <div className="w-full">
            <div className="h-screen snap-start">
              <Shop setActiveSection={setActiveSection} />
            </div>
            <Footer />
          </div>
        );
      case "about":
        return (
          <div className="w-full">
            <div className="h-screen snap-start">
              <About setActiveSection={setActiveSection} />
            </div>
            <Footer />
          </div>
        );
      case "testimonials":
        return (
          <div className="w-full">
            <div className="h-screen snap-start">
              <Testimonials setActiveSection={setActiveSection} />
            </div>
            <Footer />
          </div>
        );
      default:
        return (
          <div className="h-screen snap-start">
            <Hero />
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-white relative overflow-y-auto snap-y snap-mandatory">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px),
            radial-gradient(circle, rgba(51,65,85,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px, 24px 24px, 24px 24px",
          backgroundPosition: "0 0, 0 0, 0 0",
          opacity: 0.5,
        }}
      />

      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main ref={mainRef} className="w-full">
        <div key={activeSection} className="animate-fade-in-section transition-all duration-500">
          {renderSection(activeSection)}
        </div>
      </main>
    </div>
  );
}