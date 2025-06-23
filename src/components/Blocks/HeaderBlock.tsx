import { Badget } from "@/components/Badget/Badget";

interface Props {
  badgeText?: string;
  title?: string;
  description?: string;
}

export const HeaderBlock = ({
  badgeText,
  title,
  // description,
}: Props) => (
  <div className="mb-16 w-250 text-center px-4">
    {badgeText && <Badget>{badgeText}</Badget>}

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
      {title}
    </h2>

    {/* <p className="text-gray-400 text-base sm:text-lg max-w-[100] mx-auto">
      {description}
    </p> */}
  </div>
);
