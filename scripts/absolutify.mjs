/**
 * Post-build: rewrite relative URLs to absolute, and inject a script
 * that neutralizes Next.js client-side routing when opened from file://.
 */
import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const SITE = "https://jay-interior.pages.dev";
const OUT = "out";

// When the saved HTML is opened from file://, this script:
// 1. Kills pushState/replaceState so Next.js can't do client routing
// 2. Intercepts all <a> clicks to force full navigation
// 3. Converts Services/Projects dropdown <button>s to direct links
// On the deployed site (https://), this script does NOTHING.
const ROUTE_FIX = `<script>(function(){if(location.protocol!=="file:")return;history.pushState=function(){};history.replaceState=function(){};document.addEventListener("click",function(e){var a=e.target.closest("a");if(a&&a.href&&a.href.indexOf("jay-interior")!==-1){e.stopPropagation();e.preventDefault();window.location.href=a.href}},true);document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("button").forEach(function(b){var t=b.textContent.trim();if(t==="Services"||t.startsWith("Services")){var a=document.createElement("a");a.href="${SITE}/services";a.className=b.className;a.innerHTML=b.innerHTML.replace(/chevron.*?<\\/svg>/is,"");b.replaceWith(a)}if(t==="Projects"||t.startsWith("Projects")){var a2=document.createElement("a");a2.href="${SITE}/projects";a2.className=b.className;a2.innerHTML=b.innerHTML.replace(/chevron.*?<\\/svg>/is,"");b.replaceWith(a2)}})})})();</script>`;

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

    // Images: src="/images/..." → absolute
    html = html.replace(/src="\/images\//g, `src="${SITE}/images/`);

    // Internal links: href="/..." → absolute (skip _next, anchors)
    html = html.replace(/href="\/((?!_next|#)[^"]*)"/g, `href="${SITE}/$1"`);

    // Inject route fix right after opening <head>
    html = html.replace("</head>", ROUTE_FIX + "</head>");

    await writeFile(file, html);
  }

  console.log("Done — URLs absolute, file:// routing fixed.");
}

main().catch(console.error);
