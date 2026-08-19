"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, FileSearch, Home, Images, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/cn";
import { mobileTabs } from "@/lib/nav";

const icons = {
  "/": Home,
  "/examenes": Images,
  "/cotizar": ClipboardList,
  "/resultados": FileSearch,
  "/mas": MoreHorizontal,
};

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Accesos principales"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-5">
        {mobileTabs.map((item) => {
          const Icon = icons[item.href];
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 px-1 text-[0.7rem] font-semibold",
                  active ? "text-ink" : "text-ink/60",
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="h-5 w-5" aria-hidden />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
