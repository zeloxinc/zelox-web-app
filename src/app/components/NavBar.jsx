"use client";
import React, { useState } from "react";
import Anchor from "./ui/Anchor";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#shop", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-2 font-black tracking-tight text-xl"
        >
          <span className="h-6 w-6 rounded bg-black inline-block" />
          Zelox<span className="text-neutral-500">Industries</span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm text-neutral-700"
          role="navigation"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-black transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="hidden md:flex items-center gap-2">
          <Anchor
            href="https://wa.me/+254112099003"
            className="flex items-center gap-1 font-medium hover:text-green-600 transition-colors"
          >
            Talk to Sales <FaArrowRight />
          </Anchor>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-neutral-100 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-neutral-200 transform transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col p-4 gap-4 text-neutral-700" role="navigation">
          {navLinks.map(({ href, label }) => (
            <Anchor
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition-colors"
            >
              {label}
            </Anchor>
          ))}
          <a
            href="https://wa.me/+254112099003"
            className="flex items-center gap-1 font-medium mt-2 hover:bg-white hover:text-black transition-colors"
          >
            Talk to Sales <FaArrowRight />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
