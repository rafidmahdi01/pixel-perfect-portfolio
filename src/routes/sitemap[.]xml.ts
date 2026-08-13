import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";

const PAGES = ["/"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
  (p) =>
    `  <url><loc>${SITE_URL}${p}</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>`,
).join("\n")}
</urlset>`;
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
