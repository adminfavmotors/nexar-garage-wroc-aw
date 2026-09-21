import { useLang } from "@/features/language";

const ServiceStandardSection = () => {
  const { t } = useLang();
  const steps = [
    [
      t("Opisz problem", "Tell us what is wrong"),
      t(
        "Zadzwoń lub wyślij formularz. Podaj model auta i opisz objawy — nie musisz znać nazwy usługi.",
        "Call or send the form. Tell us the car model and symptoms — you do not need to know which service to choose.",
      ),
    ],
    [
      t("Ustal termin i zakres", "Agree on a date and the work"),
      t(
        "Potwierdzimy wizytę telefonicznie. Po sprawdzeniu auta przedstawimy wycenę do Twojej akceptacji.",
        "We confirm your visit by phone. After checking the car, we provide an estimate for your approval.",
      ),
    ],
    [
      t("Odbierz sprawdzone auto", "Collect your car"),
      t(
        "Wykonamy uzgodnione prace. Przy odbiorze omówimy naprawę i zalecenia dotyczące dalszej jazdy.",
        "We complete the agreed work. At collection, we explain the repair and recommendations for future driving.",
      ),
    ],
  ];
  return (
    <section id="standard" className="section-block process-section">
      <div className="site-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <figure className="process-photo">
          <img
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1000&q=85"
            srcSet="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1000&q=85 1000w"
            sizes="(min-width: 1024px) 45vw, 100vw"
            width="1000"
            height="1000"
            loading="lazy"
            alt={t(
              "Praca przy silniku samochodu — zdjęcie ilustracyjne",
              "Work on a car engine — illustrative stock photo",
            )}
          />
          <figcaption>
            {t("Zdjęcie ilustracyjne", "Illustrative photo")} · Tim Mossholder /
            Unsplash
          </figcaption>
        </figure>
        <div>
          <span className="eyebrow">
            {t("Od zgłoszenia do odbioru", "From booking to collection")}
          </span>
          <h2 className="section-title mt-4">
            {t(
              "Nie musisz znać się na mechanice. Od tego jesteśmy.",
              "You do not need to be a mechanic. That is our job.",
            )}
          </h2>
          <ol className="mt-8 grid gap-6">
            {steps.map(([title, copy], i) => (
              <li key={title} className="flex gap-4">
                <span className="process-number">{i + 1}</span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
export default ServiceStandardSection;
