import { Icon } from "@/components/Icons/Icon";
import clsx from "clsx";

interface Tab {
  key: string;
  label: string;
}

interface Props {
  categories: Tab[];
  selected: string;
  onSelect: (key: string) => void;
  search?: string;
  onSearch?: (value: string) => void;
  searchPlaceholder?: string;
}

export const ProjectsFilterPanel = ({
  categories,
  selected,
  onSelect,
  search,
  onSearch,
  searchPlaceholder,
}: Props) => {
  const searchValue = search ?? "";

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between transparent-effect p-4">
      <div className="flex justify-center text-center items-center flex-wrap gap-4">
        <Icon
          name="lucide:filter"
          width="20"
          height="20"
          className="text-gray-400 mr-2"
        />
        <span className="text-sm font-medium text-white mr-2">Filtros:</span>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => onSelect(cat.key)}
              aria-pressed={selected === cat.key}
              className={clsx(
                "px-3 py-1.5 text-xs font-medium rounded-full transition-colors",
                selected === cat.key
                  ? "bg-gradient-to-r from-cyan-500 to-teal-800 text-black"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {onSearch && (
        <div className="relative w-full lg:w-64">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon
              name="lucide:search"
              width="16"
              height="16"
              className="text-gray-400"
            />
          </div>
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 bg-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            placeholder={searchPlaceholder || "Buscar Proyecto..."}
            value={searchValue}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};
