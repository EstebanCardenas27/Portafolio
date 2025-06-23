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
      className={`h-screen w-screen flex flex-col flex-wrap justify-center items-center md:flex-row ${className}`}
    >
      {children}
    </section>
  );
};