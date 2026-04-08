import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "PL" | "EN";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (pl: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("nexar-lang");
    return (saved === "EN" ? "EN" : "PL") as Lang;
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("nexar-lang", l);
  };

  const t = (pl: string, en: string) => (lang === "PL" ? pl : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
