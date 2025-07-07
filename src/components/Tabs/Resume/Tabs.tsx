import { useState, useEffect, useRef } from "react";
import type { FC } from "react";
import { Icon } from "@/components/Icons/Icon";
import { ResumenTabButton } from "@/components/Tabs/Resume/ResumeTabButton";

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
  const [selected, setSelected] = useState<string | null>(initialKey ?? null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const activeTab = tabs.find((tab) => tab.key === selected);
  const SelectedComponent = activeTab?.component ?? null;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="relative w-full">
      <div className="hidden lg:flex gap-3 px-2 overflow-x-auto">
        {tabs.map(({ key, label, icon }) => (
          <ResumenTabButton
            key={key}
            label={label}
            icon={icon}
            isSelected={selected === key}
            onClick={() => setSelected(key)}
          />
        ))}
      </div>

      <div className="relative flex justify-center lg:hidden">
        <button
          ref={buttonRef}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex items-center justify-center gap-2 w-60 py-2 rounded-md backdrop-blur bg-purple-600 text-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          aria-label="Toggle menu"
          type="button"
        >
          {activeTab && <Icon name={activeTab.icon} width="24" height="24" />}
          <span>{activeTab?.label ?? "Expandir"}</span>
        </button>

        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute left-1/2 mt-1 top-full z-10 w-60 -translate-x-1/2 rounded-md backdrop-blur divide-y divide-black/20 bg-white/10 "
          >
            {tabs.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => {
                  setSelected(key);
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-2 w-full justify-center px-4 py-2 ${
                  selected === key ? "bg-purple-600 text-white font-bold" : ""
                } text-white/70`}
                type="button"
              >
                <Icon name={icon} width="20" height="20" />
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="pt-12 pb-12">
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};
