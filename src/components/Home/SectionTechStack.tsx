import { Section } from "../Sections/Section";

const skills = [
  { name: "Python", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "React.js", level: "80%" },
  { name: "Node.js", level: "75%" },
  { name: "Firebase", level: "70%" },
  { name: "Next.js", level: "65%" },
];

export const SectionTechStack = () => {
  return (
    <Section
      id="tech-stack"
      title="Tech Stack"
      subtitle="A collection of technologies I work with to build web applications and solve complex problems."      
      padding="py-24"
      center
      className="relative min-h-screen flex items-center justify-center bg-transparent"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-6 rounded-lg border border-gray-200 bg-gray-100 shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium">{skill.name}</h3>
              <span className="text-sm text-gray-500">{skill.level}</span>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-500"
                style={{ width: skill.level }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};