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
  <article className="flex flex-col border border-white/10 rounded-lg bg-[#101225] max-w-sm shadow-sm overflow-hidden">
    <a href={url} className="block overflow-hidden">
      <img
        className="rounded-t-lg w-full object-cover transition-transform duration-300 ease-in-out hover:scale-120"
        src={img}
        alt={title}
      />
    </a>
    <div className="p-5 flex flex-col gap-4">
      <a href={url}>
        <h5 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
      </a>
      <p className="font-normal text-gray-400">{description}</p>     
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badget key={index} className="!bg-[#22203b] !text-white">
                {tag}
              </Badget>
            ))}
          </div>
        )}
     

      <div className="flex justify-between items-center mt-2">
        <a
          href={url}
          className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-400 transition-colors duration-200"
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
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors duration-200"
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