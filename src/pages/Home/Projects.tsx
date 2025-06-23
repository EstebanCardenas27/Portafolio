import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import {HeaderBlock} from "@/components/Blocks/HeaderBlock";
import { Icon } from "@/components/Icons/Icon";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { ProjectCard } from "@/components/Cards/ProjectsCard";

export const Projects = () => {
  return (
    <>
      <Section>
        <Container className="flex flex-col items-center">
         <HeaderBlock
            badgeText   = "Proyectos"
            title       = "Implementaciones Destacadas"
            description = "Trabajos seleccionados que destacan mi capacidad técnica y enfoque profesional."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            <ProjectCard
                img="/assets/landingPage.png"
                url="/proyecto/uno"
                title="Sistema de Reservas"
                description="Para negocios que trabajan con citas o reservas."   
                tags={["Calendario", "Confirmación de Reserva", "Pago Online"]}     
             />
             <ProjectCard
                img="/assets/Corporativo.png"
                url="/proyecto/uno"
                title="Sitio Web Corporativo"
                description="Para empresas, fundaciones, negocios establecidos." 
                tags={["Página de Inicio", "Quiénes Somos", "Servicios", "Contacto"]}     
             />
             <ProjectCard
                img="/assets/ecommerce.png"
                url="/proyecto/uno"
                title="E-commerce"
                description="Para vender productos físicos o digitales."   
                tags={["Carrito de Compras", "Pasarela de Pago", "Categorías"]}
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
