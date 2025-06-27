import { Badget } from "@/components/Badget/Badget";
import { motion } from "motion/react";
import { fadeUp } from "@/Utils/animations";

interface Props {
  badgeText?: string;
  title?                : React.ReactNode | string;
  subtitle?             : React.ReactNode | string;
  description?          : React.ReactNode | string;
  align?                : "left" | "center" | "right";
  className?            : string;
  classNameBadge?       : string;
  classNameTitle?       : string;
  classNameSubtitle?    : string;
  classNameDescription? : string;
}

export const HeaderBlock = ({
  badgeText,
  title,
  subtitle,
  description,
  align                   = "center",
  className               = "",
  classNameBadge          = "",
  classNameTitle          = "",
  classNameSubtitle       = "",
  classNameDescription    = "",
}: Props) => {
  const alignmentClasses  = {
    left                  : "text-left items-start",
    center                : "text-center items-center",
    right                 : "text-right items-end",
  };

  return (
    <div className={`w-full flex flex-col ${alignmentClasses[align]} gap-y-4 mb-12 ${className}`}>
      {badgeText && (
        <motion.div {...fadeUp}>
          <Badget className={classNameBadge}>{badgeText}</Badget>
        </motion.div>
      )}

      {title && (
        <motion.h1
          {...fadeUp}
          className={`text-xl md:text-5xl lg:text-2xl font-bold text-emerald-400  ${classNameTitle}`}
        >
          {title}
        </motion.h1>
      )}

      {subtitle && (
        <motion.h2
          {...fadeUp}
          className={`text-lg md:text-xl font-semibold text-gray-400 tracking-wide min-h-[2.5rem] ${classNameSubtitle}`}
        >
          {subtitle}
        </motion.h2>
      )}

      {description && (
        <motion.p
          {...fadeUp}
          className={`text-base sm:text-lg text-gray-400 w-full lg:w-[70%] ${classNameDescription}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};