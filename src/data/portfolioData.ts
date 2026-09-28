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
    role: "UI/UX Designer",
    company: "Join Venture AI",
    period: "1 March 2026 - Present",
    location: "Dhaka, Bangladesh",
    statusTag: "Now",
    isCurrent: true,
    summary:
      "Designing intuitive, user-friendly, and visually engaging digital experiences for web and mobile applications.",
    description:
      "As a UI/UX Designer, I am responsible for designing intuitive, user-friendly, and visually engaging digital experiences for web and mobile applications. My responsibilities include understanding project requirements, conducting user research, creating user flows, wireframes, prototypes, and high-fidelity UI designs. I work closely with clients, project managers, and developers to translate business requirements into effective design solutions and ensure accurate design implementation. I also maintain design consistency, improve usability, review implemented interfaces, incorporate feedback, and stay updated with the latest UI/UX trends and best practices to continuously enhance the overall user experience."
  },
  {
    id: "exp-2",
    role: "UI/UX Designer",
    company: "Join Venture AI",
    period: "01 Feb 2025 - 28 Feb 2026",
    location: "Dhaka, Bangladesh",
    statusTag: "Previous",
    isCurrent: false,
    summary:
      "Created high-fidelity designs, interactive prototypes, and design systems for web & mobile applications.",
    description:
      "Created high-fidelity designs, interactive prototypes, and design systems for web & mobile apps. Conducted user interface reviews, component library management, and collaborated closely with cross-functional development teams to deliver intuitive digital products."
  },
  {
    id: "exp-3",
    role: "Jr. UX/UI Designer",
    company: "Creative Soft LTD",
    period: "11 Nov 2024 – 31 Jan 2025",
    location: "Dhaka, Bangladesh",
    statusTag: "Previous",
    isCurrent: false,
    summary:
      "As a Jr. UI/UX Designer at Creative Soft Limited, I contribute to designing user-friendly web and mobile experiences. I create user flows, wireframes, prototypes, and high-fidelity UI designs while collaborating with designers, developers, project managers, and clients. I also incorporate feedback, maintain design consistency, and support usability improvements throughout the product development process.",
    description:
      "As a Jr. UI/UX Designer, I contribute to designing intuitive, user-friendly, and visually engaging digital experiences for web and mobile applications. My responsibilities include understanding project requirements, conducting basic user research, creating user flows, wireframes, prototypes, and high-fidelity UI designs. I collaborate with senior designers, project managers, clients, and developers to translate requirements into effective design solutions. I also maintain design consistency, incorporate feedback, review implemented designs, support usability improvements, and continuously develop my skills by following current UI/UX trends and best practices."
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

