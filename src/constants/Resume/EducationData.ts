export const EducationData: Record<
  "ingenieria" | "tecnico",
  {
    semestre    : string;
    contenidos  : { titulo: string; detalle?: string }[];
    icon        : string;
  }[]
> = {
  ingenieria: [
    {
      semestre: "Semestre 1",
      icon: "mdi:language-javascript",
      contenidos: [
        {
          titulo: "Fundamentos de POO",
          detalle:
            "Se aprende la base de la programación orientada a objetos: clases, objetos, encapsulamiento, herencia y polimorfismo.",
        },
        {
          titulo: "Metodología de Ingeniería de Software",
          detalle:
            "Estudio de metodologías para planificar, organizar y controlar proyectos de software (ej.: Scrum, Kanban, Waterfall, XP).",
        },
      ],
    },
    {
      semestre: "Semestre 2",
      icon: "mdi:shield-lock",
      contenidos: [
        {
          titulo: "Programación Segura",
          detalle:
            "Principios y técnicas para desarrollar software resistente a vulnerabilidades, incluyendo buenas prácticas de codificación segura y revisiones de seguridad.",
        },
        {
          titulo: "Bases de Datos",
          detalle:
            "Introducción a bases de datos relacionales, modelado de datos y lenguaje SQL.",
        },
      ],
    },
    {
      semestre: "Semestre 3",
      icon: "mdi:web",
      contenidos: [
        {
          titulo: "Programación Estructurada Front‑End",
          detalle:
            "Desarrollo de interfaces web, HTML, CSS y JavaScript básico.",
        },
        {
          titulo: "Bases de Datos No Estructuradas",
          detalle:
            "Introducción a bases de datos NoSQL como MongoDB y sus usos.",
        },
      ],
    },
    {
      semestre: "Semestre 4",
      icon: "mdi:server",
      contenidos: [
        {
          titulo: "Programación Estructurada Back‑End",
          detalle:
            "Desarrollo de lógica de servidor, APIs y servicios web.",
        },
        {
          titulo: "Arquitectura de Software y Fundamentos de Desarrollo Seguro",
          detalle:
            "Patrones de arquitectura de software y principios de seguridad en el desarrollo.",
        },
      ],
    },
    {
      semestre: "Semestre 5",
      icon: "mdi:cloud-sync",
      contenidos: [
        {
          titulo: "Desarrollo Ágil y On‑Cloud",
          detalle:
            "Metodologías ágiles aplicadas y uso de plataformas cloud para desarrollo.",
        },
        {
          titulo: "Aplicaciones Móviles",
          detalle:
            "Fundamentos para el desarrollo de aplicaciones móviles nativas e híbridas.",
        },
      ],
    },
    {
      semestre: "Semestre 6",
      icon: "mdi:code-tags",
      contenidos: [
        {
          titulo: "Desarrollo Full‑Stack",
          detalle:
            "Integración de front-end, back-end y móvil para construir aplicaciones completas.",
        },
      ],
    },
    {
      semestre: "Semestre 7",
      icon: "mdi:folder-multiple",
      contenidos: [
        {
          titulo: "Proyecto Integrador/Proyecto de Título",
          detalle:
            "Integración de todo lo aprendido durante la carrera en un proyecto real.",
        },
      ],
    },
    {
      semestre: "Semestre 8",
      icon: "mdi:briefcase-check",
      contenidos: [
        {
          titulo: "Práctica Profesional o Seminario de Título",
          detalle:
            "Experiencia profesional real con estándares de la industria.",
        },
      ],
    },
  ],

  tecnico: [
    {
      semestre: "Semestre 1",
      icon: "mdi:code-braces",
      contenidos: [
        {
          titulo: "Fundamentos de Programación",
          detalle:
            "Conceptos básicos de programación y lógica computacional.",
        },
        {
          titulo: "Lógica Computacional",
          detalle:
            "Desarrollo del pensamiento lógico para resolver problemas computacionales.",
        },
      ],
    },
    {
      semestre: "Semestre 2",
      icon: "mdi:web",
      contenidos: [
        {
          titulo: "Desarrollo Front-End Básico",
          detalle:
            "Introducción al desarrollo de interfaces de usuario con HTML, CSS y JavaScript.",
        },
        {
          titulo: "Bases de Datos Relacionales",
          detalle:
            "Estudio de bases de datos relacionales y manejo básico de SQL.",
        },
      ],
    },
    {
      semestre: "Semestre 3",
      icon: "mdi:server",
      contenidos: [
        {
          titulo: "Desarrollo Back-End Básico",
          detalle:
            "Programación de lógica de servidor y servicios básicos.",
        },
        {
          titulo: "Fundamentos de Redes",
          detalle:
            "Conceptos esenciales de redes de computadoras y protocolos.",
        },
      ],
    },
    {
      semestre: "Semestre 4",
      icon: "mdi:cellphone",
      contenidos: [
        {
          titulo: "Aplicaciones Móviles Básicas",
          detalle:
            "Principios básicos del desarrollo de aplicaciones móviles.",
        },
        {
          titulo: "Proyecto Integrador Técnico",
          detalle:
            "Aplicación práctica de los conocimientos adquiridos en un proyecto final.",
        },
      ],
    },
  ],
};
