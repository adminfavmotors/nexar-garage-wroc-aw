import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useHref, useLocation, useNavigate } from "react-router-dom";

type RouteLinkProps = {
  to: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

const getTarget = (to: string) => {
  const [pathAndSearch, hashPart] = to.split("#");
  const [pathnamePart, searchPart] = pathAndSearch.split("?");

  return {
    pathname: pathnamePart || "/",
    search: searchPart ? `?${searchPart}` : "",
    hash: hashPart ? `#${hashPart}` : "",
  };
};

const isModifiedEvent = (event: MouseEvent<HTMLAnchorElement>) =>
  event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;

const resetScroll = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  scrollToTop();
  requestAnimationFrame(scrollToTop);
  window.setTimeout(scrollToTop, 120);
};

const RouteLink = ({ to, onClick, target, children, ...props }: RouteLinkProps) => {
  const href = useHref(to);
  const navigate = useNavigate();
  const location = useLocation();
  const routeTarget = getTarget(to);

  return (
    <a
      href={href}
      target={target}
      onClick={(event) => {
        onClick?.(event);

        if (
          event.defaultPrevented ||
          target === "_blank" ||
          event.button !== 0 ||
          isModifiedEvent(event)
        ) {
          return;
        }

        event.preventDefault();

        if (
          routeTarget.hash === "" &&
          location.pathname === routeTarget.pathname &&
          location.search === routeTarget.search &&
          location.hash === ""
        ) {
          resetScroll();
          return;
        }

        navigate(to);

        if (routeTarget.hash === "") {
          resetScroll();
        }
      }}
      {...props}
    >
      {children}
    </a>
  );
};

export default RouteLink;
