import { motion } from "framer-motion";
import Section from "./ui/Section";
import Pill from "./ui/Pill";
import Anchor from "./ui/Anchor";

function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-neutral-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),rgba(0,0,0,0)_60%)]" />
      <Section className="py-20 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <Pill>Premium. Minimal. Built for scale.</Pill>
          <h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Software that runs your properties and your pipeline.
          </h1>
          <p className="max-w-2xl text-neutral-600">
            ZeloxIndustries ships no-nonsense software that looks premium, works offline when you need it, and plays nice with your stack.
          </p>
          <div className="flex flex-wrap gap-3">
            <Anchor href="#shop">Explore Products</Anchor>
            <a
              href="https://github.com/zeloxinc"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
            >
              View GitHub
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Hero;