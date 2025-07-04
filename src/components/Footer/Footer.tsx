import { Icon } from "@/components/Icons/Icon";
import { socialLinks } from "@/constants/Home/socialLinks";

export function Footer() {
  return (
    <footer className="w-full bg-[rgba(34,32,59,0.1)] backdrop-blur text-gray-300 py-8 px-6 md:px-20 select-none border-t border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">    
        <div className="text-center md:text-left max-w-md">
          <div className="text-3xl font-bold text-purple-500 mb-2">EC</div>
          <p className="text-sm leading-relaxed">
            Creando soluciones digitales innovadoras con enfoque en código limpio, eficiente y experiencias de usuario excepcionales.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <p className="font-medium text-white">Conecta conmigo</p>
          <div className="flex space-x-4">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
                aria-label={label}
                className=" soft-glass-panel !p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <Icon
                  name={icon}
                  className="w-8 h-8 text-white hover:text-teal-400 transition-colors duration-300"
                />
              </a>
            ))}
          </div>
        </div>        
      </div>      
      <div className="mt-10 text-center text-gray-400 text-sm ">
        © {new Date().getFullYear()} Esteban C. Todos los derechos reservados.
      </div>
    </footer>
  );
}