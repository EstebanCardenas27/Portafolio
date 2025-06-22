export interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode | string;
}

export const Container = ({
  className = "",
  children
}: Props) => {
  return (
    <div 
      className={`px-2 w-[67.26%] ${className}`}
    >
      {children}
    </div>
  );
};