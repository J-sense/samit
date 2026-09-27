export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Full Stack" | "Frontend" | "Mobile & AI" | "UI/UX";
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  achievements?: string[];
  statusTag?: string;
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  cgpa: string;
  description?: string;
  highlights?: string[];
}

export interface ProfileDetails {
  name: string;
  title: string;
  tagline: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  facebook: string;
  linkedin: string;
  github: string;
  twitter: string;
  stats: { label: string; value: string }[];
}
