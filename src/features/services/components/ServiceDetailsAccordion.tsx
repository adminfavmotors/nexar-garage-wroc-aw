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
    <section ref={detailsRef} className="section-block border-b border-border">
      <div className="site-shell">
        <div className="editorial-grid items-end">
          <div>
            <span className="eyebrow">{t("Szczegóły usług", "Service details")}</span>
            <h2 className="section-title text-balance mt-5 max-w-[11ch]">
              {t("Co dokładnie obejmuje każda usługa.", "What each service includes.")}
            </h2>
          </div>
          <p className="section-copy measure-copy-wide">
            {t(
              "Rozwiń wybraną pozycję, aby sprawdzić zakres diagnostyki lub naprawy, przewidywany czas oraz najważniejsze korzyści.",
              "Open a service to review the diagnostic or repair scope, estimated lead time and key benefits."
            )}
          </p>
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
          className="mt-10 border-y border-border"
        >
          {servicePages.map((service) => (
            <AccordionItem key={service.slug} value={service.slug} id={service.slug} className="border-b border-border last:border-b-0">
              <AccordionTrigger className="min-h-[5.5rem] px-3 py-5 text-left hover:bg-[hsl(var(--surface))] hover:no-underline focus-visible:bg-[hsl(var(--surface))] sm:px-5 sm:py-6">
                <div className="flex min-w-0 flex-1 flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-5">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                    {service.num}
                  </span>
                  <span className="section-title-compact text-[1.8rem] sm:text-[2.15rem]">
                    {t(service.title.pl, service.title.en)}
                  </span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:ml-auto sm:pr-5">
                    {t(service.price.pl, service.price.en)}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="border-t border-border px-3 pb-7 pt-7 sm:px-5 sm:pb-9 sm:pt-8">
                <div className="grid gap-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.72fr)] lg:gap-12">
                  <div className="min-w-0">
                    <p className="body-relaxed measure-copy-wide">
                      {t(service.heroSummary.pl, service.heroSummary.en)}
                    </p>
                    <h3 className="mt-7 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                      {t("Zakres prac", "Scope of work")}
                    </h3>
                    <ol className="mt-4 border-y border-border">
                      {service.scopeItems.map((item, index) => (
                        <li key={item.pl} className="flex items-start gap-4 border-b border-border py-4 last:border-b-0">
                          <span className="pt-1 font-mono text-xs font-semibold text-primary">0{index + 1}</span>
                          <p className="font-body text-[0.94rem] leading-7 text-muted-foreground">
                            {t(item.pl, item.en)}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <dl className="grid grid-cols-2 divide-x divide-border border-b border-border pb-6">
                      <div className="pr-5">
                        <dt className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                          {t("Cena orientacyjna", "Estimated pricing")}
                        </dt>
                        <dd className="mt-2 font-mono text-[1.35rem] font-semibold leading-none tabular-nums text-primary">
                          {t(service.price.pl, service.price.en)}
                        </dd>
                      </div>
                      <div className="pl-5">
                        <dt className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                          {t("Czas realizacji", "Lead time")}
                        </dt>
                        <dd className="mt-2 font-mono text-[1.35rem] font-semibold leading-none tabular-nums text-foreground">
                          {t(service.leadTime.pl, service.leadTime.en)}
                        </dd>
                      </div>
                    </dl>

                    <h3 className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                      {t("Dlaczego warto", "Why it helps")}
                    </h3>
                    <ol className="mt-3">
                      {service.benefitItems.map((item, index) => (
                        <li key={item.pl} className="border-b border-border py-4 last:border-b-0">
                          <p className="font-mono text-xs font-semibold text-primary">
                            0{index + 1}
                          </p>
                          <p className="mt-2 font-body text-[0.94rem] leading-7 text-muted-foreground">
                            {t(item.pl, item.en)}
                          </p>
                        </li>
                      ))}
                    </ol>
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
