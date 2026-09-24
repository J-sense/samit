"use client";

import { motion } from "framer-motion";
import { Zap, Heart, Sparkles, ArrowUp } from "lucide-react";
import confetti from "canvas-confetti";

export default function Footer() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.9 },
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="showcase" className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-pink-500 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Samit Next.js App</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm font-light">
              Crafted with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion for high-impact visual experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#playground" className="hover:text-indigo-400 transition-colors">
                  Interactive Playground
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-400 transition-colors">
                  Features & Modules
                </a>
              </li>
            </ul>
          </div>

          {/* Interaction */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Celebration</h4>
            <button
              onClick={triggerConfetti}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold text-sm shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 mb-3"
            >
              <Sparkles className="w-4 h-4" />
              <span>Trigger Confetti</span>
            </button>
            <button
              onClick={scrollToTop}
              className="w-full py-2.5 rounded-xl glass-card text-slate-300 hover:text-white font-medium text-xs border border-slate-800 flex items-center justify-center gap-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Samit Next.js Motion App. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/40 animate-pulse" />
            <span>using Next.js & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
