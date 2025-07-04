import React from "react";

export interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode | string;
  clipPath?: string;
}

export const Section = ({
  id        = "",
  className = "",
  children,
  clipPath
}: Props) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen flex flex-col justify-center items-center  ${className}`}
      style={clipPath ? { clipPath, transition: "clip-path 0.3s ease" } : undefined}
    >
      {children}
    </section>
  );
};