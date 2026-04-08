import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AppRouteFallback from "@/app/AppRouteFallback";
import { appRoutes } from "@/shared/navigation";

const HomePage = lazy(() => import("@/pages/HomePage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<AppRouteFallback />}>
      <Routes>
        <Route path={appRoutes.home} element={<HomePage />} />
        <Route path={appRoutes.services} element={<ServicesPage />} />
        <Route path={appRoutes.privacy} element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
