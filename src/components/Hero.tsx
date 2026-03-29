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
      className="relative overflow-hidden pt-[72px] diagonal-lines sm:min-h-[78svh] sm:pt-20 lg:min-h-[84svh] lg:pt-24"
    >
      <div className="site-shell flex min-h-full flex-col sm:min-h-[calc(78svh-5rem)] lg:min-h-[calc(84svh-6rem)]">
        <div ref={ref} className="measure-hero py-8 sm:py-10 lg:py-12">
          <p className="font-inter text-[12px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            WROCŁAW — EST. 2009
          </p>

          <h1 className="text-balance mt-5 font-barlow text-[40px] font-extrabold uppercase leading-[0.96] tracking-tight sm:mt-6 sm:text-[58px] md:text-[72px] lg:text-[96px]">
            <span className="block text-foreground">{t("PROFESJONALNY", "PROFESSIONAL")}</span>
            <span className="block text-accent">{t("SERWIS SAMOCHODOWY", "CAR SERVICE")}</span>
            <span className="block text-[hsl(0_0%_34%)]">{t("WE WROCŁAWIU.", "IN WROCŁAW.")}</span>
          </h1>

          <div className="mt-6 h-px w-full max-w-xs bg-border" />

          <p className="measure-copy mt-5 font-inter text-[15px] font-medium tracking-[0.06em] text-foreground/82 sm:mt-6 sm:text-base md:text-lg">
            {t(
              "Diagnostyka. Naprawy. Klimatyzacja. Opony.",
              "Diagnostics. Repairs. Air Conditioning. Tyres."
            )}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#kontakt"
              className="inline-flex w-full items-center justify-center bg-primary px-7 py-3.5 font-barlow text-[14px] font-bold uppercase tracking-wider text-primary-foreground transition-opacity duration-300 hover:opacity-90 active:scale-[0.97] sm:w-auto"
            >
              {t("UMÓW WIZYTĘ", "BOOK NOW")}
            </a>
            <a
              href="/uslugi"
              className="inline-flex w-full items-center justify-center border border-accent px-7 py-3.5 font-barlow text-[14px] font-bold uppercase tracking-wider text-accent transition-colors duration-300 hover:bg-elevated active:scale-[0.97] sm:w-auto"
            >
              {t("NASZE USŁUGI", "OUR SERVICES")}
            </a>
          </div>
        </div>

        <div className="mt-auto pb-6 sm:pb-7 lg:pb-8">
          <div className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-2 sm:flex sm:flex-nowrap sm:items-stretch sm:justify-center sm:gap-4">
            {heroBenefits.map((benefit) => (
              <div
                key={benefit.en}
                className="flex min-h-[74px] items-center justify-center border border-border bg-surface px-2 py-3 text-center font-inter text-[10px] font-medium leading-snug text-foreground sm:min-h-0 sm:min-w-[220px] sm:flex-none sm:px-5 sm:text-[14px]"
              >
                <span className="mr-1 shrink-0 text-primary sm:mr-2">✓</span>
                <span className="text-balance">{lang === "PL" ? benefit.pl : benefit.en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
