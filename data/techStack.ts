export interface TechItem {
  name: string;
  category: "languages" | "frontend" | "backend" | "tools";
  iconKey: string;
}

export const techStack: TechItem[] = [
  // Languages
  { name: "C++", category: "languages", iconKey: "cpp" },
  { name: "TypeScript", category: "languages", iconKey: "typescript" },
  { name: "JavaScript", category: "languages", iconKey: "javascript" },

  // Frontend
  { name: "React.js", category: "frontend", iconKey: "react" },
  { name: "Next.js", category: "frontend", iconKey: "nextjs" },
  { name: "Tailwind CSS", category: "frontend", iconKey: "tailwind" },
  { name: "HTML5", category: "frontend", iconKey: "html" },
  { name: "CSS3", category: "frontend", iconKey: "css" },

  // Backend
  { name: "Node.js", category: "backend", iconKey: "nodejs" },
  { name: "Express.js", category: "backend", iconKey: "express" },
  { name: "MongoDB", category: "backend", iconKey: "mongodb" },
  { name: "Prisma", category: "backend", iconKey: "prisma" },
  { name: "PostgreSQL", category: "backend", iconKey: "postgresql" },
  { name: "NextAuth", category: "backend", iconKey: "nextauth" },

  // Tools
  { name: "Git", category: "tools", iconKey: "git" },
  { name: "GitHub", category: "tools", iconKey: "github" },
  { name: "VS Code", category: "tools", iconKey: "vscode" },
  { name: "Google Colab", category: "tools", iconKey: "colab" },
  { name: "Vercel", category: "tools", iconKey: "vercel" },
  { name: "Mailjet", category: "tools", iconKey: "mailjet" },
];

export const categoryLabels: Record<TechItem["category"], string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  tools: "DevOps & Tools",
};
