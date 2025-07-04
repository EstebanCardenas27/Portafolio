import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { ButtonSub } from "@/components/Buttons/ButtonSub";
import { ProfileTabsData } from "@/constants/Resume/ProfileTabsData";
import { Tabs } from "@/components/Tabs/Tabs";

export function Resume (){
  return(
    <Section>
      <Container>
          <div>
              <HeaderBlock
                  badgeText="Resumen"
                  title="Experiencia Profesional"
                  description="Creo soluciones web y sistemas automatizados para resolver necesidades reales en sectores con baja digitalización, ayudando a pequeños negocios y emprendedores a crecer con tecnología."                  
                  align="center"
              />
              <div className="flex justify-center py-10">
                  <a href="/docs/CV_EstebanC.pdf" download>
                  <ButtonSub
                      icon = "line-md:download-loop"
                      variant="primary"
                      className="!w-60 "                 
                    >
                      Descargar CV
                    </ButtonSub>
                  </a>                  
              </div> 
              <Tabs tabs={ProfileTabsData} initialKey="Skills" />
          </div>                
      </Container>
    </Section>
  );
};