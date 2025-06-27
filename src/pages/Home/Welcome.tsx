import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { Container } from "@/components/Containers/Container";
import { Section } from "@/components/Containers/Section";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { Icon } from "@/components/Icons/Icon";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { skills } from "@/constants//Home/skills";
import { SkillBox } from "@/components/Skillbox/SkillBox";
import { motion } from "motion/react";
import { zoomIn } from "@/Utils/animations";

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
    <Section className="md:pt-20 ">
      <Container className="flex flex-col md:flex-row md:gap-8 ">
        <div className="w-full xl:w-1/2 flex flex-col justify-center space-y-6 py-20 md:py-0">
          <HeaderBlock
            badgeText="Bienvenido a mi Portafolio"
            title={
              <>
                <span className="lg:text-4xl"  >Hola, soy</span>
                <br />
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-400 text-3xl lg:text-5xl">
                  Esteban
                </span>
              </>
            }
            subtitle={
              <AnimatePresence mode="wait">
                <motion.span
                  key={frases[indexFrase]}
                  initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="block"
                >
                  {frases[indexFrase]}
                </motion.span>
              </AnimatePresence>
            }
            classNameSubtitle="min-h-[2.5rem] text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-400"
            description= "Apasionado por la programación y el desarrollo de software con experiencia en Python, JavaScript y C++. Construyo aplicaciones web modernas usando Node.js, React.js y Next.js. Freelancer especializado en soluciones impulsadas por IA."
            align="center"
            className="xl:items-start xl:text-left"
          />

          <div className="flex flex-wrap justify-center xl:justify-start gap-4 pb-8">
            <ButtonLink className="flex items-center gap-2">
              Contáctame
              <Icon name="fa-solid:angle-right" width="16" height="16" />
            </ButtonLink>
            <ButtonLink variant="secundary">Ver Proyectos</ButtonLink>
          </div>
        </div>

        <motion.div
          {...zoomIn}
          className="hidden lg:flex xl:w-1/2 flex-col justify-center space-y-6"
        >
          <SkillBox skills={skills} />
        </motion.div>
      </Container>
    </Section>
  );
};
// 