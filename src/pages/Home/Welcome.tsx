import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/Containers/Container";
import { Section } from "@/components/Containers/Section";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { Icon } from "@/components/Icons/Icon";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { SkillBox, type SkillProps } from "@/components/Skillbox/SkillBox";
import { fadeRotate3D, blurIn, zoomIn } from "@/Utils/animations";
import { skills } from "@/constants/Home/skills";

export const Welcome = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillProps | null>(null);

  const frases = [
    "Desarrollador Full Stack",
    "Diseñador UI/UX",
    "Freelancer",
    "Entusiasta de la IA",
    "Analista de Datos",
  ];
  const [indexFrase, setIndexFrase] = useState(0);

  // Rotar frases cada 3s
  useEffect(() => {
    const id = setInterval(() => {
      setIndexFrase((prev) => (prev + 1) % frases.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Evitar scroll de fondo cuando el modal esté abierto
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", Boolean(selectedSkill));
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedSkill]);

  const closeModal = () => setSelectedSkill(null);

  return (
    <Section>
      <Container className="flex flex-col xl:flex-row">
        <div className="flex flex-col xl:w-1/2">
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
              <motion.span {...fadeRotate3D} key={frases[indexFrase]} className="block">
                {frases[indexFrase]}
              </motion.span>
            }
            classNameSubtitle="min-h-[2.5rem] text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-400"
            description="Apasionado por la programación y el desarrollo de software con experiencia en React Native, JavaScript y C++. Construyo aplicaciones web modernas usando Node.js, React.js. Freelancer especializado en soluciones impulsadas por IA."
            align="center"
            className="!py-2 px-2 items-center text-center xl:items-start xl:text-left"
          />

          <div className="flex flex-wrap justify-center xl:justify-start gap-4 my-4">
            <ButtonLink href="/contact" className="flex items-center gap-2">
              Contáctame
              <Icon name="fa-solid:angle-right" width="16" height="16" />
            </ButtonLink>
            <ButtonLink href="/projects" variant="secundary" className="flex items-center">
              Ver Proyectos
            </ButtonLink>
          </div>
        </div>

        <motion.div {...zoomIn} className="hidden xl:flex xl:w-1/2 flex-col justify-center">
          <SkillBox skills={skills} onSkillSelect={setSelectedSkill} />
        </motion.div>
      </Container>

      {/* Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            {...blurIn}
            className="fixed inset-0 bg-transparent flex items-center text-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 355 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="
                bg-gradient-to-tl from-purple-950/80 via-purple-500/60 to-purple-800/40
                backdrop-blur-lg
                border border-purple-200/20
                rounded-full
                p-8
                max-w-md
                mx-4
                shadow-2xl
              "
            >
              <h2 className="text-2xl font-bold text-black mb-4">
                {selectedSkill.title}
              </h2>
              <p className="mb-6 text-gray-100">
                {selectedSkill.description}
              </p>              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};