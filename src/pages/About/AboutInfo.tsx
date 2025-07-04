import { AboutData } from "@/constants/About/AboutData"; 

export function AboutInfo() {
  return (
    <div className="w-full space-y-6">
      <h2 className="text-emerald-400 text-center text-2xl font-semibold  lg:text-left ">
        {AboutData.title}
      </h2>
      {AboutData.paragraphs.map((text, index) => (
        <p key={index} className="text-center lg:text-left text-white">
          {text}
        </p>
      ))}
    </div>
  );
}