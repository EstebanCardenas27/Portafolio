import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/Icons/Icon";
import { slideInLeft, blurIn } from "@/Utils/animations";

type Contenido = {
  titulo: string;
  detalle?: string;
};

type Item = {
  semestre: string;
  contenidos: Contenido[];
  icon: string;
};

type Props = {
  title: string;
  data: Item[];
};

export const EducationTimeline = ({ title, data }: Props) => {
  const [activeItem, setActiveItem] = useState<{
    semestreIdx: number;
    contenidoIdx: number;
  } | null>(null);

  const toggleItem = (semestreIdx: number, contenidoIdx: number) => {
    if (
      activeItem?.semestreIdx === semestreIdx &&
      activeItem?.contenidoIdx === contenidoIdx
    ) {
      setActiveItem(null);
    } else {
      setActiveItem({ semestreIdx, contenidoIdx });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative max-w-3xl mx-auto px-4 py-8 transparent-effect shadow-[0_0_20px_rgba(255,255,255,0.8)] overflow-hidden"
    >
      {/* Vertical line for the timeline */}
      <div className="absolute left-10 top-0 h-full w-1 bg-gradient-to-b from-purple-400/30 via-teal-400/30 to-purple-400/30" />

      <h2 className="text-3xl font-semibold text-center mb-8 text-teal-400">
        {title}
      </h2>
      <ol className="space-y-8 relative">
        {data.map((item, semestreIdx) => (
          <motion.li
            key={semestreIdx}
            {...slideInLeft}
            transition={{
              ...slideInLeft.transition,
              delay: semestreIdx * 0.3, // más lento
              duration: 2, // más lento
            }}
            className="relative pl-24"
          >
            <span className="absolute top-3 left-10 w-10 h-10 soft-glass-panel rounded-full bg-purple-500/30 border border-purple-500 flex items-center justify-center">
              <Icon
                name={item.icon}
                width="20"
                height="20"
                className="text-purple-300"
              />
            </span>

            <div className="mb-2">
              <time className="text-lg font-semibold text-purple-400">
                {item.semestre}
              </time>
            </div>

            <ul className="space-y-2">
              {item.contenidos.map((contenido, contenidoIdx) => {
                const isOpen =
                  activeItem?.semestreIdx === semestreIdx &&
                  activeItem?.contenidoIdx === contenidoIdx;

                return (
                  <li key={contenidoIdx}>
                    <button
                      onClick={() => toggleItem(semestreIdx, contenidoIdx)}
                      className={`text-left w-full font-semibold focus:outline-none transition-colors cursor-pointer ${
                        isOpen
                          ? "text-teal-600"
                          : "text-gray-300 hover:text-indigo-400"
                      }`}
                    >
                      {contenido.titulo}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && contenido.detalle && (
                        <motion.p
                          {...blurIn}
                          transition={{
                            ...blurIn.transition,
                            duration: 1,
                          }}
                          className="mt-2 text-sm text-gray-400 pl-4 border-l border-indigo-400"
                        >
                          {contenido.detalle}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
};
