import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { Container } from "@/components/Containers/Container";
import { Section } from "@/components/Containers/Section";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { Icon } from "@/components/Icons/Icon";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { SkillBox } from "@/components/Skillbox/SkillBox";
import { motion } from "motion/react";
import { fadeRotate3D, zoomIn } from "@/Utils/animations";
import { skills } from "@/constants/Home/skills";


export const Welcome = () => {
  const frases = [
    "Desarrollador Full Stack",
    "Diseñador UI/UX",
    "Freelancer",
    "Entusiasta de la IA",
    "Analista de Datos",
  ];

  const [indexFrase, setIndexFrase] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexFrase((prev) => (prev + 1) % frases.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <Section>
      <Container className="flex flex-col xl:flex-row w-full ">
        <div className="flex flex-col xl:w-1/2 ">
          <HeaderBlock
            badgeText="Bienvenido a mi Portafolio"
            title={
              <>
                <span>Hola, soy</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-400">
                  Esteban
                </span>
              </>
            }
            subtitle={
              <AnimatePresence mode="wait">
                <motion.span
                  key={frases[indexFrase]} 
                  {...fadeRotate3D}                 
                  className="block"
                >
                  {frases[indexFrase]}
                </motion.span>
              </AnimatePresence>
            }
            classNameSubtitle="min-h-[2.5rem] text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-400"
            description= "Apasionado por la programación y el desarrollo de software con experiencia en Python, JavaScript y C++. Construyo aplicaciones web modernas usando Node.js, React.js y Next.js. Freelancer especializado en soluciones impulsadas por IA."
            align="center"
            className="items-center text-center xl:items-start xl:text-left "
          />

          <div className="flex flex-wrap justify-center xl:justify-start gap-4">
            <ButtonLink href="/contact" className="flex items-center gap-2">Contáctame
              <Icon name="fa-solid:angle-right" width="16" height="16" />
            </ButtonLink>
            <ButtonLink className="flex items-center" href="/projects" variant="secundary">Ver Proyectos</ButtonLink>
          </div>
        </div>

        <motion.div
          {...zoomIn}
          className="hidden xl:flex xl:w-1/2 flex-col justify-center"
        >
          <SkillBox skills={skills} />
        </motion.div>
      </Container>
    </Section>
  );
};
// 