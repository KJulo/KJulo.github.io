import { describe, expect, it } from "vitest";

import { parseExperiences, toLines } from "./generate-resume-experience.mjs";

describe("resume experience parser", () => {
  it("normalizes wrapped lines and parses experience text without reading a PDF", () => {
    const source = `
Professional experience
Example Co January 2020 – March 2021
Frontend developer
• Built a fast
application for customers.
• Improved accessibility.
Technologies:
TypeScript React
Education
Computer science
`;
    const configuration = {
      file: "inline sample",
      experienceHeading: "Professional experience",
      endHeading: "Education",
      technologiesHeading: "Technologies:",
      months: { january: "01", march: "03" },
      datePattern: "(?:January|March)\\s+\\d{4}",
    };

    expect(toLines("inter-\nnational\r\ntext")).toEqual([
      "international",
      "text",
    ]);
    expect(parseExperiences(source, configuration)).toEqual([
      {
        role: "Frontend developer",
        company: "Example Co",
        dateStart: "January 2020",
        dateEnd: "March 2021",
        dateStartRaw: "2020-01",
        dateEndRaw: "2021-03",
        achievements: [
          "Built a fast application for customers.",
          "Improved accessibility.",
        ],
      },
    ]);
  });
});
