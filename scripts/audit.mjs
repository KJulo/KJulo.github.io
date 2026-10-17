/* eslint-disable no-console */
import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";

const PORT = 4322;
const TARGET_URL = `http://localhost:${PORT}/`;
const REPORT_PATH = "./report.html";

function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      const req = http.get(url, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve(true);
        } else {
          retry();
        }
      });
      req.on("error", () => retry());
    };

    const retry = () => {
      if (Date.now() - start > timeoutMs) {
        reject(
          new Error(`Server at ${url} did not start within ${timeoutMs}ms`),
        );
      } else {
        setTimeout(check, 300);
      }
    };

    check();
  });
}

async function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit", shell: true });
    child.on("close", (code) => {
      if (code === 0) resolve();
      else
        reject(new Error(`Command ${command} failed with exit code ${code}`));
    });
  });
}

async function main() {
  console.log("🔨 Building production assets...");
  await runCommand("pnpm", ["build"]);

  console.log(`🚀 Starting preview server on port ${PORT}...`);
  const preview = spawn("npx", ["astro", "preview", "--port", String(PORT)], {
    stdio: "pipe",
    shell: true,
    detached: true,
  });

  try {
    await waitForServer(TARGET_URL);
    console.log(`✅ Preview server is ready at ${TARGET_URL}`);

    console.log("🔍 Running Lighthouse CLI in headless mode...");
    const baseName = REPORT_PATH.replace(/\.html$/, "");
    await runCommand("lighthouse", [
      TARGET_URL,
      '--chrome-flags="--headless=new"',
      "--output=json,html",
      `--output-path=${baseName}`,
      "--quiet",
    ]);

    let reportData = null;
    const possibleJsonPaths = [
      `${baseName}.report.json`,
      `${baseName}.json`,
      REPORT_PATH.replace(/\.html$/, ".report.json"),
    ];

    for (const p of possibleJsonPaths) {
      if (fs.existsSync(p)) {
        try {
          reportData = JSON.parse(fs.readFileSync(p, "utf8"));
          break;
        } catch {
          // ignore
        }
      }
    }

    const possibleHtmlPaths = [
      `${baseName}.report.html`,
      `${baseName}.html.report.html`,
    ];
    for (const p of possibleHtmlPaths) {
      if (fs.existsSync(p)) {
        fs.copyFileSync(p, REPORT_PATH);
        break;
      }
    }

    if (reportData && reportData.categories) {
      console.log("\n==============================");
      console.log("📊 LIGHTHOUSE AUDIT RESULTS");
      console.log("==============================");
      for (const [, cat] of Object.entries(reportData.categories)) {
        const score = Math.round(cat.score * 100);
        console.log(`  ${cat.title.padEnd(20)}: ${score} / 100`);
      }
      console.log("------------------------------");
      console.log(
        `  FCP                 : ${reportData.audits["first-contentful-paint"]?.displayValue || "N/A"}`,
      );
      console.log(
        `  LCP                 : ${reportData.audits["largest-contentful-paint"]?.displayValue || "N/A"}`,
      );
      console.log(
        `  TBT                 : ${reportData.audits["total-blocking-time"]?.displayValue || "N/A"}`,
      );
      console.log(
        `  CLS                 : ${reportData.audits["cumulative-layout-shift"]?.displayValue || "N/A"}`,
      );
      console.log("==============================\n");
    }

    console.log(`🎉 Report successfully saved to: ${REPORT_PATH}`);
  } finally {
    console.log("🛑 Stopping preview server...");
    try {
      if (preview.pid) {
        process.kill(-preview.pid);
      }
    } catch {
      try {
        preview.kill();
      } catch {
        // ignore
      }
    }
  }
}

main().catch((err) => {
  console.error("❌ Error running Lighthouse audit:", err);
  process.exit(1);
});
