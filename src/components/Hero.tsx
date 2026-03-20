import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const heroBenefits = [
  { pl: "Gwarancja 12 mies.", en: "12-month warranty" },
  { pl: "Bezpłatna wycena", en: "Free estimate" },
  { pl: "Oryginalne części", en: "OEM parts" },
];

const Hero = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();

  return (
    <section
      id="home"
      className="relative min-h-[84svh] overflow-hidden pt-20 diagonal-lines lg:min-h-[88svh] lg:pt-24"
    >
      <div className="container mx-auto flex min-h-[calc(84svh-5rem)] flex-col px-6 lg:min-h-[calc(88svh-6rem)]">
        <div ref={ref} className="max-w-[960px] py-8 lg:py-12">
          <p className="animate-fade-up font-inter text-[12px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            WROCŁAW — EST. 2009
          </p>

          <h1 className="animate-fade-up animate-fade-up-delay-1 mt-6 font-barlow text-[52px] font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-[96px]">
            <span className="block text-foreground">{t("PROFESJONALNY", "PROFESSIONAL")}</span>
            <span className="block text-accent">{t("SERWIS SAMOCHODOWY", "CAR SERVICE")}</span>
            <span className="block text-[hsl(0_0%_34%)]">{t("WE WROCŁAWIU.", "IN WROCŁAW.")}</span>
          </h1>

          <div className="animate-fade-up animate-fade-up-delay-2 mt-6 h-px w-full max-w-xs bg-border" />

          <p className="animate-fade-up animate-fade-up-delay-2 mt-6 font-inter text-base font-medium tracking-[0.08em] text-foreground/80 sm:text-lg">
            {t(
              "Diagnostyka. Naprawy. Klimatyzacja. Opony.",
              "Diagnostics. Repairs. Air Conditioning. Tyres."
            )}
          </p>

          <div className="animate-fade-up animate-fade-up-delay-3 mt-8 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center bg-primary px-7 py-3.5 font-barlow text-[14px] font-bold uppercase tracking-wider text-primary-foreground transition-opacity duration-300 hover:opacity-90 active:scale-[0.97]"
            >
              {t("UMÓW WIZYTĘ", "BOOK NOW")}
            </a>
            <a
              href="#uslugi"
              className="inline-flex items-center border border-accent px-7 py-3.5 font-barlow text-[14px] font-bold uppercase tracking-wider text-accent transition-colors duration-300 hover:bg-elevated active:scale-[0.97]"
            >
              {t("NASZE USŁUGI", "OUR SERVICES")}
            </a>
          </div>
        </div>

        <div className="animate-fade-up animate-fade-up-delay-4 mt-auto pb-6 lg:pb-8">
          <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-3 sm:gap-4">
            {heroBenefits.map((benefit) => (
              <div
                key={benefit.en}
                className="inline-flex min-w-[220px] items-center justify-center border border-border bg-surface px-5 py-3 text-center font-inter text-[13px] font-medium text-foreground sm:text-[14px]"
              >
                <span className="mr-2 text-primary">✓</span>
                <span>{lang === "PL" ? benefit.pl : benefit.en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
