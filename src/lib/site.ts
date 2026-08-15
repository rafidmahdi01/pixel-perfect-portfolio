/** Canonical origin for absolute URLs (canonical tags, sitemap, structured data). */
export const SITE_URL = (
  import.meta.env["VITE_SITE_URL"] ?? "https://sushilphotography.lovable.app"
).replace(/\/$/, "");

export const SITE_NAME = "Sushil Production";
