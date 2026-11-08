import { describe, expect, it } from "vitest";

import { searchLocale, switchLanguage } from "./language";

describe("switchLanguage", () => {
  it.each([
    ["/", "es", "/es/"],
    ["/es", "en", "/"],
    ["/es/", "en", "/"],
    ["/es/projects/x", "en", "/projects/x"],
    ["/projects/x", "es", "/es/projects/x"],
    ["/404", "es", "/es/"],
    ["/es/404", "en", "/"],
    ["projects/x", "es", "/es/projects/x"],
  ] as const)("maps %s to %s locale path %s", (path, locale, expected) => {
    expect(switchLanguage(path, locale)).toBe(expected);
  });
});

describe("searchLocale", () => {
  it.each([
    ["/", "en"],
    ["/projects/x", "en"],
    ["/es", "es"],
    ["/es/", "es"],
    ["/es/projects/x", "es"],
    ["/essay", "en"],
    ["/esprit", "en"],
  ] as const)("returns %s locale for %s", (path, expected) => {
    expect(searchLocale(path)).toBe(expected);
  });
});
