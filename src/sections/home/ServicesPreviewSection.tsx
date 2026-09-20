import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/features/language";
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
      className="group block border-y border-border py-7 transition-colors duration-200 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:py-8"
    >
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.38fr)]">
        <div>
          <div className="flex items-center gap-4">
            <p className="section-accent">
              {t("Usługa wyróżniona", "Featured service")}
            </p>
            <span className="font-mono text-xs font-semibold text-muted-foreground">
              {service.num}
            </span>
          </div>
          <h3 className="section-title-compact mt-4 max-w-[10ch]">
            {lang === "PL" ? service.title.pl : service.title.en}
          </h3>
          <p className="body-relaxed mt-5 max-w-[38rem]">
            {lang === "PL" ? service.shortDescription.pl : service.shortDescription.en}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 border-t border-border pt-6 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              {t("Cena", "Price")}
            </p>
            <p className="mt-2 font-mono text-[1.4rem] font-semibold leading-none tabular-nums text-primary">
              {lang === "PL" ? service.price.pl : service.price.en}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              {t("Czas", "Lead time")}
            </p>
            <p className="mt-2 font-mono text-[1.4rem] font-semibold leading-none tabular-nums text-foreground">
              {lang === "PL" ? service.leadTime.pl : service.leadTime.en}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid border-t border-border sm:grid-cols-3 sm:divide-x sm:divide-border">
        {service.scopeItems.slice(0, 3).map((item, index) => (
          <div key={item.en} className="flex gap-3 border-b border-border py-4 last:border-b-0 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0">
            <span className="font-mono text-xs text-primary">0{index + 1}</span>
            <p className="body-fine">
              {lang === "PL" ? item.pl : item.en}
            </p>
          </div>
        ))}
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
      className="group grid gap-4 border-b border-border py-6 transition-colors duration-200 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[hsl(var(--surface))] sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] sm:items-center"
    >
      <span className="font-mono text-xs font-semibold text-muted-foreground">
        {service.num}
      </span>
      <div className="min-w-0">
        <h3 className="font-display text-[1.75rem] font-semibold leading-none text-foreground transition-colors duration-200 group-hover:text-primary sm:text-[1.9rem]">
          {lang === "PL" ? service.title.pl : service.title.en}
        </h3>
        <p className="body-fine mt-2 max-w-[42rem]">
          {lang === "PL" ? service.shortDescription.pl : service.shortDescription.en}
        </p>
      </div>
      <div className="flex items-center justify-between gap-5 sm:justify-end">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          {lang === "PL" ? service.price.pl : service.price.en}
        </p>
        <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-primary" />
      </div>
    </Link>
  );
};

const ServicesPreviewSection = () => {
  const { lang, t } = useLang();
  const [featuredService, ...secondaryServices] = servicePages;

  return (
    <section id="uslugi" className="section-block section-muted border-b border-border">
      <div className="site-shell">
        <div className="section-intro max-w-[64rem]">
          <span className="eyebrow">{t("Nasze usługi", "Our services")}</span>
          <h2 className="section-title text-balance max-w-[15ch]">
            {t("Pełny zakres usług w jednym warsztacie", "Complete service under one roof")}
          </h2>
          <p className="section-copy measure-copy">
            {t(
              "Od diagnostyki komputerowej i elektryki po mechanikę, klimatyzację, opony i geometrię. Przed rozpoczęciem prac potwierdzamy zakres oraz orientacyjny koszt.",
              "From computer diagnostics and auto electrics to mechanical repairs, air conditioning, tyres and wheel alignment. We confirm the scope and estimated cost before work begins."
            )}
          </p>
          <div className="max-w-[15rem]">
            <div className="accent-rule" />
          </div>
        </div>

        <div className="mt-8">
          <FeaturedServiceCard service={featuredService} lang={lang} t={t} />

          <div>
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
