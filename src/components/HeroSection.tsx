"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-12 pb-20 sm:pt-1 sm:pb-28 min-h-[95vh] flex items-center bg-[#010208] overflow-hidden">
      {/* Top Left Corner Soft Ambient Glow */}
      <div
        className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none z-0"
        style={{ background: "#7127BA33" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8 mt-40">
            {/* Top Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181127]/80 border border-white/10 text-slate-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>A UI/UX Designer</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[65px] sm:text-7xl lg:text-[65px] font-black tracking-tight leading-none"
            >
              <span className="text-white">Samit</span>{" "}
              <span className="text-gradient-silver">Protim Das</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl text-slate-400 max-w-xl font-light leading-relaxed"
            >
              I&apos;m a designer specialising in{" "}
              <strong className="text-white font-bold">UI/UX</strong> and{" "}
              <strong className="text-white font-bold">Interaction Design</strong>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-[#7127BA] rounded-full text-xs font-bold uppercase tracking-wider btn-purple-primary shadow-xl shadow-purple-600/30 flex items-center gap-2.5 group"
              >
                <span>VIEW WORKS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider btn-outline-dark"
              >
                DOWNLOAD CV
              </a>
            </motion.div>

            {/* Bottom Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-lg"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">30+</div>
                <div className="text-xs text-slate-400 font-medium">Live Projects</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">2</div>
                <div className="text-xs text-slate-400 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">25+</div>
                <div className="text-xs text-slate-400 font-medium">Happy Clients</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Portrait Photo & Floating Cards) */}
          <div className="lg:col-span-5 relative flex items-center justify-center -mt-12 sm:-mt-20 lg:-mt-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-xl sm:max-w-2xl scale-110 sm:scale-115 lg:scale-125 origin-top"
            >
              {/* Photo Frame */}
              <div className="relative overflow-hidden">
                <img
                  src="/heroimg.png"
                  alt="Samit Protim Das"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010208] via-[#010208]/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center space-y-1 z-20">
        <a href="#services" className="flex flex-col items-center justify-center space-y-1 group cursor-pointer" aria-label="Scroll to services">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b85c1] group-hover:text-purple-300 transition-colors">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-3.5 h-3.5 text-[#9b85c1] group-hover:text-purple-300 transition-colors" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
