import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://phyber.care";

  return [
    {
      url: `${baseUrl}/`,
      priority: 1.0,
      changeFrequency: "daily",
      lastModified: new Date(),
    },

    // Main sections
    {
      url: `${baseUrl}/mind`,
      priority: 0.9,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/body`,
      priority: 0.9,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/consult/virtual`,
      priority: 0.9,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/consult/at-facility`,
      priority: 0.9,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/on-premise/at-home`,
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/on-premise/at-work`,
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/store`,
      priority: 0.8,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/wiki`,
      priority: 0.8,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/our-story`,
      priority: 0.7,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/partners`,
      priority: 0.7,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },

    // Plans
    {
      url: `${baseUrl}/plans/individual`,
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/plans/enterprise`,
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/plans/campus`,
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
  ];
}
