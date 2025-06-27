import { SoftSkillsCard } from "@/components/Cards/Resume/SoftSkillsCard";
import { TechStackTabs } from "@/pages/Resume/TechStackTabs";
import { HighLightCard } from "@/components/Cards/Resume/HighLightCard";

export function SkillsPanel() {
  return (
    <div className="w-full">     
      
      <div className="bg-[#22203b] rounded-2xl shadow-md p-6 sm:p-10"> 
          <TechStackTabs />        
      </div>
      
      <div className="rounded-2xl shadow-md">
        <h1 className="text-lg sm:text-xl lg:text-3xl text-center font-bold text-teal-400 py-8 xl:py-12">Habilidades Blandas</h1>
        <SoftSkillsCard />
      </div>
      
      <div className="rounded-2xl shadow-md">
        <h1 className="text-lg sm:text-xl lg:text-3xl text-center font-bold text-teal-400 py-8 xl:py-12">Habilidades Técnicas</h1>
        <HighLightCard />
      </div>
    </div>
  );
}


