import { Building2, Users, Award, Hammer } from "lucide-react";

const stats = [
  { icon: Building2, value: "⚠️ XX+", label: "Proyectos completados" }, // ⚠️ DATO PENDIENTE
  { icon: Users, value: "25+", label: "Años de experiencia" }, // ✅ Desde 1999
  { icon: Award, value: "100%", label: "Compromiso con calidad" },
  { icon: Hammer, value: "Total", label: "Respaldo técnico" },
];

const About = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experiencia que construye <span className="text-accent">futuro</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fundada en 1999, Edificaciones Estructurales Cobay, S.A. de C.V. nace como una empresa dedicada 
            a la promoción y construcción de todo tipo de obras. Ofrecemos el Respaldo Técnico, Estructural, 
            Logístico, Operativo y Humano necesario para proyectos de cualquier tamaño y dimensión.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-smooth">
            <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Filosofía</h3>
            <p className="text-muted-foreground">
              Nuestra principal preocupación es brindarle exclusivamente la mejor tecnología del 
              mercado de la construcción, por ello trabajamos con empresas líderes en su ramo 
              reconocidas a nivel nacional e internacional.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-smooth">
            <h3 className="text-2xl font-bold text-foreground mb-4">Respaldo Integral</h3>
            <p className="text-muted-foreground">
              Ofrecemos Respaldo Técnico, Estructural, Logístico, Operativo y Humano necesario 
              para proyectos de cualquier tamaño y dimensión, garantizando resultados excepcionales.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-smooth">
            <h3 className="text-2xl font-bold text-foreground mb-4">Nuestro Compromiso</h3>
            <p className="text-muted-foreground">
              Desde 1999 dedicados a la promoción y construcción de todo tipo de obras, 
              con calidad, innovación y la mejor tecnología para cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
