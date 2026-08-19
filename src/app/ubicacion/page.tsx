import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/layout/PageIntro";
import { ButtonLink } from "@/components/ui/Button";
import { mapsUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ubicación",
  description: "San Ambrosio 536, Vallenar. Cómo llegar al Centro Imagenológico San Ambrosio.",
};

export default function LocationPage() {
  return (
    <>
      <PageIntro kicker="Vallenar" title="San Ambrosio 536">
        <p>
          {site.address.line}. {site.hours.summary}. Teléfono{" "}
          <a className="text-scan underline" href={site.phone.tel}>
            {site.phone.display}
          </a>
          .
        </p>
      </PageIntro>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 lg:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md">
          <Image
            src="/brand/fachada.jpg"
            alt="Calle y fachada de estuco en el norte de Chile"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-2xl">Antes de venir</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Revise la preparación del examen en su ficha.</li>
            <li>Traiga cédula y la orden médica, si la tiene.</li>
            <li>
              Hay cierre de mediodía: {site.hours.lunch.toLowerCase()}.
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={mapsUrl} target="_blank" rel="noopener noreferrer">
              Abrir en Google Maps
            </ButtonLink>
            <ButtonLink href={site.phone.whatsapp} variant="secondary" target="_blank" rel="noopener noreferrer">
              Avisar por WhatsApp
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-ink/65">
            El mapa usa una búsqueda de la dirección. El pin se afinará cuando
            exista ficha oficial del local.
          </p>
        </div>
      </div>
    </>
  );
}
