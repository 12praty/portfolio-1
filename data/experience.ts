export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: "Galgotias University",
    role: "Bachelor of Technology in Computer Science",
    duration: "August 2021 — August 2025",
    location: "Greater Noida, Uttar Pradesh",
    description: [
      "Cumulative GPA: 7.50",
      "Relevant Coursework: Data Structures and Algorithms, Database Management System, Operating System, Computer Networks, Linear Algebra, Discrete Mathematics, Web Technology.",
    ],
  },
];

export interface Certificate {
  institution: string;
  title: string;
  date: string;
}

export const certificates: Certificate[] = [
  {
    institution: "IIT Bombay",
    title: "Hands-On Lab Course On Software System",
    date: "Apr 2024",
  },
  {
    institution: "NPTEL",
    title: "Entrepreneurship",
    date: "Oct 2024",
  },
];
