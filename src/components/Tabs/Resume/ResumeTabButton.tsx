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
    className={`flex items-center w-full justify-center gap-2 py-3 px-5 transparent-effect hover:bg-purple-600 hover:text-white cursor-pointer ${
      isSelected ? "text-white bg-purple-600" : "text-white/70"
    }`}
  >
    <Icon name={icon} className="w-5 h-5" />
    {label}
  </button>
);