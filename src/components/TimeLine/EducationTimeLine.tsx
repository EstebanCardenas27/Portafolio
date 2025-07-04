import { useState } from "react";
import { Icon } from "@/components/Icons/Icon";

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
  const [activeItem, setActiveItem] = useState<{ semestreIdx: number; contenidoIdx: number } | null>(null);

  const toggleItem = (semestreIdx: number, contenidoIdx: number) => {
    if (activeItem?.semestreIdx === semestreIdx && activeItem?.contenidoIdx === contenidoIdx) {
      setActiveItem(null);
    } else {
      setActiveItem({ semestreIdx, contenidoIdx });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-[#22203b] rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">{title}</h2>
      <ol className="divide-y divide-gray-400">
        {data.map((item, semestreIdx) => (
          <li
            key={semestreIdx}
            className="flex flex-col space-y-2 py-4 px-3 rounded bg-[#22203b] hover:scale-[1.03] hover:shadow-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition duration-300 ease-in-out group"
          >
            <div className="flex items-start space-x-4">
              <Icon
                name={item.icon}
                width="48"
                height="48"
                className="flex-shrink-0 text-teal-400"
              />
              <div className="flex-1">
                <time className="block mb-1 text-lg font-semibold text-purple-400">{item.semestre}</time>
                <ul className="list-disc list-inside text-gray-300">
                  {item.contenidos.map((contenido, contenidoIdx) => {
                    const isOpen =
                      activeItem?.semestreIdx === semestreIdx &&
                      activeItem?.contenidoIdx === contenidoIdx;
                    return (
                      <li key={contenidoIdx} className="mb-2 flex items-center space-x-2 list-disc list-inside">
                        <button
                          onClick={() => toggleItem(semestreIdx, contenidoIdx)}
                          className={`text-left font-semibold flex-1 focus:outline-none ${
                            isOpen ? "text-indigo-300" : "hover:text-indigo-400"
                          }`}
                        >
                          {contenido.titulo}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
