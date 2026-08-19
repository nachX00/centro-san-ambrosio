import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Política de cookies del Centro Imagenológico San Ambrosio.",
};

export default function CookiesPage() {
  return (
    <>
      <PageIntro kicker="Ley 21.719" title="Cookies">
        <p>
          Usamos el mínimo. Las esenciales no piden consentimiento. Cualquier
          analítica futura será opt-in, nunca premarcada.
        </p>
      </PageIntro>
      <article className="mx-auto max-w-3xl space-y-4 px-4 pb-16 text-ink/85">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-ink/15">
              <th className="py-2 pr-3">Cookie / clave</th>
              <th className="py-2 pr-3">Tipo</th>
              <th className="py-2">Para qué</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-ink/10">
              <td className="py-2 pr-3 tabular">sa-cookie-consent</td>
              <td className="py-2 pr-3">Esencial</td>
              <td className="py-2">Recordar su elección de cookies.</td>
            </tr>
            <tr className="border-b border-ink/10">
              <td className="py-2 pr-3 tabular">sa-large-text</td>
              <td className="py-2 pr-3">Esencial / preferencia</td>
              <td className="py-2">Texto grande en este navegador.</td>
            </tr>
          </tbody>
        </table>
        <p>
          Puede borrar estas claves en su navegador. El sitio seguirá
          funcionando.
        </p>
      </article>
    </>
  );
}
