"use client";

import { motion } from "framer-motion";
import { profileDetails } from "@/data/portfolioData";

export default function FloatingContactWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2.5 p-2 rounded-full bg-[#0c0717]/95 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-purple-950/70"
    >
      {/* Gmail Button */}
      <motion.a
        href={`mailto:${profileDetails.email || "samit@design.io"}`}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Send Gmail"
        className="relative group w-9 h-9 rounded-full bg-[#EA4335] text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-[#EA4335]/40"
      >
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-12 px-2.5 py-1 rounded-md bg-[#0c0717] border border-white/10 text-white text-[10px] font-bold tracking-wider opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Gmail
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={profileDetails.whatsapp || "https://wa.me/8801717860660"}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact on WhatsApp"
        className="relative group w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-[#25D366]/40"
      >
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.151 4.2 4.294-1.125z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-12 px-2.5 py-1 rounded-md bg-[#0c0717] border border-white/10 text-white text-[10px] font-bold tracking-wider opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          WhatsApp
        </span>
      </motion.a>

      {/* LinkedIn Button */}
      <motion.a
        href={profileDetails.linkedin || "https://linkedin.com"}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact on LinkedIn"
        className="relative group w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-[#0A66C2]/40"
      >
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-12 px-2.5 py-1 rounded-md bg-[#0c0717] border border-white/10 text-white text-[10px] font-bold tracking-wider opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          LinkedIn
        </span>
      </motion.a>

      {/* Facebook Button */}
      <motion.a
        href={profileDetails.facebook || "https://facebook.com"}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact on Facebook"
        className="relative group w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-[#1877F2]/40"
      >
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-12 px-2.5 py-1 rounded-md bg-[#0c0717] border border-white/10 text-white text-[10px] font-bold tracking-wider opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Facebook
        </span>
      </motion.a>
    </motion.div>
  );
}
