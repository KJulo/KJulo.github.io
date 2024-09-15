import type { AvailableLanguageTag } from "astro/paraglide/runtime";

export function switchLanguage(pathname: string, locale: AvailableLanguageTag) {
  if (locale === "en") {
    return pathname.replace("es/", "");
  }
  return `/es${pathname}`;
}
