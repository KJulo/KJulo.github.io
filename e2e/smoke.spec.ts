import { expect, test } from "@playwright/test";

import { PROJECT_SLUGS } from "../src/data/projects";

const projectSlug = PROJECT_SLUGS[0];

test("key pages render a main heading without console errors", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  for (const route of [
    "/",
    "/es/",
    "/resume",
    "/es/resume",
    `/projects/${projectSlug}`,
  ]) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("main h1").first(), route).toBeVisible();
    expect(consoleErrors, route).toEqual([]);
  }
});

test("language switcher navigates to the matching locale path", async ({
  page,
}) => {
  await page.goto(`/projects/${projectSlug}`);
  await page.getByTestId("lang-switch-es").click();
  await expect
    .poll(() =>
      page.evaluate(() => window.location.pathname.replace(/\/$/u, "")),
    )
    .toBe(`/es/projects/${projectSlug}`);

  await page.getByTestId("lang-switch-en").click();
  await expect
    .poll(() =>
      page.evaluate(() => window.location.pathname.replace(/\/$/u, "")),
    )
    .toBe(`/projects/${projectSlug}`);
});

test("internal links on the home page resolve successfully", async ({
  page,
  request,
  baseURL,
}) => {
  await page.goto("/");
  const links = await page
    .locator("a[href]")
    .evaluateAll((anchors) =>
      anchors
        .map((anchor) => (anchor as HTMLAnchorElement).href)
        .filter((href) => href.startsWith(window.location.origin)),
    );
  const paths = [...new Set(links.map((href) => new URL(href).pathname))];

  for (const path of paths) {
    const response = await request.get(new URL(path, baseURL).toString());
    expect(response.status(), path).toBe(200);
  }
});
