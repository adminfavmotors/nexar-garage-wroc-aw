import { type FormEvent, useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { enUS, pl } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useLang } from "@/features/language";
import { servicePages } from "@/features/services/data";
import { cn } from "@/lib/utils";
import { appRoutes, RouteLink } from "@/shared/navigation";
import { Calendar } from "@/shared/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";

type SubmitState = "idle" | "sending" | "error";

const RequiredMark = () => (
  <span aria-hidden="true" className="text-primary">
    {" "}*
  </span>
);

const createRequestId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const serviceOptions = [
  ...servicePages.map((servicePage) => ({
    value: servicePage.bookingValue,
    pl: servicePage.title.pl,
    en: servicePage.title.en,
  })),
  { value: "other", pl: "Inne", en: "Other" },
];

const BookingSection = () => {
  const { lang, t } = useLang();
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [dateError, setDateError] = useState(false);
  const dateButtonRef = useRef<HTMLButtonElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const requestIdRef = useRef<string | null>(null);

  useEffect(() => {
    const requestedService = searchParams.get("service");
    if (!requestedService) return;

    if (serviceOptions.some((option) => option.value === requestedService)) {
      setService(requestedService);
    }
  }, [searchParams]);

  useEffect(() => {
    if (submitState === "error") errorSummaryRef.current?.focus();
  }, [submitState]);

  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("idle");

    if (!date) {
      setDateError(true);
      dateButtonRef.current?.focus();
      return;
    }

    setDateError(false);
    setSubmitState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    requestIdRef.current ??= createRequestId();

    const payload = {
      requestId: requestIdRef.current,
      lang,
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      vehicle: formData.get("vehicle"),
      year: formData.get("year"),
      service: formData.get("service"),
      problem: formData.get("problem"),
      preferredDate: format(date, "yyyy-MM-dd"),
      notes: formData.get("notes"),
      consent: formData.get("consent") === "yes",
      company: formData.get("company"),
    };

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12_000);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || result?.ok !== true) {
        throw new Error("booking_request_failed");
      }

      setSubmitted(true);
    } catch {
      setSubmitState("error");
    } finally {
      window.clearTimeout(timeout);
    }
  };

  if (submitted) {
    return (
      <section id="rezerwacja" className="section-block border-b border-border/80">
        <div className="site-shell">
          <div
            role="status"
            aria-live="polite"
            className="surface-panel mx-auto grid max-w-3xl gap-4 px-6 py-10 text-center sm:px-10"
          >
            <span className="eyebrow mx-auto">{t("Zgłoszenie wysłane", "Request sent")}</span>
            <h2 ref={successHeadingRef} tabIndex={-1} className="section-title text-balance focus:outline-none">
              {t(
                "Dziękujemy. Potwierdzimy termin możliwie szybko.",
                "Thank you. We will confirm the appointment shortly.",
              )}
            </h2>
            <p className="section-copy mx-auto measure-copy">
              {t(
                "Zgłoszenie trafiło do warsztatu. Wrócimy z potwierdzeniem po sprawdzeniu dostępności stanowiska i zakresu prac.",
                "Your request has reached the workshop. We will confirm it after checking bay availability and the repair scope.",
              )}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rezerwacja" className="section-block border-b border-border/80">
      <div className="site-shell editorial-grid">
        <div className="section-stack">
          <div className="section-intro">
            <span className="eyebrow">{t("Rezerwacja wizyty", "Book an appointment")}</span>
            <div className="grid gap-5">
              <h2 className="section-title text-balance">
                {t(
                  "Zgłoś auto. Termin potwierdzimy telefonicznie.",
                  "Tell us about your car. We will confirm the date by phone.",
                )}
              </h2>
              <p className="section-copy measure-copy-wide">
                {t(
                  "Potrzebujemy tylko najważniejszych danych: kontaktu, auta, zakresu prac i preferowanego terminu. Resztę dopracujemy już po zgłoszeniu.",
                  "We only need the essentials: your contact details, the car, the scope of work and a preferred date. We will refine the rest after the request is in.",
                )}
              </p>
              <div className="max-w-[17rem]">
                <div className="accent-rule" />
              </div>
            </div>
          </div>

          <div className="grid border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-border">
            <div className="border-b border-border py-5 sm:border-b-0 sm:pr-5">
              <p className="font-mono text-sm font-semibold text-primary">01</p>
              <p className="body-relaxed mt-2 text-foreground/84">
                {t(
                  "Wysyłasz zgłoszenie z podstawowym zakresem naprawy.",
                  "You send the request with the basic repair scope.",
                )}
              </p>
            </div>
            <div className="border-b border-border py-5 sm:border-b-0 sm:px-5">
              <p className="font-mono text-sm font-semibold text-primary">02</p>
              <p className="body-relaxed mt-2 text-foreground/84">
                {t(
                  "Potwierdzamy termin i doprecyzowujemy szczegóły telefonicznie.",
                  "We confirm the date and clarify details by phone.",
                )}
              </p>
            </div>
            <div className="py-5 sm:pl-5">
              <p className="font-mono text-sm font-semibold text-primary">03</p>
              <p className="body-relaxed mt-2 text-foreground/84">
                {t(
                  "Auto trafia do serwisu z jasnym zakresem i przewidywalnym przebiegiem.",
                  "Your car arrives with a clear scope and a predictable service flow.",
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="surface-panel p-6 sm:p-8">
          <form id="booking-form" onSubmit={handleSubmit} aria-busy={submitState === "sending"} className="grid gap-6">
            <p className="field-note">
              <span aria-hidden="true" className="text-primary">*</span>{" "}
              {t("Pole wymagane", "Required field")}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <label htmlFor="booking-full-name" className="field-shell">
                <span className="field-label">{t("Imię i nazwisko", "Full name")}<RequiredMark /></span>
                <input
                  id="booking-full-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  placeholder={t("Jan Kowalski", "James Mitchell")}
                  required
                  className="field-input"
                />
              </label>
              <label htmlFor="booking-phone" className="field-shell">
                <span className="field-label">{t("Telefon", "Phone")}<RequiredMark /></span>
                <input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={30}
                  placeholder="+48 123 456 789"
                  required
                  className="field-input"
                />
              </label>
            </div>

            <label htmlFor="booking-email" className="field-shell">
              <span className="field-label">{t("E-mail — opcjonalnie", "Email — optional")}</span>
              <input
                id="booking-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={160}
                placeholder="email@example.com"
                className="field-input"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label htmlFor="booking-vehicle" className="field-shell">
                <span className="field-label">{t("Marka i model", "Make and model")}<RequiredMark /></span>
                <input
                  id="booking-vehicle"
                  name="vehicle"
                  type="text"
                  autoComplete="off"
                  maxLength={100}
                  placeholder="Audi A4"
                  required
                  className="field-input"
                />
              </label>
              <label htmlFor="booking-year" className="field-shell">
                <span className="field-label">{t("Rok produkcji", "Year")}</span>
                <input
                  id="booking-year"
                  name="year"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  pattern="[0-9]{4}"
                  maxLength={4}
                  placeholder="2018"
                  className="field-input"
                />
              </label>
            </div>

            <label htmlFor="booking-service" className="field-shell">
              <span className="field-label">{t("Zakres usługi", "Service scope")}<RequiredMark /></span>
              <select
                id="booking-service"
                name="service"
                required
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="field-input"
              >
                <option value="">{t("Wybierz usługę", "Select service")}</option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {lang === "PL" ? option.pl : option.en}
                  </option>
                ))}
              </select>
            </label>

            {service === "other" && (
              <label htmlFor="booking-problem" className="field-shell">
                <span className="field-label">{t("Opis problemu", "Describe the issue")}<RequiredMark /></span>
                <textarea
                  id="booking-problem"
                  name="problem"
                  rows={4}
                  maxLength={1500}
                  required
                  placeholder={t(
                    "Opisz, jaki remont lub naprawa są potrzebne",
                    "Describe the repair you need",
                  )}
                  className="field-input resize-none"
                />
              </label>
            )}

            <div className="field-shell">
              <span id="preferred-date-label" className="field-label">
                {t("Preferowany termin", "Preferred date")}<RequiredMark />
              </span>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    ref={dateButtonRef}
                    id="booking-preferred-date"
                    type="button"
                    aria-labelledby="preferred-date-label preferred-date-value"
                    aria-describedby={dateError ? "preferred-date-error" : undefined}
                    aria-invalid={dateError}
                    className={cn(
                      "field-input flex items-center justify-between text-left",
                      dateError && "border-primary",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <span id="preferred-date-value">
                      {date
                        ? format(date, "PPP", { locale: lang === "PL" ? pl : enUS })
                        : t("Wybierz datę", "Select date")}
                    </span>
                    <CalendarIcon aria-hidden="true" className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="w-[calc(100vw-2rem)] max-w-[360px] border-border bg-[hsl(var(--surface))] p-0 sm:w-auto"
                >
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
              <input
                id="booking-preferred-date-value"
                name="preferredDate"
                type="hidden"
                value={date ? format(date, "yyyy-MM-dd") : ""}
              />
              {dateError && (
                <p id="preferred-date-error" role="alert" className="field-note text-primary">
                  {t("Wybierz datę wizyty.", "Select an appointment date.")}
                </p>
              )}
            </div>

            <label htmlFor="booking-notes" className="field-shell">
              <span className="field-label">{t("Dodatkowe uwagi", "Additional notes")}</span>
              <textarea
                id="booking-notes"
                name="notes"
                rows={4}
                maxLength={1500}
                placeholder={t("Uwagi opcjonalne", "Optional notes")}
                className="field-input resize-none"
              />
            </label>

            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="booking-company">Company</label>
              <input id="booking-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-4 border-y border-border py-5">
              <div className="flex items-start gap-3">
                <input
                  id="booking-consent"
                  name="consent"
                  type="checkbox"
                  value="yes"
                  required
                  className="mt-1 h-4 w-4 rounded border-border bg-background accent-[hsl(var(--primary))]"
                />
                <div className="field-note">
                  <label htmlFor="booking-consent">
                    {t(
                      "Wyrażam zgodę na przetwarzanie moich danych przez Nexar Garage Sp. z o.o. w celu kontaktu i obsługi zgłoszenia serwisowego.",
                      "I consent to Nexar Garage Sp. z o.o. processing my data to contact me and handle this service request.",
                    )}
                    <RequiredMark />
                  </label>{" "}
                  <RouteLink to={appRoutes.privacy} className="underline underline-offset-2 hover:text-foreground">
                    {t("Informacja RODO", "Privacy notice")}
                  </RouteLink>
                </div>
              </div>
              <p className="field-note">
                {t(
                  "Administratorem danych jest Nexar Garage Sp. z o.o. Dane wykorzystujemy wyłącznie do kontaktu i ustalenia terminu wizyty.",
                  "The data controller is Nexar Garage Sp. z o.o. We use this data only to contact you and arrange the appointment.",
                )}
              </p>
            </div>

            {submitState === "error" && (
              <div
                ref={errorSummaryRef}
                role="alert"
                tabIndex={-1}
                className="border border-primary px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <p className="font-body font-semibold text-foreground">
                  {t("Nie udało się wysłać zgłoszenia.", "We could not send your request.")}
                </p>
                <p className="field-note mt-2">
                  {t("Spróbuj ponownie lub zadzwoń pod numer", "Try again or call")}{" "}
                  <a href="tel:+48712345678" className="text-foreground underline underline-offset-2">
                    +48 71 234 56 78
                  </a>
                  .
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitState === "sending"}
              className="premium-button-primary w-full"
            >
              {submitState === "sending"
                ? t("Wysyłanie…", "Sending…")
                : t("Wyślij zgłoszenie", "Send request")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
