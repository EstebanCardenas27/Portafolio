import { useState } from "react";
import { CategoryTabs } from "@/components/Tabs/Resume/CategoryTabs";
import { CategoryAccordion } from "@/components/Tabs/Resume/CategoryAccordion";
import { SkillsGrid } from "@/pages/About/SkillGrid";
import type { Skill } from "@/constants/About/TechToolsData";

interface Props {
  data: Skill[];
  categories: { key: string; label: string }[];
  initialCategory?: string;
}

export function ResponsiveSkillSections({
  data,
  categories,
  initialCategory = categories[0].key,
}: Props) {
  const [selected, setSelected] = useState(initialCategory);

  return (
    <div className="w-full transparent-effect py-6 px-6">      
      <div className="hidden lg:block">
        <CategoryTabs
          categories={categories}
          selected={selected}
          onSelect={setSelected}
        />
        <SkillsGrid
          data={data.filter((s) => s.category === selected)}
        />
      </div>
      
      <CategoryAccordion
        categories={categories}
        data={data}
      />
    </div>
  );
}