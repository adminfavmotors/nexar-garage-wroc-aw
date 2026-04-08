import type { RefObject } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion";
import { useLang } from "@/features/language";
import { servicePages } from "@/features/services/data";

type ServiceDetailsAccordionProps = {
  activeSlug: string;
  detailsRef: RefObject<HTMLElement | null>;
  onChangeActiveSlug: (slug: string) => void;
};

const ServiceDetailsAccordion = ({
  activeSlug,
  detailsRef,
  onChangeActiveSlug,
}: ServiceDetailsAccordionProps) => {
  const { t } = useLang();

  return (
    <section ref={detailsRef} className="section-block border-b border-border/80">
      <div className="site-shell">
        <div className="section-intro mx-auto max-w-3xl text-center">
          <span className="eyebrow mx-auto">{t("Szczegóły usług", "Service details")}</span>
          <h2 className="section-title text-balance">
            {t("Zakres, korzyści i ceny w jednej uporządkowanej warstwie.", "Scope, benefits and pricing in one structured layer.")}
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible={false}
          value={activeSlug}
          onValueChange={(value) => {
            if (value) {
              onChangeActiveSlug(value);
            }
          }}
          className="surface-panel mt-10 overflow-hidden"
        >
          {servicePages.map((service) => (
            <AccordionItem key={service.slug} value={service.slug} id={service.slug} className="border-b border-border/80 last:border-b-0">
              <AccordionTrigger className="px-5 py-5 text-left hover:no-underline sm:px-8 sm:py-6">
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-5">
                  <span className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {service.num}
                  </span>
                  <span className="font-barlow text-[1.8rem] leading-none text-foreground sm:text-[2.35rem]">
                    {t(service.title.pl, service.title.en)}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 sm:px-8 sm:pb-8">
                <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
                  <div>
                    <p className="measure-copy-wide font-inter text-[0.98rem] leading-7 text-muted-foreground">
                      {t(service.heroSummary.pl, service.heroSummary.en)}
                    </p>
                    <div className="mt-6 grid gap-3">
                      {service.scopeItems.map((item, index) => (
                        <div key={item.pl} className="surface-panel-soft flex items-start gap-4 px-4 py-4">
                          <span className="font-barlow text-[1.45rem] leading-none text-primary">0{index + 1}</span>
                          <p className="font-inter text-[0.94rem] leading-7 text-foreground/90">
                            {t(item.pl, item.en)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      <div className="surface-panel-soft p-5">
                        <p className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {t("Cena orientacyjna", "Estimated pricing")}
                        </p>
                        <p className="mt-2 font-barlow text-[2rem] leading-none text-primary">
                          {t(service.price.pl, service.price.en)}
                        </p>
                      </div>
                      <div className="surface-panel-soft p-5">
                        <p className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {t("Czas realizacji", "Lead time")}
                        </p>
                        <p className="mt-2 font-barlow text-[2rem] leading-none text-foreground">
                          {t(service.leadTime.pl, service.leadTime.en)}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {service.benefitItems.map((item, index) => (
                        <div key={item.pl} className="surface-panel-soft px-4 py-5">
                          <p className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                            0{index + 1}
                          </p>
                          <p className="mt-3 font-inter text-[0.94rem] leading-7 text-foreground/90">
                            {t(item.pl, item.en)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServiceDetailsAccordion;
