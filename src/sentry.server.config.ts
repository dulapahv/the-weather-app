import * as Sentry from '@sentry/nextjs';

// NOTE: Disabled
const SENTRY_ENABLED: boolean = false;

if (SENTRY_ENABLED) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    enabled: process.env.NODE_ENV === 'production',
    environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
    tracesSampleRate: 1
  });
}
