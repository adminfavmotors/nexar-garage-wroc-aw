import { useLang } from "@/features/language";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";

const stats = [
  { value: "15+", labelPl: "lat doświadczenia", labelEn: "years experience" },
  { value: "6200+", labelPl: "zadowolonych klientów", labelEn: "happy clients" },
  { value: "48h", labelPl: "średni czas realizacji", labelEn: "avg turnaround" },
  { value: "4.9", ratingSuffix: "/5", labelPl: "ocena Google", labelEn: "Google rating" },
];

const StatsSection = () => {
  const { t } = useLang();
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-block border-y border-border/80">
      <div className="site-shell">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.labelEn} className="stat-chip">
              <span className="stat-chip-value">
                {stat.value}
                {stat.ratingSuffix && (
                  <span className="ml-1 align-middle text-[0.42em] font-medium tracking-[0.08em] text-muted-foreground">
                    {stat.ratingSuffix}
                  </span>
                )}
              </span>
              <span className="stat-chip-label">{t(stat.labelPl, stat.labelEn)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
