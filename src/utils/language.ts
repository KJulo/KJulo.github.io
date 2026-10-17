import type { Locale } from "@paraglide/runtime";

export function switchLanguage(pathname: string, targetLocale: Locale): string {
  if (pathname.includes("404")) {
    return targetLocale === "es" ? "/es/" : "/";
  }

  let cleanPath = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  if (!cleanPath.startsWith("/")) {
    cleanPath = `/${cleanPath}`;
  }

  if (targetLocale === "es") {
    if (cleanPath === "/") {
      return "/es/";
    }
    return `/es${cleanPath}`;
  }

  return cleanPath;
}

export function localizePathname(pathname: string, locale: Locale): string {
  return switchLanguage(pathname, locale);
}

export const searchLocale = (pathname: string): Locale => {
  if (pathname.startsWith("/es")) {
    return "es";
  }
  return "en";
};
