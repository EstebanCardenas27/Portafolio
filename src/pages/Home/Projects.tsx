import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import {HeaderBlock} from "@/components/Blocks/HeaderBlock";
import { Icon } from "@/components/Icons/Icon";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { ProjectCard } from "@/components/Cards/ProjectsCard";

export const Projects = () => {
  return (
    <>
      <Section className="py-24">
        <Container className="flex flex-col items-center">
         <HeaderBlock
            badgeText   = "Proyectos"
            title       = "Proyectos Destacados"
            description = "Trabajos seleccionados que destacan mi capacidad técnica y enfoque profesional."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 w-full">
            <ProjectCard
                img="/assets/landingPage.png"
                url="/proyecto/uno"
                title="Sistema de reservas"
                description="App para gestionar reservas en turismo local."   
                tags={["React", "Tailwind", "Node.js"]}     
             />
             <ProjectCard
                img="/assets/landingPage.png"
                url="/proyecto/uno"
                title="Sistema de reservas"
                description="App para gestionar reservas en turismo local." 
                tags={["React", "Tailwind", "Node.js"]}     
             />
             <ProjectCard
                img="/assets/landingPage.png"
                url="/proyecto/uno"
                title="Sistema de reservas"
                description="App para gestionar reservas en turismo local."   
                tags={["React", "Tailwind", "Node.js"]}
             />
          </div>         

          <ButtonLink className="flex items-center gap-2 mt-12">
            Ver Proyectos
            <Icon name="fa-solid:angle-right" width="16" height="16" />
          </ButtonLink>       
        </Container>
      </Section>
    </>
  );
};