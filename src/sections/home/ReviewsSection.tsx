import { useLang } from "@/features/language";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";

const reviews = [
  {
    name: "Marek Kowalski",
    car: "Audi A4",
    quote: "Świetna obsługa, szybka diagnostyka i uczciwa wycena. Wreszcie serwis, który nie komplikuje prostych rzeczy.",
    quoteEn: "Great service, fast diagnostics and honest pricing. Finally, a garage that does not overcomplicate simple things.",
  },
  {
    name: "Anna Wiśniewska",
    car: "VW Golf",
    quote: "Jestem klientką od trzech lat. Zawsze terminowo, zawsze z jasną informacją, co dokładnie zostało zrobione.",
    quoteEn: "I have been a client for three years. Always on time, always clear about what was actually done.",
  },
  {
    name: "James Mitchell",
    car: "BMW 3 Series",
    quote: "English-speaking staff, honest pricing and a very calm handoff process. It feels organised from start to finish.",
    quoteEn: "English-speaking staff, honest pricing and a very calm handoff process. It feels organised from start to finish.",
  },
];

const ReviewsSection = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();

  return (
    <section id="opinie" ref={ref} className="section-block border-b border-border/80">
      <div className="site-shell editorial-grid">
        <div className="section-stack">
          <div className="section-intro">
            <span className="eyebrow">{t("Opinie klientów", "Client reviews")}</span>
            <div className="grid gap-5">
              <h2 className="section-title text-balance">
                {t("Zaufanie nie powinno wyglądać jak slider z cytatami.", "Trust should not feel like a generic quote slider.")}
              </h2>
              <p className="section-copy measure-copy">
                {t(
                  "Zamiast głośnych obietnic pokazujemy prosty sygnał: klienci wracają, bo proces jest przewidywalny, komunikacja jasna, a wycena nie zmienia tonu po oddaniu auta.",
                  "Instead of loud claims, the signal is simple: clients return because the process is predictable, the communication is clear and the final bill stays aligned with the quote."
                )}
              </p>
            </div>
          </div>

          <div className="surface-panel-strong p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Google Reviews
                </p>
                <p className="mt-3 font-barlow text-[4.2rem] leading-none text-foreground sm:text-[5rem]">
                  4.9
                  <span className="ml-1 text-[0.34em] text-muted-foreground">/5</span>
                </p>
              </div>
              <div className="grid gap-2 text-left sm:max-w-[15rem]">
                <div className="trust-chip">6200+ {t("obsłużonych klientów", "customers served")}</div>
                <div className="trust-chip">15+ {t("lat doświadczenia", "years of experience")}</div>
              </div>
            </div>

            <blockquote className="mt-8 max-w-2xl font-inter text-[1.08rem] leading-8 text-foreground/90 sm:text-[1.18rem]">
              “
              {lang === "PL"
                ? "Spokojny kontakt, konkretna diagnoza i żadnego warsztatowego teatru. Po prostu wszystko było dokładnie tak, jak ustaliliśmy."
                : "Calm communication, a specific diagnosis and none of the usual workshop theatre. Everything happened exactly as agreed."}
              ”
            </blockquote>
          </div>
        </div>

        <div className="grid gap-3">
          {reviews.map((review, index) => (
            <article key={review.name} className={index === 0 ? "surface-panel p-6 sm:p-7" : "surface-panel-soft px-5 py-5 sm:px-6"}>
              <p className="font-inter text-[0.98rem] leading-7 text-foreground/88">
                “{lang === "PL" ? review.quote : review.quoteEn}”
              </p>
              <div className="mt-5 divider-hairline pt-4">
                <p className="font-inter text-[0.92rem] font-semibold text-foreground">{review.name}</p>
                <p className="mt-1 font-inter text-[0.8rem] uppercase tracking-[0.16em] text-muted-foreground">{review.car}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
