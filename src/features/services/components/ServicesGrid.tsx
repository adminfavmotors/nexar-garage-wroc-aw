import { ArrowDownRight } from "lucide-react";
import { useLang } from "@/features/language";
import { servicePages } from "@/features/services/data";

type ServicesGridProps = {
  activeSlug: string;
  onOpenService: (slug: string) => void;
};

const ServicesGrid = ({ activeSlug, onOpenService }: ServicesGridProps) => {
  const { t } = useLang();

  return (
    <section id="uslugi" className="section-block border-b border-border">
      <div className="site-shell">
        <div className="editorial-grid items-end">
          <div>
            <span className="eyebrow">{t("Zakres usług", "Service range")}</span>
            <h2 className="section-title text-balance mt-5 max-w-[11ch]">
              {t("Wybierz usługę i sprawdź zakres prac.", "Choose a service and review the scope.")}
            </h2>
          </div>
          <p className="section-copy measure-copy-wide">
            {t(
              "Ceny mają charakter orientacyjny. Po wybraniu pozycji zobaczysz, co obejmuje usługa, ile zwykle trwa i jakie objawy warto zgłosić przy rezerwacji.",
              "Prices are estimates. Select an item to see what the service includes, how long it usually takes and which symptoms to mention when booking."
            )}
          </p>
        </div>

        <div className="mt-10 border-y border-border">
          {servicePages.map((service) => {
            const isActive = activeSlug === service.slug;

            return (
              <a
                key={service.slug}
                href={`/uslugi#${service.slug}`}
                onClick={(event) => {
                  event.preventDefault();
                  onOpenService(service.slug);
                }}
                className="service-directory-row group grid gap-4 border-b border-border px-3 py-6 last:border-b-0 sm:px-4 lg:grid-cols-[2.5rem_minmax(0,1fr)_minmax(15rem,0.5fr)_auto] lg:items-center lg:gap-7 lg:px-5"
                data-active={isActive ? "true" : undefined}
                aria-current={isActive ? "location" : undefined}
              >
                <span className="font-mono text-xs font-semibold text-primary">{service.num}</span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-[1.8rem] font-semibold leading-none text-foreground sm:text-[2rem]">
                      {t(service.title.pl, service.title.en)}
                    </h3>
                    {isActive && (
                      <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-primary">
                        {t("Wybrana", "Selected")}
                      </span>
                    )}
                  </div>
                  <p className="body-fine mt-2 max-w-[44rem]">
                    {t(service.shortDescription.pl, service.shortDescription.en)}
                  </p>
                </div>
                <dl className="grid grid-cols-2 gap-5 lg:gap-7">
                  <div>
                    <dt className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                      {t("Cena", "Price")}
                    </dt>
                    <dd className="mt-1 font-mono text-sm font-semibold tabular-nums text-foreground">
                      {t(service.price.pl, service.price.en)}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                      {t("Czas", "Time")}
                    </dt>
                    <dd className="mt-1 font-mono text-sm font-semibold tabular-nums text-foreground">
                      {t(service.leadTime.pl, service.leadTime.en)}
                    </dd>
                  </div>
                </dl>
                <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                  {t("Sprawdź zakres", "View scope")}
                  <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
