# Muretto

Gioco manageriale e di corse in un campionato inventato di monoposto. Dirigi una scuderia: piloti, staff, sviluppo, sponsor e strategia. Scegli quanto dura la stagione (6, 12 o 24 GP) e quanto durano le gare (sprint 8 giri, gara 12, lunga 20: si cambia in qualsiasi momento). In gara comandi dal muretto o segui da vicino uno dei tuoi piloti.

La carriera da pilota è nascosta dal menu iniziale (`CAREER_DRIVER = false` in `index.html`): il codice resta e i salvataggi già esistenti continuano a funzionare. Basta rimettere `true` per riattivarla.

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

## Gestione della scuderia (manager)

Il box del manager ha quattro schede: **Weekend**, **Squadra**, **Fabbrica**, **Finanze**. Un pallino segnala cosa richiede attenzione.

**Weekend**
- Notizie dal box (progetti finiti, sponsor, motori), obiettivi degli sponsor per il GP, avvisi sui motori usurati.
- **Gomme contate**: per auto 3 set di morbide, 2 di medie, 2 di dure. Le prove libere usano un set di medie, la qualifica uno di morbide. I piani che richiedono set che non hai sono disattivati; se in gara finisci i set nuovi, monti gomme usate.
- **Un piano diverso per ogni pilota**. Il compagno segue il suo piano da solo; dal muretto il box ti chiede la finestra di sosta per entrambi.

**Squadra**
- Piloti con età, potenziale, stipendio e contratto.
- **Staff** (direttore tecnico, stratega, capo meccanico, preparatore) da 1 a 5 stelle, ognuno con un effetto: progetti riusciti, conoscenza della pista e stime radio, pit stop e guasti, morale e crescita dei giovani. Si cambia dai candidati della stagione; i migliori possono ricevere offerte dalle rivali.
- **Mercato piloti**: svincolati (costano tre stipendi) e piloti delle altre squadre (clausola, più cara se la loro squadra è più forte). Si firma in qualsiasi momento, al posto di uno dei tuoi.
- **Accademia**: lo scouting (400) trova tre giovani di 17-19 anni con potenziale stimato. Fino a due in accademia; crescono a ogni GP e a media 75 possono essere promossi.

**Fabbrica**
- **Progetti di sviluppo** al posto degli acquisti immediati: 1-2 GP, probabilità di riuscita (se fallisce recuperi il 40%), si può accelerare pagando il 50%. Progetti in parallelo secondo il livello della fabbrica.
- **Motori contati** (circa uno ogni 4 GP). L'usura sale a ogni gara, di più con la modalità Grassa; oltre il 70% può arrivare un guasto (perdita di potenza). Oltre il limite stagionale un motore nuovo costa 5 posizioni in griglia.
- **Auto della stagione successiva**: dalla metà stagione puoi investire sull'anno dopo invece che sull'auto attuale. Con 1.500 investiti la rivoluzione tecnica toglie un solo livello di aerodinamica.
- **Strutture** (galleria del vento, simulatore, fabbrica) su 3 livelli, con lavori di 3-4 GP e manutenzione a ogni GP.
- Con il regolamento "Tetto di spesa", sviluppo e auto nuova hanno un limite stagionale.

**Finanze**
- Bilancio a ogni GP: premi, quote e bonus degli sponsor, stipendi, staff, accademia, strutture, ricambi. In rosso non si può sviluppare.
- **Due sponsor** (principale e secondario) con contratti da 6 GP e un obiettivo per gara. Offerte Sicuro / Equilibrato / Ambizioso. La soddisfazione sale e scende con gli obiettivi: a zero lo sponsor rescinde, sopra il 50% rinnova con una quota più alta.

**Fine stagione**: contratti in scadenza da rinnovare o sostituire (se non decidi si rinnovano da soli), piloti che invecchiano (i giovani crescono, chi ha più di 32 anni cala), mercato e staff rinnovati, motori azzerati.

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

`career_start`, `hub_tab`, `project_start`, `project_ok`, `project_fail`, `project_rush`, `engine_new`, `facility`, `next_car`, `staff_hire`, `sign_driver`, `scout`, `academy_join`, `sponsor_sign`, `renew`, `session_start`, `session_quit`, `fp_done`, `quali`, `race_finish`, `race_length`, `plan`, `radio`, `plan_stay`, `sc_stay`, `pit_call`, `pit_skip`, `pit`, `boost`, `pace_mode`, `team_order`, `press_choice`, `train`, `upgrade`, `focus`, `sign`, `season_end`, `shop_view`, `iap_click`, `iap_purchase`, `iap_cancel`, `ad_rewarded_request`, `ad_rewarded_complete`, `ad_interstitial`.

## Prossimi passi

1. Messa a punto con giocatori veri: quanto rende la staccata, forza della scia e del DRS, difficoltà in qualifica.
2. Disegnare a mano anche gli altri GP (Suzuka richiede un ponte per l'incrocio).
3. Trattative di contratto più ricche (durata, bonus, clausole) e mercato più vivo tra le squadre rivali.
4. Sfida del giorno (giro secco con classifica) e obiettivi settimanali.
5. Suono del motore e vibrazione nell'app.
