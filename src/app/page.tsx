import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import { profileDetails } from "@/data/portfolioData";

export const metadata = {
  title: `${profileDetails.name} | ${profileDetails.title}`,
  description: profileDetails.tagline,
  keywords: ["UI/UX Designer", "Software Engineer", "Next.js Developer", "React Portfolio", "TypeScript", "Framer Motion"],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010208] text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
      <FloatingContactWidget />
    </main>
  );
}
