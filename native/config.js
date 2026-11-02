// Configurazione nativa dell'app Android.
// Finché TESTING è true si usano gli ID di prova di Google: annunci finti, nessun guadagno, nessun rischio per l'account.
// Prima della pubblicazione: sostituisci gli ID con quelli del tuo account AdMob e metti TESTING a false
// (e aggiorna anche ADMOB_APP_ID in android/app/src/main/AndroidManifest.xml).
window.NATIVE_CONFIG = {
  TESTING: true,
  ads: {
    rewarded: 'ca-app-pub-3940256099942544/5224354917',
    interstitial: 'ca-app-pub-3940256099942544/1033173712'
  },
  // ID dei prodotti da creare uguali nella Google Play Console (Monetizza > Prodotti in-app).
  products: {
    removeAds: 'remove_ads',
    credits: [
      { id: 'credits_5', amount: 5, fallback: '€0,99' },
      { id: 'credits_30', amount: 30, fallback: '€4,99' },
      { id: 'credits_70', amount: 70, fallback: '€9,99' }
    ],
    removeAdsFallback: '€3,99'
  }
};
