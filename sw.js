const cacheName = 'my-pwa-cache';
const cacheAssets = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  './img/icon.png'
  // Add other assets you want to cache
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(cacheAssets);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
