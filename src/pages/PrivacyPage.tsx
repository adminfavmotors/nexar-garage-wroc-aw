import { SitePage } from "@/shared/layout";
import { useLang } from "@/features/language";
import { useCookieConsent } from "@/features/cookie-consent";

const PrivacyPage = () => {
  const { t } = useLang();
  const { consent, openSettings } = useCookieConsent();

  return (
    <SitePage
      seo={{
        title: t(
          "RODO i cookies | Nexar Garage Wrocław",
          "Privacy and cookies | Nexar Garage Wroclaw",
        ),
        description: t(
          "Informacje o ochronie danych osobowych, przetwarzaniu danych i plikach cookie w Nexar Garage.",
          "Information about personal data processing, privacy rights and cookies at Nexar Garage.",
        ),
        canonical: "https://www.nexargarage.pl/rodo-cookies",
        robots: "noindex, follow",
        ogTitle: t(
          "RODO i cookies | Nexar Garage",
          "Privacy and cookies | Nexar Garage",
        ),
      }}
      mainClassName="pt-16 lg:pt-24"
    >
      <section className="border-b border-border pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="site-shell max-w-5xl">
          <p className="eyebrow">RODO / COOKIES</p>
          <h1 className="section-title mt-4">
            {t("Prywatność i pliki cookie", "Privacy and cookies")}
          </h1>
          <p className="mt-6 max-w-3xl font-body text-base leading-relaxed text-muted-foreground">
            {t(
              "Tutaj znajdziesz najważniejsze informacje o przetwarzaniu danych osobowych oraz zasadach używania plików cookie i treści zewnętrznych na stronie Nexar Garage.",
              "Here you can find the key information about personal data processing and the use of cookies and external content on the Nexar Garage website.",
            )}
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <section className="border border-border bg-surface p-5 sm:p-8">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground">
                {t("Administrator danych", "Data controller")}
              </h2>
              <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-muted-foreground">
                Nexar Garage Sp. z o.o.
                <br />
                ul. Świdnicka 18, 50-068 Wrocław
                <br />
                kontakt@nexargarage.pl
                <br />
                +48 71 234 56 78
              </p>
              <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-muted-foreground">
                {t(
                  "Dane z formularza rezerwacji wykorzystujemy wyłącznie do kontaktu, wyceny oraz ustalenia terminu wizyty serwisowej.",
                  "We use the booking form data only for contact, quotation and arranging your service appointment.",
                )}
              </p>
            </section>

            <section className="border border-border bg-surface p-5 sm:p-8">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground">
                {t("Pliki cookie", "Cookies")}
              </h2>
              <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-muted-foreground">
                {t(
                  "Strona używa niezbędnych plików cookie do poprawnego działania. Treści zewnętrzne, takie jak Google Maps, uruchamiamy dopiero po zaakceptowaniu dodatkowych cookie.",
                  "The site uses essential cookies for core functionality. External content such as Google Maps is loaded only after accepting additional cookies.",
                )}
              </p>
              <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-muted-foreground">
                {consent === "all"
                  ? t(
                      "Aktualny status zgody: zaakceptowano wszystkie pliki cookie.",
                      "Current consent status: all cookies accepted.",
                    )
                  : consent === "essential"
                    ? t(
                        "Aktualny status zgody: tylko pliki niezbędne.",
                        "Current consent status: essential cookies only.",
                      )
                    : t(
                        "Aktualny status zgody: oczekuje na decyzję użytkownika.",
                        "Current consent status: awaiting user decision.",
                      )}
              </p>
              <button
                type="button"
                onClick={openSettings}
                className="premium-button-secondary mt-6"
              >
                {t("Ustawienia cookies", "Cookie settings")}
              </button>
            </section>
          </div>

          <section className="mt-8 border border-border bg-surface p-5 sm:p-8">
            <h2 className="font-display text-2xl font-semibold leading-tight text-foreground">
              {t("Twoje prawa", "Your rights")}
            </h2>
            <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-muted-foreground">
              {t(
                "Masz prawo do dostępu do swoich danych, ich sprostowania, ograniczenia przetwarzania, usunięcia oraz kontaktu w sprawie obsługi zgłoszenia. W sprawach dotyczących danych osobowych możesz pisać na adres kontakt@nexargarage.pl.",
                "You have the right to access, rectify, restrict processing or delete your data, and to contact us regarding your service request. For privacy matters you can write to kontakt@nexargarage.pl.",
              )}
            </p>
          </section>
        </div>
      </section>
    </SitePage>
  );
};

export default PrivacyPage;
