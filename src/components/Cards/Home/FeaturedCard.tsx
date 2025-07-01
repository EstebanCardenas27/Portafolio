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
            justify-center
            items-center
            text-center
            border border-white/10
            rounded-lg
            p-4
            bg-gray-900
            transition-all duration-300 transform
            hover:-translate-y-4
            hover:shadow-[0_0_30px_rgba(15,118,100,0.3)]
            sm:w-[calc(50%-1.5rem)]
            lg:w-[calc(33.333%-1rem)]
          "
        >
          <div className="flex justify-center items-center mb-6 w-16 h-16 rounded-lg bg-[#22203b]">
            <Icon name={icon} className="text-teal-300 w-8 h-8" />
          </div>
          <h3 className="mb-3 text-base min-h-[4rem] sm:text-lg md:text-xl font-bold text-white">
            {title}
          </h3>
          <p className="text-gray-400 min-h-[6rem] text-sm sm:text-base">
            {description}
          </p>
        </article>
      ))}
    </div>
  );
};
