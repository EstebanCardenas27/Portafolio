import { RightColumn } from "./Rightcolumn";
import { LeftColumn } from "./LeftColumn";

const skills = [
  {
    title: "Python",
    icon: "lucide:code",
    description: "Expert level proficiency",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    title: "JavaScript",
    icon: "lucide:file-code",
    description: "Frontend & backend development",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    title: "React.js",
    icon: "lucide:globe",
    description: "UI Library",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    title: "SQL",
    icon: "lucide:database",
    description: "Database",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    title: "C++",
    icon: "lucide:terminal",
    description: "Systems programming",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    title: "Node.js",
    icon: "lucide:server",
    description: "Backend development",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    title: "UI/UX Design",
    icon: "lucide:tv",
    description: "Interface design & prototyping",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    title: "AI & Machine Learning",
    icon: "lucide:git-branch",
    description: "Model development & deployment",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    title: "Next.js",
    icon: "lucide:code",
    description: "React framework",
    colSpan: 3,
    rowSpan: 2,
  },
];

export const SkillBox = () => {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal-500/20 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-amber-500/20 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-rose-500/20 rounded-full filter blur-3xl opacity-30" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-12">
          <LeftColumn           
            welcomeText="Bienvenido a mi Portafolio"
            title={
              <>
                  <span className="block">Hi, I'm</span>
                  <span className="block mt-1 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-400">
                  Esteban
                </span>
              </>
            }
            subtitle="Web Developer"
            description="Passionate about programming and software development with expertise in Python, JavaScript, and C++. Building modern web applications using Node.js, React.js, and Next.js. Freelancer specializing in AI-powered solutions."
            buttons={[
                {
                  label: "Get in Touch",
                  href: "/contact",
                },
                {
                  label: "View Projects",
                  href: "/projects",
                },
              ]}
          />
          <RightColumn skills={skills} />
        </div>
      </div>
    </section>
  );
};