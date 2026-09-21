import { useRef } from "react";
import { ArrowRight, Check, ChevronUp } from "lucide-react";
import { ServiceIcon } from "./ServiceIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { useLang } from "@/features/language";
import type { ServiceBookingValue } from "@/features/services/data/servicePages";
import { servicePages } from "@/features/services/data";
import { useServiceDirectoryState } from "@/features/services/hooks";
import {
  getHomeSectionPath,
  homeSectionIds,
  RouteLink,
} from "@/shared/navigation";

const serviceContext: Record<ServiceBookingValue, { pl: string; en: string }> =
  {
    diagnostics: {
      pl: "Kontrolka silnika, spadek mocy, nierówna praca?",
      en: "Engine light, loss of power or rough running?",
    },
    repairs: {
      pl: "Hamulce, zawieszenie, rozrząd, olej i filtry.",
      en: "Brakes, suspension, timing systems, oil and filters.",
    },
    tyres: {
      pl: "Zmiana sezonu, drgania kierownicy, zużyte opony.",
      en: "Seasonal changes, steering vibration or worn tyres.",
    },
    electrics: {
      pl: "Auto nie odpala? Problem z akumulatorem lub ładowaniem?",
      en: "Car will not start? Battery or charging trouble?",
    },
    ac: {
      pl: "Słabe chłodzenie lub nieprzyjemny zapach z nawiewu.",
      en: "Weak cooling or an unpleasant smell from the vents.",
    },
    alignment: {
      pl: "Auto ściąga na bok? Opony zużywają się nierówno?",
      en: "Car pulling to one side or tyres wearing unevenly?",
    },
  };

const ServiceCatalog = ({ standalone = false }: { standalone?: boolean }) => {
  const { t } = useLang();
  const { activeSlug, updateActiveSlug } = useServiceDirectoryState();
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({});
  const closeService = (slug: string) => {
    updateActiveSlug("");
    triggers.current[slug]?.focus({ preventScroll: true });
    triggers.current[slug]?.scrollIntoView({
      block: "nearest",
      behavior: "instant",
    });
  };
  const Heading = standalone ? "h1" : "h2";
  const DetailHeading = standalone ? "h3" : "h4";
  return (
    <section id="uslugi" className="section-block service-catalog">
      <div className="site-shell">
        <div className="catalog-heading">
          <div>
            <span className="eyebrow">
              {t("Naprawy i bieżący serwis", "Repairs and maintenance")}
            </span>
            <Heading className="section-title mt-4">
              {standalone
                ? t("Usługi i ceny", "Services and prices")
                : t("Czego potrzebuje Twoje auto?", "What does your car need?")}
            </Heading>
          </div>
          <p className="section-copy max-w-[42ch]">
            {t(
              "Wybierz usługę, sprawdź zakres i umów wizytę. Nie znasz przyczyny usterki? Zacznij od diagnostyki.",
              "Choose a service, check what is included and book a visit. Unsure what is wrong? Start with diagnostics.",
            )}
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          value={activeSlug}
          onValueChange={updateActiveSlug}
          className="mt-8 grid gap-3"
        >
          {servicePages.map((service) => {
            const context =
              serviceContext[
                service.bookingValue as keyof typeof serviceContext
              ];
            const expanded = activeSlug === service.slug;
            return (
              <AccordionItem
                key={service.slug}
                value={service.slug}
                id={service.slug}
                className="catalog-item"
              >
                <AccordionTrigger
                  ref={(element) => {
                    triggers.current[service.slug] = element;
                  }}
                  headingLevel={standalone ? 2 : 3}
                  className="catalog-trigger"
                >
                  <span className="catalog-icon">
                    <ServiceIcon service={service.bookingValue} />
                  </span>
                  <span className="catalog-summary">
                    <span className="catalog-name">
                      {t(service.title.pl, service.title.en)}
                    </span>
                    <span className="catalog-symptom">
                      {t(context.pl, context.en)}
                    </span>
                  </span>
                  <span className="catalog-price">
                    {t(service.price.pl, service.price.en)}
                    <span>{t(service.leadTime.pl, service.leadTime.en)}</span>
                  </span>
                  <span className="catalog-toggle">
                    {expanded ? t("Zwiń", "Close") : t("Szczegóły", "Details")}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="catalog-content">
                  <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
                    <div>
                      <DetailHeading className="font-bold">
                        {t("Co obejmuje usługa", "What is included")}
                      </DetailHeading>
                      <ul className="mt-4 grid gap-3">
                        {service.scopeItems.map((item) => (
                          <li
                            key={item.pl}
                            className="flex gap-3 text-sm leading-7"
                          >
                            <Check
                              strokeWidth={1.75}
                              size={20}
                              className="mt-1 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span>{t(item.pl, item.en)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="catalog-answers">
                      {service.faq.slice(0, 2).map((item) => (
                        <div key={item.question.pl}>
                          <DetailHeading className="text-sm font-bold">
                            {t(item.question.pl, item.question.en)}
                          </DetailHeading>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {t(item.answer.pl, item.answer.en)}
                          </p>
                        </div>
                      ))}
                      <RouteLink
                        to={`/?service=${service.bookingValue}#rezerwacja`}
                        className="premium-button-primary gap-3"
                      >
                        {t("Umów tę usługę", "Book this service")}
                        <ArrowRight
                          size={20}
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </RouteLink>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="catalog-close"
                    onClick={() => closeService(service.slug)}
                  >
                    {t("Zwiń szczegóły", "Close details")}
                    <ChevronUp
                      size={20}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </button>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          {t(
            "Ceny orientacyjne. Ostateczny koszt zależy od modelu auta, części i zakresu prac — potwierdzimy go przed naprawą.",
            "Prices are estimates. The final cost depends on the car, parts and work required — we confirm it before repairs.",
          )}
        </p>
        <div className="catalog-help">
          <div>
            <h3>
              {t(
                "Nie wiesz, którą usługę wybrać?",
                "Not sure which service you need?",
              )}
            </h3>
            <p>
              {t(
                "Opisz objawy. Pomożemy ustalić, od czego zacząć.",
                "Describe the symptoms. We will help you find the starting point.",
              )}
            </p>
          </div>
          <RouteLink
            to={getHomeSectionPath(homeSectionIds.booking)}
            className="editorial-link"
          >
            {t("Opisz problem", "Tell us the problem")}
            <ArrowRight aria-hidden="true" />
          </RouteLink>
        </div>
      </div>
    </section>
  );
};
export default ServiceCatalog;
