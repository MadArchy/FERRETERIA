export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  price: number;
  originalPrice?: number;
  available: boolean;
  badge?: "nuevo" | "oferta" | "destacado";
  description: string;
  image: string;
}

export const featuredProducts: Product[] = [
  {
    id: "taladro-percutor-850w",
    name: "Taladro Percutor 850W",
    category: "Herramientas",
    categoryId: "herramientas",
    price: 48500,
    originalPrice: 62000,
    available: true,
    badge: "oferta",
    description: "Taladro percutor industrial con mandril 13mm, 2 velocidades y mango lateral.",
    image: "/images/products/taladro.png",
  },
  {
    id: "amoladora-angular-115mm",
    name: "Amoladora Angular 115mm",
    category: "Herramientas",
    categoryId: "herramientas",
    price: 35900,
    available: true,
    badge: "destacado",
    description: "Amoladora de 720W con empuñadura ergonómica y protector ajustable.",
    image: "/images/products/amoladora.png",
  },
  {
    id: "kit-cable-750v-x100m",
    name: "Cable Unipolar 2.5mm × 100m",
    category: "Electricidad",
    categoryId: "electricidad",
    price: 28000,
    available: true,
    badge: "nuevo",
    description: "Cable tipo H07V-K 750V, conductor de cobre flexible, color verde/amarillo.",
    image: "/images/products/cable.png",
  },
  {
    id: "latex-interior-20lts",
    name: "Látex Interior Premium 20 Lts",
    category: "Pinturas",
    categoryId: "pinturas",
    price: 22500,
    originalPrice: 26800,
    available: true,
    badge: "oferta",
    description: "Pintura látex de alta cobertura, lavable, anti-hongos. Rinde 12m² por litro.",
    image: "/images/products/pintura.png",
  },
  {
    id: "casco-seguridad-certificado",
    name: "Casco de Seguridad Industrial",
    category: "Seguridad Industrial",
    categoryId: "seguridad",
    price: 8900,
    available: true,
    badge: "nuevo",
    description: "Casco certificado IRAM 3620. Alta densidad, trinquete ajustable, visera.",
    image: "/images/products/casco.png",
  },
  {
    id: "llave-inglesa-10-pulgadas",
    name: "Llave Inglesa 10 Pulgadas",
    category: "Herramientas",
    categoryId: "herramientas",
    price: 6800,
    available: true,
    description: "Llave inglesa de acero cromo-vanadio, apertura max 32mm, tratamiento anti-óxido.",
    image: "/images/products/llave.png",
  },
  {
    id: "cemento-adhesivo-25kg",
    name: "Cemento Adhesivo 25 Kg",
    category: "Construcción",
    categoryId: "construccion",
    price: 9500,
    available: true,
    badge: "destacado",
    description: "Adhesivo cementicio flexible para porcelanato y cerámica. Interior/exterior.",
    image: "/images/products/cemento.png",
  },
  {
    id: "manguera-jardin-30m",
    name: "Manguera de Jardín 30 m",
    category: "Jardinería",
    categoryId: "jardineria",
    price: 12400,
    available: false,
    description: "Manguera tricapa reforzada 3/4\", resistente a torsiones y UV. Con pistolete.",
    image: "/images/products/manguera.png",
  },
];
