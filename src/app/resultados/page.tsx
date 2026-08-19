import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resultados",
  description:
    "Cómo revisar el informe de su examen en el portal privado del Centro Imagenológico San Ambrosio.",
};

export default function ResultsPage() {
  const portal = site.legal.resultsPortalUrl;

  return (
    <>
      <PageIntro kicker="Sitio privado" title="Sus resultados">
        <p>
          Los informes no se publican en este sitio. Se entregan en un portal
          separado, con cuenta propia, para no mezclar datos de salud con la
          web institucional.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-3xl space-y-8 px-4 pb-16">
        <ol className="space-y-4">
          <li className="rounded-md border border-ink/10 bg-surface p-4">
            <p className="tabular text-sm text-ink/50">01</p>
            <h2 className="font-display text-xl">Reciba la invitación</h2>
            <p className="mt-1 text-ink/75">
              El personal del centro le envía un enlace o un código al correo
              registrado. Sin invitación no se abre la ficha.
            </p>
          </li>
          <li className="rounded-md border border-ink/10 bg-surface p-4">
            <p className="tabular text-sm text-ink/50">02</p>
            <h2 className="font-display text-xl">Entre con su correo y RUT</h2>
            <p className="mt-1 text-ink/75">
              El acceso es personal. No comparta la sesión. Un representante
              de un menor debe usar la invitación emitida a su nombre.
            </p>
          </li>
          <li className="rounded-md border border-ink/10 bg-surface p-4">
            <p className="tabular text-sm text-ink/50">03</p>
            <h2 className="font-display text-xl">Lea el informe</h2>
            <p className="mt-1 text-ink/75">
              Si se atendió hoy, el informe puede no estar aún. El plazo está
              en su comprobante y en la ficha del examen.
            </p>
          </li>
        </ol>

        {portal ? (
          <ButtonLink href={portal} rel="noopener noreferrer">
            Entrar a mis resultados
          </ButtonLink>
        ) : (
          <div className="rounded-md border border-ink/10 bg-mist p-5">
            <h2 className="font-display text-xl">Portal en habilitación</h2>
            <p className="mt-2 text-ink/80">
              Mientras el origen clínico queda publicado, pida su informe en el
              centro o por WhatsApp, identificándose con RUT y fecha de
              atención. No enviamos resultados a un número que no esté en la
              ficha.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href={site.phone.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </ButtonLink>
              <ButtonLink href={site.phone.tel} variant="secondary">
                Llamar {site.phone.display}
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
