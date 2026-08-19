import { PageIntro } from "@/components/layout/PageIntro";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <PageIntro title="Esta página no existe">
        <p>Puede volver al inicio o buscar el examen por su nombre.</p>
      </PageIntro>
      <div className="mx-auto flex max-w-6xl gap-3 px-4 pb-16">
        <ButtonLink href="/">Inicio</ButtonLink>
        <ButtonLink href="/examenes" variant="secondary">
          Exámenes
        </ButtonLink>
      </div>
    </>
  );
}
