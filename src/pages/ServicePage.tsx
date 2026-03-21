import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import Seo, { siteUrl } from "@/components/Seo";
import { useLang } from "@/contexts/LanguageContext";
import {
  getServiceBySlug,
  getServicePath,
  type ServiceDefinition,
} from "@/data/servicePages";

const createBreadcrumbSchema = (service: ServiceDefinition) => ({
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
    {
      "@type": "ListItem",
      position: 3,
      name: service.title.pl,
      item: `${siteUrl}${getServicePath(service.slug)}`,
    },
  ],
});

const createServiceSchema = (service: ServiceDefinition) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${service.title.pl} Wrocław`,
  serviceType: service.title.pl,
  description: service.metaDescription,
  areaServed: {
    "@type": "City",
    name: "Wrocław",
  },
  provider: {
    "@type": "AutoRepair",
    name: "Nexar Garage",
    url: siteUrl,
    telephone: "+48712345678",
    email: "kontakt@nexargarage.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Świdnicka 18",
      addressLocality: "Wrocław",
      postalCode: "50-068",
      addressCountry: "PL",
    },
  },
});

const createFaqSchema = (service: ServiceDefinition) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: service.faq.map((item) => ({
    "@type": "Question",
    name: item.question.pl,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.pl,
    },
  })),
});

const ServicePage = () => {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  const canonical = `${siteUrl}${getServicePath(service.slug)}`;
  const relatedServices = service.relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter(Boolean) as ServiceDefinition[];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={canonical}
        ogTitle={`${service.title.pl} | Nexar Garage Wrocław`}
        ogDescription={service.metaDescription}
        schema={[
          createBreadcrumbSchema(service),
          createServiceSchema(service),
          createFaqSchema(service),
        ]}
      />
      <Header />

      <main className="pt-20 lg:pt-24">
        <section className="border-b border-border pt-12 pb-14 lg:pt-16 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <nav
              aria-label={t("Ścieżka nawigacji", "Breadcrumb")}
              className="flex flex-wrap items-center gap-2 font-inter text-[12px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              <Link to="/" className="transition-colors duration-300 hover:text-foreground">
                NEXAR
              </Link>
              <span>/</span>
              <a href="/uslugi" className="transition-colors duration-300 hover:text-foreground">
                {t("USŁUGI", "SERVICES")}
              </a>
              <span>/</span>
              <span className="text-foreground">{lang === "PL" ? service.title.pl : service.title.en}</span>
            </nav>

            <div className="mt-6 max-w-4xl">
              <p className="font-inter text-[12px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                {lang === "PL" ? service.heroLabel.pl : service.heroLabel.en}
              </p>
              <h1 className="mt-4 font-barlow text-[42px] font-extrabold uppercase leading-[0.94] text-foreground sm:text-[58px] lg:text-[74px]">
                {lang === "PL" ? service.title.pl : service.title.en}
              </h1>
              <p className="mt-5 max-w-3xl font-inter text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
                {lang === "PL" ? service.heroSummary.pl : service.heroSummary.en}
              </p>
            </div>

            <div className="mt-8 grid gap-px bg-border sm:grid-cols-3">
              <div className="border border-border bg-surface p-5">
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {t("Cena orientacyjna", "Estimated pricing")}
                </p>
                <p className="mt-3 font-barlow text-[28px] font-bold uppercase text-accent">
                  {lang === "PL" ? service.price.pl : service.price.en}
                </p>
              </div>
              <div className="border border-border bg-surface p-5">
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {t("Czas realizacji", "Lead time")}
                </p>
                <p className="mt-3 font-barlow text-[28px] font-bold uppercase text-foreground">
                  {lang === "PL" ? service.leadTime.pl : service.leadTime.en}
                </p>
              </div>
              <div className="border border-border bg-surface p-5">
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {t("Lokalizacja", "Location")}
                </p>
                <p className="mt-3 font-barlow text-[28px] font-bold uppercase text-foreground">
                  Wrocław
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/#rezerwacja"
                className="inline-flex items-center justify-center border border-primary bg-primary px-7 py-3.5 font-barlow text-[14px] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                {t("UMÓW TERMIN", "BOOK APPOINTMENT")}
              </a>
              <a
                href="/#kontakt"
                className="inline-flex items-center justify-center border border-border bg-surface px-7 py-3.5 font-barlow text-[14px] font-bold uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-elevated"
              >
                {t("ZAPYTAJ O WYCENĘ", "ASK FOR A QUOTE")}
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-border py-10 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
              <article className="border border-border bg-surface p-6 sm:p-8">
                <p className="font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {t("Zakres usługi", "Service scope")}
                </p>
                <h2 className="mt-4 font-barlow text-[34px] font-bold uppercase text-foreground sm:text-[42px]">
                  {t("CO OBEJMUJE WIZYTA", "WHAT THE VISIT INCLUDES")}
                </h2>
                <p className="mt-4 max-w-2xl font-inter text-[15px] leading-relaxed text-muted-foreground">
                  {lang === "PL" ? service.shortDescription.pl : service.shortDescription.en}
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
                        {lang === "PL" ? item.pl : item.en}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="border border-border bg-surface p-6 sm:p-8">
                <p className="font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {t("Dlaczego Nexar", "Why Nexar")}
                </p>
                <h2 className="mt-4 font-barlow text-[34px] font-bold uppercase text-foreground sm:text-[42px]">
                  {t("JASNY PROCES I WYCENA", "CLEAR PROCESS AND PRICING")}
                </h2>
                <div className="mt-6 grid gap-4">
                  {service.benefitItems.map((item, index) => (
                    <div key={item.pl} className="border border-border/80 bg-background/40 px-4 py-5">
                      <p className="font-barlow text-[12px] font-bold uppercase tracking-[0.18em] text-primary">
                        0{index + 1}
                      </p>
                      <p className="mt-3 font-inter text-[14px] leading-relaxed text-foreground/92">
                        {lang === "PL" ? item.pl : item.en}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-border py-10 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <p className="font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {t("Jak pracujemy", "How we work")}
            </p>
            <h2 className="mt-3 font-barlow text-[38px] font-extrabold uppercase text-foreground sm:text-[48px]">
              {t("TRZY PROSTE ETAPY", "THREE SIMPLE STEPS")}
            </h2>

            <div className="mt-8 grid gap-px bg-border lg:grid-cols-3">
              {service.processItems.map((item, index) => (
                <article key={item.pl} className="border border-border bg-surface p-6 sm:p-7">
                  <p className="font-barlow text-[13px] font-bold text-[hsl(0_0%_34%)]">0{index + 1}</p>
                  <p className="mt-4 font-inter text-[15px] leading-relaxed text-foreground/92">
                    {lang === "PL" ? item.pl : item.en}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border py-10 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <p className="font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              FAQ
            </p>
            <h2 className="mt-3 font-barlow text-[38px] font-extrabold uppercase text-foreground sm:text-[48px]">
              {t("NAJCZĘSTSZE PYTANIA", "FREQUENTLY ASKED QUESTIONS")}
            </h2>

            <div className="mt-8 grid gap-4">
              {service.faq.map((item) => (
                <article key={item.question.pl} className="border border-border bg-surface p-6 sm:p-7">
                  <h3 className="font-barlow text-[24px] font-bold uppercase text-foreground">
                    {lang === "PL" ? item.question.pl : item.question.en}
                  </h3>
                  <p className="mt-4 max-w-4xl font-inter text-[15px] leading-relaxed text-muted-foreground">
                    {lang === "PL" ? item.answer.pl : item.answer.en}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {t("Powiązane usługi", "Related services")}
                </p>
                <h2 className="mt-3 font-barlow text-[38px] font-extrabold uppercase text-foreground sm:text-[48px]">
                  {t("SPRAWDŹ DALEJ", "EXPLORE MORE")}
                </h2>
              </div>
              <a
                href="/#rezerwacja"
                className="inline-flex items-center justify-center border border-border px-6 py-3 font-barlow text-[13px] font-bold uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:bg-elevated"
              >
                {t("PRZEJDŹ DO REZERWACJI", "GO TO BOOKING")}
              </a>
            </div>

            <div className="mt-8 grid gap-px bg-border lg:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  to={getServicePath(relatedService.slug)}
                  className="group border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-elevated"
                >
                  <p className="font-barlow text-[13px] font-bold text-[hsl(0_0%_34%)]">
                    {relatedService.num}
                  </p>
                  <h3 className="mt-4 font-barlow text-[26px] font-bold uppercase text-foreground">
                    {lang === "PL" ? relatedService.title.pl : relatedService.title.en}
                  </h3>
                  <p className="mt-3 font-inter text-[14px] leading-relaxed text-muted-foreground">
                    {lang === "PL"
                      ? relatedService.shortDescription.pl
                      : relatedService.shortDescription.en}
                  </p>
                  <p className="mt-5 font-barlow text-[18px] font-bold uppercase text-accent transition-colors duration-300 group-hover:text-foreground">
                    {lang === "PL" ? relatedService.price.pl : relatedService.price.en}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
