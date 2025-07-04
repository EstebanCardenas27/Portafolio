import { useState } from "react";
import { usePulseWave } from "@/hooks/UsePulseWave";
import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { ProjectsTabFiltersData } from "@/constants/Projects/ProjectsTabFiltersData";
import { ProjectsFilterPanel } from "@/pages/Projects/ProjectsFilterPanel";
import { ProjectCard } from "@/components/Cards/Home/ProjectsCard";
import { ProjectsCardData } from "@/constants/Projects/ProjectsCardData";


export const Projects = () => {
  const canvasRef = usePulseWave();  

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");  

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
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/assets/projects.jpg')] bg-cover bg-center opacity-10 -z-10" aria-hidden="true" />

      <Section className="relative w-full overflow-hidden" >
        <Container>
          <HeaderBlock 
            badgeText="Portafolio"
            title="Diseños de la Solución"
            description="Una muestra práctica de mis trabajos en diferentes ámbitos tecnológicos."
            align="center"
            className=""            
          />

          <ProjectsFilterPanel
            categories={ProjectsTabFiltersData}
            selected={selectedCategory}
            onSelect={setSelectedCategory} 
            search={searchQuery}                
            onSearch={setSearchQuery} 
          />
           
          <section >
            <div className="flex flex-wrap w-full max-w-screen-xl gap-y-10 2xl:max-w-screen-2xl justify-between mt-10 ">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((feature, i) => (
                    <ProjectCard
                      key={i}
                      img={feature.img || "/assets/default.png"}
                      url={feature.url || "#"}
                      title={feature.title}
                      description={feature.description}                  
                      tags={feature.tags}
                      showViewMoreButton= {false}
                    />
                  ))
                ) : (
                  <p className="text-center text-white w-full mt-10">
                    No se encontraron proyectos que coincidan con los filtros.
                  </p>
                )}
            </div>
          </section>
        </Container>
      </Section>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      />
    </>
  );
};




// ------------------ Utilizar clipPath con hooks------------
// import { useBreakpoint } from "@/hooks/useBreackpoint";

// const bp = useBreakpoint();


// const clipPath =
//     bp && ["lg", "xl", "2xl"].includes(bp)
//       ? "inset(0 13% 0 15%)"
//       : undefined;

//   const clipPathSection2 =
//     bp && ["lg", "xl", "2xl"].includes(bp)
//       ? "inset(6% 0 11% 0)"
//       : undefined;

// style={clipPath ? { clipPath: clipPath } : {}}
