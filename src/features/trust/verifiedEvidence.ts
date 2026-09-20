export type LocalizedEvidenceText = {
  pl: string;
  en: string;
};

export type WorkshopPhoto = {
  src: string;
  width: number;
  height: number;
  alt: LocalizedEvidenceText;
  caption: LocalizedEvidenceText;
};

export type VerifiedReview = {
  author: string;
  quote: LocalizedEvidenceText;
  sourceLabel: string;
  sourceUrl: string;
};

export type Certificate = {
  name: LocalizedEvidenceText;
  issuer: string;
  documentUrl: string;
};

export type WarrantyTerms = {
  summary: LocalizedEvidenceText;
  detailsUrl: string;
};

type VerifiedEvidence = {
  workshopPhotos: WorkshopPhoto[];
  reviews: VerifiedReview[];
  certificates: Certificate[];
  warranty: WarrantyTerms | null;
};

// Evidence is rendered only after a source file or public URL has been verified.
// Keeping these collections empty is intentional: the site must not publish demo proof.
export const verifiedEvidence: VerifiedEvidence = {
  workshopPhotos: [],
  reviews: [],
  certificates: [],
  warranty: null,
};
