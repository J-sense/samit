"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const caseStudiesData = [
  {
    id: 1,
    title: "InstaVibe.ai — About Us Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Business Landing Page Design",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Good Web Page Design",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "App Design System",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Mobile Interface",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Radio Streaming App",
    category: "Radio App",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "Web Design", "App Design", "Radio App"];

export default function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? caseStudiesData
      : caseStudiesData.filter((item) => item.category === activeCategory);

  return (
    <section id="case-studies" className="relative py-24 bg-[#010208] overflow-hidden">
      {/* Central Purple Glow Overlay */}
      <div
        className="absolute top-[140px] left-1/2 -translate-x-1/2 w-[650px] h-[300px] rounded-full blur-[110px] pointer-events-none z-0 opacity-85"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(113, 39, 186, 0.85) 0%, #7127BA 45%, rgba(113, 39, 186, 0.25) 75%, transparent 90%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-1">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9b85c1] block">
            CASE STUDIES
          </span>
          <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight">
            <span className="font-light text-[#94a3b8]">My </span>
            <span className="font-bold text-white">Projects</span>
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16 relative z-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${isActive
                  ? "bg-[#7127BA] text-white shadow-lg shadow-[#7127BA]/30"
                  : "bg-[#180f2d]/80 text-[#94a3b8] border border-[#261a45] hover:text-white hover:border-[#7127BA]/40"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 6 Case Studies Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="rounded-[24px] bg-[#0c0717]/90 backdrop-blur-xl border border-[#1e1533] overflow-hidden flex flex-col justify-between hover:border-[#7127BA]/50 transition-all duration-300 shadow-2xl group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#120a21]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Title Footer */}
                  <div className="p-5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
