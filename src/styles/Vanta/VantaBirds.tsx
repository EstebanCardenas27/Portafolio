import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA?: any;
  }
}

export const VantaBirds = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (window.VANTA && window.VANTA.BIRDS && vantaRef.current) {
      vantaEffect.current = window.VANTA.BIRDS({
        el: vantaRef.current,  
        backgroundColor: 0x0c123f,
        color1: 0x9511aa,
        color2: 0x00d1ff,
        colorMode: "varianceGradient",
        birdSize: 1,
        speedLimit: 4.0,
        separation: 50.0,
        alignment: 20.0,
        cohesion: 20.0,
        quantity: 3,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10 " />;
};