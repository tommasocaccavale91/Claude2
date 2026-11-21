# Muretto

Gioco di corse e gestione: guidi una scuderia emergente in un campionato inventato di monoposto. Ogni gara si corre in uno dei due modi:

- **Guida tu**: vista dall'alto. Trascini il dito a destra e a sinistra per sterzare, mentre gas e freno li gestisce l'auto. In pista è disegnata la traiettoria ideale (verde dove si accelera, rossa dove si frena): seguirla in curva rende di più, uscirne fa perdere velocità e finire sull'erba rallenta molto. Sui rettilinei ci si sposta senza perdere nulla, la scia spinge e il pulsante **Spinta** dà un boost quando la barra è carica (si ricarica frenando).
- **Dal muretto**: segui la gara sulla mappa e decidi il ritmo (risparmia / normale / spingi), i pit stop e la mescola per ciascun pilota, e gli ordini di scuderia. La velocità si può raddoppiare.

Tutto è in un solo file: `muretto/index.html`.

## Cosa c'è nel prototipo

| Area | Dettaglio |
|---|---|
| Gara | 10 auto, 3 giri (circa 90 secondi), chi guida parte al massimo sesto, circuito del Lago con tornante, curve veloci e rettilineo dei box. Qualifica simulata dal passo di auto e piloti. |
| Fisica | Velocità in curva legata alla distanza dalla traiettoria ideale, frenate calcolate in anticipo, scia, spinta, contatti, e un'IA che si sposta di lato per sorpassare. |
| Decisioni | Quando servono (gomme consumate, pioggia, compagni vicini) l'ingegnere chiede con 2–3 pulsanti grandi e la gara rallenta mentre scegli. Al muretto si può anche chiamare il box a mano. |
| Gomme | Morbide, medie, dure e intermedie, con usura e calo di prestazioni. Pit lane vera con sosta al box. |
| Meteo | Probabilità di pioggia diversa per ogni gara, avviso radio un giro prima e pista bagnata che penalizza le slick. |
| Piloti | Velocità, costanza (più errori se è bassa), gestione gomme e morale (che incide sul passo). |
| Scuderia | Motore, aerodinamica e squadra box migliorabili con i crediti, livrea e nome personalizzabili. |
| Carriera | Campionato di 8 gare con classifica piloti, premi e obiettivo dello sponsor a ogni gara. |
| Storia | Dopo ogni gara una scelta (conferenza stampa, sponsor, ingegnere) che cambia morale o crediti. Dipende da cosa è successo: ordini di scuderia, podio, nessun punto, compagni vicini. |
| Monetizzazione | "Raddoppia i premi gara" con un video premio (simulato nel browser, AdMob tramite `window.NATIVE` nell'app). |

Squadre, piloti, campionato e circuito sono inventati: niente marchi F1, FIA, team o piloti reali.

## Eventi registrati

`race_start`, `boost`, `pit_skip`, `race_finish` (posizioni, griglia, crediti, obiettivo, uscite di pista), `race_quit`, `pit_call`, `pit`, `pace_mode`, `team_order`, `upgrade`, `livery`, `press_choice`, `ad_rewarded_request`, `ad_rewarded_complete`.

## Da fare dopo la prova

1. Messa a punto con giocatori veri: differenza tra assistita e manuale, durata delle gomme, frequenza della pioggia.
2. Altri circuiti (il motore li genera da una lista di punti) e un mercato piloti come nel Procuratore.
3. Più storia: rinnovi, rivalità, ingegneri da assumere.
4. Negozio: livree e tute come premi del pass stagionale, pacchetti di crediti, rimozione della pubblicità.
5. Suono del motore e vibrazione nell'app.
