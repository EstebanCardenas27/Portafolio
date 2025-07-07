import { useState, useRef } from "react";
import { Icon } from "@/components/Icons/Icon";
import "../../styles/Motion/Riple.css";

export interface SkillProps {
  title: string;
  icon?: string;
  subtitle?: string;
  description?: string;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

export interface RightColumnProps {
  skills: SkillProps[];
  onSkillSelect?: (skill: SkillProps) => void;
}

export const SkillBox = ({ skills, onSkillSelect }: RightColumnProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const [ripples, setRipples] = useState<
    { skillTitle: string; id: number; delay: number }[]
  >([]);

  const handleClick = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    clickedTitle: string
  ) => {
    if (!containerRef.current) return;

    const clickedSkillEl = skillRefs.current.get(clickedTitle);
    if (!clickedSkillEl) return;

    const clickedRect = clickedSkillEl.getBoundingClientRect();
    const clickedCenterX = clickedRect.left + clickedRect.width / 2;
    const clickedCenterY = clickedRect.top + clickedRect.height / 2;

    const idBase = Date.now();

    const newRipples = skills
      .map((skill, i) => {
        const el = skillRefs.current.get(skill.title);
        if (!el) return null;

        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dist = Math.hypot(
          centerX - clickedCenterX,
          centerY - clickedCenterY
        );

        const maxDelay = 1000;
        const maxDist = 1000;
        const delay = Math.min((dist / maxDist) * maxDelay, maxDelay);

        return { skillTitle: skill.title, id: idBase + i, delay };
      })
      .filter(Boolean) as { skillTitle: string; id: number; delay: number }[];

    setRipples(newRipples);

    setTimeout(() => {
      setRipples([]);
    }, 900);

    const clickedSkill = skills.find((s) => s.title === clickedTitle);
    if (clickedSkill && onSkillSelect) {
      onSkillSelect(clickedSkill);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-lg bg-gradient-to-br from-[#2a606e] to-[#212738] backdrop-blur-sm border border-white/10"
    >
      <div className="absolute inset-0 rounded-lg shadow-[0_0_2rem_rgba(107,114,128,1)] animate-pulse pointer-events-none" />

      <div className="grid p-6 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 auto-rows-min relative">
        {skills.map((skill) => (
          <div
            key={skill.title}
            ref={(el) => {
              if (el) skillRefs.current.set(skill.title, el);
              else skillRefs.current.delete(skill.title);
            }}
            onClick={(e) => handleClick(e, skill.title)}
            style={{
              gridColumn: skill.colSpan ? `span ${skill.colSpan}` : undefined,
              gridRow: skill.rowSpan ? `span ${skill.rowSpan}` : undefined,
            }}
            className={
              `relative overflow-hidden flex flex-col justify-start p-4 min-h-[5rem] w-full max-w-full sm:max-w-xs
               rounded-lg border border-white/20 bg-white/10 shadow-md
               hover:scale-105 hover:shadow-purple-200 transition-all duration-300 ease-in-out
               cursor-pointer ${skill.className ?? ""}`
            }
          >
            {ripples
              .filter((r) => r.skillTitle === skill.title)
              .map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute rounded-full bg-white/30 pointer-events-none"
                  style={{
                    top: "50%",
                    left: "50%",
                    width: 0,
                    height: 0,
                    transform: "translate(-50%, -50%)",
                    animation: `ripple 0.6s ease-out`,
                    animationDelay: `${ripple.delay}ms`,
                  }}
                />
              ))}

            <div className="flex flex-col items-start z-10">
              <div className="flex items-center mb-2">
                {skill.icon && (
                  <Icon
                    name={skill.icon}
                    width="20"
                    height="20"
                    className="w-5 h-5 mr-2 text-teal-400"
                  />
                )}
                <h3 className="text-xl text-white font-semibold">
                  {skill.title}
                </h3>
              </div>
              {skill.subtitle && (
                <p className="text-sm text-gray-400">
                  {skill.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};