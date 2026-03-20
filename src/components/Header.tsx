import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const navItems = [
  { labelPl: "USŁUGI", labelEn: "SERVICES", href: "#uslugi" },
  { labelPl: "O NAS", labelEn: "ABOUT", href: "#o-nas" },
  { labelPl: "OPINIE", labelEn: "REVIEWS", href: "#opinie" },
  { labelPl: "KONTAKT", labelEn: "CONTACT", href: "#kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/90 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <a href="#" className="group flex items-center gap-3 font-barlow">
          <span className="text-[28px] font-extrabold tracking-[0.02em] text-foreground transition-transform duration-300 group-hover:-translate-y-0.5">
            NEXAR
          </span>
          <span className="h-5 w-px bg-muted-foreground/50 transition-colors duration-300 group-hover:bg-primary/70" />
          <span className="text-[13px] font-semibold tracking-[0.28em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
            GARAGE
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 font-inter text-[14px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
            >
              <span>{lang === "PL" ? item.labelPl : item.labelEn}</span>
              <span className="absolute left-1/2 top-full h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-2 font-inter text-[13px] tracking-[0.12em]">
            <button
              onClick={() => setLang("PL")}
              className={`transition-all duration-300 hover:-translate-y-0.5 ${
                lang === "PL" ? "font-semibold text-foreground" : "font-normal text-muted-foreground/70 hover:text-foreground"
              }`}
            >
              PL
            </button>
            <span className="text-muted-foreground/40">·</span>
            <button
              onClick={() => setLang("EN")}
              className={`transition-all duration-300 hover:-translate-y-0.5 ${
                lang === "EN" ? "font-semibold text-foreground" : "font-normal text-muted-foreground/70 hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#kontakt"
            className="inline-flex items-center bg-primary px-6 py-3 font-barlow text-[14px] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 active:scale-[0.98]"
          >
            {t("UMÓW WIZYTĘ", "BOOK NOW")}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground transition-transform duration-300 hover:scale-105 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-20 z-40 border-t border-border bg-background/98 px-6 pb-8 pt-6 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-barlow text-[30px] font-bold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:translate-x-1 hover:text-accent"
              >
                {lang === "PL" ? item.labelPl : item.labelEn}
              </a>
            ))}
          </nav>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex items-center gap-2 font-inter text-sm tracking-[0.12em]">
              <button
                onClick={() => setLang("PL")}
                className={`transition-colors duration-300 ${lang === "PL" ? "font-semibold text-foreground" : "text-muted-foreground/70 hover:text-foreground"}`}
              >
                PL
              </button>
              <span className="text-muted-foreground/40">·</span>
              <button
                onClick={() => setLang("EN")}
                className={`transition-colors duration-300 ${lang === "EN" ? "font-semibold text-foreground" : "text-muted-foreground/70 hover:text-foreground"}`}
              >
                EN
              </button>
            </div>
          </div>

          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="mt-6 block bg-primary px-6 py-3.5 text-center font-barlow text-[14px] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.98]"
          >
            {t("UMÓW WIZYTĘ", "BOOK NOW")}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
