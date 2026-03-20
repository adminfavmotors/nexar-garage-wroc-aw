import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasonsPl = [
  "Certyfikowani mechanicy, 10+ lat doświadczenia",
  "Transparentne ceny — wycena przed naprawą",
  "Oryginalne i certyfikowane części",
  "Bezpłatny samochód zastępczy",
  "Gwarancja 12 miesięcy na wszystkie usługi",
];

const reasonsEn = [
  "Certified mechanics, 10+ years of experience",
  "Transparent pricing — quote before repair",
  "Original and certified parts",
  "Free courtesy car",
  "12-month warranty on all services",
];

const serviceOptions = [
  { pl: "Diagnostyka komputerowa", en: "Computer Diagnostics" },
  { pl: "Serwis i naprawy", en: "Service & Repairs" },
  { pl: "Wymiana opon", en: "Tyre Service" },
  { pl: "Elektryk samochodowy", en: "Auto Electrics" },
  { pl: "Klimatyzacja", en: "Air Conditioning" },
  { pl: "Geometria kół", en: "Wheel Alignment" },
];

const WhyUs = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();
  const reasons = lang === "PL" ? reasonsPl : reasonsEn;

  const [service, setService] = useState("");
  const [carModel, setCarModel] = useState("");

  return (
    <section id="o-nas" ref={ref} className="border-b border-border pt-12 pb-14 lg:pt-16 lg:pb-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-barlow text-4xl font-extrabold uppercase text-foreground sm:text-[56px] sm:leading-[1]">
              {t("DLACZEGO NEXAR?", "WHY NEXAR?")}
            </h2>
            <div className="mt-8 flex flex-col gap-4">
              {reasons.map((reason, i) => (
                <div key={i} className="border-l-2 border-primary pl-4">
                  <p className="font-inter text-[15px] text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-surface p-8">
            <h3 className="font-barlow text-2xl font-bold uppercase text-foreground">
              {t("SZYBKA WYCENA", "QUICK QUOTE")}
            </h3>
            <p className="mt-2 font-inter text-[14px] text-muted-foreground">
              {t(
                "Wybierz usługę i podaj auto — wrócimy z wyceną.",
                "Pick a service and tell us your car — we'll get back with a quote."
              )}
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border border-border bg-background px-4 py-3 font-inter text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
              >
                <option value="">{t("Wybierz usługę", "Select service")}</option>
                {serviceOptions.map((opt, i) => (
                  <option key={i} value={opt.pl}>
                    {lang === "PL" ? opt.pl : opt.en}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder={t("Marka i model pojazdu", "Car make & model")}
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                className="w-full border border-border bg-background px-4 py-3 font-inter text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors duration-300 focus:border-accent"
              />
              <button className="w-full bg-primary py-3.5 font-barlow text-[14px] font-bold uppercase tracking-wider text-primary-foreground transition-opacity duration-300 hover:opacity-90 active:scale-[0.97]">
                {t("UZYSKAJ WYCENĘ", "GET A QUOTE")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
