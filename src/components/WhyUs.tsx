import { Clock3, Globe2, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { getServiceHashPath, servicePages } from "@/data/servicePages";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasonsPl = [
  "Certyfikowani mechanicy, 10+ lat doświadczenia",
  "Transparentne ceny - wycena przed naprawą",
  "Oryginalne i certyfikowane części",
  "Bezpłatny samochód zastępczy",
  "Gwarancja 12 miesięcy na wszystkie usługi",
];

const reasonsEn = [
  "Certified mechanics, 10+ years of experience",
  "Transparent pricing - quote before repair",
  "Original and certified parts",
  "Free courtesy car",
  "12-month warranty on all services",
];

const operatingHighlights = [
  {
    icon: Clock3,
    label: {
      pl: "Godziny pracy",
      en: "Opening hours",
    },
    value: {
      pl: "Pon-Pt 8:00-18:00 | Sob 9:00-14:00",
      en: "Mon-Fri 8:00-18:00 | Sat 9:00-14:00",
    },
  },
  {
    icon: Globe2,
    label: {
      pl: "Obsługa klienta",
      en: "Customer support",
    },
    value: {
      pl: "Polski / English",
      en: "Polish / English",
    },
  },
  {
    icon: MapPin,
    label: {
      pl: "Lokalizacja",
      en: "Location",
    },
    value: {
      pl: "Wrocław, ul. Świdnicka 18",
      en: "Wroclaw, Swidnicka 18",
    },
  },
];

const WhyUs = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();
  const [selectedSlug, setSelectedSlug] = useState(servicePages[0]?.slug ?? "");

  const selectedService = useMemo(
    () => servicePages.find((service) => service.slug === selectedSlug) ?? servicePages[0],
    [selectedSlug]
  );

  const reasons = lang === "PL" ? reasonsPl : reasonsEn;

  return (
    <section
      id="o-nas"
      ref={ref}
      className="border-b border-border pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex h-full flex-col">
            <h2 className="font-barlow text-[38px] font-extrabold uppercase text-foreground sm:text-[48px] sm:leading-[1] lg:text-[56px]">
              {t("DLACZEGO NEXAR?", "WHY NEXAR?")}
            </h2>
            <div className="mt-6 flex flex-col gap-4 sm:mt-8">
              {reasons.map((reason, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <p className="font-inter text-[14px] text-foreground sm:text-[15px]">{reason}</p>
                </div>
              ))}
            </div>

            <div className="service-card mt-8 grid gap-4 p-5 sm:mt-10 sm:grid-cols-3 sm:gap-0 sm:p-0">
              {operatingHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label.en}
                    className={`flex items-start gap-4 px-5 py-5 sm:px-6 sm:py-6 ${
                      index > 0 ? "service-card-divider sm:border-l sm:border-t-0" : ""
                    }`}
                  >
                    <span className="mt-0.5 text-primary">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-inter text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                        {t(item.label.pl, item.label.en)}
                      </p>
                      <p className="mt-2 font-inter text-[14px] leading-relaxed text-foreground">
                        {t(item.value.pl, item.value.en)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="service-card p-6 sm:p-8">
            <h3 className="font-barlow text-2xl font-bold uppercase text-foreground">
              {t("WYBIERZ USŁUGĘ", "PICK A SERVICE")}
            </h3>
            <p className="mt-2 font-inter text-[14px] text-muted-foreground">
              {t(
                "To jest realny skrót do właściwej ścieżki: wybierz usługę, sprawdź orientacyjną cenę i przejdź od razu do opisu lub rezerwacji.",
                "This is a real shortcut to the correct flow: pick a service, check the estimated price and jump straight to service details or booking."
              )}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {servicePages.map((service) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setSelectedSlug(service.slug)}
                  className={`service-card-panel-solid px-4 py-4 text-left transition-colors duration-300 ${
                    selectedSlug === service.slug
                      ? "service-card-active text-foreground"
                      : "text-muted-foreground hover:border-accent hover:text-foreground"
                  }`}
                >
                  <p className="font-barlow text-[18px] font-bold uppercase">
                    {t(service.title.pl, service.title.en)}
                  </p>
                  <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.12em] text-primary">
                    {t(service.price.pl, service.price.en)}
                  </p>
                </button>
              ))}
            </div>

            {selectedService && (
              <div className="service-card-panel-solid mt-6 p-5">
                <p className="font-barlow text-[22px] font-bold uppercase text-foreground">
                  {t(selectedService.title.pl, selectedService.title.en)}
                </p>
                <p className="mt-3 font-inter text-[14px] leading-relaxed text-muted-foreground">
                  {t(selectedService.shortDescription.pl, selectedService.shortDescription.en)}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="service-card-panel px-4 py-4">
                    <p className="font-inter text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {t("Cena orientacyjna", "Estimated pricing")}
                    </p>
                    <p className="mt-2 font-barlow text-[24px] font-bold uppercase text-accent">
                      {t(selectedService.price.pl, selectedService.price.en)}
                    </p>
                  </div>

                  <div className="service-card-panel px-4 py-4">
                    <p className="font-inter text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {t("Czas realizacji", "Lead time")}
                    </p>
                    <p className="mt-2 font-barlow text-[24px] font-bold uppercase text-foreground">
                      {t(selectedService.leadTime.pl, selectedService.leadTime.en)}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`/?service=${selectedService.bookingValue}#rezerwacja`}
                    className="inline-flex w-full items-center justify-center bg-primary px-5 py-3.5 font-barlow text-[14px] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-opacity duration-300 hover:opacity-90 sm:w-auto"
                  >
                    {t("UMÓW TEN SERWIS", "BOOK THIS SERVICE")}
                  </a>
                  <Link
                    to={getServiceHashPath(selectedService.slug)}
                    className="inline-flex w-full items-center justify-center border border-border bg-surface px-5 py-3.5 font-barlow text-[14px] font-bold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:bg-elevated sm:w-auto"
                  >
                    {t("ZOBACZ SZCZEGÓŁY", "VIEW DETAILS")}
                  </Link>
                </div>
              </div>
            )}

            <div className="service-card-divider mt-6 pt-5">
              <p className="font-inter text-[13px] leading-relaxed text-muted-foreground">
                {t(
                  'Jeśli potrzebujesz niestandardowej naprawy, przejdź do rezerwacji i wybierz opcję "Inne", a opiszesz problem własnymi słowami.',
                  'If you need a custom repair, go to booking and choose "Other" so you can describe the issue in your own words.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
