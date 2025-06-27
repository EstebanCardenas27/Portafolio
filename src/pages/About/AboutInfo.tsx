import { AboutData } from "@/constants/About/AboutData"; 

export function AboutInfo() {
  return (
    <div className="w-full text-justify text-gray-500 space-y-6 sm:px-0">
      <h2 className="text-teal-400 text-center text-2xl font-semibold  2xl:text-left ">
        {AboutData.title}
      </h2>
      {AboutData.paragraphs.map((text, index) => (
        <p key={index} className="text-center 2xl:text-left">
          {text}
        </p>
      ))}
    </div>
  );
}