import React from "react";

export interface Props {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  bgColor?: string;
  padding?: string;
  className?: string;
  center?: boolean;
}

export const Section = ({
  id,
  title,
  subtitle,
  children,
  bgColor = "bg-black",
  padding = "py-12",
  className = "",
  center = false,
}: Props) => {
  return (
    <section
      id={id}
      className={`
        ${bgColor} 
        ${padding} 
        ${center ? "text-center flex flex-col items-center justify-center" : ""} 
        ${className}
      `}
    >
      <div className="container mx-auto max-w-7xl px-4">
        {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}
        {subtitle && (
          <p className="text-muted-foreground text-lg mb-6">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
};
