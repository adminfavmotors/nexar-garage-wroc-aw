import { useEffect, useRef } from "react";

export const useScrollReveal = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const show = () => {
      el.dataset.reveal = "visible";
    };

    if (mediaQuery.matches) {
      show();
      return;
    }

    const rect = el.getBoundingClientRect();
    const isInitiallyVisible = rect.top < window.innerHeight * 0.9;

    if (isInitiallyVisible) {
      show();
      return;
    }

    el.dataset.reveal = "pending";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};
