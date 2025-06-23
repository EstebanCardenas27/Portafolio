import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

import { routes } from "@/constants/routes";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed w-full flex flex-wrap py-5 backdrop-blur z-50 justify-between md:px-[19.45rem] px-10">
      <Link to="/" className="flex text-2xl font-bold text-purple-700">
        EC
      </Link>
      <button className="md:hidden" onClick={handleIsOpen}>
        <Menu className="w-6 h-6" />
      </button>
      <div className={`${isOpen ? "flex pt-6" : "hidden"} md:flex w-full md:w-auto flex-col md:flex-row md:items-center gap-x-8 gap-y-3 text-center`}>
        {routes.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`${pathname === link.href ? "text-purple-600 after:w-full" : "text-white"} mx-auto relative text-sm font-medium transition-colors duration-300
              hover:text-purple-600 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5
              after:bg-purple-600 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:rounded`}
            >
              {link.label}
            </Link>
          ))}
      </div>
    </nav>
  );
}