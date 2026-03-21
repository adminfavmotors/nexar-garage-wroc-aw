import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    num: "01",
    titlePl: "Diagnostyka komputerowa",
    titleEn: "Computer Diagnostics",
    descPl: "Profesjonalna diagnostyka z użyciem najnowszego oprogramowania i sprzętu OBD.",
    descEn: "Professional diagnostics using the latest OBD software and equipment.",
    pricePl: "100-250 zł",
    priceEn: "PLN 100-250",
  },
  {
    num: "02",
    titlePl: "Serwis i naprawy",
    titleEn: "Service & Repairs",
    descPl: "Kompleksowe naprawy mechaniczne - silnik, skrzynia biegów, zawieszenie.",
    descEn: "Comprehensive mechanical repairs - engine, gearbox, suspension.",
    pricePl: "od 280 zł / h",
    priceEn: "from PLN 280 / h",
  },
  {
    num: "03",
    titlePl: "Wymiana opon",
    titleEn: "Tyre Service",
    descPl: "Sezonowa wymiana, wyważanie, przechowywanie opon w naszym magazynie.",
    descEn: "Seasonal swap, balancing, and tyre storage at our facility.",
    pricePl: "160-280 zł",
    priceEn: "PLN 160-280",
  },
  {
    num: "04",
    titlePl: "Elektryk samochodowy",
    titleEn: "Auto Electrics",
    descPl: "Diagnostyka i naprawa instalacji elektrycznej, akumulatory, alternatory.",
    descEn: "Electrical diagnostics and repair, batteries, alternators.",
    pricePl: "od 300 zł",
    priceEn: "from PLN 300",
  },
  {
    num: "05",
    titlePl: "Klimatyzacja",
    titleEn: "Air Conditioning",
    descPl: "Serwis klimatyzacji - nabijanie, odgrzybianie, kontrola szczelności.",
    descEn: "A/C service - recharging, sanitizing, leak testing.",
    pricePl: "150-290 zł",
    priceEn: "PLN 150-290",
  },
  {
    num: "06",
    titlePl: "Geometria kół",
    titleEn: "Wheel Alignment",
    descPl: "Precyzyjne ustawienie geometrii kół na nowoczesnym stanowisku 3D.",
    descEn: "Precise wheel alignment on a modern 3D alignment system.",
    pricePl: "180-250 zł",
    priceEn: "PLN 180-250",
  },
];

const ServiceCard = ({
  service,
  lang,
}: {
  service: (typeof services)[0];
  lang: string;
}) => {
  return (
    <div className="group flex flex-col border border-border bg-surface p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:border-accent hover:shadow-[0_18px_34px_rgba(0,0,0,0.24),0_0_22px_rgba(255,255,255,0.03)] sm:p-7 lg:p-8">
      <span className="font-barlow text-[13px] font-bold text-[hsl(0_0%_34%)]">
        {service.num}
      </span>
      <h3 className="mt-4 font-barlow text-[22px] font-bold text-foreground">
        {lang === "PL" ? service.titlePl : service.titleEn}
      </h3>
      <p className="mt-3 font-inter text-[14px] leading-relaxed text-muted-foreground">
        {lang === "PL" ? service.descPl : service.descEn}
      </p>

      <div className="mt-6 border-t border-border/80 pt-5">
        <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {lang === "PL" ? "Ceny orientacyjne" : "Estimated pricing"}
        </p>
        <p className="mt-2 font-barlow text-[26px] font-bold uppercase tracking-[0.03em] text-accent transition-colors duration-500 group-hover:text-foreground sm:text-[28px]">
          {lang === "PL" ? service.pricePl : service.priceEn}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();

  return (
    <section id="uslugi" ref={ref} className="border-b border-border pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          - {t("NASZE USŁUGI", "OUR SERVICES")} -
        </p>
        <h2 className="mt-3 text-center font-barlow text-[38px] font-extrabold uppercase text-foreground sm:text-[48px] sm:leading-[1] lg:text-[56px]">
          {t("KOMPLEKSOWA OBSŁUGA", "COMPREHENSIVE SERVICE")}
        </h2>

        <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.num} service={service} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
