// Service worker mínimo: solo existe para que el navegador
// considere la página "instalable" como app. Sin caché offline por ahora.
self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  e.respondWith(fetch(e.request));
});
