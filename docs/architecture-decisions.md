# Architecture Decisions

## Product Architecture

- Next.js App Router for static + interactive marketing pages.
- Route-level separation:
  - `/` for sales narrative.
  - `/booking` for conversion handoff.
- Componentized section-based homepage for copy iteration speed.

## Integration Strategy

- External tools (Calendly, chatbot embeds) are configured through environment variables.
- Fallback behavior:
  - Booking page still renders if Calendly URL is missing, with a safe default.
  - Chatbot script loads only when URL is configured.

## Engineering Standards

- TypeScript required for app and components.
- Reusable UI lives in `components/` and `components/ui/`.
- Utility functions live in `lib/`.
- Production analytics enabled through Vercel Analytics.

## Quality Gates

- `pnpm lint` must pass before deployment.
- `pnpm build` must pass before launch.
- Manual smoke checks:
  - Homepage loads and CTA links to booking.
  - Booking page loads Calendly widget.
  - Metadata appears in page source.
