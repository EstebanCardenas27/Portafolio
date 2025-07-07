import { Section } from "@/components/Containers/Section";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { Icon } from "@/components/Icons/Icon";
import { Container } from "@/components/Containers/Container";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { ProjectCard } from "@/components/Cards/Home/ProjectsCard";
import { ProjectsCardData } from "@/constants/Projects/ProjectsCardData";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <Section className="">
      <Container>
        <div className="flex flex-col items-center">
          <HeaderBlock
            badgeText="Proyectos"
            title="Destacados"
            description="Trabajos seleccionados que destacan mi capacidad técnica y enfoque profesional."
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-wrap w-full max-w-screen-xl gap-x-4 gap-y-10 2xl:max-w-screen-2xl justify-between"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <ButtonLink href="/projects" className="flex items-center my-15">
              Ver Proyectos
              <Icon name="fa-solid:angle-right" width="16" height="16" />
            </ButtonLink>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
