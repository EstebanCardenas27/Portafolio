import { softSkills } from "@/constants/About/SoftSkillData";
import type { SoftSkill } from "@/constants/About/SoftSkillData";

export function SoftSkillsCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
      {softSkills.map((skill: SoftSkill, index: number) => (
        <div
          key={index}
          className="bg-[#22203b] rounded-xl p-6 border border-white/10 
          hover:border-purple-500 hover:shadow-purple-800/40 hover:scale-105 
          hover:backdrop-blur-sm transition-all duration-300 shadow-md"
        >
          <h3 className="text-sm text-center font-semibold text-purple-400 mb-2 sm:h-12 md:h-4 lg:text-lg lg:text-left">
            {skill.title}
          </h3>
          <p className="text-sm text-center text-gray-300 py-3 leading-relaxed lg:text-left lg:text-md">{skill.description}</p>
        </div>
      ))}
    </div>
  );
}