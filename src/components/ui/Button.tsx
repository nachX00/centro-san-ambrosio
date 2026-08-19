import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "copper" | "hero" | "heroSecondary";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink/90 focus-visible:outline-offset-2",
  secondary:
    "border border-ink/25 bg-surface text-ink hover:border-ink/50 hover:bg-mist",
  ghost: "text-ink hover:bg-ink/5",
  copper: "bg-ink text-paper hover:bg-ink/90",
  hero:
    "border-2 border-cream bg-cream text-navy hover:bg-white focus-visible:outline-cream",
  heroSecondary:
    "border-2 border-cream bg-navy/80 text-cream hover:bg-navy focus-visible:outline-cream",
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-base font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-base font-semibold no-underline transition-colors",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}
