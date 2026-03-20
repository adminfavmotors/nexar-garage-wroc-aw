import { useLang } from "@/contexts/LanguageContext";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const footerNav = [
  { labelPl: "Usługi", labelEn: "Services", href: "#uslugi" },
  { labelPl: "O nas", labelEn: "About", href: "#o-nas" },
  { labelPl: "Opinie", labelEn: "Reviews", href: "#opinie" },
  { labelPl: "Kontakt", labelEn: "Contact", href: "#kontakt" },
  { labelPl: "Rezerwacja", labelEn: "Booking", href: "#rezerwacja" },
];

const Footer = () => {
  const { lang, t } = useLang();
  const { consent, openSettings } = useCookieConsent();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3 font-barlow">
              <span className="text-lg font-extrabold text-foreground">NEXAR</span>
              <span className="h-3.5 w-px bg-muted-foreground/50" />
              <span className="text-xs font-semibold tracking-wider text-muted-foreground">GARAGE</span>
            </div>
            <p className="mt-3 font-inter text-[13px] leading-relaxed text-muted-foreground">
              {t(
                "Profesjonalny serwis samochodowy we Wrocławiu. Od 2009 roku.",
                "Professional car service in Wrocław. Since 2009."
              )}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 lg:justify-center lg:pt-1">
            {footerNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-inter text-[13px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {lang === "PL" ? item.labelPl : item.labelEn}
              </a>
            ))}
          </div>

          <div className="lg:text-right">
            <p className="font-inter text-[13px] text-muted-foreground">
              Visa · Mastercard · {t("Gotówka", "Cash")}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-border pt-6 lg:grid-cols-[1.4fr_auto] lg:items-start">
          <div>
            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              RODO / COOKIES
            </p>
            <p className="mt-3 max-w-3xl font-inter text-[13px] leading-relaxed text-muted-foreground">
              {t(
                "Administratorem danych jest Nexar Garage Sp. z o.o. Dane z formularza wykorzystujemy wyłącznie do kontaktu i organizacji wizyty. Strona używa niezbędnych plików cookie, a treści zewnętrzne, takie jak Google Maps, uruchamiamy po zgodzie.",
                "The data controller is Nexar Garage Sp. z o.o. We use form data only to contact you and arrange the appointment. The site uses essential cookies, and external content such as Google Maps is loaded after consent."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <button
              type="button"
              onClick={openSettings}
              className="border border-border px-4 py-3 font-barlow text-[13px] font-bold uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:bg-elevated"
            >
              {t("USTAWIENIA COOKIE", "COOKIE SETTINGS")}
            </button>
            <p className="font-inter text-[12px] text-muted-foreground/80">
              {consent === "all"
                ? t("Status: zaakceptowano wszystkie", "Status: all accepted")
                : consent === "essential"
                  ? t("Status: tylko niezbędne", "Status: essential only")
                  : t("Status: oczekuje na wybór", "Status: waiting for choice")}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="font-inter text-[12px] text-muted-foreground/60">
            © 2025 Nexar Garage Sp. z o.o. | NIP: 8992345678
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
