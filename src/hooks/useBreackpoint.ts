
import { useEffect, useState } from "react";

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useBreakpoint() {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;

      let activeBp: string | null = null;
      for (const [name, minWidth] of Object.entries(breakpoints)) {
        if (width >= minWidth) {
          activeBp = name;
        }
      }
      setCurrent(activeBp);
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return current;
}