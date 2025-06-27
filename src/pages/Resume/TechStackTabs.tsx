import { useState } from "react";
import { Icon } from "@/components/Icons/Icon";
import { TechStackTabsData } from "@/constants/Resume/TechStackTabsData";
import { TechTabsData } from "@/constants/Resume/TechTabsData";

export function TechStackTabs() {
  const [techTab, setTechTab] = useState("all");

  return (
    <>     
      <div className="flex flex-wrap justify-center gap-2 mb-16">
        {TechTabsData.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTechTab(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              techTab === key
                ? "bg-gradient-to-r from-cyan-500 to-teal-800 text-black shadow-md"
                : "bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pb-10">
        {TechStackTabsData
          .filter(skill => techTab === "all" || skill.category === techTab)
          .map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div
                className={`w-16 h-16 rounded-lg flex items-center justify-center 
                bg-gradient-to-br ${skill.gradient} 
                border border-white/20 
                hover:border-purple-500 hover:opacity-80 hover:scale-105 
                hover:shadow-lg hover:shadow-purple-900 
                hover:backdrop-blur-3xl 
                transition-all duration-300 ease-in-out`}
              >
                <Icon name={skill.icon} className="text-white w-8 h-8" />
              </div>
              <span className="text-sm text-white text-center">{skill.name}</span>
            </div>
          ))}
      </div>
    </>
  );
}
