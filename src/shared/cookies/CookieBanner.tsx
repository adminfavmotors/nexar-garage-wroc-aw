import { useLang } from "@/features/language";
import { useCookieConsent } from "@/features/cookie-consent";

const CookieBanner = () => {
  const { t } = useLang();
  const { isBannerOpen, acceptEssential, acceptAll } = useCookieConsent();

  if (!isBannerOpen) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[70] sm:inset-x-4 sm:bottom-4 lg:left-6 lg:right-6">
      <div className="surface-panel mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">{t("Prywatność i cookies", "Privacy and cookies")}</span>
            <h3 className="mt-3 font-barlow text-[2rem] leading-none text-foreground sm:text-[2.35rem]">
              {t("Treści zewnętrzne uruchamiamy tylko po zgodzie.", "External content loads only after consent.")}
            </h3>
            <p className="mt-3 font-inter text-[0.94rem] leading-7 text-muted-foreground">
              {t(
                "Niezbędne pliki cookie odpowiadają za działanie strony. Google Maps i inne treści zewnętrzne ładujemy dopiero wtedy, gdy wyrazisz na to zgodę.",
                "Essential cookies keep the site working. Google Maps and other external content are only loaded after you explicitly allow them."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-end">
            <button type="button" onClick={acceptEssential} className="premium-button-secondary w-full sm:w-auto">
              {t("Tylko niezbędne", "Essential only")}
            </button>
            <button type="button" onClick={acceptAll} className="premium-button-primary w-full sm:w-auto">
              {t("Akceptuj wszystkie", "Accept all")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
