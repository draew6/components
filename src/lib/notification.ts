export async function requestNotificationPermission() {
    if (!('Notification' in window) || !('serviceWorker' in navigator)) {
        // Notifications not supported
        return false;
    }

    if (Notification.permission === 'granted') {
        // Permission already granted
        return true;
    }

    if (Notification.permission === 'denied' || Notification.permission === 'default') {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    }

    // Permission denied
    return false;
}
