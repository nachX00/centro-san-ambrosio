import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { ButtonLink } from "@/components/ui/Button";
import { examsByModality } from "@/lib/exams";

export const metadata: Metadata = {
  title: "Ecografía",
  description:
    "Ecografía y Doppler en el Centro Imagenológico San Ambrosio, Vallenar. Sin radiación ionizante.",
};

export default function UsPage() {
  const list = examsByModality("ecografia");
  return (
    <>
      <PageIntro kicker="Modalidad" title="Ecografía">
        <p>
          El ultrasonido ve órganos, vasos y partes blandas en tiempo real. No
          usa radiación ionizante. Algunos estudios piden ayuno o vejiga llena:
          está escrito en cada ficha.
        </p>
      </PageIntro>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image
            src="/brand/ecografia.jpg"
            alt="Luz sobre gel de ecografía, sin personas"
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
            Cotizar ecografía
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
