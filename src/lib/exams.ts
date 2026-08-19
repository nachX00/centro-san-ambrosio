export type Modality = "radiologia" | "tomografia" | "ecografia";

export type Exam = {
  slug: string;
  code: string;
  fonasaCode: string | null;
  name: string;
  shortName: string;
  synonyms: string[];
  modality: Modality;
  duration: string;
  radiation: boolean;
  contrastPossible: boolean;
  priceParticular: number | null;
  priceFonasa: number | null;
  indications: string;
  preparation: string[];
  bring: string[];
  results: string;
  notes?: string;
};

export const modalityMeta: Record<
  Modality,
  { title: string; lead: string; href: string; image: string; radiation: string }
> = {
  radiologia: {
    title: "Radiología",
    lead: "Radiografías digitales para huesos, tórax y control de lesiones. Rápidas, con dosis baja.",
    href: "/servicios/radiologia",
    image: "/brand/radiologia.jpg",
    radiation: "Sí, dosis baja",
  },
  tomografia: {
    title: "Tomografía computada",
    lead: "Cortes de alta resolución de cerebro, tórax, abdomen y columna. A veces con contraste.",
    href: "/servicios/tomografia",
    image: "/brand/tomografia.jpg",
    radiation: "Sí, mayor que una radiografía",
  },
  ecografia: {
    title: "Ecografía",
    lead: "Imagen en tiempo real con ultrasonido. Sin radiación ionizante. Incluye Doppler.",
    href: "/servicios/ecografia",
    image: "/brand/ecografia.jpg",
    radiation: "No",
  },
};

const bringBase = [
  "Cédula de identidad",
  "Orden médica, si la tiene",
  "Exámenes de imagen previos del mismo sector, si los tiene",
];

export const exams: Exam[] = [
  {
    slug: "radiografia-torax",
    code: "RX-TORAX",
    fonasaCode: null,
    name: "Radiografía de tórax",
    shortName: "Rx tórax",
    synonyms: ["rx torax", "radiografia de pecho", "placa de torax"],
    modality: "radiologia",
    duration: "10 minutos",
    radiation: true,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications:
      "Tos persistente, control de infecciones, evaluación de corazón y pulmones, controles preoperatorios.",
    preparation: [
      "No requiere ayuno.",
      "Retire cadenas, aros y ropa con metal en el pecho.",
    ],
    bring: bringBase,
    results: "El mismo día o al día hábil siguiente, según la indicación clínica.",
  },
  {
    slug: "radiografia-abdomen",
    code: "RX-ABD",
    fonasaCode: null,
    name: "Radiografía de abdomen",
    shortName: "Rx abdomen",
    synonyms: ["rx abdomen", "placa de abdomen"],
    modality: "radiologia",
    duration: "10 minutos",
    radiation: true,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications:
      "Dolor abdominal, sospecha de obstrucción, control de sonda o material quirúrgico.",
    preparation: [
      "En general no requiere ayuno. Si su médico indicó preparación, sígala.",
    ],
    bring: bringBase,
    results: "El mismo día o al día hábil siguiente.",
  },
  {
    slug: "radiografia-columna-lumbar",
    code: "RX-LUM",
    fonasaCode: null,
    name: "Radiografía de columna lumbar",
    shortName: "Rx lumbar",
    synonyms: ["rx lumbar", "radiografia de espalda baja", "columna baja"],
    modality: "radiologia",
    duration: "15 minutos",
    radiation: true,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Lumbago, ciática, control de prótesis o de fractura.",
    preparation: [
      "Use ropa cómoda sin cierre metálico en la cintura.",
      "Informe si podría estar embarazada.",
    ],
    bring: bringBase,
    results: "El mismo día o al día hábil siguiente.",
  },
  {
    slug: "radiografia-columna-cervical",
    code: "RX-CERV",
    fonasaCode: null,
    name: "Radiografía de columna cervical",
    shortName: "Rx cervical",
    synonyms: ["rx cuello", "radiografia cervical"],
    modality: "radiologia",
    duration: "15 minutos",
    radiation: true,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Dolor de cuello, trauma, hormigueo en brazos.",
    preparation: ["Retire aros, collares y piercing del cuello."],
    bring: bringBase,
    results: "El mismo día o al día hábil siguiente.",
  },
  {
    slug: "radiografia-rodilla",
    code: "RX-ROD",
    fonasaCode: null,
    name: "Radiografía de rodilla",
    shortName: "Rx rodilla",
    synonyms: ["rx rodilla", "placa de rodilla"],
    modality: "radiologia",
    duration: "10 minutos",
    radiation: true,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Dolor, traumatismo, artrosis, control de prótesis.",
    preparation: ["Use ropa que permita descubrir la rodilla."],
    bring: bringBase,
    results: "El mismo día o al día hábil siguiente.",
  },
  {
    slug: "radiografia-hombro",
    code: "RX-HOM",
    fonasaCode: null,
    name: "Radiografía de hombro",
    shortName: "Rx hombro",
    synonyms: ["rx hombro"],
    modality: "radiologia",
    duration: "10 minutos",
    radiation: true,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Dolor, luxación, control de prótesis.",
    preparation: ["Retire sostén con aros metálicos si el estudio es de ese lado."],
    bring: bringBase,
    results: "El mismo día o al día hábil siguiente.",
  },
  {
    slug: "radiografia-cadera",
    code: "RX-CAD",
    fonasaCode: null,
    name: "Radiografía de cadera",
    shortName: "Rx cadera",
    synonyms: ["rx cadera", "rx pelvis"],
    modality: "radiologia",
    duration: "10 minutos",
    radiation: true,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Dolor de cadera, control de prótesis, trauma.",
    preparation: ["Informe si podría estar embarazada."],
    bring: bringBase,
    results: "El mismo día o al día hábil siguiente.",
  },
  {
    slug: "radiografia-senos-paranasales",
    code: "RX-SPN",
    fonasaCode: null,
    name: "Radiografía de senos paranasales",
    shortName: "Rx senos",
    synonyms: ["rx senos paranasales", "rx cavum"],
    modality: "radiologia",
    duration: "10 minutos",
    radiation: true,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Sinusitis, dolor facial, control otorrinolaringológico.",
    preparation: ["Retire lentes, aros y piercing de la cara."],
    bring: bringBase,
    results: "El mismo día o al día hábil siguiente.",
  },
  {
    slug: "tc-cerebro",
    code: "TC-ENC",
    fonasaCode: null,
    name: "Tomografía computada de cerebro",
    shortName: "TC cerebro",
    synonyms: ["scanner cerebro", "tac cerebro", "tc de craneo", "scanner de cabeza"],
    modality: "tomografia",
    duration: "15 a 20 minutos",
    radiation: true,
    contrastPossible: true,
    priceParticular: null,
    priceFonasa: null,
    indications:
      "Cefalea de alarma, trauma, AVE, control de lesiones conocidas.",
    preparation: [
      "Si el estudio es con contraste, se pide ayuno de 4 horas y creatinina reciente.",
      "Informe alergia a yodo, asma, o si podría estar embarazada.",
      "Retire aros, dentadura metálica removible y piercing de la cabeza.",
    ],
    bring: [...bringBase, "Examen de creatinina si le indicaron contraste"],
    results: "En 24 a 48 horas hábiles, salvo urgencia acordada.",
    notes: "El contraste no siempre es necesario. Lo define la orden y el radiólogo.",
  },
  {
    slug: "tc-torax",
    code: "TC-TX",
    fonasaCode: null,
    name: "Tomografía computada de tórax",
    shortName: "TC tórax",
    synonyms: ["scanner torax", "tac torax", "scanner de pulmon"],
    modality: "tomografia",
    duration: "15 a 20 minutos",
    radiation: true,
    contrastPossible: true,
    priceParticular: null,
    priceFonasa: null,
    indications:
      "Nódulos, infecciones, control oncológico, tromboembolía si se indica angioTC.",
    preparation: [
      "Ayuno de 4 horas si hay contraste.",
      "Informe asma, alergia a contraste o enfermedad renal.",
    ],
    bring: [...bringBase, "Creatinina si hay contraste"],
    results: "En 24 a 48 horas hábiles.",
  },
  {
    slug: "tc-abdomen-pelvis",
    code: "TC-ABP",
    fonasaCode: null,
    name: "Tomografía computada de abdomen y pelvis",
    shortName: "TC abdomen-pelvis",
    synonyms: ["scanner abdomen", "tac abdomen", "tc abdominal"],
    modality: "tomografia",
    duration: "20 a 30 minutos",
    radiation: true,
    contrastPossible: true,
    priceParticular: null,
    priceFonasa: null,
    indications:
      "Dolor abdominal, piedras, control de cáncer, infecciones profundas.",
    preparation: [
      "Ayuno de 4 a 6 horas si hay contraste endovenoso.",
      "A veces se pide beber contraste oral. Se lo explicamos al cotizar o al agendar.",
      "Informe si podría estar embarazada.",
    ],
    bring: [...bringBase, "Creatinina si hay contraste"],
    results: "En 24 a 48 horas hábiles.",
  },
  {
    slug: "tc-columna",
    code: "TC-COL",
    fonasaCode: null,
    name: "Tomografía computada de columna",
    shortName: "TC columna",
    synonyms: ["scanner columna", "tac lumbar", "tc de columna"],
    modality: "tomografia",
    duration: "15 a 25 minutos",
    radiation: true,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Hernia, trauma, control postoperatorio, estenosis.",
    preparation: ["Use ropa sin metal en la zona a estudiar."],
    bring: bringBase,
    results: "En 24 a 48 horas hábiles.",
  },
  {
    slug: "tc-senos-paranasales",
    code: "TC-SPN",
    fonasaCode: null,
    name: "Tomografía computada de senos paranasales",
    shortName: "TC senos",
    synonyms: ["scanner senos", "tac cavidades paranasales"],
    modality: "tomografia",
    duration: "10 a 15 minutos",
    radiation: true,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Sinusitis crónica, planificación quirúrgica, poliposis.",
    preparation: ["Retire piercing y lentes."],
    bring: bringBase,
    results: "En 24 a 48 horas hábiles.",
  },
  {
    slug: "ecografia-abdominal",
    code: "ECO-ABD",
    fonasaCode: null,
    name: "Ecografía abdominal",
    shortName: "Eco abdominal",
    synonyms: ["ecografia abdomen", "eco abdomen", "ecotomografia abdominal"],
    modality: "ecografia",
    duration: "20 a 30 minutos",
    radiation: false,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications:
      "Dolor, piedras en la vesícula, hígado, páncreas, control de hallazgos previos.",
    preparation: [
      "Ayuno de 6 horas. Puede tomar agua. No fume ni mastique chicle.",
      "No suspenda medicamentos salvo indicación de su médico.",
    ],
    bring: bringBase,
    results: "Informe el mismo día en la mayoría de los casos.",
  },
  {
    slug: "ecografia-renal",
    code: "ECO-REN",
    fonasaCode: null,
    name: "Ecografía renal",
    shortName: "Eco renal",
    synonyms: ["eco rinon", "ecografia de rinones", "eco vias urinarias"],
    modality: "ecografia",
    duration: "20 minutos",
    radiation: false,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Cólico, infecciones, control de quistes o de creatinina alta.",
    preparation: [
      "Vejiga llena: tome agua y no orine en la hora previa, si el estudio incluye vías urinarias.",
    ],
    bring: bringBase,
    results: "Informe el mismo día en la mayoría de los casos.",
  },
  {
    slug: "ecografia-pelviana",
    code: "ECO-PEL",
    fonasaCode: null,
    name: "Ecografía pelviana",
    shortName: "Eco pelviana",
    synonyms: ["eco pelvis", "ecografia ginecologica", "eco transvaginal"],
    modality: "ecografia",
    duration: "20 a 30 minutos",
    radiation: false,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications:
      "Dolor pélvico, control de útero y ovarios, sangrado, dispositivo intrauterino.",
    preparation: [
      "Para la vía abdominal se pide vejiga llena.",
      "La vía transvaginal, si se indica, no requiere vejiga llena. Se explica y se pide consentimiento en sala.",
    ],
    bring: bringBase,
    results: "Informe el mismo día en la mayoría de los casos.",
  },
  {
    slug: "ecografia-tiroidea",
    code: "ECO-TIR",
    fonasaCode: null,
    name: "Ecografía tiroidea",
    shortName: "Eco tiroides",
    synonyms: ["eco tiroides", "ecografia de cuello"],
    modality: "ecografia",
    duration: "20 minutos",
    radiation: false,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Nódulos, bocio, control de punción previa.",
    preparation: ["No requiere ayuno. Use ropa de cuello amplio."],
    bring: bringBase,
    results: "Informe el mismo día en la mayoría de los casos.",
  },
  {
    slug: "ecografia-partes-blandas",
    code: "ECO-PB",
    fonasaCode: null,
    name: "Ecografía de partes blandas",
    shortName: "Eco partes blandas",
    synonyms: ["eco bulto", "eco muscular", "eco de lesion"],
    modality: "ecografia",
    duration: "15 a 25 minutos",
    radiation: false,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Bultos, tendones, hematomas, control de inflamación.",
    preparation: ["No requiere ayuno. Señale con claridad la zona del síntoma."],
    bring: bringBase,
    results: "Informe el mismo día en la mayoría de los casos.",
  },
  {
    slug: "ecografia-doppler-venoso-mmii",
    code: "ECO-DOP-MMII",
    fonasaCode: null,
    name: "Ecografía Doppler venoso de extremidades inferiores",
    shortName: "Doppler venoso piernas",
    synonyms: ["doppler piernas", "eco doppler venoso", "eco tvp"],
    modality: "ecografia",
    duration: "30 a 40 minutos",
    radiation: false,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Hinchazón, sospecha de trombosis, várices, control postoperatorio.",
    preparation: [
      "No requiere ayuno.",
      "Use ropa que permita descubrir ambas piernas.",
    ],
    bring: bringBase,
    results: "Informe el mismo día en la mayoría de los casos.",
  },
  {
    slug: "ecografia-mamaria",
    code: "ECO-MAM",
    fonasaCode: null,
    name: "Ecografía mamaria",
    shortName: "Eco mamaria",
    synonyms: ["eco mama", "ecografia de mamas"],
    modality: "ecografia",
    duration: "20 a 30 minutos",
    radiation: false,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications:
      "Nódulo palpable, control de hallazgo, complemento de mamografía, evaluación en mamas densas.",
    preparation: ["No requiere ayuno. No aplique talco ni crema en las mamas el mismo día."],
    bring: [...bringBase, "Mamografías previas, si las tiene"],
    results: "Informe el mismo día en la mayoría de los casos.",
  },
  {
    slug: "ecografia-obstetrica",
    code: "ECO-OBS",
    fonasaCode: null,
    name: "Ecografía obstétrica",
    shortName: "Eco obstétrica",
    synonyms: ["eco embarazo", "ecografia prenatal"],
    modality: "ecografia",
    duration: "20 a 30 minutos",
    radiation: false,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Control de embarazo según la edad gestacional indicada por su médico.",
    preparation: [
      "En el primer trimestre a veces se pide vejiga llena. Se lo confirmamos al cotizar.",
    ],
    bring: [...bringBase, "Controles prenatales previos, si los tiene"],
    results: "Informe el mismo día en la mayoría de los casos.",
  },
  {
    slug: "ecografia-testicular",
    code: "ECO-TES",
    fonasaCode: null,
    name: "Ecografía testicular",
    shortName: "Eco testicular",
    synonyms: ["eco testiculo", "eco escrotal"],
    modality: "ecografia",
    duration: "20 minutos",
    radiation: false,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Dolor, aumento de volumen, control de varicocele o de nódulo.",
    preparation: ["No requiere ayuno."],
    bring: bringBase,
    results: "Informe el mismo día en la mayoría de los casos.",
  },
  {
    slug: "ecografia-prostatica",
    code: "ECO-PROS",
    fonasaCode: null,
    name: "Ecografía prostática",
    shortName: "Eco próstata",
    synonyms: ["eco prostata", "ecografia transrectal"],
    modality: "ecografia",
    duration: "20 a 30 minutos",
    radiation: false,
    contrastPossible: false,
    priceParticular: null,
    priceFonasa: null,
    indications: "Síntomas urinarios, control de PSA, volumen prostático.",
    preparation: [
      "Vejiga llena para la vía abdominal.",
      "Si se indica vía transrectal, se explican preparación y consentimiento en el centro.",
    ],
    bring: bringBase,
    results: "Informe el mismo día en la mayoría de los casos.",
  },
];

export function getExam(slug: string): Exam | undefined {
  return exams.find((e) => e.slug === slug);
}

export function examsByModality(modality: Modality): Exam[] {
  return exams.filter((e) => e.modality === modality);
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const SCANNER_ALIASES = new Set(["scanner", "scaner", "tac", "tc", "tomografia", "tomografia computada"]);

export const popularExams = [
  "tc-cerebro",
  "radiografia-torax",
  "ecografia-abdominal",
  "ecografia-doppler-venoso-mmii",
]
  .map((slug) => getExam(slug))
  .filter((exam): exam is Exam => Boolean(exam));

export function searchExams(query: string, limit = 8): Exam[] {
  const q = normalize(query);
  if (!q) return popularExams.slice(0, limit);
  const wantsScanner = q.split(" ").some((token) => SCANNER_ALIASES.has(token));
  const scored = exams
    .map((exam) => {
      const hay = normalize(
        [
          exam.name,
          exam.shortName,
          exam.code,
          ...exam.synonyms,
          modalityMeta[exam.modality].title,
          exam.modality === "tomografia" ? "scanner tac tc tomografia" : "",
        ].join(" "),
      );
      let score = 0;
      if (hay.includes(q)) score += 4;
      if (normalize(exam.name).startsWith(q)) score += 3;
      if (normalize(exam.shortName).includes(q)) score += 2;
      for (const token of q.split(" ")) {
        if (token.length > 1 && hay.includes(token)) score += 1;
      }
      if (wantsScanner && exam.modality === "tomografia") score += 6;
      if (wantsScanner && exam.slug === "tc-cerebro") score += 4;
      return { exam, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((row) => row.exam);
}

export function formatPrice(value: number | null): string {
  if (value == null) return "A consultar";
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);
}
