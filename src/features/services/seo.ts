import type { ServiceDefinition } from "@/features/services/data/servicePages";

export const siteUrl = "https://www.nexargarage.pl";

export const homeAutoRepairSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${siteUrl}/#autorepair`,
  name: "Nexar Garage",
  url: siteUrl,
  telephone: "+48712345678",
  email: "kontakt@nexargarage.pl",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Wrocław",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Świdnicka 18",
    addressLocality: "Wrocław",
    postalCode: "50-068",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.1079,
    longitude: 17.0385,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Nexar Garage",
  url: siteUrl,
  inLanguage: "pl-PL",
};

export const servicesDirectoryBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Nexar Garage",
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Usługi",
      item: `${siteUrl}/uslugi`,
    },
  ],
};

export const getServicesDirectoryItemListSchema = (services: ServiceDefinition[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/uslugi#services`,
  name: "Usługi Nexar Garage",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: services.length,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteUrl}/uslugi#${service.slug}`,
    item: {
      "@type": "Service",
      name: service.title.pl,
      description: service.shortDescription.pl,
      serviceType: service.title.pl,
      areaServed: {
        "@type": "City",
        name: "Wrocław",
      },
      provider: {
        "@type": "AutoRepair",
        name: "Nexar Garage",
        url: siteUrl,
      },
    },
  })),
});

export const getServiceFaqSchema = (service: ServiceDefinition) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/uslugi#faq-${service.slug}`,
  mainEntity: service.faq.map((item) => ({
    "@type": "Question",
    name: item.question.pl,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.pl,
    },
  })),
});
