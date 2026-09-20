import { useState } from "react";
import { Menu, X } from "lucide-react";
import { appRoutes, getHomeSectionPath, homeSectionIds, RouteLink } from "@/shared/navigation";
import { useLang } from "@/features/language";

const navItems = [
  { labelPl: "Usługi", labelEn: "Services", href: appRoutes.services },
  { labelPl: "O nas", labelEn: "About", href: getHomeSectionPath(homeSectionIds.about) },
  { labelPl: "Standard", labelEn: "Process", href: getHomeSectionPath(homeSectionIds.standard) },
  { labelPl: "Kontakt", labelEn: "Contact", href: getHomeSectionPath(homeSectionIds.contact) },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="site-shell pt-3 sm:pt-4">
        <div className="flex min-h-[72px] items-center justify-between rounded-[var(--radius)] border border-border bg-[hsl(var(--background)/0.96)] px-4 sm:min-h-[84px] sm:px-6 lg:px-7">
          <RouteLink
            to={appRoutes.home}
            onClick={() => setMobileOpen(false)}
            className="group flex items-center gap-3 rounded-sm sm:gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/40 bg-[hsl(var(--surface-raised))] font-mono text-xs font-semibold uppercase tracking-[0.08em] text-accent sm:h-12 sm:w-12">
              NG
            </div>
            <div>
              <span className="block font-display text-[30px] font-semibold leading-none tracking-[-0.01em] text-foreground sm:text-[32px]">
                Nexar
              </span>
              <span className="mt-1 block font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
                Garage Wrocław
              </span>
            </div>
          </RouteLink>

          <nav aria-label={t("Główna nawigacja", "Main navigation")} className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <RouteLink
                key={item.href}
                to={item.href}
                className="rounded-sm px-4 py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground transition-colors duration-200 hover:bg-[hsl(var(--surface-raised))] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {lang === "PL" ? item.labelPl : item.labelEn}
              </RouteLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <div
              role="group"
              aria-label={t("Zmień język", "Change language")}
              className="flex items-center rounded-md border border-border bg-[hsl(var(--surface))] p-1"
            >
              {(["PL", "EN"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLang(option)}
                  aria-pressed={lang === option}
                  className={`rounded-sm px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.08em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    lang === option
                      ? "bg-[hsl(var(--surface-raised))] text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <RouteLink
              to={getHomeSectionPath(homeSectionIds.booking)}
              className="premium-button-primary"
            >
              {t("Umów wizytę", "Book now")}
            </RouteLink>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-md border border-border bg-[hsl(var(--surface))] text-foreground transition-colors duration-200 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background xl:hidden"
            aria-label={mobileOpen ? t("Zamknij menu", "Close menu") : t("Otwórz menu", "Open menu")}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-navigation" className="surface-panel mt-3 overflow-hidden xl:hidden">
            <div className="flex flex-col gap-2 p-4 sm:p-5">
              {navItems.map((item) => (
                <RouteLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md border border-border bg-[hsl(var(--surface-raised))] px-4 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-foreground transition-colors duration-200 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {lang === "PL" ? item.labelPl : item.labelEn}
                </RouteLink>
              ))}

              <div className="divider-hairline my-2" />

              <div
                role="group"
                aria-label={t("Zmień język", "Change language")}
                className="flex items-center justify-between rounded-md border border-border bg-[hsl(var(--surface-raised))] p-1"
              >
                {(["PL", "EN"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setLang(option)}
                    aria-pressed={lang === option}
                    className={`flex-1 rounded-sm px-3 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      lang === option
                        ? "bg-background text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <RouteLink
                to={getHomeSectionPath(homeSectionIds.booking)}
                onClick={() => setMobileOpen(false)}
                className="premium-button-primary w-full"
              >
                {t("Umów wizytę", "Book now")}
              </RouteLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
