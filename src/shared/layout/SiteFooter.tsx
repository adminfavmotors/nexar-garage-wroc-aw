import {
  appRoutes,
  getHomeSectionPath,
  homeSectionIds,
  RouteLink,
} from "@/shared/navigation";
import { useLang } from "@/features/language";

const footerNav = [
  { labelPl: "Usługi", labelEn: "Services", href: appRoutes.services },
  {
    labelPl: "O nas",
    labelEn: "About",
    href: getHomeSectionPath(homeSectionIds.about),
  },
  {
    labelPl: "Standard",
    labelEn: "Process",
    href: getHomeSectionPath(homeSectionIds.standard),
  },
  {
    labelPl: "Kontakt",
    labelEn: "Contact",
    href: getHomeSectionPath(homeSectionIds.contact),
  },
  {
    labelPl: "Rezerwacja",
    labelEn: "Booking",
    href: getHomeSectionPath(homeSectionIds.booking),
  },
  {
    labelPl: "RODO / Cookies",
    labelEn: "Privacy / Cookies",
    href: appRoutes.privacy,
  },
];

const SiteFooter = () => {
  const { lang, t } = useLang();

  return (
    <footer className="workshop-footer py-10 sm:py-12 lg:py-14">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="grid gap-4">
            <RouteLink
              to={appRoutes.home}
              className="w-fit font-display text-3xl font-semibold"
            >
              Nexar <span className="font-normal">Garage</span>
            </RouteLink>
            <p className="measure-copy font-body text-[0.96rem] leading-7 text-muted-foreground">
              {t(
                "Diagnostyka, naprawy i obsługa samochodów. Wrocław, ul. Świdnicka 18.",
                "Diagnostics, repairs and car maintenance. 18 Swidnicka Street, Wroclaw.",
              )}
            </p>
          </div>

          <div className="grid gap-4 lg:justify-items-end">
            <span className="font-body text-sm font-semibold text-muted-foreground">
              {t("Nawigacja", "Navigation")}
            </span>
            <div className="grid grid-cols-2 gap-x-5 gap-y-1 lg:min-w-[20rem]">
              {footerNav.map((item) => (
                <RouteLink
                  key={item.href}
                  to={item.href}
                  className="flex min-h-11 w-fit items-center font-body text-[0.92rem] leading-7 text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {lang === "PL" ? item.labelPl : item.labelEn}
                </RouteLink>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-border pt-5 text-[0.78rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body">
            © {new Date().getFullYear()} Nexar Garage Sp. z o.o.
          </p>
          <p className="font-body tabular-nums">NIP: 8992345678</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
