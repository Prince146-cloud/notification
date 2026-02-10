// sw.js
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { title: 'Security Alert', body: 'Immediate action required!' };
    
    const options = {
        body: data.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/564/564619.png', // A warning icon
        vibrate: [200, 100, 200],
        data: { url: 'https://google.com' } // Where you go if you click
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
});
