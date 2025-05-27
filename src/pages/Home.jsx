import { ThemeToggle } from "@/components/ThemeToggle";

import { NavBar } from "@/components/NavBar";

import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Language } from "../components/Language";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle*/}
      <ThemeToggle />
      {/*Background Effects*/}

      {/*Navbar*/}
      <NavBar />
      {/*Main content*/}
      <main>
        <AboutMe />
        <SkillsSection />
        <ProjectSection />
        <Language />
        <ContactSection />
      </main>
      {/*Footer*/}
    </div>
  );
};
