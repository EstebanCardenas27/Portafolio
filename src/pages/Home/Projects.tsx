import { Section } from "@/components/Containers/Section";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { Icon } from "@/components/Icons/Icon";
import { Container } from "@/components/Containers/Container";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { ProjectCard } from "@/components/Cards/Home/ProjectsCard";
import {ProjectsCardData} from "@/constants/Projects/ProjectsCardData" 

export const Projects = () => {
  return (
    <Section className="!py-16">
      <Container>        
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">            
          <HeaderBlock
            badgeText="Proyectos"
            title="Implementaciones Destacadas"
            description="Trabajos seleccionados que destacan mi capacidad técnica y enfoque profesional."
          />

          <div className="flex flex-wrap w-full max-w-screen-xl gap-y-10 2xl:max-w-screen-2xl justify-between">
          {ProjectsCardData.map((feature, i) => (
              <ProjectCard
                key={i}               
                img={feature.img || "/assets/default.png"}  
                url={feature.url || "#"}
                title={feature.title}
                description={feature.description}  
                tags={feature.tags}                
              />
            ))}
          </div>

          <ButtonLink className="flex items-center gap-2 mt-12">
            Ver Proyectos
            <Icon name="fa-solid:angle-right" width="16" height="16" />
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
};
