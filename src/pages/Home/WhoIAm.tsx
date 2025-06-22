import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { FeatureCard } from "@/components/Cards/FeaturedCard"; 
import { HeaderBlock }  from "@/components/Blocks/HeaderBlock";
import { Icon } from "@/components/Icons/Icon";
import { features } from "@/constants/featureData";
import { ButtonLink } from "@/components/Buttons/ButtonLink";

export const WhoIAm = () => (
  <Section className="bg-[#101225] py-24">
    <Container className="flex flex-col items-center">
      <HeaderBlock
        badgeText   = "Sobre Mí"
        title       = "Quién Soy"
        description = "Soy un profesional creativo y analítico, dedicado al aprendizaje continuo y a aplicar tecnologías de vanguardia de forma práctica. Me especializo en resolver problemas complejos y en generar valor real a través de proyectos tecnológicos innovadores."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
        {features.map(({ icon, title, description }, i) => (
           <FeatureCard key={i} icon={icon} title={title} description={description} />
        ))}
      </div>

      <ButtonLink className="flex items-center gap-4 mt-14">
        Contáctame
        <Icon name="fa-solid:angle-right" width="16" height="16" />
      </ButtonLink>
    </Container>
  </Section>
);