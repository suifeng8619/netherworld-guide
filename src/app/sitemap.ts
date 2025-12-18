import { MetadataRoute } from "next";
import { BOSS_GUIDES } from "@/data/gameData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://netherworldcovenant.com";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/guides/beginners`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/combat`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/weapons`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/companions`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/tier-list`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/relics`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/progression`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/classes`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bosses`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Class pages
  const classPages = [
    "berserker",
    "mage",
    "hunter",
    "shield-guard",
    "useless-person",
  ].map((classSlug) => ({
    url: `${baseUrl}/classes/${classSlug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Boss detail pages
  const bossPages = Object.keys(BOSS_GUIDES).map((bossSlug) => ({
    url: `${baseUrl}/bosses/${bossSlug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Tool pages
  const toolPages = [
    "build-calculator",
    "damage-calculator",
    "build-share",
    "class-finder",
    "random-build",
    "compare",
  ].map((toolSlug) => ({
    url: `${baseUrl}/tools/${toolSlug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...classPages, ...bossPages, ...toolPages];
}
