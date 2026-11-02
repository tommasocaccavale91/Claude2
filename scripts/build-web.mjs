// Prepara la cartella www/ per l'app Android partendo da index.html (la stessa pagina della versione web).
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';
const out = 'www';
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
let html = readFileSync('index.html', 'utf8');
html = html.replace(/<link rel="preconnect"[^>]*>\n?/g, '')
  .replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>/, '<link rel="stylesheet" href="fonts/fonts.css">')
  .replace('<div id="app"></div>', '<div id="app"></div>\n<script src="capacitor.js"></script>\n<script src="config.js"></script>\n<script src="native.js"></script>');
if (!html.includes('fonts/fonts.css')) throw new Error('Link ai Google Fonts non trovato in index.html');
writeFileSync(`${out}/index.html`, '<!doctype html>\n<html lang="it">\n<head>\n<meta charset="utf-8">\n' + html + '\n</html>\n');
cpSync('assets/fonts', `${out}/fonts`, { recursive: true });
cpSync('node_modules/@capacitor/core/dist/capacitor.js', `${out}/capacitor.js`);
cpSync('native/config.js', `${out}/config.js`);
cpSync('native/native.js', `${out}/native.js`);
console.log('www/ pronta');
