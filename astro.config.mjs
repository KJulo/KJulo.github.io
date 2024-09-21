import { defineConfig } from "astro/config";

import paraglide from "@inlang/paraglide-astro";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  integrations: [
    tailwind(),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
  ],
  site: "https://KJulo.github.io",
});
