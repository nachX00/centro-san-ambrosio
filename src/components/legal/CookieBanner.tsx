"use client";

import Link from "next/link";
import { useCallback, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";

const KEY = "sa-cookie-consent";
const EVENT = "sa-consent";

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getConsent() {
  return window.localStorage.getItem(KEY);
}

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getConsent, () => "ssr");

  const choose = useCallback((value: "essential" | "analytics") => {
    window.localStorage.setItem(KEY, value);
    window.dispatchEvent(new Event(EVENT));
  }, []);

  if (consent === "ssr" || consent) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed inset-x-3 bottom-20 z-50 max-w-xl rounded-md border border-ink/10 bg-surface p-4 shadow-sm md:bottom-4 md:left-4"
    >
      <h2 id="cookie-title" className="font-display text-lg">
        Cookies
      </h2>
      <p id="cookie-desc" className="mt-2 text-sm text-ink/80">
        Usamos solo cookies esenciales para que el sitio funcione. Si más
        adelante hay analítica, será opt-in. Puede leer la{" "}
        <Link className="text-scan underline" href="/legal/cookies">
          política de cookies
        </Link>
        .
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button type="button" onClick={() => choose("essential")}>
          Solo esenciales
        </Button>
        <Button type="button" variant="secondary" onClick={() => choose("analytics")}>
          Aceptar analítica si existe
        </Button>
      </div>
    </div>
  );
}
