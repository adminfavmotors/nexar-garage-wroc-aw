import { useState } from "react";
import { Menu, X } from "lucide-react";
import { appRoutes, getHomeSectionPath, homeSectionIds, RouteLink } from "@/shared/navigation";
import { useLang } from "@/features/language";

const navItems = [
  { labelPl: "Usługi", labelEn: "Services", href: appRoutes.services },
  { labelPl: "O nas", labelEn: "About", href: getHomeSectionPath(homeSectionIds.about) },
  { labelPl: "Opinie", labelEn: "Reviews", href: getHomeSectionPath(homeSectionIds.reviews) },
  { labelPl: "Kontakt", labelEn: "Contact", href: getHomeSectionPath(homeSectionIds.booking) },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="site-shell pt-3 sm:pt-4">
        <div className="flex min-h-[72px] items-center justify-between rounded-[1.4rem] border border-[hsl(var(--line-soft)/0.55)] bg-[hsl(var(--background)/0.78)] px-4 shadow-[0_20px_48px_rgba(14,10,8,0.28)] backdrop-blur-xl sm:min-h-[84px] sm:px-6 lg:px-7">
          <RouteLink
            to={appRoutes.home}
            onClick={() => setMobileOpen(false)}
            className="group flex items-center gap-3 sm:gap-4"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(var(--primary)/0.34)] bg-[hsl(var(--surface-strong))] font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-accent sm:h-12 sm:w-12">
              NG
            </div>
            <div>
              <span className="block font-barlow text-[28px] font-semibold leading-none tracking-[0.06em] text-foreground sm:text-[30px]">
                Nexar
              </span>
              <span className="mt-1 block font-inter text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
                Garage Wrocław
              </span>
            </div>
          </RouteLink>

          <nav aria-label="Główna nawigacja" className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <RouteLink
                key={item.href}
                to={item.href}
                className="rounded-full px-4 py-3 font-inter text-[13px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 hover:bg-white/5 hover:text-foreground"
              >
                {lang === "PL" ? item.labelPl : item.labelEn}
              </RouteLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <div
              role="group"
              aria-label="Zmień język"
              className="flex items-center rounded-full border border-border bg-white/5 p-1"
            >
              {(["PL", "EN"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLang(option)}
                  className={`rounded-full px-3 py-2 font-inter text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                    lang === option
                      ? "bg-[hsl(var(--surface-strong))] text-foreground"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/5 text-foreground transition-colors duration-300 hover:bg-white/10 xl:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="surface-panel mt-3 overflow-hidden xl:hidden">
            <div className="flex flex-col gap-2 p-4 sm:p-5">
              {navItems.map((item) => (
                <RouteLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[1rem] border border-border/80 bg-white/5 px-4 py-3.5 font-inter text-[13px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:bg-white/10"
                >
                  {lang === "PL" ? item.labelPl : item.labelEn}
                </RouteLink>
              ))}

              <div className="divider-hairline my-2" />

              <div
                role="group"
                aria-label="Zmień język"
                className="flex items-center justify-between rounded-[1rem] border border-border/80 bg-white/5 p-1"
              >
                {(["PL", "EN"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setLang(option)}
                    className={`flex-1 rounded-[0.8rem] px-3 py-2.5 font-inter text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                      lang === option
                        ? "bg-[hsl(var(--surface-strong))] text-foreground"
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
