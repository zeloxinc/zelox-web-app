"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.05 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="sticky top-0 z-50 pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-text">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-hubot">
            <span className="text-2xl tracking-tight font-aclonica uppercase text-slate-900">
              Zelox 
              <span className="text-lg ml-1 font-base font-hubot">Shop</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center gap-6 text-base font-medium">
              <a href="#Products" className="text-slate-600 hover:text-slate-900">
                Shop
              </a>
              <a href="#About" className="text-slate-600 hover:text-slate-900">
                About
              </a>
            </nav>
            <Button link="#waitlist" variant="default" text="Join Waitlist" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setOpen(!open)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile nav with animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="md:hidden px-4 py-2 pb-6 bg-white border border-gray-400 rounded-lg mx-4"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="space-y-2 font-text font-medium">
              {[
                { text: "#shop", link: "Products" },
                { text: "#about", link: "About" },
                { text: "#testimonials", link: "Testimonials" },
                { text: "#contact", link: "Contact" },

              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
                  variants={linkVariants}
                >
                  {item.text}
                </motion.a>
              ))}

              <div className="border-t border-gray-400 mb-6" />
              <motion.div variants={linkVariants}>
              <Button link="https://wa.me/+254112099003" variant="default" text="Contact For Custom Software" fullWidth />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}