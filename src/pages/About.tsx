import { Code, Palette, Smartphone, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, Prototyping",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
    },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-lg text-slate-300 mb-6">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-white mb-4 flex justify-center">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
                  <p className="text-slate-400 text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
