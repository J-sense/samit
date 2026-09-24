"use client";

import { Mail } from "lucide-react";
import { profileDetails } from "@/data/portfolioData";
import { LinkedinIcon, FacebookIcon, WhatsappIcon } from "@/components/SocialIcons";

export default function FooterSection() {
  return (
    <footer className="bg-[#010208] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Title & Subtitle */}
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-5xl font-normal text-white tracking-tight">
            <span className="font-light text-[#94a3b8]">Get </span>
            <span className="font-bold text-white">in Touch.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#94a3b8] font-light">
            So that we can talk more about your next big ideas.
          </p>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-8 text-[#94a3b8]">
          <a
            href={`mailto:${profileDetails.email}`}
            className="hover:text-white transition-colors p-2"
            aria-label="Email"
            title={profileDetails.email}
          >
            <Mail className="w-5 h-5" />
          </a>

          {/* WhatsApp Icon */}
          <a
            href={profileDetails.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#25D366] transition-colors p-2"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <WhatsappIcon className="w-5 h-5" />
          </a>

          {/* Facebook Icon */}
          <a
            href={profileDetails.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1877F2] transition-colors p-2"
            aria-label="Facebook"
            title="Facebook"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href={profileDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition-colors p-2"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Navigation Links Row */}
        <nav className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-[#94a3b8]">
          <a href="#hero" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About Me
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact Me
          </a>
        </nav>

        {/* Bottom Copyright Line */}
        <div className="pt-8 text-xs text-[#6e6382] flex items-center justify-center gap-1.5 font-light">
          <span>Made with</span>
          <span className="text-red-500 text-sm">❣️</span>
          <span>by</span>
          <strong className="font-bold text-white">Samit Protim Das</strong>
        </div>
      </div>
    </footer>
  );
}
