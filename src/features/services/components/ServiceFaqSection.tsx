import { useLang } from "@/features/language";
import type { ServiceDefinition } from "@/features/services/data";

type ServiceFaqSectionProps = {
  activeService: ServiceDefinition;
};

const ServiceFaqSection = ({ activeService }: ServiceFaqSectionProps) => {
  const { t } = useLang();

  return (
    <div>
      <div className="editorial-grid">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title-compact mt-5 max-w-[12ch]">
          {t("Najczęstsze pytania", "Frequently asked questions")}
          </h2>
        </div>
        <p className="body-relaxed measure-copy-wide">
          {t(
            `Odpowiedzi dotyczą usługi: ${activeService.title.pl}. Jeśli objawy są nietypowe, opisz je w formularzu rezerwacji.`,
            `These answers cover ${activeService.title.en}. If the symptoms are unusual, describe them in the booking form.`
          )}
        </p>
      </div>
      <div className="mt-8 border-y border-border">
        {activeService.faq.map((item, index) => (
          <article key={item.question.pl} className="grid gap-3 border-b border-border py-6 last:border-b-0 sm:grid-cols-[2.5rem_minmax(0,0.82fr)_minmax(0,1.18fr)] sm:gap-6">
            <span className="font-mono text-xs font-semibold text-primary">0{index + 1}</span>
            <h3 className="font-display text-[1.55rem] font-semibold leading-[1.02] text-foreground sm:text-[1.75rem]">
              {t(item.question.pl, item.question.en)}
            </h3>
            <p className="font-body text-[0.95rem] leading-7 text-muted-foreground">
              {t(item.answer.pl, item.answer.en)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ServiceFaqSection;
