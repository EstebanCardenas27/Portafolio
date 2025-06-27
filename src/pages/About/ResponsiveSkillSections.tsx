import { TechToolsData } from "@/constants/About/TechToolsData";
import { SkillsGrid } from "@/pages/About/SkillGrid";
import { useState } from "react";

// Filtro por categoría
const skillCategories = [
  { key: "Lenguaje", label: "Lenguajes" },
  { key: "Framework", label: "Frameworks y Librerías" },
  { key: "Herramienta", label: "Herramientas y Servicios" },
];

export function ResponsiveSkillSections() {
  const [selected, setSelected] = useState("Lenguaje");

  return (
    <div className="w-full">
      {/* 🖥️ Tabs para desktop */}
      <div className="hidden md:block">
        <div className="flex justify-center gap-4 mb-8">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelected(cat.key)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300
              ${
                selected === cat.key
                  ? "bg-gradient-to-r from-cyan-500 to-teal-800 text-black shadow-md"
                  : "bg-transparent border-white/40 text-white hover:bg-white/10 hover:border-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <SkillsGrid data={TechToolsData.filter((s) => s.category === selected)} />
      </div>

      {/* 📱 Accordion para mobile */}
      <div className="block md:hidden space-y-6">
        {skillCategories.map((cat) => (
          <div key={cat.key}>
            <details className="group bg-white/5 rounded-lg overflow-hidden">
              <summary className="cursor-pointer select-none py-3 px-4 font-semibold text-white">
                {cat.label}
              </summary>
              <div className="p-4">
                <SkillsGrid
                  data={TechToolsData.filter((s) => s.category === cat.key)}
                />
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
