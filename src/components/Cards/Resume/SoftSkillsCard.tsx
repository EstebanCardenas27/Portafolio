import { useState } from "react";
import { motion } from "framer-motion";
import { softSkills } from "@/constants/Resume/SoftSkillData";
import { Icon } from "@/components/Icons/Icon";

import {
  pulseLoop,
  staggerContainer,
  staggerItem,
} from "@/Utils/animations";

export function SoftSkillsCard() {
  const [expanded, setExpanded] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div>     
      {!expanded && (
        <motion.div
          onClick={() => setExpanded(true)}
          className="flex flex-col p-6 glass-panel-purple items-center "
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={pulseLoop}
            animate="animate"
            className="w-10 h-10 mb-2"
          >
            <Icon
              name="line-md:menu-fold-left"
              width="40"
              height="40"
              className="text-purple-400"
            />
          </motion.div>

          <h3 className="text-lg font-semibold text-purple-400 mt-2">
            Soft Skills
          </h3>

          <p className="text-gray-300 text-center mt-2">
            Click para ver mis habilidades blandas.
          </p>
        </motion.div>
      )}

      {expanded && (
        <>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="relative w-full h-48 perspective cursor-pointer"
                onClick={() => toggleFlip(index)}
                variants={staggerItem}
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style preserve-3d ${
                    flippedIndex === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* FRONT */}
                  <div className="absolute w-full h-full backface-hidden p-6 glass-panel flex flex-col items-center justify-center">
                    <Icon
                      name={skill.icon}
                      width="30"
                      height="30"
                      className="text-purple-400"
                    />
                    <h3 className="text-lg font-semibold text-purple-400 mt-4 text-center">
                      {skill.title}
                    </h3>
                  </div>

                  {/* BACK */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 p-6 glass-panel flex items-center justify-center">
                    <p className="text-md text-gray-300 text-center leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => {
                setExpanded(false);
                setFlippedIndex(null);
              }}
              className="text-purple-400 border border-purple-400 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Ocultar
            </button>
          </div>
        </>
      )}
    </div>
  );
}