import { Icon as IconElement } from "@iconify/react";

export interface Props {
    name?            : string;
    width?           : string;
    height?          : string;
    className?       : string;
}

export const Icon    = ({
    name             = "solar:4k-bold-duotone",
    width,
    height,
    className,
} : Props) => {
    return (
        <IconElement 
            icon        = {name}
            width       = {width}
            height      = {height}
            className   = {className}            
        />
    );
};