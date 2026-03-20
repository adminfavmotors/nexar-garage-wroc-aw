import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const mapAddress = "ul. Świdnicka 18, 50-068 Wrocław";
const mapQuery = "https://maps.google.com/?q=ul.+%C5%9Awidnicka+18,+Wroc%C5%82aw";
const mapEmbedSrc = "https://www.google.com/maps?q=ul.+%C5%9Awidnicka+18,+Wroc%C5%82aw&z=15&output=embed";

const Contact = () => {
  const { t } = useLang();
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
    <section id="kontakt" ref={ref} className="border-b border-border pt-12 pb-14 lg:pt-16 lg:pb-20">
      <div className="container mx-auto px-6">
        <p className="text-center font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          - {t("KONTAKT", "CONTACT")} -
        </p>
        <h2 className="mt-3 text-center font-barlow text-4xl font-extrabold uppercase text-foreground sm:text-[56px] sm:leading-[1]">
          {t("ZNAJDŹ NAS", "FIND US")}
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-6">
            {contactRows.map((row, i) => (
              <div key={i} className="flex items-start gap-4 border-l-2 border-primary pl-4">
                <span className="text-muted-foreground">{row.icon}</span>
                <p className="font-inter text-[15px] text-foreground">{row.text}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden border border-border bg-surface">
            <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
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

            <div className="relative h-[360px] border-b border-border bg-background">
              <iframe
                src={mapEmbedSrc}
                title="Nexar Garage map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale contrast-125 brightness-[0.85]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0.16)_0%,rgba(12,12,12,0.04)_45%,rgba(12,12,12,0.22)_100%)]" />
            </div>

            <a
              href={mapQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-4 text-center font-barlow text-[13px] font-bold uppercase tracking-wider text-accent transition-colors duration-300 hover:bg-elevated"
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
