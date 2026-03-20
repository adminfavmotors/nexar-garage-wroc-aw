const stats = [
  { value: "15+", labelPl: "lat doświadczenia", labelEn: "years experience" },
  { value: "6200+", labelPl: "zadowolonych klientów", labelEn: "happy clients" },
  { value: "48h", labelPl: "średni czas realizacji", labelEn: "avg turnaround" },
  { value: "4.9★", labelPl: "ocena Google", labelEn: "Google rating" },
];

const StatsBar = () => {
  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto grid grid-cols-2 px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center py-10 text-center ${
              i < stats.length - 1 ? "lg:border-r lg:border-border" : ""
            } ${i < 2 ? "border-b border-border lg:border-b-0" : ""} ${
              i % 2 === 0 ? "border-r border-border lg:border-r" : "lg:border-r"
            }`}
          >
            <span className="font-syne-mono text-4xl text-primary sm:text-[48px]">
              {stat.value}
            </span>
            <span className="mt-2 text-[13px] leading-snug text-muted-foreground">
              {stat.labelPl}
              <br />
              <span className="text-[11px] italic">{stat.labelEn}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
