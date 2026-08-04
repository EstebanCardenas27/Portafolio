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
          value: 4, 
        },
        color: {
          value: "#121420",
        },
        shape: {
          type: "polygon",
          options: {
            polygon: {
              sides: 6,
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
          enable: false, 
        },
        move: {
          enable: true,
          speed: 8, 
          direction: "none",
          outModes: {
            default: "out", 
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