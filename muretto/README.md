# Muretto

Gioco di corse e gestione: guidi una scuderia emergente in un campionato inventato di monoposto. Ogni gara si corre in uno dei due modi:

- **Guida tu**: vista dall'alto, comandi a un pollice. Tieni premuto per accelerare, rilascia per frenare, scorri a destra o sinistra per cambiare corsia. Con la frenata assistita l'auto non esce mai di pista ma è un po' più lenta. Senza, compare l'avviso FRENA e chi frena bene guadagna tempo.
- **Dal muretto**: segui la gara sulla mappa e decidi il ritmo (risparmia / normale / spingi), i pit stop e la mescola per ciascun pilota, e gli ordini di scuderia. La velocità si può raddoppiare.

Tutto è in un solo file: `muretto/index.html`.

## Cosa c'è nel prototipo

| Area | Dettaglio |
|---|---|
| Gara | 10 auto, 4 giri (circa 2 minuti), circuito del Lago con tornante, curve veloci e rettilineo dei box. Qualifica simulata dal passo di auto e piloti. |
| Fisica | Velocità in curva legata al raggio della corsia: la corsia interna è più corta ma più lenta. Frenate calcolate in anticipo, scia sui rettilinei, traffico e sorpassi dell'IA. |
| Gomme | Morbide, medie, dure e intermedie, con usura e calo di prestazioni. Pit lane vera con sosta al box. |
| Meteo | Probabilità di pioggia diversa per ogni gara, avviso radio un giro prima e pista bagnata che penalizza le slick. |
| Piloti | Velocità, costanza (più errori se è bassa), gestione gomme e morale (che incide sul passo). |
| Scuderia | Motore, aerodinamica e squadra box migliorabili con i crediti, livrea e nome personalizzabili. |
| Carriera | Campionato di 8 gare con classifica piloti, premi e obiettivo dello sponsor a ogni gara. |
| Storia | Dopo ogni gara una scelta (conferenza stampa, sponsor, ingegnere) che cambia morale o crediti. Dipende da cosa è successo: ordini di scuderia, podio, nessun punto, compagni vicini. |
| Monetizzazione | "Raddoppia i premi gara" con un video premio (simulato nel browser, AdMob tramite `window.NATIVE` nell'app). |

Squadre, piloti, campionato e circuito sono inventati: niente marchi F1, FIA, team o piloti reali.

## Eventi registrati

`race_start`, `race_go`, `race_finish` (posizioni, griglia, crediti, obiettivo, uscite di pista), `race_quit`, `pit_call`, `pit`, `pace_mode`, `team_order`, `off_track`, `upgrade`, `livery`, `press_choice`, `ad_rewarded_request`, `ad_rewarded_complete`.

## Da fare dopo la prova

1. Messa a punto con giocatori veri: differenza tra assistita e manuale, durata delle gomme, frequenza della pioggia.
2. Altri circuiti (il motore li genera da una lista di punti) e un mercato piloti come nel Procuratore.
3. Più storia: rinnovi, rivalità, ingegneri da assumere.
4. Negozio: livree e tute come premi del pass stagionale, pacchetti di crediti, rimozione della pubblicità.
5. Suono del motore e vibrazione nell'app.
