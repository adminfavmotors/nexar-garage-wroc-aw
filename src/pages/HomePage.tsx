import { SitePage } from "@/shared/layout";
import {
  BookingSection,
  ContactSection,
  HeroSection,
  ReviewsSection,
  ServicesPreviewSection,
  StatsSection,
  WhyUsSection,
} from "@/sections/home";
import { homeAutoRepairSchema, websiteSchema } from "@/features/services/seo";

const homeSeo = {
  title: "Nexar Garage WrocÄąâ€šaw | Serwis Samochodowy | Mechanik WrocÄąâ€šaw",
  description:
    "Nexar Garage Ă˘â‚¬â€ś profesjonalny serwis samochodowy we WrocÄąâ€šawiu. Diagnostyka OBD2, wymiana opon, klimatyzacja, geometria kÄ‚Ĺ‚Äąâ€š. UmÄ‚Ĺ‚w wizytĂ„â„˘ online.",
  canonical: "https://www.nexargarage.pl/",
  ogTitle: "Nexar Garage | Serwis Samochodowy WrocÄąâ€šaw",
};

const HomePage = () => {
  return (
    <SitePage
      seo={{
        title: homeSeo.title,
        description: homeSeo.description,
        canonical: homeSeo.canonical,
        ogTitle: homeSeo.ogTitle,
        ogType: "business.business",
        schema: [homeAutoRepairSchema, websiteSchema],
      }}
    >
      <HeroSection />
      <StatsSection />
      <ServicesPreviewSection />
      <WhyUsSection />
      <ReviewsSection />
      <BookingSection />
      <ContactSection />
    </SitePage>
  );
};

export default HomePage;
