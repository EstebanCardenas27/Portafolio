import { SectionHero } from "@/components/SectionHero";
import { SectionTechStack } from "@/components/SectionTechStack";
import { SectionWhoIAm } from "@/components/SectionWhoIAm";
import { SectionProjects } from "@/components/SectionProjects";
import { SectionContact } from "@/components/SectionContact";

export default function Home() {
  return (
    <>
      <SectionHero />      
      <SectionWhoIAm /> 
      <SectionTechStack />      
      <SectionProjects />      
      <SectionContact />      
    </>
  );
}