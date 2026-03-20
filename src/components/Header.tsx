import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Usługi", href: "#uslugi" },
  { label: "O nas", href: "#o-nas" },
  { label: "Opinie", href: "#opinie" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"PL" | "EN">("PL");

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(10, 10, 10, 0.85)",
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-1 font-syne">
          <span className="text-xl font-bold tracking-tight text-foreground">NEXAR</span>
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-primary">
            GARAGE
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-underline text-[13px] font-medium tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center overflow-hidden rounded-sm border border-border text-[12px] font-medium">
            <button
              onClick={() => setLang("PL")}
              className={`px-3 py-1.5 transition-colors duration-300 ${
                lang === "PL"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              PL
            </button>
            <button
              onClick={() => setLang("EN")}
              className={`px-3 py-1.5 transition-colors duration-300 ${
                lang === "EN"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>
          <a
            href="#kontakt"
            className="rounded-sm border border-foreground px-5 py-2 text-[13px] font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover-glow"
          >
            Umów wizytę
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex overflow-hidden rounded-sm border border-border text-[12px] font-medium">
              <button
                onClick={() => setLang("PL")}
                className={`px-3 py-1.5 transition-colors ${
                  lang === "PL" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                PL
              </button>
              <button
                onClick={() => setLang("EN")}
                className={`px-3 py-1.5 transition-colors ${
                  lang === "EN" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                EN
              </button>
            </div>
            <a
              href="#kontakt"
              onClick={() => setMobileOpen(false)}
              className="rounded-sm border border-foreground px-5 py-2 text-[13px] font-medium text-foreground"
            >
              Umów wizytę
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
