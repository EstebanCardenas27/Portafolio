
import { useBreakpoint } from "@/hooks/useBreackpoint";
import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { FeatureCard } from "@/components/Cards/Home/FeaturedCard";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { ButtonLink } from "@/components/Buttons";
import { Icon } from "@/components/Icons/Icon";

export const WhoIAm = () => {

  const bp = useBreakpoint();
  const clipPath =
    bp && ["lg", "xl", "2xl"].includes(bp)
      ? "polygon(50% 0%, 84% 12%, 100% 35%, 100% 70%, 83% 88%, 50% 100%, 18% 91%, 0% 70%, 0% 35%, 11% 13%)"
      : undefined;
  return (
    <Section
      className="bg-[rgba(16,18,37,0.9)]"
      clipPath={clipPath}
    >
      <Container className="flex flex-col items-center">
        <HeaderBlock
          badgeText="Sobre Mí"
          title="Conóceme Mejor"
          description="Soy un profesional creativo y analítico, comprometido con el aprendizaje continuo y la aplicación práctica de tecnologías de vanguardia. Me gusta transformar ideas complejas en proyectos tecnológicos con impacto real."
        />

        <section className="flex w-full flex-row">
          <FeatureCard />
        </section>

        <ButtonLink
          href="/about"
          className="flex items-center gap-2 mt-12"
        >
          Acerca de Mí
          <Icon name="fa-solid:angle-right" width="16" height="16" />
        </ButtonLink>
      </Container>
    </Section>
  );
};