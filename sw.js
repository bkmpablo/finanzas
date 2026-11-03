// Cambia la versión cada vez que subas cambios para forzar la actualización
const CACHE = 'finanzas-v6';
const FILES = ['./', './index.html', './manifest.json', './apple-touch-icon.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Solo se gestionan los archivos de la propia app. Las llamadas a otros
  // servidores (cotizaciones, etc.) pasan de largo: si se interceptaran, un
  // error de red acabaría devolviéndoles el index.html como si fuera la respuesta.
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Red primero, para recibir actualizaciones; caché si no hay conexión.
  e.respondWith(
    fetch(req).then(r => {
      if (r.ok && r.type === 'basic') {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return r;
    }).catch(async () => {
      const hit = await caches.match(req);
      if (hit) return hit;
      // Sin conexión y sin copia: solo al abrir la app se devuelve la página.
      if (req.mode === 'navigate') {
        const home = await caches.match('./index.html');
        if (home) return home;
      }
      return Response.error();
    })
  );
});
