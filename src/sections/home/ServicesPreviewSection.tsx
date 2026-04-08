import { Link } from "react-router-dom";
import { useLang } from "@/features/language";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import {
  getServiceHashPath,
  servicePages,
  type ServiceDefinition,
} from "@/features/services/data";

const FeaturedServiceCard = ({
  service,
  lang,
  t,
}: {
  service: ServiceDefinition;
  lang: string;
  t: (pl: string, en: string) => string;
}) => {
  return (
    <Link
      to={getServiceHashPath(service.slug)}
      className="service-card-interactive flex h-full flex-col p-6 sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="section-accent">
            {t("Usługa wyróżniona", "Featured service")}
          </p>
          <h3 className="section-title-compact mt-4 max-w-[10ch]">
            {lang === "PL" ? service.title.pl : service.title.en}
          </h3>
        </div>
        <span className="rounded-full border border-border px-3 py-1 font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {service.num}
        </span>
      </div>

      <p className="body-relaxed mt-5 max-w-[34rem]">
        {lang === "PL" ? service.shortDescription.pl : service.shortDescription.en}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="surface-panel-soft px-4 py-4">
          <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t("Cena orientacyjna", "Estimated price")}
          </p>
          <p className="mt-2 font-barlow text-[28px] font-semibold leading-none text-accent">
            {lang === "PL" ? service.price.pl : service.price.en}
          </p>
        </div>
        <div className="surface-panel-soft px-4 py-4">
          <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t("Czas realizacji", "Lead time")}
          </p>
          <p className="mt-2 font-barlow text-[28px] font-semibold leading-none text-foreground">
            {lang === "PL" ? service.leadTime.pl : service.leadTime.en}
          </p>
        </div>
      </div>

      <div className="divider-hairline mt-6 pt-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {service.scopeItems.slice(0, 4).map((item) => (
            <div key={item.en} className="surface-panel-soft px-4 py-4">
              <p className="body-fine text-foreground/84">
                {lang === "PL" ? item.pl : item.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

const ServiceCard = ({
  service,
  lang,
}: {
  service: ServiceDefinition;
  lang: string;
}) => {
  return (
    <Link
      to={getServiceHashPath(service.slug)}
      aria-label={lang === "PL" ? service.title.pl : service.title.en}
      className="service-card-interactive group flex h-full flex-col p-5 sm:p-6"
    >
      <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {service.num}
      </span>
      <h3 className="section-title-compact mt-4 text-[2rem] sm:text-[2.1rem]">
        {lang === "PL" ? service.title.pl : service.title.en}
      </h3>
      <p className="body-fine mt-3">
        {lang === "PL" ? service.shortDescription.pl : service.shortDescription.en}
      </p>

      <div className="service-card-divider mt-auto pt-5">
        <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {lang === "PL" ? service.price.pl : service.price.en}
        </p>
      </div>
    </Link>
  );
};

const ServicesPreviewSection = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();
  const [featuredService, ...secondaryServices] = servicePages;

  return (
    <section id="uslugi" ref={ref} className="section-block section-muted border-b border-border">
      <div className="site-shell">
        <div className="section-intro lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <span className="eyebrow">{t("Nasze usługi", "Our services")}</span>
            <h2 className="section-title mt-5 max-w-[11ch]">
              {t("Kompleksowa obsługa bez szablonowego układu", "Comprehensive service without a template feel")}
            </h2>
            <div className="mt-5 max-w-[15rem]">
              <div className="accent-rule" />
            </div>
          </div>

          <div className="lg:justify-self-end lg:text-right">
            <p className="section-copy measure-copy-wide lg:ml-auto">
              {t(
                "Zamiast jednej siatki identycznych kart pokazujemy ofertę w bardziej czytelnej hierarchii: usługa główna, zakres, cena i pozostałe specjalizacje obok.",
                "Instead of one grid of identical cards, the offer is presented in a clearer hierarchy: one lead service, its scope and price, with the remaining specialties alongside."
              )}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <FeaturedServiceCard service={featuredService} lang={lang} t={t} />

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
            {secondaryServices.map((service) => (
              <ServiceCard key={service.slug} service={service} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreviewSection;
