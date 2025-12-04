import { useState } from "react";
import { MapPin, Clock, DollarSign, ChevronDown, ChevronUp, Users, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Ingeniero Civil Sr.",
    department: "Construcción",
    location: "Ciudad de México",
    type: "Tiempo completo",
    salary: "$35,000 - $50,000 MXN",
    description: "Buscamos un Ingeniero Civil con experiencia en supervisión de obra para liderar proyectos de construcción residencial y comercial.",
    requirements: [
      "Licenciatura en Ingeniería Civil",
      "5+ años de experiencia en supervisión de obra",
      "Conocimiento en normativas de construcción",
      "Manejo de AutoCAD y software de gestión de proyectos",
      "Disponibilidad para viajar",
    ],
    benefits: [
      "Seguro de gastos médicos mayores",
      "Vales de despensa",
      "Bono anual por desempeño",
      "Capacitación continua",
    ],
  },
  {
    id: 2,
    title: "Arquitecto Proyectista",
    department: "Diseño",
    location: "Monterrey, N.L.",
    type: "Tiempo completo",
    salary: "$28,000 - $40,000 MXN",
    description: "Únete a nuestro equipo de diseño para crear proyectos arquitectónicos innovadores y funcionales.",
    requirements: [
      "Licenciatura en Arquitectura",
      "3+ años de experiencia en diseño de proyectos",
      "Dominio de Revit, SketchUp y render 3D",
      "Creatividad y atención al detalle",
      "Trabajo en equipo",
    ],
    benefits: [
      "Horario flexible",
      "Home office parcial",
      "Seguro de vida",
      "Descuentos en gimnasio",
    ],
  },
  {
    id: 3,
    title: "Residente de Obra",
    department: "Construcción",
    location: "Querétaro, Qro.",
    type: "Tiempo completo",
    salary: "$25,000 - $35,000 MXN",
    description: "Responsable de la supervisión diaria en sitio de construcción, asegurando calidad y cumplimiento de tiempos.",
    requirements: [
      "Ingeniería Civil o Arquitectura",
      "2+ años de experiencia como residente",
      "Conocimiento en control de obra",
      "Liderazgo de equipos de trabajo",
      "Residencia en Querétaro o disponibilidad de cambio",
    ],
    benefits: [
      "Vehículo utilitario",
      "Viáticos",
      "Seguro de gastos médicos",
      "Bonos por proyecto",
    ],
  },
  {
    id: 4,
    title: "Contador General",
    department: "Administración",
    location: "Ciudad de México",
    type: "Tiempo completo",
    salary: "$22,000 - $30,000 MXN",
    description: "Gestión contable integral de la empresa, incluyendo facturación, nóminas y reportes financieros.",
    requirements: [
      "Licenciatura en Contaduría Pública",
      "3+ años de experiencia en contabilidad general",
      "Conocimiento en SAT y facturación electrónica",
      "Manejo de CONTPAQi o similar",
      "Excel avanzado",
    ],
    benefits: [
      "Prestaciones superiores a la ley",
      "Fondo de ahorro",
      "Capacitación fiscal",
      "Ambiente de trabajo profesional",
    ],
  },
  {
    id: 5,
    title: "Operador de Maquinaria Pesada",
    department: "Operaciones",
    location: "Varios estados",
    type: "Tiempo completo",
    salary: "$18,000 - $25,000 MXN",
    description: "Operación de retroexcavadoras, bulldozers y otra maquinaria pesada en proyectos de urbanización.",
    requirements: [
      "Licencia de operador de maquinaria vigente",
      "3+ años de experiencia comprobable",
      "Conocimiento en mantenimiento preventivo",
      "Disponibilidad para trabajar en campo",
    ],
    benefits: [
      "Alimentación en obra",
      "Hospedaje incluido",
      "Seguro de vida",
      "Bonos por productividad",
    ],
  },
];

const benefitsList = [
  {
    icon: Heart,
    title: "Bienestar Integral",
    description: "Seguro de gastos médicos, seguro de vida y programas de bienestar para ti y tu familia.",
  },
  {
    icon: Award,
    title: "Desarrollo Profesional",
    description: "Capacitación continua, certificaciones y oportunidades de crecimiento dentro de la empresa.",
  },
  {
    icon: Users,
    title: "Ambiente Colaborativo",
    description: "Equipo de trabajo profesional y comprometido con un ambiente laboral positivo.",
  },
];

const BolsaTrabajo = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJob = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_hsl(var(--accent))_0%,_transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Bolsa de <span className="text-accent">Trabajo</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Únete a nuestro equipo y construye tu futuro profesional con nosotros. 
              Buscamos talento apasionado por la construcción.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-accent-foreground text-center mb-10">
            ¿Por qué trabajar en COBAY?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefitsList.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-foreground/10 mb-4">
                    <Icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-accent-foreground mb-2">{benefit.title}</h3>
                  <p className="text-accent-foreground/80">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vacantes <span className="text-accent">Disponibles</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explora nuestras oportunidades laborales y encuentra tu próximo reto profesional
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {jobPositions.map((job, index) => (
              <Card 
                key={job.id}
                className="border-none shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Job Header */}
                  <button
                    onClick={() => toggleJob(job.id)}
                    className="w-full p-6 text-left hover:bg-secondary/30 transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                          <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                            {job.department}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {expandedJob === job.id ? (
                          <ChevronUp className="h-6 w-6 text-accent" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Job Details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      expandedJob === job.id ? "max-h-[600px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 border-t border-border">
                      <div className="pt-6 space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Descripción</h4>
                          <p className="text-muted-foreground">{job.description}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Requisitos</h4>
                          <ul className="space-y-1">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-accent mt-1">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Beneficios</h4>
                          <ul className="space-y-1">
                            {job.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-accent mt-1">✓</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BolsaTrabajo;
