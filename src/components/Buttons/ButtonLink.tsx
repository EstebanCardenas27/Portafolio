import React from "react";

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
    children
} : Props) => {

    const theme         = {
        "primary"       : "bg-teal-500 text-white hover:bg-teal-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(20,184,166,0.7)]",
        "secundary"     : "bg-[#22203b] text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]",
    };

    return (
        <a
            href={href}
            className={`${theme[variant]} px-6 py-3 rounded-lg font-medium transition-transform duration-300 transform inline-flex items-center ${className}`}
        >
            {children}
        </a>
    );
};

