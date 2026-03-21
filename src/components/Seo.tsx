import { Helmet } from "react-helmet-async";

export const siteUrl = "https://www.nexargarage.pl";
const defaultImage = `${siteUrl}/og-image.jpg`;

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

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Array<Record<string, unknown>>;
};

const Seo = ({
  title,
  description,
  canonical,
  robots = "index, follow",
  ogTitle,
  ogDescription,
  ogType = "website",
  ogImage = defaultImage,
  schema = [],
}: SeoProps) => {
  return (
    <Helmet htmlAttributes={{ lang: "pl" }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0C0C0C" />
      <meta name="robots" content={robots} />

      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Nexar Garage" />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pl_PL" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle ?? title} />
      <meta name="twitter:description" content={ogDescription ?? description} />
      <meta name="twitter:image" content={ogImage} />

      {schema.map((entry, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
