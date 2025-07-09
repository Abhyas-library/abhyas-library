const CACHE_NAME = 'abhyas-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/h.png',
  '/o.png',
  '/home.png',
  '/1.jpg',
  '/2 (1).jpg',
  '/2 (2).jpg',
  '/v (2).jpg',
  '/video.mp4',
  '/owner.jpg'  // <-- comma added above this line
];

// Install Service Worker and cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Serve from Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
