import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tainoscybercon.com";
  const lastMod = new Date("2026-05-30");

  return [
    { url: base,                  lastModified: lastMod, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/programme`,   lastModified: lastMod, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/speakers`,    lastModified: lastMod, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/tickets`,     lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/partners`,    lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`,     lastModified: lastMod, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
