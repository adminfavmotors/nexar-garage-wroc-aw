import { ArrowRight, Phone, MapPin, Check, Languages } from "lucide-react";
import {
  getHomeSectionPath,
  homeSectionIds,
  RouteLink,
} from "@/shared/navigation";
import { useLang } from "@/features/language";

const HeroSection = () => {
  const { t } = useLang();
  return (
    <section id="home" className="workshop-hero">
      <div className="site-shell">
        <div className="workshop-hero-grid">
          <div className="workshop-hero-copy">
            <p className="eyebrow">
              <MapPin size={18} strokeWidth={1.75} aria-hidden="true" />{" "}
              {t("Serwis samochodowy · Wrocław", "Car workshop · Wroclaw")}
            </p>
            <h1 className="hero-title mt-5">
              {t("Sprawne auto.", "A car you can")}
              <br />
              <span className="text-primary">
                {t("Spokojna głowa.", "count on.")}
              </span>
            </h1>
            <p className="section-copy mt-6 max-w-[46ch]">
              {t(
                "Coś stuka, świeci się kontrolka albo zbliża się wymiana oleju? Zajmiemy się Twoim autem — od znalezienia usterki po naprawę.",
                "An unusual noise, a warning light or an oil change due? We take care of your car, from finding the fault to completing the repair.",
              )}
            </p>
            <div className="hero-actions mt-6 flex flex-wrap gap-3 lg:mt-8">
              <RouteLink
                to={getHomeSectionPath(homeSectionIds.booking)}
                className="premium-button-primary gap-3"
              >
                {t("Umów wizytę", "Book a visit")}
                <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" />
              </RouteLink>
              <a
                href="tel:+48712345678"
                className="premium-button-secondary gap-2"
              >
                <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
                {t("Zadzwoń", "Call us")}
              </a>
            </div>
            <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
              <Check
                size={20}
                strokeWidth={1.75}
                className="shrink-0 text-primary"
                aria-hidden="true"
              />
              {t(
                "Zakres i koszt naprawy poznasz przed rozpoczęciem prac.",
                "Know the repair scope and cost before work begins.",
              )}
            </p>
          </div>
          <figure className="workshop-hero-photo">
            <img
              src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=85"
              srcSet="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=640&q=80 640w, https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=85 1200w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt={t(
                "Mechanik podczas pracy przy samochodzie — zdjęcie ilustracyjne",
                "A mechanic working on a car — illustrative stock photo",
              )}
              width="1200"
              height="1000"
              fetchPriority="high"
            />
            <figcaption>
              {t("Zdjęcie ilustracyjne", "Illustrative photo")} · Kate
              Ibragimova / Unsplash
            </figcaption>
            <div className="photo-note">
              <span className="photo-note-dot" />
              <span>
                {t(
                  "Diagnostyka. Naprawa. Gotowe do drogi.",
                  "Diagnose. Repair. Back on the road.",
                )}
              </span>
            </div>
          </figure>
        </div>
        <div className="visit-strip">
          <div>
            <MapPin size={24} strokeWidth={1.75} aria-hidden="true" />
            <p>
              <strong>Wrocław, ul. Świdnicka 18</strong>
              <span>
                {t(
                  "Sprawdź dojazd do warsztatu",
                  "Find your way to the workshop",
                )}
              </span>
            </p>
            <RouteLink
              to={getHomeSectionPath(homeSectionIds.contact)}
              aria-label={t("Kontakt i dojazd", "Contact and directions")}
            >
              <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" />
            </RouteLink>
          </div>
          <div>
            <Phone size={24} strokeWidth={1.75} aria-hidden="true" />
            <p>
              <a href="tel:+48712345678">
                <strong>+48 71 234 56 78</strong>
              </a>
              <span>
                {t(
                  "Pon–Pt 8:00–18:00 · Sob 9:00–14:00",
                  "Mon–Fri 8:00–18:00 · Sat 9:00–14:00",
                )}
              </span>
            </p>
          </div>
          <div>
            <Languages size={24} strokeWidth={1.75} aria-hidden="true" />
            <p>
              <strong>
                {t(
                  "Obsługa po polsku i angielsku",
                  "We speak Polish and English",
                )}
              </strong>
              <span>
                {t(
                  "Opowiedz nam, co dzieje się z autem",
                  "Tell us what is happening with your car",
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
