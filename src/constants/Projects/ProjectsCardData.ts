export interface Props {
  title?        : string;
  description?  : string;
  img?          : string;
  url?          : string;
  sourceCode?   : string;
  tags?         : string[];
  tag?          : string[];
}

export const ProjectsCardData: Props[] = [
  {
    img: "/assets/landingPage.png",
    url: "/proyecto/sistema-reservas",
    title: "Sistema de Reservas",
    description: "Para negocios que trabajan con citas o reservas.",
    tags: ["Calendario", "Confirmación de Reserva", "Pago Online"],
    tag: ["Web Development"]
  },
  {
    img: "/assets/Corporativo.png",
    url: "/proyecto/sitio-corporativo",
    title: "Sitio Web Corporativo",
    description: "Para empresas, fundaciones, negocios establecidos.",
    tags: ["Página de Inicio", "Quiénes Somos", "Servicios", "Contacto"],
    tag: ["Blockchain"],
  },
  {
    img: "/assets/ecommerce.png",
    url: "/proyecto/e-commerce",
    title: "E-Commerce",
    description: "Para vender productos físicos o digitales.",
    tags: ["Carrito de Compras", "Pasarela de Pago", "Categorías"],
    tag: ["Blockchain"],
  },
];
