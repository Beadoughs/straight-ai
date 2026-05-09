import { track } from "@vercel/analytics";

type EventProperties = Record<string, string | number | boolean>;

export function trackEvent(name: string, properties?: EventProperties) {
  try {
    track(name, properties);
  } catch {
    // Keep analytics non-blocking for UX.
  }
}
