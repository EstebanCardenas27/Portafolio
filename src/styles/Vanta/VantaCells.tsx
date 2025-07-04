import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA?: any;
  }
}

export const VantaCells = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (window.VANTA?.CELLS && vantaRef.current) {
      vantaEffect.current = window.VANTA.CELLS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,        
        size: 2.0,       
        backgroundColor: 0x040c21,  // Azul medianoche intenso
        color1: 0x61b1b,           // Azul oscuro con matiz profundo
        color2: 0x39342b,    // Teal brillante
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" />;
};