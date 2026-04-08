import { useLang } from "@/features/language";
import { servicePages } from "@/features/services/data";

type ServicesGridProps = {
  activeSlug: string;
  onOpenService: (slug: string) => void;
};

const ServicesGrid = ({ activeSlug, onOpenService }: ServicesGridProps) => {
  const { t } = useLang();
  const featuredService = servicePages[0];
  const remainingServices = servicePages.slice(1);

  return (
    <section id="uslugi" className="section-block border-b border-border/80">
      <div className="site-shell">
        <div className="section-intro mx-auto max-w-3xl text-center">
          <span className="eyebrow mx-auto">{t("Przegląd usług", "Service overview")}</span>
          <h2 className="section-title text-balance">
            {t("Nie wszystkie usługi muszą wyglądać jak identyczne kafle.", "Not every service needs to look like the same tile.")}
          </h2>
          <p className="section-copy">
            {t(
              "Najczęściej wybierane zakresy dostają większy priorytet, pozostałe pozostają czytelne i łatwe do porównania.",
              "The most common services get stronger emphasis, while the rest stay clear and easy to compare."
            )}
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <a
            href={`/uslugi#${featuredService.slug}`}
            onClick={(event) => {
              event.preventDefault();
              onOpenService(featuredService.slug);
            }}
            className={`group surface-panel-strong flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${
              activeSlug === featuredService.slug ? "service-card-active" : ""
            }`}
            aria-current={activeSlug === featuredService.slug ? "true" : undefined}
          >
            <span className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {featuredService.num}
            </span>
            <h3 className="mt-4 font-barlow text-[2.3rem] leading-[0.95] text-foreground sm:text-[3rem]">
              {t(featuredService.title.pl, featuredService.title.en)}
            </h3>
            <p className="mt-4 max-w-2xl font-inter text-[0.98rem] leading-7 text-muted-foreground">
              {t(featuredService.shortDescription.pl, featuredService.shortDescription.en)}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="surface-panel-soft px-4 py-4">
                <p className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {t("Cena orientacyjna", "Estimated pricing")}
                </p>
                <p className="mt-2 font-barlow text-[2rem] leading-none text-primary">
                  {t(featuredService.price.pl, featuredService.price.en)}
                </p>
              </div>
              <div className="surface-panel-soft px-4 py-4">
                <p className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {t("Czas realizacji", "Lead time")}
                </p>
                <p className="mt-2 font-barlow text-[2rem] leading-none text-foreground">
                  {t(featuredService.leadTime.pl, featuredService.leadTime.en)}
                </p>
              </div>
            </div>
          </a>

          <div className="grid gap-3 sm:grid-cols-2">
            {remainingServices.map((service) => (
              <a
                key={service.slug}
                href={`/uslugi#${service.slug}`}
                onClick={(event) => {
                  event.preventDefault();
                  onOpenService(service.slug);
                }}
                className={`service-card-interactive flex h-full flex-col p-5 text-left sm:p-6 ${
                  activeSlug === service.slug ? "service-card-active" : ""
                }`}
                aria-current={activeSlug === service.slug ? "true" : undefined}
              >
                <span className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {service.num}
                </span>
                <h3 className="mt-3 font-barlow text-[1.75rem] leading-[0.98] text-foreground">
                  {t(service.title.pl, service.title.en)}
                </h3>
                <p className="mt-3 font-inter text-[0.92rem] leading-7 text-muted-foreground">
                  {t(service.shortDescription.pl, service.shortDescription.en)}
                </p>
                <div className="mt-6 divider-hairline pt-4">
                  <p className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {t("Cena orientacyjna", "Estimated pricing")}
                  </p>
                  <p className="mt-2 font-barlow text-[1.8rem] leading-none text-primary">
                    {t(service.price.pl, service.price.en)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
