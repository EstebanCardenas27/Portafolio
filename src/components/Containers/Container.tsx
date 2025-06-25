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
      className={`w-[80%] md:w-[67.26%] px-2 mx-auto  ${className}`}
    >
      {children}
    </div>
  );
};