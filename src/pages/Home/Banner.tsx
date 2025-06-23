import { Section } from   "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { Icon } from "@/components/Icons/Icon";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock.tsx"; 
import { ButtonLink } from "@/components/Buttons/ButtonLink";


export const Banner = () => (
  <Section className="bg-[rgba(16,18,37,0.8)]">
    <Container className="flex flex-col items-center p-8 border border-white/10 rounded-lg bg-gray-900">      
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#22203b] mb-6">
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
      <ButtonLink className="flex items-center gap-2">
        Contáctame
        <Icon
          name="fa-solid:angle-right"
          width="16"
          height="16"
          className= "text-white"
        />
      </ButtonLink>

    </Container>
  </Section>
);
