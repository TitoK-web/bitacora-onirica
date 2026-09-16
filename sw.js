// Service worker mínimo: solo existe para que el navegador
// considere la página "instalable" como app. Sin caché offline por ahora.
self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);
  // Solo tocamos las peticiones a nuestra propia web (los archivos de la app).
  // Las peticiones a otros sitios (como la API de Gemini) las dejamos pasar
  // sin intervenir: interceptarlas aquí es lo que causaba el error
  // "FetchEvent.respondWith received an error: TypeError: Load failed".
  if (url.origin !== self.location.origin) return;
  e.respondWith(fetch(e.request));
});
