import { useMemo } from "react";
import { SitePage } from "@/shared/layout";
import { ServiceDetailsAccordion, ServiceFaqSection, ServicesDirectoryIntro, ServicesGrid } from "@/features/services/components";
import { servicePages } from "@/features/services/data";
import { useServiceDirectoryState } from "@/features/services/hooks";
import {
  getServiceFaqSchema,
  getServicesDirectoryItemListSchema,
  servicesDirectoryBreadcrumbSchema,
  siteUrl,
} from "@/features/services/seo";

const ServicesPage = () => {
  const { activeService, activeSlug, detailsRef, openService, updateActiveSlug } =
    useServiceDirectoryState();

  const servicesPageSchema = useMemo(
    () => [
      servicesDirectoryBreadcrumbSchema,
      getServicesDirectoryItemListSchema(servicePages),
      getServiceFaqSchema(activeService),
    ],
    [activeService]
  );

  return (
    <SitePage
      seo={{
        title: "UsÄąâ€šugi mechaniczne WrocÄąâ€šaw | Diagnostyka, opony, klima | Nexar Garage",
        description:
          "UsÄąâ€šugi Nexar Garage we WrocÄąâ€šawiu: diagnostyka komputerowa, serwis i naprawy, wymiana opon, elektryk samochodowy, klimatyzacja i geometria kÄ‚Ĺ‚Äąâ€š.",
        canonical: `${siteUrl}/uslugi`,
        ogTitle: "UsÄąâ€šugi Nexar Garage | Mechanik WrocÄąâ€šaw",
        ogDescription:
          "SprawdÄąĹź peÄąâ€šnĂ„â€¦ ofertĂ„â„˘ usÄąâ€šug Nexar Garage we WrocÄąâ€šawiu, porÄ‚Ĺ‚wnaj orientacyjne ceny i otwÄ‚Ĺ‚rz opis wybranej usÄąâ€šugi bez opuszczania strony.",
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
      <section className="border-b border-border">
        <div className="site-shell pb-[calc(var(--section-space-mobile)+0.5rem)] sm:pb-[calc(var(--section-space-tablet)+0.5rem)] lg:pb-[calc(var(--section-space-desktop)+1rem)]">
          <ServiceFaqSection activeService={activeService} />
        </div>
      </section>
    </SitePage>
  );
};

export default ServicesPage;
