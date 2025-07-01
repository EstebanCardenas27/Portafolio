import { useBreakpoint } from "@/hooks/useBreackpoint";

interface BreakpointProps {
  showOn: string[];
  children: React.ReactNode;
}

export const Breakpoint = ({ showOn, children }: BreakpointProps) => {
  const bp = useBreakpoint();

  if (bp && showOn.includes(bp)) {
    return <>{children}</>;
  }

  return null;
};