import { NextResponse } from "next/server";
import { isValidRut } from "@/lib/rut";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const data = body as {
    name?: string;
    email?: string;
    rut?: string;
    right?: string;
    detail?: string;
  };

  if (!data.name?.trim() || !data.email?.trim() || !data.right || !data.detail?.trim()) {
    return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  }
  if (data.rut && !isValidRut(data.rut)) {
    return NextResponse.json({ error: "RUT inválido" }, { status: 400 });
  }

  const id = crypto.randomUUID();
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE;

  if (supabaseUrl && supabaseKey) {
    const insert = await fetch(`${supabaseUrl}/rest/v1/data_subject_requests`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        id,
        name: data.name,
        email: data.email,
        rut: data.rut ?? null,
        right: data.right,
        detail: data.detail,
        status: "received",
      }),
    });
    if (!insert.ok) {
      return NextResponse.json({ error: "No se pudo guardar" }, { status: 502 });
    }
  }

  return NextResponse.json({ id, stored: Boolean(supabaseUrl && supabaseKey) });
}
