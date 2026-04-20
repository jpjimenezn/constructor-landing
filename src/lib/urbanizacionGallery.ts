/**
 * Carga automática de imágenes desde `src/assets/urbanizacion/<carpeta>/`.
 * Soporta extensiones: jpg, jpeg, png, webp (mayúsculas o minúsculas).
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
