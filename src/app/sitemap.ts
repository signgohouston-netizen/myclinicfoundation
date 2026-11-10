import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routes = [
    "",
    "/how-it-works",
    "/services",
    "/find-help",
    "/insurance",
    "/research",
    "/advertise",
    "/about",
    "/donate",
    "/join",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const now = new Date();
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/donate" || route === "/find-help" ? 0.9 : 0.7,
  }));
}
