"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Section from "../components/ui/Section";
import Pill from "./ui/Pill";
import Anchor from "../components/ui/Anchor";
import { products } from "../data/data";
import Card from "../components/ui/Card";

function Shop() {
  return (
    <Section id="shop" className="py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
            Products
          </h2>
          <p className="mt-1 text-sm text-neutral-600 sm:text-base">
            Simple to adopt. Enterprise when needed.
          </p>
        </div>

        {/* Pills hidden on very small screens */}
        <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-2 sm:self-end">
          <Pill>#ffffff</Pill>
          <Pill>#000000</Pill>
          <Pill>grey</Pill>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {products.map((p) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              {/* Image */}
              <div className="aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold sm:text-xl">{p.name}</h3>
                <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                  {p.description}
                </p>

                <ul className="mt-4 space-y-2 sm:space-y-3">
                  {p.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-neutral-800 sm:gap-3"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-lg border border-neutral-200 bg-white sm:h-6 sm:w-6">
                        {f.icon}
                      </span>
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center">
                  <Anchor href={p.link} className="w-full sm:w-auto justify-center">
                    Learn More <FaArrowRight />
                  </Anchor>
                  <span className="text-center text-sm text-neutral-600 sm:text-left">
                    {p.pricing}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Shop;
