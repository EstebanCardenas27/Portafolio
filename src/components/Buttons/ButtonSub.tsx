import React from "react";
import { Icon } from "@/components/Icons/Icon";

export interface Props {
  className?        : string;
  variant?          : "primary" | "secundary";
  type?             : "submit" | "button" | "reset";
  children?         : React.ReactNode | string;
  onClick?          : () => void;
  icon?             : string;
  iconPosition?     : "left" | "right";
}

export const ButtonSub = ({
  className         = "",
  variant           = "primary",
  type              = "submit",
  children,
  onClick,
  icon,
  iconPosition = "left"
}: Props) => {
  const theme = {
    primary:
      "bg-teal-500 text-white hover:bg-teal-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(20,184,166,0.7)]",
    secundary:
      "bg-[#22203b] text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full px-6 py-3 rounded-lg font-medium transition-transform duration-300 transform inline-flex items-center justify-center gap-2 ${theme[variant]} ${className}`}
    >
        {icon && iconPosition === "left" && (
            <Icon name={icon} className="w-5 h-5"/>
        )}
      {children}
        {icon && iconPosition === "right" && (
            <Icon name={icon} className="w-5 h-5"/>
        )}
    </button>
  );
};