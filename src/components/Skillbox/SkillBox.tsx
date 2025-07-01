import { Icon } from "@/components/Icons/Icon";

export interface SkillProps {
  title: string;
  icon?: string;
  description?: string;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

export interface RightColumnProps {
  skills: SkillProps[];
}

export const SkillBox = ({ skills }: RightColumnProps) => {
  return (
    <div className="relative rounded-lg bg-gradient-to-br from-[#2a606e] to-[#212738] backdrop-blur-sm border border-white/10">
  <div className="absolute inset-0 rounded-lg shadow-[0_0_2rem_rgba(107,114,128,1)] animate-pulse pointer-events-none" />

  <div className="grid p-6 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 auto-rows-min relative">
    {skills.map((skill) => (
      <div
        key={skill.title}
        style={{
          gridColumn: skill.colSpan ? `span ${skill.colSpan}` : undefined,
          gridRow: skill.rowSpan ? `span ${skill.rowSpan}` : undefined,
        }}
        className={`
          flex flex-col justify-start p-4 min-h-[5rem] w-full max-w-full sm:max-w-xs
          rounded-lg border border-white/20 bg-white/10 shadow-md
          hover:scale-105 hover:shadow-purple-200 
          transition-all duration-300 ease-in-out
          ${skill.className ?? ""}
        `}
      >
        <div className="flex items-center mb-1">
          {skill.icon && (
            <Icon
              name={skill.icon}
              width="20"
              height="20"
              className="w-5 h-5 mr-2 text-teal-400"
            />
          )}
          <h3 className="text-xl text-white font-semibold">{skill.title}</h3>
        </div>
        {skill.description && (
          <p className="text-sm text-gray-400">{skill.description}</p>
        )}
      </div>
    ))}
  </div>
</div>
  );
};
