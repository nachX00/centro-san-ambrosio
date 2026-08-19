import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { ExamSearch } from "@/components/search/ExamSearch";
import { exams, examsByModality, formatPrice, modalityMeta, type Modality } from "@/lib/exams";

export const metadata: Metadata = {
  title: "Exámenes",
  description:
    "Catálogo de radiografías, tomografías computadas y ecografías del Centro Imagenológico San Ambrosio en Vallenar.",
};

const order: Modality[] = ["radiologia", "tomografia", "ecografia"];

export default function ExamsPage() {
  return (
    <>
      <PageIntro kicker="Catálogo" title="Exámenes de imagen">
        <p>
          {exams.length} prestaciones iniciales. Los precios se confirman al
          cotizar: todavía no publicamos un arancel inventado.
        </p>
        <ExamSearch className="mt-6 max-w-xl" />
      </PageIntro>
      <div className="mx-auto max-w-6xl space-y-12 px-4 pb-16">
        {order.map((modality) => (
          <section key={modality} aria-labelledby={`mod-${modality}`}>
            <div className="flex items-end justify-between gap-4">
              <h2 id={`mod-${modality}`} className="font-display text-3xl">
                {modalityMeta[modality].title}
              </h2>
              <Link className="text-scan" href={modalityMeta[modality].href}>
                Sobre esta modalidad
              </Link>
            </div>
            <ul className="mt-5 divide-y divide-ink/10 rounded-md border border-ink/10 bg-surface">
              {examsByModality(modality).map((exam) => (
                <li key={exam.slug}>
                  <Link
                    href={`/examenes/${exam.slug}`}
                    className="flex flex-col gap-1 px-4 py-4 hover:bg-mist/60 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span>
                      <span className="block font-semibold">{exam.name}</span>
                      <span className="text-sm text-ink/65">
                        {exam.duration}
                        {exam.radiation ? " · Con radiación" : " · Sin radiación"}
                      </span>
                    </span>
                    <span className="tabular text-sm">{formatPrice(exam.priceParticular)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
