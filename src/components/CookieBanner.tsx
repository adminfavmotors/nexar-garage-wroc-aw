import { useLang } from "@/contexts/LanguageContext";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const CookieBanner = () => {
  const { t } = useLang();
  const { isBannerOpen, acceptEssential, acceptAll } = useCookieConsent();

  if (!isBannerOpen) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[70] max-h-[calc(100svh-1.5rem)] overflow-y-auto border border-border bg-surface shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:inset-x-4 sm:bottom-4 lg:left-6 lg:right-6 lg:max-h-none lg:overflow-visible">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:gap-5 sm:px-5 sm:py-5 lg:flex-row lg:items-end lg:justify-between lg:px-6">
        <div className="max-w-3xl">
          <p className="font-inter text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px] sm:tracking-[0.24em]">
            COOKIE SETTINGS
          </p>
          <h3 className="mt-2 font-barlow text-[24px] font-bold uppercase leading-none text-foreground sm:text-[30px]">
            {t("RODO I PLIKI COOKIE", "PRIVACY AND COOKIES")}
          </h3>
          <p className="mt-2.5 font-inter text-[13px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-[14px]">
            {t(
              "Używamy niezbędnych plików cookie do działania strony. Treści zewnętrzne, takie jak Google Maps, uruchamiamy dopiero po Twojej zgodzie na dodatkowe cookie.",
              "We use essential cookies for the site to work. External content such as Google Maps is only loaded after you accept additional cookies."
            )}
          </p>
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
          <button
            type="button"
            onClick={acceptEssential}
            className="w-full border border-border px-4 py-3 font-barlow text-[12px] font-bold uppercase tracking-[0.14em] text-foreground transition-all duration-300 hover:bg-elevated sm:w-auto sm:px-5 sm:text-[13px] sm:tracking-[0.16em]"
          >
            {t("TYLKO NIEZBĘDNE", "ESSENTIAL ONLY")}
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="w-full border border-primary bg-primary px-4 py-3 font-barlow text-[12px] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_12px_26px_rgba(170,37,0,0.22)] sm:w-auto sm:px-5 sm:text-[13px] sm:tracking-[0.16em]"
          >
            {t("AKCEPTUJ WSZYSTKIE", "ACCEPT ALL")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
