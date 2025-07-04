import { Icon } from "@/components/Icons/Icon";
import { socialLinks } from "@/constants/Home/socialLinks";

export const ContactInfo = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-6 sm:p-8 md:p-10 rounded-2xl border border-white shadow-lg  backdrop-blur text-white">
      
      <h3 className="text-xl font-semibold text-center md:text-left text-teal-400">
        Información de contacto
      </h3>

      <a href="mailto:EstebanCardenas2796@gmail.com" className="flex items-center gap-4 rounded-md p-1 py-2 bg-gray-800 transition-transform duration-300 hover:scale-105">
        <div className="w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center">
          <Icon name="ic:baseline-email" className="w-8 h-8 xl:w-10 xl:h-10 text-teal-400" />
        </div>
        <div className="flex-1">
          <p className="text-xs lg:text-base text-gray-400">Email</p>
          <p className="text-xs lg:text-base text-white break-all">
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
        <div className="w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center">
          <Icon name="material-symbols:location-on-outline" className="w-8 h-8 xl:w-10 xl:h-10 text-teal-400"/>
        </div>
        <div className="flex-1">
          <p className="text-xs lg:text-base text-gray-400">Ubicación</p>
          <p className="text-xs lg:text-base text-white">
            Chile, Los Ríos, Valdivia, Mariquina, Mehuín
          </p>
        </div>
      </a>

      <div>
        <p className="text-xl font-semibold text-center xl:text-left text-teal-400 my-4">
          Redes sociales
        </p>
        <div className="flex flex-wrap justify-center xl:justify-start gap-4">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="soft-glass-panel !p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <Icon
                name={icon}
                className="w-8 h-8 text-white hover:text-teal-400 transition-colors duration-300 "
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
