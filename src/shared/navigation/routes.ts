export const appRoutes = {
  home: "/",
  privacy: "/rodo-cookies",
  services: "/uslugi",
} as const;

export const homeSectionIds = {
  about: "o-nas",
  booking: "rezerwacja",
  contact: "kontakt",
  standard: "standard",
} as const;

export const getHomeSectionPath = (sectionId: string) => `${appRoutes.home}#${sectionId}`;
