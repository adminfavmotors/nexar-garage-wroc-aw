import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "PL" | "EN";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (pl: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Lang => {
  try {
    return localStorage.getItem("nexar-lang") === "EN" ? "EN" : "PL";
  } catch {
    return "PL";
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang === "PL" ? "pl" : "en";

    try {
      localStorage.setItem("nexar-lang", lang);
    } catch {
      // The language still works when storage is unavailable.
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
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
