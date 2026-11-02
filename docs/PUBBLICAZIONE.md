# Pubblicare "Il Procuratore" su Google Play

Questa guida elenca i passaggi che spettano a te (account, firma, moduli). La parte tecnica è già nel repository.

## Come si costruisce l'app
Ogni volta che si carica codice sul branch, GitHub compila l'app da solo (scheda **Actions → Android build**).
Alla fine dell'esecuzione trovi due file da scaricare in fondo alla pagina, nella sezione "Artifacts":
- `il-procuratore-apk-di-prova`: da installare direttamente sul tuo telefono Android per provarla.
- `il-procuratore-aab-play-store`: il file da caricare sulla Play Console (va firmato, vedi sotto).

Per installare l'APK di prova: scaricalo sul telefono, aprilo e consenti "installa app sconosciute" quando Android lo chiede.

## 1. Account sviluppatore Google Play
1. Vai su https://play.google.com/console e crea un account sviluppatore (25 $ una tantum).
2. Completa la verifica dell'identità richiesta da Google.
3. Gli account personali nuovi devono fare un **test chiuso con almeno 12 tester per 14 giorni consecutivi** prima di poter pubblicare in produzione.

## 2. Chiave di firma (una volta sola)
Google accetta solo app firmate. Tu crei una "chiave di caricamento"; Google custodisce la chiave definitiva (Play App Signing).

Su un computer con Java installato:
```
keytool -genkeypair -v -keystore upload.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```
Conserva `upload.jks` e le password in un posto sicuro (password manager + copia di backup). **Non caricarla mai nel repository.**

Poi su GitHub: **Settings → Secrets and variables → Actions → New repository secret**, e crea:
| Nome | Valore |
|---|---|
| `ANDROID_KEYSTORE_BASE64` | il file codificato: `base64 -w0 upload.jks` (su Mac: `base64 -i upload.jks`) |
| `ANDROID_KEYSTORE_PASSWORD` | password del keystore |
| `ANDROID_KEY_ALIAS` | `upload` |
| `ANDROID_KEY_PASSWORD` | password della chiave |

Dalla compilazione successiva il file `.aab` sarà firmato e pronto per la Play Console.

## 3. Nome del pacchetto
L'app usa l'identificativo `app.ilprocuratore.game`. **Dopo il primo caricamento non si può più cambiare.** Se ne vuoi uno diverso (es. con il tuo dominio), dimmelo prima.

## 4. AdMob (pubblicità)
1. Crea un account su https://admob.google.com con lo stesso account Google.
2. Aggiungi l'app (Android) e crea due unità pubblicitarie: **Con premio** e **Interstitial**.
3. In AdMob → Privacy e messaggi, crea il messaggio di consenso **GDPR** per l'Europa.
4. Mandami i tre codici (ID app `ca-app-pub-…~…` e i due ID unità `ca-app-pub-…/…`): li inserisco in `native/config.js` e `AndroidManifest.xml` e disattivo la modalità di prova.
5. Inserisci dati fiscali e bancari in AdMob → Pagamenti.

Finché la modalità di prova è attiva (`TESTING: true`) vedrai annunci di esempio di Google: è normale e non viola le regole.

## 5. Prodotti in vendita (Play Console → Monetizza → Prodotti in-app)
Crea questi prodotti **con questi ID esatti**:
| ID | Tipo | Prezzo suggerito |
|---|---|---|
| `remove_ads` | Prodotto singolo (non consumabile) | €3,99 |
| `credits_5` | Consumabile | €0,99 |
| `credits_30` | Consumabile | €4,99 |
| `credits_70` | Consumabile | €9,99 |

Serve un profilo pagamenti attivo nella Play Console. I prodotti funzionano solo dopo che una versione dell'app è stata caricata almeno nel test interno.

## 6. Scheda dello store e moduli
- Titolo, descrizione breve e completa, icona 512×512, grafica 1024×500, almeno 2 screenshot (li preparo io).
- Privacy policy pubblicata a un indirizzo web (te ne preparo il testo).
- Modulo **Sicurezza dei dati**: l'app usa AdMob (identificatori pubblicitari, dati di diagnostica) e Google Play Billing; non raccoglie dati personali propri.
- Questionario **classificazione dei contenuti**: gioco sportivo/manageriale, nessuna violenza, acquisti in app presenti.
- Pubblico di destinazione: 13+ consigliato (con pubblicità personalizzate evita la categoria bambini).

## 7. Salvataggi
La partita resta salvata nel telefono. Android può includerla nel backup automatico di Google, ma il modo sicuro per cambiare telefono è **Ufficio/Carriera → Esporta partita** e poi **Importa partita** sul nuovo dispositivo.
