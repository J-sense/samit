import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // স্ট্যাটিক সাইট তৈরির জন্য এটি জরুরি
  images: {
    unoptimized: true, // ইমেজ লোড সমস্যা এড়াতে
  },
};

export default nextConfig;
