import { SitePage } from "@/shared/layout";
import {
  BookingSection,
  ContactSection,
  HeroSection,
  ServiceStandardSection,
  ServicesPreviewSection,
  WhyUsSection,
} from "@/sections/home";
import { getWebsiteSchema, homeAutoRepairSchema } from "@/features/services/seo";
import { useLang } from "@/features/language";

const HomePage = () => {
  const { lang, t } = useLang();

  return (
    <SitePage
      seo={{
        title: t(
          "Nexar Garage Wrocław | Serwis samochodowy | Mechanik Wrocław",
          "Nexar Garage Wroclaw | Car service and repairs",
        ),
        description: t(
          "Nexar Garage — profesjonalny serwis samochodowy we Wrocławiu. Diagnostyka OBD2, naprawy, opony, klimatyzacja i geometria kół.",
          "Nexar Garage is a professional car workshop in Wroclaw offering OBD2 diagnostics, repairs, tyres, air conditioning and wheel alignment.",
        ),
        canonical: "https://www.nexargarage.pl/",
        ogTitle: t(
          "Nexar Garage | Serwis samochodowy Wrocław",
          "Nexar Garage | Car workshop in Wroclaw",
        ),
        ogType: "business.business",
        schema: [homeAutoRepairSchema, getWebsiteSchema(lang)],
      }}
    >
      <HeroSection />
      <ServicesPreviewSection />
      <WhyUsSection />
      <ServiceStandardSection />
      <BookingSection />
      <ContactSection />
    </SitePage>
  );
};

export default HomePage;
