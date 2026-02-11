// sw.js
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { title: 'Notification', body: 'New Message!' };
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: 'https://supabase.com/favicons/favicon-32x32.png'
        })
    );
});
