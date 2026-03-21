import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Seo, { siteUrl } from "@/components/Seo";
import { useLang } from "@/contexts/LanguageContext";

const ServicesDirectoryPage = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Usługi mechaniczne Wrocław | Diagnostyka, opony, klima | Nexar Garage"
        description="Usługi Nexar Garage we Wrocławiu: diagnostyka komputerowa, serwis i naprawy, wymiana opon, elektryk samochodowy, klimatyzacja i geometria kół."
        canonical={`${siteUrl}/uslugi`}
        ogTitle="Usługi Nexar Garage | Mechanik Wrocław"
        ogDescription="Sprawdź pełną ofertę usług Nexar Garage we Wrocławiu i przejdź do osobnych stron z zakresem prac, FAQ oraz orientacyjnymi cenami."
      />
      <Header />

      <main className="pt-20 lg:pt-24">
        <section className="border-b border-border pt-12 pb-14 lg:pt-16 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <p className="font-inter text-[12px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {t("Oferta serwisu Wrocław", "Workshop services Wrocław")}
            </p>
            <h1 className="mt-4 max-w-5xl font-barlow text-[42px] font-extrabold uppercase leading-[0.94] text-foreground sm:text-[58px] lg:text-[74px]">
              {t("USŁUGI NEXAR GARAGE", "NEXAR GARAGE SERVICES")}
            </h1>
            <p className="mt-5 max-w-3xl font-inter text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
              {t(
                "Zebraliśmy wszystkie główne usługi w jednym miejscu, a każda z nich prowadzi do osobnej strony z opisem, FAQ i zakresem prac. Dzięki temu łatwiej szybko znaleźć odpowiedni serwis dla swojego auta.",
                "We gathered all core services in one place, and each one leads to a dedicated page with scope, FAQ and service details. This makes it easier to quickly find the right service for your car."
              )}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/#rezerwacja"
                className="inline-flex items-center justify-center border border-primary bg-primary px-7 py-3.5 font-barlow text-[14px] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                {t("PRZEJDŹ DO REZERWACJI", "GO TO BOOKING")}
              </a>
              <a
                href="/#kontakt"
                className="inline-flex items-center justify-center border border-border bg-surface px-7 py-3.5 font-barlow text-[14px] font-bold uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-elevated"
              >
                {t("ZAPYTAJ O TERMIN", "ASK ABOUT AVAILABILITY")}
              </a>
            </div>
          </div>
        </section>

        <Services />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesDirectoryPage;
