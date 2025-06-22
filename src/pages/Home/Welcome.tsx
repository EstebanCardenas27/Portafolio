import { useState, useEffect } from "react";
import { Container } from "@/components/Containers/Container";
import { Section } from "@/components/Containers/Section";
import { Background } from "@/components/Home";
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
    <Section className="h-screen">
      <Background />
      <Container className="flex">
        <div className="w-1/2 h-auto">
          <Badget>Bienvenido a mi Portafolio</Badget>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-white" >Hola, soy</span>
          <br />
          <span className="mt-1 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-400 ">
            Esteban
          </span>
        </h1>
          <div className="h-12 mb-6">
            <span className="inline-block text-2xl md:text-3xl font-medium text-muted-foreground transition-opacity duration-500">
              {frases[indexFrase]}
            </span>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Apasionado por la programación y el desarrollo de software con experiencia en Python, JavaScript y C++. Construyo aplicaciones web modernas usando Node.js, React.js y Next.js. Freelancer especializado en soluciones impulsadas por IA.
          </p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink className="flex items-center gap-2">
              Contáctame
              <Icon name="fa-solid:angle-right" width="16" height="16" />
            </ButtonLink>
            <ButtonLink variant="secundary">
              Ver Proyectos
            </ButtonLink>
          </div>
        </div>
        <div className="w-1/2 h-auto flex justify-center items-center ">          
          <SkillBox skills={skills} />
        </div>
      </Container>
    </Section>
  );
};