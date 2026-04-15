import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/banner",
    },
    sitemap: "https://lifetify.app/sitemap.xml",
  };
}
