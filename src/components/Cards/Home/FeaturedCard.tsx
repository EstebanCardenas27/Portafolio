import { useState } from "react";
import { Icon } from "@/components/Icons/Icon";
import { FeaturesData } from "@/constants/Home/FeatureData";

export const FeatureCard = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-6">
      {FeaturesData.map(({ icon, title, description }, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`
              group
              relative
              overflow-hidden
              flex flex-col w-full            
              max-w-90  
              min-w-78     
              todo-Center  
              transarent-effect
              rounded-xl                                   
              bg-gradient-to-br from-white/10 to-white/5
              hover:shadow-[0_0_30px_rgba(15,118,100,0.3)]
              p-6 xl:rounded-full
              sm:w-[calc(50%-1.5rem)]
              lg:w-[calc(33.333%-1rem)]
              transition-all duration-300 ease-in-out
              cursor-pointer
            `}
          >
            {/* Clip-path hover effect overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-teal-600/30 via-purple-600/40 to-pink-600/30 
                         clip-path-circle transition-[clip-path] duration-500 ease-in-out pointer-events-none"
            ></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 flex justify-center items-center rounded-lg xl:rounded-full soft-glass-panel">
                <Icon name={icon} className="text-teal-300 w-8 h-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-400">
                {title}
              </h3>
            </div>
            <p
              className={`
                text-gray-400 text-sm sm:text-base px-4 pb-4
                max-h-0 overflow-hidden opacity-0
                transition-all duration-300 ease-in-out
                xl:group-hover:max-h-[200px]
                xl:group-hover:opacity-100
                xl:group-hover:pt-4
                ${isOpen ? "max-h-[200px] opacity-100 pt-4" : ""}
              `}
            >
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};