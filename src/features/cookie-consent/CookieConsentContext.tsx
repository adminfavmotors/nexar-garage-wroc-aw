import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CookieConsentValue = "pending" | "essential" | "all";

export interface CookieConsentContextType {
  consent: CookieConsentValue;
  isBannerOpen: boolean;
  allowThirdPartyContent: boolean;
  acceptEssential: () => void;
  acceptAll: () => void;
  openSettings: () => void;
}

const COOKIE_STORAGE_KEY = "nexar-cookie-consent";

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

const getInitialConsent = (): CookieConsentValue => {
  try {
    const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (saved === "essential" || saved === "all") return saved;
  } catch {
    // Keep the page usable when browser storage is unavailable.
  }
  return "pending";
};

export const CookieConsentProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [consent, setConsent] = useState<CookieConsentValue>(getInitialConsent);
  const [isBannerOpen, setIsBannerOpen] = useState(consent === "pending");

  const setConsentValue = (value: Exclude<CookieConsentValue, "pending">) => {
    setConsent(value);
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, value);
    } catch {
      // Consent still applies to the current session.
    }
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
    [consent, isBannerOpen],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context)
    throw new Error(
      "useCookieConsent must be used within CookieConsentProvider",
    );
  return context;
};
