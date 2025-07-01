import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  hue: number; // solo guardamos hue para hsl
}

const randomHue = () => Math.floor(Math.random() * 360);

export const usePulseWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripples = useRef<Ripple[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.current.forEach((ripple, i) => {
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${ripple.hue}, 80%, 60%, ${ripple.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ripple.radius += 1.5;
        ripple.alpha -= 0.02;

        if (ripple.alpha <= 0) {
          ripples.current.splice(i, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      ripples.current.push({
        x,
        y,
        radius: 0,
        alpha: 0.6,
        hue: randomHue(),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return canvasRef;
};
