import { useLang } from "@/contexts/LanguageContext";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const CookieBanner = () => {
  const { t } = useLang();
  const { isBannerOpen, acceptEssential, acceptAll } = useCookieConsent();

  if (!isBannerOpen) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[70] border border-border bg-surface shadow-[0_18px_40px_rgba(0,0,0,0.35)] lg:left-6 lg:right-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 lg:flex-row lg:items-end lg:justify-between lg:px-6">
        <div className="max-w-3xl">
          <p className="font-inter text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
            COOKIE SETTINGS
          </p>
          <h3 className="mt-2 font-barlow text-[30px] font-bold uppercase leading-none text-foreground">
            {t("RODO I PLIKI COOKIE", "PRIVACY AND COOKIES")}
          </h3>
          <p className="mt-3 font-inter text-[14px] leading-relaxed text-muted-foreground">
            {t(
              "Używamy niezbędnych plików cookie do działania strony. Treści zewnętrzne, takie jak Google Maps, uruchamiamy dopiero po Twojej zgodzie na dodatkowe cookie.",
              "We use essential cookies for the site to work. External content such as Google Maps is only loaded after you accept additional cookies."
            )}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={acceptEssential}
            className="border border-border px-5 py-3 font-barlow text-[13px] font-bold uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:bg-elevated"
          >
            {t("TYLKO NIEZBĘDNE", "ESSENTIAL ONLY")}
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="border border-primary bg-primary px-5 py-3 font-barlow text-[13px] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_12px_26px_rgba(170,37,0,0.22)]"
          >
            {t("AKCEPTUJ WSZYSTKIE", "ACCEPT ALL")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
