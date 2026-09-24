"use client";

import { motion } from "framer-motion";
import { Cpu, CheckCircle2 } from "lucide-react";
import { skillsCategories } from "@/data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-slate-950/80 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Core technologies and tools I utilize to craft modern web applications from frontend interfaces to backend servers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                <span>{category.category}</span>
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm font-medium text-slate-300">
                      <span>{skill.name}</span>
                      <span className="text-indigo-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + sIdx * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
