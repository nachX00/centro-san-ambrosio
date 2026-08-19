import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: "Términos de uso del sitio del Centro Imagenológico San Ambrosio.",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro title="Términos de uso">
        <p>
          Este sitio informa y permite cotizar. No sustituye una consulta
          médica ni constituye oferta pública vinculante de precios.
        </p>
      </PageIntro>
      <article className="mx-auto max-w-3xl space-y-4 px-4 pb-16 text-ink/85">
        <p>
          Las fichas de exámenes son orientación general. La indicación la da
          su médico. El valor publicado o cotizado es referencial hasta la
          confirmación en caja.
        </p>
        <p>
          El contenido es de {site.name}. No use marcas, fotos ni textos de
          terceros (Clínica Alemana, Mayo Clinic, Jefferson Health u otras)
          como si fueran nuestras.
        </p>
        <p>
          El portal de resultados, cuando esté enlazado, tiene reglas propias
          de autenticación. Usted es responsable de no compartir su sesión.
        </p>
      </article>
    </>
  );
}
