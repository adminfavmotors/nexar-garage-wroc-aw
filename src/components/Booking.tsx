import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const serviceOptions = [
  { pl: "Diagnostyka komputerowa", en: "Computer Diagnostics" },
  { pl: "Serwis i naprawy", en: "Service & Repairs" },
  { pl: "Wymiana opon", en: "Tyre Service" },
  { pl: "Elektryk samochodowy", en: "Auto Electrics" },
  { pl: "Klimatyzacja", en: "Air Conditioning" },
  { pl: "Geometria kół", en: "Wheel Alignment" },
];

const Booking = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full border border-border bg-background px-4 py-3 font-inter text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors duration-300 focus:border-accent";

  if (submitted) {
    return (
      <section id="rezerwacja" ref={ref} className="border-b border-border bg-surface pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-barlow text-[48px] font-extrabold uppercase text-foreground">
            {t("DZIĘKUJEMY", "THANK YOU")}
          </h2>
          <p className="mt-4 font-inter text-base text-muted-foreground">
            {t(
              "Potwierdzimy Twój termin wkrótce.",
              "We'll confirm your appointment shortly."
            )}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="rezerwacja" ref={ref} className="border-b border-border bg-surface pt-12 pb-14 lg:pt-16 lg:pb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-barlow text-4xl font-extrabold uppercase text-foreground sm:text-[56px] sm:leading-[1]">
          {t("ZAREZERWUJ TERMIN", "BOOK AN APPOINTMENT")}
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mx-auto mt-8 flex max-w-[600px] flex-col gap-4 sm:mt-10"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder={t("Imię i nazwisko", "Full name")}
              required
              className={inputClass}
            />
            <input
              type="tel"
              placeholder={t("Telefon", "Phone")}
              required
              className={inputClass}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder={t("Marka i model", "Make & model")}
              required
              className={inputClass}
            />
            <input
              type="text"
              placeholder={t("Rok produkcji", "Year")}
              className={inputClass}
            />
          </div>
          <select required className={inputClass}>
            <option value="">{t("Wybierz usługę", "Select service")}</option>
            {serviceOptions.map((opt, i) => (
              <option key={i} value={opt.pl}>
                {lang === "PL" ? opt.pl : opt.en}
              </option>
            ))}
          </select>
          <input
            type="date"
            required
            className={inputClass}
          />
          <textarea
            rows={4}
            placeholder={t("Uwagi (opcjonalnie)", "Notes (optional)")}
            className={inputClass + " resize-none"}
          />
          <button
            type="submit"
            className="w-full bg-primary py-4 font-barlow text-[18px] font-bold uppercase tracking-wider text-primary-foreground transition-opacity duration-300 hover:opacity-90 active:scale-[0.98]"
          >
            {t("ZAREZERWUJ TERMIN", "BOOK NOW")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
