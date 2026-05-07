import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Route,
  Plane,
  GraduationCap,
  Heart,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { urbanizationServices } from "@/lib/urbanizacionProjects";

type ServiceItem = {
  slug: string;
  icon: React.ElementType;
};

type UrbanProject = {
  href: string;
  title: string;
  location: string;
  area: string;
  lots: string;
  description: string;
  status: string;
  image?: string;
  video?: string;
};

const services: ServiceItem[] = [
  { slug: "infraestructura-vial", icon: Route },
  { slug: "carreteras", icon: MapPin },
  { slug: "mantenimiento-de-aeropuertos", icon: Plane },
  { slug: "escuelas", icon: GraduationCap },
  { slug: "hospitales", icon: Heart },
  { slug: "electrificacion", icon: Zap },
];

const projects: UrbanProject[] = [
  {
    href: "/urbanizacion/carreteras/etzatlan-magdalena",
    video: "/videos/CarreteraEtzatlanx4.mp4",
    title: "Carretera Etzatlan",
    location: "Etzatlan, Jalisco",
    area: "Infraestructura vial",
    lots: "Obra de carretera",
    description:
      "Proyecto de carretera en la region de Etzatlan. Pronto ampliaremos detalles del desarrollo.",
    status: "Completada",
  },
  {
    href: "/urbanizacion/infraestructura-vial/plaza-liberacion",
    video: "/PlazaLiberacionBackground.webm",
    title: "Plaza Liberacion",
    location: "Guadalajara, Jalisco",
    area: "Espacio publico",
    lots: "Obra urbana",
    description:
      "Intervencion en Plaza Liberacion. Pronto ampliaremos detalles del desarrollo.",
    status: "Completado",
  },
  {
    href: "/urbanizacion/infraestructura-vial/lateral-periferico-sur",
    video: "/videos/LateralPeriferico.mp4",
    title: "Lateral Periferico",
    location: "Guadalajara, Jalisco",
    area: "Infraestructura vial",
    lots: "Obra de lateral",
    description:
      "Obra de lateral en el periferico. Pronto ampliaremos detalles del desarrollo.",
    status: "En ejecucion",
  },
];

const stats = [
  { value: "1.5M+", label: "m² construidos" },
  { value: "150+", label: "Proyectos entregados" },
  { value: "25+", label: "Años de experiencia" },
  { value: "100%", label: "Clientes satisfechos" },
];

const UrbanProjectCard = ({
  project,
  index,
}: {
  project: UrbanProject;
  index: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePointerEnter = () => {
    void videoRef.current?.play().catch(() => {});
  };

  const handlePointerLeave = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <Link
      to={project.href}
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-primary/10">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`Video del proyecto ${project.title}`}
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-1"
          />
        )}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              project.status === "Completado" || project.status === "Completada"
                ? "bg-accent text-accent-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
        <div className="flex items-center gap-2 text-accent mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">{project.location}</span>
        </div>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex gap-4 text-sm">
          <span className="px-3 py-1 bg-secondary rounded-full text-foreground">
            {project.area}
          </span>
          <span className="px-3 py-1 bg-secondary rounded-full text-foreground">
            {project.lots}
          </span>
        </div>
      </div>
    </Link>
  );
};

const Urbanizacion = () => {
  const serviceIconBySlug = new Map(
    services.map((service) => [service.slug, service.icon]),
  );
  const visibleServices = urbanizationServices
    .map((service) => ({
      ...service,
      icon: serviceIconBySlug.get(service.slug),
    }))
    .filter(
      (service): service is typeof service & { icon: React.ElementType } =>
        Boolean(service.icon),
    );

  return (
    <main className="min-h-screen">
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--accent))_0%,_transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Urbanizacion y <span className="text-accent">Lotificacion</span>
            </h1>
            <p
              className="text-xl text-primary-foreground/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Transformamos terrenos en comunidades planificadas con la mas alta
              calidad en infraestructura y servicios urbanos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-1 text-3xl font-bold text-accent-foreground md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-accent-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Servicios de <span className="text-accent">Urbanizacion</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ofrecemos soluciones integrales para el desarrollo de fraccionamientos y
              zonas urbanas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  to={`/urbanizacion/${service.slug}`}
                  key={service.slug}
                  className="block h-full"
                >
                  <Card
                    className="group border-none shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card animate-fade-in-up h-full flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg gradient-accent mb-4 shrink-0">
                        <Icon className="h-7 w-7 text-accent-foreground" />
                      </div>
                      <div className="flex h-[11rem] shrink-0 flex-col gap-0.5">
                        <h3 className="shrink-0 text-xl font-bold leading-tight text-foreground line-clamp-2">
                          {service.title}
                        </h3>
                        <p
                          className="min-h-0 flex-1 overflow-hidden text-base leading-relaxed text-muted-foreground line-clamp-5"
                          title={service.description}
                        >
                          {service.description}
                        </p>
                      </div>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                        Ver proyectos
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proyectos de <span className="text-accent">Urbanizacion</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Conoce algunos de nuestros desarrollos de urbanizacion mas destacados.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <UrbanProjectCard
                key={project.video ?? project.image ?? index}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Urbanizacion;
