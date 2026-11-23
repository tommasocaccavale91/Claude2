# Muretto

Gioco di corse e carriera in un campionato inventato di monoposto. All'inizio scegli se essere **pilota** o **manager**, quanto dura la stagione (6, 12 o 24 GP) e quanto durano le gare (sprint 8 giri, gara 12, lunga 20: si cambia in qualsiasi momento).

Tutto è in un solo file: `muretto/index.html`.

## Weekend di gara

Ogni GP ha il nome di una località (GP Monza, GP Spa, GP Suzuka…) e un circuito suo, con probabilità di pioggia diverse.

- **8 tracciati disegnati a mano, ispirati agli originali**: Monza, Monaco, Spa, Silverstone, Melbourne, San Paolo, Imola, Barcellona. Forma generale e curve simbolo riconoscibili (Parabolica, La Source ed Eau Rouge, i curvoni di Becketts…), semplificati e non identici. Le chicane più strette sono addolcite per restare guidabili.
- **Gli altri 16** sono generati dal nome: veloci, misti o cittadini.

I punti dei tracciati a mano sono nella costante `HAND` di `index.html` (ordine dei punti = senso di marcia, `start` = punto sul rettilineo dei box). Prima di pubblicare l'app conviene una verifica legale: alcuni autodromi hanno registrato la sagoma della pista come marchio.

1. **Prove libere** (facoltative): 3 giri da solo. Alzano la conoscenza della pista (qualche decimo in più) e rivelano l'assetto giusto: carico basso, bilanciato o alto.
2. **Qualifica**: un giro secco con le morbide. Decide la griglia. Si può simulare, e con un video premio si può ripetere il giro.
3. **Gara**: da pilota guidi sempre tu. Da manager scegli se guidare uno dei tuoi piloti o comandare dal muretto (ritmo, pit stop, ordini di scuderia).

## In gara

La macchina **guida da sola**: tu decidi quando attaccare, quando difenderti e come gestire gomme e benzina. Da pilota lo fai sempre. Da manager scegli se seguire da vicino uno dei tuoi piloti ("Con il pilota") o comandare entrambe le auto dal muretto.

- **ATTACCA**: entro 0,8 s da chi ti precede si accende il grande pulsante con la probabilità di riuscita ("62% di riuscita su KEL"). La probabilità sale sul dritto, in scia, con il DRS, con gomme più fresche e con il ritmo Spingi. Se riesce, la tua auto si sposta di lato, scatta e lo supera. Se fallisce, "ha chiuso la porta". Chi è stato appena superato non può ritentare per qualche secondo.
- **DIFENDI**: quando un'auto più veloce ti attacca, il pulsante diventa blu per un attimo, con il tempo rallentato. Se lo premi in tempo tieni la posizione nella maggior parte dei casi. Con la tua auto si passa solo attraverso i duelli.
- **Batteria**: 3 tacche, ogni attacco o difesa ne consuma una, se ne recupera una a ogni giro. Va dosata.
- **Strategia**: prima della gara il box propone tre piani calcolati per quella durata (per esempio "Una sosta · aggressiva", morbide → medie, box al giro 5) con il tempo stimato rispetto al più veloce. Il piano decide le gomme al via e le soste.
- **Finestra box**: al giro previsto il box chiede "Montiamo le medie?". Puoi seguire il piano, restare fuori un altro giro o cambiare mescola.
- **Radio**: il pulsante 🎧 apre le chiamate al box: "Come sono messo?" (posizione, distacchi, gomme, benzina, prossima sosta), "Ritmo di chi ho davanti?", "Undercut su X?" (guadagno al giro e probabilità di passarlo dopo la sua sosta), "Box questo giro" (con la mescola) e "Meteo?".
- **Momenti decisivi**: il box ti chiama solo quando conta. Un rivale vicino si ferma (lo segui, resti fuori e spingi per due giri, o ignori: al massimo due volte a gara), arriva la pioggia, o entra la **safety car**.
- **Safety car**: capita più spesso nei cittadini (55%) che nei veloci (30%). Il gruppo si ricompatta, nessuno sorpassa e una sosta costa circa la metà. Alla ripartenza ricevi una tacca di batteria in più.
- **Carburante** (Grassa / Normale / Magra) e **gomme** (Gestisci / Normale / Spingi) restano nel pannello. Morbide circa 40% della gara, medie 60%, dure 90%, ma con un minimo in giri (3 / 5 / 7): nelle sprint da 8 giri serve comunque una sosta.
- **Ingegnere discreto**: oltre ai momenti decisivi, solo brevi messaggi che spariscono da soli. Se lasci scadere una domanda vale la scelta consigliata. Il tempo sul giro compare piccolo sotto il contatore dei giri.
- **Scia**: un unico flusso bianco morbido tra l'auto davanti e la tua. Spinge forte.
- **Prima gara**: batteria piena, sorpassi più facili, nessun danno e un fumetto che indica quando premere ATTACCA e DIFENDI. I danni da contatto non ci sono mai nel primo giro.
- **Zoom** con − e +, pizzico o rotellina, fino alla pista intera a pallini. La tua auto ha un cerchio dorato. Velocità ×1, ×2, ×4 e pausa.

**Prove libere e qualifica** sono scelte rapide: "Fai le prove" o "Salta", "Giro sicuro" o "Al limite" (più veloce, 22% di rischio di errore).

**Durata delle gare**: 8, 12 (predefinita) o 20 giri. I salvataggi con le vecchie durate passano a 12.

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

`career_start`, `session_start`, `session_quit`, `fp_done`, `quali`, `race_finish`, `race_length`, `plan`, `radio`, `plan_stay`, `sc_stay`, `pit_call`, `pit_skip`, `pit`, `boost`, `pace_mode`, `team_order`, `press_choice`, `train`, `upgrade`, `focus`, `sign`, `season_end`, `shop_view`, `iap_click`, `iap_purchase`, `iap_cancel`, `ad_rewarded_request`, `ad_rewarded_complete`, `ad_interstitial`.

## Prossimi passi

1. Messa a punto con giocatori veri: quanto rende la staccata, forza della scia e del DRS, difficoltà in qualifica.
2. Disegnare a mano anche gli altri GP (Suzuka richiede un ponte per l'incrocio).
3. Mercato piloti per il manager, rinnovi e trattative di contratto.
4. Sfida del giorno (giro secco con classifica) e obiettivi settimanali.
5. Suono del motore e vibrazione nell'app.
