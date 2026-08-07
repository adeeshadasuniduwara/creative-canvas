// Minimal service worker — enables "Add to Home Screen" / installability.
// Deliberately does NOT cache Firebase/API calls, only passes requests through,
// so the site always shows live data (orders, reviews, prices, etc).
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // Pass-through fetch handler (required by browsers for install prompts).
  // No caching is performed so the app always reflects live Firestore data.
});
