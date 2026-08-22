import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.diac.co.in";

  return [
    // Main Pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/corporate_training`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/placement`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Courses
    {
      url: `${baseUrl}/courses/industrial-automation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/courses/scada-and-hmi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/courses/vfd-drive-training`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/courses/electrical-design`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/courses/industrial-iot-training`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/courses/servo-and-drive-system`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/courses/panel-design`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/courses/plc-vender-training`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/courses/customized-industrial-training`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/summer-winter-training`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}