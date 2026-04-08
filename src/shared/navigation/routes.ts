export const appRoutes = {
  home: "/",
  privacy: "/rodo-cookies",
  services: "/uslugi",
} as const;

export const homeSectionIds = {
  about: "o-nas",
  booking: "rezerwacja",
  reviews: "opinie",
} as const;

export const getHomeSectionPath = (sectionId: string) => `${appRoutes.home}#${sectionId}`;
