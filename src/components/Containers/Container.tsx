export interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode | string;
}

export const Container = ({
  className = "",
  children,
}: Props) => {
  return (
    <div
      className={`w-[80%] md:w-[75%] max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};