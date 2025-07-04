import { Icon } from "@/components/Icons/Icon";
import { FeaturesData } from "@/constants/Home/FeatureData";

export const FeatureCard = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-6">
      {FeaturesData.map(({ icon, title, description }, i) => (
        <article
          key={i}
          className="
            flex flex-col         
            todo-Center  
            glass-panel                       
            bg-gradient-to-br from-white/10 to-white/5
            hover:shadow-[0_0_30px_rgba(15,118,100,0.3)]
            sm:w-[calc(50%-1.5rem)]
            lg:w-[calc(33.333%-1rem)]            
          "
        >
          <div className="flex justify-center items-center soft-glass-panel mb-6 w-16 h-16 ">
            <Icon name={icon} className="text-teal-300 w-8 h-8" />
          </div>
          <h3 className="mb-3 text-base min-h-[3rem] sm:text-lg md:text-xl font-bold text-white">
            {title}
          </h3>
          <p className="text-gray-400 min-h-[5rem] text-sm sm:text-base">
            {description}
          </p>
        </article>
      ))}
    </div>
  );
};
