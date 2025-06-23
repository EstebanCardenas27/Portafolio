import { useState, useEffect } from "react";
import { Container } from "@/components/Containers/Container";
import { Section } from "@/components/Containers/Section";
import { skills } from "@/constants/skills";
import { SkillBox } from "@/components/Skillbox/SkillBox";
import { Badget } from "@/components/Badget/Badget";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { Icon } from "@/components/Icons/Icon";

export const Welcome = () => {

    const frases = [
        "Desarrollador Full Stack",
        "Diseñador UI/UX",
        "Freelancer",
        "Entusiasta de la IA",
        "Analista de Datos",

    ];

    const [ indexFrase, setIndexFrase ] = useState(0);
    useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexFrase((prev) => (prev + 1) % frases.length);
    }, 2500); 

    return () => clearInterval(intervalo);
  }, []);

return (
  <Section className="flex flex-col md:flex-row">        
    <Container className="flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2 h-auto mb-10 md:mb-0 text-center md:text-left">
        <Badget>Bienvenido a mi Portafolio</Badget>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="text-white">Hola, soy</span>
          <br />
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-400">
            Esteban
          </span>
        </h1>

        <div className="h-12 mb-6">
          <span className="inline-block text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground transition-opacity duration-500">
            {frases[indexFrase]}
          </span>
        </div>

        <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
          Apasionado por la programación y el desarrollo de software con experiencia en Python, JavaScript y C++. Construyo aplicaciones web modernas usando Node.js, React.js y Next.js. Freelancer especializado en soluciones impulsadas por IA.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <ButtonLink className="flex items-center gap-2">
            Contáctame
            <Icon name="fa-solid:angle-right" width="16" height="16" />
          </ButtonLink>
          <ButtonLink variant="secundary">Ver Proyectos</ButtonLink>
        </div>
      </div>
    
      <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
        <SkillBox skills={skills} />
      </div>
    </Container>
  </Section>
);
};