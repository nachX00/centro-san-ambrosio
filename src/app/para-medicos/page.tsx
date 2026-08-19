import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Para médicos",
  description:
    "Cómo derivar pacientes al Centro Imagenológico San Ambrosio y qué informe recibirá.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageIntro kicker="Médicos referentes" title="Cómo enviar a su paciente">
        <p>
          Una orden clara acorta la espera y evita un estudio incompleto. El
          informe vuelve con membrete San Ambrosio, técnica, hallazgos y
          conclusión.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-3xl space-y-8 px-4 pb-16">
        <section>
          <h2 className="font-display text-2xl">En la orden, por favor</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Nombre, RUT y fecha de nacimiento del paciente.</li>
            <li>Modalidad y región anatómica (y lado, si aplica).</li>
            <li>Hipótesis diagnóstica o pregunta clínica.</li>
            <li>Si autoriza contraste, y creatinina cuando corresponda.</li>
            <li>Sus datos de contacto para devolver el informe.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl">Qué recibe</h2>
          <p className="mt-3 text-ink/80">
            Informe estructurado (técnica, hallazgos, conclusión), en PDF con
            el lenguaje gráfico del centro. El paciente puede ver una copia en
            el portal cuando esté habilitado.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl">Contacto rápido</h2>
          <p className="mt-3 text-ink/80">
            {site.phone.display} · {site.address.line}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <ButtonLink href={site.phone.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp del centro
            </ButtonLink>
            <ButtonLink href="/brand/documentos/carta-referente.html" variant="secondary">
              Ver carta tipo
            </ButtonLink>
          </div>
        </section>
      </div>
    </>
  );
}
