// @ts-nocheck
self.addEventListener('push', (event) => {
    const payload = event.data?.text() ?? 'no payload';
    event.waitUntil(
        self.registration.showNotification('Project', {
            body: payload,
            icon: './icon-512x512.png',
            badge: './icon-96x96.png',
        })
    );
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close(); // Close the notification

    event.waitUntil(
        clients.openWindow('/') // Open your app or a specific page
    );
});