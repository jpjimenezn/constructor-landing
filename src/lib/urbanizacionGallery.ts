/**
 * Carga automática de imágenes desde `src/assets/urbanizacion/<carpeta>/`.
 * Soporta extensiones: jpg, jpeg, png, webp (mayúsculas o minúsculas).
 *
 * Rendimiento: un solo archivo grande (p. ej. >2–3 MB) se descarga entero aunque la miniatura sea
 * pequeña. Conviene exportar a WebP o JPEG ~80% de calidad, ancho máx. 1600–1920px, o variantes
 * "thumb" + "full" y usar `srcset` en la galería si hace falta.
 */
const modules = import.meta.glob(
  "../assets/urbanizacion/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}",
  { eager: true, import: "default" },
) as Record<string, string>;

export function urbanizacionGalleryFor(folder: string): string[] {
  const segment = `/urbanizacion/${folder}/`.toLowerCase();
  return Object.entries(modules)
    .filter(([path]) => path.replace(/\\/g, "/").toLowerCase().includes(segment))
    .sort(([a], [b]) =>
      a.replace(/\\/g, "/").localeCompare(b.replace(/\\/g, "/"), undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    )
    .map(([, url]) => url);
}
