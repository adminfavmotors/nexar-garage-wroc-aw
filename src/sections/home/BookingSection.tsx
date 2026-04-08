import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { enUS, pl } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useLang } from "@/features/language";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Calendar } from "@/shared/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { servicePages } from "@/features/services/data";

const BookingSection = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [dateError, setDateError] = useState(false);

  const serviceOptions = useMemo(
    () => [
      ...servicePages.map((servicePage) => ({
        value: servicePage.bookingValue,
        pl: servicePage.title.pl,
        en: servicePage.title.en,
      })),
      { value: "other", pl: "Inne", en: "Other" },
    ],
    []
  );

  useEffect(() => {
    const requestedService = searchParams.get("service");
    if (!requestedService) return;

    const isSupported = serviceOptions.some((option) => option.value === requestedService);
    if (isSupported) {
      setService(requestedService);
    }
  }, [searchParams, serviceOptions]);

  if (submitted) {
    return (
      <section id="rezerwacja" ref={ref} className="section-block border-b border-border/80">
        <div className="site-shell">
          <div className="surface-panel-strong mx-auto grid max-w-3xl gap-4 px-6 py-10 text-center sm:px-10">
            <span className="eyebrow mx-auto">{t("Zgłoszenie przyjęte", "Request received")}</span>
            <h2 className="section-title text-balance">
              {t("Dziękujemy. Potwierdzimy termin możliwie szybko.", "Thank you. We will confirm the appointment shortly.")}
            </h2>
            <p className="section-copy mx-auto measure-copy">
              {t(
                "Wracamy z potwierdzeniem po sprawdzeniu dostępności stanowiska i zakresu prac.",
                "We will come back with confirmation after checking bay availability and the repair scope."
              )}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rezerwacja" ref={ref} className="section-block border-b border-border/80">
      <div className="site-shell editorial-grid">
        <div className="section-stack">
          <div className="section-intro">
            <span className="eyebrow">{t("Rezerwacja wizyty", "Book an appointment")}</span>
            <div className="grid gap-5">
              <h2 className="section-title text-balance">
                {t("Umów wizytę bez formularza, który wygląda jak zaplecze administracyjne.", "Book an appointment without a form that feels like back-office admin.")}
              </h2>
              <p className="section-copy measure-copy-wide">
                {t(
                  "Potrzebujemy tylko najważniejszych danych: kontaktu, auta, zakresu prac i preferowanego terminu. Resztę dopracujemy już po zgłoszeniu.",
                  "We only need the essentials: your contact details, the car, the scope of work and a preferred date. We will refine the rest after the request is in."
                )}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="surface-panel-soft px-5 py-5">
              <p className="font-barlow text-[1.8rem] leading-none text-primary">01</p>
              <p className="mt-3 font-inter text-[0.92rem] leading-7 text-foreground/90">
                {t("Wysyłasz zgłoszenie z podstawowym zakresem naprawy.", "You send the request with the basic repair scope.")}
              </p>
            </div>
            <div className="surface-panel-soft px-5 py-5">
              <p className="font-barlow text-[1.8rem] leading-none text-primary">02</p>
              <p className="mt-3 font-inter text-[0.92rem] leading-7 text-foreground/90">
                {t("Potwierdzamy termin i doprecyzowujemy szczegóły telefonicznie.", "We confirm the date and clarify details by phone.")}
              </p>
            </div>
            <div className="surface-panel-soft px-5 py-5">
              <p className="font-barlow text-[1.8rem] leading-none text-primary">03</p>
              <p className="mt-3 font-inter text-[0.92rem] leading-7 text-foreground/90">
                {t("Auto trafia do serwisu z jasnym zakresem i przewidywalnym przebiegiem.", "Your car arrives with a clear scope and a predictable service flow.")}
              </p>
            </div>
          </div>
        </div>

        <div className="surface-panel p-6 sm:p-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!date) {
                setDateError(true);
                return;
              }
              setSubmitted(true);
            }}
            className="grid gap-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-shell">
                <span className="field-label">{t("Imię i nazwisko", "Full name")}</span>
                <input type="text" placeholder={t("Jan Kowalski", "James Mitchell")} required className="field-input" />
              </label>
              <label className="field-shell">
                <span className="field-label">{t("Telefon", "Phone")}</span>
                <input type="tel" placeholder="+48 123 456 789" required className="field-input" />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-shell">
                <span className="field-label">{t("Marka i model", "Make and model")}</span>
                <input type="text" placeholder={t("Audi A4", "Audi A4")} required className="field-input" />
              </label>
              <label className="field-shell">
                <span className="field-label">{t("Rok produkcji", "Year")}</span>
                <input type="text" placeholder="2018" className="field-input" />
              </label>
            </div>

            <label className="field-shell">
              <span className="field-label">{t("Zakres usługi", "Service scope")}</span>
              <select required value={service} onChange={(e) => setService(e.target.value)} className="field-input">
                <option value="">{t("Wybierz usługę", "Select service")}</option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {lang === "PL" ? opt.pl : opt.en}
                  </option>
                ))}
              </select>
            </label>

            {service === "other" && (
              <label className="field-shell">
                <span className="field-label">{t("Opis problemu", "Describe the issue")}</span>
                <textarea
                  rows={4}
                  required
                  placeholder={t("Opisz, jaki remont lub naprawa są potrzebne", "Describe the repair you need")}
                  className="field-input resize-none"
                />
              </label>
            )}

            <label className="field-shell">
              <span className="field-label">{t("Preferowany termin", "Preferred date")}</span>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "field-input flex items-center justify-between text-left",
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
                <PopoverContent align="start" className="w-[calc(100vw-2rem)] max-w-[360px] border-border bg-[hsl(var(--surface))] p-0 sm:w-auto">
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
              {dateError && <p className="field-note text-primary">{t("Wybierz datę wizyty", "Select an appointment date")}</p>}
            </label>

            <label className="field-shell">
              <span className="field-label">{t("Dodatkowe uwagi", "Additional notes")}</span>
              <textarea rows={4} placeholder={t("Uwagi opcjonalne", "Optional notes")} className="field-input resize-none" />
            </label>

            <div className="surface-panel-soft grid gap-4 px-4 py-4 sm:px-5">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-border bg-background accent-[hsl(var(--primary))]"
                />
                <span className="field-note">
                  {t(
                    "Wyrażam zgodę na przetwarzanie moich danych osobowych przez Nexar Garage Sp. z o.o. w celu kontaktu i obsługi zgłoszenia serwisowego zgodnie z informacją RODO.",
                    "I consent to Nexar Garage Sp. z o.o. processing my personal data for contact and service booking purposes in line with the privacy notice."
                  )}
                </span>
              </label>
              <p className="field-note">
                {t(
                  "Administratorem danych jest Nexar Garage Sp. z o.o. Dane z formularza wykorzystujemy wyłącznie do kontaktu i ustalenia terminu wizyty.",
                  "The data controller is Nexar Garage Sp. z o.o. We use the form data only to contact you and arrange the appointment."
                )}
              </p>
            </div>

            <button type="submit" className="premium-button-primary w-full">
              {t("Zarezerwuj termin", "Book now")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
