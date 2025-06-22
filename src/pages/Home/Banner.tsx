import { Section } from   "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { Icon } from "@/components/Icons/Icon";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock.tsx"; 
import { ButtonLink } from "@/components/Buttons/ButtonLink";


export const Banner = () => (
  <Section className="bg-[#101225] py-24">
    <Container className="flex flex-col items-center p-8 border border-white/10 rounded-lg bg-gray-900">      
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-700 mb-6">
        <Icon
          name="solar:star-outline"
          width="40"
          height="40"
          className="text-white"
        />
      </div>
      <HeaderBlock
        title="Trabajemos juntos"
        description="Actualmente estoy disponible para trabajar como freelance y abierto a nuevas oportunidades. Si tienes un proyecto en mente o quieres colaborar, ¡Contáctame!"
      />
      <ButtonLink className="flex items-center mt-12 ">
        Contáctame
        <Icon
          name="fa-solid:angle-right"
          width="16"
          height="16"
        />
      </ButtonLink>

    </Container>
  </Section>
);