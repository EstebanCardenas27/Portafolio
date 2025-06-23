import { Icon } from "@/components/Icons/Icon";
import { socialLinks } from "@/constants/socialLinks";

export function Footer() {
  return (
    <footer className="w-full py-8 flex flex-wrap justify-around md:px-0 px-4 z-50">
      <div className="mb-6 md:mb-0">
        <div className="text-2xl font-bold text-purple-500 mb-2 ">EC</div>
        <p className="text-gray-400 text-sm max-w-md">
          Creando soluciones digitales innovadoras con enfoque en código limpio,
          eficiente y experiencias de usuario excepcionales.
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end">
        <p className="font-medium mb-3 text-white self-center">Conecta conmigo</p>
        <div className="flex space-x-4">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              className="group bg-[#22203b] p-3 rounded-full transition-transform duration-300 hover:scale-110"
              aria-label={label}
            >
              <Icon name={icon} className="w-7 h-7 text-white group-hover:text-teal-400 transition-colors duration-300"/>
            </a>
          ))}
        </div>
      </div>
      <div className="w-full text-gray-400 text-sm text-center mt-10">
        © {new Date().getFullYear()} Esteban C. Todos los derechos reservados.
      </div>
    </footer>
  );
}