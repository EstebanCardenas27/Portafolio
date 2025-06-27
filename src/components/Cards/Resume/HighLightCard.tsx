import { HighLightData } from "@/constants/Resume/HighLightData";
import { Icon } from "@/components/Icons/Icon";

export const HighLightCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
      {HighLightData.map(({ icon, title, description }, index) => (
        <div
          key={index}
          className="bg-[#22203b] w-full p-6 rounded-md shadow-md 
                     hover:shadow-white hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-white/10 p-3 rounded-full">
              <Icon name={icon} className="w-6 h-6 text-teal-400" />
            </div>
            <h4 className="text-lg font-semibold text-purple-400">{title}</h4>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  );
};