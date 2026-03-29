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
