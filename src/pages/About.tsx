import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { AboutInfo } from "@/pages/About/AboutInfo";
import { DarkModeImageSlider } from "@/pages/About/DarkModeImageSlider";
import { ResponsiveSkillSections } from "@/pages/About/ResponsiveSkillSections";
import { PersonalCard } from "@/components/Cards/About/PersonalCard";
import { AboutMeDataCard } from "@/constants/About/AboutMeDataCard";
import { TechToolsData } from "@/constants/About/TechToolsData";
import { SkillCategoriesFilter } from "@/constants/About/SkillCategoriesFilter";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section className="!py-10 !lg:py-0 mb-20">
      <Container>
        
        <HeaderBlock
          badgeText="Conóceme"
          title="Un poco sobre mí"
          description="Cuento con formación académica sólida, experiencia en el campo tecnológico y una actitud proactiva hacia el aprendizaje y la actualización profesional permanente."
          align="center"
        />

        
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full flex flex-col lg:flex-row gap-8 items-center"
        >
          <div className="w-full h-full flex justify-center items-center lg:w-1/2">
            <div className="w-full h-full soft-glass-panel p-2">
              <DarkModeImageSlider />
            </div>
          </div>

          
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
            className="w-full text-center lg:w-1/2"
          >
            <AboutInfo />
          </motion.div>
        </motion.div>

        
        <HeaderBlock
          title=" Stack Tecnológico"
          description="Herramientas, lenguajes y frameworks que utilizo en mis proyectos y con los que sigo creciendo como profesional."
          align="center"
          className="!mt-10"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.6 }}
        >
          <ResponsiveSkillSections
            data={TechToolsData}
            categories={SkillCategoriesFilter}
            initialCategory="Lenguaje"
          />
        </motion.div>
        
        <HeaderBlock
          title="Visión Digital"
          align="center"
          className="!mt-10"
        />
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4, ease: "easeOut", delay: 1 }}
        >
          {AboutMeDataCard.map((block, index) => (
            <PersonalCard key={index} {...block} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
