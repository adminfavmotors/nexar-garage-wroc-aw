import { SitePage } from "@/shared/layout";
import { ServiceCatalog } from "@/features/services/components";
import { servicePages } from "@/features/services/data";
import { useLang } from "@/features/language";
import {
  getServicesDirectoryBreadcrumbSchema,
  getServicesDirectoryItemListSchema,
  siteUrl,
} from "@/features/services/seo";

const ServicesPage = () => {
  const { lang, t } = useLang();
  return (
    <SitePage
      seo={{
        title: t(
          "Usługi i ceny | Nexar Garage Wrocław",
          "Services and prices | Nexar Garage Wroclaw",
        ),
        description: t(
          "Diagnostyka, naprawy, wymiana opon, elektryka, klimatyzacja i geometria kół. Sprawdź zakres prac i umów wizytę w Nexar Garage.",
          "Diagnostics, repairs, tyres, electrics, air conditioning and wheel alignment. Check the scope of work and book a visit.",
        ),
        canonical: `${siteUrl}/uslugi`,
        schema: [
          getServicesDirectoryBreadcrumbSchema(lang),
          getServicesDirectoryItemListSchema(servicePages, lang),
        ],
      }}
      mainClassName="pt-16 lg:pt-20"
    >
      <ServiceCatalog standalone />
    </SitePage>
  );
};
export default ServicesPage;
