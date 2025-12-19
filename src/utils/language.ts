import type { Locale } from "@paraglide/runtime";

type AbsolutePathname = `${string}`;

const pathnames: Record<AbsolutePathname, Record<Locale, AbsolutePathname>> = {
  "/resume": {
    en: "/resume",
    es: "/es/resume",
  },
  "/": {
    en: "/",
    es: "/es/",
  },
};

export function localizePathname(pathname: AbsolutePathname, locale: Locale) {
  if (pathnames[pathname]) {
    return pathnames[pathname][locale];
  }
  return pathname;
}

export function switchLanguage(pathname: string, locale: Locale) {
  if (locale === "es") {
    // Si estamos en español, cambiamos a inglés quitando /es
    const newPath = pathname.replace(/^\/es/, "");
    return newPath === "" ? "/" : newPath;
  }
  if (locale === "en") {
    // Si estamos en inglés, cambiamos a español agregando /es
    return `/es${pathname}`;
  }
  return pathname;
}

export const searchLocale = (pathname: string): Locale => {
  if (pathname.startsWith("/es")) {
    return "es";
  }
  return "en";
};
