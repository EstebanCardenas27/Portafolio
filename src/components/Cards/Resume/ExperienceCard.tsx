import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/Icons/Icon";
import { type ExperienceItem } from "@/constants/Resume/ExperienceData";

interface Props {
  experience: ExperienceItem;
}

export const ExperienceCard = ({ experience }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
        scale: 1,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        scale: 1,
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
      className="p-6 glass-panel-purple"
      ref={containerRef}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
        <div className="flex-1">
          <div className="flex items-start">
            <div className="p-2 mr-4 hidden md:block soft-glass-panel">
              <Icon
                name={experience.icon}
                width="24"
                height="24"
                className="text-purple-500"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white/90">
                {experience.role}
              </h3>
              <div className="text-lg mt-1 text-white/70">{experience.company}</div>
            </div>
          </div>
        </div>
        <div className="text-sm md:text-right text-white/50">{experience.period}</div>
      </div>

      <p className="mb-4 pl-0 md:pl-12 text-white/70">{experience.description}</p>

      <div className="pl-0 md:pl-12">
        <button
          onClick={() => setIsOpen((open) => !open)}
          className="flex items-center text-teal-400 font-medium mb-2 cursor-pointer focus:outline-none"
          aria-expanded={isOpen}
          aria-controls={`resumen-${experience.role.replace(/\s+/g, "-")}`}
          type="button"
        >
          Resumen de funciones:
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="ml-2"
          >
            <Icon name="lucide:chevron-right" width="20" height="20" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.ul
              id={`resumen-${experience.role.replace(/\s+/g, "-")}`}
              className="space-y-2 text-white/60 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
              style={{ willChange: "height, opacity" }}
            >
              {experience.responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Icon
                    name="lucide:circle-check"
                    width="20"
                    height="20"
                    className="text-purple-500 mr-2 flex-shrink-0 mt-0.5"
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};