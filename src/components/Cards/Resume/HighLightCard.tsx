import { useState } from "react";
import { motion } from "framer-motion";
import { HighLightData } from "@/constants/Resume/HighLightData";
import { Icon } from "@/components/Icons/Icon";

import {
  pulseLoop,
  staggerContainer,
  staggerItem,
} from "@/Utils/animations";

export const HighLightCard = () => {
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
          className="glass-panel-purple flex flex-col items-center justify-center text-center p-6"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={pulseLoop}
            animate="animate"
            className="w-8 h-8 mb-2"
          >
            <Icon
              name="line-md:menu-fold-left"
              className="w-full h-full text-purple-400"
            />
          </motion.div>
          <h3 className="text-lg font-semibold text-purple-400 mb-1">
            HighLights
          </h3>
          <p className="text-gray-300 font-medium">
            Click para ver mis habilidades Técnicas
          </p>
        </motion.div>
      )}

      {/* Grid desplegado */}
      {expanded && (
        <>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {HighLightData.map(({ icon, title, description }, index) => (
              <motion.div
                key={index}
                className="relative w-full h-48 perspective cursor-pointer"
                onClick={() => toggleFlip(index)}
                variants={staggerItem}
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style preserve-3d ${
                    flippedIndex === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden p-6 glass-panel flex flex-col items-center justify-center">
                    <div className="soft-glass-panel p-3 rounded-full mb-3">
                      <Icon name={icon} className="w-6 h-6 text-teal-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-purple-400 text-center">
                      {title}
                    </h4>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 p-6 glass-panel flex items-center justify-center">
                    <p className="text-sm text-gray-300 text-center leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="col-span-full flex justify-center mt-6">
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
          </motion.div>
        </>
      )}
    </div>
  );
};