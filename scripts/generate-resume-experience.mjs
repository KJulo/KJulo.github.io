import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIRECTORY = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT_PATH = resolve(
  ROOT_DIRECTORY,
  "src/data/resumeExperience.generated.ts",
);

const RESUME_CONFIGURATIONS = {
  en: {
    file: "public/documents/CV-English.pdf",
    experienceHeading: "Professional experience",
    endHeading: "Education",
    technologiesHeading: "Technologies:",
    months: {
      jan: "01",
      january: "01",
      feb: "02",
      february: "02",
      mar: "03",
      march: "03",
      apr: "04",
      april: "04",
      may: "05",
      jun: "06",
      june: "06",
      jul: "07",
      july: "07",
      aug: "08",
      august: "08",
      sep: "09",
      sept: "09",
      september: "09",
      oct: "10",
      october: "10",
      nov: "11",
      november: "11",
      dec: "12",
      december: "12",
    },
    datePattern:
      "(?:(?:Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\\.|January|February|March|April|May|June|July|August|September|October|November|December)\\s+\\d{4}",
  },
  es: {
    file: "public/documents/CV-Español.pdf",
    experienceHeading: "Experiencia profesional",
    endHeading: "Educación",
    technologiesHeading: "Tecnologías:",
    months: {
      enero: "01",
      febrero: "02",
      marzo: "03",
      abril: "04",
      mayo: "05",
      junio: "06",
      julio: "07",
      agosto: "08",
      septiembre: "09",
      octubre: "10",
      noviembre: "11",
      diciembre: "12",
    },
    datePattern:
      "(?:Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre)\\s+de\\s+\\d{4}",
  },
};

const EXPECTED_EXPERIENCE_COUNT = 4;

const extractTextFromPdf = (file) => {
  const filePath = resolve(ROOT_DIRECTORY, file);

  try {
    return execFileSync("pdftotext", ["-raw", filePath, "-"], {
      encoding: "utf8",
    });
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(`Could not extract text from ${file}: ${reason}`);
  }
};

const toLines = (text) =>
  text
    .replace(/-\r?\n(?=[a-záéíóúüñ])/giu, "")
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

const toIsoMonth = (date, months) => {
  const normalizedDate = date.toLocaleLowerCase("en-US").replace(/\./g, "");
  const year = normalizedDate.match(/\d{4}/u)?.[0];
  const monthName = normalizedDate
    .replace(/\d{4}/gu, "")
    .replace(/\bde\b/gu, "")
    .trim();
  const month = months[monthName];

  if (!year || !month) {
    throw new Error(`Could not convert the date "${date}" to an ISO month.`);
  }

  return `${year}-${month}`;
};

const parseExperiences = (configuration) => {
  const lines = toLines(extractTextFromPdf(configuration.file));
  const startIndex = lines.indexOf(configuration.experienceHeading);
  const endIndex = lines.indexOf(configuration.endHeading);

  if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
    throw new Error(
      `Could not locate the experience section in ${configuration.file}.`,
    );
  }

  const dateRangePattern = new RegExp(
    `^(?<company>.+?)\\s+(?<dateStart>${configuration.datePattern})\\s+–\\s+(?<dateEnd>${configuration.datePattern})$`,
    "u",
  );
  const experiences = [];

  for (let lineIndex = startIndex + 1; lineIndex < endIndex;) {
    const headingMatch = lines[lineIndex].match(dateRangePattern);

    if (!headingMatch?.groups) {
      lineIndex += 1;
      continue;
    }

    const role = lines[lineIndex + 1];
    if (!role || role.startsWith("•")) {
      throw new Error(
        `Could not find a role after "${lines[lineIndex]}" in ${configuration.file}.`,
      );
    }

    const achievements = [];
    let currentAchievement = "";
    let inTechnologies = false;
    lineIndex += 2;

    while (lineIndex < endIndex) {
      const line = lines[lineIndex];

      if (dateRangePattern.test(line)) {
        break;
      }

      if (line.startsWith(configuration.technologiesHeading)) {
        inTechnologies = true;
        lineIndex += 1;
        continue;
      }

      if (inTechnologies) {
        lineIndex += 1;
        continue;
      }

      if (line.startsWith("•")) {
        if (currentAchievement) {
          achievements.push(currentAchievement);
        }
        currentAchievement = line.replace(/^•\s*/u, "");
      } else if (currentAchievement) {
        currentAchievement = `${currentAchievement} ${line}`;
      }

      lineIndex += 1;
    }

    if (currentAchievement) {
      achievements.push(currentAchievement);
    }

    if (!achievements.length) {
      throw new Error(
        `Could not find achievements for "${headingMatch.groups.company}" in ${configuration.file}.`,
      );
    }

    experiences.push({
      role,
      company: headingMatch.groups.company,
      dateStart: headingMatch.groups.dateStart,
      dateEnd: headingMatch.groups.dateEnd,
      dateStartRaw: toIsoMonth(
        headingMatch.groups.dateStart,
        configuration.months,
      ),
      dateEndRaw: toIsoMonth(headingMatch.groups.dateEnd, configuration.months),
      achievements,
    });
  }

  if (experiences.length !== EXPECTED_EXPERIENCE_COUNT) {
    throw new Error(
      `Expected ${EXPECTED_EXPERIENCE_COUNT} experiences in ${configuration.file}, found ${experiences.length}. Update the technology mapping before deploying.`,
    );
  }

  return experiences;
};

const resumeExperiences = Object.fromEntries(
  Object.entries(RESUME_CONFIGURATIONS).map(([locale, configuration]) => [
    locale,
    parseExperiences(configuration),
  ]),
);

const output = `// This file is generated from the PDFs in public/documents. Do not edit it manually.\n\nexport type ResumeExperience = {\n  role: string;\n  company: string;\n  dateStart: string;\n  dateEnd: string;\n  dateStartRaw: string;\n  dateEndRaw: string;\n  achievements: string[];\n};\n\nexport const RESUME_EXPERIENCES: Record<\n  "en" | "es",\n  ResumeExperience[]\n> = ${JSON.stringify(resumeExperiences, null, 2)};\n`;

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, output);
