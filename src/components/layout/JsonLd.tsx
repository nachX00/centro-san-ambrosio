import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email.general,
    image: `${site.url}/brand/fachada.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "13:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "14:30",
        closes: "18:30",
      },
    ],
    medicalSpecialty: ["Diagnostic Radiology", "Ultrasound", "Computed Tomography"],
    availableService: [
      { "@type": "MedicalTest", name: "Radiografía" },
      { "@type": "MedicalTest", name: "Tomografía computada" },
      { "@type": "MedicalTest", name: "Ecografía" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
