import { useState, useRef, useCallback, useEffect } from "react";
import { MapPin, Route, Plane, GraduationCap, Heart, Zap, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { urbanizacionGalleryFor } from "@/lib/urbanizacionGallery";

type ServiceItem = {
  icon: React.ElementType;
  title: string;
  description: string;
  photos: string[];
};

type UrbanProject = {
  title: string;
  location: string;
  area: string;
  lots: string;
  description: string;
  status: string;
  image?: string;
  video?: string;
};

const services: ServiceItem[] = [
  {
    icon: Route,
    title: "Infraestructura Vial",
    description: "Construcción y desarrollo de calles, avenidas, puentes y sistemas de vialidad urbana de alta calidad.",
    photos: urbanizacionGalleryFor("infraestructura-vial"),
  },
  {
    icon: MapPin,
    title: "Carreteras",
    description: "Construcción de carreteras, autopistas y caminos con los más altos estándares de ingeniería.",
    photos: urbanizacionGalleryFor("carreteras"),
  },
  {
    icon: Plane,
    title: "Mantenimiento de Aeropuertos",
    description: "Servicios especializados de mantenimiento y construcción para instalaciones aeroportuarias.",
    photos: [
      "https://picsum.photos/seed/aero1/600/600",
      "https://picsum.photos/seed/aero2/600/600",
      "https://picsum.photos/seed/aero3/600/600",
      "https://picsum.photos/seed/aero4/600/600",
      "https://picsum.photos/seed/aero5/600/600",
      "https://picsum.photos/seed/aero6/600/600",
    ],
  },
  {
    icon: GraduationCap,
    title: "Escuelas",
    description: "Construcción de instituciones educativas modernas y funcionales para todos los niveles.",
    photos: [
      "https://picsum.photos/seed/esc1/600/600",
      "https://picsum.photos/seed/esc2/600/600",
      "https://picsum.photos/seed/esc3/600/600",
      "https://picsum.photos/seed/esc4/600/600",
      "https://picsum.photos/seed/esc5/600/600",
      "https://picsum.photos/seed/esc6/600/600",
    ],
  },
  {
    icon: Heart,
    title: "Hospitales",
    description: "Edificación de instalaciones de salud con infraestructura especializada y de última generación.",
    photos: urbanizacionGalleryFor("hospitales"),
  },
  {
    icon: Zap,
    title: "Electrificación",
    description: "Diseño e instalación de redes eléctricas, subestaciones y sistemas de iluminación.",
    photos: [
      "https://picsum.photos/seed/elec1/600/600",
      "https://picsum.photos/seed/elec2/600/600",
      "https://picsum.photos/seed/elec3/600/600",
      "https://picsum.photos/seed/elec4/600/600",
      "https://picsum.photos/seed/elec5/600/600",
      "https://picsum.photos/seed/elec6/600/600",
    ],
  },
];

const projects: UrbanProject[] = [
  {
    video: "/videos/CarreteraEtzatlanx4.mp4",
    title: "Carretera Etzatlán",
    location: "Etzatlán, Jalisco",
    area: "Infraestructura vial",
    lots: "Obra de carretera",
    description:
      "Proyecto de carretera en la región de Etzatlán. Pronto ampliaremos detalles del desarrollo.",
    status: "Completada",
  },
  {
    video: "/PlazaLiberacionBackground.webm",
    title: "Plaza Liberación",
    location: "Guadalajara, Jalisco",
    area: "Espacio público",
    lots: "Obra urbana",
    description:
      "Intervención en Plaza Liberación. Pronto ampliaremos detalles del desarrollo.",
    status: "Completado",
  },
  {
    video: "/videos/LateralPeriferico.mp4",
    title: "Lateral Periférico",
    location: "Guadalajara, Jalisco",
    area: "Infraestructura vial",
    lots: "Obra de lateral",
    description:
      "Obra de lateral en el periférico. Pronto ampliaremos detalles del desarrollo.",
    status: "En ejecución",
  },
];

// ── Instagram-style photo gallery ────────────────────────────────────────────

const GRID_LIMIT = 6;

type PhotoGalleryProps = {
  photos: string[];
  title: string;
  Icon: React.ElementType;
  /** Clases para la rejilla (p. ej. `mt-0` si el espacio lo da el padre con `gap`) */
  gridClassName?: string;
};

const PhotoGallery = ({ photos, title, Icon, gridClassName }: PhotoGalleryProps) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const gridPhotos = photos.slice(0, GRID_LIMIT);
  const remaining = photos.length - GRID_LIMIT;

  const goPrev = useCallback(() => setActiveIndex((i) => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => setActiveIndex((i) => Math.min(photos.length - 1, i + 1)), [photos.length]);

  // Keyboard navigation inside lightbox
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, goPrev, goNext]);

  // Scroll active thumbnail into view
  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const thumb = container.children[activeIndex] as HTMLElement | undefined;
    thumb?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeIndex]);

  const openAt = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  return (
    <>
      {/* ── Grid preview ─────────────────────────────────────── */}
      <div
        className={cn("mt-4 grid grid-cols-3 gap-0.5 rounded-xl overflow-hidden", gridClassName)}
      >
        {gridPhotos.map((src, i) => {
          const isLast = i === GRID_LIMIT - 1 && remaining > 0;
          return (
            <button
              key={i}
              onClick={() => openAt(i)}
              className="group/cell relative aspect-square overflow-hidden focus:outline-none"
              aria-label={`Ver foto ${i + 1} de ${title}`}
            >
              <img
                src={src}
                alt={`${title} – foto ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover/cell:scale-110"
                loading="lazy"
              />
              {/* Hover tint */}
              <span className="absolute inset-0 bg-black/0 group-hover/cell:bg-black/30 transition-colors duration-200" />
              {/* "+N more" overlay on the last visible cell */}
              {isLast && (
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/55">
                  <Images className="h-5 w-5 text-white" />
                  <span className="text-white text-base font-bold leading-none">+{remaining}</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-0 border-none bg-black p-0 sm:max-w-xl [&>button]:text-white [&>button]:opacity-80 [&>button]:hover:opacity-100">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full gradient-accent">
              <Icon className="h-4 w-4 text-accent-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-semibold text-white">{title}</p>
              <p className="text-xs text-white/50">{photos.length} fotos</p>
            </div>
            <span className="text-xs tabular-nums text-white/50">
              {activeIndex + 1} / {photos.length}
            </span>
          </div>

          {/* Main image */}
          <div className="relative aspect-square w-full overflow-hidden bg-black/90">
            <img
              key={activeIndex}
              src={photos[activeIndex]}
              alt={`${title} – foto ${activeIndex + 1}`}
              className="h-full w-full object-cover animate-in fade-in-0 zoom-in-95 duration-300"
            />
            {/* Prev */}
            {activeIndex > 0 && (
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition hover:bg-white hover:scale-110 focus:outline-none"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            {/* Next */}
            {activeIndex < photos.length - 1 && (
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition hover:bg-white hover:scale-110 focus:outline-none"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Ir a foto ${i + 1}`}
                  className={`rounded-full transition-all duration-200 focus:outline-none ${
                    i === activeIndex
                      ? "h-2 w-4 bg-accent"
                      : "h-1.5 w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div
            ref={thumbsRef}
            className="flex gap-1.5 overflow-x-auto px-3 py-3 scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            {photos.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Miniatura ${i + 1}`}
                className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-md transition-all duration-200 focus:outline-none ${
                  i === activeIndex
                    ? "ring-2 ring-accent ring-offset-1 ring-offset-black opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────

const UrbanProjectCard = ({ project, index }: { project: UrbanProject; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePointerEnter = () => {
    void videoRef.current?.play().catch(() => {});
  };

  const handlePointerLeave = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <div
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-primary/10">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`Video del proyecto ${project.title}`}
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-1"
          />
        )}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              project.status === "Completado" || project.status === "Completada"
                ? "bg-accent text-accent-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {project.status}
          </span>
        </div>
        {!project.video && (
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
        <div className="flex items-center gap-2 text-accent mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">{project.location}</span>
        </div>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex gap-4 text-sm">
          <span className="px-3 py-1 bg-secondary rounded-full text-foreground">{project.area}</span>
          <span className="px-3 py-1 bg-secondary rounded-full text-foreground">{project.lots}</span>
        </div>
      </div>
    </div>
  );
};

const Urbanizacion = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--accent))_0%,_transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Urbanización y <span className="text-accent">Lotificación</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Transformamos terrenos en comunidades planificadas con la más alta calidad 
              en infraestructura y servicios urbanos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Servicios de <span className="text-accent">Urbanización</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ofrecemos soluciones integrales para el desarrollo de fraccionamientos y zonas urbanas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="border-none shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card animate-fade-in-up h-full flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg gradient-accent mb-4 shrink-0">
                      <Icon className="h-7 w-7 text-accent-foreground" />
                    </div>
                    {/* Altura total fija (alinea galerías); el título sin altura fija para no dejar hueco con 1 sola línea */}
                    <div className="flex h-[11rem] shrink-0 flex-col gap-0.5">
                      <h3 className="shrink-0 text-xl font-bold leading-tight text-foreground line-clamp-2">
                        {service.title}
                      </h3>
                      <p
                        className="min-h-0 flex-1 overflow-hidden text-base leading-relaxed text-muted-foreground line-clamp-5"
                        title={service.description}
                      >
                        {service.description}
                      </p>
                    </div>
                    {service.photos.length > 0 && (
                      <PhotoGallery
                        photos={service.photos}
                        title={service.title}
                        Icon={Icon}
                        gridClassName="mt-1.5"
                      />
                    )}
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
              Proyectos de <span className="text-accent">Urbanización</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Conoce algunos de nuestros desarrollos de urbanización más destacados
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <UrbanProjectCard key={project.video ?? project.image ?? index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Urbanizacion;

