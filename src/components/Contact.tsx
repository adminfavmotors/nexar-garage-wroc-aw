import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { t } = useLang();
  const ref = useScrollReveal();

  const contactRows = [
    {
      icon: <MapPin size={16} className="mt-0.5 shrink-0" />,
      text: "ul. Świdnicka 18, 50-068 Wrocław",
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
        "Pon–Pt 8:00–18:00 | Sob 9:00–14:00 | Nd zamknięte",
        "Mon–Fri 8:00–18:00 | Sat 9:00–14:00 | Sun closed"
      ),
    },
  ];

  return (
    <section id="kontakt" ref={ref} className="border-b border-border pt-20 pb-24 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-6">
        <p className="text-center font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          — {t("KONTAKT", "CONTACT")} —
        </p>
        <h2 className="mt-4 text-center font-barlow text-4xl font-extrabold uppercase text-foreground sm:text-[56px] sm:leading-[1]">
          {t("ZNAJDŹ NAS", "FIND US")}
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {contactRows.map((row, i) => (
              <div key={i} className="flex items-start gap-4 border-l-2 border-primary pl-4">
                <span className="text-muted-foreground">{row.icon}</span>
                <p className="font-inter text-[15px] text-foreground">{row.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col border border-border bg-surface">
            <div className="flex flex-1 items-center justify-center p-12">
              <p className="font-inter text-sm text-muted-foreground">
                {t("Mapa — ul. Świdnicka 18, Wrocław", "Map — ul. Świdnicka 18, Wrocław")}
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=ul.+Świdnicka+18,+Wrocław"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-t border-border px-6 py-4 text-center font-barlow text-[13px] font-bold uppercase tracking-wider text-accent transition-colors duration-300 hover:bg-elevated"
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
