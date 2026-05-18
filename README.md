# Straight AI Website

Marketing site and booking funnel for Straight AI, built with Next.js App Router.

## Quick Start

1. Install dependencies:
   - `pnpm install`
2. Run locally:
   - `pnpm dev`
3. Open:
   - `http://localhost:3000`

## Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-team/intro-call
NEXT_PUBLIC_CHATBOT_SCRIPT_URL=
NEXT_PUBLIC_CHATBOT_ID=
```

- `NEXT_PUBLIC_CALENDLY_URL`: booking widget URL used on `/booking`.
- `NEXT_PUBLIC_CHATBOT_SCRIPT_URL`: optional embed script URL for chatbot provider.
- `NEXT_PUBLIC_CHATBOT_ID`: optional widget ID used by supported chatbot providers.

## Planning and Delivery Docs

- `docs/discovery.md`
- `docs/mvp-scope.md`
- `docs/architecture-decisions.md`
- `docs/implementation-backlog.md`
- `docs/launch-checklist.md`
