import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

const projects = [
  {
    image: projectResidential,
    title: "Residencial Los Pinos",
    category: "Residencial",
    description: "Complejo habitacional de 120 unidades con áreas verdes y amenidades modernas.",
  },
  {
    image: projectCommercial,
    title: "Torre Corporativa Central",
    category: "Comercial",
    description: "Edificio de oficinas de 15 pisos con certificación LEED y tecnología de punta.",
  },
  {
    image: projectIndustrial,
    title: "Centro Logístico Norte",
    category: "Industrial",
    description: "Complejo logístico de 20,000 m² con sistemas automatizados y sostenibles.",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proyectos <span className="text-accent">Destacados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conoce algunos de nuestros proyectos más emblemáticos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-primary-foreground/90">{project.description}</p>
                </div>
              </div>
              <div className="p-6 bg-card">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
