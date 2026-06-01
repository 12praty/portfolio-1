import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";

import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-page-bg)] flex flex-col font-mono text-[var(--color-text-primary)]">
      {/* Top Drafting Mesh Decorative Box */}
      <div className="grid-row-container">
        <div className="grid-col-container h-24 sm:h-32 drafting-grid relative overflow-hidden">
          {/* Subtle blueprint detailing */}
          <div className="absolute top-3 left-4 text-[9px] text-[var(--color-text-muted)] select-none tracking-widest font-mono">
            SYS.REF // 075D-44FA-8526-762CCA9714C1
          </div>
          <div className="absolute bottom-3 right-4 text-[9px] text-[var(--color-text-muted)] select-none tracking-widest font-mono">
            SCALE: 1:1 // DP-680
          </div>
        </div>
      </div>

      {/* Header Row */}
      <div className="grid-row-container">
        <div className="grid-col-container bg-[var(--color-background)]">
          <Header />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* About Section */}
        <div className="grid-row-container">
          <div className="grid-col-container bg-[var(--color-background)]">
            <About />
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="grid-row-container">
          <div className="grid-col-container bg-[var(--color-background)]">
            <TechStack />
          </div>
        </div>



        {/* Projects Section */}
        <div className="grid-row-container">
          <div className="grid-col-container bg-[var(--color-background)]">
            <Projects />
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid-row-container">
          <div className="grid-col-container bg-[var(--color-background)]">
            <Contact />
          </div>
        </div>
      </main>

      {/* Footer Row */}
      <div className="grid-row-container">
        <div className="grid-col-container bg-[var(--color-background)]">
          <Footer />
        </div>
      </div>

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}
