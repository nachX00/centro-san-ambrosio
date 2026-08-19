"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Trash2 } from "lucide-react";
import { ExamSearch } from "@/components/search/ExamSearch";
import { Button, ButtonLink } from "@/components/ui/Button";
import { exams, formatPrice, getExam, modalityMeta, type Exam } from "@/lib/exams";
import { formatRut, isValidRut } from "@/lib/rut";
import { site, whatsappHref } from "@/lib/site";

type Prevision = "particular" | "fonasa" | "isapre";
type QuoteItem = { slug: string; contrast: boolean };

const PREVISION_LABEL: Record<Prevision, string> = {
  particular: "Particular",
  fonasa: "FONASA (si hay convenio)",
  isapre: "Isapre / consultar",
};

function itemPrice(exam: Exam, prevision: Prevision): number | null {
  if (prevision === "fonasa") return exam.priceFonasa;
  if (prevision === "particular") return exam.priceParticular;
  return null;
}

export function QuoteBuilder({ initialSlug }: { initialSlug?: string }) {
  const seed = initialSlug && getExam(initialSlug) ? [{ slug: initialSlug, contrast: false }] : [];
  const [items, setItems] = useState<QuoteItem[]>(seed);
  const [prevision, setPrevision] = useState<Prevision>("particular");
  const [name, setName] = useState("");
  const [rut, setRut] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [pregnancy, setPregnancy] = useState("");
  const [allergy, setAllergy] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const lines = useMemo(
    () =>
      items
        .map((item) => {
          const exam = getExam(item.slug);
          if (!exam) return null;
          return { ...item, exam, price: itemPrice(exam, prevision) };
        })
        .filter((row): row is NonNullable<typeof row> => Boolean(row)),
    [items, prevision],
  );

  const knownTotal = lines.reduce((sum, line) => sum + (line.price ?? 0), 0);
  const hasUnknown = lines.some((line) => line.price == null);
  const rutOk = isValidRut(rut);

  function addExam(exam: Exam) {
    setItems((current) =>
      current.some((item) => item.slug === exam.slug)
        ? current
        : [...current, { slug: exam.slug, contrast: false }],
    );
  }

  function message(): string {
    const list = lines
      .map((line) => `- ${line.exam.name}${line.contrast ? " (con contraste)" : ""}`)
      .join("\n");
    return [
      `Hola, quiero cotizar en ${site.name}.`,
      `Previsión: ${PREVISION_LABEL[prevision]}`,
      list || "- (sin exámenes aún)",
      name ? `Nombre: ${name}` : "",
      rut ? `RUT: ${rut}` : "",
      phone ? `Teléfono: ${phone}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (!lines.length) {
      setError("Agregue al menos un examen.");
      return;
    }
    if (!name.trim() || !phone.trim()) {
      setError("Necesitamos nombre y teléfono para devolver el llamado.");
      return;
    }
    if (!rutOk) {
      setError("El RUT no es válido. Puede dejarlo en blanco.");
      return;
    }
    if (!consent) {
      setError("Debe aceptar el tratamiento de datos para enviar la cotización.");
      return;
    }

    try {
      await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          rut: rut || undefined,
          phone,
          email: email || undefined,
          prevision,
          items: lines.map((line) => ({
            slug: line.slug,
            name: line.exam.name,
            contrast: line.contrast,
            price: line.price,
          })),
          pregnancy: pregnancy || undefined,
          allergy: allergy || undefined,
          consent: true,
        }),
      });
    } catch {
      // El canal principal es WhatsApp; el API es complemento.
    }

    window.open(whatsappHref(message()), "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <h2 className="font-display text-2xl">1. Agregue exámenes</h2>
        <ExamSearch className="mt-3" destination="quote" onPick={addExam} />
        <ul className="mt-4 space-y-2">
          {exams.slice(0, 6).map((exam) => (
            <li key={exam.slug}>
              <button
                type="button"
                className="text-left text-scan underline-offset-2 hover:underline"
                onClick={() => addExam(exam)}
              >
                + {exam.shortName}
              </button>
            </li>
          ))}
        </ul>

        {lines.length ? (
          <ul className="mt-6 divide-y divide-ink/10 rounded-md border border-ink/10 bg-surface">
            {lines.map((line) => (
              <li key={line.slug} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <p className="font-semibold">{line.exam.name}</p>
                  <p className="text-sm text-ink/65">
                    {modalityMeta[line.exam.modality].title}
                    {line.exam.radiation ? " · Con radiación" : " · Sin radiación"}
                  </p>
                  {line.exam.contrastPossible ? (
                    <label className="mt-2 flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={line.contrast}
                        onChange={(event) =>
                          setItems((current) =>
                            current.map((item) =>
                              item.slug === line.slug
                                ? { ...item, contrast: event.target.checked }
                                : item,
                            ),
                          )
                        }
                      />
                      Incluir contraste (si el médico lo indica)
                    </label>
                  ) : null}
                </div>
                <p className="tabular text-sm font-medium">{formatPrice(line.price)}</p>
                <button
                  type="button"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-ink/70 hover:bg-mist"
                  onClick={() => setItems((current) => current.filter((item) => item.slug !== line.slug))}
                >
                  <Trash2 className="h-4 w-4" aria-hidden />
                  <span className="sr-only">Quitar {line.exam.name}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 rounded-md border border-dashed border-ink/20 p-4 text-ink/70">
            Todavía no hay exámenes. Busque arriba o elija uno de la lista.
          </p>
        )}
      </div>

      <form onSubmit={submit} className="rounded-md border border-ink/10 bg-surface p-5">
        <h2 className="font-display text-2xl">2. Sus datos</h2>
        <p className="mt-2 text-sm text-ink/70">
          Los valores son referenciales y no vinculantes. Se confirman en caja.
          Vigencia estimada: {site.legal.quoteValidityDays} días.
        </p>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold">Previsión</legend>
          <div className="mt-2 grid gap-2">
            {(Object.keys(PREVISION_LABEL) as Prevision[]).map((key) => (
              <label key={key} className="flex min-h-11 items-center gap-2">
                <input
                  type="radio"
                  name="prevision"
                  value={key}
                  checked={prevision === key}
                  onChange={() => setPrevision(key)}
                />
                {PREVISION_LABEL[key]}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-4 grid gap-3">
          <Field label="Nombre y apellido" htmlFor="q-name">
            <input
              id="q-name"
              required
              className="field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </Field>
          <Field
            label="RUT (opcional, para devolver el llamado)"
            htmlFor="q-rut"
            hint={!rutOk ? "RUT inválido" : undefined}
          >
            <input
              id="q-rut"
              className="field"
              value={rut}
              onChange={(e) => setRut(formatRut(e.target.value))}
              autoComplete="off"
              inputMode="text"
            />
          </Field>
          <Field label="Teléfono" htmlFor="q-phone">
            <input
              id="q-phone"
              required
              className="field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              inputMode="tel"
            />
          </Field>
          <Field label="Correo (opcional)" htmlFor="q-email">
            <input
              id="q-email"
              type="email"
              className="field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </Field>
        </div>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold">
            Preguntas de seguridad (no se guardan si no envía)
          </legend>
          <Field label="¿Podría estar embarazada?" htmlFor="q-preg" className="mt-2">
            <select
              id="q-preg"
              className="field"
              value={pregnancy}
              onChange={(e) => setPregnancy(e.target.value)}
            >
              <option value="">Prefiero no decirlo ahora</option>
              <option value="no">No</option>
              <option value="si">Sí o no lo sé</option>
              <option value="na">No aplica</option>
            </select>
          </Field>
          <Field label="Alergia a contraste o yodo" htmlFor="q-al" className="mt-2">
            <input
              id="q-al"
              className="field"
              value={allergy}
              onChange={(e) => setAllergy(e.target.value)}
            />
          </Field>
        </fieldset>

        <div className="mt-5 rounded-md bg-mist p-3">
          <p className="text-sm font-semibold">Resumen</p>
          <p className="mt-1 tabular">
            {hasUnknown
              ? knownTotal
                ? `${formatPrice(knownTotal)} + ítems a consultar`
                : "Valor a confirmar en el centro"
              : formatPrice(knownTotal)}
          </p>
          <p className="mt-1 text-sm text-ink/70">
            No es un bono FONASA ni una orden de compra. El precio final depende
            de la previsión, el contraste y la indicación médica.
          </p>
        </div>

        <label className="mt-4 flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            className="mt-1"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            Autorizo el tratamiento de mis datos de contacto —y de salud si
            respondí las preguntas clínicas— para cotizar y devolver el llamado,
            según la{" "}
            <a className="text-scan underline" href="/legal/privacidad">
              política de privacidad
            </a>
            . Puedo retirar el consentimiento cuando quiera.
          </span>
        </label>

        {error ? (
          <p className="mt-3 text-sm text-alert" role="alert">
            {error}
          </p>
        ) : null}
        {status === "sent" ? (
          <p className="mt-3 text-sm text-ok" role="status">
            Cotización lista. Se abrió WhatsApp. Si no, use el botón de abajo.
          </p>
        ) : null}

        <div className="mt-5 flex flex-col gap-2">
          <Button type="submit">Enviar por WhatsApp</Button>
          <ButtonLink
            variant="secondary"
            href={whatsappHref(message())}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solo abrir WhatsApp
          </ButtonLink>
          <Button type="button" variant="ghost" onClick={() => window.print()}>
            Imprimir / guardar PDF
          </Button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-sm font-semibold">
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {hint ? (
        <p className="mt-1 text-sm text-alert" role="alert">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
