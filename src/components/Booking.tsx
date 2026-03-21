import { useState } from "react";
import { format } from "date-fns";
import { enUS, pl } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const serviceOptions = [
  { value: "diagnostics", pl: "Diagnostyka komputerowa", en: "Computer Diagnostics" },
  { value: "repairs", pl: "Serwis i naprawy", en: "Service & Repairs" },
  { value: "tyres", pl: "Wymiana opon", en: "Tyre Service" },
  { value: "electrics", pl: "Elektryk samochodowy", en: "Auto Electrics" },
  { value: "ac", pl: "Klimatyzacja", en: "Air Conditioning" },
  { value: "alignment", pl: "Geometria kół", en: "Wheel Alignment" },
  { value: "other", pl: "Inne", en: "Other" },
];

const Booking = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [dateError, setDateError] = useState(false);

  const inputClass =
    "w-full border border-border bg-background px-4 py-3 font-inter text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors duration-300 focus:border-accent";

  if (submitted) {
    return (
      <section
        id="rezerwacja"
        ref={ref}
        className="border-b border-border bg-surface pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-20"
      >
        <div className="container mx-auto px-4 text-center sm:px-6">
          <h2 className="font-barlow text-[40px] font-extrabold uppercase text-foreground sm:text-[48px]">
            {t("DZIĘKUJEMY", "THANK YOU")}
          </h2>
          <p className="mt-4 font-inter text-base text-muted-foreground">
            {t("Potwierdzimy Twój termin wkrótce.", "We'll confirm your appointment shortly.")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="rezerwacja"
      ref={ref}
      className="border-b border-border bg-surface pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center font-barlow text-[38px] font-extrabold uppercase text-foreground sm:text-[48px] sm:leading-[1] lg:text-[56px]">
          {t("ZAREZERWUJ TERMIN", "BOOK AN APPOINTMENT")}
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!date) {
              setDateError(true);
              return;
            }
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

          <select
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClass}
          >
            <option value="">{t("Wybierz usługę", "Select service")}</option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {lang === "PL" ? opt.pl : opt.en}
              </option>
            ))}
          </select>

          {service === "other" && (
            <textarea
              rows={4}
              required
              placeholder={t(
                "Opisz, jaki remont lub naprawa są potrzebne",
                "Describe the repair you need"
              )}
              className={inputClass + " resize-none"}
            />
          )}

          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  inputClass,
                  "flex items-center justify-between text-left",
                  dateError && "border-primary",
                  !date && "text-muted-foreground"
                )}
              >
                <span>
                  {date
                    ? format(date, "PPP", { locale: lang === "PL" ? pl : enUS })
                    : t("Wybierz datę", "Select date")}
                </span>
                <CalendarIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-[calc(100vw-2rem)] max-w-[360px] border-border bg-surface p-0 sm:w-auto">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(selectedDate) => {
                  setDate(selectedDate);
                  if (selectedDate) setDateError(false);
                }}
                locale={lang === "PL" ? pl : enUS}
                disabled={(currentDate) => currentDate < new Date(new Date().setHours(0, 0, 0, 0))}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {dateError && (
            <p className="font-inter text-[13px] text-primary">
              {t("Wybierz datę wizyty", "Select an appointment date")}
            </p>
          )}

          <textarea
            rows={4}
            placeholder={t("Uwagi (opcjonalnie)", "Notes (optional)")}
            className={inputClass + " resize-none"}
          />

          <label className="flex items-start gap-3 border border-border bg-background px-4 py-4">
            <input
              type="checkbox"
              required
              className="mt-1 h-4 w-4 border-border bg-background accent-[hsl(8_100%_40%)]"
            />
            <span className="font-inter text-[13px] leading-relaxed text-muted-foreground">
              {t(
                "Wyrażam zgodę na przetwarzanie moich danych osobowych przez Nexar Garage Sp. z o.o. w celu kontaktu i obsługi zgłoszenia serwisowego zgodnie z informacją RODO.",
                "I consent to Nexar Garage Sp. z o.o. processing my personal data for contact and service booking purposes in line with the privacy notice."
              )}
            </span>
          </label>

          <p className="font-inter text-[12px] leading-relaxed text-muted-foreground/80">
            {t(
              "Administratorem danych jest Nexar Garage Sp. z o.o. Dane z formularza wykorzystujemy wyłącznie do kontaktu i ustalenia terminu wizyty.",
              "The data controller is Nexar Garage Sp. z o.o. We use the form data only to contact you and arrange the appointment."
            )}
          </p>

          <button
            type="submit"
            className="w-full bg-primary py-4 font-barlow text-[16px] font-bold uppercase tracking-wider text-primary-foreground transition-opacity duration-300 hover:opacity-90 active:scale-[0.98] sm:text-[18px]"
          >
            {t("ZAREZERWUJ TERMIN", "BOOK NOW")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
