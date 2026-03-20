import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const footerNav = [
  { labelPl: "Usługi", labelEn: "Services", href: "/#uslugi", type: "anchor" as const },
  { labelPl: "O nas", labelEn: "About", href: "/#o-nas", type: "anchor" as const },
  { labelPl: "Opinie", labelEn: "Reviews", href: "/#opinie", type: "anchor" as const },
  { labelPl: "Kontakt", labelEn: "Contact", href: "/#kontakt", type: "anchor" as const },
  { labelPl: "Rezerwacja", labelEn: "Booking", href: "/#rezerwacja", type: "anchor" as const },
  { labelPl: "RODO / COOKIES", labelEn: "Privacy / Cookies", href: "/rodo-cookies", type: "route" as const },
];

const Footer = () => {
  const { lang, t } = useLang();
  const { consent, openSettings } = useCookieConsent();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1.2fr_0.95fr] lg:gap-12">
          <div>
            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              NEXAR GARAGE
            </p>
            <div className="mt-4 flex items-center gap-3 font-barlow">
              <span className="text-lg font-extrabold text-foreground">NEXAR</span>
              <span className="h-3.5 w-px bg-muted-foreground/50" />
              <span className="text-xs font-semibold tracking-wider text-muted-foreground">GARAGE</span>
            </div>
            <p className="mt-4 max-w-sm font-inter text-[13px] leading-relaxed text-muted-foreground">
              {t(
                "Profesjonalny serwis samochodowy we Wrocławiu. Od 2009 roku.",
                "Professional car service in Wrocław. Since 2009."
              )}
            </p>
          </div>

          <div>
            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {t("Nawigacja", "Navigation")}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {footerNav.map((item) =>
                item.type === "route" ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="font-inter text-[13px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {lang === "PL" ? item.labelPl : item.labelEn}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-inter text-[13px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {lang === "PL" ? item.labelPl : item.labelEn}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="lg:text-right">
            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {t("Płatności i cookie", "Payments and cookies")}
            </p>
            <p className="mt-4 font-inter text-[13px] text-muted-foreground">
              Visa · Mastercard · {t("Gotówka", "Cash")}
            </p>
            <div className="mt-4 flex flex-col items-start gap-3 lg:items-end">
              <button
                type="button"
                onClick={openSettings}
                className="font-inter text-[13px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {t("Ustawienia cookie", "Cookie settings")}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-inter text-[12px] text-muted-foreground/80">
            {consent === "all"
              ? t("Status: zaakceptowano wszystkie", "Status: all accepted")
              : consent === "essential"
                ? t("Status: tylko niezbędne", "Status: essential only")
                : t("Status: oczekuje na wybór", "Status: waiting for choice")}
          </p>

          <p className="font-inter text-[12px] text-muted-foreground/60">
            © 2025 Nexar Garage Sp. z o.o. | NIP: 8992345678
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
