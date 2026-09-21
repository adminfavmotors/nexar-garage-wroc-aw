import { useLang } from "@/features/language";
import { useCookieConsent } from "@/features/cookie-consent";

const CookieBanner = () => {
  const { t } = useLang();
  const { isBannerOpen, acceptEssential, acceptAll } = useCookieConsent();

  if (!isBannerOpen) return null;

  return (
    <div className="cookie-banner fixed inset-x-3 bottom-3 z-[70] sm:inset-x-4 sm:bottom-4 lg:left-6 lg:right-6">
      <div className="surface-panel mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-semibold">
              {t("Ustawienia cookies", "Cookie settings")}
            </p>
            <p className="mt-1 max-w-[58ch] text-sm leading-6 text-muted-foreground">
              {t(
                "Strona działa z niezbędnymi cookies. Dodatkowa zgoda pozwala wyświetlić mapę Google.",
                "Essential cookies keep this site working. Additional consent lets us display Google Maps.",
              )}
            </p>
          </div>

          <div className="cookie-actions grid grid-cols-2 gap-2 sm:flex sm:shrink-0 sm:flex-wrap sm:justify-end">
            <button
              type="button"
              onClick={acceptEssential}
              className="premium-button-secondary w-full sm:w-auto"
            >
              {t("Tylko niezbędne", "Essential only")}
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="premium-button-primary w-full sm:w-auto"
            >
              {t("Akceptuj wszystkie", "Accept all")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
