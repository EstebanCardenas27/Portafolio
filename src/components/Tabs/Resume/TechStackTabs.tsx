import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/Icons/Icon";
import { TechStackTabsData } from "@/constants/Resume/TechStackTabsData";
import { TechTabsData } from "@/constants/Resume/TechTabsData";
import { staggerContainer, staggerItem, pulseLoop } from "@/Utils/animations";

export function TechStackTabs() {
  const [techTab, setTechTab] = useState("all");
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {!expanded && (
        <motion.div
          onClick={() => setExpanded(true)}
          className="transparent-effect cursor-pointer flex flex-col items-center justify-center text-center p-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.div variants={pulseLoop} animate="animate" className="w-10 h-10 mb-2">
            <Icon name="line-md:menu-fold-left" className="w-full h-full text-purple-400" />
          </motion.div>
          <h3 className="text-lg font-semibold text-purple-400 mb-1">Tech Stack</h3>
          <p className="text-gray-300 font-medium">Click para ver mis tecnologías y herramientas.</p>         
        </motion.div>
      )}

      {expanded && (
        <>
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {TechTabsData.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTechTab(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  techTab === key
                    ? "bg-gradient-to-r from-cyan-500 to-teal-800 text-black shadow-md"
                    : "bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white"
                }`}
              >
                {label}                
              </button>
            ))}
          </div>

          <motion.div
            key={techTab}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pb-10"
          >
            {TechStackTabsData.filter(
              (skill) => techTab === "all" || skill.category === techTab
            ).map((skill, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex flex-col items-center gap-4"
              >
                <div
                  className={`w-16 h-16 rounded-lg flex items-center justify-center 
                    bg-gradient-to-br ${skill.gradient} 
                    border border-white/20 
                    hover:border-purple-500 hover:opacity-80 hover:scale-105 
                    hover:shadow-lg hover:shadow-purple-900 
                    hover:backdrop-blur-3xl 
                    transition-all duration-300 ease-in-out`}
                >
                  <Icon name={skill.icon} className="text-white w-8 h-8" />
                </div>
                <span className="text-sm text-white text-center">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

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
    </>
  );
}