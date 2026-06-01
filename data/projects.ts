export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    title: "Uptime Monitor",
    description:
      "A full-stack AI-powered uptime monitoring platform that performs automated health checks on websites, APIs, and services at configurable intervals with real-time status tracking. Integrates Google Gemini AI for intelligent incident analysis and automated email alerting via Mailjet.",
    image: "/images/projects/Uptime.png",
    tags: ["Next.js", "TypeScript", "NextAuth", "Prisma", "PostgreSQL", "Gemini AI", "Mailjet", "Tailwind CSS"],
    liveUrl: "https://uptime-monitor-fawn.vercel.app",
    githubUrl: "https://github.com/12praty/uptimeMonitor",
  },
  {
    title: "EstateFlow",
    description:
      "A full-stack dashboard to streamline data management workflows and improve productivity. Features optimized CRUD APIs with pagination, reusable React UI components, and integrated REST APIs for enhanced maintainability and scalability.",
    image: "/images/projects/estate-flow.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "https://estate-flow-pratyush.vercel.app",
    githubUrl: "https://github.com/12praty/EstateFlow",
  },
  {
    title: "Sorting Visualizer",
    description:
      "A real-time visualization tool for multiple sorting algorithms (Bubble, Selection, Merge, Quick etc.) to help users see step-by-step how sorting works. Features interactive bars, animations and controls for speed and size.",
    image: "/images/projects/sorting.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://sorting-visualizer-pratyush.vercel.app",
    githubUrl: "https://github.com/12praty/Sorting-visualizer",
  },
  {
    title: "Resume Builder",
    description:
      "An AI-powered resume and cover letter builder. Paste a job description to generate tailored bullets, tone-matched cover letters, and receive ATS scoring with actionable fixes—all in under 30 seconds.",
    image: "/images/projects/resume-builder.png",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    liveUrl: "https://resume-web-kappa-inky.vercel.app",
    githubUrl: "https://github.com/12praty/Resume",
  },
  {
    title: "AI Second Brain",
    description:
      "An AI-powered digital second brain for storing, organizing, and intuitively chatting with your personal notes, links, and documents.",
    image: "/images/projects/second-brain.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI"],
    liveUrl: "https://ai-second-brain-opal.vercel.app",
    githubUrl: "https://github.com/12praty/AI-Second-Brain",
  },
  {
    title: "Social Studio",
    description:
      "A social media automation platform for generating on-brand content across LinkedIn, Twitter, and Instagram. Features streaming AI, a visual calendar scheduler, brand voice training, and detailed analytics.",
    image: "/images/projects/social-studio.png",
    tags: ["Next.js", "Gemini AI", "Prisma", "Nodemailer", "TypeScript"],
    liveUrl: "https://social-puce-sigma.vercel.app",
    githubUrl: "https://github.com/12praty/social",
  },
];
