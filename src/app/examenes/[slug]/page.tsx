import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/layout/PageIntro";
import { ButtonLink } from "@/components/ui/Button";
import { exams, getExam, modalityMeta } from "@/lib/exams";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return exams.map((exam) => ({ slug: exam.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exam = getExam(slug);
  if (!exam) return { title: "Examen" };
  return {
    title: exam.name,
    description: `${exam.name} en Vallenar. ${exam.indications}`,
  };
}

export default async function ExamDetailPage({ params }: Props) {
  const { slug } = await params;
  const exam = getExam(slug);
  if (!exam) notFound();
  const modality = modalityMeta[exam.modality];

  return (
    <>
      <PageIntro kicker={modality.title} title={exam.name}>
        <p>{exam.indications}</p>
      </PageIntro>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="space-y-8">
          <section>
            <h2 className="font-display text-2xl">Cómo prepararse</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {exam.preparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl">Qué traer</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {exam.bring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          {exam.notes ? (
            <section>
              <h2 className="font-display text-2xl">Nota</h2>
              <p className="mt-3">{exam.notes}</p>
            </section>
          ) : null}
          <p className="text-sm text-ink/65">
            Esta ficha es orientación general y no reemplaza la indicación de su
            médico.
          </p>
        </article>
        <aside className="h-fit rounded-md border border-ink/10 bg-surface p-5">
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-ink/60">Duración aproximada</dt>
              <dd className="font-semibold">{exam.duration}</dd>
            </div>
            <div>
              <dt className="text-ink/60">Radiación ionizante</dt>
              <dd className="font-semibold">{exam.radiation ? "Sí" : "No"}</dd>
            </div>
            <div>
              <dt className="text-ink/60">Contraste</dt>
              <dd className="font-semibold">
                {exam.contrastPossible ? "A veces, según la orden" : "No"}
              </dd>
            </div>
            <div>
              <dt className="text-ink/60">Resultados</dt>
              <dd className="font-semibold">{exam.results}</dd>
            </div>
            <div>
              <dt className="text-ink/60">Código interno</dt>
              <dd className="tabular">{exam.code}</dd>
            </div>
          </dl>
          <ButtonLink href={`/cotizar?examen=${exam.slug}`} className="mt-6 w-full">
            Cotizar este examen
          </ButtonLink>
        </aside>
      </div>
    </>
  );
}
