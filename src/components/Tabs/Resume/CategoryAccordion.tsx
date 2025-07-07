import { SkillsGrid } from "@/pages/About/SkillGrid";
import type { Skill } from "@/constants/About/TechToolsData"; 

interface Props {
  categories: { key: string; label: string }[];
  data: Skill[];
}

export const CategoryAccordion = ({
  categories,
  data,
}: Props) => (
  <div className="block lg:hidden space-y-6">
    {categories.map((cat) => (
      <div key={cat.key}>
        <details className="group bg-white/5 rounded-lg overflow-hidden">
          <summary className="cursor-pointer select-none py-3 px-4 font-semibold text-white">
            {cat.label}
          </summary>
          <div className="p-4">
            <SkillsGrid
              data={data.filter((s) => s.category === cat.key)}
            />
          </div>
        </details>
      </div>
    ))}
  </div>
);
