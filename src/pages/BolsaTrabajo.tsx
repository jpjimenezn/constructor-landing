import { Briefcase, Award, Users, Mail, LinkedinIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const CONTACT_EMAIL = "recursoshumanos@cobay.com.mx";

const benefitsList = [
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
  const handleEnviarCV = () => {
    const subject = encodeURIComponent("Postulación — Envío de CV");
    const body = encodeURIComponent(
      "Hola, me gustaría postularme para formar parte del equipo COBAY.\n\nNombre:\nApellidos:\nTeléfono:\n\nMensaje:\n\n(Adjunta tu CV en este correo)"
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
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

      {/* Vacantes */}
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

      {/* Enviar CV */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-accent mb-6">
              <Mail className="h-8 w-8 text-accent-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Envía tu <span className="text-accent">CV</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              ¿Quieres ser parte de COBAY? Mándanos tu currículum y te contactaremos cuando surja una oportunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleEnviarCV} className="gap-2">
                <Mail className="h-5 w-5" />
                Enviar mi CV por correo
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2">
                <a
                  href="https://www.linkedin.com/company/edificaciones-estructurales-cobay/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-5 w-5" />
                  Síguenos en LinkedIn
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">{CONTACT_EMAIL}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BolsaTrabajo;
