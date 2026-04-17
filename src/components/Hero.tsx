import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video + velo blanco */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroImage}
          aria-hidden
        >
          <source src="/PlazaLiberacionBackground.webm" type="video/webm" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white/70"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-40 pb-20 text-center">
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary/60 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Building2 className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Desde 1999 construyendo excelencia</span>
          </div>
        </div>
        
        <h1
          className="mb-6 animate-fade-in-up text-5xl font-bold text-primary md:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          Edificaciones Estructurales
          <span className="mt-2 block text-accent">COBAY</span>
        </h1>
        <p
          className="mx-auto mb-8 max-w-2xl animate-fade-in-up text-xl text-foreground/85 md:text-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          Construyendo confianza, elevando ciudades
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-elegant transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={scrollToContact}
          >
            Contáctanos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary bg-white/40 text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/desarrollos">
              Ver proyectos
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary/35 p-2">
          <div className="h-3 w-1 rounded-full bg-primary/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
