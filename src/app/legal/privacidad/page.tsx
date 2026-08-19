import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de tratamiento de datos personales del Centro Imagenológico San Ambrosio, Ley 21.719.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro kicker="Ley 21.719" title="Política de tratamiento de datos personales">
        <p>
          Vigente en este sitio desde agosto de 2026. La Ley 21.719 rige en
          plenitud desde el 1 de diciembre de 2026. Los datos de salud son
          sensibles.
        </p>
      </PageIntro>
      <article className="mx-auto max-w-3xl space-y-6 px-4 pb-16 text-ink/85">
        <section>
          <h2 className="font-display text-2xl text-ink">1. Responsable</h2>
          <p className="mt-2">
            {site.legal.responsible}, {site.address.line}. Teléfono{" "}
            {site.phone.display}. Correo {site.email.privacy}. RUT{" "}
            {site.legal.rut}. Delegado de protección de datos: {site.legal.dpo}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">2. Qué datos tratamos en este sitio</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Identificación y contacto si usted cotiza o escribe (nombre, teléfono, correo, RUT opcional).</li>
            <li>Lista de exámenes cotizados y previsión declarada.</li>
            <li>Si usted las responde al enviar: embarazo posible y alergia a contraste (dato de salud).</li>
            <li>Solicitudes ARSOPB.</li>
            <li>Datos técnicos mínimos del servidor (IP, fecha, agente) para seguridad.</li>
          </ul>
          <p className="mt-2">
            Este sitio no muestra informes clínicos. Los resultados viven en un
            origen aparte (portal del paciente), con su propia base de licitud.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">3. Finalidades y bases</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Cotizar y devolver el llamado: consentimiento y, si se concreta la atención, ejecución de un contrato de prestación de salud (Ley 20.584).</li>
            <li>Responder derechos ARSOPB: obligación legal (Ley 21.719).</li>
            <li>Seguridad del sitio: interés legítimo y obligación legal.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">4. Encargados y transferencias</h2>
          <p className="mt-2">
            El hosting y, si se activa, la base de cotizaciones (Supabase en
            región Sudamérica) actúan como encargados. No vendemos listas. No
            hay publicidad de terceros. Si un encargado queda fuera de Chile,
            se informará aquí antes de usarlo.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">5. Plazos</h2>
          <p className="mt-2">
            Cotizaciones no concretadas: {site.legal.quoteRetentionMonths} meses,
            salvo que usted pida supresión antes. Si la cotización deriva en
            atención, el dato clínico sigue las reglas de la ficha (en Chile,
            conservación larga de la historia clínica). Solicitudes ARSOPB: 5
            años. Logs de seguridad: 12 meses.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">6. Derechos</h2>
          <p className="mt-2">
            Puede ejercer acceso, rectificación, supresión, oposición,
            portabilidad y bloqueo en{" "}
            <a className="text-scan underline" href="/legal/derechos">
              /legal/derechos
            </a>
            . Plazo de respuesta: 30 días. También puede reclamar ante la
            Agencia de Protección de Datos Personales cuando esté operativa.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">7. Menores</h2>
          <p className="mt-2">
            No cotizamos ni entregamos resultados de un niño o niña sin su
            representante. El representante debe identificarse.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">8. Decisiones automatizadas</h2>
          <p className="mt-2">
            Este sitio no toma decisiones automatizadas con efectos jurídicos
            sobre usted. El cotizador no aprueba ni rechaza una atención.
          </p>
        </section>
      </article>
    </>
  );
}
