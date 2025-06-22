import { Icon } from "@/components/Icons/Icon";

interface Props {
  icon?: string;
  title: string;
  description: string;
}

export const FeatureCard = ({
  icon = "solar:4k-bold-duotone",
  title,
  description,
}: Props) => (
  <article className="flex flex-col items-center text-center border border-white/10 rounded-lg p-8 bg-gray-900 max-w-sm mx-auto">
    <div className="flex justify-center items-center mb-6 w-16 h-16 rounded-lg bg-teal-700">
      <Icon name={icon} className="text-teal-200 w-8 h-8" />
    </div>
    <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-500 text-base leading-relaxed">{description}</p>
  </article>
);