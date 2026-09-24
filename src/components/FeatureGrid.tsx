"use client";

import { motion } from "framer-motion";
import { Zap, Flame, Code2, Sparkles, Layers, Shield, Terminal, Orbit } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Next.js App Router pre-configured with TypeScript, Tailwind CSS v4, and Framer Motion.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Flame,
    title: "60 FPS Performance",
    description: "Hardware-accelerated CSS transforms for buttery smooth mobile and desktop animation.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Orbit,
    title: "Declarative Motion API",
    description: "Write intuitive motion components using clean React props like initial, animate, and exit.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Code2,
    title: "TypeScript Strictly Typed",
    description: "Full autocomplete and type safety for animation variants, gesture props, and transition timing.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Layers,
    title: "Layout Morphing",
    description: "Morph component positions dynamically across re-renders with zero complex calculations.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Built with SEO best practices, modern typography, glassmorphism UI, and dark mode theme.",
    color: "from-emerald-500 to-green-500",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built For Developers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything You Need For <span className="text-gradient">Dynamic Motion</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Empower your Next.js application in Samit with modern visual design, animations, and high performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color} p-[2px] mb-6 inline-block`}>
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Samit / Module {index + 1}</span>
                  <Terminal className="w-4 h-4 text-slate-600" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
