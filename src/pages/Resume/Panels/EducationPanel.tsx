interface EducationItem {
  year: string;
  title: string;
  institution: string;
  description?: string;
}

const educationData: EducationItem[] = [
  {
    year: "2020 - 2024",
    title: "Ingeniería en Informática",
    institution: "Universidad de Chile",
    description: "Especialización en desarrollo web y sistemas distribuidos."
  },
  {
    year: "2018 - 2020",
    title: "Técnico en Programación",
    institution: "Instituto Técnico Profesional",
  },
];

export const EducationPanel = () => (
  <div className="relative border-l-2 border-teal-500 ml-6 py-4">
    {educationData.map(({ year, title, institution, description }, idx) => (
      <div key={idx} className="mb-12 ml-6 relative">
        <span className="absolute -left-6 top-0 w-5 h-5 bg-teal-500 rounded-full border-4 border-gray-900"></span>
        <time className="text-teal-500 font-semibold">{year}</time>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="italic">{institution}</p>
        {description && <p className="mt-2 text-gray-300">{description}</p>}
      </div>
    ))}
  </div>
);