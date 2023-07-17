function urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

const publicVapidKey = 'BBcXnxr_Zd66P7DPdCqNmirSoHErfjhqHSKmgItnlUVJuQbUe2it081leg4TSd4BLivyLeEU7RzG1QEKNo6049Q';


export async function getSubscription() {
    if ('serviceWorker' in navigator) {

        const registration = await navigator.serviceWorker.register('./service-worker.js', {
            scope: '/'
        });
        await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
        })
        return subscription
    }
}