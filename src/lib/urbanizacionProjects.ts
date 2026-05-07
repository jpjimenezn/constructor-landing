export type UrbanizationService = {
  slug: string;
  title: string;
  description: string;
  photos: string[];
};

const modules = import.meta.glob(
  "../assets/urbanizacion/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}",
  { eager: true, import: "default" },
) as Record<string, string>;

function photosFor(folder: string): string[] {
  const segment = `/urbanizacion/${folder}/`.toLowerCase();
  return Object.entries(modules)
    .filter(([path]) => path.replace(/\\/g, "/").toLowerCase().includes(segment))
    .sort(([a], [b]) =>
      a.replace(/\\/g, "/").localeCompare(b.replace(/\\/g, "/"), undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    )
    .map(([, url]) => url);
}

export const urbanizationServices: UrbanizationService[] = [
  {
    slug: "infraestructura-vial",
    title: "Infraestructura Vial",
    description:
      "Construccion y desarrollo de calles, avenidas, puentes y sistemas de vialidad urbana de alta calidad.",
    photos: photosFor("infraestructura-vial"),
  },
  {
    slug: "carreteras",
    title: "Carreteras",
    description:
      "Construccion de carreteras, autopistas y caminos con los mas altos estandares de ingenieria.",
    photos: photosFor("carreteras"),
  },
  {
    slug: "mantenimiento-de-aeropuertos",
    title: "Mantenimiento de Aeropuertos",
    description:
      "Servicios especializados de mantenimiento y construccion para instalaciones aeroportuarias.",
    photos: [],
  },
  {
    slug: "escuelas",
    title: "Escuelas",
    description:
      "Construccion de instituciones educativas modernas y funcionales para todos los niveles.",
    photos: [],
  },
  {
    slug: "hospitales",
    title: "Hospitales",
    description:
      "Edificacion de instalaciones de salud con infraestructura especializada y de ultima generacion.",
    photos: photosFor("hospitales"),
  },
  {
    slug: "electrificacion",
    title: "Electrificacion",
    description:
      "Diseno e instalacion de redes electricas, subestaciones y sistemas de iluminacion.",
    photos: [],
  },
];

export function findUrbanizationServiceBySlug(slug: string) {
  return urbanizationServices.find((service) => service.slug === slug);
}
