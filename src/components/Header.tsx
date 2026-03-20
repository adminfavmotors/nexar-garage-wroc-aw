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
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{ backgroundColor: "rgba(12, 12, 12, 0.95)" }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3 font-barlow">
          <span className="text-xl font-extrabold tracking-tight text-foreground">NEXAR</span>
          <span className="h-4 w-px bg-muted-foreground/50" />
          <span className="text-sm font-semibold tracking-wider text-muted-foreground">
            GARAGE
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-inter text-[13px] font-medium uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {lang === "PL" ? item.labelPl : item.labelEn}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <div className="flex items-center gap-1.5 font-inter text-[13px]">
            <button
              onClick={() => setLang("PL")}
              className={`transition-colors duration-300 ${
                lang === "PL" ? "font-semibold text-foreground" : "font-normal text-muted-foreground/60"
              }`}
            >
              PL
            </button>
            <span className="text-muted-foreground/40">·</span>
            <button
              onClick={() => setLang("EN")}
              className={`transition-colors duration-300 ${
                lang === "EN" ? "font-semibold text-foreground" : "font-normal text-muted-foreground/60"
              }`}
            >
              EN
            </button>
          </div>
          <a
            href="#kontakt"
            className="bg-primary px-5 py-2 font-barlow text-[13px] font-bold uppercase tracking-wider text-primary-foreground transition-opacity duration-300 hover:opacity-90 active:scale-[0.97]"
          >
            {t("UMÓW WIZYTĘ", "BOOK NOW")}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 border-t border-border bg-background px-6 pb-8 pt-6 md:hidden">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-barlow text-2xl font-bold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
              >
                {lang === "PL" ? item.labelPl : item.labelEn}
              </a>
            ))}
          </nav>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex items-center gap-2 font-inter text-sm">
              <button
                onClick={() => setLang("PL")}
                className={lang === "PL" ? "font-semibold text-foreground" : "text-muted-foreground/60"}
              >
                PL
              </button>
              <span className="text-muted-foreground/40">·</span>
              <button
                onClick={() => setLang("EN")}
                className={lang === "EN" ? "font-semibold text-foreground" : "text-muted-foreground/60"}
              >
                EN
              </button>
            </div>
          </div>
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="mt-6 block bg-primary px-6 py-3 text-center font-barlow text-sm font-bold uppercase tracking-wider text-primary-foreground"
          >
            {t("UMÓW WIZYTĘ", "BOOK NOW")}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
