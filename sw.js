const CACHE_NAME = 'kum-meditation-v2';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './sounds.js',
    './readings.js',
    './chants.js',
    './icon.svg',
    './manifest.json',
];

// Install: cache all assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
            )
        )
    );
    self.clients.claim();
});

// Fetch: network-first strategy (cache is the offline fallback)
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    // Recordings are streamed (range requests) straight from the network
    if (new URL(event.request.url).pathname.endsWith('.mp3')) return;
    event.respondWith(
        fetch(event.request, { cache: 'no-cache' }).then((response) => {
            // Keep the offline copy up to date
            if (response.status === 200) {
                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return response;
        }).catch(() => caches.match(event.request))
    );
});
