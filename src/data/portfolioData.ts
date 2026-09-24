import { ProfileDetails, Project, SkillCategory, ExperienceItem } from "@/types/portfolio";

export const profileDetails: ProfileDetails = {
  name: "Samit",
  title: "Protim Das",
  tagline: "I'm a designer specialising in UI/UX and Interaction Design",
  about:
    "I'm a UI/UX designer and software engineer specialising in creating human-centered digital experiences, interactive interfaces, and fluid web applications.",
  location: "Dhaka, Bangladesh",
  email: "srsamitdas@gmail.com",
  phone: "01717860660",
  whatsapp: "https://wa.me/8801717860660",
  facebook: "https://www.facebook.com/samitprotimdas?mibextid=wwXIfr&rdid=H2o4jeJ3uSAar7Jd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DGPLXH1KT%2F%3Fmibextid%3DwwXIfr#",
  linkedin: "https://www.linkedin.com/in/samitprotimdas",
  github: "https://github.com",
  twitter: "https://twitter.com",
  stats: [
    { label: "Live Projects", value: "30+" },
    { label: "Years Experience", value: "2" },
    { label: "Happy Clients", value: "25+" },
  ],
};

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "SaaS Analytics Dashboard",
    description: "Modern analytics dashboard design with dark glassmorphism, real-time widgets, and intuitive user workflows.",
    category: "UI/UX",
    techStack: ["Framer", "Figma", "UI/UX Design", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "proj-2",
    title: "E-Commerce Mobile Application",
    description: "End-to-end mobile app design system focusing on fluid micro-interactions and seamless checkout experience.",
    category: "Mobile & AI",
    techStack: ["Figma", "UI/UX", "Prototyping", "iOS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "proj-3",
    title: "Fintech Design System",
    description: "Comprehensive tokenized component library with dark/light theme support and accessible typography hierarchy.",
    category: "UI/UX",
    techStack: ["Design System", "Figma", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    category: "Design & Prototyping",
    skills: [
      { name: "UI/UX Design & Wireframing", level: 95 },
      { name: "Figma & Design Systems", level: 95 },
      { name: "Interaction Design & Motion", level: 92 },
      { name: "User Research & Usability Testing", level: 88 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React & Next.js App Router", level: 90 },
      { name: "TypeScript & JavaScript", level: 88 },
      { name: "Tailwind CSS & Modern CSS", level: 95 },
      { name: "Framer Motion & Micro-animations", level: 92 },
    ],
  },
];

export const experiencesData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Lead UI/UX Designer & Frontend Engineer",
    company: "Studio Craft",
    period: "2024 - Present",
    location: "Remote",
    description:
      "Crafting high-impact UI/UX interfaces and interactive web experiences. Designing component libraries and prototyping complex product workflows.",
    achievements: [
      "Designed and launched 30+ live web projects with 99% client satisfaction.",
      "Established unified design system used across web and mobile platforms.",
    ],
  },
  {
    id: "exp-2",
    role: "UI/UX Designer",
    company: "Pixel Motion",
    period: "2022 - 2024",
    location: "Dhaka",
    description:
      "Specialized in user experience design, wireframing, high-fidelity interactive prototypes, and design-to-code handover.",
    achievements: [
      "Crafted responsive interface designs for e-commerce, SaaS, and fintech clients.",
    ],
  },
];
