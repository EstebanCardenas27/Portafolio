import React from "react";
import { motion } from "motion/react";
import { blurIn } from "@/Utils/animations";

export interface Props {
  className?          : string;
  children?           : React.ReactNode | string;
  classNameContainer? : string;
  animated?           : boolean; 
  pulse?              : boolean;
}

export const Badget = ({
  className           = "",
  children,
  classNameContainer  = "",
  animated            = true,
  pulse               = true,
}: Props) => {  
  const pulseGlow = (
    <span
      className="absolute inset-0 rounded-full bg-teal-400 opacity-60 animate-[ping_2s_ease-out_infinite] scale-[0.8]"
      style={{ filter: "blur(10px)", transformOrigin: "center" }}
    />
  );

  const content = (
    <span
      className={`
        relative inline-block py-1 px-3  rounded-full text-xs font-light  
        bg-teal-500/10 text-teal-400 ${className}
      `}
    >
      {pulse && pulseGlow}
      <span className="relative z-10">{children}</span>
    </span>
  );

  return (
    <div className={`py-4 ${classNameContainer}`}>
      {animated ? (
        <motion.div {...blurIn}>
          {content}
        </motion.div>
      ) : (
        content
      )}
    </div>
  );
};