import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import {
  appRoutes,
  getHomeSectionPath,
  homeSectionIds,
  RouteLink,
} from "@/shared/navigation";
import { useLang } from "@/features/language";

const navItems = [
  {
    labelPl: "Usługi i ceny",
    labelEn: "Services and prices",
    href: appRoutes.services,
  },
  {
    labelPl: "O warsztacie",
    labelEn: "About us",
    href: getHomeSectionPath(homeSectionIds.about),
  },
  {
    labelPl: "Jak pracujemy",
    labelEn: "How we work",
    href: getHomeSectionPath(homeSectionIds.standard),
  },
  {
    labelPl: "Kontakt",
    labelEn: "Contact",
    href: getHomeSectionPath(homeSectionIds.contact),
  },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { lang, setLang, t } = useLang();
  const location = useLocation();

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);

  const languages = (
    <div
      role="group"
      aria-label={t("Zmień język", "Change language")}
      className="flex items-center gap-2"
    >
      {(["PL", "EN"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`min-h-11 min-w-11 text-sm focus-visible:outline-primary ${lang === option ? "font-semibold text-foreground underline underline-offset-4" : "text-muted-foreground hover:text-foreground"}`}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:p-3 focus:text-primary"
      >
        {t("Przejdź do treści", "Skip to content")}
      </a>
      <div className="site-shell flex min-h-16 items-center justify-between gap-3 lg:min-h-20">
        <RouteLink
          to={appRoutes.home}
          onClick={() => setMobileOpen(false)}
          aria-label="Nexar Garage"
          className="font-display text-[1.65rem] sm:text-[1.9rem] font-semibold leading-none tracking-tight focus-visible:outline-primary"
        >
          Nexar
          <span className="ml-2 text-base font-normal tracking-normal text-muted-foreground">
            Garage
          </span>
        </RouteLink>
        <nav
          aria-label={t("Główna nawigacja", "Main navigation")}
          className="hidden items-center gap-6 lg:flex"
        >
          {navItems.map((item) => (
            <RouteLink
              key={item.href}
              to={item.href}
              aria-current={
                location.pathname === item.href ? "page" : undefined
              }
              className="py-3 text-sm text-muted-foreground hover:text-primary aria-[current=page]:text-primary focus-visible:outline-primary"
            >
              {t(item.labelPl, item.labelEn)}
            </RouteLink>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          {languages}
          <RouteLink
            to={getHomeSectionPath(homeSectionIds.booking)}
            className="premium-button-primary"
          >
            {t("Umów wizytę", "Book a visit")}
          </RouteLink>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+48712345678"
            className="header-icon-button"
            aria-label={t("Zadzwoń do warsztatu", "Call the workshop")}
          >
            <Phone size={22} strokeWidth={1.75} aria-hidden="true" />
          </a>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="header-icon-button"
            aria-label={
              mobileOpen
                ? t("Zamknij menu", "Close menu")
                : t("Otwórz menu", "Open menu")
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X size={22} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu size={22} strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label={t("Nawigacja mobilna", "Mobile navigation")}
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <div className="site-shell grid gap-1 py-4">
            {navItems.map((item) => (
              <RouteLink
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border py-3 text-base focus-visible:outline-primary"
              >
                {t(item.labelPl, item.labelEn)}
              </RouteLink>
            ))}
            <div className="my-3">{languages}</div>
            <RouteLink
              to={getHomeSectionPath(homeSectionIds.booking)}
              onClick={() => setMobileOpen(false)}
              className="premium-button-primary"
            >
              {t("Umów wizytę", "Book a visit")}
            </RouteLink>
          </div>
        </nav>
      )}
    </header>
  );
};
export default SiteHeader;
