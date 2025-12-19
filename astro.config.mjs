import { defineConfig } from "astro/config";
import { paraglideVitePlugin as paraglide } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      paraglide({
        project: "./project.inlang",
        outdir: "./src/paraglide",
      }),
    ],
  },
  prefetch: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  site: "https://KJulo.github.io",
});
