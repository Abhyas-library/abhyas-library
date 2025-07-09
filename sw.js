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
  '/owner.jpg'
];

// ✅ Combined install event
self.addEventListener('install', event => {
  console.log('SW installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching files...');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // activate immediately
});

// ✅ Activate event
self.addEventListener('activate', event => {
  console.log('SW activating...');
  event.waitUntil(clients.claim()); // take control immediately
});

// ✅ Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
