import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/Icons/Icon";
import { EducationTimeline } from "@/components/TimeLine/EducationTimeLine";
import { EducationData } from "@/constants/Resume/EducationData";
import { pulseLoop, staggerContainer, staggerItem } from "@/Utils/animations";

export const EducationPanel = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* Tarjeta inicial */}
      {!expanded && (
        <motion.div
          onClick={() => setExpanded(true)}
          className="soft-glass-panel flex flex-col items-center justify-center text-center p-6 cursor-pointer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.0 }}
          transition={{ duration: 0.3 }}
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
            Educación
          </h3>
          <p className="text-gray-300 text-center mt-2">
            Click para ver mi formación académica.
          </p>
        </motion.div>
      )}
      
      {expanded && (
        <>
          <motion.section
            className="space-y-12 mt-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={staggerItem}>
              <EducationTimeline
                title="Ingeniería en Informática"
                data={EducationData.ingenieria}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <EducationTimeline
                title="Analista Programador"
                data={EducationData.tecnico}
              />
            </motion.div>
          </motion.section>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setExpanded(false)}
              className="text-purple-400 border border-purple-400 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Ocultar
            </button>
          </div>
        </>
      )}
    </div>
  );
};