import { ArrowDownRight } from "lucide-react";
import { appRoutes, homeSectionIds, RouteLink } from "@/shared/navigation";
import { useLang } from "@/features/language";
import type { ServiceDefinition } from "@/features/services/data";

type ServicesDirectoryIntroProps = {
  activeService: ServiceDefinition;
};

const ServicesDirectoryIntro = ({ activeService }: ServicesDirectoryIntroProps) => {
  const { t } = useLang();

  return (
    <section className="section-block border-b border-border hero-ambient">
      <div className="site-shell grid items-start gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.72fr)] lg:gap-10">
        <div>
          <span className="eyebrow">{t("Oferta serwisu Wrocław", "Workshop services Wroclaw")}</span>
          <h1 className="section-title measure-hero text-balance mt-5">
            {t("Serwis samochodowy bez zgadywania.", "Car service without guesswork.")}
          </h1>
          <p className="section-copy measure-copy-wide mt-6">
            {t(
              "Wybierz usługę, sprawdź orientacyjny koszt i zobacz dokładny zakres prac. Ostateczną wycenę potwierdzamy po oględzinach lub diagnostyce auta.",
              "Choose a service, check the estimated cost and review the exact scope. We confirm the final quote after inspecting or diagnosing the car."
            )}
          </p>
          <div className="mt-6 max-w-[16rem]">
            <div className="accent-rule" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <RouteLink
              to={`${appRoutes.home}?service=${activeService.bookingValue}#${homeSectionIds.booking}`}
              className="premium-button-primary w-full sm:w-auto"
            >
              {t("Umów wybraną usługę", "Book selected service")}
            </RouteLink>
            <a href="#uslugi" className="editorial-link w-fit">
              {t("Porównaj zakresy", "Compare services")}
              <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="border-y border-border py-6 lg:border-l lg:border-y-0 lg:py-2 lg:pl-8">
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              {t("Wybrana usługa", "Selected service")}
            </span>
            <span className="font-mono text-xs font-semibold text-primary">{activeService.num}</span>
          </div>
          <p className="section-title-compact mt-5 max-w-[12ch]">
            {t(activeService.title.pl, activeService.title.en)}
          </p>
          <p className="body-relaxed mt-4">
            {t(activeService.heroSummary.pl, activeService.heroSummary.en)}
          </p>
          <dl className="mt-7 grid grid-cols-2 divide-x divide-border border-t border-border pt-5">
            <div className="pr-5">
              <dt className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                {t("Cena od", "Price from")}
              </dt>
              <dd className="mt-2 font-mono text-[1.35rem] font-semibold leading-none tabular-nums text-primary">
                {t(activeService.price.pl, activeService.price.en)}
              </dd>
            </div>
            <div className="pl-5">
              <dt className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                {t("Czas", "Lead time")}
              </dt>
              <dd className="mt-2 font-mono text-[1.35rem] font-semibold leading-none tabular-nums text-foreground">
                {t(activeService.leadTime.pl, activeService.leadTime.en)}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
};

export default ServicesDirectoryIntro;
