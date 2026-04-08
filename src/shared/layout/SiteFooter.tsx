import { appRoutes, getHomeSectionPath, homeSectionIds, RouteLink } from "@/shared/navigation";
import { useLang } from "@/features/language";

const footerNav = [
  { labelPl: "Usługi", labelEn: "Services", href: appRoutes.services },
  { labelPl: "O nas", labelEn: "About", href: getHomeSectionPath(homeSectionIds.about) },
  { labelPl: "Opinie", labelEn: "Reviews", href: getHomeSectionPath(homeSectionIds.reviews) },
  { labelPl: "Kontakt", labelEn: "Contact", href: getHomeSectionPath(homeSectionIds.contact) },
  { labelPl: "Rezerwacja", labelEn: "Booking", href: getHomeSectionPath(homeSectionIds.booking) },
  { labelPl: "RODO / Cookies", labelEn: "Privacy / Cookies", href: appRoutes.privacy },
];

const SiteFooter = () => {
  const { lang, t } = useLang();

  return (
    <footer className="border-t border-border/80 py-10 sm:py-12 lg:py-14">
      <div className="site-shell">
        <div className="surface-panel-soft grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="grid gap-4">
            <span className="eyebrow">{t("Nexar Garage", "Nexar Garage")}</span>
            <div className="flex items-center gap-3 font-barlow">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-[1.2rem] font-semibold text-foreground">
                NG
              </span>
              <div>
                <p className="text-[1.9rem] leading-none text-foreground">Nexar</p>
                <p className="mt-1 font-inter text-[0.75rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Garage Wrocław
                </p>
              </div>
            </div>
            <p className="measure-copy font-inter text-[0.96rem] leading-7 text-muted-foreground">
              {t(
                "Profesjonalny serwis samochodowy we Wrocławiu. Uporządkowany proces, precyzyjna komunikacja i obsługa w języku polskim oraz angielskim.",
                "Professional car service in Wroclaw. Ordered process, precise communication and service in both Polish and English."
              )}
            </p>
          </div>

          <div className="grid gap-4 lg:justify-items-end">
            <span className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t("Nawigacja", "Navigation")}
            </span>
            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[20rem]">
              {footerNav.map((item) => (
                <RouteLink
                  key={item.href}
                  to={item.href}
                  className="font-inter text-[0.92rem] leading-7 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {lang === "PL" ? item.labelPl : item.labelEn}
                </RouteLink>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-border/70 pt-5 text-[0.78rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-inter">© 2025 Nexar Garage Sp. z o.o.</p>
          <p className="font-inter">NIP: 8992345678</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
