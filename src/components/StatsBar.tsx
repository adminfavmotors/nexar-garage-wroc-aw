import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "15+", labelPl: "lat doświadczenia", labelEn: "years experience" },
  { value: "6200+", labelPl: "zadowolonych klientów", labelEn: "happy clients" },
  { value: "48h", labelPl: "średni czas realizacji", labelEn: "avg turnaround" },
  { value: "4.9", star: true, labelPl: "ocena Google", labelEn: "Google rating" },
];

const StatsBar = () => {
  const { t } = useLang();
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="border-y border-border bg-surface">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center px-4 py-8 text-center sm:py-10 lg:py-12 ${
              i < 3 ? "border-r border-border" : ""
            } ${i < 2 ? "border-b border-border lg:border-b-0" : ""}`}
          >
            <span className="font-barlow text-[38px] font-bold text-foreground sm:text-5xl lg:text-[64px]">
              {stat.value}
              {stat.star && <span className="text-primary">★</span>}
            </span>
            <span className="mt-2 font-inter text-[12px] text-muted-foreground sm:mt-3 sm:text-[13px]">
              {t(stat.labelPl, stat.labelEn)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
