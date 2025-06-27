import { Icon } from "@/components/Icons/Icon";

interface Props {
  title: string;
  icon: string;
  items: string[];
}

export const PersonalCard = ({ title, icon, items }: Props) => (
  <div className="glass-panel p-8 md:p-10 rounded-lg shadow-lg bg-white/5 backdrop-blur-md border border-white/10 transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.6)] cursor-pointer">
    <div className="flex items-center mb-4">
      <div className="bg-brand-purple/10 p-3 rounded-lg mr-4">
        <Icon name={icon} className="h-6 w-6 text-brand-purple" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <ul className="space-y-2 text-sm text-slate-300">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <Icon name="lucide:check" className="h-4 w-4 text-brand-purple mt-[2px]" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);
