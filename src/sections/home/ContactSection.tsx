import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "@/features/language";
import { useCookieConsent } from "@/features/cookie-consent";

const mapAddress = "ul. Świdnicka 18, 50-068 Wrocław";
const mapQuery =
  "https://maps.google.com/?hl=pl&q=ul.+%C5%9Awidnicka+18,+Wroc%C5%82aw";
const mapEmbedSrc =
  "https://www.google.com/maps?hl=pl&q=ul.+%C5%9Awidnicka+18,+Wroc%C5%82aw&z=15&output=embed";

const ContactSection = () => {
  const { t } = useLang();
  const { allowThirdPartyContent, acceptAll } = useCookieConsent();

  const contactRows = [
    {
      icon: (
        <MapPin
          aria-hidden="true"
          size={24}
          strokeWidth={1.75}
          className="shrink-0"
        />
      ),
      label: t("Adres", "Address"),
      text: mapAddress,
      href: mapQuery,
    },
    {
      icon: (
        <Phone
          aria-hidden="true"
          size={24}
          strokeWidth={1.75}
          className="shrink-0"
        />
      ),
      label: t("Telefon", "Phone"),
      text: "+48 71 234 56 78",
      href: "tel:+48712345678",
    },
    {
      icon: (
        <Mail
          aria-hidden="true"
          size={24}
          strokeWidth={1.75}
          className="shrink-0"
        />
      ),
      label: t("E-mail", "Email"),
      text: "kontakt@nexargarage.pl",
      href: "mailto:kontakt@nexargarage.pl",
    },
    {
      icon: (
        <Clock
          aria-hidden="true"
          size={24}
          strokeWidth={1.75}
          className="shrink-0"
        />
      ),
      label: t("Godziny pracy", "Opening hours"),
      text: t(
        "Pon-Pt 8:00-18:00 | Sob 9:00-14:00 | Nd zamknięte",
        "Mon-Fri 8:00-18:00 | Sat 9:00-14:00 | Sun closed",
      ),
    },
  ];

  return (
    <section id="kontakt" className="section-block border-b border-border">
      <div className="site-shell editorial-grid">
        <div className="section-stack">
          <div className="section-intro">
            <span className="eyebrow">{t("Wrocław", "Wroclaw")}</span>
            <div className="grid gap-5">
              <h2 className="section-title text-balance">
                {t("Kontakt i dojazd", "Contact and directions")}
              </h2>
              <p className="section-copy measure-copy">
                {t(
                  "Zadzwoń, napisz albo sprawdź trasę do warsztatu przy ul. Świdnickiej 18. Odpowiadamy po polsku i po angielsku.",
                  "Call, email or check the route to our workshop at 18 Swidnicka Street. We support customers in Polish and English.",
                )}
              </p>
            </div>
          </div>

          <div className="border-y border-border">
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="flex items-start gap-4 border-b border-border py-4 last:border-b-0"
              >
                <span className="inline-flex h-10 w-8 shrink-0 items-center justify-center text-primary">
                  {row.icon}
                </span>
                <div className="min-w-0">
                  <p className="block text-sm font-medium text-muted-foreground">
                    {row.label}
                  </p>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="body-relaxed mt-1 block break-words underline decoration-border underline-offset-4 hover:text-primary"
                    >
                      {row.text}
                    </a>
                  ) : (
                    <p className="body-relaxed mt-1">{row.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel overflow-hidden">
          <div className="flex flex-col gap-3 px-5 py-5 sm:px-6 sm:py-6">
            <span className="eyebrow">
              {t("Mapa i lokalizacja", "Map and location")}
            </span>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-2xl font-semibold">
                  {t(
                    "Nexar Garage, centrum Wrocławia",
                    "Nexar Garage, central Wroclaw",
                  )}
                </p>
                <p className="body-relaxed mt-2">{mapAddress}</p>
              </div>
              <a
                href={mapQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button-secondary w-full sm:w-auto"
              >
                {t("Otwórz w mapach", "Open in maps")}
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] border-t border-border bg-[hsl(var(--surface-raised))] sm:h-[360px]">
            {allowThirdPartyContent ? (
              <iframe
                src={mapEmbedSrc}
                title="Nexar Garage map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-6 text-center sm:px-8">
                <p className="font-display text-2xl font-semibold">
                  {t("Mapa wymaga zgody", "Map requires consent")}
                </p>
                <p className="body-relaxed mt-4 max-w-md">
                  {t(
                    "Aby wyświetlić Google Maps, zaakceptuj dodatkowe pliki cookie dla treści zewnętrznych.",
                    "To display Google Maps, please accept additional cookies for external content.",
                  )}
                </p>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="premium-button-primary mt-6 w-full sm:w-auto"
                >
                  {t(
                    "Akceptuj cookie i pokaż mapę",
                    "Accept cookies and show map",
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
