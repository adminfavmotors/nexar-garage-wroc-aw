import { useLang } from "@/features/language";
import type { ServiceDefinition } from "@/features/services/data";

type ServiceFaqSectionProps = {
  activeService: ServiceDefinition;
};

const ServiceFaqSection = ({ activeService }: ServiceFaqSectionProps) => {
  const { t } = useLang();

  return (
    <div className="surface-panel p-6 sm:p-8">
      <div className="section-intro gap-4">
        <span className="eyebrow">FAQ</span>
        <h3 className="font-barlow text-[2rem] leading-none text-foreground sm:text-[2.5rem]">
          {t("Najczęstsze pytania", "Frequently asked questions")}
        </h3>
      </div>
      <div className="mt-6 grid gap-3">
        {activeService.faq.map((item) => (
          <div key={item.question.pl} className="surface-panel-soft p-5">
            <p className="font-barlow text-[1.5rem] leading-[0.98] text-foreground sm:text-[1.8rem]">
              {t(item.question.pl, item.question.en)}
            </p>
            <p className="mt-3 font-inter text-[0.95rem] leading-7 text-muted-foreground">
              {t(item.answer.pl, item.answer.en)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFaqSection;
