import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { SITE_NAME, canonicalUrl, pageSeo } from "./src/lib/seo";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// This is a client-rendered app, so every URL used to get the same index.html
// and search engines saw no page-specific title or description. After the build,
// write one HTML file per page (dist/_pages/<path>.html, served by .htaccess)
// with that page's tags already in <head>.
function staticPageHeads(): Plugin {
  let outDir = "dist";
  return {
    name: "static-page-heads",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const shellPath = path.join(outDir, "index.html");
      const shell = fs.readFileSync(shellPath, "utf8");
      const marker = /<!-- static-head:[\s\S]*?<!-- \/static-head -->/;
      if (!marker.test(shell)) throw new Error("static-page-heads: marker missing from index.html");

      for (const [route, { title, description }] of Object.entries(pageSeo)) {
        const url = canonicalUrl(route);
        const tags = [
          `<title data-static-head>${escapeHtml(title)}</title>`,
          `<meta data-static-head name="description" content="${escapeHtml(description)}" />`,
          `<link data-static-head rel="canonical" href="${url}" />`,
          `<meta data-static-head property="og:title" content="${escapeHtml(title)}" />`,
          `<meta data-static-head property="og:description" content="${escapeHtml(description)}" />`,
          `<meta data-static-head property="og:url" content="${url}" />`,
          `<meta data-static-head property="og:type" content="website" />`,
          `<meta data-static-head property="og:site_name" content="${SITE_NAME}" />`,
          `<meta data-static-head name="twitter:card" content="summary_large_image" />`,
        ].join("\n    ");
        const html = shell.replace(marker, () => tags);
        const file =
          route === "/" ? shellPath : path.join(outDir, "_pages", `${route.slice(1)}.html`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, html);
      }
    },
  };
}

export default defineConfig({
  plugins: [TanStackRouterVite(), react(), tailwindcss(), staticPageHeads()],
  resolve: {
    tsconfigPaths: true,
  },
});
