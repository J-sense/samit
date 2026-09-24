"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 bg-[#010208] overflow-hidden">
      {/* Scroll Down Indicator */}
      <div className="flex flex-col items-center justify-center mb-16 space-y-1 relative z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b85c1]">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-[#9b85c1]" />
        </motion.div>
      </div>

      {/* Central Purple Glow Overlay - Placed ABOVE (z-20) text & middle card */}
      <div
        className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[550px] h-[460px] rounded-full blur-[85px] pointer-events-none z-20 mix-blend-screen opacity-95"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(113, 39, 186, 0.85) 0%, #7127BA 45%, rgba(113, 39, 186, 0.25) 75%, transparent 90%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-1">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9b85c1] block">
            WHAT I DO
          </span>
          <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight">
            <span className="font-light text-[#94a3b8]">My </span>
            <span className="font-bold text-white">Services</span>
          </h2>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: UI/UX Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ y: -6 }}
            className="p-8 sm:p-9 rounded-[28px] bg-[#0e081c]/90 backdrop-blur-xl border border-[#1e1533] flex flex-col justify-between hover:border-[#7127BA]/50 transition-all duration-300 shadow-2xl"
          >
            <div>
              <div className="w-14 h-14 rounded-[18px] bg-[#7127BA] flex items-center justify-center text-white mb-8 shadow-lg shadow-[#7127BA]/30">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>

              <p className="text-[13px] text-[#94a3b8] leading-relaxed font-light">
                Crafting intuitive interfaces and delightful user experiences that convert visitors into loyal customers.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Web Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="p-8 sm:p-9 rounded-[28px] bg-[#0e081c]/90 backdrop-blur-xl border border-[#1e1533] flex flex-col justify-between hover:border-[#7127BA]/50 transition-all duration-300 shadow-2xl"
          >
            <div>
              <div className="w-14 h-14 rounded-[18px] bg-[#7127BA] flex items-center justify-center text-white mb-8 shadow-lg shadow-[#7127BA]/30">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="6" y="6" width="12" height="12" rx="2" transform="rotate(45 12 12)" fill="currentColor" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-[#7127BA] mb-3">Web Design</h3>

              <p className="text-[13px] text-[#94a3b8] leading-relaxed font-light">
                Building beautiful, responsive websites that blend aesthetics with powerful functionality and performance.
              </p>
            </div>
          </motion.div>

          {/* Card 3: App Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="p-8 sm:p-9 rounded-[28px] bg-[#0e081c]/90 backdrop-blur-xl border border-[#1e1533] flex flex-col justify-between hover:border-[#7127BA]/50 transition-all duration-300 shadow-2xl"
          >
            <div>
              <div className="w-14 h-14 rounded-[18px] bg-[#7127BA] flex items-center justify-center text-white mb-8 shadow-lg shadow-[#7127BA]/30">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2.5L20.5 7.4V16.6L12 21.5L3.5 16.6V7.4L12 2.5Z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">App Design</h3>

              <p className="text-[13px] text-[#94a3b8] leading-relaxed font-light">
                Designing mobile and desktop apps with clean architecture, pixel-perfect visuals, and seamless flows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
