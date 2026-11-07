// Dopo "cap add android": permessi e dichiarazioni che il riconoscimento vocale richiede su Android 11 e successivi.
import { readFileSync, writeFileSync } from 'node:fs';
const file = 'android/app/src/main/AndroidManifest.xml';
let xml = readFileSync(file, 'utf8');
const add = [];
if (!xml.includes('android.permission.RECORD_AUDIO')) add.push('    <uses-permission android:name="android.permission.RECORD_AUDIO" />');
if (!xml.includes('android.speech.RecognitionService')) add.push('    <queries>\n        <intent>\n            <action android:name="android.speech.RecognitionService" />\n        </intent>\n    </queries>');
if (add.length) {
  if (!xml.includes('<application')) throw new Error('AndroidManifest senza <application>');
  xml = xml.replace('<application', add.join('\n') + '\n\n    <application');
  writeFileSync(file, xml);
}
console.log('AndroidManifest pronto');
