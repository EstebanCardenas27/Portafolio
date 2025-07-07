import React from "react";
import { certificates } from "@/constants/Resume/CertificateData";
import { CertificateCard } from "@/components/Cards/Resume/CertificateCard";

export const CertsPanel: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {certificates.map((cert, i) => (
        <CertificateCard key={i} certificate={cert} />
      ))}
    </div>
  );
};