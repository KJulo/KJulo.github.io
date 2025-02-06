import { defineConfig } from "astro/config";

import paraglide from "@inlang/paraglide-astro";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  integrations: [
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
  ],
  site: "https://KJulo.github.io",
});
