"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, CheckCircle, School } from "lucide-react";
import { educationData } from "@/data/portfolioData";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative bg-[#010208] overflow-hidden border-t border-white/5">
      {/* Background Radial Glow (Placed BEHIND -z-10) */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none -z-10 opacity-20"
        style={{ background: "#4F46E5" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4"
          >
            Education & <span className="text-gradient">Qualifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg font-light"
          >
            Academic degree, university honors, and core computer science background.
          </motion.p>
        </div>

        {/* Education Items List */}
        <div className="space-y-6 max-w-2xl mx-auto">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#0e0f17]/90 border border-slate-800/90 hover:border-indigo-500/40 shadow-xl transition-all duration-300 group"
            >
              {/* Top Row: Year Pill + CGPA Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Graduated {item.year}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CGPA: {item.cgpa}</span>
                </span>
              </div>

              {/* Degree Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors mb-2">
                {item.degree}
              </h3>

              {/* Institution Name */}
              <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm sm:text-base mb-4">
                <School className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{item.institution}</span>
              </div>

              {/* Description */}
              {item.description && (
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mb-5">
                  {item.description}
                </p>
              )}

              {/* Highlights Bullet List */}
              {item.highlights && item.highlights.length > 0 && (
                <ul className="space-y-2 pt-3 border-t border-slate-800/80">
                  {item.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
