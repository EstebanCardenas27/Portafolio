import { Icon } from "@/components/Icons/Icon";
import { Badget } from "@/components/Badget/Badget";

interface Props {
  img?: string;
  url?: string;
  title?: string;
  description?: string;
  btnText?: string;
  iconName?: string;
  sourceCode?: string;
  tags?: string[];
  showViewMoreButton?: boolean;
}

export const ProjectCard = ({
  img,
  url = "#",
  title = "Título del Proyecto",
  description = "Descripción breve del proyecto.",
  btnText = "Ver más",
  iconName = "fa-solid:angle-right",
  sourceCode = "Código Fuente",
  tags = [],
  showViewMoreButton = true,
}: Props) => (
  <details className="relative w-[20rem] group mx-auto flex flex-col h-full glass-panel overflow-hidden !p-2">
    <div className="absolute inset-0 z-0 clip-shape bg-slate-600/15"></div>
    <summary className="cursor-pointer flex items-center justify-between px-2 py-3">
      <span className="text-lg md:text-xl font-semibold text-white">
        {title}
      </span>
      <Icon
        name="ic:baseline-expand-more"
        width="24"
        height="24"
        className="text-white transition-transform duration-300 group-open:rotate-180"
      />
    </summary>

    <a href={url} className="block overflow-hidden">
      <img
        className="rounded-t-lg w-full transition-transform duration-300 ease-in-out hover:scale-110"
        src={img}
        alt={title}
      />
    </a>

    <div className="flex flex-col gap-4 flex-grow lg:items-start text-center p-2">
      <div className="flex flex-col space-y-2 w-full">
        <p className="text-base md:text-base text-gray-400 lg:h-[3rem]">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center lg:justify-evenly lg:h-[5rem]">
            {tags.map((tag, index) => (
              <Badget
                key={index}
                className="!bg-[#22203b] !text-white"
                classNameContainer="!py-0"
                animated={false}
                pulse={false}
              >
                {tag}
              </Badget>
            ))}
          </div>
        )}
      </div>

      <div
        className={`flex w-full mt-auto ${
          showViewMoreButton ? "justify-between" : "justify-center"
        }`}
      >
        {showViewMoreButton && (
          <a
            href={url}
            className="flex-1 flex items-center justify-start gap-2 font-medium text-xs md:text-base text-teal-600 hover:text-teal-400 transition-colors duration-200"
          >
            {btnText}
            <Icon
              name={iconName}
              width="14"
              height="14"
              className="text-inherit"
            />
          </a>
        )}
        <a
          href={url}
          className="flex items-center justify-end gap-2 font-medium text-xs md:text-base text-gray-400 hover:text-gray-200 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            name="uit:github-alt"
            width="14"
            height="14"
            className="text-inherit"
          />
          {sourceCode}
        </a>
      </div>
    </div>
  </details>
);
