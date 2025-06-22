import { Badget } from "@/components/Badget/Badget";

interface Props{
    badgeText?    : string;
    title?        : string;
    description?  : string;
}

export const HeaderBlock = ({
  badgeText,
  title,
  description,
}: Props) => (
  <div className="mb-16 text-center">
    {badgeText && <Badget>{badgeText}</Badget>}
    <h2 className="text-4xl font-bold mb-6 text-white">{title}</h2>
    <p className="text-gray-500 text-lg leading-relaxed w-1/2 mx-auto">{description}</p>
  </div>
);