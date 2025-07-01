interface Props {
  categories: { key: string; label: string }[];
  selected: string;
  onSelect: (key: string) => void;
}

export const CategoryTabs = ({
  categories,
  selected,
  onSelect,
}: Props) => (
  <div className="flex justify-center gap-4 mb-8">
    {categories.map((cat) => (
      <button
        key={cat.key}
        onClick={() => onSelect(cat.key)}
        className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300
          ${
            selected === cat.key
              ? "bg-gradient-to-r from-cyan-500 to-teal-800 text-black shadow-md"
              : "bg-transparent border-white/40 text-white hover:bg-white/10 hover:border-white"
          }`}
      >
        {cat.label}
      </button>
    ))}
  </div>
);