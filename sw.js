self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/main.css", "./images/300x300.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            console.log('Fetch intercepted for:', e.request.url);
            return response || fetch(e.request);
        })
    );
});