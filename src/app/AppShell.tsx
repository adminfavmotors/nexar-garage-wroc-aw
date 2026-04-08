import { BrowserRouter } from "react-router-dom";
import AppProviders from "@/app/AppProviders";
import AppRoutes from "@/app/AppRoutes";
import { CookieBanner } from "@/shared/cookies";
import { ScrollManager } from "@/shared/navigation";

const AppShell = () => {
  return (
    <AppProviders>
      <BrowserRouter>
        <ScrollManager />
        <AppRoutes />
      </BrowserRouter>
      <CookieBanner />
    </AppProviders>
  );
};

export default AppShell;
