import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import logoCobay from "@/assets/logo-clasico-cobay.png";
import { desarrollosServices } from "@/lib/desarrollosProjects";

type ServiceItem = {
  slug: string;
  icon: React.ElementType;
};

const services: ServiceItem[] = [
  { slug: "vivienda-vertical", icon: Building2 },
  { slug: "casa-habitacion", icon: Home },
  { slug: "desarrollo-residencial", icon: TreePine },
];

const stats = [
  { value: "1.5M+", label: "m² construidos" },
  { value: "250+", label: "Proyectos entregados" },
  { value: "25+", label: "Años de experiencia" },
  { value: "100%", label: "Clientes satisfechos" },
];

const featuredProjects = [
  {
    href: "/desarrollos/vivienda-vertical/torre-areni",
    title: "Torre Areni",
    category: "Vivienda Vertical",
    description: "Proyecto de vivienda vertical actualmente publicado en nuestro portafolio.",
  },
  {
    href: "/desarrollos/casa-habitacion/andaluz",
    title: "Andaluz",
    category: "Casa Habitacion",
    description: "Proyecto residencial de casa habitacion incluido en nuestra linea de desarrollos.",
  },
  {
    href: "/desarrollos/casa-habitacion/la-rioja",
    title: "La Rioja",
    category: "Casa Habitacion",
    description: "Proyecto residencial de casa habitacion con enfoque en calidad y detalle constructivo.",
  },
];

const Desarrollos = () => {
  const serviceIconBySlug = new Map(
    services.map((service) => [service.slug, service.icon]),
  );
  const visibleServices = desarrollosServices
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
      <section className="relative overflow-hidden bg-primary pb-20 pt-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_hsl(var(--accent))_0%,_transparent_50%)]" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 animate-fade-in text-4xl font-bold text-primary-foreground md:text-6xl">
              Desarrollos <span className="text-accent">Inmobiliarios</span>
            </h1>
            <p
              className="animate-fade-in text-xl text-primary-foreground/90"
              style={{ animationDelay: "0.2s" }}
            >
              Construimos proyectos de alto impacto que transforman ciudades y
              generan valor para nuestros clientes.
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

      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              Tipos de <span className="text-accent">Desarrollos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Conoce nuestros servicios por categoria y explora los proyectos
              publicados en cada una.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  to={`/desarrollos/${service.slug}`}
                  key={service.slug}
                  className="block h-full"
                >
                  <Card
                    className="group h-full border-none bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="mb-4 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-lg gradient-accent">
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
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              Proyectos <span className="text-accent">Destacados</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Accede a los proyectos publicados de Desarrollos Inmobiliarios.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.href}
                to={project.href}
                className="group overflow-hidden rounded-xl bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
                  <img
                    src={logoCobay}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <div className="mb-3 inline-flex rounded-full bg-secondary px-3 py-1 text-sm text-foreground">
                    {project.category}
                  </div>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Ver proyecto
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Desarrollos;
