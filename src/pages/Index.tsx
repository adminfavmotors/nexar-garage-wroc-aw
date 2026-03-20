import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo />
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
