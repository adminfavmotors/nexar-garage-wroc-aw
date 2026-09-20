import { Helmet } from "react-helmet-async";
import { siteUrl } from "@/features/services/seo";
import { useLang } from "@/features/language";

const defaultImage = `${siteUrl}/og-image.jpg`;

export type SiteSeoProps = {
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

const SiteSeo = ({
  title,
  description,
  canonical,
  robots = "index, follow",
  ogTitle,
  ogDescription,
  ogType = "website",
  ogImage = defaultImage,
  schema = [],
}: SiteSeoProps) => {
  const { lang } = useLang();
  const htmlLang = lang === "PL" ? "pl" : "en";
  const ogLocale = lang === "PL" ? "pl_PL" : "en_GB";

  return (
    <Helmet htmlAttributes={{ lang: htmlLang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="robots" content={robots} />

      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Nexar Garage" />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={lang === "PL" ? "en_GB" : "pl_PL"} />

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

export default SiteSeo;
