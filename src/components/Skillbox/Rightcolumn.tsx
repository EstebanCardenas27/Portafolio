import { Icon } from "@/components/Icons/Icon";

export interface SkillProps {
  title?        : string;
  colSpan?      : number;
  rowSpan?      : number;
  className?    : string;
  icon?         : string;
  description?  : string;
}

export interface RightColumnProps {
  skills: SkillProps[];
}

export const RightColumn = ({ skills }: RightColumnProps) => (
  <div className="relative hidden lg:block">
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden glass-panel p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent"></div>
      <div className="relative h-full w-full grid grid-cols-6 grid-rows-6 gap-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`glass-panel p-6 flex flex-col justify-center rounded shadow ${
              skill.className || ""
            } col-span-${skill.colSpan || 2} row-span-${skill.rowSpan || 2}`}
          >
            <div className="flex items-center mb-2 gap-2">
              {skill.icon && (
                <Icon name={skill.icon} width="24" height="24" className="text-teal-400" />
              )}
              <h3 className="text-xl font-semibold">{skill.title}</h3>
            </div>
            {skill.description && (
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

