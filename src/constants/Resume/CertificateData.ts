export interface CertificateData {
  image: string;
  title: string;
  link: string;
  tags: string[];
  description?: string;
}

export const certificates: CertificateData[] = [
  {
    image: "/assets/certs/RNative.jpg",
    title: "React Native CLI",
    link: "https://www.udemy.com/certificate/UC-bf3eaf90-0d64-4ffd-a2c7-92a5a49b7af6/",
    tags: ["RNative", "Mobile", "Frontend", "JS", "Hooks"],
    description: "Competencias prácticas en el desarrollo de aplicaciones móviles nativas para iOS y Android. Se formó en el manejo de componentes, navegación, gestión de estado y consumo de APIs",
  },
  {
    image: "/assets/certs/NodeJs.jpg",
    title: "Node.JS De cero a experto",
    link: "https://www.udemy.com/certificate/UC-2fe947be-4e7d-47ac-b9f3-6c1a5549e87f/",
    tags: ["Clean Code", "SOLID", "Refactoring", "Code Quality"],
    description: " Desarrolla habilidades avanzadas para construir aplicaciones BackEnd escalables y eficientes. Adquirió conocimientos sólidos en el manejo de servidores, bases de datos, arquitectura REST, manejo de asincronía y buenas prácticas de desarrollo con Node.js.",
  },
  {
    image: "/assets/certs/CleanCode.jpg",
    title: "Principios Solid & Clean Code",
    link: "https://www.udemy.com/certificate/UC-010e1850-94a2-44fa-aa2b-7df7a72da6d7/",
    tags: ["Node", "Backend", "JS", "APIs", "Express", "REST", "Async"],
    description: "Principios SOLID y prácticas de Clean Code, fortalece su capacidad para escribir código limpio, mantenible y escalable. Aprendió a aplicar principios de diseño orientado a objetos, refactorización y mejores prácticas que mejoran la calidad y sostenibilidad del software.",
  },
];