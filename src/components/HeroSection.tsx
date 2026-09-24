"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-12 pb-20 sm:pt-36 sm:pb-28 min-h-[95vh] flex items-center bg-[#010208] overflow-hidden">
      {/* Top Left Ambient Radial Glow (#7127BA33) */}
      <div
        className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none"
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

              {/* Floating Badge 1 (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute left-[-20px] bottom-[10%] figma-card px-5 py-3 rounded-2xl shadow-xl border border-white/10"
              >
                <div className="text-xl font-black text-white">30+</div>
                <div className="text-[11px] text-slate-400 font-medium">Projects Done</div>
              </motion.div>

              {/* Floating Badge 2 (Right Middle) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                className="absolute right-[-20px] top-[40%] figma-card px-5 py-3 rounded-2xl shadow-xl border border-white/10"
              >
                <div className="text-xl font-black text-white">2 yrs</div>
                <div className="text-[11px] text-slate-400 font-medium">Experience</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
