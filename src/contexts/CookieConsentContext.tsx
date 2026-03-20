import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type CookieConsentValue = "pending" | "essential" | "all";

interface CookieConsentContextType {
  consent: CookieConsentValue;
  isBannerOpen: boolean;
  allowThirdPartyContent: boolean;
  acceptEssential: () => void;
  acceptAll: () => void;
  openSettings: () => void;
}

const COOKIE_STORAGE_KEY = "nexar-cookie-consent";

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const getInitialConsent = (): CookieConsentValue => {
  const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
  if (saved === "essential" || saved === "all") return saved;
  return "pending";
};

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<CookieConsentValue>(getInitialConsent);
  const [isBannerOpen, setIsBannerOpen] = useState(consent === "pending");

  const setConsentValue = (value: Exclude<CookieConsentValue, "pending">) => {
    setConsent(value);
    localStorage.setItem(COOKIE_STORAGE_KEY, value);
    setIsBannerOpen(false);
  };

  const value = useMemo<CookieConsentContextType>(
    () => ({
      consent,
      isBannerOpen,
      allowThirdPartyContent: consent === "all",
      acceptEssential: () => setConsentValue("essential"),
      acceptAll: () => setConsentValue("all"),
      openSettings: () => setIsBannerOpen(true),
    }),
    [consent, isBannerOpen]
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return context;
};
