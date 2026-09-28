"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Calendar, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { educationData } from "@/data/portfolioData";

export default function EducationSection() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="education" className="py-24 relative bg-[#010208] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
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

        {/* Top Border Line */}
        <div className="w-full h-px bg-slate-800/80 mb-6" />

        {/* Education Item Rows */}
        <div className="space-y-6">
          {educationData.map((item, idx) => {
            const isExpanded = !!expandedItems[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="py-6 sm:py-8 border-t border-b border-slate-800/60"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                  {/* Left Column: Icon + Text Content */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon Card */}
                    <div className="w-12 h-12 rounded-2xl border border-purple-500/30 bg-[#120a24] flex items-center justify-center text-purple-400 shrink-0 shadow-lg shadow-purple-950/50 mt-1">
                      <GraduationCap className="w-6 h-6 text-purple-400" />
                    </div>

                    {/* Content Block */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#9b85c1] uppercase block">
                        EDUCATION
                      </span>

                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase font-sans">
                        {item.institution}
                      </h3>

                      <div className="text-xs sm:text-sm font-bold tracking-wider text-purple-400 uppercase">
                        {item.degree}
                      </div>

                      {/* View Details Toggle */}
                      <div className="pt-2">
                        <button
                          onClick={() => toggleDetails(item.id)}
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-widest text-slate-400 hover:text-purple-300 uppercase transition-colors cursor-pointer group"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5 text-purple-400" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-purple-400" />
                          )}
                          <span>{isExpanded ? "HIDE DETAILS" : "VIEW DETAILS"}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Pill Badges */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0 self-start sm:self-center">
                    {/* CGPA Badge */}
                    <div className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold flex items-center gap-2 shadow-inner">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>CGPA: {item.cgpa}</span>
                    </div>

                    {/* Date Badge */}
                    <div className="px-4 py-1.5 rounded-full bg-[#0e081c] border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold flex items-center gap-2 shadow-inner">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{item.year} - PRESENT</span>
                    </div>
                  </div>
                </div>

                {/* Collapsible Details Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden pt-6 space-y-4"
                    >
                      {item.description && (
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light bg-[#0e081c]/90 p-5 rounded-2xl border border-[#1e1533]">
                          {item.description}
                        </p>
                      )}

                      {item.highlights && item.highlights.length > 0 && (
                        <div className="bg-[#0e081c]/60 p-5 rounded-2xl border border-[#1e1533] space-y-2">
                          <div className="text-xs font-mono font-bold text-[#9b85c1] uppercase tracking-wider mb-2">
                            Key Highlights
                          </div>
                          <ul className="space-y-2">
                            {item.highlights.map((hl, hIdx) => (
                              <li key={hIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 font-light">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Bottom Divider */}
        <div className="relative py-12 flex items-center justify-center">
          <div className="w-full h-px bg-slate-800/80 absolute inset-0 top-1/2 -translate-y-1/2" />
          <span className="relative z-10 px-6 bg-[#010208] text-[10px] font-mono font-bold tracking-[0.25em] text-slate-500 uppercase">
            TIMELINE START
          </span>
        </div>
      </div>
    </section>
  );
}
