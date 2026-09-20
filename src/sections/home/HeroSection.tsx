import { appRoutes, getHomeSectionPath, homeSectionIds, RouteLink } from "@/shared/navigation";
import { useLang } from "@/features/language";

const heroBenefits = [
  {
    pl: "Diagnostyka przed wymianą części",
    en: "Diagnostics before replacing parts",
  },
  {
    pl: "Jasna wycena przed rozpoczęciem prac",
    en: "Clear estimate before any work starts",
  },
  {
    pl: "Obsługa klienta w języku polskim i angielskim",
    en: "Customer support in Polish and English",
  },
];

const heroStandards = [
  {
    valuePl: "Diagnoza",
    valueEn: "Diagnosis",
    labelPl: "przed decyzją o naprawie",
    labelEn: "before the repair decision",
  },
  {
    valuePl: "Wycena",
    valueEn: "Estimate",
    labelPl: "przed rozpoczęciem prac",
    labelEn: "before any work starts",
  },
  {
    valuePl: "PL / EN",
    valueEn: "PL / EN",
    labelPl: "obsługa w dwóch językach",
    labelEn: "support in two languages",
  },
];

const HeroSection = () => {
  const { lang, t } = useLang();

  return (
    <section
      id="home"
      className="hero-ambient relative overflow-hidden pt-[98px] sm:pt-[118px] lg:pt-[136px]"
    >
      <div className="site-shell pb-10 sm:pb-12 lg:pb-12">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-10">
          <div className="hero-enter py-4 sm:py-6">
            <span className="eyebrow">Wrocław • est. 2009</span>

            <h1 className="hero-title text-balance mt-5 max-w-[11ch]">
              <span className="block">{t("Profesjonalny", "Professional")}</span>
              <span className="block text-accent">{t("serwis", "car")}</span>
              <span className="block">{t("samochodowy", "service")}</span>
              <span className="block text-muted-foreground">{t("we Wrocławiu", "in Wroclaw")}</span>
            </h1>

            <p className="section-copy measure-copy mt-5 sm:text-[1.08rem]">
              {t(
                "Diagnostyka, naprawy, klimatyzacja i serwis opon. Najpierw sprawdzamy przyczynę, potem przedstawiamy zakres i koszt prac.",
                "Diagnostics, repairs, air conditioning and tyre service. First we identify the cause, then we present the scope and cost of the work."
              )}
            </p>

            <div className="mt-5 max-w-[18rem]">
              <div className="accent-rule" />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <RouteLink
                to={getHomeSectionPath(homeSectionIds.booking)}
                className="premium-button-primary"
              >
                {t("Umów wizytę", "Book now")}
              </RouteLink>
              <RouteLink
                to={appRoutes.services}
                className="premium-button-secondary"
              >
                {t("Zobacz usługi", "Explore services")}
              </RouteLink>
            </div>

          </div>

          <aside
            aria-labelledby="hero-process-title"
            className="hero-enter hero-enter-delay border-y border-border py-6 sm:py-8 lg:border-l lg:border-y-0 lg:py-6 lg:pl-8"
          >
            <span className="eyebrow">
              {t("Jak pracujemy", "How we work")}
            </span>

            <h2 id="hero-process-title" className="section-title-compact mt-5 max-w-[11ch]">
              {t("Mniej chaosu. Więcej kontroli.", "Less chaos. More control.")}
            </h2>

            <p className="body-relaxed mt-4">
              {t(
                "Każde zlecenie zaczynamy od diagnozy. Naprawę rozpoczynamy dopiero po uzgodnieniu zakresu, części i orientacyjnego kosztu.",
                "Every job starts with a diagnosis. Repairs begin only after the scope, parts and estimated cost have been agreed."
              )}
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <div className="grid gap-5 sm:grid-cols-3">
                {heroStandards.map((standard) => (
                  <div key={standard.labelEn}>
                    <span className="font-display text-[1.6rem] font-semibold leading-none text-foreground">
                      {lang === "PL" ? standard.valuePl : standard.valueEn}
                    </span>
                    <span className="stat-chip-label">
                      {lang === "PL" ? standard.labelPl : standard.labelEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="hero-enter hero-enter-delay mt-6 grid border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-border">
          {heroBenefits.map((benefit, index) => (
            <div key={benefit.en} className="flex items-start gap-3 border-b border-border py-4 last:border-b-0 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0">
              <span className="font-mono text-xs font-semibold text-primary">0{index + 1}</span>
              <p className="body-fine">
                {lang === "PL" ? benefit.pl : benefit.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
