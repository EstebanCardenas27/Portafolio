export interface Responsibility {
  text: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: string;
  responsibilities: Responsibility[];
}

export const ExperienceData: ExperienceItem[] = [
  {
    role: "Desarrollador Full-Stack",
    company: "WebFactura, Santiago",
    period: "Marzo 2024 — Junio 2024",
    description:
      "Resolución de requerimientos internos de la plataforma de la empresa y desarrollo de microservicios e integraciones con Jira.",
    icon: "mdi:code-tags",
    responsibilities: [
      { text: "Resolución de requerimientos internos de plataforma de la empresa" },
      { text: "Gestión por medio de Bitbucket y Jira" },
      { text: "Control de versiones con Git y GitHub" },
      { text: "Desarrollo de Microservicios" },
      { text: "Integraciones con Jira" },
    ],
  },
  {
    role: "Soporte TI",
    company: "INE, Valdivia",
    period: "Junio 2024 — Agosto 2024",
    description:
      "Participación en el proyecto Censo 2024, brindando soporte técnico y capacitación a usuarios sobre plataformas digitales.",
    icon: "mdi:desktop-classic",
    responsibilities: [
      { text: "Proyecto Censo 2024" },
      { text: "Apoyo en la implementación y soporte de sistemas de captura de datos del Censo" },
      { text: "Diagnóstico y solución de incidentes técnicos en terreno o vía remota" },
      { text: "Capacitación a usuarios sobre el uso de las plataformas digitales del proyecto" },
      { text: "Revisión y mejora de procesos operativos junto al equipo técnico del INE" },
    ],
  },
  {
    role: "Desarrollador Full-Stack",
    company: "Polite Spa, Santiago",
    period: "Agosto 2024 — Diciembre 2024",
    description:
      "Participación en proyectos de consultoría informática, desarrollando soluciones a medida para clientes del sector público y privado.",
    icon: "mdi:code-tags", 
    responsibilities: [
      { text: "Participación en proyectos de consultoría informática, desarrollando soluciones a medida" },
      { text: "Desarrollo de aplicaciones web utilizando tecnologías como Docker, React, Node.js y TypeScript" },
      { text: "Colaboración con equipos multidisciplinarios para la implementación de sistemas eficientes y escalables" },
      { text: "Mantenimiento y mejora continua de plataformas existentes, asegurando su rendimiento y seguridad" },
    ],
  },
  {
    role: "Desarrollador Full-Stack (Pasantía)",
    company: "Digital Solutions, Valdivia",
    period: "Junio 2022 — Noviembre 2022",
    description:
      "Pasantía en desarrollo de software y modelado de bases de datos, participando en integración con servicios externos y despliegues en la nube.",
    icon: "mdi:school", 
    responsibilities: [
      { text: "Modelamiento de bases de datos en Azure y MySQL Server, incluyendo desarrollo de procedimientos almacenados" },
      { text: "Desarrollo de software utilizando Visual Basic, C#, .NET Framework, ASP.NET Core y MVC" },
      { text: "Implementación y consumo de APIs para comunicación con el Servicio de Impuestos Internos (SII)" },
      { text: "Gestión y despliegue en Azure Cloud, con control de versiones mediante Git" },
      { text: "Participación activa en la toma de requerimientos y propuesta de soluciones óptimas" },
      { text: "Cumplimiento consistente de objetivos a corto y largo plazo, garantizando calidad y eficiencia" },
    ],
  },
];