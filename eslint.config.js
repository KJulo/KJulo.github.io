import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      ".astro/",
      "dist/",
      "node_modules/",
      "messages/",
      "srcparaglide/",
      "src/paraglide/",
      "src/env.d.ts",
    ],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  eslintConfigPrettier,
  {
    rules: {
      "sort-imports": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/alt-text": "error",
      "no-console": "error",
    },
  },
];
