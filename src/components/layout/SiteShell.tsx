import type { ReactNode } from "react";
import { JsonLd } from "@/components/layout/JsonLd";
import { MobileNav } from "@/components/layout/MobileNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col pb-16 md:pb-0">
      <SkipLink />
      <JsonLd />
      <SiteHeader />
      <main id="contenido-principal" className="flex-1 outline-none" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
      <MobileNav />
    </div>
  );
}
