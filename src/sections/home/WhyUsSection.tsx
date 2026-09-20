import { Clock3, Globe2, MapPin } from "lucide-react";
import { useLang } from "@/features/language";

const reasonsPl = [
  "Diagnoza i jasny proces wyceny przed rozpoczęciem prac.",
  "Przed naprawą ustalamy wariant części: OEM lub sprawdzone zamienniki.",
  "Każda zmiana zakresu wymaga kontaktu przed wykonaniem dodatkowych prac.",
  "Możliwość obsługi po polsku i po angielsku, także przy bardziej złożonych zleceniach.",
];

const reasonsEn = [
  "Diagnostics and a clear quote process before any work starts.",
  "Before the repair, we agree on OEM parts or trusted replacements.",
  "Every scope change requires contact before additional work is carried out.",
  "Support in both Polish and English, including more complex service cases.",
];

const operatingHighlights = [
  {
    icon: Clock3,
    label: { pl: "Godziny pracy", en: "Opening hours" },
    value: { pl: "Pon-Pt 8:00-18:00 | Sob 9:00-14:00", en: "Mon-Fri 8:00-18:00 | Sat 9:00-14:00" },
  },
  {
    icon: Globe2,
    label: { pl: "Obsługa klienta", en: "Customer support" },
    value: { pl: "Polski / English", en: "Polish / English" },
  },
  {
    icon: MapPin,
    label: { pl: "Lokalizacja", en: "Location" },
    value: { pl: "Wrocław, ul. Świdnicka 18", en: "Wroclaw, Swidnicka 18" },
  },
];

const WhyUsSection = () => {
  const { lang, t } = useLang();

  const reasons = lang === "PL" ? reasonsPl : reasonsEn;

  return (
    <section id="o-nas" className="section-block border-b border-border">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="section-intro lg:sticky lg:top-32 lg:self-start">
            <span className="eyebrow">{t("Dlaczego właśnie my", "Why clients stay with us")}</span>
            <div className="grid gap-5 lg:max-w-[42rem]">
              <h2 className="section-title text-balance">
                {t("Serwis, który daje więcej spokoju niż hałasu.", "A garage that gives more clarity than noise.")}
              </h2>
              <p className="section-copy measure-copy-wide">
                {t(
                  "Łączymy szybką diagnozę, zrozumiałą wycenę i jasno ustalony zakres prac. Klient wie, co naprawiamy, jakich części używamy i kiedy auto będzie gotowe.",
                  "We combine fast diagnostics, clear estimates and a precisely agreed scope of work. You know what we are repairing, which parts we use and when the car will be ready."
                )}
              </p>
              <div className="max-w-[17rem]">
                <div className="accent-rule" />
              </div>
            </div>
          </div>

          <ol className="border-y border-border">
            {reasons.map((reason, index) => (
              <li key={reason} className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 border-b border-border py-6 last:border-b-0 sm:py-7">
                <span className="font-mono text-sm font-semibold text-primary">0{index + 1}</span>
                <p className="font-body text-[1rem] leading-7 text-muted-foreground sm:text-[1.05rem]">{reason}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border lg:mt-16">
          {operatingHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label.en} className="flex gap-4 border-b border-border py-6 last:border-b-0 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-primary">
                  <Icon aria-hidden="true" size={18} />
                </span>
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                    {t(item.label.pl, item.label.en)}
                  </p>
                  <p className="body-relaxed mt-2">
                    {t(item.value.pl, item.value.en)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
