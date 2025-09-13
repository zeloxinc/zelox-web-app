import React from "react";
import { useState, useEffect } from 'react';

export default function Hero() {
  const [counted, setCounted] = useState({ clients: 0, uptime: 0, support: 0 });

  // Animation logic for counting up numbers
  useEffect(() => {
    const durations = { clients: 2000, uptime: 2500, support: 1500 };
    const targets = { clients: 100, uptime: 99.9, support: 24 };

    Object.keys(targets).forEach((key) => {
      let start = 0;
      const end = targets[key as keyof typeof targets];
      const duration = durations[key as keyof typeof durations];
      const step = end / (duration / 16); // ~60fps

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounted((prev) => ({
          ...prev,
          [key]: parseFloat(start.toFixed(1)),
        }));
      }, 16);
    });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <div className="space-y-6 text-center">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl text-gray-900 leading-tight">
            <span className="lg:inline-block">ZELOX</span>
            <span className="block lg:inline-block text-3xl sm:text-5xl lg:text-6xl text-gray-600 font-light mt-2 lg:mt-0">
              INDUSTRIES
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-2xl mx-auto text-left lg:text-center">
            Where your future meets innovation
          </p>
        </div>

        {/* CTA buttons — always horizontal, smaller on mobile */}
        <div className="mt-12 flex flex-row gap-4 justify-center items-center">
          <button className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 text-sm sm:text-base">
            Explore Products
          </button>

          <a
            href="https://wa.me/+254112099003"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>

        {/* Stats or features — with animated counters */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              {Math.floor(counted.clients)}
              {counted.clients % 1 !== 0 && counted.clients < 100 ? '.' + Math.floor((counted.clients % 1) * 10) : ''}
            </div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>

          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              {counted.uptime.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>

          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              {counted.support}+
            </div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}