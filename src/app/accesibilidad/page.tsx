import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accesibilidad",
  description:
    "Declaración de accesibilidad del sitio del Centro Imagenológico San Ambrosio.",
};

export default function A11yPage() {
  return (
    <>
      <PageIntro kicker="Declaración" title="Accesibilidad">
        <p>
          Este sitio busca conformidad con WCAG 2.2 nivel AA. En salud eso
          significa, además del contraste, un lenguaje claro y controles que
          se usan con una mano en el teléfono.
        </p>
      </PageIntro>
      <article className="prose-sa mx-auto max-w-3xl space-y-4 px-4 pb-16 text-ink/85">
        <p>
          Hay enlace para saltar al contenido, landmarks, foco visible,
          etiquetas en formularios y un modo de texto grande en{" "}
          <a className="text-scan underline" href="/mas">
            Más
          </a>
          .
        </p>
        <p>
          El color cobre nunca es el único medio para transmitir un estado. Los
          precios y la radiación se escriben con palabras.
        </p>
        <p>
          Si algo no se puede usar con teclado, lector de pantalla o en 320
          píxeles de ancho, escríbanos a {site.email.general} o llame al{" "}
          {site.phone.display}.
        </p>
        <p>
          La Ley 20.422 fija el horizonte de inclusión. La Ley 21.768 garantiza
          atención preferente en el recinto. Esta página no es una
          certificación de terceros.
        </p>
      </article>
    </>
  );
}
