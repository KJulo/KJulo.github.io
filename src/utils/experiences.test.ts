import { describe, expect, it } from "vitest";

import { createExperienceList } from "./experiences";

const message = (entries: Record<string, string>) =>
  Object.fromEntries(
    Object.entries(entries).map(([key, value]) => [key, () => value]),
  );

describe("createExperienceList", () => {
  it("returns an empty list when no experience roles exist", () => {
    expect(createExperienceList({})).toEqual([]);
  });

  it("creates entries in sequence", () => {
    expect(
      createExperienceList(
        message({
          experience_1_role: "Developer",
          experience_1_company: "Company A",
          experience_1_date: "2020–2021",
          experience_2_role: "Senior developer",
          experience_2_company: "Company B",
          experience_2_date: "2021–2022",
        }),
      ),
    ).toEqual([
      { ROLE: "Developer", COMPANY: "Company A", DATE: "2020–2021" },
      { ROLE: "Senior developer", COMPANY: "Company B", DATE: "2021–2022" },
    ]);
  });

  it("stops at the first missing role", () => {
    expect(
      createExperienceList(
        message({
          experience_1_role: "Developer",
          experience_1_company: "Company A",
          experience_1_date: "2020–2021",
          experience_3_role: "Designer",
          experience_3_company: "Company C",
          experience_3_date: "2022–2023",
        }),
      ),
    ).toEqual([{ ROLE: "Developer", COMPANY: "Company A", DATE: "2020–2021" }]);
  });
});
