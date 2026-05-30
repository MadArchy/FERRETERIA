export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "herramientas",
    name: "Herramientas",
    description: "Manuales, eléctricas y de precisión para todo tipo de trabajo.",
    icon: "Wrench",
    color: "#FACC15",
    href: "/catalogo?cat=herramientas",
    image: "/images/categories/herramientas.png",
  },
  {
    id: "electricidad",
    name: "Electricidad",
    description: "Cables, tableros, llaves, tomacorrientes y materiales eléctricos.",
    icon: "Zap",
    color: "#FACC15",
    href: "/catalogo?cat=electricidad",
    image: "/images/categories/electricidad.png",
  },
  {
    id: "plomeria",
    name: "Plomería",
    description: "Cañerías, llaves de paso, grifería y accesorios sanitarios.",
    icon: "Droplets",
    color: "#FACC15",
    href: "/catalogo?cat=plomeria",
    image: "/images/categories/plomeria.png",
  },
  {
    id: "pinturas",
    name: "Pinturas",
    description: "Látex, esmaltes, selladores, rodillos y pinceles de calidad.",
    icon: "Paintbrush",
    color: "#FACC15",
    href: "/catalogo?cat=pinturas",
    image: "/images/categories/pinturas.png",
  },
  {
    id: "tornilleria",
    name: "Tornillería",
    description: "Tornillos, bulones, tuercas, arandelas y fijaciones de todo tipo.",
    icon: "Settings",
    color: "#FACC15",
    href: "/catalogo?cat=tornilleria",
    image: "/images/categories/tornilleria.png",
  },
  {
    id: "construccion",
    name: "Construcción",
    description: "Cemento, adhesivos, mallas, varillas y materiales para obra.",
    icon: "Building2",
    color: "#FACC15",
    href: "/catalogo?cat=construccion",
    image: "/images/categories/construccion.png",
  },
  {
    id: "seguridad",
    name: "Seguridad Industrial",
    description: "Cascos, guantes, gafas, calzado y elementos de protección.",
    icon: "ShieldCheck",
    color: "#FACC15",
    href: "/catalogo?cat=seguridad",
    image: "/images/categories/seguridad.png",
  },
  {
    id: "jardineria",
    name: "Jardinería",
    description: "Mangueras, regaderas, herramientas de jardín y sistemas de riego.",
    icon: "Leaf",
    color: "#FACC15",
    href: "/catalogo?cat=jardineria",
    image: "/images/categories/jardineria.png",
  },
];

