"use client";

import { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Section from "../components/ui/Section";
import Pill from "./ui/Pill";
import Anchor from "../components/ui/Anchor";
import { products } from "../data/data";
import Card from "../components/ui/Card";

function Shop({ setActiveSection }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProduct = products[activeIndex];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <Section id="shop" className="py-12 sm:py-16 lg:py-24">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between px-4 sm:px-0">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Products
          </h2>
          <p className="mt-1 text-sm text-neutral-600 sm:text-base">
            Simple to adopt. Enterprise when needed.
          </p>
        </div>

        {/* Pills */}
        <div className="flex justify-center sm:justify-end flex-wrap gap-2">
          <Pill>#ffffff</Pill>
          <Pill>#000000</Pill>
          <Pill>grey</Pill>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation Arrows (Desktop) */}
        <button
          onClick={prev}
          className="hidden lg:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md border hover:bg-gray-50 transition z-10"
          aria-label="Previous product"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className="hidden lg:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md border hover:bg-gray-50 transition z-10"
          aria-label="Next product"
        >
          <FaChevronRight />
        </button>

        {/* Product Card */}
        <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {/* Content */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:pr-4 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">{currentProduct.name}</h3>
              <p className="text-sm text-neutral-700 leading-relaxed mb-5 sm:text-base">
                {currentProduct.description}
              </p>

              <ul className="space-y-3 mb-6">
                {currentProduct.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-md bg-black text-white">
                      {f.icon}
                    </span>
                    <span className="text-sm text-neutral-800">{f.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Anchor
                  href={currentProduct.link.trim()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center gap-2 px-5 py-3 text-center bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Learn More <FaArrowRight />
                </Anchor>
                <span className="text-center text-xs text-neutral-600 pt-2 sm:pt-0">
                  {currentProduct.pricing}
                </span>
              </div>
            </div>

            {/* Image — ONLY shown on large screens (lg and up) */}
            <div className="hidden lg:block w-full lg:w-1/2 relative bg-neutral-100 overflow-hidden">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </Card>

        {/* Mobile Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === activeIndex ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to product ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Shop;