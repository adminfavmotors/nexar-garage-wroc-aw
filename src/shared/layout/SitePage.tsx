import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SiteSeo, type SiteSeoProps } from "@/shared/seo";
import SiteFooter from "@/shared/layout/SiteFooter";
import SiteHeader from "@/shared/layout/SiteHeader";

type SitePageProps = {
  children: ReactNode;
  seo: SiteSeoProps;
  className?: string;
  mainClassName?: string;
  withFooter?: boolean;
  withHeader?: boolean;
};

const SitePage = ({
  children,
  seo,
  className,
  mainClassName,
  withFooter = true,
  withHeader = true,
}: SitePageProps) => {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <SiteSeo {...seo} />
      {withHeader ? <SiteHeader /> : null}
      <main className={mainClassName}>{children}</main>
      {withFooter ? <SiteFooter /> : null}
    </div>
  );
};

export default SitePage;
