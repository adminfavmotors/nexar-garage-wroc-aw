import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  getServiceHashPath,
  servicePages,
  type ServiceDefinition,
} from "@/data/servicePages";

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
      className="service-card-interactive group flex h-full flex-col p-6 hover:-translate-y-1 hover:scale-[1.015] sm:p-7 lg:p-8"
    >
      <span className="font-barlow text-[13px] font-bold text-[hsl(0_0%_34%)]">
        {service.num}
      </span>
      <h3 className="mt-4 font-barlow text-[22px] font-bold text-foreground">
        {lang === "PL" ? service.title.pl : service.title.en}
      </h3>
      <p className="mt-3 font-inter text-[14px] leading-relaxed text-muted-foreground">
        {lang === "PL" ? service.shortDescription.pl : service.shortDescription.en}
      </p>

      <div className="service-card-divider mt-6 pt-5">
        <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {lang === "PL" ? "Ceny orientacyjne" : "Estimated pricing"}
        </p>
        <p className="mt-2 font-barlow text-[26px] font-bold uppercase tracking-[0.03em] text-accent transition-colors duration-500 group-hover:text-foreground sm:text-[28px]">
          {lang === "PL" ? service.price.pl : service.price.en}
        </p>
      </div>
    </Link>
  );
};

const Services = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();

  return (
    <section id="uslugi" ref={ref} className="section-block border-b border-border">
      <div className="site-shell">
        <p className="text-center font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          - {t("NASZE USŁUGI", "OUR SERVICES")} -
        </p>
        <h2 className="text-balance mx-auto mt-3 text-center font-barlow text-[38px] font-extrabold uppercase text-foreground sm:text-[48px] sm:leading-[1] lg:text-[56px]">
          {t("KOMPLEKSOWA OBSŁUGA", "COMPREHENSIVE SERVICE")}
        </h2>

        <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((service) => (
            <ServiceCard key={service.slug} service={service} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
