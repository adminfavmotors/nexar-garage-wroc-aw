import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const navItems = [
  { labelPl: "USŁUGI", labelEn: "SERVICES", href: "/#uslugi" },
  { labelPl: "O NAS", labelEn: "ABOUT", href: "/#o-nas" },
  { labelPl: "OPINIE", labelEn: "REVIEWS", href: "/#opinie" },
  { labelPl: "KONTAKT", labelEn: "CONTACT", href: "/#kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/96 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:h-24">
        <Link to="/" className="group flex items-center gap-4 font-barlow">
          <div className="relative overflow-hidden rounded-xl border-2 border-primary bg-surface px-4 py-2.5 shadow-[0_0_0_1px_rgba(255,120,90,0.14),0_10px_24px_rgba(0,0,0,0.24),0_0_26px_rgba(170,37,0,0.18)] transition-all duration-500 ease-out group-hover:border-[hsl(8_100%_58%)] group-hover:bg-[hsl(0_0%_9.5%)] group-hover:shadow-[0_0_0_1px_rgba(255,180,165,0.18),0_16px_34px_rgba(0,0,0,0.3),0_0_18px_rgba(170,37,0,0.26),0_0_48px_rgba(170,37,0,0.28)]">
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.018)_36%,rgba(170,37,0,0.14)_100%)] opacity-85 transition-opacity duration-500 ease-out group-hover:opacity-100" />
            <span className="relative block text-[30px] font-extrabold leading-none tracking-[0.04em] text-foreground transition-transform duration-500 ease-out group-hover:-translate-y-0.5 lg:text-[34px]">
              NEXAR
            </span>
          </div>
          <div className="hidden sm:block">
            <span className="block font-barlow text-[14px] font-bold uppercase tracking-[0.34em] text-muted-foreground transition-colors duration-500 ease-out group-hover:text-foreground/90">
              GARAGE
            </span>
            <span className="mt-1 block font-inter text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70 transition-colors duration-500 ease-out group-hover:text-muted-foreground/90">
              WROCŁAW SINCE 2009
            </span>
          </div>
        </Link>

        <nav aria-label="Główna nawigacja" className="hidden items-center gap-3 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group inline-flex items-center border border-transparent px-4 py-3 font-inter text-[14px] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-surface hover:text-foreground"
            >
              <span>{lang === "PL" ? item.labelPl : item.labelEn}</span>
              <span className="ml-3 h-px w-0 bg-primary transition-all duration-300 group-hover:w-5" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <div role="group" aria-label="Zmień język" className="flex items-center border border-border bg-surface px-3 py-2 font-inter text-[13px] tracking-[0.12em]">
            <button
              onClick={() => setLang("PL")}
              className={`px-2 py-1 transition-all duration-300 hover:-translate-y-0.5 ${
                lang === "PL" ? "font-semibold text-foreground" : "font-normal text-muted-foreground/70 hover:text-foreground"
              }`}
            >
              PL
            </button>
            <span className="text-muted-foreground/40">·</span>
            <button
              onClick={() => setLang("EN")}
              className={`px-2 py-1 transition-all duration-300 hover:-translate-y-0.5 ${
                lang === "EN" ? "font-semibold text-foreground" : "font-normal text-muted-foreground/70 hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="/#kontakt"
            className="inline-flex items-center border border-primary bg-primary px-7 py-3.5 font-barlow text-[15px] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_12px_24px_rgba(170,37,0,0.22)] active:scale-[0.98]"
          >
            {t("UMÓW WIZYTĘ", "BOOK NOW")}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="border border-border bg-surface p-3 text-foreground transition-all duration-300 hover:border-primary/70 hover:bg-elevated hover:scale-[1.03] xl:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-20 z-40 border-t border-border bg-background/98 px-6 pb-8 pt-6 backdrop-blur-md lg:top-24 xl:hidden">
          <nav aria-label="Główna nawigacja" className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border border-border bg-surface px-4 py-4 font-barlow text-[28px] font-bold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:translate-x-1 hover:border-primary/70 hover:bg-elevated"
              >
                {lang === "PL" ? item.labelPl : item.labelEn}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex items-center gap-4">
            <div role="group" aria-label="Zmień język" className="flex items-center border border-border bg-surface px-3 py-2 font-inter text-sm tracking-[0.12em]">
              <button
                onClick={() => setLang("PL")}
                className={`px-2 py-1 transition-colors duration-300 ${
                  lang === "PL" ? "font-semibold text-foreground" : "text-muted-foreground/70 hover:text-foreground"
                }`}
              >
                PL
              </button>
              <span className="text-muted-foreground/40">·</span>
              <button
                onClick={() => setLang("EN")}
                className={`px-2 py-1 transition-colors duration-300 ${
                  lang === "EN" ? "font-semibold text-foreground" : "text-muted-foreground/70 hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <a
            href="/#kontakt"
            onClick={() => setMobileOpen(false)}
            className="mt-6 block border border-primary bg-primary px-6 py-4 text-center font-barlow text-[15px] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.98]"
          >
            {t("UMÓW WIZYTĘ", "BOOK NOW")}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
