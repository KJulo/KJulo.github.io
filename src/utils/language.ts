import type { AvailableLanguageTag } from "astro/paraglide/runtime";

type AbsolutePathname = `/${string}`;

const pathnames: Record<
  AbsolutePathname,
  Record<AvailableLanguageTag, AbsolutePathname>
> = {
  "/resume": {
    en: "/resume",
    es: "/es/resume",
  },
  "/": {
    en: "/",
    es: "/es",
  },
};

export function localizePathname(
  pathname: AbsolutePathname,
  locale: AvailableLanguageTag,
) {
  if (pathnames[pathname]) {
    return pathnames[pathname][locale];
  }
  return pathname;
}

export function switchLanguage(pathname: string, locale: AvailableLanguageTag) {
  if (locale === "en") {
    return pathname.replace("es/", "");
  }
  return `/es${pathname}`;
}
