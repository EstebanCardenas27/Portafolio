import { Icon } from "@/components/Icons/Icon";

interface Props {
  label: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
}

export const ResumenTabButton = ({ label, icon, isSelected, onClick }: Props) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-2 py-3 px-5 rounded-md bg-[#22203b] text-white/70 transition-all duration-300 relative w-full hover:bg-violet-600 hover:text-white ${
      isSelected ? "text-white bg-violet-600" : "text-white/70"
    }`}
  >
    <Icon name={icon} className="w-5 h-5" />
    {label}
  </button>
);