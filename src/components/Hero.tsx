import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Hero = () => {
  const { t } = useLang();
  const ref = useScrollReveal();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16 diagonal-lines">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-[960px] py-20 lg:py-40">
          <p className="animate-fade-up font-inter text-[12px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            WROCŁAW — EST. 2009
          </p>

          <h1 className="animate-fade-up animate-fade-up-delay-1 mt-8 font-barlow text-[52px] font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-[96px]">
            <span className="block text-foreground">
              {t("PROFESJONALNY", "PROFESSIONAL")}
            </span>
            <span className="block text-accent">
              {t("SERWIS SAMOCHODOWY", "CAR SERVICE")}
            </span>
            <span className="block text-[hsl(0_0%_20%)]">
              {t("WE WROCŁAWIU.", "IN WROCŁAW.")}
            </span>
          </h1>

          <div className="animate-fade-up animate-fade-up-delay-2 mt-8 h-px w-full max-w-xs bg-border" />

          <p className="animate-fade-up animate-fade-up-delay-2 mt-6 font-inter text-base text-muted-foreground">
            {t(
              "Diagnostyka. Naprawy. Klimatyzacja. Opony.",
              "Diagnostics. Repairs. Air Conditioning. Tyres."
            )}
          </p>

          <div className="animate-fade-up animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
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

          <div className="animate-fade-up animate-fade-up-delay-4 mt-10 flex flex-wrap gap-x-4 gap-y-2 font-inter text-[13px] text-[hsl(0_0%_33%)]">
            <span>✓ {t("Gwarancja 12 mies.", "12-month warranty")}</span>
            <span className="text-[hsl(0_0%_20%)]">·</span>
            <span>✓ {t("Bezpłatna wycena", "Free estimate")}</span>
            <span className="text-[hsl(0_0%_20%)]">·</span>
            <span>✓ {t("Oryginalne części", "OEM parts")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
