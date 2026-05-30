/** Base path when deployed on GitHub Pages (e.g. /FERRETERIA). Empty on local dev. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix public asset URLs for static <img> tags and preloads. */
export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
