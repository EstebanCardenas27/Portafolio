import { TechToolsData } from "@/constants/About/TechToolsData";
import { Icon } from "@/components/Icons/Icon";

export function SkillsGrid({ data }: { data: typeof TechToolsData }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full bg-[#22203b] p-6 rounded-xl shadow-lg shadow-black/50">
      {data.map((skill, index) => (
        <div
          key={index}
          className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${skill.gradient} border border-white/10 flex flex-col items-start justify-center hover:scale-105 hover:contrast-125 transition p-4 min-h-24 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]`}
        >
          <span className="absolute top-2 left-1/2 -translate-x-1/2 md:left-2 md:translate-x-0 md:transform-none text-xs bg-black/40 text-white border border-white rounded-xl px-2 py-0.5 text-center">
            {skill.level}
          </span>
          <Icon
            name={skill.icon}
            className="text-white text-4xl mb-2 mx-auto"
          />
          <span className="font-bold text-sm text-white text-center w-full">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}
