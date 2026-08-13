/** Canonical origin for absolute URLs (canonical tags, sitemap, structured data). */
export const SITE_URL = (
  import.meta.env["VITE_SITE_URL"] ?? "https://elenavoss.lovable.app"
).replace(/\/$/, "");

export const SITE_NAME = "Elena Voss Photography";
