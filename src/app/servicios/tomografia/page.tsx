import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { ButtonLink } from "@/components/ui/Button";
import { examsByModality } from "@/lib/exams";

export const metadata: Metadata = {
  title: "Tomografía computada",
  description:
    "Tomografía computada (scanner) en el Centro Imagenológico San Ambrosio, Vallenar.",
};

export default function CtPage() {
  const list = examsByModality("tomografia");
  return (
    <>
      <PageIntro kicker="Modalidad" title="Tomografía computada">
        <p>
          El scanner obtiene cortes finos de cerebro, tórax, abdomen o columna.
          Hay más radiación que en una radiografía. A veces se usa contraste
          yodado: entonces pedimos ayuno y un examen de creatinina.
        </p>
      </PageIntro>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image
            src="/brand/tomografia.jpg"
            alt="Anillo de un equipo de tomografía, sala vacía"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-2xl">Exámenes frecuentes</h2>
          <ul className="mt-4 space-y-2">
            {list.map((exam) => (
              <li key={exam.slug}>
                <Link className="text-scan underline-offset-2 hover:underline" href={`/examenes/${exam.slug}`}>
                  {exam.name}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/cotizar" className="mt-6">
            Cotizar tomografía
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
