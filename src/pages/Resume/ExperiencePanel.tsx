import { motion } from "framer-motion";
import { ExperienceData } from "@/constants/Resume/ExperienceData";
import { ExperienceCard } from "@/components/Cards/Resume/ExperienceCard";

export const ExperiencePanel = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="space-y-8"
    >
      {ExperienceData.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: idx * 0.5,
          }}
        >
          <ExperienceCard experience={exp} />
        </motion.div>
      ))}
    </motion.section>
  );
};