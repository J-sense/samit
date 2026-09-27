import { ProfileDetails, Project, SkillCategory, ExperienceItem, EducationItem } from "@/types/portfolio";

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
    role: "Senior Executive (Team Lead)",
    company: "Join Venture AI",
    period: "01/08/2026 to Present",
    location: "Dhaka, Bangladesh",
    statusTag: "Now",
    isCurrent: true,
    description: "Leading technology strategy, UI/UX execution, and engineering workflows as Team Lead at Join Venture AI.",
    achievements: [
      "Supervising development teams and leading product interaction design.",
      "Architecting user-centric solutions and managing sprint deliverables."
    ]
  },
  {
    id: "exp-2",
    role: "Development Team Lead",
    company: "Join Venture AI",
    period: "01/03/2026 to 31/07/2026",
    location: "Dhaka, Bangladesh",
    statusTag: "Previous",
    description: "Led frontend and full-stack development initiatives, directing technical design and team code reviews.",
    achievements: [
      "Guided team deliverables and technical architecture for AI applications."
    ]
  },
  {
    id: "exp-3",
    role: "UI/UX Designer",
    company: "Join Venture AI",
    period: "01/02/2025 to 29/02/2026",
    location: "Dhaka, Bangladesh",
    description: "Created high-fidelity designs, interactive prototypes, and design systems for web & mobile apps.",
    achievements: [
      "Crafted intuitive user interfaces, wireframes, and design specs."
    ]
  },
  {
    id: "exp-4",
    role: "Jr UI/UX Designer",
    company: "Creative Soft LTD",
    period: "01/10/2024 to 30/01/2025",
    location: "Dhaka, Bangladesh",
    description: "Assisted in UI design, visual assets, wireframing, and interactive prototype development.",
    achievements: [
      "Designed responsive UI layouts and component libraries."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    year: "2020",
    cgpa: "3.80 / 4.00",
    description: "Graduated with High Distinction (3.80 CGPA). Focused on Computer Science fundamentals, Software Engineering, HCI, algorithms, and interactive UI/UX systems.",
    highlights: [
      "Graduated with High Honors — CGPA: 3.80 / 4.00",
      "Specialized in Human-Computer Interaction & Web Systems",
      "Active participant in software design and development projects"
    ]
  }
];

