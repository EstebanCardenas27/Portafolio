import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";

const ParticlesComponent = (props: any) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      particles: {
        number: {
          value: 4, // 👈 igual que tu config original
        },
        color: {
          value: "#121420",
        },
        shape: {
          type: "polygon",
          options: {
            polygon: {
              sides: 6, // 🔥 hexágonos reales
            },
          },
        },
        opacity: {
          value: { min: 0.3, max: 0.6 },
          animation: {
            enable: false,
          },
        },
        size: {
          value: { min: 40, max: 100 }, // 🔥 rango como tu animación
          animation: {
            enable: true,
            speed: 10,
            minimumValue: 40,
          },
        },
        links: {
          enable: false, // 👈 igual que tenías
        },
        move: {
          enable: true,
          speed: 8, // 👈 rápido como el tuyo
          direction: "none",
          outModes: {
            default: "out", // 🔥 reemplazo de out_mode
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles id={props.id} options={options} />;
};

export default ParticlesComponent;