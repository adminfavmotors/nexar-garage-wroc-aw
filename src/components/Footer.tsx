import RouteLink from "@/components/RouteLink";
import { useLang } from "@/contexts/LanguageContext";

const footerNav = [
  { labelPl: "Usługi", labelEn: "Services", href: "/uslugi", type: "route" as const },
  { labelPl: "O nas", labelEn: "About", href: "/#o-nas", type: "anchor" as const },
  { labelPl: "Opinie", labelEn: "Reviews", href: "/#opinie", type: "anchor" as const },
  { labelPl: "Kontakt", labelEn: "Contact", href: "/#kontakt", type: "anchor" as const },
  { labelPl: "Rezerwacja", labelEn: "Booking", href: "/#rezerwacja", type: "anchor" as const },
  { labelPl: "RODO / COOKIES", labelEn: "Privacy / Cookies", href: "/rodo-cookies", type: "route" as const },
];

const Footer = () => {
  const { lang, t } = useLang();

  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.05fr_1.2fr] lg:gap-12">
          <div className="mx-auto max-w-sm text-center lg:mx-0 lg:text-left">
            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              NEXAR GARAGE
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 font-barlow lg:justify-start">
              <span className="text-lg font-extrabold text-foreground">NEXAR</span>
              <span className="h-3.5 w-px bg-muted-foreground/50" />
              <span className="text-xs font-semibold tracking-wider text-muted-foreground">GARAGE</span>
            </div>
            <p className="mt-4 font-inter text-[13px] leading-relaxed text-muted-foreground">
              {t(
                "Profesjonalny serwis samochodowy we Wrocławiu. Od 2009 roku.",
                "Professional car service in Wrocław. Since 2009."
              )}
            </p>
          </div>

          <div className="text-center lg:text-left">
            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {t("Nawigacja", "Navigation")}
            </p>
            <div className="mt-4 grid grid-cols-1 justify-items-center gap-x-5 gap-y-3 min-[380px]:grid-cols-2 min-[560px]:grid-cols-3 lg:justify-items-start">
              {footerNav.map((item) =>
                item.type === "route" ? (
                  <RouteLink
                    key={item.href}
                    to={item.href}
                    className="text-center font-inter text-[13px] leading-relaxed text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {lang === "PL" ? item.labelPl : item.labelEn}
                  </RouteLink>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-center font-inter text-[13px] leading-relaxed text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {lang === "PL" ? item.labelPl : item.labelEn}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center sm:mt-10">
          <p className="font-inter text-[12px] text-muted-foreground/60">
            © 2025 Nexar Garage Sp. z o.o. | NIP: 8992345678
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
