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
            className = "!py-0" 
           />

            <div className="flex flex-col xl:flex-row gap-8 md:gap-10">            
                <div className="w-full xl:w-1/2">                    
                    <ContactInfo />                     
                    <div className="w-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 backdrop-blur border border-white mt-5 rounded-2xl">
                        <div className="soft-glass-panel bg-gradient-to-br from-white/10 to-white/5 p-1">
                            <p className="text-base font-semibold pb-2 text-center text-teal-400">
                              Tiempo de respuesta
                            </p>
                            <p className="text-sm lg:text-base text-center text-gray-300">
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