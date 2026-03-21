import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    name: "Marek Kowalski",
    car: "Audi A4",
    quote: "Świetna obsługa, szybka diagnostyka, uczciwa wycena. Polecam!",
    quoteEn: "Great service, fast diagnostics, honest pricing. Recommended!",
  },
  {
    name: "Anna Wiśniewska",
    car: "VW Golf",
    quote: "3 lata jako klient. Zawsze na czas, transparentne ceny.",
    quoteEn: "3 years as a client. Always on time, transparent pricing.",
  },
  {
    name: "James Mitchell",
    car: "BMW 3 Series",
    quote: "English-speaking staff, honest pricing, excellent work.",
    quoteEn: "English-speaking staff, honest pricing, excellent work.",
  },
  {
    name: "Tomasz Nowak",
    car: "Skoda Octavia",
    quote: "Wymiana opon ekspresowo. Profesjonalne podejście.",
    quoteEn: "Express tyre change. Professional approach.",
  },
  {
    name: "Katarzyna Zając",
    car: "Toyota Corolla",
    quote: "Klimatyzacja w jeden dzień, bez niespodzianek w rachunku.",
    quoteEn: "A/C done in one day, no surprises on the bill.",
  },
];

const Reviews = () => {
  const { lang, t } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useScrollReveal();

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="opinie" ref={sectionRef} className="border-b border-border pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              — {t("OPINIE KLIENTÓW", "CLIENT REVIEWS")} —
            </p>
            <h2 className="mt-3 font-barlow text-[38px] font-extrabold uppercase text-foreground sm:text-[48px] sm:leading-[1] lg:text-[56px]">
              {t("CO MÓWIĄ KLIENCI", "WHAT CLIENTS SAY")}
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll(-1)}
              className="border border-border p-2 text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-foreground active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="border border-border p-2 text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-foreground active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-8 flex gap-4 overflow-x-auto pb-4 scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="min-w-[280px] flex-shrink-0 border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent sm:min-w-[320px] sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-primary">★★★★★</span>
                <span className="font-inter text-[12px] text-muted-foreground">Google Reviews</span>
              </div>
              <p className="mt-5 font-inter text-[15px] italic leading-relaxed text-muted-foreground">
                "{lang === "PL" ? review.quote : review.quoteEn}"
              </p>
              <div className="mt-6">
                <p className="font-inter text-[14px] font-medium text-foreground">{review.name}</p>
                <p className="font-inter text-[13px] text-muted-foreground">{review.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
