import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA?: any;
  }
}

export const VantaGlobe = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (window.VANTA?.GLOBE && vantaRef.current) {
      vantaEffect.current = window.VANTA.GLOBE({
        el: vantaRef.current,
        backgroundColor: 0x0,
        color: 0x0,     
        color2: 0xde00bc,     
        size: 1.0,
        spacing: 15,
        points: 0,
        showDots: false,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundAlpha: 1.0,
        minHeight: 200,
        minWidth: 200,
        maxDistance: 10
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10"
    />
  );
};