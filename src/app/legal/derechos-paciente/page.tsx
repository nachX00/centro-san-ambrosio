import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Derechos del paciente",
  description:
    "Derechos y deberes de las personas en relación con acciones vinculadas a su atención de salud (Ley 20.584).",
};

export default function PatientRightsPage() {
  return (
    <>
      <PageIntro kicker="Ley 20.584" title="Derechos y deberes del paciente">
        <p>
          Resumen orientativo. El texto oficial está en la Biblioteca del
          Congreso Nacional.
        </p>
      </PageIntro>
      <article className="mx-auto max-w-3xl space-y-4 px-4 pb-16 text-ink/85">
        <ul className="list-disc space-y-2 pl-5">
          <li>Trato digno y respetuoso, sin discriminación.</li>
          <li>Información suficiente, oportuna y comprensible sobre el examen.</li>
          <li>Consentimiento informado cuando el procedimiento lo exige (por ejemplo, contraste).</li>
          <li>Reserva de la ficha y de las imágenes.</li>
          <li>Compañía y asistencia espiritual, según las reglas del recinto.</li>
          <li>Reclamo ante el prestador y, si corresponde, ante la Superintendencia de Salud.</li>
        </ul>
        <p>
          Reclamos a la Superintendencia de Salud:{" "}
          <a
            className="text-scan underline"
            href="https://www.superdesalud.gob.cl/"
            rel="noopener noreferrer"
          >
            superdesalud.gob.cl
          </a>
          .
        </p>
      </article>
    </>
  );
}
