"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const skillBulletsCol1 = ["Figma", "Prototyping", "Wireframing"];
const skillBulletsCol2 = ["Adobe XD", "User Research", "Design Systems"];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-[#010208] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Subtitle */}
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9b85c1] block">
              A BIT ABOUT ME
            </span>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight">
              <span className="font-light text-[#94a3b8]">I&apos;m a </span>
              <span className="font-bold text-white">UI/UX Designer</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed font-light">
              I am a UI/UX designer who is passionate about creating beautiful and joyful digital experiences. Besides design, I love music, games and traveling.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed font-light">
              With a keen eye for detail and a user-first approach, I transform complex problems into elegant, intuitive interfaces that people love to use.
            </p>

            {/* Skills Bullet Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 max-w-md">
              <div className="space-y-3">
                {skillBulletsCol1.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[#94a3b8] font-medium">
                    <span className="text-[#7127BA] text-xs">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {skillBulletsCol2.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[#94a3b8] font-medium">
                    <span className="text-[#7127BA] text-xs">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV CTA Button */}
            <div className="pt-2">
              <a
                href="/My Resume.pdf"
                download="My_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7127BA] text-white shadow-xl shadow-[#7127BA]/30 hover:bg-[#611fb3] transition-all"
              >
                <span>DOWNLOAD CV</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Portrait Image & Floating Experience Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md"
            >
              {/* Photo Frame */}
              <div className="relative overflow-hidden">
                <img
                  src="/secondImage.png"
                  alt="Samit Protim Das"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010208] via-[#010208]/30 to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="absolute right-[-10px] bottom-[10%] px-5 py-3 rounded-2xl bg-[#0c0717]/90 backdrop-blur-xl border border-white/10 shadow-2xl"
              >
                <div className="text-2xl font-black text-white">2+</div>
                <div className="text-[11px] text-[#94a3b8] font-medium">Years of Experience</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
