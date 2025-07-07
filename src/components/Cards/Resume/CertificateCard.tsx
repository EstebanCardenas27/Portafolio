import React from "react";
import type { CertificateData } from "@/constants/Resume/CertificateData";
import { Icon } from "@/components/Icons/Icon";
import "@/styles/UiVerse/CertificateCards.css";
import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
  staggerItem,
  rippleEffect,
} from "@/Utils/animations";

interface Props {
  certificate: CertificateData;
}

export const CertificateCard: React.FC<Props> = ({ certificate }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(certificate.link, "_blank");
  };

  return (
    <motion.div
      {...fadeUp}
      className="certificate-card w-[300px] h-[200px] lg:w-[400px] lg:h-[300px]"
    >
      <div className="card-inner">

        <div className="card-front">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="approved-label">APROBADO</div>
        </div>

        <div
          className="
            card-back 
            flex flex-col items-center text-center p-4 gap-4
            justify-between
            lg:justify-center
            h-full
          "
        >
          <h3 className="text-lg font-semibold text-teal-400">
            {certificate.title}
          </h3>

          {certificate.description && (
            <p className="text-sm opacity-90 leading-snug hidden lg:block">
              {certificate.description}
            </p>
          )}

          <motion.div
            {...staggerContainer}
            className="flex flex-wrap justify-center gap-2"
          >
            {certificate.tags.map((tag, index) => (
              <motion.span
                key={index}
                {...staggerItem}
                className="badge text-white py-1 px-2 rounded-md text-xs"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.button
            {...rippleEffect}
            onClick={handleClick}
            className="
              bg-[#22203b]
              rounded-full
              p-2
              cursor-pointer
              text-white
              transition-colors
              duration-300
              hover:bg-teal-500/40
              hover:text-purple-400
              mt-2
              lg:px-10 lg:py-2 
            "
            aria-label={`Abrir certificado de ${certificate.title}`}
          >
            <Icon
              name="mdi:link-variant"
              width="24"
              height="24"
              className="text-current"
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};