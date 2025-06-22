import React from "react";

export interface Props {
    className?: string;
    children?: React.ReactNode | string;
}

export const Badget     = ({
    className           = "",
    children
} : Props) => {
    return (
        <div className="mb-4">
            <span className={`inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4 ${className}`}>
                {children}
            </span>
        </div>
    );
};