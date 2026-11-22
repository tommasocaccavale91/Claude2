# Muretto

Gioco di corse e carriera in un campionato inventato di monoposto. All'inizio scegli se essere **pilota** o **manager**, quanto dura la stagione (6, 12 o 24 GP) e quanto durano le gare (sprint 3 giri, media 5, lunga 8: si cambia in qualsiasi momento).

Tutto è in un solo file: `muretto/index.html`.

## Weekend di gara

Ogni GP ha il nome di una località (GP Monza, GP Spa, GP Suzuka…) e un circuito suo, con probabilità di pioggia diverse.

- **8 tracciati disegnati a mano, ispirati agli originali**: Monza, Monaco, Spa, Silverstone, Melbourne, San Paolo, Imola, Barcellona. Forma generale e curve simbolo riconoscibili (Parabolica, La Source ed Eau Rouge, i curvoni di Becketts…), semplificati e non identici. Le chicane più strette sono addolcite per restare guidabili.
- **Gli altri 16** sono generati dal nome: veloci, misti o cittadini.

I punti dei tracciati a mano sono nella costante `HAND` di `index.html` (ordine dei punti = senso di marcia, `start` = punto sul rettilineo dei box). Prima di pubblicare l'app conviene una verifica legale: alcuni autodromi hanno registrato la sagoma della pista come marchio.

1. **Prove libere** (facoltative): 3 giri da solo. Alzano la conoscenza della pista (qualche decimo in più) e rivelano l'assetto giusto: carico basso, bilanciato o alto.
2. **Qualifica**: un giro secco con le morbide. Decide la griglia. Si può simulare, e con un video premio si può ripetere il giro.
3. **Gara**: da pilota guidi sempre tu. Da manager scegli se guidare uno dei tuoi piloti o comandare dal muretto (ritmo, pit stop, ordini di scuderia).

## Guida

- **Guida libera**: l'auto guidata si muove davvero nel piano (posizione, direzione, derapata). Si sterza tenendo il pollice sullo schermo e spostandolo a destra o a sinistra (frecce da tastiera). Gas e freno sono automatici.
- **Sterzo assistito** (attivo all'inizio, si cambia nella pausa): se lasci il dito l'auto segue la traiettoria, un po' più piano. Chi sterza da sé può andare forte come un pilota dell'IA con la stessa macchina.
- La traiettoria è un tratteggio leggero (verde gas, rosso frenata), disattivabile. Non è un binario: in curva c'è una fascia libera e solo allontanandosi molto si deve rallentare. Entrando troppo forte l'auto scivola verso l'esterno.
- **Uscita larga** con trazione migliore, **scia**, **DRS** sul rettilineo dei box, **Spinta** (si ricarica frenando), **aria sporca** in curva dietro a un'altra auto.
- Erba più lenta della pista, muretto esterno con rimbalzo, contatti con le altre auto con scintille e sobbalzo.
- Gli avversari chiudono l'interno quando li attacchi da vicino e sbagliano di più se gli stai attaccato a lungo.
- Le decisioni (gomme, pioggia, ordini di scuderia) arrivano come domanda dell'ingegnere, e la gara rallenta mentre scegli.
- **Grafica**: prato a strisce, alberi, tribune con il pubblico, box, cordoli a blocchi, gomma sulla traiettoria, monoposto dettagliate, segni di frenata, fumo, scintille, linee di velocità con la Spinta. La telecamera segue in modo fluido e si allarga con la velocità.

**Equilibrio.** Le curve troppo strette vengono ammorbidite in automatico (raggio minimo 40), così non si possono "tagliare" i tornanti. La velocità dell'auto guidata è calibrata pista per pista contro quella degli avversari, con la stessa macchina e lo stesso pilota. La durata delle gomme è fissa in giri (morbide circa 2,7, medie 3,9, dure 5,7): le gare sprint si fanno senza soste, quelle medie e lunghe richiedono strategia.

## Carriera

| | Pilota | Manager |
|---|---|---|
| Inizio | Squadra più debole (Verdeoro), contro il compagno | Scuderia Aurora con due piloti |
| Crescita | Allenamenti (velocità, costanza, gomme) con lo stipendio e i premi | Motore, aerodinamica e squadra box con i crediti |
| Fine stagione | Offerte dai team migliori in base a classifica, confronto con il compagno e conferenza stampa | Premio per la classifica costruttori |

- **Regolamento** nuovo a ogni stagione: scia potenziata, gomme a lunga durata, motori più potenti, tetto di spesa, pit stop obbligatorio, punto per il giro veloce.
- **Rivoluzione tecnica** ogni due stagioni: le squadre si avvicinano e l'aerodinamica del manager perde due livelli. Il manager sceglie dove concentrare lo sviluppo, con il 30% di sconto.
- Le squadre rivali sviluppano la macchina durante la stagione.
- Dopo ogni gara c'è una scelta (stampa, sponsor, ingegnere, social) che cambia morale, crediti o attributi.

## Monetizzazione

| Prodotto | Prezzo |
|---|---|
| Pacchetto di benvenuto (5.000 crediti + livrea Oro), per 48 ore dopo la seconda gara | 1,99 € |
| Crediti: 1.200 / 7.000 / 16.000 / 36.000 | 0,99 / 4,99 / 9,99 / 19,99 € |
| Pass stagionale: +50% crediti a ogni GP della stagione + 4 livree esclusive | 4,99 € |
| Rimuovi la pubblicità | 3,99 € |

Video con premio: raddoppio dei premi gara, secondo tentativo in qualifica, +250 crediti (3 al giorno). Un annuncio tra le gare ogni due GP, mai con "Rimuovi la pubblicità".

Nel browser annunci e acquisti sono simulati. Nell'app passano da `window.NATIVE` (`rewarded`, `buy`, `track`), lo stesso ponte di `native/native.js`.

Squadre, piloti e campionato sono inventati: niente marchi F1, FIA, team o piloti reali. I GP usano solo nomi di località, non i nomi degli autodromi.

## Eventi registrati

`career_start`, `session_start`, `session_quit`, `fp_done`, `quali`, `race_finish`, `race_length`, `pit_call`, `pit_skip`, `pit`, `boost`, `pace_mode`, `team_order`, `press_choice`, `train`, `upgrade`, `focus`, `sign`, `season_end`, `shop_view`, `iap_click`, `iap_purchase`, `iap_cancel`, `ad_rewarded_request`, `ad_rewarded_complete`, `ad_interstitial`.

## Prossimi passi

1. Messa a punto con giocatori veri: quanto rende la staccata, forza della scia e del DRS, difficoltà in qualifica.
2. Disegnare a mano anche gli altri GP (Suzuka richiede un ponte per l'incrocio).
3. Mercato piloti per il manager, rinnovi e trattative di contratto.
4. Sfida del giorno (giro secco con classifica) e obiettivi settimanali.
5. Suono del motore e vibrazione nell'app.
