import { Icon } from "@/components/Icons/Icon";

export interface Props {
    id?             : string;
    name?           : string;
    type?           : string;
    label?          : string;
    placeholder?    : string;
    textarea?       : boolean;
    className?      : string;
    rows?           : number;
    icon?           : string;
} 

export const Input = ({
id,   
name,
type            = "text",
label,
placeholder,
textarea        = false,
className       =" ",
rows            = 5,
icon,
}: Props) => {
    return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm text-white">
          {label}
        </label>
      )}

      {textarea ? (
        <div className="relative">
          {icon && (
            <Icon
              name={icon}
              className="absolute left-2 top-2 text-gray-400 size-8"
            />
          )}
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            rows={rows}
            className={`bg-gray-800 text-white py-3 px-4 ${
              icon ? "pl-12" : ""
            } rounded-md resize-none w-full focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
        </div>
      ) : (
        <div className="relative">
          {icon && (
            <Icon
              name={icon}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 size-8"
            />
          )}
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={`bg-gray-800 text-white py-3 px-4 ${
              icon ? "pl-12" : ""
            } rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
        </div>
      )}
    </div>
  );
};