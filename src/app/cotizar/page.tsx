import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { QuoteBuilder } from "@/components/quote/QuoteBuilder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cotizar",
  description:
    "Cotice radiografías, tomografías y ecografías en el Centro Imagenológico San Ambrosio, Vallenar.",
};

type Props = { searchParams: Promise<{ examen?: string }> };

export default async function QuotePage({ searchParams }: Props) {
  const { examen } = await searchParams;
  return (
    <>
      <PageIntro kicker="Valores referenciales" title="Cotizar un examen">
        <p>
          Arma la lista, elija previsión y envíe por WhatsApp al {site.phone.display}.
          No es un presupuesto vinculante ni un bono. Los precios se confirman
          en caja. Sin pago en línea en esta versión.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <QuoteBuilder initialSlug={examen} />
      </div>
    </>
  );
}
