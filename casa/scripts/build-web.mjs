// Prepara la cartella www/ per l'app Android partendo da index.html (la stessa pagina della versione web).
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
const out = 'www';
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/index.html`, readFileSync('index.html', 'utf8'));
console.log('www/ pronta');
