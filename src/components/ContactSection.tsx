"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";
import { profileDetails } from "@/data/portfolioData";
import { FacebookIcon, WhatsappIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 },
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-[#010208] overflow-hidden">
      {/* Central Purple Radial Glow Overlay */}
      <div
        className="absolute top-[150px] left-1/2 -translate-x-1/2 w-[650px] h-[350px] rounded-full blur-[110px] pointer-events-none z-0 opacity-85"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(113, 39, 186, 0.85) 0%, #7127BA 45%, rgba(113, 39, 186, 0.25) 75%, transparent 90%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9b85c1] block">
            LET&apos;S TALK
          </span>
          <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight">
            <span className="font-light text-[#94a3b8]">Contact </span>
            <span className="font-bold text-white">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] font-light max-w-lg mx-auto pt-1">
            So that we can talk more about your exciting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          {/* Left Info Cards Column */}
          <div className="lg:col-span-4 space-y-4">
            {/* Card 1: Email */}
            <a
              href={`mailto:${profileDetails.email}`}
              className="p-5 rounded-2xl bg-[#0c0717]/90 backdrop-blur-xl border border-[#1e1533] flex items-center gap-4 shadow-xl hover:border-purple-500/50 transition-all group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#7127BA] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#7127BA]/30 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] font-mono font-bold uppercase text-[#94a3b8] tracking-wider">
                  EMAIL
                </div>
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight truncate hover:text-purple-300 transition-colors">
                  {profileDetails.email}
                </div>
              </div>
            </a>

            {/* Card 2: WhatsApp / Phone */}
            <a
              href={profileDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0c0717]/90 backdrop-blur-xl border border-[#1e1533] flex items-center gap-4 shadow-xl hover:border-emerald-500/50 transition-all group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#25D366]/30 group-hover:scale-105 transition-transform">
                <WhatsappIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-[#94a3b8] tracking-wider">
                  WHATSAPP / PHONE
                </div>
                <div className="text-sm font-bold text-white tracking-tight hover:text-emerald-300 transition-colors">
                  {profileDetails.phone}
                </div>
              </div>
            </a>

            {/* Card 3: Facebook */}
            <a
              href={profileDetails.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0c0717]/90 backdrop-blur-xl border border-[#1e1533] flex items-center gap-4 shadow-xl hover:border-blue-500/50 transition-all group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#1877F2]/30 group-hover:scale-105 transition-transform">
                <FacebookIcon className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] font-mono font-bold uppercase text-[#94a3b8] tracking-wider">
                  FACEBOOK
                </div>
                <div className="text-sm font-bold text-white tracking-tight truncate hover:text-blue-300 transition-colors">
                  Samit Protim Das
                </div>
              </div>
            </a>

            {/* Card 4: Location */}
            <div className="p-5 rounded-2xl bg-[#0c0717]/90 backdrop-blur-xl border border-[#1e1533] flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#7127BA] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#7127BA]/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-[#94a3b8] tracking-wider">
                  LOCATION
                </div>
                <div className="text-sm font-bold text-white tracking-tight">
                  {profileDetails.location}
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card Column */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-9 rounded-[28px] bg-[#0c0717]/90 backdrop-blur-xl border border-[#1e1533] shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#7127BA]/20 text-purple-400 mx-auto flex items-center justify-center border border-[#7127BA]/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                  <p className="text-[#94a3b8] text-sm max-w-md mx-auto">
                    Your message has been sent. I will reply to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#7127BA] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono font-bold uppercase text-[#94a3b8] tracking-wider">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Samit Das"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#140c28] border border-[#231742] text-white text-sm placeholder:text-[#5e5373] focus:outline-none focus:border-[#7127BA] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-mono font-bold uppercase text-[#94a3b8] tracking-wider">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="hello@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#140c28] border border-[#231742] text-white text-sm placeholder:text-[#5e5373] focus:outline-none focus:border-[#7127BA] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono font-bold uppercase text-[#94a3b8] tracking-wider">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#140c28] border border-[#231742] text-white text-sm placeholder:text-[#5e5373] focus:outline-none focus:border-[#7127BA] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono font-bold uppercase text-[#94a3b8] tracking-wider">
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#140c28] border border-[#231742] text-white text-sm placeholder:text-[#5e5373] focus:outline-none focus:border-[#7127BA] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#7127BA] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#7127BA]/30 flex items-center justify-center gap-2 hover:bg-[#611fb3] transition-all"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
