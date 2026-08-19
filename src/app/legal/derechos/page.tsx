import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { RightsForm } from "@/components/legal/RightsForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Derechos ARSOPB",
  description:
    "Ejercicio de derechos de acceso, rectificación, supresión, oposición, portabilidad y bloqueo.",
};

export default function RightsPage() {
  return (
    <>
      <PageIntro kicker="Ley 21.719" title="Ejercer sus derechos">
        <p>
          Acceso, rectificación, supresión, oposición, portabilidad y bloqueo.
          El retiro del consentimiento es tan simple como este formulario o un
          correo a {site.email.privacy}. Plazo: 30 días.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-3xl px-4 pb-16">
        <RightsForm />
      </div>
    </>
  );
}
