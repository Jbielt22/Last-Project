// --- TYPES ---
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  stars: number;
  avatar?: string;
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillGroup {
  title: string;
  icons?: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  category: "Web Dev" | "Mobile App" | "UI/UX";
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  category?: string;
  description?: string;
}

// --- DATA ---
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Guru Produktif RPL",
    company: "SMK Negeri",
    quote: "Siswa yang memiliki etos kerja tinggi dan pemahaman koding yang sangat baik.",
    stars: 5,
    avatar: "👨‍🏫",
  },
  {
    id: 2,
    name: "Ahmad Fauzi",
    role: "Fullstack Developer",
    company: "Partner Tim",
    quote: "Kolaborasi dalam pembuatan backend dan manajemen database sangat rapi.",
    stars: 5,
    avatar: "💻",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icons: "🎨",
    skills: [
      { name: "React / Next.js", level: "Advanced", percentage: 85 },
      { name: "TypeScript", level: "Intermediate", percentage: 75 },
      { name: "Tailwind CSS", level: "Advanced", percentage: 90 },
    ],
  },
  {
    title: "Backend Development",
    icons: "⚡",
    skills: [
      { name: "Node.js / Express", level: "Advanced", percentage: 80 },
      { name: "REST API & Auth", level: "Advanced", percentage: 85 },
      { name: "PostgreSQL / MySQL", level: "Intermediate", percentage: 75 },
    ],
  },
  {
    title: "Tools & Workflow",
    icons: "🛠️",
    skills: [
      { name: "Git & GitHub", level: "Advanced", percentage: 85 },
      { name: "VS Code", level: "Advanced", percentage: 90 },
      { name: "Postman", level: "Intermediate", percentage: 80 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Web App",
    category: "Web Dev",
    description: "Platform toko online modern dengan sistem autentikasi JWT, REST API, dan manajemen produk yang responsif.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management Mobile",
    category: "Mobile App",
    description: "Aplikasi pengelola tugas harian dengan fitur pengingat real-time dan analisis produktivitas pengguna.",
    tech: ["React Native", "Tailwind CSS", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Brand Identity & UI Redesign",
    category: "UI/UX",
    description: "Desain antarmuka aplikasi interaktif dengan sistem desain (design system) yang konsisten dan fungsional.",
    tech: ["Figma", "Prototyping", "UI Design"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "AI Ready ASEAN Certificate of Completion",
    issuer: "ASEAN Foundation (Supported by Google.org)",
    date: "July 22, 2026",
    credentialUrl: "/jibe-sertif-asean.pdf",
    category: "Artificial Intelligence",
    description: "Menyelesaikan 12 modul pembelajaran AI mencakup Generative AI, Prompt Engineering, AI Ethics, dan Pengembangan Alat Berbasis AI.",
  },
];

// --- FUNCTIONS ---
export async function getTestimonials(): Promise<Testimonial[]> {
  return new Promise((resolve) => resolve(testimonials));
}

export async function getSkills(): Promise<SkillGroup[]> {
  return new Promise((resolve) => resolve(skillGroups));
}

export async function getProjects(): Promise<Project[]> {
  return new Promise((resolve) => resolve(projects));
}

export async function getCertificates(): Promise<Certificate[]> {
  return new Promise((resolve) => resolve(certificates));
}