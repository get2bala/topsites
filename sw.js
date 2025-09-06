// Service worker that unregisters itself to rely on browser's default caching
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Clear any existing caches from previous versions
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => caches.delete(key))))
      .then(() => {
        console.log('All service worker caches have been removed');
        // Unregister this service worker
        self.registration.unregister()
          .then(() => console.log('Service worker successfully unregistered'));
      })
  );
});

// No fetch handler - will fall back to browser's default caching
