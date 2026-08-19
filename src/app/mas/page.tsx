"use client";

import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { usePreferences } from "@/components/a11y/PreferencesProvider";
import { legalNav, primaryNav } from "@/lib/nav";
import { site } from "@/lib/site";

export default function MorePage() {
  const { largeText, setLargeText, theme, setTheme } = usePreferences();

  return (
    <>
      <PageIntro kicker="Menú" title="Más">
        <p>Accesos secundarios, apariencia, texto grande y canales de contacto.</p>
      </PageIntro>
      <div className="mx-auto max-w-3xl space-y-8 px-4 pb-16">
        <section className="rounded-md border border-ink/10 bg-surface p-5">
          <h2 className="font-display text-2xl">Apariencia</h2>
          <p className="mt-2 text-ink/75">
            La versión oscura usa el navy de lectura y el crema de los
            documentos. Se guarda en este navegador.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              className={`min-h-11 rounded-md border px-4 font-semibold ${
                theme === "light"
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/20 bg-paper"
              }`}
              onClick={() => setTheme("light")}
              aria-pressed={theme === "light"}
            >
              Clara
            </button>
            <button
              type="button"
              className={`min-h-11 rounded-md border px-4 font-semibold ${
                theme === "dark"
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/20 bg-paper"
              }`}
              onClick={() => setTheme("dark")}
              aria-pressed={theme === "dark"}
            >
              Oscura
            </button>
          </div>
        </section>
        <section className="rounded-md border border-ink/10 bg-surface p-5">
          <h2 className="font-display text-2xl">Texto grande</h2>
          <p className="mt-2 text-ink/75">
            Aumenta el tamaño de la letra en todo el sitio. Se guarda en este
            navegador.
          </p>
          <label className="mt-4 flex min-h-11 items-center gap-3">
            <input
              type="checkbox"
              checked={largeText}
              onChange={(event) => setLargeText(event.target.checked)}
            />
            Activar texto grande
          </label>
        </section>
        <section>
          <h2 className="font-display text-2xl">Secciones</h2>
          <ul className="mt-3 space-y-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link className="text-scan underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="text-scan underline" href="/ubicacion">
                Ubicación
              </Link>
            </li>
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link className="text-scan underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl">Contacto</h2>
          <p className="mt-2">
            <a className="text-scan underline" href={site.phone.tel}>
              {site.phone.display}
            </a>
            <br />
            {site.address.line}
          </p>
        </section>
      </div>
    </>
  );
}
