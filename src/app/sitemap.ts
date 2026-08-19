import type { MetadataRoute } from "next";
import { exams } from "@/lib/exams";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/examenes",
    "/cotizar",
    "/resultados",
    "/el-centro",
    "/ubicacion",
    "/para-medicos",
    "/accesibilidad",
    "/servicios/radiologia",
    "/servicios/tomografia",
    "/servicios/ecografia",
    "/legal/privacidad",
    "/legal/cookies",
    "/legal/terminos",
    "/legal/derechos",
    "/legal/derechos-paciente",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...exams.map((exam) => ({
      url: `${site.url}/examenes/${exam.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
