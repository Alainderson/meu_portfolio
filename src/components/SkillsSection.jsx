import { useState } from "react";
import { cn } from "@/lib/utils.js";
const skills = [
  //Power Platform
  {
    name: "Power Apps",
    path: "icons/powerapps.svg",
    category: "power platform",
    level: "Pleno",
  },
  {
    name: "Power Automate",
    path: "icons/powerautomate.svg",
    category: "power platform",
    level: "Júnior",
  },
  {
    name: "Power BI",
    path: "icons/powerbi.svg",
    category: "power platform",
    level: "Júnior",
  },
  {
    name: "HTML 5",
    path: "icons/html5.svg",
    category: "frontend",
    level: "Júnior",
  },
  {
    name: "CSS 3",
    path: "icons/css3.svg",
    category: "frontend",
    level: "Júnior",
  },
  {
    name: "JavaScript",
    path: "icons/javascript.svg",
    category: "frontend",
    level: "Júnior",
  },
  {
    name: "React",
    path: "icons/react.svg",
    category: "frontend",
    level: "Júnior",
  },
  {
    name: "Php",
    path: "icons/php.svg",
    category: "backend",
    level: "Júnior",
  },
];
const categories = ["all", "power platform", "frontend", "backend"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteresSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="habilidades" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-primary">Habilidades</span>
        </h2>
        <div className=" flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize ",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteresSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                " bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center p-6 hover:scale-105 transform text-gray-800 "
              )}
            >
              <img
                src={skill.path}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <span className=" font-semibold text-lg">{skill.name}</span>
              {skill.level && <span className="">Nível: {skill.level}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
