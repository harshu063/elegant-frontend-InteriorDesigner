/**
 * Post-build: rewrite relative URLs to absolute AND strip Next.js
 * script tags so saved view-source HTML works standalone without
 * React hydration errors.
 *
 * The deployed site: scripts are gone but ALL content is server-rendered
 * HTML + CSS. The site works as a traditional multi-page static website
 * (each link = full page load). For a portfolio site this is ideal:
 * zero JS = instant loads, perfect SEO, no hydration issues.
 */
import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const SITE = "https://jay-interior.pages.dev";
const OUT = "out";

async function getHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files = files.concat(await getHtmlFiles(full));
    else if (e.name.endsWith(".html")) files.push(full);
  }
  return files;
}

async function main() {
  const files = await getHtmlFiles(OUT);
  console.log(`Processing ${files.length} HTML files...`);

  for (const file of files) {
    let html = await readFile(file, "utf-8");

    // 1. Make image URLs absolute
    html = html.replace(/src="\/images\//g, `src="${SITE}/images/`);

    // 2. Make internal link URLs absolute (skip _next, anchors, tel, mailto)
    html = html.replace(/href="\/((?!_next|#)[^"]*)"/g, `href="${SITE}/$1"`);

    // 3. Strip ALL <script> tags (external and inline)
    //    This removes Next.js hydration/routing JS entirely.
    //    The HTML + CSS is fully self-contained.
    html = html.replace(/<script[\s\S]*?<\/script>/gi, "");

    // 4. Remove preload hints for JS chunks (not needed without scripts)
    html = html.replace(/<link[^>]*as="script"[^>]*>/gi, "");

    await writeFile(file, html);
  }

  console.log("Done — pure static HTML, all URLs absolute, zero JS.");
}

main().catch(console.error);
