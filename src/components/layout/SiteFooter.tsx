import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { legalNav, primaryNav } from "@/lib/nav";
import { mapsUrl, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-navy bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo invert />
          <p className="mt-4 max-w-md text-cream/80">
            {site.tagline} Radiología, tomografía computada y ecografía en el
            valle del Huasco.
          </p>
          <p className="mt-4 text-cream/80">
            {site.address.line}
            <br />
            {site.hours.summary}
            <br />
            {site.hours.closed}
          </p>
          <SocialLinks />
        </div>
        <div>
          <h2 className="font-display text-lg">Visitar</h2>
          <ul className="mt-3 space-y-2 text-cream/85">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-cream" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-cream" href="/ubicacion">
                Cómo llegar
              </Link>
            </li>
            <li>
              <a className="hover:text-cream" href="/brand/documentos/index.html">
                Plantillas de documentos
              </a>
            </li>
            <li>
              <a className="hover:text-cream" href={mapsUrl}>
                Abrir en mapas
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg">Legal</h2>
          <ul className="mt-3 space-y-2 text-cream/85">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-cream" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm text-cream/70 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Tratamiento de datos
            conforme a la Ley 21.719.
          </p>
          <p>
            Responsable: {site.legal.responsible}. DPO: {site.legal.dpo}.
          </p>
        </div>
      </div>
    </footer>
  );
}
