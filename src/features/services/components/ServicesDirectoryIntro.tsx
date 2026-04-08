import { appRoutes, getHomeSectionPath, homeSectionIds, RouteLink } from "@/shared/navigation";
import { useLang } from "@/features/language";
import type { ServiceDefinition } from "@/features/services/data";

type ServicesDirectoryIntroProps = {
  activeService: ServiceDefinition;
};

const ServicesDirectoryIntro = ({ activeService }: ServicesDirectoryIntroProps) => {
  const { t } = useLang();

  return (
    <section className="section-block border-b border-border/80 hero-ambient">
      <div className="site-shell editorial-grid">
        <div className="section-stack">
          <div className="section-intro">
            <span className="eyebrow">{t("Oferta serwisu Wrocław", "Workshop services Wroclaw")}</span>
            <div className="grid gap-5">
              <h1 className="section-title measure-hero text-balance">
                {t("Wszystkie usługi zebrane w jednym, spokojnym katalogu.", "All services grouped into one calm directory.")}
              </h1>
              <p className="section-copy measure-copy-wide">
                {t(
                  "Zamiast drugiego ciężkiego landing page masz tu uporządkowaną listę usług. Wybierz zakres, porównaj orientacyjne ceny i otwórz szczegóły bez skakania po stronie.",
                  "Instead of a second heavy landing page, this gives you a structured service directory. Pick the scope, compare estimated pricing and open details without jumping across the site."
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <RouteLink
              to={`${appRoutes.home}?service=${activeService.bookingValue}#${homeSectionIds.booking}`}
              className="premium-button-primary w-full sm:w-auto"
            >
              {t("Przejdź do rezerwacji", "Go to booking")}
            </RouteLink>
            <RouteLink to={getHomeSectionPath(homeSectionIds.booking)} className="premium-button-secondary w-full sm:w-auto">
              {t("Zapytaj o termin", "Ask about availability")}
            </RouteLink>
          </div>
        </div>

        <div className="surface-panel-strong p-6 sm:p-8">
          <span className="eyebrow">{t("Aktualnie wybrana usługa", "Currently selected service")}</span>
          <p className="mt-5 font-barlow text-[2.2rem] leading-[0.96] text-foreground sm:text-[3rem]">
            {t(activeService.title.pl, activeService.title.en)}
          </p>
          <p className="mt-4 font-inter text-[0.98rem] leading-7 text-muted-foreground">
            {t(activeService.heroSummary.pl, activeService.heroSummary.en)}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="surface-panel-soft px-4 py-4">
              <p className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t("Cena orientacyjna", "Estimated pricing")}
              </p>
              <p className="mt-2 font-barlow text-[2rem] leading-none text-primary">
                {t(activeService.price.pl, activeService.price.en)}
              </p>
            </div>
            <div className="surface-panel-soft px-4 py-4">
              <p className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t("Czas realizacji", "Lead time")}
              </p>
              <p className="mt-2 font-barlow text-[2rem] leading-none text-foreground">
                {t(activeService.leadTime.pl, activeService.leadTime.en)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDirectoryIntro;
