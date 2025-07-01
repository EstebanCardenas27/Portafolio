import { useRef, useState, useEffect } from "react";

export function DarkModeImageSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); 
  const [dragging, setDragging] = useState(false);

  
  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(newPosition);
  };

  
  const handleTouchMove = (e: TouchEvent) => {
    if (!dragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(newPosition);
  };

  useEffect(() => {
    const handleMouseUp = () => setDragging(false);
    const handleTouchEnd = () => setDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] rounded-2xl overflow-hidden touch-none select-none"
      >
      
      <img
        src="/assets/black.png"
        alt="Dark profile"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <img
        src="/assets/white.jpg"
        alt="Light profile"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - position}% 0 0)`
        }}
      />

      
      <div
        onMouseDown={() => setDragging(true)}
        onTouchStart={() => setDragging(true)}
        className="absolute top-0 bottom-0 w-1 bg-sky-400 z-10 cursor-ew-resize group"
        style={{ left: `${position}%` }}
      >
        
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center gap-1/2
            text-white text-lg shadow-md"
        >
          <span>←</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}