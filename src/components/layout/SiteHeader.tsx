"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { ThemeToggle } from "@/components/a11y/ThemeToggle";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { primaryNav } from "@/lib/nav";
import { site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="min-w-0 rounded-sm" onClick={() => setOpen(false)}>
          <span className="sr-only">{site.name}</span>
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-[0.98rem] font-medium text-ink/80 hover:bg-ink/5 hover:text-ink",
                  active && "bg-ink/5 text-ink",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={site.phone.tel}
            className="hidden min-h-11 items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-ink sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone.display}
          </a>
          <ButtonLink href="/cotizar" className="hidden sm:inline-flex">
            Cotizar
          </ButtonLink>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-ink/15 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          </button>
        </div>
      </div>
      <div className="copper-rule" />

      {open ? (
        <div id="menu-movil" className="border-t border-ink/10 bg-paper px-4 py-4 lg:hidden">
          <nav aria-label="Menú móvil" className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-11 rounded-md px-3 py-3 text-lg font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phone.tel} className="min-h-11 rounded-md px-3 py-3 text-lg font-medium">
              Llamar {site.phone.display}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
