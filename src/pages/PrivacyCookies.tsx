import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useLang } from "@/contexts/LanguageContext";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const PrivacyCookies = () => {
  const { t } = useLang();
  const { consent, openSettings } = useCookieConsent();

  return (
    <div className="min-h-screen bg-background">
      <Seo />
      <Header />
      <main className="pt-20 lg:pt-24">
        <section className="border-b border-border pt-12 pb-14 lg:pt-16 lg:pb-20">
          <div className="container mx-auto max-w-5xl px-6">
            <p className="font-inter text-[12px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
              RODO / COOKIES
            </p>
            <h1 className="mt-4 font-barlow text-5xl font-extrabold uppercase leading-none text-foreground sm:text-[72px]">
              {t("PRYWATNOŚĆ I PLIKI COOKIE", "PRIVACY AND COOKIES")}
            </h1>
            <p className="mt-6 max-w-3xl font-inter text-[16px] leading-relaxed text-muted-foreground">
              {t(
                "Tutaj znajdziesz najważniejsze informacje o przetwarzaniu danych osobowych oraz zasadach używania plików cookie i treści zewnętrznych na stronie Nexar Garage.",
                "Here you can find the key information about personal data processing and the use of cookies and external content on the Nexar Garage website."
              )}
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <section className="border border-border bg-surface p-8">
                <h2 className="font-barlow text-[30px] font-bold uppercase text-foreground">
                  {t("Administrator danych", "Data controller")}
                </h2>
                <p className="mt-4 font-inter text-[14px] leading-relaxed text-muted-foreground">
                  Nexar Garage Sp. z o.o.
                  <br />
                  ul. Świdnicka 18, 50-068 Wrocław
                  <br />
                  kontakt@nexargarage.pl
                  <br />
                  +48 71 234 56 78
                </p>
                <p className="mt-4 font-inter text-[14px] leading-relaxed text-muted-foreground">
                  {t(
                    "Dane z formularza rezerwacji wykorzystujemy wyłącznie do kontaktu, wyceny oraz ustalenia terminu wizyty serwisowej.",
                    "We use the booking form data only for contact, quotation and arranging your service appointment."
                  )}
                </p>
              </section>

              <section className="border border-border bg-surface p-8">
                <h2 className="font-barlow text-[30px] font-bold uppercase text-foreground">
                  {t("Pliki cookie", "Cookies")}
                </h2>
                <p className="mt-4 font-inter text-[14px] leading-relaxed text-muted-foreground">
                  {t(
                    "Strona używa niezbędnych plików cookie do poprawnego działania. Treści zewnętrzne, takie jak Google Maps, uruchamiamy dopiero po zaakceptowaniu dodatkowych cookie.",
                    "The site uses essential cookies for core functionality. External content such as Google Maps is loaded only after accepting additional cookies."
                  )}
                </p>
                <p className="mt-4 font-inter text-[14px] leading-relaxed text-muted-foreground">
                  {consent === "all"
                    ? t("Aktualny status zgody: zaakceptowano wszystkie pliki cookie.", "Current consent status: all cookies accepted.")
                    : consent === "essential"
                      ? t("Aktualny status zgody: tylko pliki niezbędne.", "Current consent status: essential cookies only.")
                      : t("Aktualny status zgody: oczekuje na decyzję użytkownika.", "Current consent status: awaiting user decision.")}
                </p>
                <button
                  type="button"
                  onClick={openSettings}
                  className="mt-6 border border-border px-5 py-3 font-barlow text-[13px] font-bold uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:bg-elevated"
                >
                  {t("USTAWIENIA COOKIE", "COOKIE SETTINGS")}
                </button>
              </section>
            </div>

            <section className="mt-8 border border-border bg-surface p-8">
              <h2 className="font-barlow text-[30px] font-bold uppercase text-foreground">
                {t("Twoje prawa", "Your rights")}
              </h2>
              <p className="mt-4 font-inter text-[14px] leading-relaxed text-muted-foreground">
                {t(
                  "Masz prawo do dostępu do swoich danych, ich sprostowania, ograniczenia przetwarzania, usunięcia oraz kontaktu w sprawie obsługi zgłoszenia. W sprawach dotyczących danych osobowych możesz pisać na adres kontakt@nexargarage.pl.",
                  "You have the right to access, rectify, restrict processing or delete your data, and to contact us regarding your service request. For privacy matters you can write to kontakt@nexargarage.pl."
                )}
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyCookies;
