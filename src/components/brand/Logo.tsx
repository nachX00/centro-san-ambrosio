import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmark?: boolean;
  invert?: boolean;
};

export function LogoMark({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  const ink = invert ? "#F6F3EE" : "var(--ink)";
  const paper = invert ? "#0B1F33" : "var(--paper)";
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("logo-mark", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="48" height="48" rx="6" fill={ink} />
      <rect
        x="8.5"
        y="8.5"
        width="31"
        height="31"
        rx="2"
        fill="none"
        stroke={paper}
        strokeWidth="1.1"
      />
      <path
        d="M11 29.5 C17.5 19.5, 29 36, 37 21.5"
        fill="none"
        stroke={paper}
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <rect x="8.5" y="23.25" width="31" height="1.5" fill="#B87333" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  wordmark = true,
  invert = false,
}: LogoProps) {
  return (
    <span className={cn("logo-mark inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("h-9 w-9 shrink-0", markClassName)} invert={invert} />
      {wordmark ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={cn(
              "font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em]",
              invert ? "text-cream/75" : "text-ink/70",
            )}
          >
            Centro Imagenológico
          </span>
          <span
            className={cn(
              "font-display text-[1.15rem] font-medium tracking-tight",
              invert ? "text-cream" : "text-ink",
            )}
          >
            San Ambrosio
          </span>
        </span>
      ) : null}
    </span>
  );
}
