import { motion } from "framer-motion";
import { easeOut } from "motion"; 
import { SoftSkillsCard } from "@/components/Cards/Resume/SoftSkillsCard";
import { TechStackTabs } from "@/components/Tabs/Resume/TechStackTabs";
import { HighLightCard } from "@/components/Cards/Resume/HighLightCard";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 2, ease: easeOut },
};

export function SkillsPanel() {
  return (
    <div className="w-[80%] md:w-[75%] max-w-7xl mx-auto">
      <h1 className="text-2xl lg:text-3xl text-center font-bold text-teal-400 py-10">
        Tech Stack
      </h1>
      <motion.div {...fadeUp} className="glass-panel-purple p-6 sm:p-10">
        <TechStackTabs />
      </motion.div>

      <h1 className="text-2xl lg:text-3xl text-center font-bold text-teal-400 py-16">
        Habilidades Blandas
      </h1>
      <motion.div {...fadeUp}>
        <SoftSkillsCard />
      </motion.div>

      <h1 className="text-2xl lg:text-3xl text-center font-bold text-teal-400 py-12 xl:py-16">
        Habilidades Técnicas
      </h1>
      <motion.div {...fadeUp}>
        <HighLightCard />
      </motion.div>
    </div>
  );
}