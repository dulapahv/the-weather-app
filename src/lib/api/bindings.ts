import 'server-only';

import { getCloudflareContext } from '@opennextjs/cloudflare';

import type { RateLimitStore } from './rate-limit';

// NOTE: Disabled
const KV_DISABLED: boolean = true;

export const getRateLimitStore = (): RateLimitStore | undefined => {
  if (KV_DISABLED) return undefined;

  try {
    return (getCloudflareContext().env as { RATE_LIMIT_KV?: RateLimitStore }).RATE_LIMIT_KV;
  } catch {
    return undefined;
  }
};
