import React from "react";
import { Section } from "./Section"; 

import { Icon as IconElement } from "@iconify/react";

export interface IconProps {
  name?: string;
  width?: string;
  height?: string;
  className?: string;
}

export const Icon = ({
  name = "solar:4k-bold-duotone",
  width,
  height,
  className,
}: IconProps) => {
  return (
    <IconElement
      icon={name}
      width={width}
      height={height}
      className={className}
    />
  );
};

interface CardProps {
  color: string; 
  title: string;
  icon: string; 
  children: React.ReactNode;
}

const Card = ({ color, title, icon, children }: CardProps) => (
  <div
    className={`p-6 text-center rounded-lg text-white border-2 border-black ${color} relative z-10`}
  >
    <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
      <Icon name={icon} width="24" height="24" className="text-teal-400" />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p>{children}</p>
  </div>
);

export const SectionWhoIAm = () => {
  return (
    <Section
      id="who-i-am"
      title="Who I Am"
      subtitle="I'm a Computer Science student specializing in AI & ML. Passionate about programming, AI integration, and building innovative web applications."
      bgColor="py-24 bg-secondary/50"
      padding="py-24"
      center={true}
      className="min-h-[400px] relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <Card color="bg-red-400" title="Web Development" icon="lucide:code">
          Experienced in building modern, responsive web applications using React.js, Next.js, and Node.js.
        </Card>

        <Card color="bg-green-400" title="Computer Science" icon="lucide:graduation-cap">
          Strong foundation in algorithms, data structures, and programming principles.
        </Card>

        <Card color="bg-blue-400" title="AI & Machine Learning" icon="lucide:briefcase">
          Specializing in artificial intelligence and machine learning algorithms and applications.
        </Card>
      </div>

      <div className="mt-12 text-center">
        <a
          className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
          href="/about"
        >
          More About Me
          <Icon
            name="lucide:arrow-right"
            width="16"
            height="16"
            className="ml-2"
          />
        </a>
      </div>
    </Section>
  );
};