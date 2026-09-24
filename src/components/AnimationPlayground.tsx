"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, Grid, ChevronDown, RefreshCw, Zap, Sparkles, Move, Heart, Star, ShieldCheck } from "lucide-react";

export default function AnimationPlayground() {
  const [activeTab, setActiveTab] = useState<"spring" | "layout" | "accordion" | "gestures">("spring");

  // Spring physics state
  const [stiffness, setStiffness] = useState(300);
  const [damping, setDamping] = useState(20);
  const [mass, setMass] = useState(1);
  const [springKey, setSpringKey] = useState(0);

  // Layout morph items
  const [filter, setFilter] = useState("All");
  const cards = [
    { id: 1, title: "Neon Cyber Card", category: "Cards", color: "from-cyan-500 to-blue-600" },
    { id: 2, title: "Glass Pulse Badge", category: "Badges", color: "from-indigo-500 to-purple-600" },
    { id: 3, title: "Interactive Toggle", category: "UI Elements", color: "from-purple-500 to-pink-600" },
    { id: 4, title: "Gradient Hero Button", category: "UI Elements", color: "from-pink-500 to-rose-600" },
    { id: 5, title: "Spring Physics Slider", category: "Cards", color: "from-emerald-500 to-teal-600" },
    { id: 6, title: "Motion Shield Icon", category: "Badges", color: "from-amber-500 to-orange-600" },
  ];

  const filteredCards = filter === "All" ? cards : cards.filter((c) => c.category === filter);

  // Accordion state
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const accordionItems = [
    {
      title: "Why use Framer Motion in Next.js?",
      content:
        "Framer Motion offers declarative animations, production-ready gesture controls, layout morphing, and server/client component harmony seamlessly in Next.js.",
    },
    {
      title: "How does spring physics improve UX?",
      content:
        "Instead of fixed cubic-bezier curves, spring physics simulate mass, velocity, and damping, providing natural tactile feedback that responds to human interaction.",
    },
    {
      title: "What is AnimatePresence?",
      content:
        "AnimatePresence allows components to animate out when they're removed from the React component tree (e.g. modals, tabs, slide-out drawers, and notifications).",
    },
  ];

  return (
    <section id="playground" className="py-24 relative bg-slate-950/80 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Controls</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Animation <span className="text-gradient-cyan">Playground</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Experiment with Framer Motion parameters live in your browser. Feel the difference of stiffness, damping, and layout morphing.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: "spring", label: "Spring Physics", icon: Sliders },
            { id: "layout", label: "Layout Morphing", icon: Grid },
            { id: "accordion", label: "AnimatePresence", icon: ChevronDown },
            { id: "gestures", label: "Gesture Pad", icon: Move },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
                  isActive ? "text-white font-semibold" : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="playground-tab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl z-0 shadow-lg shadow-indigo-500/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Spring Physics */}
        {activeTab === "spring" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800"
          >
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Real-time Spring Configurator</h3>
                <p className="text-sm text-slate-400">
                  Tweak parameters to see how physical properties affect momentum, overshoot, and settling time.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Stiffness: {stiffness}</span>
                    <span className="text-slate-500">Tightness of spring</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="800"
                    value={stiffness}
                    onChange={(e) => setStiffness(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Damping: {damping}</span>
                    <span className="text-slate-500">Resistance / Friction</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    value={damping}
                    onChange={(e) => setDamping(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Mass: {mass}</span>
                    <span className="text-slate-500">Weight of object</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="5"
                    step="0.1"
                    value={mass}
                    onChange={(e) => setMass(Number(e.target.value))}
                    className="w-full accent-pink-500 cursor-pointer"
                  />
                </div>
              </div>

              <button
                onClick={() => setSpringKey((prev) => prev + 1)}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 text-indigo-400" />
                <span>Re-trigger Spring Jump</span>
              </button>
            </div>

            <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl p-8 border border-slate-800 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
              <motion.div
                key={springKey}
                initial={{ scale: 0.2, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: stiffness,
                  damping: damping,
                  mass: mass,
                }}
                className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/30 flex flex-col items-center justify-center text-white p-4 text-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <Sparkles className="w-8 h-8 mb-1" />
                <span className="text-xs font-bold font-mono">SPRING</span>
              </motion.div>
              <div className="absolute bottom-4 text-xs font-mono text-slate-500">
                stiffness: {stiffness} | damping: {damping} | mass: {mass}
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Layout Morphing */}
        {activeTab === "layout" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white">Layout ID Card Grid</h3>
                <p className="text-sm text-slate-400">Filtering items morphs positions smoothly using GPU transforms.</p>
              </div>

              <div className="flex gap-2">
                {["All", "Cards", "Badges", "UI Elements"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      filter === cat ? "bg-indigo-600 text-white" : "bg-slate-900 text-slate-400 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence>
                {filteredCards.map((card) => (
                  <motion.div
                    layout
                    key={card.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.35, type: "spring" }}
                    className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${card.color} mb-3 flex items-center justify-center text-white font-bold`}>
                      {card.id}
                    </div>
                    <h4 className="text-base font-semibold text-white mb-1">{card.title}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 font-mono">
                      {card.category}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}

        {/* Tab 3: Accordion */}
        {activeTab === "accordion" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-3xl mx-auto space-y-4"
          >
            {accordionItems.map((item, index) => {
              const isOpen = openAccordion === index;
              return (
                <div key={index} className="rounded-2xl bg-slate-900/90 border border-slate-800/80 overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between text-white font-semibold text-base hover:text-indigo-300 transition-colors"
                  >
                    <span>{item.title}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-5 pt-0 text-sm text-slate-400 leading-relaxed border-t border-slate-800/50">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Tab 4: Gestures */}
        {activeTab === "gestures" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {/* Gesture 1 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="p-8 rounded-3xl glass-card text-center border border-indigo-500/30 cursor-pointer flex flex-col items-center justify-center space-y-3"
            >
              <Heart className="w-10 h-10 text-pink-500" />
              <h4 className="text-lg font-bold text-white">Hover & Tap</h4>
              <p className="text-xs text-slate-400">Smooth scaling with rotational tilt feedback.</p>
            </motion.div>

            {/* Gesture 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ rotateY: 180 }}
              className="p-8 rounded-3xl glass-card text-center border border-purple-500/30 cursor-pointer flex flex-col items-center justify-center space-y-3"
            >
              <Star className="w-10 h-10 text-amber-400" />
              <h4 className="text-lg font-bold text-white">Flip on Tap</h4>
              <p className="text-xs text-slate-400">Click to flip card horizontally in 3D space.</p>
            </motion.div>

            {/* Gesture 3 */}
            <motion.div
              drag
              dragSnapToOrigin
              whileDrag={{ scale: 1.15 }}
              className="p-8 rounded-3xl glass-card text-center border border-cyan-500/30 cursor-grab active:cursor-grabbing flex flex-col items-center justify-center space-y-3"
            >
              <ShieldCheck className="w-10 h-10 text-cyan-400" />
              <h4 className="text-lg font-bold text-white">Elastic Snap</h4>
              <p className="text-xs text-slate-400">Drag anywhere, release to snap back automatically.</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
