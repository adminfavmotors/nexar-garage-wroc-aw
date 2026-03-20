import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    num: "01",
    titlePl: "Diagnostyka komputerowa",
    titleEn: "Computer Diagnostics",
    descPl: "Profesjonalna diagnostyka z użyciem najnowszego oprogramowania i sprzętu OBD.",
    descEn: "Professional diagnostics using the latest OBD software and equipment.",
  },
  {
    num: "02",
    titlePl: "Serwis i naprawy",
    titleEn: "Service & Repairs",
    descPl: "Kompleksowe naprawy mechaniczne — silnik, skrzynia biegów, zawieszenie.",
    descEn: "Comprehensive mechanical repairs — engine, gearbox, suspension.",
  },
  {
    num: "03",
    titlePl: "Wymiana opon",
    titleEn: "Tyre Service",
    descPl: "Sezonowa wymiana, wyważanie, przechowywanie opon w naszym magazynie.",
    descEn: "Seasonal swap, balancing, and tyre storage at our facility.",
  },
  {
    num: "04",
    titlePl: "Elektryk samochodowy",
    titleEn: "Auto Electrics",
    descPl: "Diagnostyka i naprawa instalacji elektrycznej, akumulatory, alternatory.",
    descEn: "Electrical diagnostics and repair, batteries, alternators.",
  },
  {
    num: "05",
    titlePl: "Klimatyzacja",
    titleEn: "Air Conditioning",
    descPl: "Serwis klimatyzacji — nabijanie, odgrzybianie, kontrola szczelności.",
    descEn: "A/C service — recharging, sanitizing, leak testing.",
  },
  {
    num: "06",
    titlePl: "Geometria kół",
    titleEn: "Wheel Alignment",
    descPl: "Precyzyjne ustawienie geometrii kół na nowoczesnym stanowisku 3D.",
    descEn: "Precise wheel alignment on a modern 3D alignment system.",
  },
];

const ServiceCard = ({
  service,
  lang,
  t,
}: {
  service: (typeof services)[0];
  lang: string;
  t: (pl: string, en: string) => string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col border border-border bg-surface p-8 transition-colors duration-300 hover:border-accent"
    >
      <span className="font-barlow text-[13px] font-bold text-[hsl(0_0%_20%)]">
        {service.num}
      </span>
      <h3 className="mt-4 font-barlow text-[22px] font-bold text-foreground">
        {lang === "PL" ? service.titlePl : service.titleEn}
      </h3>
      <p className="mt-3 font-inter text-[14px] leading-relaxed text-muted-foreground">
        {lang === "PL" ? service.descPl : service.descEn}
      </p>
      <span
        className={`mt-6 font-inter text-[13px] text-accent transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {t("Dowiedz się więcej →", "Learn more →")}
      </span>
    </div>
  );
};

const Services = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();

  return (
    <section id="uslugi" ref={ref} className="border-b border-border pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="container mx-auto px-6">
        <p className="text-center font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          — {t("NASZE USŁUGI", "OUR SERVICES")} —
        </p>
        <h2 className="mt-4 text-center font-barlow text-4xl font-extrabold uppercase text-foreground sm:text-[56px] sm:leading-[1]">
          {t("KOMPLEKSOWA OBSŁUGA", "COMPREHENSIVE SERVICE")}
        </h2>

        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.num} service={service} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
