import { useState } from "react";
import { motion } from "framer-motion";
import { usePulseWave } from "@/hooks/UsePulseWave";
import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { ProjectsTabFiltersData } from "@/constants/Projects/ProjectsTabFiltersData";
import { ProjectsFilterPanel } from "@/pages/Projects/ProjectsFilterPanel";
import { ProjectCard } from "@/components/Cards/Home/ProjectsCard";
import { ProjectsCardData } from "@/constants/Projects/ProjectsCardData";

import {
  fadeUp,
  slideInLeft,
  staggerContainer,
  staggerItem,
  zoomIn,
} from "@/Utils/animations";

export const Projects = () => {
  const canvasRef = usePulseWave();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = ProjectsCardData.filter((project) => {
    const categoryMatch =
      selectedCategory === "All" ||
      project.tag?.includes(selectedCategory);

    const searchMatch =
      project.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-[url('/assets/projects.jpg')] bg-cover bg-center opacity-30 -z-10"
        aria-hidden="true"
      />

      <Section className="relative w-full overflow-hidden !py-10 !lg:py-0 mb-20">
        <Container>
          {/* HeaderBlock no lo tocamos, ya tiene sus animaciones */}
          <HeaderBlock
            badgeText="Portafolio"
            title="Diseños de la Solución"
            description="Una muestra práctica de mis trabajos en diferentes ámbitos tecnológicos."
            align="center"
            classNameBadge="!bg-violet-500 !opacity-80 !text-white"
          />

          {/* Animación de entrada del filtro */}
          <motion.div {...fadeUp}>
            <ProjectsFilterPanel
              categories={ProjectsTabFiltersData}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
              search={searchQuery}
              onSearch={setSearchQuery}
            />
          </motion.div>

          <motion.section
            {...staggerContainer}
            className="mt-10 mb-12"
          >
            <motion.div
              className="flex flex-wrap w-full max-w-screen-xl gap-y-10 2xl:max-w-screen-2xl justify-between"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    initial="initial"
                    animate="animate"
                    transition={{
                      delay: i * 0.1,
                      duration: 0.8,
                    }}
                  >
                    <motion.div {...zoomIn}>
                      <ProjectCard
                        img={feature.img || "/assets/default.png"}
                        url={feature.url || "#"}
                        title={feature.title}
                        description={feature.description}
                        tags={feature.tags}
                        showViewMoreButton={false}
                      />
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <motion.p
                  {...slideInLeft}
                  className="text-center text-white w-full mt-10"
                >
                  No se encontraron proyectos que coincidan con los filtros.
                </motion.p>
              )}
            </motion.div>
          </motion.section>
        </Container>
      </Section>

      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      />
    </>
  );
};
