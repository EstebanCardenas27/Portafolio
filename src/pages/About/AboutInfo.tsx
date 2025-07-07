import { useState } from "react";
import { AboutData } from "@/constants/About/AboutData";

export function AboutInfo() {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 96;

  const fullText = AboutData.paragraphs.join(" ");

  const truncatedText = fullText.slice(0, maxLength);

  const textToShow = expanded ? fullText : truncatedText;

  const paragraphs = textToShow
    .split(". ")
    .filter(Boolean)
    .map((p) => (p.endsWith(".") ? p : `${p}.`));

  return (
    <div className="w-full space-y-6">
      <h2 className="text-emerald-400 text-center text-2xl font-semibold lg:text-left">
        {AboutData.title}
      </h2>

      {paragraphs.map((para, index) => (
        <p key={index} className="text-center lg:text-left text-white">
          {para}
        </p>
      ))}

      {fullText.length > maxLength && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-emerald-400 font-medium hover:underline focus:outline-none"
        >
          {expanded ? "Leer menos" : "Leer más"}
        </button>
      )}
    </div>
  );
}