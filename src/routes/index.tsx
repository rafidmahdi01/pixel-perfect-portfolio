import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { SiteNav } from "@/components/site/SiteNav";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { CursorFollower } from "@/components/site/CursorFollower";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { ClientMarquee } from "@/components/site/ClientMarquee";
import { Series } from "@/components/site/Series";
import { ZoomStatement } from "@/components/site/ZoomStatement";

import { Contact } from "@/components/site/Contact";

const title = "Daniel Sushil — Photographer & Visual Storyteller";
const description =
  "Portfolio of Daniel Sushil and Sushil Production: wedding, portrait, event and commercial photography captured across Malaysia since 2017.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sushil Production",
  description,
  url: SITE_URL,
  image: `${SITE_URL}/gallery-portrait-1.jpg`,
  areaServed: "Malaysia",
  founder: { "@type": "Person", name: "Daniel Sushil", jobTitle: "Photographer" },
  serviceType: ["Wedding photography", "Portrait sessions", "Event coverage", "Commercial photography"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/gallery-portrait-1.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/gallery-portrait-1.jpg` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="dark min-h-screen bg-background text-foreground">
      <CursorFollower />
      <SiteNav />
      <main>
        <Hero />
        <Stats />
        <ClientMarquee />
        <ZoomStatement />
        <Gallery />
        <Series />
        <About />
        <Contact />
      </main>
    </div>
  );
}
