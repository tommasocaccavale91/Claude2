// Prepara la cartella www/ per l'app Android partendo da index.html (la stessa pagina della versione web).
// Aggiunge capacitor.js, che nell'app dà accesso alle funzioni del telefono (notifiche).
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from 'node:fs';
const out = 'www';
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
let html = readFileSync('index.html', 'utf8');
const marker = "<script>\n'use strict';";
if (!html.includes(marker)) throw new Error('Script principale non trovato in index.html');
html = html.replace(marker, '<script src="capacitor.js"></script>\n' + marker);
writeFileSync(`${out}/index.html`, html);
cpSync('node_modules/@capacitor/core/dist/capacitor.js', `${out}/capacitor.js`);
console.log('www/ pronta');
