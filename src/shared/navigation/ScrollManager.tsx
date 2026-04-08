import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    const scrollToLocation = () => {
      if (!location.hash) {
        scrollToTop();
        return;
      }

      const id = decodeURIComponent(location.hash.slice(1));
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      } else {
        scrollToTop();
      }
    };

    scrollToLocation();
    requestAnimationFrame(scrollToLocation);
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default ScrollManager;
