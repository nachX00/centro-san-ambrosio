export const site = {
  name: "Centro Imagenológico San Ambrosio",
  shortName: "San Ambrosio",
  tagline: "Imágenes claras para decidir con calma.",
  description:
    "Radiología, tomografía computada y ecografía en Vallenar. Informes claros, preparación explícita y un trato cercano.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sanambrosio.cl",
  address: {
    street: "San Ambrosio 536",
    city: "Vallenar",
    region: "Región de Atacama",
    country: "Chile",
    line: "San Ambrosio 536, Vallenar, Chile",
  },
  geo: {
    /** Aproximación del centro de Vallenar; se ajusta cuando exista ficha oficial. */
    latitude: -28.5762,
    longitude: -70.7584,
  },
  phone: {
    e164: "+569963198723",
    display: "+56 9 9631 8723",
    tel: "tel:+569963198723",
    whatsapp: "https://wa.me/569963198723",
  },
  social: {
    whatsapp: "https://wa.me/569963198723",
    facebook: "https://www.facebook.com/san.ambrosio.vallenar.2025/",
    instagram: "https://www.instagram.com/sanambrosiovallenar/",
    /** No encontramos cuenta oficial; actualizar cuando exista. */
    twitter: "https://x.com/",
  },
  email: {
    general: "contacto@sanambrosio.cl",
    privacy: "privacidad@sanambrosio.cl",
    dpo: "privacidad@sanambrosio.cl",
  },
  hours: {
    summary: "Lunes a viernes, 9:00 a 13:30 y 14:30 a 18:30",
    days: "Lunes a viernes",
    slots: ["09:00 a 13:30", "14:30 a 18:30"],
    closed: "Sábado, domingo y festivos: cerrado",
    lunch: "Cierre de mediodía entre 13:30 y 14:30",
  },
  legal: {
    responsible: "Centro Imagenológico San Ambrosio",
    rut: "Por informar",
    sanitaryAuth: "Por informar",
    dpo: "Por designar antes del 1 de diciembre de 2026",
    quoteValidityDays: 15,
    quoteRetentionMonths: 24,
    resultsPortalUrl: process.env.NEXT_PUBLIC_RESULTS_PORTAL_URL ?? "",
  },
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.line)}`;

export function whatsappHref(text: string): string {
  return `${site.phone.whatsapp}?text=${encodeURIComponent(text)}`;
}
