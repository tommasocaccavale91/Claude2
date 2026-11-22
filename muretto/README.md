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

## In gara

La macchina **guida da sola**: tu la gestisci come un pilota con il suo ingegnere di pista. Da pilota lo fai sempre. Da manager scegli se seguire da vicino uno dei tuoi piloti ("Con il pilota") o comandare entrambe le auto dal muretto.

- **DRS**: entrando nel rettilineo dei box a meno di circa un secondo da chi ti precede, il pulsante si accende ("premi!"). Se non lo apri, perdi l'occasione. +10% di velocità di punta.
- **Carburante**: Grassa (+10% di consumo, più veloce), Normale (arriva in fondo con un piccolo margine), Magra (consuma il 10% in meno, più lenta). A secco si rallenta moltissimo.
- **Gomme**: Gestisci (durano di più), Normale, Spingi (più veloce, consuma prima). Morbide circa 40% della gara, medie 60%, dure 90%.
- **Danni**: nei contatti l'ala si può rompere (fino al 10% di passo in meno). Si ripara al box.
- **Scia**: più forte (+11% di velocità di punta e accelerazione migliore) e visibile, con filetti d'aria tra le due auto. Uscendo dalla scia in rettilineo si prende la fionda per affiancare.
- **Ingegnere di pista** (radio in basso): a ogni giro tempo, differenza dal giro prima, distacchi da chi è davanti e dietro, se recuperi o perdi. Avvisa per DRS, gomme che calano, danni, pioggia. Propone scelte con **Accetta / Rifiuta**: Grassa per N giri per attaccare (poi torna da sola a Normale), Magra se il carburante non basta, Spingi per attaccare o difenderti, Gestisci se le gomme soffrono, box quando le gomme non arrivano in fondo, muso nuovo solo se il danno costa più della sosta. Mentre decidi la gara rallenta.
- Velocità ×1, ×2, ×4 e pausa.
- **Zoom**: pulsanti − e +, pizzico con due dita o rotellina. Quattro livelli di distanza e, in fondo, la pista intera vista dall'alto con le auto come pallini. La tua auto ha sempre un cerchio dorato, è disegnata più in alto dello schermo e le decisioni dell'ingegnere compaiono in alto per non coprirla.
- **Movimenti morbidi**: ogni auto ruota seguendo il proprio movimento reale, smorzato nel tempo (nelle prove circa 0,2° per fotogramma in media, al massimo 4°). Spostamenti laterali lenti, posizione interpolata. Monoposto in stile F1.

**Prove libere e qualifica** sono scelte rapide. Le prove portano la conoscenza della pista al 100% e rivelano l'assetto giusto. In qualifica scegli "Giro sicuro" oppure "Al limite" (circa mezzo punto percentuale più veloce, ma 22% di rischio di errore). Con un video premio si può ripetere.

**Durata delle gare**: 5, 10 o 20 giri.

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
