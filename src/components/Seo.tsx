import { Helmet } from "react-helmet-async";

const title = "Nexar Garage Wrocław | Serwis Samochodowy | Mechanik Wrocław";
const description =
  "Nexar Garage – profesjonalny serwis samochodowy we Wrocławiu. Diagnostyka OBD2, wymiana opon, klimatyzacja, geometria kół. Umów wizytę online.";
const canonicalUrl = "https://www.nexargarage.pl/";
const ogTitle = "Nexar Garage | Serwis Samochodowy Wrocław";
const ogImage = "/og-image.jpg";

const autoRepairSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Nexar Garage",
  url: "https://www.nexargarage.pl",
  telephone: "+48712345678",
  email: "kontakt@nexargarage.pl",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "6200",
    bestRating: "5",
  },
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Wrocław",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Jak umówić wizytę w Nexar Garage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online przez formularz na stronie lub tel. +48 71 234 56 78. Potwierdzamy w ciągu 2 godzin.",
      },
    },
    {
      "@type": "Question",
      name: "Czy diagnostyka jest bezpłatna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oferujemy bezpłatną wycenę przed każdą naprawą.",
      },
    },
    {
      "@type": "Question",
      name: "Do you speak English?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our staff speaks English. Foreign customers are welcome.",
      },
    },
  ],
};

const Seo = () => {
  return (
    <Helmet htmlAttributes={{ lang: "pl" }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0C0C0C" />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="pl" href="https://www.nexargarage.pl/" />
      <link rel="alternate" hrefLang="en" href="https://www.nexargarage.pl/en/" />
      <link rel="alternate" hrefLang="x-default" href="https://www.nexargarage.pl/" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:locale:alternate" content="en_GB" />

      <script type="application/ld+json">{JSON.stringify(autoRepairSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};

export default Seo;
