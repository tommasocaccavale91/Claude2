# Confetteria

Puzzle hybrid-casual: riempi ogni barattolo con 4 confetti dello stesso colore. È il prototipo della proposta 1 (puzzle con sfida giornaliera), separato dal gioco Il Procuratore che sta nella radice del repo.

Tutto è in un solo file, `puzzle/index.html`. Si apre nel browser del telefono e i progressi si salvano sul dispositivo.

## Cosa c'è dentro

| Area | Dettaglio |
|---|---|
| Livelli infiniti | Generati da un seed e verificati dal risolutore, quindi sempre risolvibili. Si parte con 3 colori e si sale fino a 11. Ogni 5 livelli ce n'è uno difficile con un colore in più. |
| Stelle | Contano le mosse rispetto alla soluzione trovata dal risolutore (3 stelle se sei entro quel numero). |
| Sfida del giorno | Lo stesso livello per tutti (seed = data), 8 colori. Serie di giorni consecutivi, risultato da copiare per WhatsApp, "salva la serie" con un video se hai saltato un giorno. |
| Regalo giornaliero | Ciclo di 7 giorni da 30 a 80 monete, al 7° 200 monete + 1 barattolo. Si raddoppia con un video. |
| Aiuti | Annulla (gratis), Ricomincia, Suggerimento (40 monete o un video), Barattolo extra (100 monete o un video, uno per livello). |
| Pass stagionale | Stagioni di 28 giorni, 20 livelli, colonna gratis e colonna Premium a 4,99 €. |
| Negozio | Starter pack a 1,99 € (si sblocca al livello 6 e dura 48 ore), monete da 0,99 a 19,99 €, rimozione pubblicità a 4,99 €, +40 monete con un video (5 al giorno). |
| Pubblicità | Video con premio sempre facoltativi. Annuncio tra un livello e l'altro solo dal livello 11, al massimo uno ogni 3 livelli e ogni 3 minuti, mai con "Rimuovi pubblicità". |
| Dati | Schermata con le metriche del soft launch e gli ultimi eventi registrati. |

Nel browser annunci e acquisti sono **simulati**. Nell'app il gioco usa `window.NATIVE` (`rewarded()`, `interstitial()`, `buy(id, consumabile)`, `track(nome, props)`), la stessa interfaccia del ponte in `native/native.js`.

## Eventi → KPI

| KPI | Eventi |
|---|---|
| Retention D1/D7/D30, sessioni | `session_start` (numero di sessione, giorno), `session_pause` |
| Progressione e funnel per livello | `level_start`, `level_complete` (mosse, obiettivo, stelle, secondi, aiuti), `level_restart` |
| Uso della sfida giornaliera | `daily_complete` (serie), `streak_saved`, `share` |
| Ricavi pubblicitari | `ad_rewarded_request`, `ad_rewarded_complete` / `skip` (per posizionamento), `ad_interstitial` |
| Conversione a pagamento | `shop_view`, `offer_view`, `iap_click`, `iap_purchase`, `iap_cancel` |
| Economia interna | `booster_offer`, `booster_use`, `coins_spend`, `reward_double`, `daily_gift`, `pass_view`, `pass_claim` |

Posizionamenti dei video con premio da confrontare: `hint`, `extra_jar`, `win_double`, `gift_double`, `free_coins`, `streak_save`.

## Prossimi passi

1. **Test delle creatività** (fase 0): video da 15 secondi registrati dal prototipo, su Meta e TikTok, con budget 1.000–1.500 €.
2. **App Android**: un progetto Capacitor separato (nuovo `appId`, prodotti `starter_pack`, `remove_ads`, `season_pass`, `coins_*`). Va aggiunto `NATIVE.track` verso Firebase o GameAnalytics e vanno incorporati i font.
3. **Soft launch** (fasi 1 e 2) con le soglie del piano: D1 ≥ 40%, D7 ≥ 15%, ARPDAU ≥ 0,15 $.
4. **Contenuti**: skin dei barattoli e temi stagionali come premi del pass (solo estetici).
