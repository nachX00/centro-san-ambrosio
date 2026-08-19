"use client";

import { useId, useMemo, useRef, useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { modalityMeta, searchExams, type Exam } from "@/lib/exams";
import { cn } from "@/lib/cn";

type ExamSearchProps = {
  className?: string;
  id?: string;
  onPick?: (exam: Exam) => void;
  placeholder?: string;
  destination?: "exam" | "quote";
  variant?: "default" | "hero";
};

export function ExamSearch({
  className,
  id,
  onPick,
  placeholder = "Escriba un examen: scanner, ecografía, tórax…",
  destination = "exam",
  variant = "default",
}: ExamSearchProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const listId = `${inputId}-listbox`;
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => searchExams(query, 7), [query]);
  const hero = variant === "hero";
  const expanded = open && results.length > 0;

  function go(exam: Exam) {
    onPick?.(exam);
    setQuery(exam.name);
    setOpen(false);
    if (!onPick) {
      if (destination === "quote") {
        router.push(`/cotizar?examen=${exam.slug}`);
      } else {
        router.push(`/examenes/${exam.slug}`);
      }
    }
  }

  return (
    <div
      className={cn(
        "relative z-30 rounded-md",
        hero
          ? "bg-cream text-navy outline-none focus-within:outline focus-within:outline-[3px] focus-within:outline-offset-2 focus-within:outline-cream"
          : "border border-ink/15 bg-surface outline-none focus-within:outline focus-within:outline-[3px] focus-within:outline-offset-2 focus-within:outline-scan",
        expanded && "search-lift",
        className,
      )}
    >
      <label htmlFor={inputId} className="sr-only">
        Buscar un examen
      </label>
      <div
        className={cn(
          "flex items-center gap-3",
          hero ? "min-h-16 px-5 md:min-h-20 md:px-6" : "min-h-12 px-3",
        )}
      >
        <Search
          className={cn(
            "shrink-0",
            hero ? "h-6 w-6 text-navy" : "h-5 w-5 text-ink",
          )}
          aria-hidden
        />
        <input
          ref={inputRef}
          id={inputId}
          role="combobox"
          aria-expanded={expanded}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={
            expanded && results[active] ? `${inputId}-opt-${results[active].slug}` : undefined
          }
          className={cn(
            "w-full bg-transparent outline-none focus:outline-none focus-visible:outline-none",
            hero
              ? "h-16 text-lg text-navy placeholder:text-[#3a5368] md:h-20 md:text-xl"
              : "h-12 text-base placeholder:text-ink/55",
          )}
          placeholder={placeholder}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
            setActive(0);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            window.setTimeout(() => setOpen(false), 120);
          }}
          onKeyDown={(event) => {
            if (!results.length) return;
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActive((i) => (i + 1) % results.length);
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive((i) => (i - 1 + results.length) % results.length);
            } else if (event.key === "Enter" && results[active]) {
              event.preventDefault();
              go(results[active]);
            } else if (event.key === "Escape") {
              setOpen(false);
            }
          }}
        />
      </div>
      {expanded ? (
        <ul
          id={listId}
          role="listbox"
          className={cn(
            "search-panel-in max-h-[min(28rem,70vh)] overflow-auto border-t",
            hero ? "border-copper" : "border-ink/10 p-1",
          )}
        >
          {results.map((exam, index) => (
            <li
              key={`${query}-${exam.slug}`}
              role="presentation"
              className="search-result-in"
              style={{ "--i": index } as CSSProperties}
            >
              <button
                type="button"
                id={`${inputId}-opt-${exam.slug}`}
                role="option"
                aria-selected={index === active}
                className={cn(
                  "flex w-full flex-col items-start text-left",
                  hero ? "px-5 py-3.5 md:px-6" : "rounded-sm px-3 py-2.5",
                  index === active
                    ? hero
                      ? "bg-[#e4ddd3]"
                      : "bg-mist"
                    : hero
                      ? "hover:bg-[#ebe4d9]"
                      : "hover:bg-mist/70",
                )}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => go(exam)}
              >
                <span className={cn("font-semibold text-navy", hero && "text-base md:text-lg")}>
                  {exam.name}
                </span>
                <span
                  className={cn(
                    "mt-0.5 text-sm font-medium",
                    hero ? "text-[#1a3348]" : "text-ink dark:text-cream",
                  )}
                >
                  {modalityMeta[exam.modality].title}
                  {" · "}
                  {exam.radiation ? "Con radiación" : "Sin radiación"}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
