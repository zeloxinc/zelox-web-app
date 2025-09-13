// src/components/NavBar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
interface HeaderProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "about", label: "About" },
    { id: "testimonials", label: "Testimonies" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setOpen(false);
  };

  // Detect scroll to toggle background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-white/30 backdrop-blur-md border-b border-white/20`}
    >


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 text-lg tracking-wide text-gray-900">
            ZELOX Industries
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? "text-gray-900 font-bold tracking-wider"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                style={{
                  textTransform:
                    activeSection === item.id ? "uppercase" : "capitalize",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {open ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-4 py-3 pb-6 bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg mx-4 mt-2 animate-fade-in">
            <div className="space-y-2 font-medium text-sm">
              {navItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? "bg-gray-100 text-gray-900 font-bold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{
                    textTransform:
                      activeSection === item.id ? "uppercase" : "capitalize",
                  }}
                >
                  {item.label}
                </button>
              ))}

              <div className="border-t border-gray-300 my-4" />

              <div>
                <Button
                  link="https://wa.me/+254112099003"
                  variant="default"
                  text="Contact For Custom Software"
                  fullWidth
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
