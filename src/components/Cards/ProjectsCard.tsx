import { Icon } from "@/components/Icons/Icon";
import { Badget } from "@/components/Badget/Badget";

interface Props {
  img?          : string;
  url?          : string;
  title?        : string;
  description?  : string;
  btnText?      : string;
  iconName?     : string;
  sourceCode?   : string;
  tags?         : string[];
}

export const ProjectCard = ({
  img,
  url            = "#",
  title          = "Título del Proyecto",
  description    = "Descripción breve del proyecto.",
  btnText        = "Ver más",
  iconName       = "fa-solid:angle-right",
  sourceCode     = "Código Fuente",
  tags           = [],
}: Props) => (
  <article
    className="w-[25rem] sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-full mx-auto flex flex-col h-full border border-white/10 rounded-lg bg-[#101225]  overflow-hidden">
    <a href={url} className="block overflow-hidden">
      <img
        className="rounded-t-lg w-full transition-transform duration-300 ease-in-out hover:scale-110"
        src={img}
        alt={title}
      />
    </a>

    <div className="p-5 flex flex-col gap-4 flex-grow lg:items-start text-center ">
      <div className="flex flex-col space-y-4 w-full">
        <a href={url}>
          <h5 className="text-lg md:text-2xl font-bold text-white">{title}</h5>
        </a>
        <p className="text-base md:text-base text-gray-400 lg:h-[4rem]">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center lg:justify-evenly lg:h-[5rem]">
          {tags.map((tag, index) => (
            <Badget
              key={index}
              className="!bg-[#22203b] !text-white"
              classNameContainer="!mb-0"
              animated={false}
              pulse = {false}
            >
              {tag}
            </Badget>
          ))}
          </div>
        )}
      </div>

      <div className="flex w-full mt-auto">
        <a
          href={url}
          className="flex-1 flex items-center justify-center gap-2 font-medium text-xs md:text-base md:justify-start text-teal-600 hover:text-teal-400 transition-colors duration-200"
        >
          {btnText}
          <Icon
            name={iconName}
            width="14"
            height="14"
            className="text-inherit"
          />
        </a>
        <a
          href={url}
          className="flex-1 flex items-center justify-center gap-2 font-medium text-xs md:text-base md:justify-end text-gray-400 hover:text-gray-200 transition-colors duration-200"
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
  </article>
);