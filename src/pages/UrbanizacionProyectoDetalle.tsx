import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Footer from "@/components/Footer";
import { findUrbanizationProjectBySlug } from "@/lib/urbanizacionProjects";

const UrbanizacionProyectoDetalle = () => {
  const { slug, projectSlug } = useParams();
  const data = useMemo(
    () =>
      slug && projectSlug
        ? findUrbanizationProjectBySlug(slug, projectSlug)
        : undefined,
    [slug, projectSlug],
  );
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data) {
    return (
      <main className="min-h-screen bg-background">
        <section className="pt-36 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground">
              Proyecto no encontrado
            </h1>
            <p className="mt-3 text-muted-foreground">
              El proyecto solicitado no existe o fue movido.
            </p>
            <Link
              to="/urbanizacion"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground transition hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Urbanizacion
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const { service, project } = data;

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-primary pb-16 pt-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--accent))_0%,_transparent_50%)]" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <Link
            to={`/urbanizacion/${service.slug}`}
            className="mb-6 inline-flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a {service.title}
          </Link>
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-4xl text-lg text-primary-foreground/90">
            {project.fullDescription}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full gradient-accent">
              <Images className="h-5 w-5 text-accent-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Galeria del proyecto
            </h2>
          </div>

          {project.photos.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-8 text-muted-foreground">
              Aun no hay imagenes disponibles para este proyecto.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
              {project.photos.map((photo, index) => (
                <button
                  key={photo}
                  onClick={() => {
                    setActiveIndex(index);
                    setOpen(true);
                  }}
                  className="group relative aspect-square overflow-hidden rounded-lg"
                  aria-label={`Abrir imagen ${index + 1}`}
                >
                  <img
                    src={photo}
                    alt={`${project.title} - imagen ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[96vw] border-none bg-transparent p-0 shadow-none sm:max-w-6xl [&>button]:right-3 [&>button]:top-3 [&>button]:flex [&>button]:h-10 [&>button]:w-10 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:bg-white/90 [&>button]:p-0 [&>button]:text-black [&>button]:opacity-100 [&>button]:shadow-md [&>button]:transition hover:[&>button]:scale-105 hover:[&>button]:bg-white [&>button>svg]:h-5 [&>button>svg]:w-5">
          <div className="relative">
            <img
              key={project.photos[activeIndex]}
              src={project.photos[activeIndex]}
              alt={`${project.title} - imagen ${activeIndex + 1}`}
              className="max-h-[92vh] w-full object-contain animate-in fade-in zoom-in-95 duration-300"
            />

            {activeIndex > 0 && (
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => prev - 1)}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition hover:scale-105 hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            {activeIndex < project.photos.length - 1 && (
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => prev + 1)}
                aria-label="Imagen siguiente"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition hover:scale-105 hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
};

export default UrbanizacionProyectoDetalle;
