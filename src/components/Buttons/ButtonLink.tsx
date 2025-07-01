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

    const theme         = {
        "primary"       : "bg-teal-500 text-white  hover:scale-105 hover:shadow-[0_0_15px_rgba(20,184,166,0.7)]",
        "secundary"     : "bg-[#22203b] text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]",
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

