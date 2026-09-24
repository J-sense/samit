"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Pari's Travels",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Start a Vacation",
    category: "WEB DESIGN",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Start a Vacation",
    category: "APP DESIGN",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 bg-[#010208] overflow-hidden">
      {/* Bottom Purple Ambient Glow matching Figma */}



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-1">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9b85c1] block">
            PORTFOLIO
          </span>
          <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight">
            <span className="font-light text-[#94a3b8]">Selected </span>
            <span className="font-bold text-white">Works</span>
          </h2>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="rounded-[28px] bg-[#0e081c]/90 backdrop-blur-xl border border-[#1e1533] overflow-hidden flex flex-col justify-between hover:border-[#7127BA]/50 transition-all duration-300 shadow-2xl group"
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

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#7127BA]/30 border border-[#7127BA]/50 text-[10px] font-bold uppercase tracking-wider text-purple-200">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
