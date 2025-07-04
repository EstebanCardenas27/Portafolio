import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { Icon } from "@/components/Icons/Icon";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { motion } from "motion/react";
import { zoomIn } from "@/Utils/animations";

export const Banner = () => (
  <Section className="bg-[rgba(16,18,37,0.7)] !min-h-[70vh]"> 
    <motion.div {...zoomIn}>
      <Container className="flex flex-col items-center glass-panel"
      >   
        <div className="w-16 h-16 flex items-center justify-center rounded-full soft-glass-panel ">
          <Icon
            name="solar:star-outline"
            width="40"
            height="40"
            className="text-teal-400 animate-[spin_4s_linear_infinite]"
          />
        </div>        
        <HeaderBlock
          title="Trabajemos juntos"
          description="Actualmente estoy disponible para trabajar como freelance y abierto a nuevas oportunidades. Si tienes un proyecto en mente o quieres colaborar, ¡Contáctame!"
        />        
        <ButtonLink href="/contact" className="flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform">
          Contáctame
          <Icon
            name="fa-solid:angle-right"
            width="16"
            height="16"
            className="text-white"
          />
        </ButtonLink>
      </Container>
    </motion.div>
  </Section>
);