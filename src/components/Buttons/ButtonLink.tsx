import React from "react";
import { Link } from "react-router-dom";

export interface Props {
    className?: string;
    variant?: "primary" | "secundary"
    children?: React.ReactNode | string;
    href?: string;   
}

export const ButtonLink = ({
    className           = "",
    variant             = "primary",
    href                = "#",
    children,    
} : Props) => {

    const theme = {
    primary: `
        bg-teal-500 text-white
        shadow-[0_0_10px_rgba(20,184,166,0.4)]
        active:scale-95 active:shadow-[0_0_20px_rgba(20,184,166,0.8)]
        md:hover:scale-105 md:hover:shadow-[0_0_20px_rgba(20,184,166,0.7)]
        transition-all duration-300
    `,
    secundary: `
        bg-[#22203b] text-white
        shadow-[0_0_10px_rgba(255,255,255,0.25)]
        active:scale-95 active:shadow-[0_0_20px_rgba(255,255,255,0.6)]
        md:hover:scale-105 md:hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
        transition-all duration-300
    `,
    };

    return (
        <Link
            to={href}            
            className={`${theme[variant]} flex px-6 py-3 gap-4 font-medium transition-transform duration-300 rounded-lg transform items-center cursor-pointer ${className}`}
        >
            {children}
        </Link>
    );
};

