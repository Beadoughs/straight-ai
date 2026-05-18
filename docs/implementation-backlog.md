# Implementation Backlog

## Slice 1: Foundation

- Audit and document current structure.
- Add top-level README and execution docs.
- Confirm environment variable contract for third-party embeds.

Acceptance:
- New contributor can run app locally from docs only.

## Slice 2: Conversion Flow Hardening

- Replace placeholder Calendly URL with env-driven value.
- Keep booking page copy and layout conversion-focused.
- Ensure CTA paths consistently direct to `/booking`.

Acceptance:
- Booking page always renders valid widget URL in configured environments.

## Slice 3: Operational Essentials

- Add robust metadata for SEO/social previews.
- Wire optional chatbot script loader behind env checks.
- Keep production analytics active.

Acceptance:
- Metadata and scripts are deterministic across environments.

## Slice 4: Launch Validation

- Run lint and build checks.
- Execute launch checklist and record outcomes.
- Prepare rollback and monitoring ownership.

Acceptance:
- Launch checklist items are verified and signed off.
