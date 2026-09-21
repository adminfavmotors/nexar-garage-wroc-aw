import { ClipboardCheck, Search, PhoneCall, ArrowRight } from "lucide-react";
import { useLang } from "@/features/language";
import {
  getHomeSectionPath,
  homeSectionIds,
  RouteLink,
} from "@/shared/navigation";

const benefitIcons = [Search, PhoneCall, ClipboardCheck];

const WhyUsSection = () => {
  const { t } = useLang();
  const benefits = [
    [
      t(
        "Najpierw przyczyna, potem części",
        "Find the cause before replacing parts",
      ),
      t(
        "Sprawdzamy, skąd bierze się problem. Nie zaczynamy od wymiany części na chybił trafił.",
        "We investigate the problem before recommending which parts need replacing.",
      ),
    ],
    [
      t("Ty decydujesz o naprawie", "You approve the repair"),
      t(
        "Omawiamy zakres, koszt i wybór części. Dodatkowe prace? Najpierw telefon do Ciebie.",
        "We explain the work, cost and parts options. Extra work? We call you first.",
      ),
    ],
    [
      t("Wiesz, co zostało zrobione", "Know what has been done"),
      t(
        "Przy odbiorze wyjaśniamy wykonane prace i wskazujemy, na co zwrócić uwagę przy dalszej eksploatacji.",
        "At collection, we explain the completed work and what to watch for as you keep driving.",
      ),
    ],
  ];
  return (
    <section id="o-nas" className="section-block workshop-promise">
      <div className="site-shell grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow">
            {t("Dlaczego Nexar Garage", "Why Nexar Garage")}
          </span>
          <h2 className="section-title mt-4">
            {t(
              "Dobra naprawa zaczyna się od dobrej diagnozy.",
              "A proper repair starts with a proper diagnosis.",
            )}
          </h2>
          <p className="mt-5 max-w-[47ch] leading-7">
            {t(
              "Oddajesz nam samochód, nie kontrolę nad wydatkami. Od pierwszej rozmowy do odbioru wiesz, co planujemy i za co płacisz.",
              "You hand over your car, not control of your budget. From the first conversation to collection, you know what we plan to do and what you are paying for.",
            )}
          </p>
          <RouteLink
            to={getHomeSectionPath(homeSectionIds.booking)}
            className="workshop-button-accent mt-7"
          >
            {t("Porozmawiajmy o Twoim aucie", "Tell us about your car")}
            <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" />
          </RouteLink>
        </div>
        <ul className="grid gap-7">
          {benefits.map(([title, copy], index) => {
            const Icon = benefitIcons[index];
            return (
              <li key={title} className="flex gap-4">
                <span className="promise-check">
                  <Icon size={28} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 leading-7">{copy}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default WhyUsSection;
