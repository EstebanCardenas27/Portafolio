import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { AboutInfo } from "@/pages/About/AboutInfo";
import { DarkModeImageSlider } from "@/pages/About/DarkModeImageSlider";
import { ResponsiveSkillSections } from "@/pages/About/ResponsiveSkillSections";
import { PersonalCard } from "@/components/Cards/About/PersonalCard";
import { PersonalInfo } from "@/constants/About/PersonalInfo";



export function About() {  
 
  return (  
      <Section className="pt-20 pb-20 md:pt-20 md:pb-20 ">  
        <Container className=""> 
            <div className="xl:pt-10">
              <HeaderBlock
                badgeText="Conóceme"
                title="Un poco sobre mí"
                description="Cuento con formación académica sólida, experiencia en el campo tecnológico y una actitud proactiva hacia el aprendizaje y la actualización profesional permanente."
                className = "!mb-12 md:!mb-12" 
                align="center"
              />

              <div className="flex flex-col 2xl:flex-row w-full gap-8 items-center xl:pt-10">              
                <div className="w-full h-full  2xl:w-1/2 flex justify-center items-center">
                  <div className="w-full h-full bg-gray-800 p-4 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.2)]">                  
                      <DarkModeImageSlider />                  
                  </div>
                </div>              
                <div className="w-full 2xl:w-1/2 ">
                  <AboutInfo />
                </div>
              </div>
            </div>

            <div className="py-20 lg:pt-60">
              <HeaderBlock                
                title="Tecnologías con las que desarrollo"
                description="Herramientas, lenguajes y frameworks que utilizo en mis proyectos y con los que sigo creciendo como profesional."
                className="!mb-12"
                align="center"
              />
              <ResponsiveSkillSections />              
            </div>  

            <div className="py-20 lg:pt-60">
              <HeaderBlock                
                title="Raíces rurales, visión digital"                
                className="!mb-12 md:!mb-12"
                align="center"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PersonalInfo.map((block, index) => (
                  <PersonalCard key={index} {...block} />
                ))}
              </div>
            </div>
          </Container>
      </Section>    
  )
}
