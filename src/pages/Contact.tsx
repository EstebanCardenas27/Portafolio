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

            <div className="flex flex-col xl:flex-row gap-8 md:gap-10">            
                <div className="w-full xl:w-1/2">                    
                    <ContactInfo />                     
                    <div className="w-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 bg-[#22203b] mt-5 rounded-2xl">
                        <div className="bg-gray-800 gap-4 rounded-md p-1">
                            <p className="text-base font-semibold pb-2  text-center md:text-left text-teal-400">
                              Tiempo de respuesta
                            </p>
                            <p className="flex text-base text-center text-gray-300 leading-relaxed md:text-left">
                              Normalmente respondo dentro de las 24 horas en días hábiles.
                            </p>                    
                        </div>
                    </div>        
                </div>            
                <div className="w-full xl:w-1/2">
                  <ContactForm />
                </div>
            </div>
        </div>
      </Container>
    </Section>
  );
};