import React from "react";

export interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode | string;
}

export const Section = ({
  id        = "",
  className = "",
  children
}: Props) => {
  return (
    <section 
      id={id} 
      className={`min-h-[79dvh] flex flex-wrap justify-center items-center ${className}`}
    >
      {children}
    </section>
  );
};