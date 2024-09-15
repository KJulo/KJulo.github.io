import english from "@i18n/constants/en.json";
import spanish from "@i18n/constants/es.json";

const LANG = {
  ENGLISH: "en",
  SPANISH: "es",
};

export const getI18N = (currentLocale: string | undefined) => {
  if (currentLocale === LANG.ENGLISH) return { ...english };
  return spanish;
};
