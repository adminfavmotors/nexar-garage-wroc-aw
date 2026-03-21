import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo, { homeAutoRepairSchema } from "@/components/Seo";

const homeSeo = {
  title: "Nexar Garage Wrocław | Serwis Samochodowy | Mechanik Wrocław",
  description:
    "Nexar Garage – profesjonalny serwis samochodowy we Wrocławiu. Diagnostyka OBD2, wymiana opon, klimatyzacja, geometria kół. Umów wizytę online.",
  canonical: "https://www.nexargarage.pl/",
  ogTitle: "Nexar Garage | Serwis Samochodowy Wrocław",
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={homeSeo.title}
        description={homeSeo.description}
        canonical={homeSeo.canonical}
        ogTitle={homeSeo.ogTitle}
        ogType="business.business"
        schema={[homeAutoRepairSchema]}
      />
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WhyUs />
        <Reviews />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
