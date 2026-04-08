import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { appRoutes, RouteLink } from "@/shared/navigation";
import { SiteSeo } from "@/shared/seo";

const NotFoundPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SiteSeo
        title="404 | Nexar Garage WrocĹ‚aw"
        description="Nie znaleziono strony, ktĂłrej szukasz."
        robots="noindex, follow"
        ogTitle="404 | Nexar Garage"
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <RouteLink to={appRoutes.home} className="text-primary underline hover:text-primary/90">
          Return to Home
        </RouteLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
