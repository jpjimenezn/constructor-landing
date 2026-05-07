import logoCobay from "@/assets/logo-clasico-cobay.png";

export type DesarrolloProject = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  previewImage: string;
  photos: string[];
};

export type DesarrolloService = {
  slug: string;
  title: string;
  description: string;
  projects: DesarrolloProject[];
};

export const desarrollosServices: DesarrolloService[] = [
  {
    slug: "vivienda-vertical",
    title: "Vivienda Vertical",
    description:
      "Construccion de torres de departamentos y edificios habitacionales con disenos modernos y amenidades de primer nivel.",
    projects: [
      {
        slug: "torre-areni",
        title: "Torre Areni",
        shortDescription: "Proyecto de vivienda vertical en desarrollo de alta calidad.",
        fullDescription:
          "Desarrollo de vivienda vertical Torre Areni. Actualmente se integra informacion tecnica y avances para publicacion.",
        previewImage: logoCobay,
        photos: [],
      },
    ],
  },
  {
    slug: "casa-habitacion",
    title: "Casa Habitacion",
    description:
      "Construccion de casas residenciales personalizadas con acabados de alta calidad y atencion al detalle.",
    projects: [
      {
        slug: "andaluz",
        title: "Andaluz",
        shortDescription: "Proyecto residencial de casa habitacion.",
        fullDescription:
          "Proyecto de casa habitacion Andaluz. Actualmente se integra informacion tecnica y avances para publicacion.",
        previewImage: logoCobay,
        photos: [],
      },
      {
        slug: "la-rioja",
        title: "La Rioja",
        shortDescription: "Proyecto residencial de casa habitacion.",
        fullDescription:
          "Proyecto de casa habitacion La Rioja. Actualmente se integra informacion tecnica y avances para publicacion.",
        previewImage: logoCobay,
        photos: [],
      },
      {
        slug: "palma-real",
        title: "Palma Real",
        shortDescription: "Proyecto residencial de casa habitacion.",
        fullDescription:
          "Proyecto de casa habitacion Palma Real. Actualmente se integra informacion tecnica y avances para publicacion.",
        previewImage: logoCobay,
        photos: [],
      },
    ],
  },
  {
    slug: "desarrollo-residencial",
    title: "Desarrollo Residencial",
    description:
      "Creacion de fraccionamientos y comunidades planificadas con infraestructura completa y areas verdes.",
    projects: [],
  },
];

export function findDesarrolloServiceBySlug(slug: string) {
  return desarrollosServices.find((service) => service.slug === slug);
}

export function findDesarrolloProjectBySlug(
  serviceSlug: string,
  projectSlug: string,
) {
  const service = findDesarrolloServiceBySlug(serviceSlug);
  if (!service) return undefined;
  const project = service.projects.find((item) => item.slug === projectSlug);
  if (!project) return undefined;
  return { service, project };
}
