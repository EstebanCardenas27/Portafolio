import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";
import { ButtonSub } from "@/components/Buttons/ButtonSub";
import { ProfileTabsData } from "@/constants/Resume/ProfileTabsData";
import { Tabs } from "@/components/Tabs/Resume/Tabs";
import { fadeUp, slideInLeft } from "@/Utils/animations";

export function Resume() {
  const [showTabs, setShowTabs] = useState(false);

  return (
    <Section className="relative py-20 overflow-hidden">
      <Container className="h-full">
        <motion.div {...fadeUp}>
          <HeaderBlock
            badgeText="Resumen"
            title="Experiencia Profesional"
            description="Creo soluciones web y sistemas automatizados para resolver necesidades reales en sectores con baja digitalización, ayudando a pequeños negocios y emprendedores a crecer con tecnología."
            align="center"
          />
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.4 }}
          className="flex justify-center mb-10"
        >
          <a href="/docs/CV_EstebanC.pdf" download>
            <ButtonSub
              icon="line-md:download-loop"
              variant="primary"
              className="!w-60"
            >
              Descargar CV
            </ButtonSub>
          </a>
        </motion.div>

        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            {!showTabs && (
              <motion.div
                {...fadeUp}
                key="explore-button"
                transition={{ ...fadeUp.transition, delay: 0.4 }}
              >
                <ButtonSub
                  icon="line-md:compass"
                  variant="purple"
                  className="hidden !w-60 lg:flex "
                  onClick={() => setShowTabs(true)}
                >
                  Explorar
                </ButtonSub>
              </motion.div>
            )}

            {showTabs && (
              <motion.div
                key="tabs"
                initial={slideInLeft.initial}
                animate={slideInLeft.whileInView}
                exit={{ opacity: 0, x: -50 }}
                transition={slideInLeft.transition}
                className="w-full"
              >
                <Tabs tabs={ProfileTabsData} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/resume.mp4" type="video/mp4" />
      </video>
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 -z-10"></div>
    </Section>
  );
}
