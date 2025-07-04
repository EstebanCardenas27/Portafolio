import { Badget } from "@/components/Badget/Badget";
import { motion } from "motion/react";
import { fadeUp } from "@/Utils/animations";

interface Props {
  badgeText?: string;
  title?: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  description?: React.ReactNode | string;
  align?: "left" | "center" | "right";
  className?: string;
  classNameBadge?: string;
  classNameTitle?: string;
  classNameSubtitle?: string;
  classNameDescription?: string;
  style?: React.CSSProperties;
}

export const HeaderBlock = ({
  badgeText,
  title,
  subtitle,
  description,
  align = "center",
  className = "",
  classNameBadge = "",
  classNameTitle = "",
  classNameSubtitle = "",
  classNameDescription = "",
  style,
}: Props) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col w-full ${alignmentClasses[align]} gap-6 py-10 lg:py-20 ${className}`} style={style}>
      {badgeText && (
        <motion.div {...fadeUp}>
          <Badget className={classNameBadge}>{badgeText}</Badget>
        </motion.div>
      )}

      {title && (
        <motion.h1
          {...fadeUp}
          className={`text-4xl lg:text-5xl font-semibold text-emerald-400 ${classNameTitle}`}
        >
          {title}
        </motion.h1>
      )}

      {subtitle && (
        <motion.h2
          {...fadeUp}
          className={`text-lg md:text-xl font-semibold text-gray-400 min-h-[2.5rem] ${classNameSubtitle}`}
        >
          {subtitle}
        </motion.h2>
      )}

      {description && (
        <motion.p
          {...fadeUp}
          className={`text-base sm:text-lg text-white w-full lg:w-[70%] ${classNameDescription}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};