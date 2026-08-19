import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { CopperRule } from "@/components/layout/CopperRule";
import { ExamSearch } from "@/components/search/ExamSearch";
import { HeroBackdrop } from "@/components/layout/HeroBackdrop";
import { ButtonLink } from "@/components/ui/Button";
import { modalityMeta } from "@/lib/exams";
import { mapsUrl, site } from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Indique el examen",
    text: "Búsquelo aquí o traiga la orden de su médico. Si no está seguro, lo orientamos.",
  },
  {
    n: "02",
    title: "Prepárese",
    text: "Cada ficha dice si hay ayuno, contraste o vejiga llena. En lenguaje claro.",
  },
  {
    n: "03",
    title: "Se atiende",
    text: `${site.address.street}, ${site.address.city}. ${site.hours.summary}.`,
  },
  {
    n: "04",
    title: "Vea el resultado",
    text: "Cuando el informe esté listo, entra por el portal privado o lo retira en el centro.",
  },
];

export default function HomePage() {
  return (
    <>
      <section
        className="relative z-20 bg-navy text-cream"
        aria-label="Valle del Huasco al atardecer"
      >
        <div className="absolute inset-0 overflow-hidden">
          <HeroBackdrop />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/25" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cream">
            Vallenar · Atacama
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Imágenes claras
            <br />
            para decidir con calma.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-cream">
            Radiología, tomografía computada y ecografía en {site.address.street}.
            Informes precisos, preparación explícita y un trato de pueblo grande.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/cotizar" variant="hero">
              Cotizar un examen
            </ButtonLink>
            <ButtonLink href="/ubicacion" variant="heroSecondary">
              Cómo llegar
            </ButtonLink>
          </div>
          <div className="relative z-30 mt-14 max-w-3xl">
            <p className="mb-3 font-display text-xl text-cream">¿Qué examen necesita?</p>
            <ExamSearch variant="hero" />
            <p className="mt-3 text-sm text-cream">
              También puede {""}
              <Link className="font-semibold underline decoration-cream/50 underline-offset-4" href="/examenes">
                ver el listado
              </Link>{" "}
              o llamar al {site.phone.display}.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">Tres formas de ver</h2>
            <CopperRule className="mt-5 max-w-24" />
          </div>
          <Link href="/examenes" className="hidden text-scan sm:inline">
            Todos los exámenes
          </Link>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {(Object.keys(modalityMeta) as Array<keyof typeof modalityMeta>).map((key) => {
            const item = modalityMeta[key];
            return (
              <li key={key}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-ink/10 bg-surface"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="ken-burns object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-2xl">{item.title}</h3>
                    <p className="mt-2 flex-1 text-ink dark:text-cream">{item.lead}</p>
                    <p className="mt-4 text-sm text-ink dark:text-cream">
                      {item.radiation === "No" ? "Sin radiación" : `Con radiación. ${item.radiation}`}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                      Ver preparación <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">Cómo funciona</h2>
          <CopperRule className="mt-5 max-w-24" />
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="border-t border-copper pt-5">
                <p className="tabular text-sm text-ink dark:text-cream">{step.n}</p>
                <h3 className="mt-2 font-display text-xl">{step.title}</h3>
                <p className="mt-2 text-ink dark:text-cream">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-24">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md">
          <Image
            src="/brand/fachada.jpg"
            alt="Fachada de un edificio del norte de Chile, luz de tarde"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink dark:text-cream">
            El centro
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
            San Ambrosio 536, Vallenar
          </h2>
          <CopperRule className="mt-5 max-w-24" />
          <ul className="mt-6 space-y-3 text-ink dark:text-cream">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0" aria-hidden />
              {site.address.line}
            </li>
            <li className="flex gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0" aria-hidden />
              <span>
                {site.hours.summary}. {site.hours.lunch}. {site.hours.closed}.
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0" aria-hidden />
              <a className="text-scan underline" href={site.phone.tel}>
                {site.phone.display}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={mapsUrl} target="_blank" rel="noopener noreferrer">
              Abrir en mapas
            </ButtonLink>
            <ButtonLink href={site.phone.whatsapp} variant="secondary" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-mist">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">¿Es médico referente?</h2>
            <p className="mt-3 max-w-xl text-ink dark:text-cream">
              Envíe a su paciente con la orden. Devolvemos un informe estructurado,
              con la misma voz y el mismo membrete que el resto de nuestros documentos.
            </p>
          </div>
          <ButtonLink href="/para-medicos">Cómo derivar</ButtonLink>
        </div>
      </section>
    </>
  );
}
