import { Icon } from "@/components/Icons/Icon";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";


export interface Props {
  children?: React.ReactNode | string;
  buttons: { label: string; href?: string; onClick?: () => void }[];
  welcomeText?: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  description: React.ReactNode;
  icon?: string;
}

export const LeftColumn = ({
  title,
  subtitle,
  description,
  welcomeText = "Welcome to my portfolio",
  buttons,
  icon,
}: Props) => (
  <div>    
    <div className="mb-4">
      <span className="inline-block py-1 px-3 rounded-full text-xs font-medium text-teal-400 border-2 border-teal-500 animate-pulse">
        {welcomeText}
      </span>
    </div>    
    <h1 className="text-5xl md:text-6xl font-bold mb-4 flex items-center gap-3">
      {icon && (
        <Icon
          name={icon}
          width="48"
          height="48"
          className="text-teal-400"
        />
      )}
      {title}
    </h1>    
    <div className="h-12 mb-6">
      <span className="inline-block text-2xl md:text-3xl font-medium text-muted-foreground">
        {subtitle}
      </span>
    </div>
    <p className="text-lg text-muted-foreground mb-8 max-w-lg">{description}</p>
    <div className="flex flex-wrap gap-4">
      {buttons.map((btn, idx) => {
        const isPrimary = btn.label.toLowerCase() === "get in touch";

        return (
          <Button
            key={idx}
            asChild
            variant="default"
            size="lg"
            className={`
              px-6 py-3 rounded-lg font-medium transition-transform duration-300
              transform
              ${isPrimary
                ? "bg-teal-500 text-white hover:bg-teal-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(20,184,166,0.7)]"
                : "bg-gray-900 text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              }
            `}
          >
            <a
              href={btn.href || "#"}
              onClick={btn.onClick}
              className="inline-flex items-center"
            >
              {btn.label}
              {isPrimary && (
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </a>
          </Button>
        );
      })}
    </div>
  </div>
);