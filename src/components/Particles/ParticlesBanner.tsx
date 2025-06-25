import Particles from "@tsparticles/react";
import { useCallback, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBanner = ({ id = "bannerParticles" }: { id?: string }) => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => ({
    background: {
      color: { value: "transparent" }
    },
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 40,
        density: { enable: true, area: 800 }
      },
      color: { value: "#00f0ff" },
      shape: {
        type: "char",
        character: {
          value: ["<", "/", "{", "}", "=>", ";", "$", "*", "const", "let", "()", "() =>", "if"],
          font: "Verdana",
          style: "",
          weight: "400"
        }
      },
      opacity: {
        value: 0.6,
        random: true
      },
      size: {
        value: 16,
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
        resize: true
      }
    },
    detectRetina: true
  }), []);

  return <Particles id={id} init={particlesInit} options={options} />;
};

export default ParticlesBanner;
