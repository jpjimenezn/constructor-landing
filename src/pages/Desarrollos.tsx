import { Building2, Home, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

const services = [
  {
    icon: Building2,
    title: "Vivienda Vertical",
    description: "Construcción de torres de departamentos y edificios habitacionales con diseños modernos y amenidades de primer nivel.",
  },
  {
    icon: Home,
    title: "Casa Habitación",
    description: "Construcción de casas residenciales personalizadas con acabados de alta calidad y atención al detalle.",
  },
  {
    icon: TreePine,
    title: "Desarrollo Residencial",
    description: "Creación de fraccionamientos y comunidades planificadas con infraestructura completa y áreas verdes.",
  },
];

const projects = [
  {
    image: projectResidential,
    title: "Torres Residencial Vista",
    location: "Ciudad de México",
    area: "35,000 m²",
    units: "280 departamentos",
    description: "Complejo de tres torres con amenidades de lujo, roof garden y áreas comunes.",
    status: "Completado",
  },
  {
    image: projectCommercial,
    title: "Centro Empresarial COBAY",
    location: "Guadalajara, Jalisco",
    area: "48,000 m²",
    units: "15 pisos",
    description: "Torre corporativa AAA con certificación LEED y sistemas inteligentes de gestión.",
    status: "En ejecución",
  },
  {
    image: projectIndustrial,
    title: "Parque Industrial Poniente",
    location: "Toluca, Estado de México",
    area: "150,000 m²",
    units: "12 naves",
    description: "Complejo industrial con naves de diversos tamaños y servicios compartidos.",
    status: "Completado",
  },
];

const stats = [
  { value: "1.5M+", label: "m² construidos" },
  { value: "150+", label: "Proyectos entregados" },
  { value: "25+", label: "Años de experiencia" },
  { value: "100%", label: "Clientes satisfechos" },
];

const Desarrollos = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_hsl(var(--accent))_0%,_transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Desarrollos <span className="text-accent">Inmobiliarios</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Construimos proyectos de alto impacto que transforman ciudades y 
              generan valor para nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-accent-foreground/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tipos de <span className="text-accent">Desarrollos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Experiencia comprobada en diversos tipos de proyectos inmobiliarios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
              Proyectos <span className="text-accent">Destacados</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Conoce algunos de nuestros desarrollos inmobiliarios más importantes
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
                    <Building2 className="h-4 w-4" />
                    <span className="text-sm font-medium">{project.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="px-3 py-1 bg-secondary rounded-full text-foreground">
                      {project.area}
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-foreground">
                      {project.units}
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

export default Desarrollos;

