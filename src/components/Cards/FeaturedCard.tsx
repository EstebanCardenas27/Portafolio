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
  <article className="flex flex-col justify-center items-center text-center border border-white/10 rounded-lg p-8 bg-gray-900 transition-all duration-300 transform hover:-translate-y-4 hover:shadow-[0_0_30px_rgba(15,118,100,0.3)] h-full">
    <div className="flex justify-center items-center mb-6 w-16 h-16 rounded-lg bg-[#22203b]">
      <Icon name={icon} className="text-teal-300 w-8 h-8" />
    </div>
    <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400 text-base leading-relaxed">{description}</p>
  </article>
);