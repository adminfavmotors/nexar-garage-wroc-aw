import { appRoutes, getHomeSectionPath, homeSectionIds, RouteLink } from "@/shared/navigation";
import { useLang } from "@/features/language";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";

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

const heroMetrics = [
  { value: "15+", labelPl: "lat doświadczenia", labelEn: "years of experience" },
  { value: "48h", labelPl: "średni czas realizacji", labelEn: "average turnaround" },
  { value: "6", labelPl: "głównych usług", labelEn: "core services" },
];

const heroServiceHighlights = [
  {
    pl: "Diagnostyka komputerowa i elektryka",
    en: "Computer diagnostics and auto electrics",
  },
  {
    pl: "Naprawy mechaniczne i serwis bieżący",
    en: "Mechanical repairs and routine service",
  },
  {
    pl: "Klimatyzacja, opony i geometria kół",
    en: "Air conditioning, tyres and wheel alignment",
  },
];

const HeroSection = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();

  return (
    <section
      id="home"
      className="hero-ambient relative overflow-hidden pt-[98px] sm:pt-[118px] lg:pt-[136px]"
    >
      <div className="site-shell pb-10 sm:pb-12 lg:pb-16">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-end lg:gap-8">
          <div ref={ref} className="py-4 sm:py-6">
            <span className="eyebrow">Wrocław • est. 2009</span>

            <h1 className="hero-title text-balance mt-6 max-w-[11ch]">
              <span className="block">Profesjonalny</span>
              <span className="block text-accent">serwis</span>
              <span className="block">samochodowy</span>
              <span className="block text-foreground/62">we Wrocławiu</span>
            </h1>

            <p className="section-copy measure-copy mt-6 sm:text-[1.08rem]">
              {t(
                "Diagnostyka, naprawy, klimatyzacja i serwis opon w miejscu, które ma wyglądać spokojnie, działać precyzyjnie i dawać klientowi jasny obraz kosztów.",
                "Diagnostics, repairs, air conditioning and tyre service in a workshop that feels calm, works precisely and gives the customer a clear picture of the cost."
              )}
            </p>

            <div className="mt-6 max-w-[18rem]">
              <div className="accent-rule" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroBenefits.map((benefit) => (
                <div key={benefit.en} className="trust-chip">
                  {lang === "PL" ? benefit.pl : benefit.en}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:pb-1">
            <div className="surface-panel-strong p-5 sm:p-6">
              <span className="eyebrow">
                {t("Jak pracujemy", "How we work")}
              </span>

              <p className="section-title-compact mt-5 max-w-[11ch]">
                {t("Mniej chaosu. Więcej kontroli.", "Less chaos. More control.")}
              </p>

              <p className="body-relaxed mt-4">
                {t(
                  "Nie dokładamy kolejnych warstw komplikacji. Najpierw diagnoza, potem zakres prac, a dopiero na końcu decyzja o naprawie.",
                  "We do not add more layers of complication. First the diagnosis, then the scope of work, and only then the repair decision."
                )}
              </p>

              <div className="divider-hairline mt-6 pt-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  {heroMetrics.map((metric) => (
                    <div key={metric.labelEn} className="stat-chip">
                      <span className="stat-chip-value">{metric.value}</span>
                      <span className="stat-chip-label">
                        {lang === "PL" ? metric.labelPl : metric.labelEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="surface-panel p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-accent">
                    {t("Zakres usług", "Service scope")}
                  </p>
                  <p className="section-title-compact mt-3 max-w-[10ch]">
                    {t("Od diagnostyki po odbiór auta", "From diagnosis to handoff")}
                  </p>
                </div>
                <span className="rounded-full border border-[hsl(var(--primary)/0.32)] px-3 py-1 font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  PL / EN
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {heroServiceHighlights.map((item) => (
                  <div key={item.en} className="surface-panel-soft px-4 py-4">
                    <p className="font-inter text-[14px] leading-[1.6] text-foreground/88">
                      {lang === "PL" ? item.pl : item.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
