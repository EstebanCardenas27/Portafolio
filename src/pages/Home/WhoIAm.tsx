import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { FeatureCard } from "@/components/Cards/FeaturedCard"; 
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { Icon } from "@/components/Icons/Icon";
import { features } from "@/constants/featureData";
import { ButtonLink } from "@/components/Buttons/ButtonLink";

export const WhoIAm = () => (
  <Section className="bg-[rgba(16,18,37,0.8)] py-24"> 
    <Container className="flex flex-col items-center">
      <HeaderBlock
        badgeText="Sobre Mí"
        title="Quién Soy"
        description="Soy un profesional creativo y analítico, comprometido con el aprendizaje continuo y la aplicación práctica de tecnologías de vanguardia. Me especializo en resolver problemas complejos y en generar valor real a través de proyectos tecnológicos innovadores."        
      />

      <div className="flex flex-wrap h justify-center gap-6 sm:gap-8 lg:gap-10">
        {features.map(({ icon, title, description }, i) => (
          <div key={i} className="flex-grow basis-[300px] max-w-[340px] flex">
            <FeatureCard icon={icon} title={title} description={description} />
          </div>
        ))}
      </div>

      <ButtonLink className="flex items-center gap-4 mt-14 transition-transform hover:translate-x-1">
        Contáctame
        <Icon name="fa-solid:angle-right" width="16" height="16" />
      </ButtonLink>
    </Container>
  </Section>
);