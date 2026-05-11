import logoCobay from "@/assets/logo-clasico-cobay.png";
import infraestructuraVialPreview from "@/assets/urbanizacion/infraestructura-vial/Plaza-Liberacion-01.webp";
import carreterasPreview from "@/assets/urbanizacion/carreteras/Etzatlan-04.webp";
import hospitalesPreview from "@/assets/urbanizacion/hospitales/Regional-Civil-Viejo-02.webp";

export type UrbanizationProject = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  previewImage: string;
  photos: string[];
};

export type UrbanizationService = {
  slug: string;
  title: string;
  description: string;
  previewImage: string;
  projects: UrbanizationProject[];
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

function photosByKeywords(folder: string, keywords: string[]): string[] {
  const normalized = keywords.map((keyword) => keyword.toLowerCase());
  return photosFor(folder).filter((photo) =>
    normalized.some((keyword) => photo.toLowerCase().includes(keyword)),
  );
}

function previewOf(photos: string[]): string {
  return photos[0] ?? logoCobay;
}

export const urbanizationServices: UrbanizationService[] = [
  {
    slug: "infraestructura-vial",
    title: "Infraestructura Vial",
    description:
      "Construccion y desarrollo de calles, avenidas, puentes y sistemas de vialidad urbana de alta calidad.",
    previewImage: infraestructuraVialPreview,
    projects: [
      {
        slug: "puente-vehicular-chapala",
        title: "Puente Vehicular Chapala",
        shortDescription: "Desarrollo de puente vehicular con enfoque en conectividad y seguridad vial.",
        fullDescription:
          "Proyecto integral para mejorar la movilidad en la zona de Chapala, incorporando criterios estructurales, seguridad vial y optimizacion de flujos de transito.",
        photos: [],
        previewImage: logoCobay,
      },
      {
        slug: "puente-peatonal-juan-escutia",
        title: "Puente Peatonal Juan Escutia",
        shortDescription: "Intervencion peatonal para cruces seguros y continuidad urbana.",
        fullDescription:
          "Construccion y adecuacion de infraestructura peatonal en la zona de Juan Escutia, priorizando accesibilidad universal y seguridad del usuario.",
        photos: photosByKeywords("infraestructura-vial", ["puente-juan-escutia"]),
        previewImage: previewOf(photosByKeywords("infraestructura-vial", ["puente-juan-escutia"])),
      },
      {
        slug: "puente-peatonal-ramon-corona",
        title: "Puente Peatonal Ramon Corona",
        shortDescription: "Infraestructura peatonal para mejorar conectividad y seguridad vial.",
        fullDescription:
          "Construccion y adecuacion de infraestructura peatonal en el corredor Ramon Corona para mejorar cruces seguros y movilidad peatonal.",
        photos: photosByKeywords("infraestructura-vial", ["puente-ramon-corona"]),
        previewImage: previewOf(photosByKeywords("infraestructura-vial", ["puente-ramon-corona"])),
      },
      {
        slug: "lateral-periferico-sur",
        title: "Lateral Periferico Sur",
        shortDescription: "Obra de lateral para mejorar la capacidad y operacion del periferico sur.",
        fullDescription:
          "Proyecto de mejoramiento vial mediante construccion de laterales y obras complementarias para una circulacion mas ordenada y segura.",
        photos: photosByKeywords("infraestructura-vial", ["lateral-periferico"]),
        previewImage: previewOf(photosByKeywords("infraestructura-vial", ["lateral-periferico"])),
      },
      {
        slug: "plaza-liberacion",
        title: "Plaza Liberacion",
        shortDescription: "Rehabilitacion de espacio publico para uso peatonal y convivencia urbana.",
        fullDescription:
          "Intervencion urbana enfocada en renovar el espacio publico, mejorando imagen urbana, circulaciones y funcionalidad para usuarios y visitantes.",
        photos: photosByKeywords("infraestructura-vial", ["plaza-liberacion"]),
        previewImage: previewOf(photosByKeywords("infraestructura-vial", ["plaza-liberacion"])),
      },
      {
        slug: "andador-demostenes",
        title: "Andador Demostenes",
        shortDescription: "Desarrollo de andador urbano con enfoque en accesibilidad peatonal.",
        fullDescription:
          "Proyecto de andador urbano para mejorar conectividad local, confort del peaton y calidad del entorno inmediato.",
        photos: [],
        previewImage: logoCobay,
      },
      {
        slug: "ciclovia-vallarta-aviacion",
        title: "Ciclovia Vallarta - Aviacion",
        shortDescription: "Infraestructura ciclista para movilidad sostenible y segura.",
        fullDescription:
          "Implementacion de ciclovia sobre el corredor Vallarta - Aviacion, incluyendo adecuaciones de seguridad y convivencia con otros modos de transporte.",
        photos: [],
        previewImage: logoCobay,
      },
      {
        slug: "andador-periferico-estadio-chivas",
        title: "Andador Periferico - Estadio Chivas",
        shortDescription: "Andador peatonal para mejorar conectividad en entorno metropolitano.",
        fullDescription:
          "Construccion y adecuacion de andador peatonal en el entorno del Estadio Chivas para mejorar accesibilidad y seguridad en recorridos de alto flujo.",
        photos: [],
        previewImage: logoCobay,
      },
    ],
  },
  {
    slug: "carreteras",
    title: "Carreteras",
    description:
      "Construccion de carreteras, autopistas y caminos con los mas altos estandares de ingenieria.",
    previewImage: carreterasPreview,
    projects: [
      {
        slug: "etzatlan-magdalena",
        title: "Eztatlan-Magdalena",
        shortDescription: "Construccion y mejoramiento carretero en el tramo regional Etzatlan - Magdalena.",
        fullDescription:
          "Obra carretera para mejorar conectividad regional entre Etzatlan y Magdalena, contemplando terracerias, estructura de pavimento y obras complementarias.",
        photos: photosFor("carreteras"),
        previewImage: previewOf(photosFor("carreteras")),
      },
    ],
  },
  {
    slug: "mantenimiento-de-aeropuertos",
    title: "Mantenimiento de Aeropuertos",
    description:
      "Servicios especializados de mantenimiento y construccion para instalaciones aeroportuarias.",
    previewImage: logoCobay,
    projects: [
      {
        slug: "aeropuerto-internacional-felipe-angeles",
        title: "Aeropuerto Internacional Felipe Angeles",
        shortDescription: "Servicios de mantenimiento especializado para infraestructura aeroportuaria.",
        fullDescription:
          "Participacion en actividades de mantenimiento y adecuaciones operativas para infraestructura critica en el Aeropuerto Internacional Felipe Angeles.",
        photos: [],
        previewImage: logoCobay,
      },
      {
        slug: "aeropuerto-nacional-de-tamuin",
        title: "Aeropuerto Nacional de Tamuin",
        shortDescription: "Mantenimiento de instalaciones para continuidad operativa aeroportuaria.",
        fullDescription:
          "Ejecucion de trabajos de mantenimiento para conservar condiciones operativas y de seguridad en instalaciones aeroportuarias del Aeropuerto Nacional de Tamuin.",
        photos: [],
        previewImage: logoCobay,
      },
      {
        slug: "aeropuerto-internacional-de-puebla",
        title: "Aeropuerto Internacional de Puebla",
        shortDescription: "Adecuaciones y mantenimiento en areas estrategicas del aeropuerto.",
        fullDescription:
          "Intervenciones de mantenimiento orientadas a mejorar durabilidad de infraestructura y asegurar funcionamiento continuo del Aeropuerto Internacional de Puebla.",
        photos: [],
        previewImage: logoCobay,
      },
      {
        slug: "aeropuerto-nacional-de-uruapan",
        title: "Aeropuerto Nacional de Uruapan",
        shortDescription: "Mantenimiento tecnico en componentes de infraestructura aeroportuaria.",
        fullDescription:
          "Trabajos de mantenimiento preventivo y correctivo para conservar la funcionalidad operativa del Aeropuerto Nacional de Uruapan.",
        photos: [],
        previewImage: logoCobay,
      },
    ],
  },
  {
    slug: "escuelas",
    title: "Escuelas",
    description:
      "Construccion de instituciones educativas modernas y funcionales para todos los niveles.",
    previewImage: logoCobay,
    projects: [
      {
        slug: "secundaria-tecnica-cecytej",
        title: "Secundaria Tecnica Cecytej",
        shortDescription: "Construccion de infraestructura educativa con espacios funcionales.",
        fullDescription:
          "Desarrollo de infraestructura para secundaria tecnica con enfoque en funcionalidad academica, seguridad estructural y durabilidad.",
        photos: [],
        previewImage: logoCobay,
      },
      {
        slug: "primaria-guillermo-gonzalez",
        title: "Primaria Guillermo Gonzalez",
        shortDescription: "Obra educativa para fortalecer capacidad y calidad de espacios escolares.",
        fullDescription:
          "Construccion y adecuaciones para instalaciones de educacion primaria, priorizando confort, seguridad y uso eficiente del espacio escolar.",
        photos: [],
        previewImage: logoCobay,
      },
    ],
  },
  {
    slug: "hospitales",
    title: "Hospitales",
    description:
      "Edificacion de instalaciones de salud con infraestructura especializada y de ultima generacion.",
    previewImage: hospitalesPreview,
    projects: [
      {
        slug: "hospital-civil-oriente",
        title: "Hospital Civil Oriente",
        shortDescription: "Participacion en infraestructura hospitalaria de alta especialidad.",
        fullDescription:
          "Trabajos de edificacion y adecuaciones especializadas para infraestructura hospitalaria orientada a servicios de salud de alta demanda.",
        photos: photosFor("hospitales"),
        previewImage: previewOf(photosFor("hospitales")),
      },
      {
        slug: "hospital-civil-viejo",
        title: "Hospital Civil Viejo",
        shortDescription: "Intervenciones de rehabilitacion y mantenimiento en complejo hospitalario.",
        fullDescription:
          "Proyecto de rehabilitacion y mantenimiento de infraestructura en Hospital Civil Viejo, con foco en funcionalidad y continuidad operativa.",
        photos: [],
        previewImage: logoCobay,
      },
      {
        slug: "hospital-psiquiatrico-caisame",
        title: "Hospital Psiquiatrico Caisame",
        shortDescription: "Adecuaciones para infraestructura de atencion especializada en salud mental.",
        fullDescription:
          "Obra y adecuaciones en infraestructura hospitalaria para fortalecer espacios de atencion en salud mental del complejo Caisame.",
        photos: [],
        previewImage: logoCobay,
      },
    ],
  },
  {
    slug: "electrificacion",
    title: "Electrificacion",
    description:
      "Diseno e instalacion de redes electricas, subestaciones y sistemas de iluminacion.",
    previewImage: logoCobay,
    projects: [
      {
        slug: "museo-tequila-lab",
        title: "Museo Tequila Lab",
        shortDescription: "Proyecto de electrificacion e integracion de sistemas para museo.",
        fullDescription:
          "Diseno e implementacion de soluciones de electrificacion para espacios museograficos, considerando funcionalidad, seguridad y experiencia del visitante.",
        photos: [],
        previewImage: logoCobay,
      },
    ],
  },
];

export function findUrbanizationServiceBySlug(slug: string) {
  return urbanizationServices.find((service) => service.slug === slug);
}

export function findUrbanizationProjectBySlug(
  serviceSlug: string,
  projectSlug: string,
) {
  const service = findUrbanizationServiceBySlug(serviceSlug);
  if (!service) return undefined;
  const project = service.projects.find((item) => item.slug === projectSlug);
  if (!project) return undefined;
  return { service, project };
}
