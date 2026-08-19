import type { ReactNode } from "react";
import { CopperRule } from "@/components/layout/CopperRule";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-6xl px-4 pb-8 pt-10 md:pt-14">
      {kicker ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink dark:text-cream/90">
          {kicker}
        </p>
      ) : null}
      <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
        {title}
      </h1>
      {children ? (
        <div className="mt-4 max-w-2xl text-lg text-ink dark:text-cream/90">{children}</div>
      ) : null}
      <CopperRule className="mt-8 max-w-24" />
    </header>
  );
}
