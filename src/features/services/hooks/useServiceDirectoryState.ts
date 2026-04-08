import { useEffect, useMemo, useRef, useState } from "react";
import { servicePages } from "@/features/services/data";

const defaultServiceSlug = servicePages[0]?.slug ?? "";

export const useServiceDirectoryState = () => {
  const [activeSlug, setActiveSlug] = useState(defaultServiceSlug);
  const detailsRef = useRef<HTMLElement | null>(null);

  const activeService = useMemo(() => {
    return (servicePages.find((service) => service.slug === activeSlug) ?? servicePages[0])!;
  }, [activeSlug]);

  useEffect(() => {
    const hashSlug = window.location.hash.replace("#", "");
    if (hashSlug && servicePages.some((service) => service.slug === hashSlug)) {
      setActiveSlug(hashSlug);
      requestAnimationFrame(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  const openService = (slug: string) => {
    setActiveSlug(slug);
    window.history.replaceState(null, "", `/uslugi#${slug}`);
    requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const updateActiveSlug = (slug: string) => {
    setActiveSlug(slug);
    window.history.replaceState(null, "", `/uslugi#${slug}`);
  };

  return {
    activeService,
    activeSlug,
    detailsRef,
    openService,
    updateActiveSlug,
  };
};
