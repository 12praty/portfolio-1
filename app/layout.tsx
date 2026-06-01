import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Pratyush Kumar — Full-Stack Developer",
  description:
    "Portfolio of Pratyush Kumar, a full-stack developer specializing in building modern web applications with React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "Pratyush Kumar",
    "full-stack developer",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Pratyush Kumar" }],
  creator: "Pratyush Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Pratyush Kumar — Full-Stack Developer",
    description:
      "Portfolio of Pratyush Kumar, a full-stack developer specializing in modern web applications.",
    siteName: "Pratyush Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratyush Kumar — Full-Stack Developer",
    description:
      "Portfolio of Pratyush Kumar, a full-stack developer specializing in modern web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} min-h-screen bg-[var(--color-background)]`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
