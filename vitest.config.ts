import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

const paraglideDirectory = fileURLToPath(
  new URL("./src/paraglide/", import.meta.url),
);

export default defineConfig({
  resolve: {
    alias: [
      { find: /^@paraglide\/(.*)$/, replacement: `${paraglideDirectory}$1` },
    ],
  },
  test: {
    include: ["src/**/*.test.ts", "scripts/**/*.test.mjs"],
  },
});
