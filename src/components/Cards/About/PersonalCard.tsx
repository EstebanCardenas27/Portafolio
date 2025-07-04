import { Icon } from "@/components/Icons/Icon";

interface Props {
  title: string;
  icon: string;
  items: string[];
}

export const PersonalCard = ({ title, icon, items }: Props) => (
  <div className="glass-panel">
    <div className="flex items-center mb-4">
      <div className="soft-glass-panel mr-4">
        <Icon name={icon} className="h-6 w-6 " />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <ul className="space-y-2 text-sm text-white">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <Icon name="lucide:check" className="h-4 w-4 mt-[2px]" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);
