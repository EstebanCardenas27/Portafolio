import { useState } from "react";
import type { FC } from "react";
import { TabButton } from "@/components/Buttons/ResumeTabButton"; 

interface TabItem {
  key: string;
  label: string;
  icon: string; 
  component: FC;
}

interface Props {
  tabs: TabItem[];
  initialKey?: string;
}

export const Tabs = ({ tabs, initialKey }: Props) => {
  const [selected, setSelected] = useState(initialKey || tabs[0].key);
  const SelectedComponent = tabs.find((tab) => tab.key === selected)?.component;

  return (
    <div className="mt-12 w-full py-10">
      <div className="flex gap-3 px-2">
        {tabs.map(({ key, label, icon }) => (
          <TabButton
            key={key}
            label={label}
            icon={icon}
            isSelected={selected === key}
            onClick={() => setSelected(key)}
          />
        ))}
      </div>

      <div className="pt-12 text-white">
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};