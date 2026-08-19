import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { ButtonLink } from "@/components/ui/Button";
import { examsByModality } from "@/lib/exams";

export const metadata: Metadata = {
  title: "Radiología",
  description:
    "Radiografías digitales en el Centro Imagenológico San Ambrosio, Vallenar.",
};

export default function RadiologyPage() {
  const list = examsByModality("radiologia");
  return (
    <>
      <PageIntro kicker="Modalidad" title="Radiología">
        <p>
          Radiografías digitales de tórax, huesos y control de lesiones. El
          estudio es breve. Hay radiación, en dosis baja. Si podría estar
          embarazada, dígalo antes de entrar a la sala.
        </p>
      </PageIntro>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image
            src="/brand/radiologia.jpg"
            alt="Película radiográfica sobre un visor de luz cálida"
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
            Cotizar radiografía
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
