"use client";

import { FaArrowRight } from "react-icons/fa";
import Section from "./ui/Section";
import Anchor from "./ui/Anchor";
import Card from "./ui/Card";

function About({ setActiveSection }) {
  const handleViewProducts = () => {
    setActiveSection("products");
  };

  return (
    <Section id="about" className="py-16 lg:py-20 mt-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            About Zelox Industries
          </h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Zelox Industries is a Kenyan-born tech company building{" "}
            <span className="font-semibold">future-proof software</span> 
            for property managers, sales teams, and ambitious businesses. 
            Our mission: ship tools that are fast, reliable, and beautiful — 
            without drowning you in complexity.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            We started with two flagship products —{" "}
            <span className="font-medium">Apartment Management System</span> 
            and <span className="font-medium">Sales Tracking System</span> — 
            designed to streamline ops, cut paperwork, and give teams the 
            clarity they need to grow.
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

        {/* Right column */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Why teams pick us</h3>
          <ul className="mt-4 space-y-3 text-neutral-700">
            <li>• Sleek, professional UI that clients trust.</li>
            <li>• Works online *and* offline — no excuses.</li>
            <li>• Scales from solo landlords to enterprise ops.</li>
            <li>• Integrates with MPesa, banks, and your stack.</li>
            <li>• Backed by a team that ships fast & listens.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Anchor href="https://wa.me/+254112099003" className="flex items-center gap-2">
              Book a Demo <FaArrowRight />
            </Anchor>
            <Anchor
              as="button"
              onClick={handleViewProducts}
              className="flex items-center gap-2 border border-neutral-300 text-neutral-800 hover:bg-neutral-50"
            >
              View Products
            </Anchor>
          </div>
        </Card>
      </div>
    </Section>
  );
}

export default About;
