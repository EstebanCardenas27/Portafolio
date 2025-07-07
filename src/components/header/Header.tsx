import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { navEnter } from "@/Utils/animations";
import { Menu } from "lucide-react";
import { routes } from "@/constants/Routes/routes";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      {...navEnter}
      className="fixed w-full mx-auto flex items-center justify-between flex-wrap py-5 px-6 md:px-10 xl:px-[19.45rem] backdrop-blur z-50"
    >
      <Link to="/" className="text-2xl font-bold text-purple-700 shrink-0">
        EC
      </Link>

      <button className="md:hidden" onClick={handleIsOpen}>
        <Menu className="w-6 h-6 text-white" />
      </button>

      <div
        ref={menuRef}
        className={`${
          isOpen ? "flex pt-6 w-full" : "hidden"
        } flex-col items-center text-center gap-y-3 md:flex md:flex-row md:items-center md:gap-x-8`}
      >
        {routes.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={() => setIsOpen(false)}
            className={`${
              pathname === link.href
                ? "text-purple-600 after:w-full"
                : "text-white"
            } mx-auto relative text-sm font-medium transition-colors duration-300
              hover:text-purple-600 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5
              after:bg-purple-600 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:rounded`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}