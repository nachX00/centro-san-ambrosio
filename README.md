# Centro Imagenológico San Ambrosio

Sitio institucional, cotizador de exámenes de imagen y lenguaje de diseño (web + documentos) para el centro de Vallenar.

## Datos del recinto

- Dirección: San Ambrosio 536, Vallenar, Chile
- Teléfono / WhatsApp: +56 9 9631 8723
- Horario: lunes a viernes, 9:00–13:30 y 14:30–18:30

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Marca y documentos

- `DESIGN.md` — tokens y patrones
- `brand/BRAND.md` — territorio y voz
- `brand/documentos/` — plantillas imprimibles (también en `/brand/documentos/`)

## Cumplimiento

- WCAG 2.2 AA como meta
- Ley 21.719: política, consentimiento afirmativo, ARSOPB, RAT en `docs/rat-sitio.md`
- Los informes clínicos no se sirven desde este origen

## Variables

Ver `.env.example`. El portal de resultados se enlaza con `NEXT_PUBLIC_RESULTS_PORTAL_URL`.
