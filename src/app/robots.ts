import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/privacy", "/terms", "/support", "/delete-account", "/delete-data"],
      disallow: "/",
    },
    sitemap: "https://lifetify.app/sitemap.xml",
  };
}
