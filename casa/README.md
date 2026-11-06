# Casa in Ordine

App per gestire le faccende di famiglia: ricette, menù della settimana, lista della spesa e bollette.

Sta tutta in un file: apri `index.html` nel browser del telefono. I dati si salvano da soli sul dispositivo.

## Le sezioni
- **Stasera a tavola**: ogni giorno, all'ora scelta, un avviso con la cena in programma o un'idea che tiene conto di preferenze, frigo e varietà, più cosa preparare per domani (ammollo dei legumi, carne da scongelare, impasti). La domenica, l'avviso per pianificare la settimana: "Proponi le cene della settimana" nel Menù sceglie 7 cene alternando primi, secondi, zuppe e la pizza del sabato, e prepara la spesa.
- **Promemoria** (nella schermata Oggi): si scrivono o si dettano a voce, e giorno e ora vengono capiti dalla frase ("chiamare il dentista giovedì alle 10", "pillola ogni giorno alle 8", "spegnere il forno tra 40 minuti"). Nell'app Android arriva la notifica all'ora giusta; quelli che si ripetono passano da soli alla volta successiva.
- **Oggi**: le bollette in scadenza, cosa si mangia a pranzo e a cena, quante cose mancano nella spesa e quanto hai pagato nel mese.
- **Ricette**: ingredienti, procedimento, tempo, etichette e preferite. Cambi le porzioni e le dosi si ricalcolano. Con un tocco mandi gli ingredienti alla spesa o metti la ricetta nel menù. Ci sono già quattro ricette di esempio.
- **Menù**: pranzo e cena per ogni giorno della settimana, con una ricetta o un testo libero ("pizza fuori", "avanzi"). Un pulsante aggiunge alla spesa gli ingredienti di tutta la settimana, con le dosi per il numero di persone in famiglia.
- **Spesa**: scrivi "2 kg patate" o più cose insieme ("latte, uova, pane") e vengono divise per reparto da sole. Spunti quello che metti nel carrello, poi togli i prodotti presi.
- **Bollette**: importo, scadenza, categoria e ricorrenza. Quando segni una bolletta pagata, la prossima si crea da sola. Quelle domiciliate in banca si segnano pagate alla scadenza. Il riepilogo mostra la spesa mese per mese e per categoria. Aperta dentro Claude, la bolletta si può compilare da una foto.
- **Scadenze**: oltre alle bollette, bollo, revisione, RC auto, caldaia, documenti e ISEE, anche senza importo, con ricorrenze fino a 10 anni.
- **Conti**: entrate e spese del mese per categoria. Le bollette pagate entrano da sole. Aggiunta veloce ("30 farmacia", "+1500 stipendio"), foto dello scontrino con l'assistente dentro "+ Movimento", import dell'estratto conto in CSV o Excel: colonne, categorie e doppioni vengono riconosciuti da soli, anche le bollette già registrate.

**Promemoria.** Nell'app Android arrivano le notifiche: qualche giorno prima di ogni scadenza (il preavviso si sceglie), il giorno stesso, il giorno dopo per le bollette scadute e, ogni mese nel giorno scelto, l'avviso per registrare le spese del mese scorso. Toccando l'avviso si apre la bolletta o l'import dell'estratto conto. Nella versione web lo stesso promemoria mensile compare nella schermata Oggi.

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
- Collegamento diretto al conto corrente tramite open banking (serve un server e un fornitore autorizzato).
- Dispensa, faccende e turni, scadenze di casa e auto.
- Dati condivisi tra i telefoni della famiglia.
