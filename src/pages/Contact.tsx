import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Section } from "@/components/Containers/Section";
import { Container } from "@/components/Containers/Container";
import { ContactInfo } from "@/pages/Contact/ContactInfo";
import { ContactForm } from "@/pages/Contact/ContactForm";
import { HeaderBlock } from "@/components/Blocks/HeaderBlock";

import { fadeUp, slideInLeft, slideInRight } from "@/Utils/animations";

export function Contact() {
  const [visiblePanel, setVisiblePanel] = useState<"info" | "form" | null>(
    null
  );

  return (
    <Section className="pt-20 pb-20  bg-[rgba(10,21,33,0.2)]">
      <Container className="flex flex-col md:flex-row md:gap-8">
        <div className="w-full flex flex-col ">
          <HeaderBlock
            badgeText="Contacto"
            title="Estoy a un mensaje de distancia."
            subtitle="¡Conectemos!"
            className="!py-0"
          />

          <div className="flex flex-col items-center gap-6 w-full">
            {!visiblePanel && (
              <motion.div {...fadeUp} className="flex gap-6 mt-10">
                <button
                  onClick={() => setVisiblePanel("info")}
                  className="px-6 py-2 glass-panel font-semibold hover:bg-teal-600 hover:shadow-[0_0_30px_rgba(13,148,136,0.3)]" 
                >
                  Información
                </button>
                <button
                  onClick={() => setVisiblePanel("form")}
                  className="px-6 py-2 glass-panel text-white font-semibold hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(107,33,168,0.3)]"
                >
                  Contacto
                </button>
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              {visiblePanel === "info" && (
                <motion.div
                  key="contact-info"
                  initial={slideInLeft.initial}
                  animate={slideInLeft.whileInView}
                  exit={{ opacity: 0, x: -50 }}
                  transition={slideInLeft.transition}
                  className="w-full max-w-xl"
                >
                  <ContactInfo />
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => setVisiblePanel(null)}
                      className="px-4 py-2 soft-glass-panel hover:bg-teal-500 text-white"
                    >
                      Volver
                    </button>
                  </div>
                </motion.div>
              )}

              {visiblePanel === "form" && (
                <motion.div
                  key="contact-form"
                  initial={slideInRight.initial}
                  animate={slideInRight.whileInView}
                  exit={{ opacity: 0, x: 50 }}
                  transition={slideInRight.transition}
                  className="w-full max-w-xl"
                >
                  <ContactForm />
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => setVisiblePanel(null)}
                      className="px-4 py-2 soft-glass-panel hover:bg-purple-600 text-white"
                    >
                      Volver
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
