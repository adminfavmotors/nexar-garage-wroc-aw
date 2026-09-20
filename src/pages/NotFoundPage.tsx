import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { appRoutes, RouteLink } from "@/shared/navigation";
import { SiteSeo } from "@/shared/seo";
import { useLang } from "@/features/language";

const NotFoundPage = () => {
  const location = useLocation();
  const { t } = useLang();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SiteSeo
        title={t("404 | Nexar Garage Wrocław", "404 | Nexar Garage Wroclaw")}
        description={t("Nie znaleziono strony, której szukasz.", "The page you are looking for was not found.")}
        robots="noindex, follow"
        ogTitle="404 | Nexar Garage"
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {t("Nie znaleziono strony.", "Page not found.")}
        </p>
        <RouteLink to={appRoutes.home} className="text-primary underline hover:text-primary/90">
          {t("Wróć na stronę główną", "Return to home")}
        </RouteLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
