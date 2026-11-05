# Casa in Ordine

App per gestire le faccende di famiglia: ricette, menù della settimana, lista della spesa e bollette.

Sta tutta in un file: apri `index.html` nel browser del telefono. I dati si salvano da soli sul dispositivo.

## Le sezioni
- **Oggi**: le bollette in scadenza, cosa si mangia a pranzo e a cena, quante cose mancano nella spesa e quanto hai pagato nel mese.
- **Ricette**: ingredienti, procedimento, tempo, etichette e preferite. Cambi le porzioni e le dosi si ricalcolano. Con un tocco mandi gli ingredienti alla spesa o metti la ricetta nel menù. Ci sono già quattro ricette di esempio.
- **Menù**: pranzo e cena per ogni giorno della settimana, con una ricetta o un testo libero ("pizza fuori", "avanzi"). Un pulsante aggiunge alla spesa gli ingredienti di tutta la settimana, con le dosi per il numero di persone in famiglia.
- **Spesa**: scrivi "2 kg patate" o più cose insieme ("latte, uova, pane") e vengono divise per reparto da sole. Spunti quello che metti nel carrello, poi togli i prodotti presi.
- **Bollette**: importo, scadenza, categoria e ricorrenza. Quando segni una bolletta pagata, la prossima si crea da sola. Quelle domiciliate in banca si segnano pagate alla scadenza. Il riepilogo mostra la spesa mese per mese e per categoria. Aperta dentro Claude, la bolletta si può compilare da una foto.
- **Conti**: entrate e spese del mese per categoria. Le bollette pagate entrano da sole. Si importa il file CSV dei movimenti scaricato dalla banca: colonne, categorie e doppioni vengono riconosciuti da soli, anche le bollette già registrate.

Dalle impostazioni (in alto nella schermata Oggi) scegli il numero di persone, il preavviso per le bollette e il tema chiaro o scuro, e puoi fare o ripristinare una copia di sicurezza dei dati.

## App Android
Ogni modifica alla cartella `casa/` avvia la build su GitHub Actions (*Casa in Ordine — APK Android*). L'APK si scarica dagli artefatti della build e si installa sul telefono.

In locale, con Node 22, Java 21 e l'Android SDK:

```
npm ci
npm run android
cd android && ./gradlew assembleDebug
```

## Prossimi passi possibili
- Notifiche sul telefono per le scadenze.
- Collegamento diretto al conto corrente tramite open banking (serve un server e un fornitore autorizzato).
- Dispensa, faccende e turni, scadenze di casa e auto.
- Dati condivisi tra i telefoni della famiglia.
