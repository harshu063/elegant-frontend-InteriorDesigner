import puppeteer from 'puppeteer';
import { preview } from 'vite';
import fs from 'fs';
import path from 'path';

(async () => {
  console.log('Starting Vite preview server for prerendering...');
  const server = await preview({ preview: { port: 4173 } });
  
  console.log('Launching headless browser...');
  const browser = await puppeteer.launch({ 
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] 
  });
  
  const page = await browser.newPage();
  const routes = ['/', '/projects', '/services', '/contact'];
  
  for (const route of routes) {
    console.log(`Prerendering ${route}...`);
    try {
      await page.goto(`http://localhost:4173${route}`, { waitUntil: 'networkidle0' });
      const html = await page.content();
      
      const routePath = route === '/' ? '' : route.slice(1);
      const dir = path.join(process.cwd(), 'dist', routePath);
      
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), html);
      console.log(`✅ Saved ${route}`);
    } catch (e) {
      console.error(`❌ Error prerendering ${route}:`, e);
    }
  }
  
  await browser.close();
  server.httpServer.close();
  console.log('🎉 Prerendering complete!');
})();
