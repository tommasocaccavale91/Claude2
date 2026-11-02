// Ponte tra il gioco (index.html) e le funzioni native di Android.
// Nel browser non fa nulla: window.NATIVE resta undefined e il gioco nasconde negozio e pubblicità.
(function () {
  const cap = window.Capacitor, C = window.capacitorExports, CFG = window.NATIVE_CONFIG;
  if (!cap || !C || !CFG || !(cap.isNativePlatform && cap.isNativePlatform())) return;
  const AdMob = C.registerPlugin('AdMob');
  const Pay = C.registerPlugin('NativePurchases');
  let ready = null, prices = {};

  async function init() {
    if (ready) return ready;
    ready = (async () => {
      try {
        await AdMob.initialize({ initializeForTesting: CFG.TESTING });
        const info = await AdMob.requestConsentInfo();
        if (info && info.isConsentFormAvailable && info.status === 'REQUIRED') await AdMob.showConsentForm();
      } catch (e) { console.warn('AdMob init', e); }
      try {
        const ids = [CFG.products.removeAds, ...CFG.products.credits.map(c => c.id)];
        const { products } = await Pay.getProducts({ productIdentifiers: ids, productType: 'inapp' });
        for (const p of products || []) prices[p.identifier || p.productIdentifier] = p.priceString;
      } catch (e) { console.warn('Billing init', e); }
    })();
    return ready;
  }

  window.NATIVE = {
    init,
    price: (id, fallback) => prices[id] || fallback,
    async rewarded() {
      await init();
      try {
        await AdMob.prepareRewardVideoAd({ adId: CFG.ads.rewarded, isTesting: CFG.TESTING });
        const r = await AdMob.showRewardVideoAd();
        return !!r;
      } catch (e) { console.warn('rewarded', e); return false; }
    },
    async interstitial() {
      await init();
      try {
        await AdMob.prepareInterstitial({ adId: CFG.ads.interstitial, isTesting: CFG.TESTING });
        await AdMob.showInterstitial();
      } catch (e) { console.warn('interstitial', e); }
    },
    async buy(id, consumable) {
      await init();
      try {
        const t = await Pay.purchaseProduct({ productIdentifier: id, productType: 'inapp', isConsumable: !!consumable });
        return !!t;
      } catch (e) { console.warn('buy', e); return false; }
    },
    async restore() {
      await init();
      try {
        await Pay.restorePurchases();
        const { purchases } = await Pay.getPurchases({ productType: 'inapp' });
        return (purchases || []).map(p => p.productIdentifier);
      } catch (e) { console.warn('restore', e); return []; }
    },
    async privacy() {
      await init();
      try { await AdMob.showPrivacyOptionsForm(); } catch (e) { console.warn('privacy', e); }
    }
  };
})();
