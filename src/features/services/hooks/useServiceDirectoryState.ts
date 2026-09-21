import { useLocation, useNavigate } from "react-router-dom";
import { servicePages } from "@/features/services/data";

export const useServiceDirectoryState = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const slug = location.hash.slice(1);
  const activeSlug = servicePages.some((service) => service.slug === slug)
    ? slug
    : "";

  const updateActiveSlug = (nextSlug: string) => {
    navigate(
      {
        pathname: location.pathname,
        search: location.search,
        hash: nextSlug ? `#${nextSlug}` : "#uslugi",
      },
      { replace: true, state: { preserveScroll: true } },
    );
  };

  return { activeSlug, updateActiveSlug };
};
