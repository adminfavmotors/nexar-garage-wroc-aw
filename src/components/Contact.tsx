import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const mapAddress = "ul. Świdnicka 18, 50-068 Wrocław";
const mapQuery = "https://maps.google.com/?hl=pl&q=ul.+%C5%9Awidnicka+18,+Wroc%C5%82aw";
const mapEmbedSrc =
  "https://www.google.com/maps?hl=pl&q=ul.+%C5%9Awidnicka+18,+Wroc%C5%82aw&z=15&output=embed";

const Contact = () => {
  const { t } = useLang();
  const { allowThirdPartyContent, acceptAll } = useCookieConsent();
  const ref = useScrollReveal();

  const contactRows = [
    {
      icon: <MapPin size={16} className="mt-0.5 shrink-0" />,
      text: mapAddress,
    },
    {
      icon: <Phone size={16} className="mt-0.5 shrink-0" />,
      text: "+48 71 234 56 78",
    },
    {
      icon: <Mail size={16} className="mt-0.5 shrink-0" />,
      text: "kontakt@nexargarage.pl",
    },
    {
      icon: <Clock size={16} className="mt-0.5 shrink-0" />,
      text: t(
        "Pon-Pt 8:00-18:00 | Sob 9:00-14:00 | Nd zamknięte",
        "Mon-Fri 8:00-18:00 | Sat 9:00-14:00 | Sun closed"
      ),
    },
  ];

  return (
    <section id="kontakt" ref={ref} className="border-b border-border pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          - {t("KONTAKT", "CONTACT")} -
        </p>
        <h2 className="mt-3 text-center font-barlow text-[38px] font-extrabold uppercase text-foreground sm:text-[48px] sm:leading-[1] lg:text-[56px]">
          {t("ZNAJDŹ NAS", "FIND US")}
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-6">
            {contactRows.map((row, i) => (
              <div key={i} className="flex items-start gap-4 border-l-2 border-primary pl-4">
                <span className="text-muted-foreground">{row.icon}</span>
                <p className="font-inter text-[14px] text-foreground sm:text-[15px]">{row.text}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden border border-border bg-surface">
            <div className="flex flex-col items-start gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
              <div>
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  GOOGLE MAPS
                </p>
                <p className="mt-1 font-inter text-sm text-foreground">{mapAddress}</p>
              </div>
              <span className="font-barlow text-[12px] font-bold uppercase tracking-wider text-accent">
                {t("Dojazd", "Directions")}
              </span>
            </div>

            <div className="relative h-[300px] border-b border-border bg-background sm:h-[360px]">
              {allowThirdPartyContent ? (
                <>
                  <iframe
                    src={mapEmbedSrc}
                    title="Nexar Garage map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0 grayscale contrast-125 brightness-[0.85]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0.16)_0%,rgba(12,12,12,0.04)_45%,rgba(12,12,12,0.22)_100%)]" />
                </>
              ) : (
                <div className="flex h-full flex-col items-center justify-center px-6 text-center sm:px-8">
                  <p className="font-barlow text-[24px] font-bold uppercase text-foreground sm:text-[28px]">
                    {t("MAPA WYMAGA ZGODY", "MAP REQUIRES CONSENT")}
                  </p>
                  <p className="mt-3 max-w-md font-inter text-[14px] leading-relaxed text-muted-foreground">
                    {t(
                      "Aby wyświetlić Google Maps, zaakceptuj dodatkowe pliki cookie dla treści zewnętrznych.",
                      "To display Google Maps, please accept additional cookies for external content."
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="mt-6 border border-primary bg-primary px-5 py-3 font-barlow text-[13px] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_12px_24px_rgba(170,37,0,0.22)]"
                  >
                    {t("AKCEPTUJ COOKIE I POKAŻ MAPĘ", "ACCEPT COOKIES AND SHOW MAP")}
                  </button>
                </div>
              )}
            </div>

            <a
              href={mapQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-4 text-center font-barlow text-[12px] font-bold uppercase tracking-wider text-accent transition-colors duration-300 hover:bg-elevated sm:text-[13px]"
            >
              {t("OTWÓRZ W MAPACH", "OPEN IN MAPS")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
