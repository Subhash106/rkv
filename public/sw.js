self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing service worker...', event);
  event.waitUntil(
    caches.open('precache').then(function (cache) {
      cache.addAll([
        '/',
        './index.html',
        '../dist/bundle.js',
        './img/logo.jpg',
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
      ]);
    })
  );
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating service worker...', event);

  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});
