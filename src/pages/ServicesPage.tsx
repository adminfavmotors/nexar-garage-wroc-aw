import { useMemo } from "react";
import { SitePage } from "@/shared/layout";
import { ServiceDetailsAccordion, ServiceFaqSection, ServicesDirectoryIntro, ServicesGrid } from "@/features/services/components";
import { servicePages } from "@/features/services/data";
import { useServiceDirectoryState } from "@/features/services/hooks";
import { useLang } from "@/features/language";
import {
  getServiceFaqSchema,
  getServicesDirectoryBreadcrumbSchema,
  getServicesDirectoryItemListSchema,
  siteUrl,
} from "@/features/services/seo";

const ServicesPage = () => {
  const { lang, t } = useLang();
  const { activeService, activeSlug, detailsRef, openService, updateActiveSlug } =
    useServiceDirectoryState();

  const servicesPageSchema = useMemo(
    () => [
      getServicesDirectoryBreadcrumbSchema(lang),
      getServicesDirectoryItemListSchema(servicePages, lang),
      getServiceFaqSchema(activeService, lang),
    ],
    [activeService, lang]
  );

  return (
    <SitePage
      seo={{
        title: t(
          "Usługi mechaniczne Wrocław | Nexar Garage",
          "Car repair services in Wroclaw | Nexar Garage",
        ),
        description: t(
          "Usługi Nexar Garage we Wrocławiu: diagnostyka komputerowa, naprawy, wymiana opon, elektryka samochodowa, klimatyzacja i geometria kół.",
          "Nexar Garage services in Wroclaw: computer diagnostics, repairs, tyres, auto electrics, air conditioning and wheel alignment.",
        ),
        canonical: `${siteUrl}/uslugi`,
        ogTitle: t(
          "Usługi Nexar Garage | Mechanik Wrocław",
          "Nexar Garage services | Mechanic in Wroclaw",
        ),
        ogDescription: t(
          "Sprawdź pełną ofertę Nexar Garage, orientacyjne ceny i zakres każdej usługi.",
          "Explore the full Nexar Garage service range, estimated prices and the scope of each service.",
        ),
        schema: servicesPageSchema,
      }}
      mainClassName="pt-20 lg:pt-24"
    >
      <ServicesDirectoryIntro activeService={activeService} />
      <ServicesGrid activeSlug={activeSlug} onOpenService={openService} />
      <ServiceDetailsAccordion
        activeSlug={activeSlug}
        detailsRef={detailsRef}
        onChangeActiveSlug={updateActiveSlug}
      />
      <section className="section-block border-b border-border">
        <div className="site-shell">
          <ServiceFaqSection activeService={activeService} />
        </div>
      </section>
    </SitePage>
  );
};

export default ServicesPage;
