import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/layout/PageIntro";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "El centro",
  description:
    "Centro Imagenológico San Ambrosio en Vallenar: radiología, tomografía y ecografía.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro kicker="Quiénes somos" title="Un centro de imagen en Vallenar">
        <p>
          Atendemos en {site.address.street}. No pretendemos ser una clínica de
          Santiago con sucursal: somos un prestador local que quiere informes
          tan claros como los de un servicio grande.
        </p>
      </PageIntro>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 md:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md">
          <Image
            src="/brand/sala-lectura.jpg"
            alt="Sala de lectura en penumbra, escritorio y lámpara"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4 text-ink/80">
          <p>
            Las tres modalidades de este sitio —radiología, tomografía
            computada y ecografía— son las que ofrecemos. No listamos
            resonancia ni PET porque no las hacemos.
          </p>
          <p>
            El equipo profesional, los números de autorización sanitaria y el
            RUT institucional se publican aquí en cuanto estén firmes. Hasta
            entonces no inventamos credenciales.
          </p>
          <h2 className="font-display text-2xl text-ink">Atención preferente</h2>
          <p>
            Las personas con discapacidad y sus cuidadores tienen atención
            preferente y oportuna (Ley 21.768). Avísenos al llegar o al
            cotizar.
          </p>
          <h2 className="font-display text-2xl text-ink">Horario</h2>
          <p>
            {site.hours.summary}. {site.hours.lunch}. {site.hours.closed}.
          </p>
          <ButtonLink href="/ubicacion">Cómo llegar</ButtonLink>
        </div>
      </div>
    </>
  );
}
