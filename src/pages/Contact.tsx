import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { ContactInfo } from "@/pages/Contact/ContactInfo";
import { ContactForm } from "@/pages/Contact/ContactForm";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";

export function Contact() {
  return (
    <Section className="pt-20 pb-20 md:pt-20 md:pb-20">
      <Container className="flex flex-col md:flex-row md:gap-8">
        <div className="w-full flex flex-col ">
          
          <HeaderBlock
            badgeText="Contacto"
            title="Estoy a un mensaje de distancia."
            subtitle="¡Conectemos!"
            className = "!mb-2 md:!mb-12" 
           />

            <div className="flex flex-col md:flex-row gap-8 md:gap-10">            
                <div className="w-full md:w-1/2">                    
                    <ContactInfo />                     

                    <div className="mt-5 gap-4 bg-[#22203b] p-4 rounded-2xl">
                      <p className="text-base font-semibold text-teal-400 mb-2 ml-5 ">
                        Tiempo de respuesta
                      </p>
                      <p className="text-base text-gray-300 leading-relaxed mb-2 ml-5">
                        Normalmente respondo dentro de las 24 horas en días hábiles.
                      </p>                    
                    </div>

                </div>            
                <div className="w-full md:w-1/2">
                  <ContactForm />
                </div>
            </div>
        </div>
      </Container>
    </Section>
  );
};