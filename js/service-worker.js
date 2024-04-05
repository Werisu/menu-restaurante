const CACHE_NAME = "menu-online-cache-v1";
const urlsToCache = [
  "/menu-restaurante/",
  "/menu-restaurante/index.html",
  "/menu-restaurante/css/main.css",
  "/menu-restaurante/js/app.js",
  "/menu-restaurante/img/logo.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
