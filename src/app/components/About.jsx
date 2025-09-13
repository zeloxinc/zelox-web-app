"use client";

import { FaArrowRight } from "react-icons/fa";
import Section from "./ui/Section";
import Anchor from "./ui/Anchor";
import Card from "./ui/Card";
import { useState, useContext, createContext } from "react";

// If you want to avoid prop drilling, create a context (optional)
// Or just pass setActiveSection as prop — your choice.

function About({ setActiveSection }) {
  const handleViewProducts = () => {
    setActiveSection("products"); // Switches to Shop section
  };

  return (
    <Section id="about" className="py-16 lg:py-20 mt-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left column: Company story */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            About Zelox Industries
          </h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Zelox Industries is a Kenyan-born tech company building{" "}
            <span className="font-semibold">practical, future-proof software </span> 
            for property managers, sales teams, and growing businesses. 
            Our mission is simple: deliver tools that are fast, reliable, 
            and beautiful — without drowning you in complexity.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            We started with two flagship products —{" "}
            <span className="font-medium">Apartment Management System</span> 
            and <span className="font-medium">Sales Tracking System</span> — 
            designed to streamline operations, cut paperwork, and give teams 
            the clarity they need to grow.
          </p>

          {/* Features grid */}
          <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { title: "Offline-first UX", desc: "Works even with poor or no internet." },
              { title: "Secure by default", desc: "Data is encrypted and backed up automatically." },
              { title: "API-first design", desc: "Integrates cleanly with your existing systems." },
              { title: "Analytics-ready", desc: "Turn raw data into actionable insights instantly." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-200 p-4 hover:border-neutral-300 transition"
              >
                <dt className="font-semibold">{item.title}</dt>
                <dd className="text-sm text-neutral-600">{item.desc}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column: Value props + CTA */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Why teams pick us</h3>
          <ul className="mt-4 space-y-3 text-neutral-700">
            <li>• Sleek, professional UI that clients trust.</li>
            <li>• Built for real-world conditions (online & offline).</li>
            <li>• Scales from a single landlord to enterprise-level ops.</li>
            <li>• Plays nice with MPesa, banks, and your existing stack.</li>
            <li>• Backed by a team that ships fast and listens to feedback.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Anchor href="https://wa.me/+254112099003">
              Book a Demo <FaArrowRight />
            </Anchor>
            <button
              onClick={handleViewProducts}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50 transition-colors"
            >
              View Products
            </button>
          </div>
        </Card>
      </div>
    </Section>
  );
}

export default About;