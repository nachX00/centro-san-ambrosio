# DESIGN.md — Centro Imagenológico San Ambrosio

## Source

- Marca original, 2026-08-18.
- Referencias de patrón (no de tokens): Clínica Alemana, Mayo Clinic, Jefferson Health, Cleveland Clinic.
- Fotografías de atmósfera en `public/brand/` (Atacama, cobre, fachada, sala de lectura). No son el local real.

## Design Summary

Institucional y del Norte. Navy de sala de lectura, papel hueso, filete de cobre. Serif en titulares, sans clínica en cuerpo, mono en códigos. Radio bajo. Cero sombras de app. Navegación por la pregunta del paciente.

## Design Tokens

Ver `brand/tokens.json` y `brand/tokens.css`.

| Token | Hex | Rol |
|---|---|---|
| ink | `#0B1F33` | Texto, header, botones |
| paper | `#F6F3EE` | Fondo |
| copper | `#B87333` | Filete, acento. Nunca texto solo sobre paper (3.43:1) |
| scan | `#1F5C66` | Enlaces y foco (6.82:1 sobre paper) |
| scanBright | `#2F7A86` | Decorativo |
| mist | `#E8EEF0` | Superficies |
| alert | `#9B2C2C` | Error |
| ok | `#2F6D4F` | Éxito |

Tipografía: Source Serif 4, Source Sans 3, IBM Plex Mono. Cuerpo web 18 px.

## Components

- Botón primario: `ink` / `paper`, radio 8 px, alto mínimo 44 px.
- Buscador de examen: combobox accesible.
- Tarjetas de modalidad: foto + título serif + radiación en palabras.
- Documentos: `brand/documentos/` (también servidos en `/brand/documentos/`).

## Page Patterns

Home: hero con foto del valle + buscador. Luego modalidades, cómo funciona, dirección, para médicos.

Móvil: barra inferior Inicio · Exámenes · Cotizar · Resultados · Más.

## Agent Build Instructions

No copies teal de Alemana ni azul Mayo. No inventes precios, RUT, equipo ni convenios. Usa `src/lib/site.ts` para dirección y teléfono. Los informes no viven en este origen.
