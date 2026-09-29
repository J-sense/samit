"use client";

import { useState } from "react";
import { experiencesData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExperienceSection() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "exp-1": false,
  });

  const toggleCollapse = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-24 relative bg-[#010208] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>Career Path</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg font-light"
          >
            A timeline of my professional roles, engineering contributions, and team leadership.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-indigo-500 before:to-slate-800">
          {experiencesData.map((item, idx) => {
            const isExpanded = !!expandedItems[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline node icon */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#010208] border-2 border-purple-500 flex items-center justify-center text-purple-400 shadow-lg shadow-purple-500/30 z-10">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Content Box */}
                <div className="w-[calc(100%-3rem)] sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 p-6 sm:p-8 rounded-3xl bg-[#0e0f17]/90 backdrop-blur-xl border border-slate-800 space-y-3 shadow-xl hover:border-purple-500/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      <span>{item.period}</span>
                    </span>
                    {item.location && (
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        <span>{item.location}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-0.5">{item.role}</h3>
                  <div className="text-sm font-semibold text-purple-400">{item.company}</div>

                  {item.summary && !isExpanded && (
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light pt-1">
                      {item.summary}
                    </p>
                  )}

                  {/* Collapse / Expand Toggle Button & Collapsible Description */}
                  {item.description && (
                    <div className="pt-2">
                      <button
                        onClick={() => toggleCollapse(item.id)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Collapse" : "Expand Details"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 text-purple-400" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-purple-400" />
                        )}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden pt-3 space-y-3"
                          >
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                              {item.description}
                            </p>

                            {item.achievements && item.achievements.length > 0 && (
                              <div className="space-y-2 pt-2 flex flex-col">
                                {item.achievements.map((ach, aIdx) => (
                                  <div key={aIdx} className="inline-flex items-start sm:items-center gap-2.5 px-4 py-2.5 rounded-3xl border border-slate-700/80 bg-[#0c0e14]/50">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shrink-0 mt-1.5 sm:mt-0" />
                                    <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider leading-relaxed">{ach}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
