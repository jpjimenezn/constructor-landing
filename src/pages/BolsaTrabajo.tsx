import { Briefcase, Heart, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

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

      {/* Sin vacantes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vacantes <span className="text-accent">Disponibles</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <Card className="border-none shadow-elegant overflow-hidden">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-accent mb-6">
                  <Briefcase className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  No hay vacantes disponibles por el momento
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Las ofertas se publicarán en esta página a la brevedad posible. Vuelve pronto o mantente al pendiente
                  de nuestras redes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BolsaTrabajo;
