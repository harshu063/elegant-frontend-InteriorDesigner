/**
 * Post-build: rewrite relative image src and internal link href
 * to absolute URLs so saved view-source HTML renders standalone.
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
  console.log(`Rewriting ${files.length} HTML files...`);

  for (const file of files) {
    let html = await readFile(file, "utf-8");

    // Images: src="/images/..." → src="https://site/images/..."
    html = html.replace(/src="\/images\//g, `src="${SITE}/images/`);

    // Internal links: href="/..." → href="https://site/..."
    // (only root-relative, skip anchors, skip _next assets, skip external)
    html = html.replace(/href="\/((?!_next|#)[^"]*)"/g, `href="${SITE}/$1"`);

    await writeFile(file, html);
  }

  console.log("Done — all URLs absolute.");
}

main().catch(console.error);
