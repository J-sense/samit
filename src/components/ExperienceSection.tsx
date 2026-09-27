"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Check, Calendar, Building2, School, Award, CheckCircle } from "lucide-react";
import { profileDetails, educationData } from "@/data/portfolioData";

interface ExperienceRecord {
  id: string;
  role: string;
  period: string;
  company: string;
  statusTag?: string;
  isCurrent?: boolean;
}

const experienceGroups: {
  id: string;
  showUserHeader: boolean;
  items: (ExperienceRecord | { isDivider: true; text: string })[];
}[] = [
    {
      id: "group-1",
      showUserHeader: true,
      items: [
        {
          id: "exp-1",
          statusTag: "Now",
          isCurrent: true,
          role: "Senior Executive (Team Lead)",
          period: "01/08/2026 to Present",
          company: "Join Venture AI",
        },
        {
          isDivider: true,
          text: "Previous",
        },
        {
          id: "exp-2",
          role: "Development Team Lead",
          period: "01/03/2026 to 31/07/2026",
          company: "Join Venture AI",
        },
      ],
    },
    {
      id: "group-2",
      showUserHeader: true,
      items: [
        {
          id: "exp-3",
          role: "UI/UX Designer",
          period: "01/02/2025 to 29/02/2026",
          company: "Join Venture AI",
        },
        {
          id: "exp-4",
          role: "Jr UI/UX Designer",
          period: "01/10/2024 to 30/01/2025",
          company: "Creative Soft LTD",
        },
      ],
    },
  ];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-[#010208] overflow-hidden">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[110px] pointer-events-none z-0 opacity-85"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(113, 39, 186, 0.85) 0%, #7127BA 45%, rgba(113, 39, 186, 0.25) 75%, transparent 90%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unified Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Academics</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4"
          >
            Experience & <span className="text-gradient">Education</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg font-light"
          >
            A side-by-side overview of my professional career trajectory and academic background.
          </motion.p>
        </div>

        {/* Side-by-Side Dual Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column: Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experienceGroups.map((group, groupIdx) => (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
                  className="space-y-3.5"
                >
                  {/* User Avatar + Header Name */}
                  {group.showUserHeader && (
                    <div className="flex items-center gap-3 mb-2">
                      <div className="relative shrink-0">
                        <img
                          src="/samit-portrait.png"
                          alt={profileDetails.name}
                          className="w-10 h-10 rounded-full object-cover border border-slate-700/60 shadow-md"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border border-slate-950 flex items-center justify-center text-white">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      </div>
                      <span className="text-slate-300 font-semibold text-sm tracking-wide">
                        {profileDetails.name} {profileDetails.title}
                      </span>
                    </div>
                  )}

                  {/* Group Items / Bubble Cards */}
                  <div className="pl-0 sm:pl-12 space-y-3">
                    {group.items.map((item, itemIdx) => {
                      if ("isDivider" in item) {
                        return (
                          <div key={`divider-${itemIdx}`} className="py-1">
                            <span className="inline-block px-3.5 py-1 rounded-xl bg-slate-800/80 text-slate-300 text-xs font-medium border border-slate-700/50 shadow-sm">
                              {item.text}
                            </span>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={item.id}
                          className={`relative p-5 rounded-2xl transition-all duration-300 ${item.isCurrent
                            ? "bg-slate-900/90 border border-purple-500/35 shadow-lg shadow-purple-900/10 hover:border-purple-500/60"
                            : "bg-[#0e0f17]/90 border border-slate-800/80 hover:border-slate-700/80"
                            }`}
                        >
                          {/* "Now" Tag */}
                          {item.statusTag && (
                            <div className="mb-2">
                              <span className="inline-block px-3 py-0.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700/60">
                                {item.statusTag}
                              </span>
                            </div>
                          )}

                          {/* Role Title */}
                          <h4 className="text-base font-bold text-slate-100 tracking-tight mb-1">
                            {item.role}
                          </h4>

                          {/* Period */}
                          <div className="text-xs text-slate-400 font-normal mb-1 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-500 inline shrink-0" />
                            <span>{item.period}</span>
                          </div>

                          {/* Company */}
                          <div className="text-xs text-slate-300 font-medium flex items-center gap-1.5 pt-0.5">
                            <Building2 className="w-3.5 h-3.5 text-purple-400 inline shrink-0" />
                            <span>{item.company}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="space-y-8" id="education">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
            </div>

            <div className="space-y-6">
              {educationData.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative p-6 rounded-3xl bg-[#0e0f17]/90 border border-slate-800/90 hover:border-indigo-500/40 shadow-xl transition-all duration-300 group"
                >
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
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
                  <h4 className="text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {item.degree}
                  </h4>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm mb-4">
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

        </div>
      </div>
    </section>
  );
}
