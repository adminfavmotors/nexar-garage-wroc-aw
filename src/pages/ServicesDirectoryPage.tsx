import { useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useLang } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  getServiceFaqSchema,
  getServicesDirectoryItemListSchema,
  servicesDirectoryBreadcrumbSchema,
  siteUrl,
} from "@/data/seo";
import { servicePages } from "@/data/servicePages";

const defaultServiceSlug = servicePages[0]?.slug ?? "";

const ServicesDirectoryPage = () => {
  const { t } = useLang();
  const [activeSlug, setActiveSlug] = useState(defaultServiceSlug);
  const detailsRef = useRef<HTMLElement | null>(null);

  const activeService = useMemo(
    () => servicePages.find((service) => service.slug === activeSlug) ?? servicePages[0],
    [activeSlug]
  );

  const servicesPageSchema = useMemo(
    () => [
      servicesDirectoryBreadcrumbSchema,
      getServicesDirectoryItemListSchema(servicePages),
      getServiceFaqSchema(activeService),
    ],
    [activeService]
  );

  useEffect(() => {
    const hashSlug = window.location.hash.replace("#", "");
    if (hashSlug && servicePages.some((service) => service.slug === hashSlug)) {
      setActiveSlug(hashSlug);
      requestAnimationFrame(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  const openService = (slug: string) => {
    setActiveSlug(slug);
    window.history.replaceState(null, "", `/uslugi#${slug}`);
    requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Usługi mechaniczne Wrocław | Diagnostyka, opony, klima | Nexar Garage"
        description="Usługi Nexar Garage we Wrocławiu: diagnostyka komputerowa, serwis i naprawy, wymiana opon, elektryk samochodowy, klimatyzacja i geometria kół."
        canonical={`${siteUrl}/uslugi`}
        ogTitle="Usługi Nexar Garage | Mechanik Wrocław"
        ogDescription="Sprawdź pełną ofertę usług Nexar Garage we Wrocławiu, porównaj orientacyjne ceny i otwórz opis wybranej usługi bez opuszczania strony."
        schema={servicesPageSchema}
      />
      <Header />

      <main className="pt-20 lg:pt-24">
        <section className="section-block border-b border-border">
          <div className="site-shell">
            <p className="font-inter text-[12px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {t("Oferta serwisu Wrocław", "Workshop services Wrocław")}
            </p>
            <h1 className="text-balance measure-hero mt-4 font-barlow text-[42px] font-extrabold uppercase leading-[0.96] text-foreground sm:text-[58px] lg:text-[74px]">
              {t("USŁUGI NEXAR GARAGE", "NEXAR GARAGE SERVICES")}
            </h1>
            <p className="measure-copy-wide mt-5 font-inter text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
              {t(
                "Zebraliśmy wszystkie główne usługi w jednym miejscu. Wybierz pozycję z listy, a niżej otworzy się tylko opis tej usługi wraz z zakresem prac i orientacyjną ceną.",
                "All core services are grouped in one place. Pick a service from the list and only that service description will open below with scope and estimated pricing."
              )}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`/?service=${activeService.bookingValue}#rezerwacja`}
                className="inline-flex items-center justify-center border border-primary bg-primary px-7 py-3.5 font-barlow text-[14px] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                {t("PRZEJDŹ DO REZERWACJI", "GO TO BOOKING")}
              </a>
              <a
                href="/#kontakt"
                className="inline-flex items-center justify-center border border-border bg-surface px-7 py-3.5 font-barlow text-[14px] font-bold uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-elevated"
              >
                {t("ZAPYTAJ O TERMIN", "ASK ABOUT AVAILABILITY")}
              </a>
            </div>
          </div>
        </section>

        <section id="uslugi" className="section-block border-b border-border">
          <div className="site-shell">
            <p className="text-center font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              - {t("NASZE USŁUGI", "OUR SERVICES")} -
            </p>
            <h2 className="text-balance mx-auto mt-3 text-center font-barlow text-[38px] font-extrabold uppercase text-foreground sm:text-[48px] sm:leading-[1] lg:text-[56px]">
              {t("KOMPLEKSOWA OBSŁUGA", "COMPREHENSIVE SERVICE")}
            </h2>

            <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {servicePages.map((service) => (
                <a
                  key={service.slug}
                  href={`/uslugi#${service.slug}`}
                  onClick={(event) => {
                    event.preventDefault();
                    openService(service.slug);
                  }}
                  className={`group flex h-full flex-col border bg-surface p-6 text-left transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:border-accent hover:shadow-[0_18px_34px_rgba(0,0,0,0.24),0_0_22px_rgba(255,255,255,0.03)] sm:p-7 lg:p-8 ${
                    activeSlug === service.slug ? "border-primary shadow-[0_0_0_1px_rgba(170,37,0,0.22)]" : "border-border"
                  }`}
                  aria-current={activeSlug === service.slug ? "true" : undefined}
                >
                  <span className="font-barlow text-[13px] font-bold text-[hsl(0_0%_34%)]">
                    {service.num}
                  </span>
                  <h3 className="mt-4 font-barlow text-[22px] font-bold text-foreground">
                    {t(service.title.pl, service.title.en)}
                  </h3>
                  <p className="mt-3 font-inter text-[14px] leading-relaxed text-muted-foreground">
                    {t(service.shortDescription.pl, service.shortDescription.en)}
                  </p>
                  <div className="mt-6 border-t border-border/80 pt-5">
                    <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {t("Ceny orientacyjne", "Estimated pricing")}
                    </p>
                    <p className="mt-2 font-barlow text-[26px] font-bold uppercase tracking-[0.03em] text-accent transition-colors duration-500 group-hover:text-foreground sm:text-[28px]">
                      {t(service.price.pl, service.price.en)}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section ref={detailsRef} className="section-block border-b border-border">
          <div className="site-shell">
            <p className="font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {t("Opis wybranej usługi", "Selected service details")}
            </p>
            <h2 className="mt-3 font-barlow text-[38px] font-extrabold uppercase text-foreground sm:text-[48px]">
              {t("SZCZEGÓŁY OFERTY", "SERVICE DETAILS")}
            </h2>

            <Accordion
              type="single"
              collapsible={false}
              value={activeSlug}
              onValueChange={(value) => {
                if (value) {
                  setActiveSlug(value);
                  window.history.replaceState(null, "", `/uslugi#${value}`);
                }
              }}
              className="mt-8 border border-border bg-surface"
            >
              {servicePages.map((service) => (
                <AccordionItem
                  key={service.slug}
                  value={service.slug}
                  id={service.slug}
                  className="border-b border-border last:border-b-0"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-barlow text-[24px] font-bold uppercase tracking-[0.04em] text-foreground hover:no-underline sm:px-8 sm:text-[28px]">
                    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <span className="text-[13px] font-bold text-primary">{service.num}</span>
                      <span>{t(service.title.pl, service.title.en)}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 sm:px-8 sm:pb-8">
                    <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
                      <div>
                        <p className="measure-copy-wide font-inter text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
                          {t(service.heroSummary.pl, service.heroSummary.en)}
                        </p>
                        <div className="mt-6 grid gap-3">
                          {service.scopeItems.map((item, index) => (
                            <div
                              key={item.pl}
                              className="flex items-start gap-3 border border-border/80 bg-background/40 px-4 py-4"
                            >
                              <span className="mt-0.5 font-barlow text-[18px] font-bold text-primary">
                                0{index + 1}
                              </span>
                              <p className="font-inter text-[14px] leading-relaxed text-foreground/92">
                                {t(item.pl, item.en)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-1">
                          <div className="border border-border bg-background/40 p-5">
                            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                              {t("Cena orientacyjna", "Estimated pricing")}
                            </p>
                            <p className="mt-3 font-barlow text-[28px] font-bold uppercase text-accent">
                              {t(service.price.pl, service.price.en)}
                            </p>
                          </div>
                          <div className="border border-border bg-background/40 p-5">
                            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                              {t("Czas realizacji", "Lead time")}
                            </p>
                            <p className="mt-3 font-barlow text-[28px] font-bold uppercase text-foreground">
                              {t(service.leadTime.pl, service.leadTime.en)}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 grid gap-4">
                          {service.benefitItems.map((item, index) => (
                            <div key={item.pl} className="border border-border/80 bg-background/40 px-4 py-5">
                              <p className="font-barlow text-[12px] font-bold uppercase tracking-[0.18em] text-primary">
                                0{index + 1}
                              </p>
                              <p className="mt-3 font-inter text-[14px] leading-relaxed text-foreground/92">
                                {t(item.pl, item.en)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {activeService && (
              <div className="mt-8 border border-border bg-surface p-6 sm:p-8">
                <p className="font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  FAQ
                </p>
                <h3 className="mt-3 font-barlow text-[30px] font-bold uppercase text-foreground sm:text-[38px]">
                  {t("NAJCZĘSTSZE PYTANIA", "FREQUENTLY ASKED QUESTIONS")}
                </h3>
                <div className="mt-6 grid gap-4">
                  {activeService.faq.map((item) => (
                    <div key={item.question.pl} className="border border-border/80 bg-background/40 p-5">
                      <p className="font-barlow text-[22px] font-bold uppercase text-foreground">
                        {t(item.question.pl, item.question.en)}
                      </p>
                      <p className="mt-3 font-inter text-[14px] leading-relaxed text-muted-foreground">
                        {t(item.answer.pl, item.answer.en)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesDirectoryPage;
