// Dopo "cap add android": completa il progetto Android generato.
// - microfono e servizio di riconoscimento vocale (Android 11 e successivi)
// - "Casa in Ordine" nel menu Condividi per testi, link e immagini
// - consegna della condivisione anche quando l'app era chiusa
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const file = 'android/app/src/main/AndroidManifest.xml';
let xml = readFileSync(file, 'utf8');
const add = [];
if (!xml.includes('android.permission.RECORD_AUDIO')) add.push('    <uses-permission android:name="android.permission.RECORD_AUDIO" />');
if (!xml.includes('android.speech.RecognitionService')) add.push('    <queries>\n        <intent>\n            <action android:name="android.speech.RecognitionService" />\n        </intent>\n    </queries>');
if (add.length) {
  if (!xml.includes('<application')) throw new Error('AndroidManifest senza <application>');
  xml = xml.replace('<application', add.join('\n') + '\n\n    <application');
}
if (!xml.includes('android.intent.action.SEND"')) {
  const filters = `
            <intent-filter>
                <action android:name="android.intent.action.SEND" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="text/*" />
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.SEND" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="image/*" />
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.SEND_MULTIPLE" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="image/*" />
            </intent-filter>
`;
  const i = xml.indexOf('</activity>');
  if (i < 0) throw new Error('AndroidManifest senza </activity>');
  xml = xml.slice(0, i) + filters.trimStart().replace(/^/, '    ') + '        ' + xml.slice(i);
}
writeFileSync(file, xml);

/* MainActivity: all'avvio da "Condividi" passa l'intent ai plugin, come quando l'app è già aperta */
const find = dir => readdirSync(dir).flatMap(f => { const p = join(dir, f); return statSync(p).isDirectory() ? find(p) : f === 'MainActivity.java' ? [p] : []; });
const [main] = find('android/app/src/main/java');
if (!main) throw new Error('MainActivity.java non trovata');
const src = readFileSync(main, 'utf8');
if (!src.includes('ACTION_SEND')) {
  const pkg = src.match(/^package\s+[\w.]+;/m)[0];
  writeFileSync(main, `${pkg}

import android.content.Intent;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = getIntent();
        if (intent != null && bridge != null
                && (Intent.ACTION_SEND.equals(intent.getAction()) || Intent.ACTION_SEND_MULTIPLE.equals(intent.getAction()))) {
            bridge.onNewIntent(intent);
        }
    }
}
`);
}
console.log('Progetto Android pronto');
