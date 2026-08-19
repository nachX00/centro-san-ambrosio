"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { isValidRut, formatRut } from "@/lib/rut";

const rights = [
  "Acceso",
  "Rectificación",
  "Supresión",
  "Oposición",
  "Portabilidad",
  "Bloqueo",
] as const;

export function RightsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rut, setRut] = useState("");
  const [right, setRight] = useState<(typeof rights)[number]>("Acceso");
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!isValidRut(rut)) {
      setStatus("error");
      setMessage("El RUT no es válido. Puede omitirlo si no lo recuerda.");
      return;
    }
    try {
      const res = await fetch("/api/derechos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, rut: rut || undefined, right, detail }),
      });
      if (!res.ok) throw new Error("fail");
      const json = (await res.json()) as { stored?: boolean };
      setStatus("ok");
      setMessage(
        json.stored
          ? "Solicitud recibida. Responderemos en un plazo máximo de 30 días."
          : "Solicitud enviada. Mientras no haya base de datos, confirme también por correo a privacidad@sanambrosio.cl.",
      );
    } catch {
      setStatus("error");
      setMessage("No se pudo enviar. Escríbanos a privacidad@sanambrosio.cl.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-3 rounded-md border border-ink/10 bg-surface p-5">
      <div>
        <label htmlFor="r-name" className="text-sm font-semibold">
          Nombre
        </label>
        <input id="r-name" required className="field mt-1" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="r-email" className="text-sm font-semibold">
          Correo
        </label>
        <input
          id="r-email"
          type="email"
          required
          className="field mt-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="r-rut" className="text-sm font-semibold">
          RUT (opcional)
        </label>
        <input
          id="r-rut"
          className="field mt-1"
          value={rut}
          onChange={(e) => setRut(formatRut(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="r-right" className="text-sm font-semibold">
          Derecho
        </label>
        <select
          id="r-right"
          className="field mt-1"
          value={right}
          onChange={(e) => setRight(e.target.value as (typeof rights)[number])}
        >
          {rights.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="r-detail" className="text-sm font-semibold">
          Detalle
        </label>
        <textarea
          id="r-detail"
          required
          className="field mt-1 min-h-28"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
      </div>
      <Button type="submit">Enviar solicitud</Button>
      {message ? (
        <p className={status === "ok" ? "text-ok" : "text-alert"} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
