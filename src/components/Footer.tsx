import { useLang } from "@/contexts/LanguageContext";

const footerNav = [
  { labelPl: "Usługi", labelEn: "Services", href: "#uslugi" },
  { labelPl: "O nas", labelEn: "About", href: "#o-nas" },
  { labelPl: "Opinie", labelEn: "Reviews", href: "#opinie" },
  { labelPl: "Kontakt", labelEn: "Contact", href: "#kontakt" },
  { labelPl: "Rezerwacja", labelEn: "Booking", href: "#rezerwacja" },
];

const Footer = () => {
  const { lang, t } = useLang();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-3">
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

          <div className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-center sm:pt-1">
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

          <div className="sm:text-right">
            <p className="font-inter text-[13px] text-muted-foreground">
              Visa · Mastercard · {t("Gotówka", "Cash")}
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
