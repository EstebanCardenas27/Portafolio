import { useState } from "react";
import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { ButtonSub } from "@/components/Buttons/ButtonSub";
import { ResumenTabButton } from "@/components/Buttons/ResumeTabButton";
import { ProfileTabsData } from "@/constants/Resume/ProfileTabsData";

export function Resume (){
  const [selected, setSelected] = useState("Skills");
  const Component  = ProfileTabsData.find((items)=> items.key === selected )?.component;       
  
  return(
    <Section className="pt-20 pb-20 md:pt-24 md:pb-20">
      <Container>
          <div className="">
              <HeaderBlock
                  badgeText="Resumen"
                  title="Experiencia Profesional"
                  description="Creo soluciones web y sistemas automatizados para resolver necesidades reales en sectores con baja digitalización, ayudando a pequeños negocios y emprendedores a crecer con tecnología."
                  className = "!mb-12 md:!mb-12" 
                  align="center"
              />
              <div className="flex justify-center py-10">
                  <ButtonSub
                  icon = "line-md:download-loop"
                  variant="primary"
                  className="!w-60 "
                  onClick={() => console.log("Test")}
              >Descargar CV</ButtonSub>
              </div>                    
             
              <div className="mt-12 w-full py-10">
                <div className="flex gap-3 px-2">
                    {ProfileTabsData.map(({ key, label, icon }) => (
                      <ResumenTabButton
                        key={key}
                        label={label}
                        icon={icon}
                        isSelected={selected === key}
                        onClick={() => setSelected(key)}
                      />
                    ))}
                </div>
                 
                <div className="pt-12 text-white">                        
                  {Component && (<Component/>)}                        
                </div>
              </div>
          </div>                
      </Container>
    </Section>
  );
};