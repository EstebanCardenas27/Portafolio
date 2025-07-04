
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



export function About() {
  return (
    <Section className="!py-10 !lg:py-0">
      <Container>        
          <HeaderBlock
            badgeText="Conóceme"
            title="Un poco sobre mí"
            description="Cuento con formación académica sólida, experiencia en el campo tecnológico y una actitud proactiva hacia el aprendizaje y la actualización profesional permanente."
            align="center"            
          />

          <div className="w-full flex flex-col lg:flex-row gap-8 items-center ">
            <div className="w-full h-full flex justify-center items-center lg:w-1/2">
              <div className="w-full h-full soft-glass-panel">
                <DarkModeImageSlider />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <AboutInfo />
            </div>
          </div>

          <HeaderBlock
            title=" Stack Tecnológico"
            description="Herramientas, lenguajes y frameworks que utilizo en mis proyectos y con los que sigo creciendo como profesional."            
            align="center"
            className="!mt-10"
          />

          <ResponsiveSkillSections
            data={TechToolsData}
            categories={SkillCategoriesFilter}
            initialCategory="Lenguaje"
          />
        
          <HeaderBlock
            title="Visión Digital"            
            align="center"
            className="!mt-10"            
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {AboutMeDataCard.map((block, index) => (
              <PersonalCard key={index} {...block} />
            ))}
          </div>
        
      </Container>
    </Section>
  );
}