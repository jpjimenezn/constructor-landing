import { MapPin, Route, Plane, GraduationCap, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

const services = [
  {
    icon: Route,
    title: "Infraestructura Vial",
    description: "Construcción y desarrollo de calles, avenidas, puentes y sistemas de vialidad urbana de alta calidad.",
  },
  {
    icon: MapPin,
    title: "Carreteras",
    description: "Construcción de carreteras, autopistas y caminos con los más altos estándares de ingeniería.",
  },
  {
    icon: Plane,
    title: "Mantenimiento de Aeropuertos",
    description: "Servicios especializados de mantenimiento y construcción para instalaciones aeroportuarias.",
  },
  {
    icon: GraduationCap,
    title: "Escuelas",
    description: "Construcción de instituciones educativas modernas y funcionales para todos los niveles.",
  },
  {
    icon: Heart,
    title: "Hospitales",
    description: "Edificación de instalaciones de salud con infraestructura especializada y de última generación.",
  },
  {
    icon: Zap,
    title: "Electrificación",
    description: "Diseño e instalación de redes eléctricas, subestaciones y sistemas de iluminación.",
  },
];

const projects = [
  {
    image: projectResidential,
    title: "Fraccionamiento Las Palmas",
    location: "Mérida, Yucatán",
    area: "45 hectáreas",
    lots: "380 lotes",
    description: "Desarrollo urbano integral con áreas verdes, ciclovías y todos los servicios públicos.",
    status: "Completado",
  },
  {
    image: projectCommercial,
    title: "Urbanización Industrial Norte",
    location: "Monterrey, N.L.",
    area: "120 hectáreas",
    lots: "85 lotes industriales",
    description: "Parque industrial con infraestructura de primer nivel para empresas manufactureras.",
    status: "En ejecución",
  },
  {
    image: projectIndustrial,
    title: "Desarrollo Santa María",
    location: "Querétaro, Qro.",
    area: "28 hectáreas",
    lots: "210 lotes",
    description: "Fraccionamiento residencial con casa club, alberca y vigilancia 24 horas.",
    status: "Completado",
  },
];

const Urbanizacion = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--accent))_0%,_transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Urbanización y <span className="text-accent">Lotificación</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Transformamos terrenos en comunidades planificadas con la más alta calidad 
              en infraestructura y servicios urbanos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Servicios de <span className="text-accent">Urbanización</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ofrecemos soluciones integrales para el desarrollo de fraccionamientos y zonas urbanas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="border-none shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg gradient-accent mb-4">
                      <Icon className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proyectos de <span className="text-accent">Urbanización</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Conoce algunos de nuestros desarrollos de urbanización más destacados
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === "Completado" 
                        ? "bg-accent text-accent-foreground" 
                        : "bg-primary text-primary-foreground"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Urbanizacion;

