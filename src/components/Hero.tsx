"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, ArrowRight, Play, Cpu, Layers, Activity, Box } from "lucide-react";
import confetti from "canvas-confetti";

export default function Hero() {
  const handleLaunch = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-pink-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Animated Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-sm font-medium shadow-inner shadow-indigo-500/10">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Next.js + TypeScript + Framer Motion Ready</span>
            </div>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-none"
          >
            Build Modern <br />
            <span className="text-gradient">Animated Web Apps</span> in Samit
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Power your React & Next.js user interfaces with liquid-smooth spring physics, layout animations, and reactive micro-interactions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
              whileTap={{ scale: 0.96 }}
              onClick={handleLaunch}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-base shadow-xl flex items-center gap-3 group"
            >
              <span>Explore Interactive Demos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="#playground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-2xl glass-card text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 hover:border-indigo-500/50 flex items-center gap-2"
            >
              <Play className="w-4 h-4 text-indigo-400 fill-indigo-400/30" />
              <span>Live Playground</span>
            </motion.a>
          </motion.div>

          {/* Feature Badges Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Cpu, label: "Next.js App Router", sub: "Turbopack Ready" },
              { icon: Layers, label: "Framer Motion 12", sub: "Hardware Accelerated" },
              { icon: Activity, label: "Spring Physics", sub: "60 FPS Animations" },
              { icon: Box, label: "TypeScript Strict", sub: "100% Type Safe" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 rounded-2xl glass-card text-left border border-slate-800/80 hover:border-indigo-500/30 transition-all"
              >
                <feature.icon className="w-6 h-6 text-indigo-400 mb-2" />
                <div className="text-sm font-semibold text-white">{feature.label}</div>
                <div className="text-xs text-slate-400">{feature.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Interactive 3D Card Visual Showcase */}
      <div className="max-w-5xl mx-auto mt-16 px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          whileHover={{ rotateX: 2, rotateY: -2 }}
          className="relative rounded-3xl glass-card p-6 sm:p-8 border border-slate-700/60 shadow-2xl shadow-indigo-950/50 overflow-hidden"
        >
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-400 font-mono ml-2">samit-animation-engine.ts</span>
            </div>
            <div className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-mono">
              Live Motion Canvas
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Motion Box 1 */}
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              whileDrag={{ scale: 1.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/60 border border-indigo-500/30 cursor-grab active:cursor-grabbing text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold"
              >
                ⚛️
              </motion.div>
              <h3 className="text-base font-bold text-white mb-1">Drag Me Around</h3>
              <p className="text-xs text-slate-400">Interactive Framer Motion drag physics with elastic snap back.</p>
            </motion.div>

            {/* Motion Box 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-purple-950/60 border border-purple-500/30 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold"
              >
                ✨
              </motion.div>
              <h3 className="text-base font-bold text-white mb-1">Keyframe Pulse</h3>
              <p className="text-xs text-slate-400">Continuous hardware accelerated multi-step keyframe loops.</p>
            </motion.div>

            {/* Motion Box 3 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-pink-950/60 border border-pink-500/30 text-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-tr from-pink-500 to-amber-500 flex items-center justify-center text-white font-bold"
              >
                🚀
              </motion.div>
              <h3 className="text-base font-bold text-white mb-1">Spring Bounce</h3>
              <p className="text-xs text-slate-400">Natural momentum and stiffness modeling for fluid movement.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
