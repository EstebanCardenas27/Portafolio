interface ProgressBarProps {
  progress: number; // 0 - 100
  className?: string;
}

export const ProgressBar = ({ progress, className = "" }: ProgressBarProps) => {
  return (
    <div className={`w-full h-1 rounded-full bg-gray-300 overflow-hidden ${className}`}>
      <div
        className="h-full bg-teal-500 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
