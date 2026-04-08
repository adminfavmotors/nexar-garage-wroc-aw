import { Clock3, Globe2, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/features/language";
import { getServiceHashPath, servicePages } from "@/features/services/data";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";

const reasonsPl = [
  "Certyfikowani mechanicy i jasny proces wyceny przed rozpoczęciem prac.",
  "Części OEM lub sprawdzone zamienniki dobierane pod konkretny zakres naprawy.",
  "Stały kontakt podczas realizacji, bez zaskoczeń przy odbiorze auta.",
  "Możliwość obsługi po polsku i po angielsku, także przy bardziej złożonych zleceniach.",
];

const reasonsEn = [
  "Certified mechanics and a clear quote process before any work starts.",
  "OEM parts or trusted replacements selected for the exact repair scope.",
  "Consistent communication during the job, with no surprises at handoff.",
  "Support in both Polish and English, including more complex service cases.",
];

const operatingHighlights = [
  {
    icon: Clock3,
    label: { pl: "Godziny pracy", en: "Opening hours" },
    value: { pl: "Pon-Pt 8:00-18:00 | Sob 9:00-14:00", en: "Mon-Fri 8:00-18:00 | Sat 9:00-14:00" },
  },
  {
    icon: Globe2,
    label: { pl: "Obsługa klienta", en: "Customer support" },
    value: { pl: "Polski / English", en: "Polish / English" },
  },
  {
    icon: MapPin,
    label: { pl: "Lokalizacja", en: "Location" },
    value: { pl: "Wrocław, ul. Świdnicka 18", en: "Wroclaw, Swidnicka 18" },
  },
];

const WhyUsSection = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();
  const [selectedSlug, setSelectedSlug] = useState(servicePages[0]?.slug ?? "");

  const selectedService = useMemo(
    () => servicePages.find((service) => service.slug === selectedSlug) ?? servicePages[0],
    [selectedSlug]
  );

  const reasons = lang === "PL" ? reasonsPl : reasonsEn;

  return (
    <section id="o-nas" ref={ref} className="section-block border-b border-border/80">
      <div className="site-shell editorial-grid">
        <div className="section-stack">
          <div className="section-intro">
            <span className="eyebrow">{t("Dlaczego właśnie my", "Why clients stay with us")}</span>
            <div className="grid gap-5 lg:max-w-[42rem]">
              <h2 className="section-title text-balance">{t("Serwis, który daje więcej spokoju niż hałasu.", "A garage that gives more clarity than noise.")}</h2>
              <p className="section-copy measure-copy-wide">
                {t(
                  "Nexar ma działać jak uporządkowane zaplecze techniczne: szybka diagnoza, zrozumiała wycena i precyzyjnie zamknięty zakres prac. Bez warsztatowego chaosu i bez przypadkowej komunikacji.",
                  "Nexar is meant to feel like a controlled technical partner: fast diagnostics, clear estimates and a tightly scoped repair process. Less workshop chaos, more confidence."
                )}
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            {reasons.map((reason, index) => (
              <div key={reason} className="surface-panel-soft flex items-start gap-4 px-5 py-4 sm:px-6">
                <span className="font-barlow text-[1.55rem] leading-none text-primary">0{index + 1}</span>
                <p className="font-inter text-[0.97rem] leading-7 text-foreground/90">{reason}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {operatingHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label.en} className="surface-panel-soft px-5 py-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/55 text-primary">
                    <Icon size={18} />
                  </span>
                  <p className="mt-4 font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {t(item.label.pl, item.label.en)}
                  </p>
                  <p className="mt-2 font-inter text-[0.95rem] leading-7 text-foreground/90">
                    {t(item.value.pl, item.value.en)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="surface-panel p-6 sm:p-8">
          <div className="section-intro gap-4">
            <span className="eyebrow">{t("Szybki wybór usługi", "Service shortcut")}</span>
            <div className="grid gap-3">
              <h3 className="font-barlow text-[2.35rem] leading-[0.95] text-foreground sm:text-[2.9rem]">
                {t("Wybierz ścieżkę i od razu przejdź do konkretu.", "Pick the right track and move straight to the details.")}
              </h3>
              <p className="section-copy">
                {t(
                  "To nie jest druga lista usług. To skrót do poprawnego flow: wybór zakresu, szybki podgląd ceny i przejście do opisu albo rezerwacji.",
                  "This is not another service grid. It is the shortest route into the right flow: select a service, preview the pricing and jump to details or booking."
                )}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {servicePages.map((service) => (
              <button
                key={service.slug}
                type="button"
                onClick={() => setSelectedSlug(service.slug)}
                className={`px-4 py-4 text-left transition-colors duration-300 ${
                  selectedSlug === service.slug
                    ? "service-card-panel-solid service-card-active text-foreground"
                    : "service-card-panel text-muted-foreground hover:border-[hsl(var(--line-soft))] hover:text-foreground"
                }`}
              >
                <p className="font-barlow text-[1.4rem] leading-none text-foreground">
                  {t(service.title.pl, service.title.en)}
                </p>
                <p className="mt-2 font-inter text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-primary">
                  {t(service.price.pl, service.price.en)}
                </p>
              </button>
            ))}
          </div>

          {selectedService && (
            <div className="surface-panel-strong mt-6 p-5 sm:p-6">
              <div className="grid gap-6">
                <div>
                  <p className="font-barlow text-[2rem] leading-none text-foreground sm:text-[2.45rem]">
                    {t(selectedService.title.pl, selectedService.title.en)}
                  </p>
                  <p className="mt-3 font-inter text-[0.98rem] leading-7 text-muted-foreground">
                    {t(selectedService.shortDescription.pl, selectedService.shortDescription.en)}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="surface-panel-soft px-4 py-4">
                    <p className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {t("Cena orientacyjna", "Estimated pricing")}
                    </p>
                    <p className="mt-2 font-barlow text-[2rem] leading-none text-primary">
                      {t(selectedService.price.pl, selectedService.price.en)}
                    </p>
                  </div>
                  <div className="surface-panel-soft px-4 py-4">
                    <p className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {t("Czas realizacji", "Lead time")}
                    </p>
                    <p className="mt-2 font-barlow text-[2rem] leading-none text-foreground">
                      {t(selectedService.leadTime.pl, selectedService.leadTime.en)}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {selectedService.scopeItems.slice(0, 4).map((item) => (
                    <div key={item.en} className="surface-panel-soft px-4 py-4">
                      <p className="font-inter text-[0.93rem] leading-7 text-foreground/88">
                        {t(item.pl, item.en)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`/?service=${selectedService.bookingValue}#rezerwacja`}
                    className="premium-button-primary w-full sm:w-auto"
                  >
                    {t("Umów ten serwis", "Book this service")}
                  </a>
                  <Link to={getServiceHashPath(selectedService.slug)} className="premium-button-secondary w-full sm:w-auto">
                    {t("Zobacz szczegóły", "View details")}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
