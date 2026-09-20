import { ExternalLink } from "lucide-react";
import { useLang } from "@/features/language";
import { verifiedEvidence } from "@/features/trust/verifiedEvidence";

const serviceSteps = [
  {
    title: { pl: "Przyjęcie auta", en: "Vehicle intake" },
    copy: {
      pl: "Zapisujemy objawy, historię usterki i zakres, z którym przyjeżdżasz.",
      en: "We record the symptoms, fault history and the scope you are bringing the car in for.",
    },
  },
  {
    title: { pl: "Diagnostyka", en: "Diagnostics" },
    copy: {
      pl: "Sprawdzamy przyczynę problemu przed zamówieniem części i rozpoczęciem naprawy.",
      en: "We identify the cause before ordering parts or starting the repair.",
    },
  },
  {
    title: { pl: "Uzgodnienie", en: "Approval" },
    copy: {
      pl: "Przedstawiamy zakres, wariant części, orientacyjny koszt i termin wykonania.",
      en: "We present the scope, parts option, estimated cost and completion time.",
    },
  },
  {
    title: { pl: "Realizacja", en: "Repair" },
    copy: {
      pl: "Jeśli zakres się zmienia, kontaktujemy się przed wykonaniem dodatkowych prac.",
      en: "If the scope changes, we contact you before carrying out additional work.",
    },
  },
  {
    title: { pl: "Odbiór", en: "Handover" },
    copy: {
      pl: "Przy odbiorze omawiamy wykonane prace i zalecenia na kolejne kilometry.",
      en: "At handover, we review the completed work and recommendations for the next kilometres.",
    },
  },
];

const visitRecords = [
  {
    label: { pl: "Przed naprawą", en: "Before repair" },
    value: { pl: "Zakres i orientacyjna wycena", en: "Scope and estimated quote" },
  },
  {
    label: { pl: "W trakcie", en: "During service" },
    value: { pl: "Kontakt przed zmianą zakresu", en: "Contact before scope changes" },
  },
  {
    label: { pl: "Przy odbiorze", en: "At handover" },
    value: { pl: "Podsumowanie wykonanych prac", en: "Summary of completed work" },
  },
];

const ServiceStandardSection = () => {
  const { lang, t } = useLang();
  const hasVerifiedEvidence =
    verifiedEvidence.workshopPhotos.length > 0 ||
    verifiedEvidence.reviews.length > 0 ||
    verifiedEvidence.certificates.length > 0 ||
    verifiedEvidence.warranty !== null;

  return (
    <section id="standard" className="section-block border-b border-border">
      <div className="site-shell">
        <div className="section-intro max-w-[64rem]">
          <span className="eyebrow">{t("Standard obsługi", "Service standard")}</span>
          <h2 className="section-title text-balance max-w-[15ch]">
            {t("Możesz sprawdzić każdy etap zlecenia.", "Every stage of the job stays clear.")}
          </h2>
          <p className="section-copy measure-copy-wide">
            {t(
              "Zaufanie budujemy sposobem pracy: najpierw diagnoza, potem uzgodniony zakres i koszt, a na końcu jasne podsumowanie wykonanych czynności.",
              "We build trust through the way we work: diagnosis first, then an agreed scope and cost, followed by a clear summary of completed work."
            )}
          </p>
          <div className="max-w-[16rem]">
            <div className="accent-rule" />
          </div>
        </div>

        <ol className="mt-8 border-y border-border lg:grid lg:grid-cols-5 lg:divide-x lg:divide-border">
          {serviceSteps.map((step, index) => (
            <li
              key={step.title.en}
              className="border-b border-border py-6 last:border-b-0 lg:border-b-0 lg:px-5 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="font-mono text-xs font-semibold text-primary">0{index + 1}</span>
              <h3 className="mt-4 font-display text-[1.65rem] font-semibold leading-none text-foreground">
                {t(step.title.pl, step.title.en)}
              </h3>
              <p className="body-fine mt-3">{t(step.copy.pl, step.copy.en)}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
          {visitRecords.map((record) => (
            <div
              key={record.label.en}
              className="border-b border-border py-5 last:border-b-0 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                {t(record.label.pl, record.label.en)}
              </p>
              <p className="mt-2 font-body text-[1rem] font-medium leading-7 text-foreground">
                {t(record.value.pl, record.value.en)}
              </p>
            </div>
          ))}
        </div>

        {hasVerifiedEvidence && (
          <div className="mt-8">
            <div className="grid gap-10 lg:grid-cols-2">
              {verifiedEvidence.workshopPhotos.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {verifiedEvidence.workshopPhotos.map((photo) => (
                    <figure key={photo.src}>
                      <img
                        src={photo.src}
                        width={photo.width}
                        height={photo.height}
                        loading="lazy"
                        alt={lang === "PL" ? photo.alt.pl : photo.alt.en}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <figcaption className="body-fine mt-3">
                        {t(photo.caption.pl, photo.caption.en)}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {verifiedEvidence.reviews.length > 0 && (
                <div className="border-y border-border">
                  {verifiedEvidence.reviews.map((review) => (
                    <article key={`${review.author}-${review.sourceUrl}`} className="border-b border-border py-6 last:border-b-0">
                      <blockquote className="font-body text-[1rem] leading-8 text-muted-foreground">
                        “{t(review.quote.pl, review.quote.en)}”
                      </blockquote>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <p className="font-body text-sm font-semibold text-foreground">{review.author}</p>
                        <a
                          href={review.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="editorial-link"
                        >
                          {review.sourceLabel}
                          <ExternalLink aria-hidden="true" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {(verifiedEvidence.certificates.length > 0 || verifiedEvidence.warranty) && (
              <div className="mt-8 grid border-y border-border md:grid-cols-2 md:divide-x md:divide-border">
                {verifiedEvidence.certificates.map((certificate) => (
                  <a
                    key={certificate.documentUrl}
                    href={certificate.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-directory-row flex min-h-24 items-center justify-between gap-5 border-b border-border px-4 py-5 last:border-b-0 md:border-b-0"
                  >
                    <span>
                      <span className="block font-display text-[1.45rem] font-semibold text-foreground">
                        {t(certificate.name.pl, certificate.name.en)}
                      </span>
                      <span className="body-fine mt-1 block">{certificate.issuer}</span>
                    </span>
                    <ExternalLink aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
                  </a>
                ))}
                {verifiedEvidence.warranty && (
                  <a
                    href={verifiedEvidence.warranty.detailsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-directory-row flex min-h-24 items-center justify-between gap-5 px-4 py-5"
                  >
                    <span>
                      <span className="block font-mono text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                        {t("Warunki gwarancji", "Warranty terms")}
                      </span>
                      <span className="mt-2 block font-body text-[1rem] leading-7 text-foreground">
                        {t(verifiedEvidence.warranty.summary.pl, verifiedEvidence.warranty.summary.en)}
                      </span>
                    </span>
                    <ExternalLink aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceStandardSection;
