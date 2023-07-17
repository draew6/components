import { post } from "./request"
import { loadingState } from "./stores"
import { getSubscription } from "./subscription"
import { requestNotificationPermission } from "./notification"
import * as Sentry from "@sentry/browser"


export const autologin = async () => {
    loadingState.set(true)
    try {
        const subscription = await getSubscription()
        const permissionGranted = await requestNotificationPermission()
        const sub = JSON.parse(JSON.stringify(subscription))
        if (sub) {
            const response = await post("/autologin", {
                body: {
                    endpoint: sub.endpoint,
                    p256dh: sub.keys.p256dh,
                    auth: sub.keys.auth
                }
            })
            loadingState.set(false)
            return response.response.ok
        }
    } catch (e: any) {
        Sentry.captureException(e)
    }
    loadingState.set(false)
    return false
}
