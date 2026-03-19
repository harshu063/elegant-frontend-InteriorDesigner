/**
 * Post-build: rewrite relative image src and internal link href
 * to absolute URLs so saved view-source HTML renders standalone.
 * Also injects a click interceptor to override Next.js client routing.
 */
import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const SITE = "https://jay-interior.pages.dev";
const OUT = "out";

// This script runs in the browser — intercepts clicks BEFORE React
// so navigation goes to the absolute URL instead of RSC .txt payloads
const CLICK_INTERCEPTOR = `<script>document.addEventListener("click",function(e){var a=e.target.closest("a");if(a&&a.href&&a.href.indexOf("jay-interior.pages.dev")!==-1){e.stopPropagation();e.preventDefault();window.location.href=a.href}},true);</script>`;

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
    // (skip _next assets, anchors, and already-absolute URLs)
    html = html.replace(/href="\/((?!_next|#)[^"]*)"/g, `href="${SITE}/$1"`);

    // Inject click interceptor right after <head> to beat React event handlers
    html = html.replace("</head>", CLICK_INTERCEPTOR + "</head>");

    await writeFile(file, html);
  }

  console.log("Done — all URLs absolute, click interceptor injected.");
}

main().catch(console.error);
