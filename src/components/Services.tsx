import { Home, Building, Factory, Wrench, Zap, Wind, Network, HardHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: HardHat,
    title: "Edificación Civil",
    description: "Pavimentos y caminos, vivienda, comercial, industrial, educacional, deportivo y servicios en general.",
  },
  {
    icon: Building,
    title: "Estructura",
    description: "Estructuras domésticas, comerciales e industriales con los más altos estándares de calidad.",
  },
  {
    icon: Wind,
    title: "Aire Acondicionado",
    description: "Sistemas comerciales, industriales, especiales y para cómputo. Servicios correctivos y preventivos.",
  },
  {
    icon: Zap,
    title: "Electromecánica",
    description: "Alta y baja tensión, subestaciones, acometidas aéreas y subterráneas, extensiones de línea.",
  },
  {
    icon: Network,
    title: "Canalizaciones",
    description: "Redes para telefonía y cómputo con instalación profesional y materiales de primera calidad.",
  },
  {
    icon: Wrench,
    title: "Remodelaciones",
    description: "Tablaroca, pintura, carpintería, impermeabilizaciones, jardinería y mantenimiento en general.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/30" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros <span className="text-accent">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos soluciones integrales de construcción adaptadas a cada necesidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-none shadow-card hover:shadow-elegant transition-smooth animate-fade-in bg-card"
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
  );
};

export default Services;
