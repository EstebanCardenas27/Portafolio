import { Icon } from "@/components/Icons/Icon"; 
import { socialLinks } from "@/constants/Home/socialLinks";


export const ContactInfo = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg bg-[#22203b] text-white">
            
      <h3 className="text-xl font-semibold text-center md:text-left text-teal-400">
        Información de contacto
      </h3>
      
      <a
        href="mailto:EstebanCardenas2796@gmail.com"
        className="flex items-center gap-4 rounded-md p-1 py-2 bg-gray-800 transition-transform duration-300 hover:scale-105"
      >
        <div className="w-10 h-10 flex items-center justify-center">
          <Icon name="ic:baseline-email" className="w-10 h-10 text-teal-400" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-400">Email</p>
          <p className="text-base text-white break-all">
            EstebanCardenas2796@gmail.com
          </p>
        </div>
      </a>
 
      <a
        href="https://www.google.com/maps/place/Mehuín,+Mariquina,+Región+de+Los+Ríos,+Chile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-md p-1 py-2 bg-gray-800 transition-transform duration-300 hover:scale-105"
      >
        <div className="w-10 h-10 flex items-center justify-center">
          <Icon
            name="material-symbols:location-on-outline"
            className="w-10 h-10 text-teal-400"
          />
        </div>        
        <div className="flex-1">
          <p className="text-sm text-gray-400">Ubicación</p>
          <p className="text-base text-white">
            Chile, Los Ríos, Valdivia, Mariquina, Mehuín
          </p>
        </div>
      </a>
      
      <div>
        <p className="text-xl font-semibold text-center md:text-left text-teal-400 my-4">Redes sociales</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 ">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group bg-[#1e1c31] p-3 rounded-lg transition-transform duration-300 hover:scale-110 focus:outline-none hover:ring-2 hover:ring-teal-500"
            >
              <Icon
                name={icon}
                className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors duration-300"
              />
            </a>
          ))}
        </div>
      </div>    
    </div>
  );
};