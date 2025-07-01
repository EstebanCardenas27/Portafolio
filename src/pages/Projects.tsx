import { useState } from "react";
import { usePulseWave } from "@/hooks/UsePulseWave";
import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { useBreakpoint } from "@/hooks/useBreackpoint";
import { ProjectsTabFiltersData } from "@/constants/Projects/ProjectsTabFiltersData";
import { ProjectsFilterPanel } from "@/pages/Projects/ProjectsFilterPanel";
import { ProjectCard } from "@/components/Cards/Home/ProjectsCard";
import { ProjectsCardData } from "@/constants/Projects/ProjectsCardData";


export const Projects = () => {
  const canvasRef = usePulseWave();
  const bp = useBreakpoint();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const clipPath =
    bp && ["lg", "xl", "2xl"].includes(bp)
      ? "polygon(39% 0, 100% 15%, 100% 34%, 75% 100%, 25% 100%, 0 75%, 0 25%)"
      : undefined;

  const clipPathSection2 =
    bp && ["lg", "xl", "2xl"].includes(bp)
      ? "polygon(100% 53%, 100% 100%, 0 61%, 0 0)"
      : undefined;

  const filteredProjects = ProjectsCardData.filter((project) => {
    const categoryMatch =
      selectedCategory === "All" ||
      (project.tag?.includes(selectedCategory));
    
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
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/assets/projects.jpg')] bg-cover bg-center opacity-50 -z-10" aria-hidden="true" />

      <Section className="relative !py-0 w-full overflow-hidden bg-[#22203b]/80" clipPath={clipPath}>
        <Container className="">
          <HeaderBlock
            badgeText="Portafolio"
            title="Diseños de la Solución"
            description="Una muestra práctica de mis trabajos recientes en diferentes ámbitos tecnológicos."
            align="center"
            className="!gap-y-0"
          />

          <ProjectsFilterPanel
            categories={ProjectsTabFiltersData}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            search={searchQuery}                
            onSearch={setSearchQuery} 
          />
           <div className="flex flex-wrap w-full max-w-screen-xl gap-y-10 2xl:max-w-screen-2xl justify-between mt-10">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((feature, i) => (
                <ProjectCard
                  key={i}
                  img={feature.img || "/assets/default.png"}
                  url={feature.url || "#"}
                  title={feature.title}
                  description={feature.description}                  
                  tags={feature.tags}
                />
              ))
            ) : (
              <p className="text-center text-white w-full mt-10">
                No se encontraron proyectos que coincidan con los filtros.
              </p>
            )}
          </div>
        </Container>
      </Section>

      <Section className="relative !py-0 w-full overflow-hidden bg-[#22203b]/80" clipPath={clipPathSection2}>
        <Container className="">
          <HeaderBlock
            badgeText="Portafolio"
            title="Diseños de la Solución"
            description="Una muestra práctica de mis trabajos recientes en diferentes ámbitos tecnológicos."
            align="center"
          />
        </Container>
      </Section>

      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      />
    </>
  );
};
