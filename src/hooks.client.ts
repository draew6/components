import * as Sentry from "@sentry/sveltekit";

// If you don't want to use Session Replay, remove the `Replay` integration, 
// `replaysSessionSampleRate` and `replaysOnErrorSampleRate` options.
Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    tracesSampleRate: 1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1,
    integrations: [new Sentry.Replay()],
    environment: import.meta.env.VITE_ENIRONMENT,
})

export const handleError = Sentry.handleErrorWithSentry();