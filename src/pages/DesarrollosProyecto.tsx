import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { findDesarrolloServiceBySlug } from "@/lib/desarrollosProjects";

const DesarrollosProyecto = () => {
  const { slug } = useParams();
  const service = useMemo(
    () => (slug ? findDesarrolloServiceBySlug(slug) : undefined),
    [slug],
  );

  if (!service) {
    return (
      <main className="min-h-screen bg-background">
        <section className="pt-36 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground">
              Servicio no encontrado
            </h1>
            <p className="mt-3 text-muted-foreground">
              El servicio solicitado no existe o fue movido.
            </p>
            <Link
              to="/desarrollos"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground transition hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Desarrollos
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-primary pb-16 pt-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_hsl(var(--accent))_0%,_transparent_50%)]" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <Link
            to="/desarrollos"
            className="mb-6 inline-flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Desarrollos
          </Link>
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/90">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            Proyectos de {service.title}
          </h2>
          {service.projects.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-8 text-muted-foreground">
              Actualmente no hay proyectos publicados en esta categoria.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {service.projects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/desarrollos/${service.slug}/${project.slug}`}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted/30">
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                      {project.shortDescription}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      Ver detalle del proyecto
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DesarrollosProyecto;
