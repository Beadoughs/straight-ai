# Launch Checklist

## Environment and Secrets

- [ ] Set `NEXT_PUBLIC_CALENDLY_URL` in production environment.
- [ ] Set optional chatbot values if chatbot is enabled.
- [ ] Verify no placeholder URLs remain in production build.

## Build and Quality

- [ ] `pnpm install` completes.
- [ ] `pnpm lint` passes with no errors.
- [ ] `pnpm build` completes successfully.

## Functional Smoke Tests

- [ ] Homepage loads and sections render.
- [ ] Primary CTA routes to `/booking`.
- [ ] Booking page loads Calendly widget correctly.
- [ ] Mobile viewport layout remains usable on homepage and booking.

## SEO and Analytics

- [ ] Page title and description match final offer.
- [ ] Open Graph/Twitter metadata populated.
- [ ] Vercel Analytics appears in production.

## Post-Launch Operations

- [ ] Assign owner for first 72h monitoring.
- [ ] Define rollback trigger and rollback operator.
- [ ] Capture first-week metrics (traffic, CTA click-through, bookings).
