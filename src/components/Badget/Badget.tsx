import React from "react";

export interface Props {
    className?              : string;
    children?               : React.ReactNode | string;
    classNameContainer?     : string;
}

export const Badget         = ({
    className               = "",
    children,
    classNameContainer      = "",
} : Props) => {
    return (
        <div className={`mb-4 ${classNameContainer}`}>
            <span className={`inline-block py-1 px-3 rounded-full text-xs bg-teal-500/10 text-teal-400 ${className}`}>
                {children}
            </span>
        </div>
    );
};